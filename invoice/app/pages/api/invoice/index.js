export const config = {
    api: {
      bodyParser: false,
    },
  };

const puppeteer = require('puppeteer');
const fs = require('fs')
const archiver = require('archiver');
const XLSX = require('xlsx');

const TEMPLATE = fs.readFileSync('pages/api/invoice/invoice_template.html').toString()
const SIGN_BINARY = fs.readFileSync('pages/api/invoice/sign.jpeg').toString('base64')

async function buffer(readable) {
    const chunks = [];
    for await (const chunk of readable) {
      chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
    }
    return Buffer.concat(chunks);
}

export default async (req,res)=> {
    // const invoiceStartSeq = parseInt(req.query.invoiceStartSeq)
    const billingDate = parseInt(req.query.billingDate)

    const suffix = new Date().getTime()
    const input = `input_${suffix}.xlsx`
    const buf = await buffer(req);
    fs.writeFileSync(input, buf)
    const data = readWorkbook(input)
    console.log(new Date(), 'Read data from workbook')

    const invoiceTrackerSheet = data.workbook.Sheets['Invoice tracker']
    const invoiceStartSeq = parseInt(XLSX.utils.sheet_to_json(invoiceTrackerSheet, { header: 1 })[0][0]) + 1
    console.log(new Date(), 'Determined next invoice seq number as', invoiceStartSeq)
    
    const startFirstDayOfPrevMonth = new Date(new Date(billingDate).getFullYear(), new Date(billingDate).getMonth() - 1, 1)
    const folder = `invoices_${suffix}`
    try{fs.mkdirSync(folder)}catch(e){}

    const combs = data.entity.map(entity => Object.keys(ReportType).map(rt => Object.keys(InvoiceType).map(it => [entity, it, rt])).flat(1)).flat(1)

    const htmls = (await Promise.all(combs.map(comb => generateHTMLSkipInvoiceNumber(data.input, comb[0], new Date(billingDate), ReportType[comb[2]], InvoiceType[comb[1]], folder, startFirstDayOfPrevMonth)))).filter(r => r!== undefined)
    
    const chunkSize = 4;
    let nextInvNum = invoiceStartSeq
    const invoiceTrackerDetails = []
    for (let i = 0; i < htmls.length; i += chunkSize) {
        const chunk = htmls.slice(i, i + chunkSize);
        const invoiceNumber = (content, invoiceNum) => {
            const nextNum = '000000' + invoiceNum
            return `${content.invoiceType[0]}${nextNum.substring(nextNum.length-6)}`
        }
        await Promise.all(chunk.map(async (content, idx) => {
            const inum = invoiceNumber(content, nextInvNum + idx)
            const totals = generateExcel(content, inum, folder)
            invoiceTrackerDetails.push([`${content.entity.code} ${content.entity.state}`, content.subjectMonth, inum, content.invoiceName, content.invoiceBillingDate].concat(totalsToInt(totals, 1)))
            return await generatePDFFile(content, inum, folder)
        }))
        nextInvNum += chunk.length
    }
    console.log(new Date(), 'Started writing new workbook')
    XLSX.utils.sheet_add_aoa(invoiceTrackerSheet, invoiceTrackerDetails, {origin: 'B'+(invoiceStartSeq+2)})
    XLSX.writeFileXLSX(data.workbook, `${folder}/input.xlsx`)
    console.log(new Date(), 'Completed writing new workbook')

    var archive = archiver('zip');
    res.setHeader('Content-Type', 'applicaiton/octect-stream');
    res.setHeader('Content-Disposition', `attachment; filename=${folder}.zip`);
    res.on('close', function () {try{fs.rmSync(folder, { recursive: true, force: true }); fs.rm(input)} catch(e){console.log(e)}})
    res.on('error', function(err){console.log(err);res.status(500).json({"message": "Failed to generate invoice zip"});})
    archive.pipe(res);
    archive.directory(folder, false);
    archive.finalize();
}

function totalsToInt(arr, startIdx) {
    return arr.slice(startIdx).map(r => parseInt(r.replaceAll(',','')))
}

