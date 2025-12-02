import puppeteer from "puppeteer";
export const config = {
    api: {
        responseLimit: false,
        bodyParser: false,
    },
  };

const fs = require('fs')
const archiver = require('archiver');
const XLSX = require('xlsx');

const TEMPLATE = fs.readFileSync('pages/api/invoice/invoice_template.html').toString()
const SIGN_BINARY = fs.readFileSync('pages/api/invoice/sign.jpeg').toString('base64')

let sharedBrowser = null;
async function getBrowser() {
    if (!sharedBrowser) {
        sharedBrowser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
    }
    return sharedBrowser;
}
async function buffer(readable) {
    const chunks = [];
    for await (const chunk of readable) {
      chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
    }
    return Buffer.concat(chunks);
}
// Helper: standard, production-safe concurrency limiter
async function runWithConcurrencyLimit(limit, tasks) {
  const results = [];
  const executing = new Set();

  for (const task of tasks) {
    const p = Promise.resolve().then(task);
    results.push(p);
    executing.add(p);

    // Remove finished task from set
    const clean = () => executing.delete(p);
    p.then(clean).catch(clean);

    // If we're at limit, wait for one to finish
    if (executing.size >= limit) {
      await Promise.race(executing);
    }
  }

  return Promise.all(results);
}
export default async function handler(req, res) {
// export default async (req,res)=> {
    // const invoiceStartSeq = parseInt(req.query.invoiceStartSeq)
    const billingDateRaw = req.query.billingDate;
    const billingDate = Number(billingDateRaw);

    console.log('Billing Date (raw):', billingDateRaw, 'parsed:', billingDate);
    if (!billingDateRaw || Number.isNaN(billingDate)) {
        console.error('Invalid billingDate received:', billingDateRaw);
        return res.status(400).json({ message: 'Invalid or missing billingDate query parameter' });
    }
    const processByBank = req.query.processbyBank === 'true';
    const suffix = new Date().getTime()
    const input = `input_${suffix}.xlsx`
    const buf = await buffer(req);
    console.log('Received body length:', buf.length);
    if (buf.length === 0) {
        console.error("Empty body received — Chrome/proxy may be blocking upload");
        return res.status(400).json({ message: "Uploaded file body is empty" });
    }
    // console.log('Billing Date (timestamp):', billingDate); 
    console.log('Process by Lender:', processByBank);
    fs.writeFileSync(input, buf)
    const data = readWorkbook(input)
    console.log(new Date(), 'Read data from workbook')

    const invoiceTrackerSheet = data.workbook.Sheets['Invoice tracker']
    const invoiceStartSeq = parseInt(XLSX.utils.sheet_to_json(invoiceTrackerSheet, { header: 1 })[0][0]) + 1
    console.log(new Date(), 'Determined next invoice seq number as', invoiceStartSeq)

    // const startFirstDayOfPrevMonth = new Date(new Date(billingDate).getFullYear(), new Date(billingDate).getMonth() - 1, 1)
    const userBillingDate = new Date(billingDate); // Keep user's selected date intact

    let invoiceDate;
    if (userBillingDate.getDate() <= 10) {
        // 1st–10th → same month
        invoiceDate = new Date(userBillingDate.getFullYear(), userBillingDate.getMonth(), 1);
    } else {
        // 11th–31st → next month
        invoiceDate = new Date(userBillingDate.getFullYear(), userBillingDate.getMonth() + 1, 1);
    }

    // Keep first day of previous month logic for comparison/filtering
    const startFirstDayOfPrevMonth = new Date(invoiceDate.getFullYear(), invoiceDate.getMonth() - 1, 1);

    console.log(`[${new Date().toISOString()}] Selected Billing Date: ${userBillingDate.toDateString()}`);
    console.log(`[${new Date().toISOString()}] Invoice Generation Date: ${invoiceDate.toDateString()}`);
    console.log(`[${new Date().toISOString()}] Previous Month Start: ${startFirstDayOfPrevMonth.toDateString()}`);
    const folder = `invoices_${suffix}`
    try{fs.mkdirSync(folder)}catch(e){}

    // const combs = data.entity.map(entity => Object.keys(ReportType).map(rt => Object.keys(InvoiceType).map(it => [entity, it, rt])).flat(1)).flat(1)
    let combs = [];
    if (processByBank) {
        // Group by Entity + Bank combination (all employees of that entity-bank form one invoice)
        for (const entity of data.entity) {
            const entityRows = data.input.filter(
                r =>
                    r[4] === entity.code &&
                    r[5] === entity.state &&
                    (r[37] ? String(r[37]).trim() : "") !== "" // ensure bank column exists
            );
            // Collect all distinct banks for that entity
            const processingBanks = [
                ...new Set(
                    entityRows
                    .map(r =>
                        r[37] && String(r[37]).trim() !== ''
                        ? String(r[37]).trim()
                        : 'Other'
                    )
                    .filter(Boolean)
                ),
            ];
            // const processingBanks = [...new Set(entityRows.map(r => (r[37]?.trim() || 'Other')))];
            // Each bank in the entity will have one combined invoice
            for (const bank of processingBanks) {
                for (const rt of Object.keys(ReportType)) {
                    for (const it of Object.keys(InvoiceType)) {
                        combs.push([entity, it, rt, bank]);
                    }
                }
            }
        }
    } else {
        // Normal mode — one invoice per entity
        combs = data.entity
            .map(entity =>
                Object.keys(ReportType)
                    .map(rt =>
                        Object.keys(InvoiceType).map(it => [entity, it, rt, null])
                    )
                    .flat(1)
            )
            .flat(1);
    }
    // const htmls = (await Promise.all(combs.map(comb => generateHTMLSkipInvoiceNumber(data.input, comb[0], new Date(billingDate), ReportType[comb[2]], InvoiceType[comb[1]], folder, startFirstDayOfPrevMonth)))).filter(r => r!== undefined)
    const htmls = (await Promise.all(
        combs.map(comb =>
            generateHTMLSkipInvoiceNumber(
                data.input,
                comb[0],
                // new Date(billingDate),
                new Date(invoiceDate),
                ReportType[comb[2]],
                InvoiceType[comb[1]],
                folder,
                startFirstDayOfPrevMonth,
                comb[3], // pass processing bank
                userBillingDate
            )
        )
    )).filter(r => r !== undefined);
    // const chunkSize = 4;
    const concurrencyLimit = 5;
    let nextInvNum = invoiceStartSeq
    const invoiceTrackerDetails = []
    const invoiceNumber = (content, invoiceNum) => {
        const nextNum = '000000' + invoiceNum;
        return `${content.invoiceType[0]}${nextNum.substring(nextNum.length - 6)}`;
    };
    // for (let i = 0; i < htmls.length; i += chunkSize) {
    //     const chunk = htmls.slice(i, i + chunkSize);
    //     const invoiceNumber = (content, invoiceNum) => {
    //         const nextNum = '000000' + invoiceNum
    //         return `${content.invoiceType[0]}${nextNum.substring(nextNum.length-6)}`
    //     }
    //     await Promise.all(chunk.map(async (content, idx) => {
    //         const inum = invoiceNumber(content, nextInvNum + idx)
    //         const totals = generateExcel(content, inum, folder)
    //         invoiceTrackerDetails.push([`${content.entity.code} ${content.entity.state}`, content.subjectMonth, inum, content.invoiceName, content.invoiceBillingDate].concat(totalsToInt(totals, 1)))
    //         return await generatePDFFile(content, inum, folder)
    //     }))
    //     nextInvNum += chunk.length
    // }
    await runWithConcurrencyLimit(
        concurrencyLimit,
        htmls.map((content, idx) => async () => {
            try {
            const inum = invoiceNumber(content, nextInvNum + idx);
            console.log(`[${new Date().toISOString()}] [START] Invoice ${inum} for ${content.entity.name}`);

            const totals = generateExcel(content, inum, folder);
            invoiceTrackerDetails.push([
                `${content.entity.code} ${content.entity.state}`,
                content.subjectMonth,
                inum,
                content.invoiceName,
                content.invoiceBillingDate,
            ].concat(totalsToInt(totals, 1)));

            await generatePDFFile(content, inum, folder);
            console.log(`[${new Date().toISOString()}] [DONE] Invoice ${inum}`);
            } catch (err) {
            console.error(`[${new Date().toISOString()}] [ERROR] Generating invoice:`, err);
            }
        })
    );
    console.log(new Date(), 'Started writing new workbook')
    XLSX.utils.sheet_add_aoa(invoiceTrackerSheet, invoiceTrackerDetails, {origin: 'B'+(invoiceStartSeq+2)})
    XLSX.writeFileXLSX(data.workbook, `${folder}/input.xlsx`)
    console.log(new Date(), 'Completed writing new workbook')

    var archive = archiver('zip');
    // fix: content-type spelling
    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader('Content-Disposition', `attachment; filename=${folder}.zip`);
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Transfer-Encoding', 'chunked');
    res.flushHeaders();

    res.on('close', function () {try{fs.rmSync(folder, { recursive: true, force: true }); fs.unlinkSync(input);console.log("Temp folder and file cleaned up");} catch(e){console.log(e)}})
    // res.on('error', function(err){console.log(err);res.status(500).json({"message": "Failed to generate invoice zip"});})
    res.on('error', function (err) {
        console.error("Invoice ZIP Stream Error:", err.message);
        console.error(err.stack);
        res.status(500).json({ message: `Failed to generate invoice zip`, error: err.message});
    });
    archive.pipe(res);
    archive.directory(folder, false);
    archive.finalize();
}