function generateExcel(invoice, invoiceNumber, folder) {
    const wb = XLSX.utils.book_new();

    const rowData = row => {
        const percent = val => val > 0 ? Math.round((val/row[1])*100) + '%' : '-'
        return ["",row[0],InvoiceType[invoice.invoiceType][1],row[1],percent(row[2]),row[2],percent(row[3]),row[3],percent(row[4]),row[4],percent(row[5]),row[5],row[6]]
    }

    const totals = invoice.totals
    const sheet_data = [
        ["","", "","Examanious Private Limited\nRegd. Off. :107. Lotus Business Park, Malad West, S V Road, Mumbai - 400 064\nTel.: +91-7710024817 • Email: nihir@leaze9.com • www.leaze9.com"],
        [],
        [],
        ["","", "","Tax Invoice"],
        [],
        ["", "Examanious Pvt Ltd GST","", "27AAGCE9870P1ZP","", `${invoice.entity.name} GST`,"","", invoice.entity.gst],
        ["", "Examanious Pvt Ltd PAN","", "AAGCE9870P","", `${invoice.entity.name} PAN`,"","", invoice.entity.pan],
        ["", "Invoice #","", invoiceNumber,"", `${invoice.entity.name} Address`,"","", invoice.entity.address],
        ["", "Invoice ref #","", invoice.invoiceName,""],
        ["", "Invoice date","", invoice.invoiceDate,""],
        [],
        ["",invoice.invoiceSubject],
        ["","Charge Name","HSN Code", "Taxable Amount","CGST","CGST %","SGST","SGST %","IGST","IGST %","Cess","Cess %","Total"],
    ].concat(invoice.rowValues.map(rowData)).concat([[], ["",totals[0],"",totals[1],totals[2],"",totals[3],"", totals[4],"",totals[5],"",totals[6],""]])
    const merge = [
        { s: { r: 0, c: 3 }, e: { r: 2, c: 8 } },
        { s: { r: 3, c: 3 }, e: { r: 3, c: 8 } },
        { s: { r: 5, c: 1 }, e: { r: 5, c: 2 } },{ s: { r: 5, c: 3 }, e: { r: 5, c: 4 } },{ s: { r: 5, c: 5 }, e: { r: 5, c: 7 } },{ s: { r: 5, c: 8 }, e: { r: 5, c: 11 } },
        { s: { r: 6, c: 1 }, e: { r: 6, c: 2 } },{ s: { r: 6, c: 3 }, e: { r: 6, c: 4 } },{ s: { r: 6, c: 5 }, e: { r: 6, c: 7 } },{ s: { r: 6, c: 8 }, e: { r: 6, c: 11 } },
        { s: { r: 7, c: 1 }, e: { r: 7, c: 2 } },{ s: { r: 7, c: 3 }, e: { r: 7, c: 4 } },{ s: { r: 7, c: 5 }, e: { r: 9, c: 7 } },{ s: { r: 7, c: 8 }, e: { r: 9, c: 11 } },
        { s: { r: 8, c: 1 }, e: { r: 8, c: 2 } },{ s: { r: 8, c: 3 }, e: { r: 8, c: 4 } },
        { s: { r: 9, c: 1 }, e: { r: 9, c: 2 } },{ s: { r: 9, c: 3 }, e: { r: 9, c: 4 } },
        { s: { r: 10, c: 1 }, e: { r: 10, c: 11 } }
    ];

    const ws = XLSX.utils.aoa_to_sheet(sheet_data)
    ws["!merges"] = merge;
    XLSX.utils.book_append_sheet(wb, ws, invoice.invoiceName)
    XLSX.writeFile(wb, `${folder}/Invoice_${invoice.invoiceName}_${invoiceNumber}.xlsx`);
    return totals
}


const ReportType = {
    P1: "P1",
    P2: "P2"
}

const InvoiceType = {
    LR  : ["LR" , "9973", "Lease Rental", [74, 76, 77, 78, 79, 80]],
    FMS : ["FMS", "9997", "Fleet Management Service", [81, 83, 84, 85, 0, 86]],
    RTR : ["RTR", "", "Road Tax Recovery", [88, 0, 0, 0, 0, 88]],
    IR  : ["IR" , "", "Insurance Recovery", [87, 0, 0, 0, 0, 87]]
}

async function generatePDFFile(content, invoiceNumber, folder) {
    async function generatePDFfromHTML(htmlContent, outputPath) {
        const browser = await puppeteer.launch({headless: true, args: ['--no-sandbox']});
        const page = await browser.newPage();
        await page.setContent(htmlContent);
        await page.pdf({ path: outputPath, format: 'A4', margin: {
            top: 50,
            bottom: 20,
            left: 20,
            right: 0,
          } });
        await browser.close();
    }
    return await generatePDFfromHTML(content.html.replace('$INVOICE_NUMBER', invoiceNumber), `${folder}/Invoice_${content.invoiceName}_${invoiceNumber}.pdf`)
        .then(() => {
            console.log("PDF Generated with invoice ", invoiceNumber)
            return 1
        })
        .catch(err => {
            console.error('Error generating PDF:', err)
            return 0
        });
}

async function generateHTMLSkipInvoiceNumber(allRows, entity, invoiceBillingDate, reportType, invoiceType, folder, startFirstDayOfPrevMonth) {
    const invoiceDate = new Intl.DateTimeFormat('en-US', {dateStyle: 'medium'}).format(invoiceBillingDate)
    const month = invoiceBillingDate.toLocaleString('default', { month: 'short' });
    const year = (invoiceBillingDate.getFullYear()+"").substring(2)
    const prevMonth = startFirstDayOfPrevMonth.toLocaleString('default', { month: 'short' });
    const prevMonthYear = (startFirstDayOfPrevMonth.getFullYear()+"").substring(2)
    const rows = reportType === 'P1' ? filterRowsForP1(allRows.filter(r => r[4] === entity.code && r[5] === entity.state), invoiceBillingDate.getTime(),
                                         invoiceType[0]) : filterRowsForP2(allRows.filter(r => r[4] === entity.code && r[5] === entity.state), startFirstDayOfPrevMonth.getTime())
    
    const colHtml = row => {
        const percent = val => val > 0 ? Math.round((val/row[1])*100) + '%' : '-'
        
        return `<tr><td><p>${row[0]}</p></td><td><p>${invoiceType[1]}</p></td><td><p>${row[1].toLocaleString("en-IN")}</p></td>` +
        `<td><p>${percent(row[2])}</p></td><td><p>${row[2].toLocaleString("en-IN")}</p></td><td><p>${percent(row[3])}</p></td><td><p>${row[3].toLocaleString("en-IN")}</p></td>`+
        `<td><p>${percent(row[4])}</p></td><td><p>${row[4].toLocaleString("en-IN")}</p></td><td><p>${percent(row[5])}</p></td><td><p>${row[5].toLocaleString("en-IN")}</p></td>`+
        `<td><p>${row[6].toLocaleString("en-IN")}</p></td></tr>`
    }

    const entityRows = rows.filter(r => r[4] === entity.code && r[5] === entity.state)

    if(entityRows.length === 0) return undefined

    const rowValues = entityRows.map(row => [row[1], Math.round(row[invoiceType[3][0]] || 0), Math.round(row[invoiceType[3][1]] || 0),
                                        Math.round(row[invoiceType[3][2]]) || 0, Math.round(row[invoiceType[3][3]] || 0),
                                        Math.round(row[invoiceType[3][4]]) || 0, Math.round(row[invoiceType[3][5]] || 0)]).filter(r => r[6] > 0)
    if(rowValues.length === 0) return undefined

    const invoiceName = `${entity.code}${entity.state}${reportType === 'P1' ? month:prevMonth}${reportType === 'P1' ?year:prevMonthYear}${invoiceType[0]}${reportType}`.toUpperCase()
    const totals = rowValues.reduce((a,b) => ['Total',a[1]+b[1],a[2]+b[2],a[3]+b[3],a[4]+b[4],a[5]+b[5],a[6]+b[6]], ['',0,0,0,0,0,0])
                            .map(v => v.toLocaleString("en-IN"))

    const totalRowHtml = `<tr class="details_total"><td><p>${totals[0]}</p></td><td><p>&nbsp;</p></td><td><p>${totals[1]}</p></td>` +
    `<td><p>&nbsp;</p></td><td><p>${totals[2]}</p></td><td><p>&nbsp;</p></td><td><p>${totals[3]}</p></td>`+
    `<td><p>&nbsp;</p></td><td><p>${totals[4]}</p></td><td><p>&nbsp;</p></td><td><p>${totals[5]}</p></td>`+
    `<td><p>${totals[6]}</p></td></tr>`

    const subjectMonth = reportType === 'P1' ? `${month}'${year}`: `${prevMonth}'${prevMonthYear}`

    let htmlContent = TEMPLATE.replaceAll('$ENTITY_NAME',entity.name).replaceAll('$ENTITY_GST',entity.gst)
                        .replace('$ENTITY_PAN',entity.pan).replace('$ENTITY_ADDRESS',entity.address)
                        .replaceAll('$INVOICE_NAME', invoiceName).replaceAll('$INVOICE_DATE', invoiceDate)
                        .replace("$INVOICE_SUBJECT", `${invoiceType[2]} due for the month of ${subjectMonth} (INR)`)
                        .replace("$DETAILS", rowValues.map(colHtml).join('')+totalRowHtml).replace('$SIGN_BINARY', SIGN_BINARY)
    
    // fs.writeFileSync(`${folder}/invoice_${invoiceName}.html`, htmlContent)
    return {
        html: htmlContent,
        invoiceName: invoiceName,
        invoiceDate: invoiceDate,
        invoiceType: invoiceType[0],
        invoiceSubject: `${invoiceType[2]} due for the month of ${subjectMonth} (INR)`,
        subjectMonth: (reportType === 'P1' ? invoiceBillingDate: startFirstDayOfPrevMonth),
        invoiceBillingDate: invoiceBillingDate,
        entityRows: entityRows,
        rowValues: rowValues,
        totals: totals,
        entity: entity
    }
}