function totalsToInt(arr, startIdx) {
    return arr.slice(startIdx).map(r => parseInt(r.replaceAll(',','')))
}
// and always moves that prefix to the end of the filename.
function getInvoiceFilename(invoiceNumber, invoiceName, processingBank, ext, folder = "") {
    // Extract any alphabetic prefix (like L, R, X, etc.)
    const prefixMatch = invoiceNumber.match(/^([A-Za-z]+)(\d+)$/);
    let cleanNumber = invoiceNumber;
    let suffixLetter = '';

    if (prefixMatch) {
        suffixLetter = prefixMatch[1]; // e.g. 'L'
        cleanNumber = prefixMatch[2];  // e.g. '001383'
    }

    // Build base filename according to your pattern:
    let baseName = `${cleanNumber}_Invoice_${invoiceName}_${suffixLetter}${cleanNumber}`;

    // Append processing bank if available
    if (processingBank && !invoiceName.includes(processingBank)) {
        const cleanBank = processingBank.replace(/[^a-zA-Z0-9]/g, '');
        baseName += `_${cleanBank}`;
    }

    // Add extension and optional folder prefix
    const fileName = folder ? `${folder}/${baseName}.${ext}` : `${baseName}.${ext}`;

    console.log(`[getInvoiceFilename] Final filename: ${fileName}`);
    return fileName;
}
function generateExcel(invoice, invoiceNumber, folder) {
    // console.time(`Excel_${invoiceNumber}`);
    const wb = XLSX.utils.book_new();

    const rowData = row => {
        const percent = val => val > 0 ? Math.round((val/row[1])*100) + '%' : '-'
        return ["",row[0],InvoiceType[invoice.invoiceType][1],row[1],percent(row[2]),row[2],percent(row[3]),row[3],percent(row[4]),row[4],percent(row[5]),row[5],row[6]]
    }

    const totals = invoice.totals
    const sheet_data = [
        // ["","", "","Testanious Private Limited\nRegd. Off. :107. Business Park, Mumbai - 400 064\nTel.: +91-9876543210 • Email: test9@test9.com • www.test9.com"],
        // [],
        // [],
        // ["","", "","Tax Invoice"],
        // [],
        // ["", "Testanious Pvt Ltd GST","", "FDG24554870P1ZP","", `${invoice.entity.name} GST`,"","", invoice.entity.gst],
        // ["", "Testanious Pvt Ltd PAN","", "FGH465651","", `${invoice.entity.name} PAN`,"","", invoice.entity.pan],
        // ["", "Invoice #","", invoiceNumber,"", `${invoice.entity.name} Address`,"","", invoice.entity.address],
        // ["", "Ref #","", invoice.invoiceName,""],
        // ["", "Invoice date","", invoice.invoiceDate,""],
        // [],
        // ["",invoice.invoiceSubject],
        // ["","Charge Name","HSN Code", "Taxable Amount","CGST","CGST %","SGST","SGST %","IGST","IGST %","Cess","Cess %","Total"],
        ["","", "","Examanious Private Limited\nRegd. Off. :107. Lotus Business Park, Malad West, S V Road, Mumbai - 400 064\nTel.: +91-7710024817 • Email: nihir@leaze9.com • www.leaze9.com"],
        [],
        [],
        ["","", "","Tax Invoice"],
        [],
        ["", "Examanious Pvt Ltd GST","", "27AAGCE9870P1ZP","", `${invoice.entity.name} GST`,"","", invoice.entity.gst],
        ["", "Examanious Pvt Ltd PAN","", "AAGCE9870P","", `${invoice.entity.name} PAN`,"","", invoice.entity.pan],
        ["", "Invoice #","", invoiceNumber,"", `${invoice.entity.name} Address`,"","", invoice.entity.address],
        ["", "Ref #","", invoice.invoiceName,""],
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
    const excelPath = getInvoiceFilename(invoiceNumber, invoice.invoiceName, invoice.processingBank, "xlsx", folder);
    XLSX.writeFile(wb, excelPath);
    // console.timeEnd(`Excel_${invoiceNumber}`);
    console.log(`[${new Date().toISOString()}] Completed generateExcel for Invoice: ${invoiceNumber}`);
    // XLSX.writeFile(wb, `${folder}/Invoice_${invoice.invoiceName}_${invoiceNumber}.xlsx`);
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
    // console.log(`[${new Date().toISOString()}] Starting generatePDFFile for Invoice: ${invoiceNumber}`);
    // console.time(`PDF_${invoiceNumber}`);
    const outputPath = `${getInvoiceFilename(invoiceNumber, content.invoiceName, content.processingBank, "pdf", folder)}`;
    const htmlContent = content.html.replace('$INVOICE_NUMBER', invoiceNumber);
    try {
        const browser = await puppeteer.launch({
            headless: true,
            args: ["--no-sandbox", "--disable-setuid-sandbox"],
        });
        const page = await browser.newPage();

        await page.setContent(htmlContent, { waitUntil: "networkidle0" });
        await page.pdf({
            path: outputPath,
            format: "A4",
            printBackground: true,
            margin: { top: 50, bottom: 20, left: 20, right: 0 },
        });

        await browser.close();
        console.log("PDF Generated:", outputPath);

        // console.timeEnd(`PDF_${invoiceNumber}`);
        return 1;
    } catch (err) {
        console.error(`[${new Date().toISOString()}] Error generating PDF for ${invoiceNumber}:`, err);
        // console.timeEnd(`PDF_${invoiceNumber}`);
        return 0;
    }
}

async function generateHTMLSkipInvoiceNumber(allRows, entity, invoiceBillingDate, reportType, invoiceType, folder, startFirstDayOfPrevMonth, processingBank = null, actualBillingDate = null) {
    // const invoiceDate = new Intl.DateTimeFormat('en-IN', {dateStyle: 'medium'}).format(invoiceBillingDate)
    const invoiceDate = new Intl.DateTimeFormat('en-IN', {dateStyle: 'medium'}).format(actualBillingDate )
    const month = invoiceBillingDate.toLocaleString('default', { month: 'short' });
    const year = (invoiceBillingDate.getFullYear()+"").substring(2)
    const prevMonth = startFirstDayOfPrevMonth.toLocaleString('default', { month: 'short' });
    const prevMonthYear = (startFirstDayOfPrevMonth.getFullYear()+"").substring(2)
    // const rows = reportType === 'P1' ? filterRowsForP1(allRows.filter(r => r[4] === entity.code && r[5] === entity.state), invoiceBillingDate.getTime(),
    //                                      invoiceType[0]) : filterRowsForP2(allRows.filter(r => r[4] === entity.code && r[5] === entity.state), startFirstDayOfPrevMonth.getTime())
    const rows = reportType === 'P1'
    ? filterRowsForP1(
        allRows.filter(
            r =>
            r[4] === entity.code &&
            r[5] === entity.state &&
            (!processingBank ||
                (r[37] && String(r[37]).trim() === String(processingBank).trim()))
        ),
        invoiceBillingDate.getTime(),
        invoiceType[0]
        )
    : filterRowsForP2(
        allRows.filter(
            r =>
            r[4] === entity.code &&
            r[5] === entity.state &&
            (!processingBank ||
                (r[37] && String(r[37]).trim() === String(processingBank).trim()))
        ),
        startFirstDayOfPrevMonth.getTime()
        );
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
    // const bankSuffix = processingBank ? `_${processingBank.replace(/[^a-zA-Z0-9]/g, '')}` : '';
    // const invoiceName = `${entity.code}${entity.state}${reportType === 'P1' ? month : prevMonth}${reportType === 'P1' ? year : prevMonthYear}${invoiceType[0]}${reportType}${bankSuffix}`.toUpperCase();

    const totals = rowValues.reduce((a,b) => ['Total',a[1]+b[1],a[2]+b[2],a[3]+b[3],a[4]+b[4],a[5]+b[5],a[6]+b[6]], ['',0,0,0,0,0,0])
                            .map(v => v.toLocaleString("en-IN"))

    const totalRowHtml = `<tr class="details_total"><td><p>${totals[0]}</p></td><td><p>&nbsp;</p></td><td><p>${totals[1]}</p></td>` +
    `<td><p>&nbsp;</p></td><td><p>${totals[2]}</p></td><td><p>&nbsp;</p></td><td><p>${totals[3]}</p></td>`+
    `<td><p>&nbsp;</p></td><td><p>${totals[4]}</p></td><td><p>&nbsp;</p></td><td><p>${totals[5]}</p></td>`+
    `<td><p>${totals[6]}</p></td></tr>`
    // const subjectMonth = reportType === 'P1' ? `${month}'${year}`: `${prevMonth}'${prevMonthYear}`
    // const subjectMonth = reportType === 'P1' ? `${prevMonth}'${prevMonthYear}`: `${prevMonth}'${prevMonthYear}`
    const subjectMonth = `${month}'${year}`;
    let htmlContent = TEMPLATE.replaceAll('$ENTITY_NAME',entity.name).replaceAll('$ENTITY_GST',entity.gst)
                        .replace('$ENTITY_PAN',entity.pan).replace('$ENTITY_ADDRESS',entity.address)
                        .replaceAll('$INVOICE_NAME', invoiceName).replaceAll('$INVOICE_DATE', invoiceDate)
                        .replace("$INVOICE_SUBJECT", `${invoiceType[2]} due for the month of ${subjectMonth} (INR)`)
                        .replace("$DETAILS", rowValues.map(colHtml).join('')+totalRowHtml).replace('$SIGN_BINARY', SIGN_BINARY)
    
    // fs.writeFileSync(`${folder}/invoice_${invoiceName}.html`, htmlContent)
    console.log(
    `[${new Date().toISOString()}] Entity: ${entity.name}, Bank: ${processingBank || 'ALL'}, Rows selected: ${entityRows.length}`
    );
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
        entity: entity,
        processingBank
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
    console.log(`[${new Date().toISOString()}] Starting readWorkbook for file:`, file);
    console.time('readWorkbook_total');
    const workbook = XLSX.readFile(file, { raw:false,type: 'binary', cellDates: true, cellNF: false, cellText: false });
    const dataSheet = workbook.Sheets[workbook.SheetNames[0]]
    const entitySheet = workbook.Sheets[workbook.SheetNames[1]]
    console.log(`[${new Date().toISOString()}] Reading entity and data sheets`);

    const dataRange = XLSX.utils.decode_range(dataSheet['!ref']);
    const limitedLastRow = Math.min(dataRange.e.r, 999); // 0-based index, 1000 rows max
    const limitedRange = XLSX.utils.encode_range(
    { r: dataRange.s.r, c: dataRange.s.c },
    { r: limitedLastRow, c: dataRange.e.c }
    );

    // Apply the limited range to the sheet
    dataSheet['!ref'] = limitedRange;

    console.log(`[${new Date().toISOString()}] Reading only first ${limitedLastRow + 1} rows from data sheet`);

    // Read sheets (now much faster)
    console.time('readEntitySheet');
    const entityData = XLSX.utils.sheet_to_json(entitySheet, { header: 1, raw: true });
    console.timeEnd('readEntitySheet');

    console.time('readDataSheet');
    const inputData = XLSX.utils.sheet_to_json(dataSheet, { header: 1, raw: true });
    console.timeEnd('readDataSheet');

    // Map only valid entities
    const entities = entityData
        .filter(r => r.length > 0 && r[1] && r[1] !== 'Client Name')
        .map(r => ({
        name: r[1],
        code: r[2],
        state: r[3],
        address: r[4],
        gst: r[5],
        pan: r[6]
        }));

    console.log(
        `[${new Date().toISOString()}] Entity rows: ${entities.length}, Input rows: ${inputData.length}`
    );

    console.log(`[${new Date().toISOString()}] Completed readWorkbook`);
    return {
        entity: entities,
        input: inputData,
        workbook
    };
}