function filterRowsForP1(inputData, billingDate, invoiceType) {
    const filterRow = row => {
        return (invoiceType !== 'IR' ? new Date(row[6]).getTime() <= billingDate : (new Date(row[6]).getTime() >= billingDate && new Date(row[6]).getTime() <= billingDate + 86400000))
            && (invoiceType !== 'IR' ? new Date(row[44]).getTime() <= billingDate : new Date(row[44]).getTime() < billingDate)
            && new Date(row[7]).getTime() > billingDate 
            && new Date(row[8]).getTime() > billingDate 
            && parseInt(row[9]) === 1
    }
    return inputData.filter(filterRow)
}

function filterRowsForP2(inputData, startFirstDayOfPrevMonth) {
    const filterRow = row => {
        return (new Date(row[6]).getTime() >= startFirstDayOfPrevMonth && new Date(row[6]).getTime() <= startFirstDayOfPrevMonth + 86400000)
            && new Date(row[44]).getTime() >= startFirstDayOfPrevMonth
            && new Date(row[7]).getTime() > startFirstDayOfPrevMonth + 86400000
            && new Date(row[8]).getTime() > startFirstDayOfPrevMonth + 86400000
            && parseInt(row[9]) === 1
    }
    return inputData.filter(filterRow)
}

function readWorkbook(file) {
    const workbook = XLSX.readFile(file, { raw:false,type: 'binary', cellDates: true, cellNF: false, cellText: false });
    const dataSheet = workbook.Sheets[workbook.SheetNames[0]]
    const entitySheet = workbook.Sheets[workbook.SheetNames[1]]
    console.log(new Date(), 'Reading data sheet')
    const entityData = XLSX.utils.sheet_to_json(entitySheet, { header: 1 });
    console.log(new Date(), 'Reading entity sheet')
    const inputData = XLSX.utils.sheet_to_json(dataSheet, { header: 1 });
    return {
        "entity": entityData.filter(r => r.length > 0 && r[1] != 'Client Name').map(r => {
            return {name: r[1], code: r[2], state: r[3], address: r[4], gst: r[5], pan: r[6]}
        }),
        "input": inputData,
        workbook: workbook
    }
}
