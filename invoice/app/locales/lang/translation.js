import { viewership_details } from "../../components/api/api";

export const LangChange = {

  "en": {

    module_navbar: {
      title: "Videograph",
      environments: "Environments",
      videos: "Videos",
      liveStream: "Live Stream",
      liveRecording: "Live Recording",
      monitoring:"Monitoring",
      adinsertion:"AD Insertion",
      analytics: "Analytics",
      portraitPro: "Portrait PRO",
      interactiveLive: "Interactive Live",
      advAnalytics: "Advanced video analytics",
      infraMonitor:"Infra Monitoring",
      eventsLogs: "Events & Logs",
      settings: "Settings",
      apiDocs: "API Docs",
      logout: "Logout"
    },

    //components//utils//EnvDropDown
    module_EnvDropDown: {
      environment: "Environment",
      noResultFound: "No result found",
      searchByName:"Search by name"
    },

    // activities//components//dailog///activies
    module_activities: {
      activities: {
        heading: "Activities"
      },
      logs: {
        content: "Logs show every API action taken. Logs will be stored up to 30 days.",
        status: "Status",
        description: "Description",
        date: "Date",
        NoDataFound: "No data found",
        NoLogsAvailable: "No logs available"
      },
      eventDetailActivity: {
        eventId: "Event Id",
        data: "Date",
        type: "Type",
        eventData: "Event Data"
      },
      events: {
        description1: "Events let you know when something had happened in your system.",
        description2: "Events will be stored up to 30 days.",
        events: "EVENTS",
        id: "ID",
        date: "Date",
        noDataFound: "No data found",
        NoEventAvailable: "No events available"
      },
      logDetailActivity: {
        logId: "Log ID",
        date: "Date",
        method: "Method",
        url: "URL",
        requestBody: "Request Body",
        responseBody: "Response Body"
      },
    },

    // Videos
    module_videos: {
      index_page: {
        header: "Videos",
        content1: "Upload, Transcode, Store and Deliver your asset using our service.",
        content2: " You can Upload a video using API or directly from here to share it with your users.",
        viewGuide: "View Guide",
        addVideoButton: "Add New Video",
        searchVideos: "Search videos",
        popupVideoDelete: "Video deleted",
        tableHeadings: {
          addedOn: "Added on",
          name: "Name",
          contentId: "Content ID",
          imagePreview: "Image Preview",
          type: "Type",
          tags:"Tags",
          duration: "Duration",
          resolution: "Resolution",
          status: "Status",
          actions: "Actions"
        },
        noDataFound: "No Video Data Found"
      },
      onboardingPage: {
        header: "Videos",
        upload: {
          title: "Upload and stream video files",
          content1: "Upload, Transcode, Store and Deliver your videos using",
          content2: "Videograph. You can Upload a video using our API or directly from",
          content3: " here and deliber it to your users"
        },
        button: {
          addNewVideo: "Add new video",
          viewGuide: "View Guide"
        },
        onDemandVideoFeatures: {
          title: "On-demand video features",
          videoFeature1: {
            title: "Video Clipping",
            content: "Upload your videos & create clips from them."
          },
          videoFeature2: {
            title: "Subtitles",
            content: "Add multiple subtitle files to your videos."
          },
          videoFeature3: {
            title: "Advanced Editing",
            content: "Add mutliple image & text overlays via APIs."
          },
          videoFeature4: {
            title: "Secure Playback",
            content: "Make your video private with signed playback."
          }
        }
      },

      // direct_uploade
      direct_uploade: {
        createBulkUpload: "Create bulk upload",
        importBulkVideos: "Import your bulk videos",
        selectFile: "Select File",
        supportedFormatsExcel: "Supported file formats .xlsx (max upload limit up to",
        videos: "videos)",
        downloadText: "Download the Excel template for reference by clicking",
        here: "here",
        importButton: "Import",
        or:"or",
        addNewVideo: "Add new video",
        uploadVideo: "Upload your video file",
        placeholder: "Enter video name",
        required: "This field is required",
        message: "Entered value cannot start/end or have only white space",
        name: "Name*",
        selectFile: "Select File",
        supportedFormats: "Supported formats .mkv,.mp4,.avi,.3gp,.m4v,.mov,.webm,.wmv,.mxf,.ts",
        fileUploaded: "file uploaded",
        upload: "Upload",
        selectUpload:"Please select a file to upload",
        videoError:"Please select a video file in one of the supported formats: .mkv,.mp4,.avi,.3gp,.m4v,.mov,.webm,.wmv,.mxf,.ts",
        selectFileError:"Please select a file",
        invalidFileFormat:"Invalid file format. Only Excel files (.xlsx, .xls) are allowed.",
        maxLimit:"Maximum video limit is",
        unableToRead:"Unable to read the file. Please try again."
      },
      

        

        
 
      // videodelivery_addnewassets
      videodelivery_addnewassets: {
        postUsingUrl: "Post using Video URL:",
        postBodyEditor: "POST body editor:",
        validation: "This field is required",
        runRequest: "Run Request",
        syntaxErr:"Syntax Error",
        urlErr:"Please enter valid url",
        urlRequired:"URL required",
        playBackPolicyErr:"Playback policy required"
      },

      // videodetails
      videoDetails: {
        header: "Video List",
        editButton: "Edit",
        required: "This field is required",
        message: "Entered value cannot start/end or have only white space",
        saveButton: "Save",
        cancelButton: "Cancel",
      },

      // videolist
      videoList: {
        videoDetails: "Video Details",
        videoClips: "Video Clips",
        thumbnails: "Thumbnails",
        subtitles: "Subtitles",
        deleteVideo: "Delete Video",
        retry:"Retry"
      },

      // videodeliverytabs // homepage // components
      videoDeliveryTabs: {
        overview: "Overview",
        videoClips: "Video Clips",
        thumbnails: "Thumbnails",
        subtitles: "Subtitles",
        advancemonitor:"Advance Monitoring",
        others: "Others"
      },

      // overview- videodeliverytabs
      overview: {
        testVideoBanner: "This is a free test video. Test videos are limited to 10 seconds and are deleted after 24 hours.",
        shareableUrl: "Shareable URL:",
        linkToHls: "Link to HLS:",
        embedCode: "Embed Code:",
        linkToThumbnail: "Link to Thumbnail:",
        mp4Url: "MP4 URL:",
        analyticsButton: "Analytics",
        adinsertion:"Ad Insertion",
        activitiesButton: "Activities",
        deleteButton: "Delete Video",
        downloadButton: "Download Video",
        videoDetails: {
          header: "Video Details",
          contentId: "Content ID",
          created: "Created",
          status: "Status",
          duration: "Duration",
          aspectRatio: "Aspect Ratio",
          resolution: "Resolution",
          streamId: "Stream ID",
          startTime: "Start time",
          endTime: "End time"
        },
        playbackSample: "Playback Sample",
        videoUrls: "Video URLs",
        copied: "Copied",
        videoSourceInfo: {
          header: "Video Source Info",
          title: "Video URL",
          videoInfo: {
            title: "Video Info",
            width: "Width",
            height: "Height",
            frameRate: "Frame Rate",
            encoding: "Encoding",
            duration: "Duration"
          },
          audioInfo: {
            title: "Audio Info",
            sampleRate: "Sample Rate",
            encoding: "Encoding",
            channels: "Channels",
            duration: "Duration",
          }
        }
      },

      // others- videodeliverytabs
      others: {
        message1: "This field is required",
        titleandDescription: {
          header: "Title & Description",
          title: "Title",
          titlePlaceHolder: "Enter title or video",
          titleRequired: "This field is required",
          description: "Description",
          descriptionPlaceHolder: "Enter your description",
          buttonSave: "Save",
          message: "Entered value cannot start/end or have only white space",
        },
        tagsandMetadata: {
          header: "Tags & Metadata",
          title: "Tags",
          tagsRequired: "This field is required, please hit enter to add a tag",
          tagsComma: "Enter a comma after each tag",
          description: "Metadata",
          keyPlaceHolder: "Enter a key",
          valuePlaceHolder: "Enter a value",
          buttonSave: "Save",
          buttonAdd: "Add",
          message: "Entered value cannot start/end or have only white space",
        },
        toastMsg:{
          one:'Title and Description saved successfully',
          two:'Tags and metadata saved successfully'
        }
      },
      // thumbnails
      thumbnails: {
        header: "Create thumbnail using image tool",
        errorMessage: "Please enter the time less than length of the video",
        time: "Time*",
        required: "This field is required",
        message1: "Please enter hh:mm:ss format",
        imageWidth: "Image Width",
        placeHolder1: "Enter width in px",
        message2: "please enter only numbers",
        imageHeight: "Image Height",
        placeHolder2: "Enter height in px",
        createButton: "Create Thumbnail",
        download: "Download image from below URL:"
      },

      // thumbnailsApi
      thumbnailsApi: {
        header: "Create thumbnail using image API",
        runRequest: "Run Request",
        download: "Download image from below URL:"
      },
      //gifs
      gifs: {
        create: "Create GIF using Video Editor",
        startTime: "Start Time",
        endTime: "End Time",
        imageWidth: "Image Width",
        placeHolder1: "Enter width in px Default is 320px",
        imageHeight: "Image height",
        placeHolder2: "Enter height in px",
        createButton: "create GIF",
        download: "Download image from below URL",
        createGif: "Create GIF using image Api",
        runRequest: "Run Request"
      },
      subtitles: {
        header: "List of Subtitles",
        addedOn: "Added on",
        name: "Name",
        subtitleId: "Subtitle ID",
        format: "Format",
        actions: "Actions",
        uploadSubtitleFile: "Upload Subtitle files",
        uploadYourFile: "Upload your file",
        name2: "Name*",
        required: "This field is required",
        message: "Entered value cannot start/end or have only white space",
        languageCode: "Language Code*",
        support: "Supports Closed Captions",
        selectFile: "Select File",
        supportedFormats: "Supported formats .SRT, .VTT",
        uploadButton: "Upload",
        postUsingUrl: "Post using Video URL:",
        runRequest: "Run Request",
        noDataFound: "No Subtitle File Found"
      },
      // videoClips- videodeliverytabs
      videoClips: {
        header: "List of Video Clips",
        noVideoFound: "No Video Clip Found",
        tableHeadings: {
          addedOn: "Added on",
          name: "Name",
          videoId: "Video ID",
          actions: "Actions",
        },
        viewVideo: "View Video",
        createClips: "Create Video Clips"
      },

      videoClipsTabs: {
        useVideoEditor: "Use Video Editor",
        useApi: "Use API"
      },
      // videoeditor- videodeliverytabs
      videoEditor: {
        name: "Name*",
        startTime: "Start Time*",
        endTime: "End Time*",
        placeHolder1: "Clip name",
        required: "This field is required",
        message1: "Entered value cannot start/end or have only white space",
        message2: "Please enter hh:mm:ss format",
        createButton: "Create Video Clip"
      },
      // using_api
      usingApi: {
        runRequest: "Run Request"
      },
    },
    //Environment 
    module_environment: {
      index: {
        header: {
          title: "Environment",
          description: "An environment allows you to group your data. We have four types of environments Development, QA, Staging and Production. You can change the names or create additional environments as needed.",
          addbutton: "Add Environment"
        },
        tableheader: {
          name: "Name",
          video: "Video",
          analytics: "Analytics",
        },//tb=table body
        tb: {
          il7d: "in last 7 days",
          encoded: " Encoded",
          stored: " Stored",
          streamed: " streamed",
          hours: "  hours",
          apitokens: "API tokens",
          views: "Views",
          uniqueviews: "Unique views",
          watchedtime: "Watched time",
          envKey: " Env Key",
          livestream: "Live Stream",
          liverecording: "Live Recording",
          table_card_video_description: "Use Videograph APIs for Live and On-demand videos streaming.",
          table_card_analytics_description: "Start tracking video metrics by uploading videos to this environment.",

        }
      },
    },

    module_SelectEnv: {
      validationMessage: "This field is required without space at start/end/only space",
      noResultFound: "No result found",
      cancel: "Cancel",
      save: "Save",
      placeholder: "Search by name"

    },

    //Environment add new environment page
    module_add_new_environment: {
      title: "Add New Environment",
      labelenv: "Environment Name",
      label_env_ph: "Enter a name",
      label_required: "This field is required",
      label_message: "Entered value cannot start/end or have only white space",
      label_type: "Type",
      no_result_found: "No result found",
      cancel: "Cancel",
      addbutton: "Add Environment",
      labelTypePlaceholder: "Search by name",
    },

    //components//ad_list
    module_ad_list: {
      failedToUpload: "failed to upload",
      pendingVideo: "pending video",
      processing: "Processing",
      streamDetails: "Stream Details",
      disableStream: "Disable Stream",
      videoDetails: "Video Details",
    },

    //Live streams
    module_livestream: {
      onboarding: {
        header: "Live Streams",
        title: "Publish live streams",
        content1: "Use Videograph Live Stream APIs and integrate HLS live",
        content2: "stream into your application. Create live streams using APIs or directly from the dashboard.",
        buttonCreate: "Create Live stream",
        buttonView: " View Guide",
        features: {
          heading: "Live streaming features",
          title1: "Secure Streaming",
          content1: "Make live streams private with signed playback.",
          titile2: "Low Latency",
          content2: "Live streaming latency as low as 4 seconds.",
          title3: "Ad Insertions",
          content3: "Want to insert Ad in live streams?",
          title4: "Live Interactions",
          content4: "Need help to add live interactions? ",
          talkToUs: "Talk to us"
        }
      },
      createLiveStreaming: {
        header: "Create Live Stream",
        postUsingUrl: "Post Using Video Url",
        postBodyEditor: "Post body Editor",
        buttonRunRequest: "Run Request",
        validation: "This feild is required"
      },
      index: {
        header: "Live Streams",
        description: "Use Videograph Live Stream APIs and integrate live video into your application.",
        description_view: "View Guide",
        create_button: "Create Live Stream",
        placeholder: "Search live streams",
        popupVideoDelete: "Stream deleted",
        //th:table head
        th: {
          addon: "Added on",
          name: "Name",
          StreamID: "Stream ID",
          streamKey: "Stream Key",
          imagePreview: "Image Preview",
          type: "Type",
          tags:"Tags",
          status: "Status",
          actions: "Actions",
          noLiveDataFound:"No Live Data Found", 
          //monitoring
          addon: "Added on",
          channelname:"Channel Name",
          preview:"Preview",
          badsource:"BadSource",
          videofreeze:"Video Freeze",
          videodedoerror:"Video Decodability",
          audiodecodabilut:"Audio decodability",
          manifesterror:"Manifest",
          sctemissing:"SCTE-35",
        }
      },
      live_streaming_details: {
        header: "Live streams",
        edit: "Edit",
        cancelButton: "cancel",
        saveButton: "save"
      },
      //components//livestream_tabs
      livestream_tabs: {
        overview: "Overview",
        videoClips: "Video Clips",
        advancemonitor:"Advanced Monitoring",
        others: "Others",
        customUrls: "Custom URLs"
      },
      //live stearm//--live stream tabs
      overview: {
        videourl: {
          title: "Video URLs",
          shareableURL: "Shareable URL",
          linkToHLS: "Link To HLS",
          embedCode: "Embed Code:",
          linkToThumbnail: "Link to Thumbnail:",
        },
        button_analytics: "Analytics",
        button_activities: "Activities",
        button_delete: "Delete Stream",
        button_disable : "Disable",
        button_enable:"Enable",
        liveStreamDetails: {
          title: "Live Stream ID",
          ingestURL: "Ingest URL",
          rTMPsURL: "RTMPs URL",
          streamKey: "Stream Key",
          Created: "Created",
          status: "Status",
          copy: "Copy",
          activesince: "Active Since",
          copied:"Copied"
        },
        livestream: {
          title: 'Live Stream',
          start: "Start",
          startStop: "Start/Stop",
          live: "Live",
          active: "Active",
          offline: "Offline"
        },
        healthMonitoring: {
          streamHealth: "Stream health",
          last1Hour: "Last 1 hour",
          last4Hours: "Last 4 hours",
          last8Hours: "Last 8 hours",
          videoFrameRate: "Video Frame Rate (FPS)",
          videoBitrate: "Video Bitrate (VBR) in kbps"
        }
      },
      customUrls: {
        playbackUrls: {
          customize: "Customize the playback URLs!",
          addCustom: "Add custom paramters such as Partner, Genre, Language, etc to the playback URLs",
          createCustom: "Create Custom URL"
        },
        playbackList: {
          createCustom: "Create Custom URL",
          placeholder: "Search with name or playback url",
          addedOn: "Added on",
          name: "Name",
          customPlaybackUrl: "Custom Playback URL",
          status: "Status",
          actions: "Actions",
          copied: "Copied",
          noResultFound: "No result Found",
          itemsPerPage: "Items per page :",
          editUrl: "Edit URL",
          duplicate: "Duplicate",
          delete: "Delete",
          toastMsg1: "Playback url deleted",
          toastMsg2: "Playback url resumed",
          toastMsg3: "Playback url paused"  
        },
        createCustomUrl: {
          createCustom: "Create Custom URL",
          editCustom: "Edit Custom URL",
          name: "Name",
          parameters: "Parameters",
          partner: "Partner",
          genre: "Genre",
          none: "None",
          language: "Language",
          category: "Category",
          cancel: "Cancel",
          createUrl: "Create URL",
          editUrl: "Edit"
        },    
      },
      others: {
        titleandDescription: {
          header: "Title & Description",
          title: "Title",
          titlePlaceHolder: "Enter title or video",
          titleRequired: "This field is required",
          description: "Description",
          descriptionPlaceHolder: "Enter your description",
          buttonSave: "Save",
          buttonAdd: "Add",
          message: "Entered value cannot start/end or have only white space",
          message1: "this field is required"
        },
        tagsandMetadata: {
          header: "Tags & Metadata",
          title: "Tags",
          tagsRequired: "This field is required, please hit enter to add a tag",
          tagsComma: "Enter a comma after each tag",
          description: "Metadata",
          keyPlaceHolder: "Enter a key",
          valuePlaceHolder: "Enter a value",
          buttonSave: "Save",
          message: "Entered value cannot start/end or have only white space",
        },
        toastMsg:{
          one:'Title and Description saved successfully',
          two:'Tags and metadata saved successfully'
        },
        thumbnails:{
          thumbnails: "Thumbnails",
          selectImage: "Select Image",
          supportedFormats: "Supported formats .jpg, .jpeg, .png",
          upload: "Upload",
          errorMsg: "Please select a file",
          errorMsg2: "Invalid format,Only images(.jpeg,png,jpg) are allowed",
          toastMsg: "Thumbnail added successfully"
        }
      },
      //component//live_list
      live_list: {
        streamDetails: "Stream Details",
        deleteStream: "Delete Stream",
        videoDetails: "Video Details"
      },
      Delete_content: {
        heading: "Delete Stream",
        content: "Are you sure you want to delete this Stream?",
        content1: "Once deleted, this stream will no longer monitored and all historical data will be erased.",
        cancelButton: "Cancel",
        deleteButton: "Yes,delete",
        conHeading: "Delete Content",
        conContent: "Are you sure you want to delete this Content?",
        conContent1: "Once deleted,this Content will no longer monitored and all historical data will be erased.",
        conCancelButton: "Cancel",
        conDeleteButton: "Yes,delete",
      }
    },

    //adinsertion
    module_adinsertion:{
      index:{
        header:"Ad Insertion",
        description:"Use Videograph Ad Insertion APIs to replace the Ads in your program.",
        button:"Create Ad Insertion",
        th: {
          addon: "Added on",
          name: "Name",
          StreamID: "Stream ID",
          imagePreview: "Image Preview",
          type: "Type",
          tags:"Tags",
          status: "Status",
          actions: "Actions",
          noLiveDataFound: "No Live Data Found"
        },
      },
      overview: {
        adInsertionDetails: "Ad Insertion Details",
        adInsertionId: "Ad Insertion ID",
        preRoll: "Preroll",
        maxPreRoll: "Preroll Max Allowed Duration",
        finalUrl: "Final URL",
        adTagUrl: "Ad Tag URL:",
        playbackParams: "Playback URL With Player Params:",
        playbackUrl: "Playback URL:",
        edit: "Edit"
      }  
  },

    // portraitPro
    module_portraitPro: {
      index: {
        header: "Portrait PRO",
        description: "Use Videgraph's AI-driven landscape to portrait video cropping tool to automatcially crop your videos to potrait ratio in seconds.",
        viewGuide: "View Guide",
        createButton: "Create Portrait Video",
        searchVideos: "Search videos",
        tableHeadings: {
          addedOn: "Added on",
          name: "Name",
          contentId: "Content ID",
          imagePreview: "Image Preview",
          type: "Type",
          tags:"Tags",
          duration: "Duration",
          resolution: "Resolution",
          status: "Status",
          actions: "Actions"
        },
        noDataFound: "No Video Data Found"
      },
      portraitpro_details: {
        heading: "Portrait PRO",
        editButton: "Edit",
        save: "Save",
        cancel: "Cancel"
      },
      onboardingPage: {
        header: "Portrait PRO",
        title: "Next Gen - AI  Portrait Video Cropping",
        description1: "Don't spend hours cropping your videos to publish it on",
        description2: "social media platforms, use Videgraph's AI-driven landscape",
        description3: " to portrait video cropping tool to automatcially crop your",
        description4: "videos to potrait ratio in seconds for free.",
        transformVideo: "Transform your Video!",
        selectFile: "Select File",
        or: "OR",
        placeHolder: "Enter (.mp4) video URL",
        message: "Please enter a valid url",
        uploadmessage: "Upload only .mp4 files",
        createButton: "Create Portrait Video",
        subscribedFalse1: "Setup payment details and get free $20 credit,",
        subscribedFalse2: " transform your videos with free credits.",
        upgrade: "Upgrade"
      },
      createNewPortrait: {
        header: "Create new portrait video",
        uploadFile: "Upload your video file",
        name: "Name*",
        placeHolder: "Enter video name",
        required: "This field is required",
        message: "Entered value cannot start/end or have only white space",
        selectFile: "Select File",
        or: "OR",
        placeHolder2: "Enter (.mp4) video URL",
        message2: "Please enter a valid url",
        supportedFormats: "Supported formats mp4",
        createButton: "Create Portrait Video"
      },
      // sociallist // components
      socialList: {
        videoDetails: "Video Details",
        thumbnails: "Thumbnails",
        deleteVideo: "Delete Video"
      },
      // overview- socialcliptabs
      overview: {
        testVideoBanner: "This is a free test video. Test videos are limited to 10 seconds, and are deleted after 24 hours.",
        linkToHls: "Link to HLS:",
        embedCode: "Embed Code:",
        linkToThumbnail: "Link to Thumbnail:",
        mp4Url: "MP4 URL:",
        activitiesButton: "Activities",
        deleteButton: "Delete Video",
        downloadButton: "Download Video",
        videoDetails: {
          header: "Video Details",
          contentId: "Content ID",
          created: "Created",
          status: "Status",
          duration: "Duration",
          aspectRatio: "Aspect Ratio",
          resolution: "Max Resolution",
          maxFrameRate: "Max Frame Rate",
          streamId: "Stream ID",
          startTime: "Start time",
          endTime: "End time"
        },
        playbackSample: "Playback Sample",
        videoUrls: "Video URLs",
        copied: "Copied",
        videoSourceInfo: {
          header: "Video Source Info",
          title: "Video URL",
          videoInfo: {
            title: "Video Info",
            width: "Width",
            height: "Height",
            frameRate: "Frame Rate",
            encoding: "Encoding",
            duration: "Duration"
          },
          audioInfo: {
            title: "Audio Info",
            sampleRate: "Sample Rate",
            encoding: "Encoding",
            channels: "Channels",
            duration: "Duration",
          }
        }
      },
      // others- socialcliptabs
      others: {
        titleandDescription: {
          header: "Title & Description",
          title: "Title",
          titlePlaceHolder: "Enter title or video",
          titleRequired: "This field is required",
          description: "Description",
          descriptionPlaceHolder: "Enter your description",
          buttonSave: "Save",
          message: "Entered value cannot start/end or have only white space",
        },
        message1: "This field is required",
        tagsandMetadata: {
          header: "Tags & Metadata",
          title: "Tags",
          tagsRequired: "This field is required, please hit enter to add a tag",
          tagsComma: "Enter a comma after each tag",
          description: "Metadata",
          keyPlaceHolder: "Enter a key",
          valuePlaceHolder: "Enter a value",
          buttonSave: "Save",
          buttonAdd: "Add",
          message: "Entered value cannot start/end or have only white space",
        },
        toastMsg:{
          one:'Title and Description saved successfully',
          two:'Tags and metadata saved successfully'
        }
      },
      // thumbnails
      thumbnails: {
        header: "Create thumbnail using image tool",
        errorMessage: "Please enter the time less than length of the video",
        time: "Time*",
        required: "This field is required",
        message1: "Please enter hh:mm:ss format",
        imageWidth: "Image Width",
        placeHolder1: "Enter width in px",
        message2: "please enter only numbers",
        imageHeight: "Image Height",
        placeHolder2: "Enter height in px",
        createButton: "Create Thumbnail",
        download: "Download image from below URL:"
      },
      // thumbnailsApi
      thumbnailsApi: {
        header: "Create thumbnail using image API",
        runRequest: "Run Request",
        download: "Download image from below URL:"
      },
      // socialClipTabs- components
      socialClipTabs: {
        overview: "Overview",
        thumbnails: "Thumbnails",
        others: "Others"
      },
      // videoeditor- socialclipstabs//components
      videoEditor: {
        name: "Name*",
        startTime: "Start Time*",
        endTime: "End Time*",
        placeHolder1: "Clip name",
        required: "This field is required",
        message1: "Entered value cannot start/end or have only white space",
        message2: "Please enter hh:mm:ss format",
        createButton: "Create Video Clip"
      },
      // using_api
      usingApi: {
        runRequest: "Run Request"
      },
    },

    //liveRecording
    module_liveRecording: {
      index: {
        header: "Live Recording",
        description: "Use Videograph Live Recording APIs to record the programs and create video clips from the same.",
        createButton: "Create Live Recording",
        searchPlaceHolder: "Search live recordings",
        viewGuide: "View Guide",
        popupVideoDelete: "Stream deleted",
        tableHeadings: {
          addedOn: "Added on",
          name: "Name",
          streamId: "Stream ID",
          imagePreview: "Image Preview",
          type: "Type",
          tags:"Tags",
          duration: "Duration",
          resolution: "Resolution",
          status: "Status",
          actions: "Actions"
        },
        noDataFound: "No Live Recording Found"
      },
      onboardingPage: {
        header: "Live Recording",
        title: "Record Live Streams",
        description1: "Record live streams simply by passing the parameter",
        description2: "'record': true while creating the live stream. Once started, live stream",
        description3: "recording will be available for 12hrs.",
        createButton: "Create Live Recording",
        viewGuide: "View Guide",
        liveRecordingFeatures: {
          title: "Live Recording Features",
          feature1: "Realtime Video Clipping",
          content1: "create clips from live stream recordings.",
          feature2: "Recordings Playback",
          content2: "Secured recordings playback with signed url.",
          feature3: "Secure Streaming",
          content3: "Make live streams secure with signed playback.",
          feature4: "Live Interactions",
          content4: "Need help to add live interactions? ",
          talkToUs: "Talk to us"
        }
      },
      //pages//liverecording
      createLiveRecording: {
        header: "Create Live Recording",
        postUsingUrl: "Post using Video URL:",
        postBodyEditor: "POST body editor:",
        validation: "This field is required",
        runRequest: "Run Request"
      },
      // liverecordingdetails//liveecording//pages
      liveRecordingDetails: {
        liveRecording: "Live recording",
        editButton: "Edit",
        required: "This field is required",
        message: "Entered value cannot start/end or have only white space",
        saveButton: "Save",
        cancelButton: "Cancel"
      },
      // liverecordingtabs- component
      liveRecordingTabs: {
        overview: "Overview",
        videoClips: "Video Clips",
        others: "Others",
        advancemonitor:"Advance Monitor"
      },
      // videoClips- liverecordingTabs
      videoClips: {
        header: "List of Video Clips",
        noVideoFound: "No Video Clip Found",
        tableHeadings: {
          addedOn: "Added on",
          name: "Name",
          videoId: "Video ID",
          actions: "Actions",
        },
        viewVideo: "View Video",
        createClips: "Create Video Clips"
      },
      // videoeditor- recordingvideoclipstabs
      videoEditor: {
        name: "Name*",
        startTime: "Start Time*",
        endTime: "End Time*",
        placeHolder1: "Clip name",
        placeHolder2: "enter in epoch format",
        required: "This field is required",
        message: "Please enter in epoch format",
        createButton: "Create Video Clip"
      },
      // using_api
      usingApi: {
        runRequest: "Run Request"
      },
      recordingVideoClipsTabs: {
        useVideoEditor: "Use Video Editor",
        useApi: "Use API"
      },
      // overview //liverecordingtabs
      overview: {
        videoUrl: {
          title: "Video URLs",
          shareableUrl: "Shareable URL",
          linkToHls: "Link To HLS",
          embedCode: "Embed Code:",
          linkToThumbnail: "Link to Thumbnail:",
        },
        buttonAnalytics: "Analytics",
        buttonActivities: "Activities",
        buttonDelete: "Delete Stream",
        liveStreamDetails: {
          header: "Live Stream Details",
          title: "Live Stream ID",
          ingestUrl: "Ingest URL",
          rtmpsUrl: "RTMPs URL",
          streamKey: "Stream Key",
          created: "Created",
          status: "Status",
          copy: "Copy",
          activeSince: "Active Since",
          copied:"Copied"
        },
        liveStream: {
          title: 'Live Stream Player',
          start: "Start",
          startStop: "Start/Stop",
          live: "Live",
          active: "Active",
          offline: "Offline"
        }
      },
      // others- liverecordingtabs
      others: {
        message1: "this feild is required",
        titleandDescription: {
          header: "Title & Description",
          title: "Title",
          titlePlaceHolder: "Enter title or video",
          titleRequired: "This field is required",
          description: "Description",
          descriptionPlaceHolder: "Enter your description",
          buttonSave: "Save",
          message: "Entered value cannot start/end or have only white space",
          message1: "this feild is required"
        },
        tagsandMetadata: {
          header: "Tags & Metadata",
          title: "Tags",
          tagsRequired: "This field is required, please hit enter to add a tag",
          tagsComma: "Enter a comma after each tag",
          description: "Metadata",
          keyPlaceHolder: "Enter a key",
          valuePlaceHolder: "Enter a value",
          buttonSave: "Save",
          buttonAdd: "Add",
          message: "Entered value cannot start/end or have only white space",
        },
        toastMsg:{
          one:'Title and Description saved successfully',
          two:'Tags and metadata saved successfully'
        }
      },
      //components
      recording_list: {
        streamDetails: "Stream Details",
        deleteStream: "Delete Stream",
        videoDetails: "Video Details",
        videoClips: "Video Clips"
      }
    },

    // Accounts
    module_account: {
      index: {
        header: "Accounts",
        errorMessage: "Special characters/numbers are not allowed",
        firstNameMessage: "Firstname should have atleast 3 charecters",
        lastNameMessage: "Lastname should have atleast 3 charecters",
        logout: "Log out",
        title1: "Personal Details",
        firstName: "First Name",
        placeHolder1: "sunil",
        message: "Entered value cannot start/end or have only white space",
        lastName: "Last Name",
        placeHolder2: "Gavaskar",
        required: "This field is required",
        email: "Email",
        saveChanges: "Save changes",
        title2: "Organization",
        createButton: "Create Organization",
      },
      manageAccount: {
        title: "Manage Account",
        errorMessage: "Password changed successfully",
        errorToolTip: "Please enter new password for change",
        changePassword: "Change Password",
        currentPassword: "Current Password",
        required: "This field is required",
        newPassword: "New Password",
        message: "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character",
        confirmPassword: "Confirm New Password",
        message2: "Password should match with new password!",
        changePassword: "Change Password"
      },
      createOrganization: {
        header: "Create new organization",
        description: "New organization will have separate teams and settings from your current organization.",
        name: "Name",
        placeHolder: "Enter organization name",
        required: "This field is required",
        message: "Entered value cannot start/end or have only white space",
        cancelButton: "Cancel",
        createButton: "Create Organization"
      }
    },

    //Eents and Logs
    module_events_logs: {
      index: {
        header: "Events and Logs"
      },
      events_logs_tabs: {
        events: "Events ",
        logs: "Logs"
      },
      ///evnets&logs component file
      event_detail: {
        tb: {
          eventId: "Event ID",
          date: "Data",
          type: "Type",
          eventData: "Event Data"
        }
      },
      events: {
        th: { //table header
          event: "Event",
          id: "ID",
          date: "Date"
        },
        content1: "Events let you know when something has happened in your system.",
        content2: "Events will be stored up to 30 days."
      },
      logs: {
        th: {
          status: "Status",
          description: "Description",
          date: "Date"
        },
        content: "Logs show every API action taken. Logs will be stored up to 30 days."
      },
      logs_details: {
        tb: {
          logId: "Log ID",
          date: "Date",
          method: "Method",
          url: "URL"
        },
        heading1: "Request Body",
        heading2: "Response Body"
      }
    },

    //Analytics
    module_analytics: {
      index: {
        heading: "Content Distribution Analytics",
        timeZone: "Time zone:",
        noResultFound: "No result found",
        searchplaceholder: "Search by name"
      },
      analytics_tabs: {
        overview: "Overview",
        viewership: "Viewership",
        ads:"Ads",
        ads_revenue:"Ad Revenue",
        filters_button: "Filters",
        export_button: "Export",
        startDate: "Start Date",
        endDate: "End Date",
        apply: "Apply",
        cancel: "Cancel",
        dateLast15mins: "Last 15 mins",
        dateLast30mins: "Last 30 mins",
        dateLast1hr: "Last 1 hour",
        dateLast4hr:"Last 4 hours",
        dateLast8hr:"Last 8 hours",
        dateLast12hr:"Last 12 hours",
        dateLast24hr: "Last 24 hours",
        dateLast7days: "Last 7 days",
        last1Month: "Last 30 days",
        today:"Today",
        yesterday:"Yesterday",
        thisWeek:"This Week",
        lastWeek:"Last Week",
        thisMonth:"This Month",
        lastMonth:"Last Month",
        filters: {
          contentType: "Content Type:",
          deviceName: "Device Name:",
          programme: "Programme:",
          deviceType: "Device Type:",
          partners: "Partners:",
          countries: "Countries:",
          region: "Region:",
          cities: "Cities:",
          content: "Contents:"
        }
      }
    },

    //component:Analytics tab_overview_component
    module_concurrentViewers: {
      heading: "Concurrent Viewers",
      viewers: "Viewers"
    },

    module_content: {
      heading: "Contents",
      description: "Views in realtime",
      description1:"Requests in realtime",
      moreInsights: "More Insights",
      content:"Content"
    },

    module_countries: {
      heading: "Countries",
      description: "Views in realtime",
      country: "Countries",
      requests:"Requests",
      percentage: "Percentage",
      views: "Views",
      moreInsights: "More Insights"
    },

    module_devices: {
      heading: "Devices",
      description: "Views in realtime",
      moreInsights: "More Insights"
    },

    module_device_types: {
      heading: "Device Types ",
      description: "Views in realtime",
      description1:"Requests in real time",
      moreInsights: "More Insights",
      devicetypes:"Device Types"
    },

    module_programs: {
      heading: "Programmes",
      moreInsights: "More Insights"
    },

    module_partners: {
      heading: "Partners",
      description: "Views in realtime",
      description1:"Requests in real time",
      moreInsights: "More Insights",
      partner:"Partner",
      requests:"Requests",
    },

    module_usage: {
      footer: {
        encoded: "Total duration of content encoded.",
        stored: "Total duration of content stored.",
        streamed: "Total duration of content streamed."
      },
      encoded: "ENCODED",
      stored: "STORED",
      streamed: "VIEWED"
    },

    //status//components//utils
    module_genfunctions: {
      inactiveContent: "This Organization is Inactive. Please contact",
      contactLink: "Contact Videograph Support",
      content: "Ready to start! Upgrade to get free $20 credit. Add full length videos, live streams and live recording without any restrictions.",
      updateButton: "Upgrade",
      sessions: 'Sessions',
      mins: "Mins",
      viewers: "Viewers",
      copied: "Copied",
      noLinkAvailable: "No Link Available"
    },

    //Viewership//components//
    module_ad_performance: {
      noOfViews: "No.of Viewers",
      viewContent1: "Total ads inserted.",
      viewContent2: "",
      sessionContent1: "Total duration available. ",
      sessionContent2: "",
      totalViewshipcontent1: "Total duration of ads.",
      totalViewshipcontent2: "",
      adContent1: "Ads inserted over available.",
      adContent2: "",
      avgscontent1: "Total empty ad responses.",
      avgscontent2: "",
      avsSessionsDurationContent1: "Total ad impressions.",
      avsSessionsDurationContent2: "",
      noOfInserted:"No. of Ads Inserted",
      availAdDuration:"Available Ad Duration",
      fillAdsDuration:"Filled Ad Duration",
      AdFillRate:"Ad Fill Rate",
      totalSessions:"Total Sessions",
      adsInsertedPerSession:"Ads Inserted per Session",
      emptyVastResponses: "Empty Ad Responses",
      warningNoAds: "Warning No Ads",
      impressions: "Impressions",
      adsInserted:"Ads Inserted",
      duration:"Duration",
      performance:"Performance"
    },
    module_revenue:{
      request1:"Total Ad requests received.",
      request2:"",
      requests:"Requests",
      impressions:"Impressions",
      oppfill:"Opportunity Fill %",
      reqfill:"Request Fill %",
      revenue:"Revenue",
      rpm:"RPM",
      imps1:"Total ad impressions.",
      imps2:"",
      oppfill1:"Opps to impressions %.",
      oppfill2:"",
      requestfill1:"Requests to impressions %.",
      requestfill2:"",
      revenue1:"Cumulative ad revenue.",
      rpm1:"Revenue / 1000 impressions.",
      rpm2:""

    },
    module_views:{
      noOfViews: "No.of Viewers",
      viewContent1: "Total sum of users that started video playback.",
      viewContent2: "",
      sessions: "Sessions",
      sessionContent1: "Number of sessions watched by users.",
      sessionContent2: "",
      totalViewship: "Total Viewership",
      totalViewshipcontent1: "Total time spent by users watching content.",
      totalViewshipcontent2: "",
      adViewership: "Ad Viewership",
      adContent1: "Total time spent by users watching Ads.",
      adContent2: "",
      avgSessions: "Avg.Session",
      avgscontent1: "Average session count spent by unique users.",
      avgscontent2: "",
      avsSessionsDuration: "Avg Session Duration",
      avsSessionsDurationContent1: "The average time spent per user on a single session.",
      avsSessionsDurationContent2: "",
      noOfViewers: "No. of Viewers ",
      noOfSessions: "No. of Sessions ",
      totalViwership: "Total Viewership ",
      adViewershipMins: "Ad Viewership ",
      avgSession: "Avg Sessions ",
      avgSessionDurationMins: "Avg Session Duration "
    },

    //ViewewshipTrend
    module_viewershipTrend: {
      heading: "Viewership Trend",
      heading1: "Ad Insertion Trend",
      sessionCount: "Session Count",
      uniqueViewers: "Unique Viewers",
      avgSessionDuration: "Avg Session Duration",
      adViewershipMins: "Ad Viewership Mins",
      viewershipMins: "Viewership Mins",
      requestsvsimpression:"Request vs Impression",
      time:"Time",
      failedavailrequests:"Filled Avail Requests",
      impressions:"Impressions",
      emptyvastresponse:"Empty Vast Response",
      noadwarnings:"No Ad Warnings",
      count:"Count",
      summary:"Summary"
    },

    //viewershipTrendin30mins
    module_viewershipTrendin30mins: {
      heading: "Viewership Trend by time of the day",
      uniqueViewers: "Unique Viewers",
      sessions: "Sessions",
      avgSessionDuration: "Avg Session Duration",
      adViewershipMins: "Ad Viewership Mins",
      sessionDuration: "Session duration",
      time: "Time",
      adrequest:"Ad requests",
      countt: "Count"
    },

    //analytics filters
    //dailog//analytics filters
    module_analytics_filters: {
      selectFilter: "Select Filter",
      clearAll: "Clear all",
      filtersSelected: "filters selected",
      cancell: "Cancel",
      applyy: "Apply",
      placeholderSearch: "Search",
      contentType:"Content Type",
      contentIdStreamId:"Content ID / Stream ID",
      programme: "Programme",
      deviceType:"Device Type",
      deviceName:"Device Name",
      partner:"Partner",
      country:"Country",
      region:"Region",
      city:"City",
      noDataFound:"No Data Found"

    },

    //Components//Advanced_video_analytics
    //AdvDatePicker
    module_AdvDatePicker: {
      startDate: "Start Date ",
      endDate: "End Date",
      cancel: "Cancel",
      today: "Today",
      oneWeek: "One Week",
      oneMonth: "One Month",
      applyy: "Apply"
    },

    //AdvFilter
    module_AdvFilter: {
      selectFilter: "Select Filter",
      clearAll: "Clear all",
      noResultFound: "No Result Found",
      cancell: "Cancel",
      applyy: "Apply"
    },

    //common//component
    //ConfirmLogOut
    module_ConfirmLogOut: {
      header: "Logout User",
      content: "Are you sure you want to Logout?",
      cancel: "Cancel",
      buttonlogout: "Yes, Logout"
    },

    //Settings
    module_setting: {
      CreateSignKey: {
        heading: "Below is your new Signin Key:",
        labelSigningKeyId: "Signin Key ID:",
        copied: "Copied",
        labelBase64: "Base64-encoded Private Key:",
        content: "We don't store the secret key. Please copy or download it into your system",
        download: "Download as .pem file",
        done: "Done"
      },
      webHooks: {
        description1: "Use Webhooks to get real time updates on any events that happens outside of an API request cycle.",
        description2: "Webhooks can be configured for any environment and notifications will be sent for all events for the environment.",
        createButton: "Create new Webhook",
        tableHeadings: {
          urlToNotify: "URL to Notify",
          signingSecret: "Signing Secret",
          environment: "Environment",
          created: "Created",
          status: "Status",
          actions: "Actions",
        },
        active: "Active",
        disable: "Disable"
      },
      createNewWebhook: {
        newWebhook: "New Webhook",
        required: "This field is required",
        urlErrorMessage: "Please enter a valid url",
        urlToNotify: "URL to notify:",
        placeHolder: "Enter url",
        required: "This field is required",
        message: "Entered value cannot start/end or have only white space",
        description: "All events will be sent to this URL.To learn more about the types of events see our",
        docs: "docs",
        cancel: "Cancel",
        createButton: "Create Webhook"
      },
      // dialog//deletewebhook
      deleteWebhook: {
        errorMessage: "Webhook deleted",
        header: "Delete Webhook",
        confirmDelete: "Are you sure you want to delete this Webhook?",
        deleteMessage: "Once deleted,this webhook will no longer be available and the action cannot be undone.",
        cancelButton: "Cancel",
        deleteButton: "Yes, Delete"
      },
      billing: {
        description1: "Manage Billing for both Video and Data plans here. Feel free",
        contactUs: "contact us",
        description2: "for any queries related billing.",
        nextPayment: "Next payment:",
        editPaymentButton: "Edit Payment Details",
        encoded: "Encoded",
        stored: "Stored",
        streamed: "Streamed",
        billingCycle: "billing cycle",
        videosTable: {
          header: "Video Consumption",
          title1: "Videos (upto 1080p)",
          title2: "Videos (Above 1080p)",
          total: "Total Video Charges",
        },
        liveTable: {
          header: "Live Streaming & Recording",
          title1: "Live Streaming",
          title2: "Live Recording",
          total: "Total Live Streaming Charges"
        },
        videoEditingTable: {
          header: "Video Editing",
          total: "Total Video Editing Charges"
        },
        portraitProTable: {
          header: "Portrait PRO",
          total: "Total Portrait PRO Charges"
        },
        billingTable: {
          header: "Billing Summary",
          encoding: "Encoding Charges",
          storage: "Storage Charges",
          streaming: "Streaming Charges",
          total: "Current Total"
        },
        walletTable: {
          yourWallet: "Your Wallet Balance",
          remaining: "remaining",
          addMoney: "Add Money",
          enableAutoRecharge: "Enable auto recharge",
          recommended: "Recommendended",
          description: "Get uninterrupted access to our services. Modify payment settings when you need.",
          balanceBelow: "When my balance is below",
          required: "This field is required",
          message: "Please enter only numbers",
          recharge: "Automatically recharge",
          saveButton: "Save"
        },
        paymentTable: {
          header: "Automatically recharge",
          paymentHistory: "Payment History",
          card: "Card",
          expirationDate: "Expiration Date",
          email: "Email",
          zipCode: "Zip code",
          billingAddress: "Billing Address",
          city: "City",
          state: "State",
          country: "Country",
        },
      },
      payment_history: {
        paymentHistory: "Payment History",
        PaymentDate: "Payment date",
        amount: "Amount",
        actions: "Actions",
        done: "Done"
      },
      index: {
        heading: "Settings"
      },
      tabs: {
        organization: "Organization",
        billing: "Billing",
        aPIAccessTokens: "API Access Tokens",
        webhooks: "Webhooks",
        signingKeys: "Signing Keys"
      },
      //component//homepage//settingstab
      organization: {
        success:"Sucess",
        tokenExpired:"Token expired",
        userDeleted:"User Deleted",
        invitationSent:"Invitation Sent",
        joined:"Joined",
        heading1: "General",
        organization: "Organization",
        edit: "Edit",
        heading2: "Members",
        inviteNoButton: "Invite Members",
        th: {
          name: "Name",
          email: "Email",
          role: "Role",
          status: "Status",
          actionn: "Action"
        },
        tb: {
          inviteSent: "invite Sent",
          resend: "Resend"
        }
      },
      removeuser: {
        heading: "Remove User",
        content: "Are you sure you want to remove user?",
        content1: 'Once removed, this user will no longer be able to  access this organization on Videograph.',
        cancelButton: "Cancel",
        removeButton: "Yes, Remove"
      },
      //components//dailog//Edit_organisation_name
      Edit_organisation_name: {
        title: "Edit Organisation Name",
        organisationName: "Organisation Name",
        required: "This field is required",
        message: "Entered value cannot start/end or have only white space",
        cancelButton: "Cancel",
        saveChangButton: "Save Changes"
      },

      //components//dailog//Newmember_invite
      Newmember_invite: {
        title: "Invite New Member",
        emailAddress: "Email Address",
        required: "This field is required",
        meesage: "invalid email address",
        role: "Role",
        rolePlaceholder: "Search by name",
        noResultFound: "No result found",
        sendInvitation: "Send Invitation",
        newMemberInvited:"New Member Invited"
      },
      //component//homepage//billing_plan
      billing_plan: {
        heading: "Ready to start!",
        subHeading: "Upgrade by adding payment details. Get free $20 credit.",
        updateButton: "Upgrade",
        content1: "Add full-length videos, live streams, live recording video editing and landscape to portrait videos without any restrictions.",
        content2: "You will not be charged until you fully utilize the 20$ Videograph Credit.",
        viewPricing: "View Pricing"
      },
      //pages//settings//Edit_payment_details
      Edit_payment_details: {
        titile: "Edit Payment Details",
        labelCreditDebit: "Credit or Debit Card",
        labelCreditDebitplaceholder: "Cardnumber",
        required: "This field is required",
        expirationDate: "Expiration Date",
        labelcvv: "CVV",
        labelcvvplaceholder: "CVV number",
        labelBillingAddress: "Billing Address",
        labelBillingAddressplaceholder: "Street address, P.O box,company",
        labelBillingAddress2: "Billing Address 2",
        labelBillingAddressplaceholder2: "Apartment number,Suite,Floor,Etc",
        labelCity: "City",
        labelCityplaceholder: "Enter City",
        labelState: "State",
        labelStatelabel: "Selete state",
        labelCountry: "Country",
        labelCountryplaceholder: "Select country",
        labelBillingEmail: "Billing Email",
        labelBillingEmailplaceholder: "Enter Email address",
        saveButton: "Save Payment Details",
        cancelButton: "Cancel"
      },
      //component//settingstabs//popup//AddMoney
      AddMoney: {
        addMoney: "Add Money",
        currentBalance: "Current balance",
        rechargeWallet: "Recharge Wallet",
        required: "This field is required",
        message: "Please enter only numbers",
        enableAutoRecharge: "Enable auto recharge",
        recommendended: "Recommendended",
        content: "Get uninterrupted access to our services. Modify payment settings when you need.",
        labelWhenMyBalanceIsBelow: "When my balance is below",
        labelAutomaticallyRecharge: "Automatically recharge",
        coutinueButton: "Countinue",
      },
      //component//settingstabs//popup//PaymentSuccess
      PaymentSuccess: {
        PaymentSuccessful: "Payment successful",
        youHaveAdded: "You have added",
        toYourWallet: "To your wallet",
        currentBalanceIs: "Current balance is",
        InvoiceNumber: "Invoice number: #",
        goBack: "Go back",
      },
      //component//settingstabs//popup//Processing
      processing: {
        heading: "Processing your payment",
        content: "This might take few seconds. Please sit down and relax!",
        content2: "Do not close or refresh page."
      },
      //component//settingstabs//popup//Reward
      Reward: {
        congratulations: "Congratulations!",
        content: "You have successfully setup your payment details",
        content1: "Here is your reward of",
        credit: ">$20 credits",
        content2: "We have added the credits to your wallet.",
        okButton: "OK"
      },
      //component//homepage//API Acess Token
      Api_accesstokens: {
        description: "You can create or  revoke API access tokens. Tokens are used to authenticate API request and are environment specific. To know more visit our",
        guide: "guide",
        createButton: "Create new Token",
        th: {
          tokenid: "Token ID",
          environment: "Environment",
          permission: "Permission",
          created: "Created",
          createdBy: "Created by",
          status: "Status",
          actions: "Actions",
        },
        tb: {
          active: "Active",
          activeRevoke: "Access Revoke",
          revoke: "Revoke",
        }
      },
      Revoke_access: {
        heading: "Revoke_access",
        content: "Are you sure you want to revoke the access?",
        content1: "Once access revoke, this token will become invalid for all users. This action cannot be undone.",
        cancelButton: "Cancel",
        revokeButton: "Yes, Revoke"
      },
      //page//settinga/New_acess_token
      New_acess_token: {
        heading: "New Acess Token",
        permission: "Permission",
        content: "To know more permission please visit our",
        tokenAccessGuide: "token access guide",
        labelRead: "Read",
        labelWrite: "Write",
        labelReadOnly: "read only",
        labelAccess: "Access token name",
        required: "This field is required",
        message: "Entered value cannot start/end or have only white space",
        labelAccessPlaceholder: "Devlopment",
        cancel: "Cancel",
        createToken: "Create Token"
      },
      
 EditApi: {
  save: "Save",
  cancel: "Cancel",
  required: "This field is required without space at start/end"
},
      //component//dailog//SecretKey
      SecretKey: {
        heading: "Below is the new Access Token",
        accessTokenId: "Access Token ID:",
        secretKey: "Secret Key:",
        content: "We don't store the secret key. Please copy or download it into your system",
        copied: "Copied",
        download: "Download as .env file",
        done: "Done"
      },
      //component//homepage//signingkeys
      signingkeys: {
        description: "Signing keys are used to sign JSON Web Tokens (JWTs) for securing certain requests. Video keys can be used to secure playback URLs and Data keys can be used to secure access to real-time viewer counts.",
        createButton: "Create new Key",
        th: {
          keyID: "Key ID",
          environment: "Environment",
          productt: "Product",
          created: "Created",
          status: "Status",
          actions: "Actions",
        },
        tb: {
          active: "Active",
          video: "Video",
          data: "Date",
          system: "System"
        }
      },
      //page//setting//Create_singing_keys
      Create_signing_key: {
        heading: "New Signing Key",
        product: "Product",
        searchPlaceholder: "Search by name",
        noResultFound: "No result found",
        cancel: "Cancel",
        createSigningKey: "Create Signing Key"
      },
      // dialog// deletesigningkey
      deleteSigningKey: {
        errorMessage: "signing key deleted",
        header: "Delete Singing Key",
        confirmDelete: "Are you sure you want to delete this Signing Key?",
        deleteMessage: "Once deleted,this Signing key will no longer be available and the action cannot be undone.",
        cancelButton: "Cancel",
        deleteButton: "Yes,Delete"
      },
    },
    module_scheduleReports:{

      list:{
        reportName:"Report Name",
        sendTo:"Send To",
        runAt:"Run At",
        status:"Status",
        timeZone:"TimeZone",
        actions:"Actions",
        resume:"Resume",
        pause:"Pause",
        delete:"Delete",
        edit:"Edit",
        noReportsScheduledPlease:"No reports scheduled. Please",
        setup:"Setup"

      },
      setup:{
        reportName:"Report Name",
        emailTo:"Email To",
        oneTime:"One Time",
        recurring:"Recurring",
        sendAt:"Send At",
        from:"From",
        to:"To",
        daily:"Daily",
        weekly:"Weekly",
        monthly:"Monthly",
        metrics:"Metrics",
        all:"All",
        metricsForOverview:"Metrics for Overview",
        metricsForViewership:"Metrics for Viewership",
        encodedMins:"Encoded mins",
        storedMins:"Stored mins",
        streamedMins:"Streamed mins",
        deviceTypes:"Device Type",
        devices:"Devices",
        contents:"Contents",
        concurrentViewers:"Concurrent Viewers",
        countries:"Countries",
        partners:"Partners",
        noOfViewers:"No.of Viewers",
        sessions:"Sessions",
        totalViewership:"Total Viewership",
        adViewership:"Ad Viewership",
        avgSessionsPerUser:"Avg.Sessions per User",
        avgSessionDuration:"Avg.Session Duration",
        splitAllDataByFilter:"Split All Data by Filter",
        filters:"Filters",
        cancel:"Cancel",
        saveReport:"Save Report",
        namePlaceHolder:"Give your report a name",
        nameError:"Name should not be empty or contain only whitespace",
        nameError1:"Please ensure that the name does not begin with a space.",
        nameError2:"Name should not exceed 64 characters.",
        emailIDPlaceholder:"Enter email ids separated by comma",
        emailError:"Email should not be empty or contain only whitespace",
        required:"This field is required"
      }     

    },
  },




  "hi": {

    // navbar
    module_navbar: {
      title: "वीडियोग्राफ़",
      environments: "वातावरण",
      videos: "वीडियो",
      liveStream: "लाइव स्ट्रीम",
      liveRecording: "लाइव रिकॉर्डिंग",
      monitoring:"  निगरानी",
      adinsertion:"विज्ञापन प्रविष्टि",
      analytics: "एनालिटिक्स",
      infraMonitor:"इन्फ्रामॉनिटर",
      portraitPro: "पोर्ट्रेट प्रो",
      interactiveLive: "इंटरैक्टिव लाइव",
      advAnalytics: "उन्नत वीडियो विश्लेषण",
      eventsLogs: "आयोजन",
      settings: "सेटिंग्स",
      apiDocs: "एपीआई डॉक्स",
      logout: "लॉगआउट"
    },

    //components//utils//EnvDropDown
    module_EnvDropDown: {
      environment: "पर्यावरण",
      noResultFound: "कोई परिणाम नहीं मिला",
      searchByName:"नाम से खोजें"
    },

    // activities
    module_activities: {
      eventDetailActivity: {
        eventId: "इवेंट आईडी",
        data: "तारीख",
        type: "प्रकार",
        eventData: "घटना डेटा"
      },
      events: {
        description1: "इवेंट आपको बताते हैं कि आपके सिस्टम में कुछ घटित हुआ है।",
        description2: "ईवेंट 30 दिनों तक संग्रहीत किए जाएंगे.",
        events: "आयोजन",
        id: "पहचान",
        date: "तारीख",
        noDataFound: "डाटा प्राप्त नहीं हुआ",
        NoEventAvailable: "कोई ईवेंट उपलब्ध नहीं है"
      },
      logDetailActivity: {
        logId: "लॉग आईडी",
        date: "तारीख",
        method: "तरीका",
        url: "यूआरएल",
        requestBody: "अनुरोध निकाय",
        responseBody: "प्रतिक्रिया निकाय"
      },
      activities: {
        heading: "गतिविधियाँ"
      },
      logs: {
        content: "लॉग प्रत्येक एपीआई कार्रवाई को दिखाते हैं। लॉग 30 दिनों तक संग्रहीत किए जाएंगे।",
        status: "दर्जा",
        description: "विवरण",
        date: "तारीख",
        NoDataFound: "डाटा प्राप्त नहीं हुआ",
        NoLogsAvailable: "कोई लॉग उपलब्ध नहीं है"
      }
    },

    // videos
    module_videos: {
      index_page: {
        header: "वीडियो",
        content1: "हमारी सेवा का उपयोग करके अपनी संपत्ति अपलोड करें, ट्रांसकोड करें, स्टोर करें और वितरित करें।",
        content2: "आप अपने उपयोगकर्ताओं के साथ साझा करने के लिए एपीआई का उपयोग करके या सीधे यहां से एक वीडियो अपलोड कर सकते हैं।",
        viewGuide: "गाइड देखें",
        addVideoButton: "नया वीडियो जोड़ें",
        searchVideos: "वीडियो खोजें",
        popupVideoDelete: "वीडियो हटा दिया गया",
        tableHeadings: {
          addedOn: "पर जोड़ा",
          name: "नाम",
          contentId: "सामग्री आईडी",
          imagePreview: "छवि पूर्वावलोकन",
          type: "प्रकार",
          tags:"टैग",
          duration: "अवधि",
          resolution: "संकल्प",
          status: "दर्जा",
          actions: "कार्रवाई"
        },
        noDataFound: "कोई वीडियो डेटा नहीं मिला"
      },
      onboardingPage: {
        header: "वीडियो",
        upload: {
          title: "वीडियो फ़ाइलें अपलोड और स्ट्रीम करें",
          content1: "अपलोड करें, ट्रांसकोड करें, स्टोर करें, और अपने वीडियो का उपयोग करके वितरित करें",
          content2: "वीडियोग्राफ। आप हमारे एपीआई का उपयोग करके या सीधे एक वीडियो अपलोड कर सकते हैं",
          content3: " यहाँ और इसे अपने उपयोगकर्ताओं के लिए डीलिबर करें"
        },
        button: {
          addNewVideo: "नया वीडियो जोड़ें",
          viewGuide: "गाइड देखें"
        },
        onDemandVideoFeatures: {
          title: "ऑन-डिमांड वीडियो फीचर्स",
          videoFeature1: {
            title: "वीडियो क्लिपिंग",
            content: "अपने वीडियो अपलोड करें और उनसे क्लिप बनाएं।"
          },
          videoFeature2: {
            title: "उपशीर्षक",
            content: "एकाधिक उपशीर्षक जोड़ें"
          },
          videoFeature3: {
            title: "उन्नत संपादन",
            content: "एपीआई के माध्यम से एकाधिक छवि और टेक्स्ट ओवरले जोड़ें।"
          },
          videoFeature4: {
            title: "सुरक्षित प्लेबैक",
            content: "हस्ताक्षरित प्लेबैक के साथ अपने वीडियो को निजी बनाएं।"
          }
        }
      },
      // direct_uploade-add new video button
      direct_uploade: {
        createBulkUpload: "बल्क अपलोड बनाएं",
        importBulkVideos: "अपने थोक वीडियो आयात करें",
        selectFile: "फ़ाइल का चयन करें",
        supportedFormatsExcel: "समर्थित फ़ाइल प्रारूप .xlsx (अधिकतम अपलोड सीमा तक",
        videos: "वीडियो)",
        downloadText: "संदर्भ के लिए एक्सेल टेम्पलेट क्लिक करके डाउनलोड करें",
        here: "यहां",
        importButton: "आयात",
        or:"या",
        addNewVideo: "नया वीडियो जोड़ें",
        uploadVideo: "अपनी वीडियो फ़ाइल अपलोड करें",
        placeholder: "वीडियो का नाम दर्ज करें",
        required: "यह फ़ील्ड आवश्यक है",
        message: "दर्ज किया गया मान प्रारंभ/समाप्त नहीं हो सकता या उसमें केवल सफेद स्थान नहीं है",
        name: "नाम*",
        selectFile: "फ़ाइल का चयन करें",
        supportedFormats: "समर्थित प्रारूप .mkv,.mp4,.avi,.3gp,.m4v,.mov,.webm,.wmv,.mxf,.ts",
        fileUploaded: "फ़ाइल अपलोड की गई",
        upload: "डालना",
        selectUpload:"कृपया अपलोड करने के लिए एक फ़ाइल चुनें",
        videoError:"कृपया समर्थित प्रारूपों में से एक में एक वीडियो फ़ाइल का चयन करें: .mkv,.mp4,.avi,.3gp,.m4v,.mov,.webm,.wmv,.mxf,.ts",
        selectFileError:"कृपया एक फ़ाइल चुनें",
        invalidFileFormat:"अमान्य फाइल प्रारूप। केवल Excel फ़ाइलें (.xlsx, .xls) की अनुमति है।",
        maxLimit:"अधिकतम वीडियो सीमा है",
        unableToRead:"फ़ाइल पढ़ने में असमर्थ. कृपया पुन: प्रयास करें।"
      },
      // videodelivery_addnewassets
      videodelivery_addnewassets: {
        postUsingUrl: "वीडियो URL का उपयोग करके पोस्ट करें:",
        postBodyEditor: "पोस्ट बॉडी संपादक:",
        validation: "यह फ़ील्ड आवश्यक है",
        runRequest: "अनुरोध चलाएँ",
        syntaxErr:"वक्य रचना त्रुटि",
        urlErr:"कृपया यूआरएल वैध दर्ज करें",
        urlRequired:"यूआरएल आवश्यक है",
        playBackPolicyErr:"प्लेबैक नीति आवश्यक है"
      },
      // videodetails
      videoDetails: {
        header: "वीडियो सूची",
        editButton: "संपादन करना",
        required: "यह फ़ील्ड आवश्यक है",
        message: "दर्ज किया गया मान प्रारंभ/समाप्त नहीं हो सकता या उसमें केवल सफेद स्थान नहीं है",
        saveButton: "बचाना",
        cancelButton: "रद्द करना",
      },
      // videolist
      videoList: {
        videoDetails: "वीडियो विवरण",
        videoClips: "वीडियो क्लिप",
        thumbnails: "थंबनेल",
        subtitles: "उपशीर्षक",
        deleteVideo: "वीडियो हटाएँ",
        retry:"पुन: प्रयास"
      },
      // videodeliverytabs
      videoDeliveryTabs: {
        overview: "अवलोकन",
        videoClips: "वीडियो क्लिप",
        thumbnails: "थंबनेल",
        subtitles: "उपशीर्षक",
        others: "अन्य"
      },
      // overview- videodeliverytabs
      overview: {
        testVideoBanner: "यह एक निःशुल्क परीक्षण वीडियो है. परीक्षण वीडियो 10 सेकंड तक सीमित हैं, और 24 घंटों के बाद हटा दिए जाते हैं।",
        shareableUrl: "साझा करने योग्य यूआरएल:",
        linkToHls: "एचएलएस से लिंक:",
        embedCode: "लागु किया गया संहिता:",
        linkToThumbnail: "थंबनेल से लिंक करें:",
        mp4Url: "MP4 यूआरएल:",
        analyticsButton: "एनालिटिक्स",
        activitiesButton: "गतिविधियाँ",
        deleteButton: "वीडियो हटाएँ",
        downloadButton: "वीडियो डाउनलोड करें J",
        videoDetails: {
          header: "वीडियो विवरण",
          contentId: "सामग्री आईडी",
          created: "बनाया था",
          status: "दर्जा",
          duration: "अवधि",
          aspectRatio: "आस्पेक्ट अनुपात",
          resolution: "संकल्प",
          streamId: "स्ट्रीम आईडी",
          startTime: "समय शुरू",
          endTime: "अंत समय"
        },
        playbackSample: "प्लेबैक नमूना",
        videoUrls: "वीडियो यूआरएल",
        copied: "कॉपी किया गया",
        videoSourceInfo: {
          header: "वीडियो स्रोत जानकारी",
          title: "वीडियो यूआरएल",
          videoInfo: {
            title: "वीडियो जानकारी",
            width: "चौड़ाई",
            height: "ऊंचाई",
            frameRate: "फ्रेम रेट",
            encoding: "एन्कोडिंग",
            duration: "अवधि"
          },
          audioInfo: {
            title: "ऑडियो जानकारी",
            sampleRate: "नमूना दर",
            encoding: "एन्कोडिंग",
            channels: "चैनल",
            duration: "अवधि",
          }
        }
      },
      // others- videodeliverytabs
      others: {
        titleandDescription: {
          header: "शीर्षक वर्णन",
          title: "शीर्षक",
          titlePlaceHolder: "शीर्षक या वीडियो दर्ज करें",
          titleRequired: "यह फ़ील्ड आवश्यक है",
          description: "विवरण",
          descriptionPlaceHolder: "अपना विवरण दर्ज करें",
          buttonSave: "बचाना",
          message: "दर्ज किया गया मान प्रारंभ/समाप्त नहीं हो सकता या उसमें केवल सफेद स्थान नहीं है",
        },
        message1: "यह फ़ील्ड आवश्यक है",
        tagsandMetadata: {
          header: "टैग और मेटाडेटा",
          title: "टैग",
          tagsRequired: "यह फ़ील्ड आवश्यक है, कृपया टैग जोड़ने के लिए एंटर दबाएं",
          tagsComma: "प्रत्येक टैग के बाद अल्पविराम दर्ज करें",
          description: "मेटा डेटा",
          keyPlaceHolder: "एक कुंजी दर्ज करें",
          valuePlaceHolder: "एक मान दर्ज करें",
          buttonAdd: "जोड़ना",
          buttonSave: "बचाना",
          message: "दर्ज किया गया मान प्रारंभ/समाप्त नहीं हो सकता या उसमें केवल सफेद स्थान नहीं है",
        },
        toastMsg:{
          one:'शीर्षक और विवरण सफलतापूर्वक सहेजा गया',
          two:'टैग और मेटाडेटा सफलतापूर्वक सहेजे गए'
        }
      },
      // thumbnails
      thumbnails: {
        header: "इमेज टूल का उपयोग करके थंबनेल बनाएं",
        errorMessage: "कृपया वीडियो की लंबाई से कम समय दर्ज करें",
        time: "समय*",
        required: "यह फ़ील्ड आवश्यक है",
        message1: "कृपया hh:mm:ss प्रारूप दर्ज करें",
        imageWidth: "इमेज की चौड़ाई",
        placeHolder1: "चौड़ाई px में दर्ज करें",
        message2: "कृपया केवल संख्याएँ दर्ज करें",
        imageHeight: "चित्र की ऊंचाई",
        placeHolder2: "px में ऊंचाई दर्ज करें",
        createButton: "थंबनेल बनाएं",
        download: "नीचे दिए गए यूआरएल से छवि डाउनलोड करें:"
      },
      // thumbnailsApi
      thumbnailsApi: {
        header: "छवि एपीआई का उपयोग करके थंबनेल बनाएं",
        runRequest: "अनुरोध चलाएँ",
        download: "नीचे दिए गए यूआरएल से छवि डाउनलोड करें:"
      },
      //gifs
      gifs: {
        create: "वीडियो एडिटर का उपयोग करके GIF बनाएं",
        startTime: "समय शुरू",
        endTime: "अंत समय",
        imageWidth: "इमेज की चौड़ाई",
        placeHolder1: "px में चौड़ाई दर्ज करें डिफ़ॉल्ट 320px है",
        imageHeight: "चित्र की ऊंचाई",
        placeHolder2: "px में ऊंचाई दर्ज करें",
        createButton: "GIF बनाएं",
        download: "नीचे दिए गए URL से छवि डाउनलोड करें",
        createGif: "इमेज एपीआई का उपयोग करके GIF बनाएं",
        runRequest: "अनुरोध चलाएँ"
      },
      subtitles: {
        header: "उपशीर्षक की सूची",
        addedOn: "पर जोड़ा",
        name: "नाम",
        subtitleId: "उपशीर्षक आईडी",
        format: "प्रारूप",
        actions: "कार्रवाई",
        uploadSubtitleFile: "उपशीर्षक फ़ाइलें अपलोड करें",
        uploadYourFile: "अपनी फ़ाइल अपलोड करें",
        name2: "नाम*",
        required: "यह फ़ील्ड आवश्यक है",
        message: "दर्ज किया गया मान प्रारंभ/समाप्त नहीं हो सकता या उसमें केवल सफेद स्थान नहीं है",
        languageCode: "भाषा कोड*",
        support: "बंद कैप्शन का समर्थन करता है",
        selectFile: "फ़ाइल का चयन करें",
        supportedFormats: "समर्थित प्रारूप .SRT, .VTT",
        uploadButton: "डालना",
        postUsingUrl: "वीडियो URL का उपयोग करके पोस्ट करें:",
        runRequest: "अनुरोध चलाएँ",
        noDataFound: "कोई उपशीर्षक फ़ाइल नहीं मिली"
      },
      // videoClips- videodeliveryTabs
      videoClips: {
        header: "वीडियो क्लिप्स की सूची",
        noVideoFound: "कोई वीडियो क्लिप नहीं मिली",
        tableHeadings: {
          addedOn: "पर जोड़ा गया",
          name: "नाम",
          videoId: "वीडियो आईडी",
          actions: "कार्यों",
        },
        viewVideo: "वीडियो देखें",
        createClips: "वीडियो क्लिप्स बनाएँ"
      },
      videoClipsTabs: {
        useVideoEditor: "वीडियो संपादक का उपयोग करें",
        useApi: "API का उपयोग करें"
      },
      // videoeditor- videoclipstabs
      videoEditor: {
        name: "नाम*",
        startTime: "प्रारंभ समय*",
        endTime: "अंत समय*",
        placeHolder1: "क्लिप का नाम",
        required: "यह फ़ील्ड आवश्यक है",
        message1: "दर्ज किया गया मान प्रारंभ/समाप्त नहीं हो सकता या उसमें केवल सफेद स्थान नहीं है",
        message2: "कृपया hh:mm:ss प्रारूप दर्ज करें",
        createButton: "वीडियो क्लिप बनाएँ"
      },
      // using_api
      usingApi: {
        runRequest: "अनुरोध चलाएँ"
      },
    },

    //Environment 
    module_environment: {
      index: {
        header: {
          title: "पर्यावरण",
          description: "एक वातावरण आपको अपना डेटा समूहीकृत करने की अनुमति देता है। हमारे पास चार प्रकार के वातावरण हैं विकास, क्यूए, स्टेजिंग और उत्पादन। आप आवश्यकतानुसार नाम बदल सकते हैं या अतिरिक्त वातावरण बना सकते हैं।",
          addbutton: "पर्यावरण जोड़ें"
        },
        tableheader: {
          name: "नाम",
          video: "वीडियो",
          analytics: "एनालिटिक्स",
        },
        tb: {
          il7d: "पिछले 7 दिनों में",
          encoded: " इनकोडिंग",
          stored: "संग्रहित",
          streamed: "स्ट्रीम",
          hours: "घंटे",
          apitokens: " एपीआई टोकन",
          views: "दृश्य",
          uniqueviews: "अनोखे नज़ारे",
          watchedtime: "देखने का समय",
          envKey: "एनवी कुंजी",
          livestream: "लाइव स्ट्रीम",
          liverecording: "लाइव रिकॉर्डिंग",
          table_card_video_description: "लाइव और ऑन-डिमांड वीडियो स्ट्रीमिंग के लिए वीडियोग्राफ एपीआई का उपयोग करें।",
          table_card_analytics_description: "इस परिवेश में वीडियो अपलोड करके वीडियो मेट्रिक्स को ट्रैक करना प्रारंभ करें। ",
        }
      },
    },
    module_SelectEnv: {
      validationMessage: "यह फ़ील्ड प्रारंभ/अंत/केवल स्थान पर स्थान के बिना आवश्यक है",
      noResultFound: "कोई परिणाम नहीं मिला",
      cancel: "रद्द करना",
      save: "बचाना",
      placeholder: "नाम से खोजें"

    },

    //Environment add new environment page
    module_add_new_environment: {
      title: "नया वातावरण जोड़ें",
      labelenv: "पर्यावरण का नाम",
      label_env_ph: "एक नाम दर्ज करें",
      label_required: "यह फ़ील्ड आवश्यक है",
      label_message: "दर्ज किया गया मान प्रारंभ/समाप्त नहीं हो सकता या केवल सफेद स्थान नहीं है",
      label_type: "प्रकार",
      no_result_found: "कोई परिणाम नहीं मिला",
      cancel: "रद्द करना",
      addbutton: "पर्यावरण जोड़ें",
      labelTypePlaceholder: "नाम से खोजें",
    },

    //components//ad_list
    module_ad_list: {
      failedToUpload: "अपलोड करने में विफल",
      pendingVideo: "लंबित वीडियो",
      processing: "प्रसंस्करण",
      streamDetails: "स्ट्रीम विवरण",
      disableStream: "स्ट्रीम अक्षम करें",
      videoDetails: "वीडियो विवरण",
    },

    //Live streams
    module_livestream: {
      onboarding: {
        header: "लाइव स्ट्रीम",
        title: "लाइव स्ट्रीम प्रकाशित करें ",
        content1: "वीडियोग्राफ़ लाइव स्ट्रीम एपीआई का उपयोग करें और एचएलएस लाइव को एकीकृत करें",
        content2: "अपने एप्लिकेशन में स्ट्रीम करें। एपीआई का उपयोग करके या सीधे डैशबोर्ड से लाइव स्ट्रीम बनाएं।",
        buttonCreate: "लाइव स्ट्रीम बनाएं",
        buttonView: " गाइड देखें",
        popupVideoDelete: "वीडियो हटा दिया गया",
        features: {
          heading: "लाइव स्ट्रीमिंग सुविधाएँ",
          title1: "सुरक्षित स्ट्रीमिंग",
          content1: "हस्ताक्षरित प्लेबैक के साथ लाइव स्ट्रीम को निजी बनाएं।",
          titile2: "कम विलंबता",
          content2: "लाइव स्ट्रीमिंग विलंबता 4 सेकंड जितनी कम।",
          title3: "विज्ञापन प्रविष्टियाँ",
          content3: "लाइव स्ट्रीम में विज्ञापन डालना चाहते हैं?",
          title4: "लाइव इंटरैक्शन",
          content4: "लाइव इंटरैक्शन जोड़ने के लिए सहायता चाहिए? ",
          talkToUs: "हमसे बात करें"
        }
      },
      createLiveStreaming: {
        header: "लाइव स्ट्रीम बनाएं",
        postUsingUrl: "वीडियो यूआरएल का उपयोग करके पोस्ट करें",
        postBodyEditor: "पोस्टबॉडी एडिटर",
        buttonRunRequest: "नुरोध चलाएँ",
        validation: "यह फ़ील्ड आवश्यक है"
      },
      index: {
        header: "लाइव स्ट्रीम",
        description: "वीडियोग्राफ़ लाइव स्ट्रीम एपीआई का उपयोग करें और लाइव वीडियो को अपने एप्लिकेशन में एकीकृत करें।",
        description_view: "गाइड देखें",
        create_button: "लाइव स्ट्रीम बनाएं",
        placeholder: "लाइव स्ट्रीम खोजें",
        //th:table head
        th: {
          addon: "पर जोड़ा",
          name: "नाम",
          StreamID: "स्ट्रीम आईडी",
          streamKey: "स्ट्रीम कुंजी",
          imagePreview: "छवि पूर्वावलोकन",
          type: "रकार",
          tags:"टैग",
          status: "दर्जा",
          actions: "क्रियाएँ",
          noLiveDataFound: "कोई लाइव डेटा नहीं मिला"
        }
      },
      live_streaming_details: {
        header: "लाइव स्ट्रीम",
        edit: "यह",
        cancelButton: "रद्द करना",
        saveButton: "बचाना"
      },
      //pages//livestream_tabs
      livestream_tabs: {
        overview: "अवलोकन",
        videoClips: "वीडियो क्लिप",
        advancemonitor:"उन्नत निगरानी",
        others: "अन्य",
        customUrls: "कस्टम यूआरएल"
      },
      //live stream//--live stream tab
      overview: {
        videourl: {
          title: "वीडियो यूआरएल",
          shareableURL: "साझा करने योग्य यूआरएल",
          linkToHLS: "एचएलएस से लिंक करें",
          embedCode: "लागु किया गया संहिता:",
          linkToThumbnail: "थंबनेल से लिंक करें:",
        },
        button_analytics: "एनालिटिक्स",
        button_activities: "गतिविधियाँ",
        button_delete: "स्ट्रीम हटाएँ",
        liveStreamDetails: {
          title: "लाइव स्ट्रीम आईडी",
          ingestURL: "अंगूठेयूआरएल",
          rTMPsURL: "आरटीएमपीयूआरएल",
          streamKey: "स्ट्रीम कुंजी",
          Created: "बनाया गया",
          status: "स्थिति",
          copy: "कॉपी करें",
          activesince: "तबसे सक्रिय",
          copied:"कॉपी किया गया"
        },
        livestream: {
          title: 'लाइव स्ट्रीम',
          start: "प्रारंभ",
          startStop: "स्टार्ट/स्टॉप",
          live: "रहना",
          active: "सक्रिय",
          offline: "ऑफलाइन"
        },
        healthMonitoring: {
          streamHealth: "स्ट्रीम स्वास्थ्य",
          last1Hour: "अंतिम 1 घंटा",
          last4Hours: "पिछले 4 घंटे",
          last8Hours: "पिछले 8 घंटे",
          videoFrameRate: "वीडियो फ़्रेम दर (एफपीएस)",
          videoBitrate: "वीडियो बिटरेट (वीबीआर) केबीपीएस में"
        }
      },
      customUrls: {
        playbackUrls: {
          customize: "प्लेबैक यूआरएल को अनुकूलित करें!",
          addCustom: "प्लेबैक यूआरएल में पार्टनर, शैली, भाषा आदि जैसे कस्टम पैरामीटर जोड़ें",
          createCustom: "कस्टम यूआरएल बनाएं"
        },
        playbackList: {
          createCustom: "कस्टम यूआरएल बनाएं",
          placeholder: "नाम या प्लेबैक यूआरएल के साथ खोजें",
          addedOn: "पर जोड़ा",
          name: "नाम",
          customPlaybackUrl: "कस्टम प्लेबैक यूआरएल",
          status: "स्थिति",
          actions: "कार्रवाई",
          copied: "कॉपी किया गया",
          noResultFound: "कोई परिणाम नहीं मिला",
          itemsPerPage: "आइटम प्रति पेज :",
          editUrl: "यूआरएल संपादित करें",
          duplicate: "डुप्लिकेट",
          delete: "मिटाना",
          toastMsg1: "प्लेबैक यूआरएल हटा दिया गया",
          toastMsg2: "प्लेबैक यूआरएल फिर से शुरू हुआ",
          toastMsg3: "प्लेबैक यूआरएल रोक दिया गया"
        },
        createCustomUrl: {
          createCustom: "कस्टम यूआरएल बनाएं",
          editCustom: "कस्टम यूआरएल संपादित करें",
          name: "नाम",
          parameters: "पैरामीटर",
          partner: "साथी",
          genre: "शैली",
          none: "कोई नहीं",
          language: "भाषा",
          category: "वर्ग",
          cancel: "रद्द करना",
          createUrl: "यूआरएल बनाएं",
          editUrl: "संपादन करना"
        },
      },
      others: {
        titleandDescription: {
          header: "शीर्षक वर्णन",
          title: "शीर्षक",
          titlePlaceHolder: "शीर्षक या वीडियो दर्ज करें",
          titleRequired: "यह फ़ील्ड आवश्यक है",
          description: "विवरण",
          descriptionPlaceHolder: "अपना विवरण दर्ज करें",
          buttonAdd: "जोड़ना",
          buttonSave: "बचाना",
          message: "दर्ज किया गया मान प्रारंभ/समाप्त नहीं हो सकता या उसमें केवल सफेद स्थान नहीं है",
          message1: "यह फ़ील्ड आवश्यक है"
        },
        tagsandMetadata: {
          header: "टैग और मेटाडेटा",
          title: "टैग",
          tagsRequired: "यह फ़ील्ड आवश्यक है, कृपया टैग जोड़ने के लिए एंटर दबाएं",
          tagsComma: "प्रत्येक टैग के बाद अल्पविराम दर्ज करें",
          description: "मेटा डेटा",
          keyPlaceHolder: "एक कुंजी दर्ज करें",
          valuePlaceHolder: "एक मान दर्ज करें",
          buttonSave: "बचाना",
          message: "दर्ज किया गया मान प्रारंभ/समाप्त नहीं हो सकता या उसमें केवल सफेद स्थान नहीं है",
        },
        toastMsg:{
          one:'शीर्षक और विवरण सफलतापूर्वक सहेजा गया',
          two:'टैग और मेटाडेटा सफलतापूर्वक सहेजे गए'
        },
        thumbnails:{
          thumbnails: "थंबनेल",
          selectImage: "छवि चुने",
          supportedFormats: "समर्थित प्रारूप .jpg, .jpeg, .png",
          upload: "डालना",
          errorMsg: "कृपया एक छवि चुनें",
          errorMsg2: "अमान्य प्रारूप, केवल छवियों (.jpeg,png,jpg) की अनुमति है",
          toastMsg: "थंबनेल सफलतापूर्वक जोड़ा गया"
        }  
      },
      //component//live_list
      live_list: {
        streamDetails: "स्ट्रीम विवरण",
        deleteStream: "स्ट्रीम हटाएँ",
        videoDetails: "वीडियो विवरण"
      },
      Delete_content: {
        heading: "स्ट्रीम हटाएँ",
        content: "क्या आप वाकई इस स्ट्रीम को हटाना चाहते हैं?",
        content1: "एक बार हटाए जाने के बाद, इस स्ट्रीम की निगरानी नहीं की जाएगी और सभी ऐतिहासिक डेटा मिटा दिए जाएंगे।",
        cancelButton: "रद्द करना",
        deleteButton: "हां, हटाएं",
        conHeading: "सामग्री हटाएँ",
        conContent: "क्या आप वाकई इस सामग्री को हटाना चाहते हैं?",
        conContent1: "एक बार हटाए जाने के बाद, इस सामग्री की निगरानी नहीं की जाएगी और सभी ऐतिहासिक डेटा मिटा दिए जाएंगे।",
        conCancelButton: "रद्द करना",
        conDeleteButton: "हां, हटाएं",
      }
    },

    module_adinsertion:{
      index:{
        header:"विज्ञापन प्रविष्टि",
        description:"अपने प्रोग्राम में विज्ञापनों को बदलने के लिए वीडियोग्राफ़ विज्ञापन प्रविष्टि एपीआई का उपयोग करें",
        button:"विज्ञापन प्रविष्टि बनाएँ",
      th: {
        addon: "पर जोड़ा",
          name: "नाम",
          StreamID: "स्ट्रीम आईडी",
          imagePreview: "छवि पूर्वावलोकन",
          type: "रकार",
          tags:"टैग",
          status: "दर्जा",
          actions: "क्रियाएँ",
      },
    },
    overview: {
      adInsertionDetails: "विज्ञापन प्रविष्टि विवरण",
      adInsertionId: "विज्ञापन प्रविष्टि आईडी",
      preRoll: "पूर्व रोल",
      maxPreRoll: "प्रीरोल अधिकतम अनुमत अवधि",
      finalUrl: "अंतिम यूआरएल",
      adTagUrl: "विज्ञापन टैग यूआरएल:",
      playbackParams: "प्लेयर पैरामीटर्स के साथ प्लेबैक यूआरएल:",
      playbackUrl: "प्लेबैक यूआरएल:",
      edit: "संपादन करना"
    },
},
    // portraitPro
    module_portraitPro: {
      index: {
        header: "पोर्ट्रेट प्रो",
        description: "अपने वीडियो को पोट्रेट अनुपात में सेकंडों में स्वचालित रूप से क्रॉप करने के लिए वीडियोग्राफ के एआई-संचालित लैंडस्केप टू पोर्ट्रेट वीडियो क्रॉपिंग टूल का उपयोग करें।",
        createButton: "पोर्ट्रेट वीडियो बनाएं",
        searchVideos: "वीडियो खोजें",
        viewGuide: "गाइड देखें",
        tableHeadings: {
          addedOn: "पर जोड़ा",
          name: "नाम",
          contentId: "सामग्री आईडी",
          imagePreview: "छवि पूर्वावलोकन",
          type: "प्रकार",
          tags:"टैग",
          duration: "अवधि",
          resolution: "संकल्प",
          status: "दर्जा",
          actions: "कार्रवाई"
        },
        noDataFound: "कोई वीडियो डेटा नहीं मिला"
      },
      portraitpro_details: {
        heading: "पोर्ट्रेट प्रो",
        editButton: "",
        save: "बचाना",
        cancel: "रद्द करना"
      },
      onboardingPage: {
        header: "पोर्ट्रेट प्रो",
        title: "अगली पीढ़ी - एआई पोर्ट्रेट वीडियो क्रॉपिंग",
        description1: "अपने वीडियो को प्रकाशित करने के लिए उसे काटने में घंटों न बर्बाद करें",
        description2: "सोशल मीडिया प्लेटफॉर्म, वीडियोग्राफ के एआई-संचालित परिदृश्य का उपयोग करें",
        description3: "अपने आप को स्वचालित रूप से क्रॉप करने के लिए पोर्ट्रेट वीडियो क्रॉपिंग टूल",
        description4: "सेकंडों में वीडियो और पोट्रेट का अनुपात निःशुल्क।",
        transformVideo: "अपना वीडियो बदलें!",
        selectFile: "फ़ाइल का चयन करें",
        or: "या",
        placeHolder: "(.mp4) वीडियो URL दर्ज करें",
        message: "क्रुपया मान्य यूआरएल दर्ज करें",
        uploadmessage: "केवल .mp4 फ़ाइलें अपलोड करें",
        createButton: "पोर्ट्रेट वीडियो बनाएं",
        subscribedFalse1: "भुगतान विवरण सेटअप करें और निःशुल्क $20 क्रेडिट प्राप्त करें,",
        subscribedFalse2: "मुफ़्त क्रेडिट के साथ अपने वीडियो को रूपांतरित करें।",
        upgrade: "उन्नत करना"
      },
      createNewPortrait: {
        header: "नया पोर्ट्रेट वीडियो बनाएं",
        uploadFile: "अपनी वीडियो फ़ाइल अपलोड करें",
        name: "नाम*",
        placeHolder: "वीडियो का नाम दर्ज करें",
        required: "यह फ़ील्ड आवश्यक है",
        message: "दर्ज किया गया मान प्रारंभ/समाप्त नहीं हो सकता या उसमें केवल सफेद स्थान नहीं है",
        selectFile: "फ़ाइल का चयन करें",
        or: "या",
        placeHolder2: "(.mp4) वीडियो URL दर्ज करें",
        message2: "क्रुपया मान्य यूआरएल दर्ज करें",
        supportedFormats: "समर्थित प्रारूप mp4",
        createButton: "पोर्ट्रेट वीडियो बनाएं"
      },
      // sociallist
      socialList: {
        videoDetails: "वीडियो विवरण",
        thumbnails: "थंबनेल",
        deleteVideo: "वीडियो हटाएँ"
      },
      // overview- socialclipstabs
      overview: {
        testVideoBanner: "यह एक निःशुल्क परीक्षण वीडियो है. परीक्षण वीडियो 10 सेकंड तक सीमित हैं, और 24 घंटों के बाद हटा दिए जाते हैं।",
        linkToHls: "एचएलएस से लिंक:",
        embedCode: "लागु किया गया संहिता:",
        linkToThumbnail: "थंबनेल से लिंक करें:",
        mp4Url: "MP4 यूआरएल:",
        activitiesButton: "गतिविधियाँ",
        deleteButton: "वीडियो हटाएँ",
        downloadButton: "वीडियो डाउनलोड करें J",
        videoDetails: {
          header: "वीडियो विवरण",
          contentId: "सामग्री आईडी",
          created: "बनाया था",
          status: "दर्जा",
          duration: "अवधि",
          aspectRatio: "आस्पेक्ट अनुपात",
          resolution: "संकल्प",
          maxFrameRate: "अधिकतम फ़्रेम दर",
          streamId: "स्ट्रीम आईडी",
          startTime: "समय शुरू",
          endTime: "अंत समय"
        },
        playbackSample: "प्लेबैक नमूना",
        videoUrls: "वीडियो यूआरएल",
        copied: "कॉपी किया गया",
        videoSourceInfo: {
          header: "वीडियो स्रोत जानकारी",
          title: "वीडियो यूआरएल",
          videoInfo: {
            title: "वीडियो जानकारी",
            width: "चौड़ाई",
            height: "ऊंचाई",
            frameRate: "फ्रेम रेट",
            encoding: "एन्कोडिंग",
            duration: "अवधि"
          },
          audioInfo: {
            title: "ऑडियो जानकारी",
            sampleRate: "नमूना दर",
            encoding: "एन्कोडिंग",
            channels: "चैनल",
            duration: "अवधि",
          }
        }
      },
      // others- socialcliptabs
      others: {
        titleandDescription: {
          header: "शीर्षक वर्णन",
          title: "शीर्षक",
          titlePlaceHolder: "शीर्षक या वीडियो दर्ज करें",
          titleRequired: "यह फ़ील्ड आवश्यक है",
          description: "विवरण",
          descriptionPlaceHolder: "अपना विवरण दर्ज करें",
          buttonSave: "बचाना",
          message: "दर्ज किया गया मान प्रारंभ/समाप्त नहीं हो सकता या उसमें केवल सफेद स्थान नहीं है",
        },
        message1: "यह फ़ील्ड आवश्यक है",
        tagsandMetadata: {
          header: "टैग और मेटाडेटा",
          title: "टैग",
          tagsRequired: "यह फ़ील्ड आवश्यक है, कृपया टैग जोड़ने के लिए एंटर दबाएं",
          tagsComma: "प्रत्येक टैग के बाद अल्पविराम दर्ज करें",
          description: "मेटा डेटा",
          keyPlaceHolder: "एक कुंजी दर्ज करें",
          valuePlaceHolder: "एक मान दर्ज करें",
          buttonAdd: "जोड़ना",
          buttonSave: "बचाना",
          message: "दर्ज किया गया मान प्रारंभ/समाप्त नहीं हो सकता या उसमें केवल सफेद स्थान नहीं है",
        },
        toastMsg:{
          one:'शीर्षक और विवरण सफलतापूर्वक सहेजा गया',
          two:'टैग और मेटाडेटा सफलतापूर्वक सहेजे गए'
        }
      },
      // thumbnails
      thumbnails: {
        header: "इमेज टूल का उपयोग करके थंबनेल बनाएं",
        errorMessage: "कृपया वीडियो की लंबाई से कम समय दर्ज करें",
        time: "समय*",
        required: "यह फ़ील्ड आवश्यक है",
        message1: "कृपया hh:mm:ss प्रारूप दर्ज करें",
        imageWidth: "इमेज की चौड़ाई",
        placeHolder1: "चौड़ाई px में दर्ज करें",
        message2: "कृपया केवल संख्याएँ दर्ज करें",
        imageHeight: "चित्र की ऊंचाई",
        placeHolder2: "px में ऊंचाई दर्ज करें",
        createButton: "थंबनेल बनाएं",
        download: "नीचे दिए गए यूआरएल से छवि डाउनलोड करें:"
      },
      // thumbnailsApi
      thumbnailsApi: {
        header: "छवि एपीआई का उपयोग करके थंबनेल बनाएं",
        runRequest: "अनुरोध चलाएँ",
        download: "नीचे दिए गए यूआरएल से छवि डाउनलोड करें:"
      },
      // socialClipTabs- components
      socialClipTabs: {
        overview: "अवलोकन",
        thumbnails: "थंबनेल",
        others: "अन्य"
      },
      // videoeditor- socialclipstabs/createvideoclips
      videoEditor: {
        name: "नाम*",
        startTime: "प्रारंभ समय*",
        endTime: "अंत समय*",
        placeHolder1: "क्लिप का नाम",
        required: "यह फ़ील्ड आवश्यक है",
        message1: "दर्ज किया गया मान प्रारंभ/समाप्त नहीं हो सकता या उसमें केवल सफेद स्थान नहीं है",
        message2: "कृपया hh:mm:ss प्रारूप दर्ज करें",
        createButton: "वीडियो क्लिप बनाएँ"
      },
      // using_api
      usingApi: {
        runRequest: "अनुरोध चलाएँ"
      },
    },

    //liveRecording
    module_liveRecording: {
      index: {
        header: "लाइव रिकॉर्डिंग",
        description: "प्रोग्राम रिकॉर्ड करने और उससे वीडियो क्लिप बनाने के लिए वीडियोग्राफ़ लाइव रिकॉर्डिंग एपीआई का उपयोग करें।",
        createButton: "लाइव रिकॉर्डिंग बनाएं",
        searchPlaceHolder: "लाइव रिकॉर्डिंग खोजें",
        viewGuide: "गाइड देखें",
        popupVideoDelete: "वीडियो हटा दिया गया",
        tableHeadings: {
          addedOn: "पर जोड़ा",
          name: "नाम",
          streamId: "स्ट्रीम आईडी",
          imagePreview: "छवि पूर्वावलोकन",
          type: "प्रकार",
          tags:"टैग",
          duration: "अवधि",
          resolution: "संकल्प",
          status: "दर्जा",
          actions: "कार्रवाई"
        },
        noDataFound: "कोई लाइव रिकॉर्डिंग नहीं मिली"
      },
      onboardingPage: {
        header: "लाइव रिकॉर्डिंग",
        title: "लाइव स्ट्रीम रिकॉर्ड करें",
        description1: "पैरामीटर को पास करके लाइव स्ट्रीम रिकॉर्ड करें",
        description2: "'रिकॉर्ड': लाइव स्ट्रीम बनाते समय सच है। एक बार शुरू होने के बाद, लाइव स्ट्रीम",
        description3: "रिकॉर्डिंग 12 घंटे के लिए उपलब्ध होगी.",
        createButton: "लाइव रिकॉर्डिंग बनाएँ",
        viewGuide: "गाइड देखें",
        liveRecordingFeatures: {
          title: "लाइव रिकॉर्डिंग सुविधाएँ",
          feature1: "रीयलटाइम वीडियो क्लिपिंग",
          content1: "लाइव स्ट्रीम रिकॉर्डिंग से क्लिप बनाएँ.",
          feature2: "रिकॉर्डिंग प्लेबैक",
          content2: "हस्ताक्षरित URL के साथ सुरक्षित रिकॉर्डिंग प्लेबैक.",
          feature3: "सुरक्षित स्ट्रीमिंग",
          content3: "हस्ताक्षरित प्लेबैक के साथ लाइव स्ट्रीम को सुरक्षित बनाएं.",
          feature4: "लाइव इंटरैक्शन",
          content4: "लाइव इंटरैक्शन जोड़ने के लिए मदद की आवश्यकता है? ",
          talkToUs: "हमसे बात करें"
        }
      },
      createLiveRecording: {
        header: "लाइव रिकॉर्डिंग बनाएं",
        postUsingUrl: "वीडियो यूआरएल का उपयोग करके पोस्ट करें",
        postBodyEditor: "पोस्टबॉडी एडिटर",
        buttonRunRequest: "नुरोध चलाएँ",
        validation: "यह फ़ील्ड आवश्यक है",
        runRequest: "अनुरोध चलाएँ"
      },
      // liverecordingdetails
      liveRecordingDetails: {
        liveRecording: "लाइव रिकॉर्डिंग",
        editButton: "संपादन करना",
        required: "यह फ़ील्ड आवश्यक है",
        message: "दर्ज किया गया मान प्रारंभ/समाप्त नहीं हो सकता या उसमें केवल सफेद स्थान नहीं है",
        saveButton: "बचाना",
        cancelButton: "रद्द करना"
      },
      // liverecordingtabs- component
      liveRecordingTabs: {
        overview: "अवलोकन",
        videoClips: "वीडियो क्लिप",
        others: "अन्य"
      },
      // videoClips- liverecordingTabs
      videoClips: {
        header: "वीडियो क्लिप्स की सूची",
        noVideoFound: "कोई वीडियो क्लिप नहीं मिली",
        tableHeadings: {
          addedOn: "पर जोड़ा गया",
          name: "नाम",
          videoId: "वीडियो आईडी",
          actions: "कार्यों",
        },
        viewVideo: "वीडियो देखें",
        createClips: "वीडियो क्लिप्स बनाएँ"
      },
      // videoeditor- recordingvideoclipstabs
      videoEditor: {
        name: "नाम*",
        startTime: "प्रारंभ समय*",
        endTime: "अंत समय*",
        placeHolder1: "क्लिप का नाम",
        placeHolder2: "युग स्वरूप में प्रवेश करें",
        required: "यह फ़ील्ड आवश्यक है",
        message: "कृपया युग स्वरूप में दर्ज करें",
        createButton: "वीडियो क्लिप बनाएँ"
      },
      // using_api
      usingApi: {
        runRequest: "अनुरोध चलाएँ"
      },
      recordingVideoClipsTabs: {
        useVideoEditor: "वीडियो संपादक का उपयोग करें",
        useApi: "API का उपयोग करें"
      },
      // overview
      overview: {
        videoUrl: {
          title: "वीडियो यूआरएल",
          shareableUrl: "साझा करने योग्य यूआरएल",
          linkToHls: "एचएलएस से लिंक करें",
          embedCode: "लागु किया गया संहिता:",
          linkToThumbnail: "थंबनेल से लिंक करें:",
        },
        buttonAnalytics: "एनालिटिक्स",
        buttonActivities: "गतिविधियाँ",
        buttonDelete: "स्ट्रीम हटाएँ",
        liveStreamDetails: {
          title: "लाइव स्ट्रीम आईडी",
          ingestUrl: "अंगूठेयूआरएल",
          rtmpsUrl: "आरटीएमपीयूआरएल",
          streamKey: "स्ट्रीम कुंजी",
          created: "बनाया गया",
          status: "स्थिति",
          copy: "कॉपी करें",
          activeSince: "तबसे सक्रिय",
          copied:"कॉपी किया गया"
        },
        liveStream: {
          title: 'लाइव स्ट्रीम प्लेयर',
          start: "प्रारंभ",
          startStop: "स्टार्ट/स्टॉप",
          live: "रहना",
          active: "सक्रिय",
          offline: "ऑफलाइन"
        }
      },
      // others- liverecordingtabs
      others: {
        message1: "यह फ़ील्ड आवश्यक है",
        titleandDescription: {
          header: "शीर्षक वर्णन",
          title: "शीर्षक",
          titlePlaceHolder: "शीर्षक या वीडियो दर्ज करें",
          titleRequired: "यह फ़ील्ड आवश्यक है",
          description: "विवरण",
          descriptionPlaceHolder: "अपना विवरण दर्ज करें",
          buttonSave: "बचाना",
          message: "दर्ज किया गया मान प्रारंभ/समाप्त नहीं हो सकता या उसमें केवल सफेद स्थान नहीं है",
        },
        tagsandMetadata: {
          header: "टैग और मेटाडेटा",
          title: "टैग",
          tagsRequired: "यह फ़ील्ड आवश्यक है, कृपया टैग जोड़ने के लिए एंटर दबाएं",
          tagsComma: "प्रत्येक टैग के बाद अल्पविराम दर्ज करें",
          description: "मेटा डेटा",
          keyPlaceHolder: "एक कुंजी दर्ज करें",
          valuePlaceHolder: "एक मान दर्ज करें",
          buttonAdd: "जोड़ना",
          buttonSave: "बचाना",
          message: "दर्ज किया गया मान प्रारंभ/समाप्त नहीं हो सकता या उसमें केवल सफेद स्थान नहीं है",
        },
        toastMsg:{
          one:'शीर्षक और विवरण सफलतापूर्वक सहेजा गया',
          two:'टैग और मेटाडेटा सफलतापूर्वक सहेजे गए'
        }
      },
      recording_list: {
        streamDetails: "वीडियो विवरण",
        deleteStream: "स्ट्रीम हटाएँ",
        videoDetails: "वीडियो विवरण",
        videoClips: "वीडियो क्लिप"
      }
    },

    // Accounts
    module_account: {
      index: {
        header: "हिसाब किताब",
        errorMessage: "विशेष वर्णों/संख्याओं की अनुमति नहीं है",
        firstNameMessage: "प्रथम नाम में कम से कम 3 अक्षर होने चाहिए",
        lastNameMessage: "अंतिम नाम में कम से कम 3 अक्षर होने चाहिए",
        logout: "लॉग आउट",
        title1: "व्यक्तिगत विवरण",
        firstName: "पहला नाम",
        placeHolder1: "सुनील",
        message: "दर्ज किया गया मान प्रारंभ/समाप्त नहीं हो सकता या उसमें केवल सफेद स्थान नहीं है",
        lastName: "उपनाम",
        placeHolder2: "गावस्कर",
        required: "यह फ़ील्ड आवश्यक है",
        email: "ईमेल",
        saveChanges: "परिवर्तनों को सुरक्षित करें",
        title2: "संगठन",
        createButton: "संगठन बनाएं",
      },
      manageAccount: {
        title: "खाते का प्रबंधन करें",
        errorMessage: "पासवर्ड सफलतापूर्वक बदला गया",
        errorToolTip: "कृपया परिवर्तन के लिए नया पासवर्ड दर्ज करें",
        changePassword: "पासवर्ड बदलें",
        currentPassword: "वर्तमान पासवर्ड",
        required: "यह फ़ील्ड आवश्यक है",
        newPassword: "नया पासवर्ड",
        message: "इसमें 8 अक्षर, एक अपरकेस, एक लोअरकेस, एक नंबर और एक विशेष केस अक्षर होना चाहिए",
        confirmPassword: "नए पासवर्ड की पुष्टि करें",
        message2: "पासवर्ड नये पासवर्ड से मेल खाना चाहिए!",
        changePassword: "पासवर्ड बदलें"
      },
      createOrganization: {
        header: "नया संगठन बनाएं",
        description: "नए संगठन में आपके वर्तमान संगठन से अलग टीमें और सेटिंग्स होंगी।",
        name: "नाम",
        placeHolder: "संगठन का नाम दर्ज करें",
        required: "यह फ़ील्ड आवश्यक है",
        message: "दर्ज किया गया मान प्रारंभ/समाप्त नहीं हो सकता या उसमें केवल सफेद स्थान नहीं है",
        cancelButton: "रद्द करना",
        createButton: "संगठन बनाएं"
      }
    },

    //Events and Logs
    module_events_logs: {
      index: {
        header: "घटनाएँ एवं लॉग"
      },
      events_logs_tabs: {
        events: "आयोजन ",
        logs: "लॉग्स"
      },
      ///evnets&logs component file
      event_detail: {
        tb: {
          eventId: "इवेंट आईडीnt",
          date: "तारीख",
          type: "प्रकार",
          eventData: "घटना डेटा"
        }
      },
      events: {
        th: { //table header
          event: "आयोजन",
          id: "पहचान",
          date: "तारीख"
        },
        content1: "इवेंट आपको बताते हैं कि आपके सिस्टम में कुछ घटित हुआ है।",
        content2: "ईवेंट 30 दिनों तक संग्रहीत किए जाएंगे."
      },
      logs: {
        th: {
          status: "स्थिति",
          description: "विवरण",
          date: "तारीख"
        },
        content: "लॉग प्रत्येक एपीआई कार्रवाई को दिखाते हैं। लॉग 30 दिनों तक संग्रहीत किए जाएंगे।"
      },
      logs_details: {
        tb: {
          logId: "लॉग आईडी",
          date: "तारीख",
          method: "विधि",
          url: "यूआरएल"
        },
        heading1: "अनुरोध निकाय",
        heading2: "प्रतिक्रिया निकाय"
      },
    },

    //Analytics
    module_analytics: {
      index: {
        heading: "सामग्री वितरण विश्लेषिकी",
        timeZone: "समय क्षेत्र:",
        noResultFound: "कोई परिणाम नहीं मिला",
        searchplaceholder: "नाम से खोजें"
      },
      analytics_tabs: {
        overview: "अवलोकन",
        viewership: "दर्शकों की संख्या",
        ads:"विज्ञापन प्रदर्शन",
        filters_button: "फिल्टर",
        export_button: "निर्यात",
        startDate: "आरंभ करने की तिथि",
        endDate: "अंतिम तिथि",
        apply: "आवेदन करना",
        cancel: "रद्द करना",
        dateLast1hr: "अंतिम 1 घंटा",
        dateLast24hr: "पिछले 24 घंटे",
        dateLast7days: "पिछले 7 दिन",
        last1Month: "पिछले 30 दिन",
        today:"आज",
        yesterday:"कल",
        thisWeek:"इस सप्ताह",
        lastWeek:"पिछले सप्ताह",
        thisMonth:"इस महीने",
        lastMonth:"पिछला महीना",
        filters: {
          contentType: "सामग्री प्रकार:",
          deviceName: "डिवाइस का नाम:",
          programme: "कार्यक्रम:",
          deviceType: "उपकरण का प्रकार:",
          partners: "भागीदारों:",
          countries: "देशों:",
          region: "क्षेत्र:",
          cities: "शहरों:",
          content: "अंतर्वस्तु:"
        }
      }
    },

    //component:Analytics tab_
    //overview_component
    module_concurrentViewers: {
      heading: "समवर्ती दर्शक",
      viewers: "दर्शकों"
    },

    module_content: {
      heading: "अंतर्वस्तु",
      description: "वास्तविक समय में दर्शकों की संख्या",
      description1:"वास्तविक समय में अनुरोध",
      moreInsights: "अधिक जानकारी",
      content:"सामग्री"
    },

    module_countries: {
      heading: "अंतर्वस्तु",
      description: "वास्तविक समय में दर्शकों की संख्या",
      moreInsights: "अधिक जानकारी",
      description: "वास्तविक समय में दर्शकों की संख्या",
      country: "देश",
      requests:"अनुरोध",
      views: "दृश्य",
      percentage: "प्रतिशतता",
    },

    module_devices: {
      heading: "उपकरण",
      description: "वास्तविक समय में दर्शकों की संख्या",
      moreInsights: "अधिक जानकारी"
    },

    module_device_types: {
      heading: "डिवाइस के प्रकार",
      description: "वास्तविक समय में दर्शकों की संख्या",
      description1:"वास्तविक समय में अनुरोध",
      moreInsights: "अधिक जानकारी",
      devicetypes:"डिवाइस के प्रकार"
    },

    module_programs: {
      heading: "कार्यक्रमों",
      moreInsights: "अधिक जानकारी"
    },

    module_partners: {
      heading: "भागीदार",
      description: "वास्तविक समय में दर्शकों की संख्या",
      description1:"वास्तविक समय में अनुरोध",
      moreInsights: "अधिक जानकारी",
      partner:"साथी",
      requests:"अनुरोध",
    },

    module_usage: {
      footer: {
        encoded: "एन्कोड की गई सामग्री की कुल अवधि.",
        stored: "संग्रहीत सामग्री की कुल अवधि.",
        streamed: "स्ट्रीम की गई सामग्री की कुल अवधि."
      },
      encoded: "इनकोडिंग",
      stored: "संग्रहित",
      streamed: "स्ट्रीम"
    },

    //status//components//utils
    module_genfunctions: {
      inactiveContent: "यह संगठन निष्क्रिय है. कृपया संपर्क करें",
      contactLink: "वीडियोग्राफ़ समर्थन से संपर्क करें",
      content: "शुरू करने के लिए तैयार! मुफ़्त $20 क्रेडिट पाने के लिए अपग्रेड करें। बिना किसी प्रतिबंध के पूर्ण अवधि के वीडियो, लाइव स्ट्रीम और लाइव रिकॉर्डिंग जोड़ें।",
      updateButton: "उन्नत करना",
      sessions: 'सत्र',
      mins: "मिनट",
      viewers: "दर्शकों",
      copied: "कॉपी किया गया",
      noLinkAvailable: "कोई लिंक उपलब्ध नहीं"
    },

    //Viewership//components//
    //Views
    module_views: {
      noOfViews: "दर्शकों की संख्या",
      viewContent1: "उपयोगकर्ताओं का कुल योग",
      viewContent2: "वीडियो प्लेबैक प्रारंभ किया.",
      sessions: "सत्र",
      sessionContent1: "सत्रों की संख्या",
      sessionContent2: "उपयोगकर्ताओं द्वारा देखा गया।",
      totalViewship: "कुल दर्शक संख्या",
      totalViewshipcontent1: "प्रत्येक उपयोगकर्ता द्वारा बिताया गया कुल समय",
      totalViewshipcontent2: " सामग्री देखना.",
      adViewership: "विज्ञापन दर्शक संख्या",
      adContent1: "प्रत्येक उपयोगकर्ता द्वारा बिताया गया कुल समय",
      adContent2: "विज्ञापन देखना।",
      avgSessions: "औसत सत्र",
      avgscontent1: "व्ययित सत्र की औसत संख्या",
      avgscontent2: "अद्वितीय उपयोगकर्ताओं द्वारा।",
      avsSessionsDuration: "औसत सत्र अवधि",
      avsSessionsDurationContent1: "प्रति बिताया गया औसत समय",
      avsSessionsDurationContent2: "एकल सत्र पर उपयोगकर्ता।",
      noOfViewers: "दर्शकों की संख्या",
      noOfSessions: "सत्रों की संख्या ",
      totalViwership: "कुल दर्शक संख्या",
      adViewershipMins: "विज्ञापन दर्शक संख्या",
      avgSession: "औसत सत्र ",
      avgSessionDurationMins: "औसत सत्र अवधि",
    },
    module_ad_performance: {
    noOfViews: "दर्शकों की संख्या",
    viewContent1: "प्रवृत्तियों की कुल संख्या",
    viewContent2: "डाली गई।",
    sessionContent1: "विज्ञापन डालने के लिए उपलब्ध कुल अवधि",
    sessionContent2: "कुल उपलब्ध की गई।",
    totalViewshipcontent1: "विज्ञापनों की कुल अवधि",
    totalViewshipcontent2: "कुल में डाली गई।",
    adContent1: "उपलब्ध अवधि पर डाले गए विज्ञापनों का प्रतिशत",
    adContent2: "कुल में डाले गए।",
    avgscontent1: "जिनमें विज्ञापन अनुरोध प्राप्त हुआ",
    avgscontent2: "कुल सत्र की संख्या।",
    avsSessionsDurationContent1: "प्रति सत्र में डाले गए औसत विज्ञापनों की संख्या",
    avsSessionsDurationContent2: "कुल में डाले गए।",
    noOfInserted: "डाली गई विज्ञापनों की संख्या",
    availAdDuration: "उपलब्ध विज्ञापन अवधि",
    fillAdsDuration: "भरे गए विज्ञापन अवधि",
    AdFillRate: "विज्ञापन भरने की दर",
    totalSessions: "कुल सत्र",
    adsInsertedPerSession: "प्रति सत्र डाले गए विज्ञापन",
    emptyVastResponses:"खाली विज्ञापन प्रतिक्रियाएँ",
    impressions:"इंप्रेशन",
    adsInserted: "विज्ञापन डाले गए",
    duration: "अवधि",
    performance: "प्रदर्शन",
     },

    //ViewewshipTrend
    module_viewershipTrend: {
      heading: "दर्शकों की संख्या का रुझान",
      heading1: "विज्ञापन प्रविष्टि प्रवृत्ति",
      sessionCount: "सत्र गणना",
      uniqueViewers: "अद्वितीय दर्शक",
      avgSessionDuration: "औसत सत्र अवधि",
      adViewershipMins: "विज्ञापन दर्शक संख्या न्यूनतम",
      viewershipMins: "दर्शक संख्या मिनट",
      requestsvsimpression:"अनुरोध बनाम इंप्रेशन",
      time:"समय",
      failedavailrequests:"लाभ के लिए भरे गए अनुरोध",
      impressions:"छापे",
      emptyvastresponse:"खाली विशाल प्रतिक्रियाएँ",
      noadwarnings:"कोई विज्ञापन चेतावनी नहीं",
      count:"गिनती करना",
      summary:"सारांश"
    },

    //viewershipTrendin30mins
    module_viewershipTrendin30mins: {
      heading: "दिन के समय के अनुसार दर्शकों की संख्या का रुझान",
      uniqueViewers: "अद्वितीय दर्शक",
      sessions: "सत्र",
      avgSessionDuration: "औसत सत्र अवधि",
      adViewershipMins: "विज्ञापन दर्शक संख्या न्यूनतम",
      sessionDuration: "सत्र अवधि",
      time: "समय",
      adrequest:"विज्ञापन अनुरोध",
      countt: "गिनती करना"
    },

    //analytics filters
    //dailog//analytics filters
    module_analytics_filters: {
      selectFilter: "फ़िल्टर चुनें",
      clearAll: "सभी साफ करें",
      filtersSelected: "फ़िल्टर चयनित",
      cancell: "रद्द करना",
      applyy: "आवेदन करना",
      placeholderSearch: "खोज",
      contentType:"सामग्री प्रकार",
      contentIdStreamId:"कंटेंट आईडी/स्ट्रीम आईडी",
      programme: "कार्यक्रम",
      deviceType:"उपकरण का प्रकार",
      deviceName:"डिवाइस का नाम",
      partner:"साथी",
      country:"देश",
      region:"क्षेत्र",
      city:"शहर",
      noDataFound:"डाटा प्राप्त नहीं हुआ"
    },

    //Components//Advanced_video_analytics
    //AdvDatePicker
    module_AdvDatePicker: {
      startDate: "आरंभ करने की तिथि ",
      endDate: "अंतिम तिथि",
      cancel: "रद्द करना",
      today: "आज",
      oneWeek: "एक हफ्ता",
      oneMonth: "एक माह",
      applyy: "आवेदन करना"
    },

    //common//component
    //ConfirmLogOut
    module_ConfirmLogOut: {
      header: "उपयोगकर्ता को लॉगआउट करें",
      content: "क्या आप लॉग आउट करना चाहते हैं?",
      cancel: "रद्द करना",
      buttonlogout: "हाँ, लॉगआउट करें"
    },

    //Settings
    module_setting: {
      CreateSignKey: {
        heading: "नीचे आपकी नई साइनइन कुंजी है:",
        labelSigningKeyId: "साइनइन कुंजी आईडी:",
        copied: "कॉपी किया गया",
        labelBase64: "बेस64-एन्कोडेड निजी कुंजी:",
        content: "हम गुप्त कुंजी संग्रहीत नहीं करते हैं. कृपया इसे अपने सिस्टम में कॉपी या डाउनलोड करें",
        download: ".pem फ़ाइल के रूप में डाउनलोड करें",
        done: "पूर्ण"
      },
      webHooks: {
        description1: "एपीआई अनुरोध चक्र के बाहर होने वाली किसी भी घटना पर वास्तविक समय अपडेट प्राप्त करने के लिए वेबहुक का उपयोग करें।",
        description2: "वेबहुक को किसी भी वातावरण के लिए कॉन्फ़िगर किया जा सकता है और पर्यावरण के लिए सभी घटनाओं के लिए सूचनाएं भेजी जाएंगी।",
        createButton: "नया वेबहुक बनाएं",
        tableHeadings: {
          urlToNotify: "सूचित करने के लिए URL",
          signingSecret: "हस्ताक्षर गुप्त",
          environment: "पर्यावरण",
          created: "बनाया था",
          status: "दर्जा",
          actions: "कार्रवाई",
        },
        active: "सक्रिय",
        disable: "अक्षम करना"
      },
      createNewWebhook: {
        newWebhook: "नया वेबहुक",
        required: "यह फ़ील्ड आवश्यक है",
        urlErrorMessage: "क्रुपया मान्य यूआरएल दर्ज करें",
        urlToNotify: "सूचित करने के लिए यूआरएल:",
        placeHolder: "यू आर एल दर्ज करो",
        required: "यह फ़ील्ड आवश्यक है",
        message: "दर्ज किया गया मान प्रारंभ/समाप्त नहीं हो सकता या उसमें केवल सफेद स्थान नहीं है",
        description: "सभी ईवेंट इस URL पर भेजे जाएंगे। ईवेंट के प्रकारों के बारे में अधिक जानने के लिए हमारा देखें",
        docs: "डॉक्स",
        cancel: "रद्द करना",
        createButton: "वेबहुक बनाएं"
      },
      // dialog//deletewebhook
      deleteWebhook: {
        errorMessage: "वेबहुक हटा दिया गया",
        header: "वेबहुक हटाएँ",
        confirmDelete: "क्या आप वाकई इस वेबहुक को हटाना चाहते हैं?",
        deleteMessage: "एक बार हटा दिए जाने के बाद, यह वेबहुक उपलब्ध नहीं रहेगा और कार्रवाई पूर्ववत नहीं की जा सकेगी।",
        cancelButton: "रद्द करना",
        deleteButton: "हाँ, हटाएँ"
      },
      billing: {
        description1: "वीडियो और डेटा दोनों योजनाओं के लिए बिलिंग यहाँ प्रबंधित करें. स्वतंत्र महसूस करें",
        contactUs: "हमसे संपर्क करें",
        description2: "बिलिंग से संबंधित किसी भी प्रश्न के लिए.",
        nextPayment: "अगला भुगतान:",
        editPaymentButton: "भुगतान विवरण संपादित करें",
        encoded: "एन्कोडेड",
        stored: "संग्रहीत",
        streamed: "स्ट्रीम किया गया",
        billingCycle: "बिलिंग चक्र",
        videosTable: {
          header: "बिलिंग चक्र",
          title1: "वीडियो (1080p तक)",
          title2: "वीडियो (1080p से ऊपर)",
          total: "कुल वीडियो शुल्क",
        },
        liveTable: {
          header: "लाइव स्ट्रीमिंग और रिकॉर्डिंग",
          title1: "लाइव स्ट्रीमिंग",
          title2: "लाइव रिकॉर्डिंग",
          total: "कुल लाइव स्ट्रीमिंग शुल्क"
        },
        videoEditingTable: {
          header: "वीडियो संपादन",
          total: "कुल वीडियो संपादन शुल्क"
        },
        portraitProTable: {
          header: "पोर्ट्रेट प्रो",
          total: "कुल पोर्ट्रेट प्रो शुल्क"
        },
        billingTable: {
          header: "बिलिंग सारांश",
          encoding: "एन्कोडिंग शुल्क",
          storage: "भंडारण शुल्क",
          streaming: "स्ट्रीमिंग शुल्क",
          total: "वर्तमान कुल"
        },
        walletTable: {
          yourWallet: "आपका बटुआ बैलेंस",
          remaining: "शेष",
          addMoney: "पैसे जोड़ें",
          enableAutoRecharge: "स्वत: रिचार्ज सक्षम करें",
          recommended: "अनुशंसित",
          description: "हमारी सेवाओं तक निर्बाध पहुंच प्राप्त करें। आवश्यकता पड़ने पर भुगतान सेटिंग्स संशोधित करें.",
          balanceBelow: "जब मेरा संतुलन नीचे होता है",
          required: "यह फ़ील्ड आवश्यक है",
          message: "कृपया केवल संख्याएँ दर्ज करें",
          recharge: "स्वचालित रूप से रिचार्ज करें",
          saveButton: "बचाना"
        },
        paymentTable: {
          header: "स्वचालित रूप से रिचार्ज करें",
          paymentHistory: "भुगतान का इतिहास",
          card: "कार्ड",
          expirationDate: "समय सीमा समाप्ति दिनांक",
          email: "ईमेल",
          zipCode: "ज़िप कोड",
          billingAddress: "बिलिंग पता",
          city: "शहर",
          state: "राज्य",
          country: "देश",
        },
      },
      payment_history: {
        paymentHistory: "भुगतान इतिहास",
        PaymentDate: "भुगतान तिथि",
        amount: "मात्रा",
        actions: "कार्रवाई",
        done: "पूर्ण"
      },
      index: {
        heading: "समायोजन"
      },
      tabs: {
        organization: "संगठन",
        billing: "बिलिंग",
        aPIAccessTokens: "एपीआई एक्सेस टोकन",
        webhooks: "वेबहुक",
        signingKeys: "हस्ताक्षर कुंजी"
      },
      //component//homepage//settingstab
      organization: {
        success:"सफलता",
        tokenExpired:"टोकन समाप्त हो गया",
        userDeleted:"उपयोगकर्ता हटा दिया गया",
        invitationSent:"निमंत्रण भेजा गया",
        joined:"में शामिल हो गए",
        heading1: "आम",
        organization: "संगठन",
        edit: "संपादन करना",
        heading2: "सदस्यों",
        inviteNoButton: "सदस्य को आमंत्रित करें",
        th: {
          name: "नाम",
          email: "ईमेल",
          role: "भूमिका",
          status: "दर्जा",
          actionn: "कार्य"
        },
        tb: {
          inviteSent: "आमंत्रण भेज दिया",
          resend: "पुन: भेजें"
        }
      },
      removeuser: {
        heading: "उपयोगकर्ता को हटाएँ",
        content: "क्या आप वाकई उपयोगकर्ता को हटाना चाहते हैं?",
        content1: 'एक बार हटाए जाने के बाद, यह उपयोगकर्ता वीडियोग्राफ़ पर इस संगठन तक नहीं पहुंच पाएगा।',
        cancelButton: "रद्द करना",
        removeButton: "हाँ, हटाएँ"
      },
      //components//dailog//Edit_organisation_name
      Edit_organisation_name: {
        title: "संगठन का नाम संपादित करें",
        organisationName: "संगठन का नाम",
        required: "यह फ़ील्ड आवश्यक है",
        message: "दर्ज किया गया मान प्रारंभ/समाप्त नहीं हो सकता या उसमें केवल सफेद स्थान नहीं है",
        cancelButton: "रद्द करना",
        saveChangButton: "परिवर्तनों को सुरक्षित करें"
      },
      //components//dailog//Newmember_invite
      Newmember_invite: {
        newMemberInvited:"नये सदस्य को आमंत्रित किया गया",
        title: "नये सदस्य को आमंत्रित करें",
        emailAddress: "मेल पता",
        required: "यह फ़ील्ड आवश्यक है",
        meesage: "invalid email address",
        role: "भूमिका",
        rolePlaceholder: "नाम से खोजें",
        noResultFound: "कोई परिणाम नहीं मिला",
        sendInvitation: "निमंत्रण भेजना"
      },
      //component//homepage//billing_plan
      billing_plan: {
        heading: "शुरू करने के लिए तैयार!",
        subHeading: "भुगतान विवरण जोड़कर अपग्रेड करें. निःशुल्क $20 क्रेडिट प्राप्त करें।",
        updateButton: "उन्नत करना",
        content1: "बिना किसी प्रतिबंध के पोर्ट्रेट वीडियो में पूर्ण-लंबाई वाले वीडियो, लाइव स्ट्रीम, लाइव रिकॉर्डिंग वीडियो संपादन और लैंडस्केप जोड़ें।",
        content2: "जब तक आप 20$ वीडियोग्राफ़ क्रेडिट का पूरा उपयोग नहीं कर लेते, तब तक आपसे शुल्क नहीं लिया जाएगा।",
        viewPricing: "मूल्य निर्धारण देखें"
      },
      //pages//settings//Edit_payment_details
      Edit_payment_details: {
        titile: "भुगतान विवरण संपादित करें",
        labelCreditDebit: "क्रेडिट या डेबिट कार्ड",
        labelCreditDebitplaceholder: "कार्ड संख्या",
        required: "यह फ़ील्ड आवश्यक है",
        expirationDate: "समाप्ति तिथि",
        labelcvv: "सीवीवी",
        labelcvvplaceholder: "सीवीवी नंबर",
        labelBillingAddress: "बिल भेजने का पता",
        labelBillingAddressplaceholder: "सड़क का पता, पी.ओ. बॉक्स, कंपनी",
        labelBillingAddress2: "बिलिंग पता 2",
        labelBillingAddressplaceholder2: "अपार्टमेंट नंबर, सुइट, फर्श, आदि",
        labelCity: "शहर",
        labelCityplaceholder: "शहर दर्ज करें",
        labelState: "राज्य",
        labelStatelabel: "राज्य चुनें",
        labelCountry: "देश",
        labelCountryplaceholder: "देश चुनें",
        labelBillingEmail: "बिल सम्बंधी ईमेल",
        labelBillingEmailplaceholder: "ईमेल पता दर्ज करें",
        saveButton: "भुगतान विवरण सहेजें",
        cancelButton: "रद्द करना"
      },
      //component//settingstabs//popup//AddMoney
      AddMoney: {
        addMoney: "पैसे जोड़ें",
        currentBalance: "वर्तमान शेष",
        rechargeWallet: "रिचार्ज वॉलेट",
        required: "यह फ़ील्ड आवश्यक है",
        message: "कृपया केवल संख्याएँ दर्ज करें",
        enableAutoRecharge: "ऑटो रिचार्ज सक्षम करें",
        recommendended: "अनुशंसित",
        content: "हमारी सेवाओं तक निर्बाध पहुंच प्राप्त करें। जब आपको आवश्यकता हो तो भुगतान सेटिंग संशोधित करें।",
        labelWhenMyBalanceIsBelow: "जब मेरा बैलेंस नीचे हो",
        labelAutomaticallyRecharge: "स्वचालित रूप से रिचार्ज करें",
        coutinueButton: "जारी रखना",
      },
      //component//settingstabs//popup//PaymentSuccess
      PaymentSuccess: {
        PaymentSuccessful: "भुगतान सफल",
        youHaveAdded: "आपने जोड़ा है",
        toYourWallet: "आपके बटुए को",
        currentBalanceIs: "वर्तमान संतुलन है",
        InvoiceNumber: "बीजक संख्या: #",
        goBack: "वापस जाओ",
      },
      //component//settingstabs//popup//Processing
      processing: {
        heading: "आपका भुगतान संसाधित हो रहा है",
        content: "इसमें कुछ सेकंड लग सकते हैं. कृपया बैठ जायें और आराम करें!",
        content2: "पृष्ठ को बंद या ताज़ा न करें."
      },
      //component//settingstabs//popup//Reward
      Reward: {
        congratulations: "बधाई हो!",
        content: "आपने अपना भुगतान विवरण सफलतापूर्वक सेटअप कर लिया है",
        content1: "यहाँ आपका इनाम है",
        credit: ">$20 क्रेडिट",
        content2: "हमने आपके बटुए में क्रेडिट जोड़ दिया है।",
        okButton: "ठीक"
      },
      //component//homepage//API Acess Token
      Api_accesstokens: {
        description: "आप एपीआई एक्सेस टोकन बना या रद्द कर सकते हैं। टोकन का उपयोग एपीआई अनुरोध को प्रमाणित करने के लिए किया जाता है और ये पर्यावरण विशिष्ट होते हैं। अधिक जानने के लिए हमारे ",
        guide: "मार्गदर्शक",
        createButton: "नया टोकन बनाएं",
        th: {
          tokenid: "टोकन आईडी",
          environment: "पर्यावरण",
          permission: "अनुमति",
          created: "बनाया था",
          createdBy: "के द्वारा बनाई गई",
          status: "दर्जा",
          actions: "कार्रवाई",
        },
        tb: {
          active: "सक्रिय",
          activeRevoke: "प्रवेश निरस्त",
          revoke: "रद्द करना",
        }
      },
      Revoke_access: {
        heading: "एक्सेस अक्षम करें",
        content: "क्या आप वाकई पहुंच रद्द करना चाहते हैं?",
        content1: "एक बार पहुंच रद्द होने पर, यह टोकन सभी उपयोगकर्ताओं के लिए अमान्य हो जाएगा। इस एक्शन को वापस नहीं किया जा सकता।",
        cancelButton: "रद्द करना",
        revokeButton: "हाँ, निरस्त करें"
      },
      //page//settinga/New_acess_token
      New_acess_token: {
        heading: "नया एक्सेस टोकन",
        permission: "अनुमति",
        content: "अधिक अनुमति जानने के लिए कृपया हमारी वेबसाइट पर जाएँ",
        tokenAccessGuide: "टोकन एक्सेस गाइड",
        labelRead: "पढ़ना",
        labelWrite: "लिखना",
        labelReadOnly: "केवल पढ़ने के लिए",
        labelAccess: "पहुँच टोकन नाम",
        required: "यह फ़ील्ड आवश्यक है",
        message: "दर्ज किया गया मान प्रारंभ/समाप्त नहीं हो सकता या उसमें केवल सफेद स्थान नहीं है",
        labelAccessPlaceholder: "विकास",
        cancel: "रद्द करना",
        createToken: "टोकन बनाएं"
      },
      //component//homepage//settingstabs//EditApi
      EditApi: {
        save: "बचाना",
        cancel: "रद्द करना",
        required: "यह फ़ील्ड प्रारंभ/अंत में स्थान के बिना आवश्यक है"
      },
      //component//dailog//SecretKey
      SecretKey: {
        heading: "नीचे नया एक्सेस टोकन है",
        accessTokenId: "एक्सेस टोकन आईडी:",
        secretKey: "गुप्त कुंजी:",
        content: "हम गुप्त कुंजी संग्रहीत नहीं करते हैं. कृपया इसे अपने सिस्टम में कॉपी या डाउनलोड करें",
        copied: "कॉपी किया गया",
        download: ".env फ़ाइल के रूप में डाउनलोड करें",
        done: "पूर्ण"
      },
      //component//homepage//signingkeys
      signingkeys: {
        description: "कुछ अनुरोधों को सुरक्षित करने के लिए JSON वेब टोकन (JWTs) पर हस्ताक्षर करने के लिए साइनइन कुंजियों का उपयोग किया जाता है। वीडियो कुंजियों का उपयोग प्लेबैक यूआरएल को सुरक्षित करने के लिए किया जा सकता है, और डेटा कुंजियों का उपयोग वास्तविक समय दर्शकों की संख्या तक पहुंच को सुरक्षित करने के लिए किया जा सकता है।",
        createButton: "नई कुंजी बनाएं",
        th: {
          keyID: "कुंजी आईडी",
          environment: "पर्यावरण",
          productt: "उत्पाद",
          created: "बनाया था",
          status: "दर्जा",
          actions: "कार्रवाई",
        },
        tb: {
          active: "सक्रिय",
          video: "वीडियो",
          data: "तारीख",
          system: "प्रणाली"
        }
      },
      //page//setting//Create_singing_keys
      Create_signing_key: {
        heading: "नई हस्ताक्षर कुंजी",
        product: "उत्पाद",
        searchPlaceholder: "नाम से खोजें",
        noResultFound: "कोई परिणाम नहीं मिला",
        cancel: "रद्द करना",
        createSigningKey: "हस्ताक्षर कुंजी बनाएं"
      },
      // dialog// deletesigningkey
      deleteSigningKey: {
        errorMessage: "हस्ताक्षर कुंजी हटा दी गई",
        header: "गायन कुंजी हटाएँ",
        confirmDelete: "क्या आप वाकई इस साइनिंग कुंजी को हटाना चाहते हैं?",
        deleteMessage: "एक बार हटा दिए जाने के बाद, यह हस्ताक्षर कुंजी उपलब्ध नहीं रहेगी और कार्रवाई पूर्ववत नहीं की जा सकेगी।",
        cancelButton: "रद्द करना",
        deleteButton: "हाँ, हटाएँ"
      },
    },
    module_scheduleReports:{

      list:{
        reportName:"रिपोर्ट का नाम",
        sendTo:"भेजना",
        runAt:"भागो तब",
        status:"स्थिति",
        timeZone:"समय क्षेत्र",
        actions:"कार्रवाई",
        resume:"फिर शुरू करना",
        pause:"विराम",
        delete:"मिटाना",
        edit:"संपादन करना",
        noReportsScheduledPlease:"कोई रिपोर्ट शेड्यूल नहीं की गई. कृपया",
        setup:"स्थापित करना",
        
      },
      setup:{
        reportName:"रिपोर्ट का नाम",
        emailTo:"इसे ईमेल किया गया",
        oneTime:"वन टाइम",
        recurring:"पुनरावर्ती",
        sendAt:"पर भेजें",
        from:"से",
        to:"को",
        daily:"दैनिक",
        weekly:"साप्ताहिक",
        monthly:"महीने के",
        metrics:"मेट्रिक्स",
        all:"सभी",
        metricsForOverview:"अवलोकन के लिए मेट्रिक्स",
        metricsForViewership:"दर्शकों की संख्या के लिए मेट्रिक्स",
        encodedMins:"एन्कोडेड मिनट",
        storedMins:"संग्रहित मिनट",
        streamedMins:"स्ट्रीम किए गए मिनट",
        deviceTypes:"उपकरण का प्रकार",
        devices:"उपकरण",
        contents:"अंतर्वस्तु",
        concurrentViewers:"समवर्ती दर्शक",
        countries:"देशों",
        partners:"भागीदारों",
        noOfViewers:"दर्शकों की संख्या",
        sessions:"सत्र",
        totalViewership:"कुल दर्शक संख्या",
        adViewership:"विज्ञापन दर्शक संख्या",
        avgSessionsPerUser:"प्रति उपयोगकर्ता औसत सत्र",
        avgSessionDuration:"औसत सत्र अवधि",
        splitAllDataByFilter:"फ़िल्टर द्वारा सभी डेटा को विभाजित करें",
        filters:"फिल्टर",
        cancel:"रद्द करना",
        saveReport:"रिपोर्ट सुरक्षित रखना",
        namePlaceHolder:"Give your report a name",
        nameError:"नाम खाली नहीं होना चाहिए या उसमें केवल रिक्त स्थान होना चाहिए",
        nameError1:"कृपया सुनिश्चित करें कि नाम रिक्त स्थान से शुरू न हो।",
        nameError2:"नाम 64 अक्षरों से अधिक नहीं होना चाहिए.",
        emailIDPlaceholder:"अल्पविराम से अलग की गई ईमेल आईडी दर्ज करें",
        emailError:"ईमेल खाली नहीं होना चाहिए या उसमें केवल रिक्त स्थान नहीं होना चाहिए",
        required:"यह फ़ील्ड आवश्यक है"

      }

    }
  },


  "ar": {
    module_navbar: {
      title: "بالفيديو",
      environments: "البيئات",
      videos: "فيديوهات",
      liveStream: "البث المباشر",
      liveRecording: "تسجيل مباشر",
      monitoring:"يراقب",
      adinsertion:"إدراج الإعلان",
      analytics: "تحليلات",
      infraMonitor:"انفرا مانیٹر",
      portraitPro: "بورتريه برو",
      interactiveLive: "تفاعلي مباشر",
      advAnalytics: "تحليلات الفيديو المتقدمة",
      eventsLogs: "الأحداث",
      settings: "إعدادات",
      apiDocs: "مستندات API",
      logout: "تسجيل خروج"
    },

    //components//utils//EnvDropDown
    module_EnvDropDown: {
      environment: "بيئة",
      noResultFound: "لم يتم العثور على نتائج",
      searchByName:"البحث عن طريق الإسم"
    },

    // activities
    module_activities: {
      eventDetailActivity: {
        eventId: "معرف الحدث",
        data: "تاريخ",
        type: "يكتب",
        eventData: "بيانات الحدث"
      },
      events: {
        description1: "تتيح لك الأحداث معرفة متى حدث شيء ما في نظامك.",
        description2: "سيتم تخزين الأحداث لمدة تصل إلى 30 يومًا.",
        events: "الأحداث",
        id: "بطاقة تعريف",
        date: "تاريخ",
        noDataFound: "لاتوجد بيانات",
        NoEventAvailable: "لا توجد أحداث متاحة"
      },
      logDetailActivity: {
        logId: "معرف السجل",
        date: "تاريخ",
        method: "طريقة",
        url: "URL",
        requestBody: "طلب الهيئة",
        responseBody: "هيئة الاستجابة"
      },
      activities: {
        heading: "أنشطة"
      },
      logs: {
        content: "تُظهر السجلات كل إجراء تم اتخاذه لواجهة برمجة التطبيقات ، وسيتم تخزين السجلات لمدة تصل إلى 30 يومًا.",
        status: "حالة",
        description: "وصف",
        date: "تاريخ",
        NoDataFound: "لاتوجد بيانات",
        NoLogsAvailable: "لا توجد سجلات متاحة"
      }
    },

    // videos
    module_videos: {
      index_page: {
        header: "أشرطة فيديو",
        content1: "قم بتحميل الأصول الخاصة بك وتحويلها وتخزينها وتسليمها باستخدام خدمتنا.",
        content2: "يمكنك تحميل مقطع فيديو باستخدام API أو مباشرة من هنا لمشاركته مع المستخدمين لديك.",
        viewGuide: "عرض الدليل",
        addVideoButton: "أضف فيديو جديد",
        searchVideos: "البحث عن مقاطع الفيديو",
        popupVideoDelete: "تم حذف الفيديو",
        tableHeadings: {
          addedOn: "وأضاف في",
          name: "اسم",
          contentId: "معرّف المحتوى",
          imagePreview: "معاينة الصورة",
          type: "يكتب",
          tags:"ٹیگز",
          duration: "مدة",
          resolution: "دقة",
          status: "حالة",
          actions: "أجراءات"
        },
        noDataFound: "لم يتم العثور على بيانات الفيديو"
      },
      onboardingPage: {
        header: "أشرطة فيديو",
        upload: {
          title: "تحميل ودفق ملفات الفيديو",
          content1: "قم بتحميل وتحويل وتخزين وتسليم مقاطع الفيديو الخاصة بك باستخدام",
          content2: "بالفيديو. يمكنك تحميل مقطع فيديو باستخدام API الخاص بنا أو مباشرة من",
          content3: "هنا وتداولها للمستخدمين"
        },
        button: {
          addNewVideo: "أضف فيديو جديد",
          viewGuide: "عرض الدليل"
        },
        onDemandVideoFeatures: {
          title: "ميزات الفيديو عند الطلب",
          videoFeature1: {
            title: "لقطة فيديو",
            content: "قم بتحميل مقاطع الفيديو الخاصة بك وإنشاء مقاطع منها."
          },
          videoFeature2: {
            title: "ترجمات",
            content: "أضف ملفات ترجمة متعددة إلى مقاطع الفيديو الخاصة بك."
          },
          videoFeature3: {
            title: "التحرير المتقدم",
            content: "أضف تراكبات متعددة للصور والنص عبر واجهات برمجة التطبيقات."
          },
          videoFeature4: {
            title: "التشغيل الآمن",
            content: "اجعل الفيديو خاصًا من خلال التشغيل الموقع."
          }
        }
      },
      // direct_uploade-add new video button
      direct_uploade: {
        createBulkUpload: "إنشاء تحميل مجمع",
        importBulkVideos: "قم باستيراد مقاطع الفيديو المجمعة الخاصة بك",
        selectFile: "حدد ملف",
        supportedFormatsExcel: "تنسيقات الملفات المدعومة.xlsx (أقصى حد للتحميل يصل إلى",
        videos: "أشرطة فيديو)",
        downloadText: "قم بتنزيل قالب Excel كمرجع بالنقر فوق",
        here: "هنا",
        importButton: "يستورد",
        or:"أو",
        addNewVideo: "أضف فيديو جديد",
        uploadVideo: "قم بتحميل ملف الفيديو الخاص بك",
        placeholder: "أدخل اسم الفيديو",
        required: "هذه الخانة مطلوبه",
        message: "لا يمكن أن تبدأ القيمة المدخلة / تنتهي أو تحتوي على مسافة بيضاء فقط",
        name: "اسم*",
        selectFile: "حدد ملف",
        supportedFormats: "التنسيقات المدعومة.mkv,.mp4,.avi,.3gp,.m4v,.mov,.webm,.wmv,.mxf,.ts",
        fileUploaded: "ملف مرفوع",
        upload: "رفع",
        selectUpload:"الرجاء تحديد ملف لتحميله",
        videoError:"الرجاء تحديد ملف فيديو بأحد التنسيقات المدعومة: .mkv,.mp4,.avi,.3gp,.m4v,.mov,.webm,.wmv,.mxf,.ts",
        selectFileError:"اختر ملفا، رجاءا",
        invalidFileFormat:"تنسيق ملف غير صالح. يُسمح فقط بملفات Excel (.xlsx، .xls).",
        maxLimit:"الحد الأقصى للفيديو هو",
        unableToRead:"غير قادر على قراءة الملف. حاول مرة اخرى."
      },
      // videodelivery_addnewassets
      videodelivery_addnewassets: {
        postUsingUrl: "النشر باستخدام URL الفيديو:",
        postBodyEditor: "محرر نص الرسالة:",
        validation: "هذه الخانة مطلوبه",
        runRequest: "تشغيل الطلب",
        syntaxErr:"خطأ في بناء الجملة",
        urlErr:"الرجاء إدخال عنوان url صالح",
        urlRequired:"مطلوب URL",
        playBackPolicyErr:"مطلوب سياسة التشغيل"
      },
      // videodetails
      videoDetails: {
        header: "قائمة الفيديو",
        editButton: "يحرر",
        required: "هذه الخانة مطلوبه",
        message: "لا يمكن أن تبدأ القيمة المدخلة / تنتهي أو تحتوي على مسافة بيضاء فقط",
        saveButton: "يحفظ",
        cancelButton: "يلغي",
      },
      // videolist
      videoList: {
        videoDetails: "تفاصيل الفيديو",
        videoClips: "مقاطع فيديو",
        thumbnails: "المصغرات",
        subtitles: "ترجمات",
        deleteVideo: "حذف الفيديو",
        retry:"أعد المحاولة"
      },
      videoDeliveryTabs: {
        overview: "ملخص",
        videoClips: "مقاطع فيديو",
        thumbnails: "المصغرات",
        subtitles: "ترجمات",
        others: "آحرون"
      },
      // overview- videodeliverytabs
      overview: {
        testVideoBanner: "هذا فيديو اختبار مجاني. تقتصر مقاطع الفيديو التجريبية على 10 ثوانٍ ، ويتم حذفها بعد 24 ساعة.",
        shareableUrl: "عنوان URL قابل للمشاركة:",
        linkToHls: "ارتباط بـ HLS:",
        embedCode: "كود التضمين:",
        linkToThumbnail: "ارتباط بالصورة المصغرة:",
        mp4Url: "رابط MP4:",
        analyticsButton: "تحليلات",
        activitiesButton: "أنشطة",
        deleteButton: "حذف الفيديو",
        downloadButton: "تحميل الفيديو",
        videoDetails: {
          header: "تفاصيل الفيديو",
          contentId: "معرّف المحتوى",
          created: "مخلوق",
          status: "حالة",
          duration: "مدة",
          aspectRatio: "ابعاد متزنة",
          resolution: "دقة",
          streamId: "معرف الدفق",
          startTime: "وقت البدء",
          endTime: "وقت النهاية"
        },
        playbackSample: "نموذج التشغيل",
        videoUrls: "عناوين URL للفيديو",
        copied: "نسخ",
        videoSourceInfo: {
          header: "معلومات مصدر الفيديو",
          title: "رابط الفيديو",
          videoInfo: {
            title: "معلومات الفيديو",
            width: "عرض",
            height: "ارتفاع",
            frameRate: "معدل الإطار",
            encoding: "التشفير",
            duration: "مدة"
          },
          audioInfo: {
            title: "معلومات الصوت",
            sampleRate: "معدل العينة",
            encoding: "التشفير",
            channels: "القنوات",
            duration: "مدة",
          }
        }
      },
      // others- videodeliverytabs
      others: {
        titleandDescription: {
          header: "وصف العنوان",
          title: "عنوان",
          titlePlaceHolder: "أدخل العنوان أو الفيديو",
          titleRequired: "هذه الخانة مطلوبه",
          description: "وصف",
          descriptionPlaceHolder: "أدخل الوصف الخاص بك",
          buttonSave: "يحفظ",
          message: "لا يمكن أن تبدأ القيمة المدخلة / تنتهي أو تحتوي على مسافة بيضاء فقط",
        },
        message1: "هذه الخانة مطلوبه",
        tagsandMetadata: {
          header: "العلامات والبيانات الوصفية",
          title: "العلامات",
          tagsRequired: "هذا الحقل مطلوب ، الرجاء الضغط على مفتاح الإدخال لإضافة علامة",
          tagsComma: "أدخل فاصلة بعد كل علامة",
          description: "Metadata",
          keyPlaceHolder: "أدخل مفتاح",
          valuePlaceHolder: "أدخل قيمة",
          buttonAdd: "يضيف",
          buttonSave: "يحفظ",
          message: "لا يمكن أن تبدأ القيمة المدخلة / تنتهي أو تحتوي على مسافة بيضاء فقط",
        },
        toastMsg:{
          one:'تم حفظ العنوان والوصف بنجاح',
          two:'تم حفظ العلامات والبيانات الوصفية بنجاح'
        }
      },
      // thumbnails
      thumbnails: {
        header: "إنشاء صورة مصغرة باستخدام أداة الصورة",
        errorMessage: "الرجاء إدخال الوقت الأقل من طول الفيديو",
        time: "وقت*",
        required: "هذه الخانة مطلوبه",
        message1: "الرجاء إدخال تنسيق hh: mm: ss",
        imageWidth: "عرض الصورة",
        placeHolder1: "أدخل العرض بالبكسل",
        message2: "الرجاء إدخال أرقام فقط",
        imageHeight: "ارتفاع الصورة",
        placeHolder2: "أدخل الارتفاع بالبكسل",
        createButton: "إنشاء صورة مصغرة",
        download: "تحميل الصورة من الرابط أدناه:"
      },
      // thumbnailsApi
      thumbnailsApi: {
        header: "إنشاء صورة مصغرة باستخدام صورة API",
        runRequest: "تشغيل الطلب",
        download: "تحميل الصورة من الرابط أدناه:"
      },
      //gifs
      gifs: {
        create: "قم بإنشاء GIF باستخدام محرر الفيديو",
        startTime: "وقت البدء",
        endTime: "وقت النهاية",
        imageWidth: "عرض الصورة",
        placeHolder1: "أدخل العرض بالبكسل الافتراضي هو 320 بكسل",
        imageHeight: "ارتفاع الصورة",
        placeHolder2: "أدخل الارتفاع بالبكسل",
        createButton: "إنشاء GIF",
        download: "تحميل الصورة من الرابط أدناه",
        createGif: "قم بإنشاء GIF باستخدام صورة Api",
        runRequest: "تشغيل الطلب"
      },
      subtitles: {
        header: "قائمة الترجمات",
        addedOn: "وأضاف في",
        name: "اسم",
        subtitleId: "معرف الترجمة",
        format: "شكل",
        actions: "أجراءات",
        uploadSubtitleFile: "تحميل ملفات الترجمة",
        uploadYourFile: "قم بتحميل ملفك",
        name2: "اسم*",
        required: "هذه الخانة مطلوبه",
        message: "لا يمكن أن تبدأ القيمة المدخلة / تنتهي أو تحتوي على مسافة بيضاء فقط",
        languageCode: "رمز اللغة*",
        support: "يدعم التعليقات المغلقة",
        selectFile: "حدد ملف",
        supportedFormats: "التنسيقات المدعومة SRT و .VTT",
        uploadButton: "رفع",
        postUsingUrl: "النشر باستخدام URL الفيديو:",
        runRequest: "تشغيل الطلب",
        noDataFound: "لم يتم العثور على ملف الترجمة"
      },
      // videoClips- liverecordingTabs
      videoClips: {
        header: "قائمة مقاطع الفيديو",
        noVideoFound: "لم يتم العثور على مقطع فيديو",
        tableHeadings: {
          addedOn: "أضيفت في",
          name: "اسم",
          videoId: "معرف الفيديو",
          actions: "الاجراءات",
        },
        viewVideo: "عرض الفيديو",
        createClips: "إنشاء مقاطع فيديو"
      },
      videoClipsTabs: {
        useVideoEditor: "استخدم محرر الفيديو",
        useApi: "استخدام واجهة برمجة التطبيقات"
      },
      // videoeditor- videodeliverytabs/createvideoclips
      videoEditor: {
        name: "اسم*",
        startTime: "وقت البدء*",
        endTime: "وقت النهاية",
        placeHolder1: "اسم القصاصة",
        required: "هذا الحقل مطلوب",
        message1: "لا يمكن أن تبدأ القيمة المدخلة / تنتهي أو تحتوي على مسافة بيضاء فقط",
        message2: "الرجاء إدخال تنسيق hh: mm: ss",
        createButton: "إنشاء مقطع فيديو"
      },
      // using_api
      usingApi: {
        runRequest: "تشغيل الطلب"
      },
    },

    //Environment
    module_environment: {
      index: {
        header: {
          title: "بيئة",
          description: "تسمح لك البيئة بتجميع بياناتك. لدينا أربعة أنواع من تطوير البيئات ، وضمان الجودة ، والتدريج ، والإنتاج. يمكنك تغيير الأسماء أو إنشاء بيئات إضافية حسب الحاجة.",
          addbutton: "أضف البيئة"
        },
        tableheader: {
          name: "اسم",
          video: "فيديو",
          analytics: "تحليلات",
        },
        tb: {
          il7d: "في آخر 7 أيام",
          encoded: " مشفر",
          stored: "مخزن",
          streamed: "دفق",
          hours: "ساعات",
          apitokens: "رموز API",
          views: "الآراء",
          uniqueviews: "مناظر فريدة",
          watchedtime: "وقت المشاهدة",
          envKey: "مفتاح Env",
          livestream: "البث المباشر",
          liverecording: "تسجيل مباشر",
          table_card_video_description: "استخدم واجهات برمجة تطبيقات Videograph لبث مقاطع الفيديو الحية وعند الطلب.",
          table_card_analytics_description: "ابدأ بتتبع مقاييس الفيديو عن طريق تحميل مقاطع الفيديو إلى هذه البيئة.",
        }
      }
    },

    module_SelectEnv: {
      validationMessage: "هذا الحقل مطلوب بدون مسافة في البداية / النهاية / مساحة فقط",
      noResultFound: "لم يتم العثور على نتائج",
      cancel: "يلغي",
      save: "يحفظ",
      placeholder: "البحث عن طريق الإسم"

    },

    //Environment add new environment page
    module_add_new_environment: {
      title: "أضف بيئة جديدة",
      labelenv: "اسم البيئة",
      label_env_ph: "إدخال اسم",
      label_required: "هذه الخانة مطلوبه",
      label_message: "لا يمكن أن تبدأ القيمة المدخلة / تنتهي أو تحتوي على مسافة بيضاء فقط",
      label_type: "يكتب",
      no_result_found: "لم يتم العثور على نتائج",
      cancel: "يلغي",
      addbutton: "أضف البيئة",
      labelTypePlaceholder: "البحث عن طريق الإسم",
    },

    //components//ad_list
    module_ad_list: {
      failedToUpload: "فشل التحميل",
      pendingVideo: "فيديو معلق",
      processing: "يعالج",
      streamDetails: "تفاصيل الدفق",
      disableStream: "تعطيل الدفق",
      videoDetails: "تفاصيل الفيديو",
    },

    //Live streams
    module_livestream: {
      onboarding: {
        header: "يعيش تيارات",
        title: "نشر البث المباشر",
        content1: "استخدم واجهات برمجة تطبيقات Videograph Live Stream ودمج HLS المباشر",
        content2: "تيار في التطبيق الخاص بك. أنشئ تدفقات مباشرة باستخدام واجهات برمجة التطبيقات أو مباشرة من لوحة القيادة. ",
        buttonCreate: "إنشاء بث مباش",
        buttonView: "عرض الدليل",
        features: {
          heading: "ميزات البث المباشر ",
          title1: "دفق آمن",
          content1: "اجعل البث المباشر خاصًا من خلال التشغيل الموقّع. ",
          titile2: "قليل من الكمون",
          content2: "وقت استجابة البث المباشر منخفض يصل إلى 4 ثوانٍ.",
          title3: "إدخالات الإعلان",
          content3: "تريد إدراج إعلان في البث المباشر؟ ",
          title4: "تفاعلات حية",
          content4: "هل تحتاج إلى مساعدة لإضافة تفاعلات حية؟ ",
          talkToUs: "تكلم معنا"
        }
      },
      createLiveStreaming: {
        header: "إنشاء بث مباشر",
        postUsingUrl: "النشر باستخدام عنوان URL للفيديو ",
        postBodyEditor: "محرر نص الرسالة",
        buttonRunRequest: "تشغيل الطلب",
        validation: "هذا الخطأ مطلوب"
      },
      index: {
        header: "يعيش تيارات",
        description: "استخدم واجهات برمجة تطبيقات Videograph Live Stream ودمج الفيديو المباشر في تطبيقك. ",
        description_view: "عرض الدليل",
        create_button: "إنشاء بث مباش",
        placeholder: "البحث في البث المباشر",
        popupVideoDelete: "تم حذف الفيديو",
        //th:table head
        th: {
          addon: "وأضاف في",
          name: "اسم",
          StreamID: "معرف الدفق",
          streamKey: "مفتاح الدفق",
          imagePreview: "معاينة الصورة",
          type: "يكتب",
          tags:"ٹیگز",
          status: "حالة",
          actions: "أجراءات",
          noLiveDataFound: "لم يتم العثور على بيانات حية"
        }
      },
      live_streaming_details: {
        header: "البث المباشر",
        edit: "يحرر",
        cancelButton: "يلغي",
        saveButton: "يحفظ"
      },
      //pages//livestream_tabs
      livestream_tabs: {
        overview: "ملخص",
        videoClips: "مقاطع فيديو",
        advancemonitor:"المراقبة المتقدمة",
        others: "آحرون",
        customUrls: "عناوين URL المخصصة"
      },
      overview: {
        videourl: {
          title: "رابط الفيديو",
          shareableURL: "عنوان URL قابل للمشاركة",
          linkToHLS: "ارتباط بـ HLS",
          embedCode: "كود التضمين:",
          linkToThumbnail: "ارتباط بالصورة المصغرة:",
        },
        button_analytics: "تحليلات",
        button_activities: "أنشطة",
        button_delete: "حذف الدفق",
        liveStreamDetails: {
          title: "معرف البث المباشر",
          ingestURL: "استيعاب URL",
          rTMPsURL: "عنوان URL الخاص بـ RTMPs",
          streamKey: "مفتاح الدفق",
          Created: "مخلوق",
          status: "حالة",
          copy: "ينسخ",
          activesince: "نشط منذ",
          copied:"نسخ"
        },
        livestream: {
          title: 'البث المباشر',
          start: "يبدأ",
          startStop: "بدء توقف",
          live: "يعيش",
          active: "نشيط",
          offline: "غير متصل على الانترنت"
        },
        healthMonitoring: {
          streamHealth: "تيار الصحة",
          last1Hour: "آخر 1 ساعة",
          last4Hours: "آخر 4 ساعات",
          last8Hours: "آخر 8 ساعات",
          videoFrameRate: "معدل إطارات الفيديو (FPS)",
          videoBitrate: "معدل البت للفيديو (VBR) بالكيلوبت في الثانية"
        }
      },
      customUrls: {
        playbackUrls: {
          customize: "تخصيص عناوين URL للتشغيل!",
          addCustom: "أضف معلمات مخصصة مثل الشريك والنوع واللغة وما إلى ذلك إلى عناوين URL الخاصة بالتشغيل",
          createCustom: "إنشاء عنوان URL مخصص"
        },
        playbackList: {
          createCustom: "إنشاء عنوان URL مخصص",
          placeholder: "البحث بالاسم أو عنوان URL للتشغيل",
          addedOn: "وأضاف في",
          name: "اسم",
          customPlaybackUrl: "عنوان URL للتشغيل المخصص",
          status: "حالة",
          actions: "أجراءات",
          copied: "نسخ",
          noResultFound: "لم يتم العثور على نتائج",
          itemsPerPage: "مواد لكل صفحة :",
          editUrl: "تحرير عنوان URL",
          duplicate: "ينسخ",
          delete: "يمسح",
          toastMsg1: "تم حذف عنوان URL للتشغيل",
          toastMsg2: "تم استئناف عنوان URL للتشغيل",
          toastMsg3: "تم إيقاف عنوان URL للتشغيل مؤقتًا"
        },
        createCustomUrl: {
          createCustom: "إنشاء عنوان URL مخصص",
          editCustom: "تحرير عنوان URL المخصص",
          name: "اسم",
          parameters: "حدود",
          partner: "شريك",
          genre: "النوع",
          none: "لا أحد",
          language: "لغة",
          category: "فئة",
          cancel: "يلغي",
          createUrl: "إنشاء عنوان URL",
          editUrl: "يحرر"
        },
      },
      others: {
        titleandDescription: {
          header: "وصف العنوان",
          title: "عنوان",
          titlePlaceHolder: "أدخل العنوان أو الفيديو",
          titleRequired: "هذه الخانة مطلوبه",
          description: "وصف",
          descriptionPlaceHolder: "أدخل الوصف الخاص بك",
          buttonAdd: "يضيف",
          buttonSave: "يحفظ",
          message: "لا يمكن أن تبدأ القيمة المدخلة / تنتهي أو تحتوي على مسافة بيضاء فقط",
          message1: "هذه الخانة مطلوبه"
        },
        tagsandMetadata: {
          header: "العلامات والبيانات الوصفية",
          title: "العلامات",
          tagsRequired: "هذا الحقل مطلوب ، الرجاء الضغط على مفتاح الإدخال لإضافة علامة",
          tagsComma: "أدخل فاصلة بعد كل علامة",
          description: "Metadata",
          keyPlaceHolder: "أدخل مفتاح",
          valuePlaceHolder: "أدخل قيمة",
          buttonSave: "يحفظ",
          message: "لا يمكن أن تبدأ القيمة المدخلة / تنتهي أو تحتوي على مسافة بيضاء فقط",
        },
        toastMsg:{
          one:'تم حفظ العنوان والوصف بنجاح',
          two:'تم حفظ العلامات والبيانات الوصفية بنجاح'
        },
        thumbnails:{
          thumbnails: "الصور المصغرة",
          selectImage: "اختر صورة",
          supportedFormats: "التنسيقات المدعومة .jpg، .jpeg، .png",
          upload: "رفع",
          errorMsg: "الرجاء اختيار صورة",
          errorMsg2: "التنسيق غير صالح، يُسمح فقط بالصور (.jpeg، png، jpg).",
          toastMsg: "تمت إضافة الصورة المصغرة بنجاح"
        }
      },
      //component//live_list
      live_list: {
        streamDetails: "تفاصيل الدفق",
        deleteStream: "حذف الدفق",
        videoDetails: "تفاصيل الفيديو"
      },
      Delete_content: {
        heading: "نعم ، احذف",
        content: "هل أنت متأكد أنك تريد حذف هذا البث؟",
        content1: "بمجرد الحذف ، لن تتم مراقبة هذا البث وسيتم مسح جميع البيانات التاريخية.",
        cancelButton: "يلغي",
        deleteButton: "نعم ، احذف",
        conHeading: "حذف المحتوى",
        conContent: "هل أنت متأكد أنك تريد حذف هذا المحتوى؟",
        conContent1: "بمجرد الحذف ، لن تتم مراقبة هذا المحتوى وسيتم مسح جميع البيانات التاريخية.",
        conCancelButton: "يلغي",
        conDeleteButton: "نعم ، احذف",
      }
    },

    module_adinsertion:{
      index:{
        header:"إدراج الإعلان",
        description:"استخدم واجهات برمجة تطبيقات Videograph Ad Insertion لاستبدال الإعلانات في برنامجك",
        button:"إنشاء إدراج إعلان",
      th: {
        addon: "وأضاف في",
        name: "اسم",
        StreamID: "معرف الدفق",
        imagePreview: "معاينة الصورة",
        type: "يكتب",
        tags:"ٹیگز",
        status: "حالة",
        actions: "أجراءات",
      },
    },
    overview: {
      adInsertionDetails: "تفاصيل إدراج الإعلان",
      adInsertionId: "معرف إدراج الإعلان",
      preRoll: "لفه قبل",
      maxPreRoll: "الحد الأقصى المسموح به للمدة المسبقة",
      finalUrl: "عنوان URL النهائي",
      adTagUrl: "عنوان URL لعلامة الإعلان:",
      playbackParams: "عنوان URL للتشغيل مع معلمات المشغل:",
      playbackUrl: "عنوان URL للتشغيل:",
      edit: "يحرر"
    },
},

    // portraitPro
    module_portraitPro: {
      index: {
        header: "بورتريه للمحترفين",
        description: "استخدم أداة Videgraph's المدعومة بالذكاء الاصطناعي لأداة اقتصاص الفيديو العمودي لقص مقاطع الفيديو الخاصة بك تلقائيًا إلى نسبة صورة في ثوانٍ.",
        createButton: "إنشاء فيديو بورتريه",
        searchVideos: "البحث عن مقاطع الفيديو",
        viewGuide: "عرض الدليل",
        tableHeadings: {
          addedOn: "وأضاف في",
          name: "اسم",
          contentId: "معرّف المحتوى",
          imagePreview: "معاينة الصورة",
          type: "يكتب",
          tags:"ٹیگز",
          duration: "مدة",
          resolution: "دقة",
          status: "حالة",
          actions: "أجراءات"
        },
        noDataFound: "لم يتم العثور على بيانات الفيديو"
      },
      portraitpro_details: {
        heading: "بورتريه للمحترفين",
        editButton: "يحرر",
        save: "يحفظ",
        cancel: "يلغي"
      },
      onboardingPage: {
        header: "بورتريه للمحترفين",
        title: "الجيل التالي - اقتصاص الفيديو الرأسي بالذكاء الاصطناعي",
        description1: "لا تقض ساعات في اقتصاص مقاطع الفيديو الخاصة بك لنشرها",
        description2: "منصات الوسائط الاجتماعية ، استخدم مشهد Videgraph's المدفوع بالذكاء الاصطناعي",
        description3: " لأداة اقتصاص الفيديو العمودي لاقتصاص ملف",
        description4: "مقاطع الفيديو إلى نسبة الصورة في ثوانٍ مجانًا.",
        transformVideo: "تحويل الفيديو الخاص بك!",
        selectFile: "حدد ملف",
        or: "أو",
        placeHolder: "أدخل (.mp4) عنوان URL للفيديو",
        message: "أدخل رابط صحيح من فضلك",
        uploadmessage: "تحميل ملفات .mp4 فقط",
        createButton: "إنشاء فيديو بورتريه",
        subscribedFalse1: "قم بإعداد تفاصيل الدفع واحصل على رصيد مجاني بقيمة 20 دولارًا ،",
        subscribedFalse2: "تحويل أشرطة الفيديو الخاصة بك مع أرصدة مجانية.",
        upgrade: "يرقي"
      },
      createNewPortrait: {
        header: "إنشاء فيديو عمودي جديد",
        uploadFile: "قم بتحميل ملف الفيديو الخاص بك",
        name: "اسم*",
        placeHolder: "أدخل اسم الفيديو",
        required: "هذه الخانة مطلوبه",
        message: "لا يمكن أن تبدأ القيمة المدخلة / تنتهي أو تحتوي على مسافة بيضاء فقط",
        selectFile: "حدد ملف",
        or: "أو",
        placeHolder2: "أدخل (.mp4) عنوان URL للفيديو",
        message2: "أدخل رابط صحيح من فضلك",
        supportedFormats: "التنسيقات المدعومة mp4",
        createButton: "إنشاء فيديو بورتريه"
      },
      // sociallist
      socialList: {
        videoDetails: "تفاصيل الفيديو",
        thumbnails: "المصغرات",
        deleteVideo: "حذف الفيديو"
      },
      // overview- socialclipstabs
      overview: {
        testVideoBanner: "هذا فيديو اختبار مجاني. تقتصر مقاطع الفيديو التجريبية على 10 ثوانٍ ، ويتم حذفها بعد 24 ساعة.",
        shareableUrl: "عنوان URL قابل للمشاركة:",
        linkToHls: "ارتباط بـ HLS:",
        embedCode: "كود التضمين:",
        linkToThumbnail: "ارتباط بالصورة المصغرة:",
        mp4Url: "رابط MP4:",
        analyticsButton: "تحليلات",
        activitiesButton: "أنشطة",
        deleteButton: "حذف الفيديو",
        downloadButton: "تحميل الفيديو",
        videoDetails: {
          header: "تفاصيل الفيديو",
          contentId: "معرّف المحتوى",
          created: "مخلوق",
          status: "حالة",
          duration: "مدة",
          aspectRatio: "ابعاد متزنة",
          resolution: "دقة",
          maxFrameRate: "معدل الإطار ماكس",
          streamId: "معرف الدفق",
          startTime: "وقت البدء",
          endTime: "وقت النهاية"
        },
        playbackSample: "نموذج التشغيل",
        videoUrls: "عناوين URL للفيديو",
        copied: "نسخ",
        videoSourceInfo: {
          header: "معلومات مصدر الفيديو",
          title: "رابط الفيديو",
          videoInfo: {
            title: "معلومات الفيديو",
            width: "عرض",
            height: "ارتفاع",
            frameRate: "معدل الإطار",
            encoding: "التشفير",
            duration: "مدة"
          },
          audioInfo: {
            title: "معلومات الصوت",
            sampleRate: "معدل العينة",
            encoding: "التشفير",
            channels: "القنوات",
            duration: "مدة",
          }
        }
      },
      // others- socilacliptabs
      others: {
        titleandDescription: {
          header: "وصف العنوان",
          title: "عنوان",
          titlePlaceHolder: "أدخل العنوان أو الفيديو",
          titleRequired: "هذه الخانة مطلوبه",
          description: "وصف",
          descriptionPlaceHolder: "أدخل الوصف الخاص بك",
          buttonSave: "يحفظ",
          message: "لا يمكن أن تبدأ القيمة المدخلة / تنتهي أو تحتوي على مسافة بيضاء فقط",
        },
        message1: "هذه الخانة مطلوبه",
        tagsandMetadata: {
          header: "العلامات والبيانات الوصفية",
          title: "العلامات",
          tagsRequired: "هذا الحقل مطلوب ، الرجاء الضغط على مفتاح الإدخال لإضافة علامة",
          tagsComma: "أدخل فاصلة بعد كل علامة",
          description: "البيانات الوصفية",
          keyPlaceHolder: "أدخل مفتاح",
          valuePlaceHolder: "أدخل قيمة",
          buttonAdd: "يضيف",
          buttonSave: "يحفظ",
          message: "لا يمكن أن تبدأ القيمة المدخلة / تنتهي أو تحتوي على مسافة بيضاء فقط",
        },
        toastMsg:{
          one:'تم حفظ العنوان والوصف بنجاح',
          two:'تم حفظ العلامات والبيانات الوصفية بنجاح'
        }
      },
      // thumbnails
      thumbnails: {
        header: "إنشاء صورة مصغرة باستخدام أداة الصورة",
        errorMessage: "الرجاء إدخال الوقت الأقل من طول الفيديو",
        time: "وقت*",
        required: "هذه الخانة مطلوبه",
        message1: "الرجاء إدخال تنسيق hh: mm: ss",
        imageWidth: "عرض الصورة",
        placeHolder1: "أدخل العرض بالبكسل",
        message2: "الرجاء إدخال أرقام فقط",
        imageHeight: "ارتفاع الصورة",
        placeHolder2: "أدخل الارتفاع بالبكسل",
        createButton: "إنشاء صورة مصغرة",
        download: "تحميل الصورة من الرابط أدناه:"
      },
      // thumbnailsApi
      thumbnailsApi: {
        header: "إنشاء صورة مصغرة باستخدام صورة API",
        runRequest: "تشغيل الطلب",
        download: "تحميل الصورة من الرابط أدناه:"
      },
      // socialClipTabs- components
      socialClipTabs: {
        overview: "ملخص",
        thumbnails: "المصغرات",
        others: "آحرون"
      },
      // videoeditor- socialclipstabs
      videoEditor: {
        name: "اسم*",
        startTime: "وقت البدء*",
        endTime: "وقت النهاية",
        placeHolder1: "اسم القصاصة",
        required: "هذا الحقل مطلوب",
        message1: "لا يمكن أن تبدأ القيمة المدخلة / تنتهي أو تحتوي على مسافة بيضاء فقط",
        message2: "الرجاء إدخال تنسيق hh: mm: ss",
        createButton: "إنشاء مقطع فيديو"
      },
      // using_api
      usingApi: {
        runRequest: "تشغيل الطلب"
      },
    },

    //liveRecording
    module_liveRecording: {
      index: {
        header: "تسجيل مباشر",
        description: "استخدم واجهات برمجة تطبيقات Videograph تسجيل مباشر لتسجيل البرامج وإنشاء مقاطع فيديو منها.",
        createButton: "إنشاء تسجيل مباشر",
        searchPlaceHolder: "البحث في التسجيلات الحية",
        viewGuide: "عرض الدليل",
        popupVideoDelete: "تم حذف الفيديو",
        tableHeadings: {
          addedOn: "وأضاف في",
          name: "اسم",
          streamId: "معرف تيار",
          imagePreview: "معاينة الصورة",
          type: "يكتب",
          tags:"ٹیگز",
          duration: "مدة",
          resolution: "دقة",
          status: "حالة",
          actions: "أجراءات"
        },
        noDataFound: "لم يتم العثور على تسجيل مباشر"
      },
      onboardingPage: {
        header: "تسجيل مباشر",
        title: "سجل البث المباشر",
        description1: "سجل البث المباشر ببساطة عن طريق تمرير المعلمة",
        description2: "تسجيل: صحيح أثناء إنشاء البث المباشر. بمجرد البدء ، البث المباشر",
        description3: "سيكون التسجيل متاحا لمدة 12 ساعة.",
        createButton: "إنشاء تسجيل مباشر",
        viewGuide: "عرض الدليل",
        liveRecordingFeatures: {
          title: "ميزات التسجيل المباشر",
          feature1: "لقطة فيديو في الوقت الحقيقي",
          content1: "إنشاء مقاطع من تسجيلات البث المباشر.",
          feature2: "تشغيل التسجيلات",
          content2: "تشغيل التسجيلات الآمنة مع عنوان url الموقع.",
          feature3: "البث الآمن",
          content3: "جعل أحداث البث المباشر آمنة من خلال التشغيل الموقع.",
          feature4: "التفاعلات الحية",
          content4: "هل تحتاج إلى مساعدة لإضافة تفاعلات مباشرة؟ ",
          talkToUs: "تحدث إلينا"
        }
      },
      createLiveRecording: {
        header: "إنشاء تسجيل مباشر",
        postUsingUrl: "النشر باستخدام عنوان URL للفيديو ",
        postBodyEditor: "محرر نص الرسالة",
        buttonRunRequest: "تشغيل الطلب",
        validation: "هذا الخطأ مطلوب",
        runRequest: "طلب التشغيل"
      },
      // liverecordingdetails
      liveRecordingDetails: {
        liveRecording: "تسجيل مباشر",
        editButton: "يحرر",
        required: "هذه الخانة مطلوبه",
        message: "لا يمكن أن تبدأ القيمة المدخلة / تنتهي أو تحتوي على مسافة بيضاء فقط",
        saveButton: "يحفظ",
        cancelButton: "يلغي"
      },
      // liverecordingtabs- component
      liveRecordingTabs: {
        overview: "ملخص",
        videoClips: "مقاطع فيديو",
        others: "آحرون"
      },
      // videoClips- liverecordingTabs
      videoClips: {
        header: "قائمة مقاطع الفيديو",
        noVideoFound: "لم يتم العثور على مقطع فيديو",
        tableHeadings: {
          addedOn: "أضيفت في",
          name: "اسم",
          videoId: "معرف الفيديو",
          actions: "الاجراءات",
        },
        viewVideo: "عرض الفيديو",
        createClips: "إنشاء مقاطع فيديو"
      },
      // videoeditor- recordingvideoclipstabs
      videoEditor: {
        name: "اسم*",
        startTime: "وقت البدء*",
        endTime: "وقت النهاية",
        placeHolder1: "اسم القصاصة",
        placeHolder2: "أدخل بتنسيق الحقبة",
        required: "هذا الحقل مطلوب",
        message: "الرجاء إدخال بصيغة الحقبة",
        createButton: "إنشاء مقطع فيديو"
      },
      // using_api
      usingApi: {
        runRequest: "تشغيل الطلب"
      },
      recordingVideoClipsTabs: {
        useVideoEditor: "استخدم محرر الفيديو",
        useApi: "استخدام واجهة برمجة التطبيقات"
      },
      overview: {
        videoUrl: {
          title: "رابط الفيديو",
          shareableUrl: "عنوان URL قابل للمشاركة",
          linkToHls: "ارتباط بـ HLS",
          embedCode: "كود التضمين:",
          linkToThumbnail: "ارتباط بالصورة المصغرة:",
        },
        buttonAnalytics: "تحليلات",
        buttonActivities: "أنشطة",
        buttonDelete: "حذف الدفق",
        liveStreamDetails: {
          title: "معرف البث المباشر",
          ingestUrl: "استيعاب URL",
          rtmpsUrl: "عنوان URL الخاص بـ RTMPs",
          streamKey: "مفتاح الدفق",
          created: "مخلوق",
          status: "حالة",
          copy: "ينسخ",
          activesince: "نشط منذ",
          copied:"نسخ"
        },
        liveStream: {
          title: "لاعب البث المباشر",
          start: "يبدأ",
          startStop: "بدء توقف",
          live: "يعيش",
          active: "نشيط",
          offline: "غير متصل على الانترنت"
        }
      },
      // others- liverecordingtabs
      others: {
        message1: "هذا المجال مطلوب",
        titleandDescription: {
          header: "وصف العنوان",
          title: "عنوان",
          titlePlaceHolder: "أدخل العنوان أو الفيديو",
          titleRequired: "هذه الخانة مطلوبه",
          description: "وصف",
          descriptionPlaceHolder: "أدخل الوصف الخاص بك",
          buttonSave: "يحفظ",
          message: "لا يمكن أن تبدأ القيمة المدخلة / تنتهي أو تحتوي على مسافة بيضاء فقط",
        },
        tagsandMetadata: {
          header: "العلامات والبيانات الوصفية",
          title: "العلامات",
          tagsRequired: "هذا الحقل مطلوب ، الرجاء الضغط على مفتاح الإدخال لإضافة علامة",
          tagsComma: "أدخل فاصلة بعد كل علامة",
          description: "البيانات الوصفية",
          keyPlaceHolder: "أدخل مفتاح",
          valuePlaceHolder: "أدخل قيمة",
          buttonAdd: "يضيف",
          buttonSave: "يحفظ",
          message: "لا يمكن أن تبدأ القيمة المدخلة / تنتهي أو تحتوي على مسافة بيضاء فقط",
        },
        toastMsg:{
          one:'تم حفظ العنوان والوصف بنجاح',
          two:'تم حفظ العلامات والبيانات الوصفية بنجاح'
        }
      },
      recording_list: {
        streamDetails: "تفاصيل الدفق",
        deleteStream: "حذف الدفق",
        videoDetails: "تفاصيل الفيديو",
        videoClips: "مقاطع فيديو"
      }
    },

    // Accounts
    module_account: {
      index: {
        header: "حسابات",
        errorMessage: "الأحرف / الأرقام الخاصة غير مسموح بها",
        firstNameMessage: "يجب أن يحتوي الاسم الأول على 3 أحرف على الأقل",
        lastNameMessage: "يجب أن يحتوي اسم العائلة على 3 رموز على الأقل",
        logout: "تسجيل خروج",
        title1: "تفاصيل شخصية",
        firstName: "الاسم الأول",
        placeHolder1: "سونيل",
        message: "لا يمكن أن تبدأ القيمة المدخلة / تنتهي أو تحتوي على مسافة بيضاء فقط",
        lastName: "اسم العائلة",
        placeHolder2: "جافاسكار",
        required: "هذه الخانة مطلوبه",
        email: "بريد إلكتروني",
        saveChanges: "احفظ التغييرات",
        title2: "منظمة",
        createButton: "إنشاء منظمة",
      },
      manageAccount: {
        title: "إدارة الحساب",
        errorMessage: "تم تغيير الرقم السري بنجاح",
        errorToolTip: "الرجاء إدخال كلمة مرور جديدة للتغيير",
        changePassword: "تغيير كلمة المرور",
        currentPassword: "كلمة السر الحالية",
        required: "هذه الخانة مطلوبه",
        newPassword: "كلمة المرور الجديدة",
        message: "يجب أن يحتوي على 8 أحرف ، وحرف كبير واحد ، وحرف صغير واحد ، ورقم واحد وحرف خاص واحد",
        confirmPassword: "تأكيد كلمة المرور الجديدة",
        message2: "يجب أن تتطابق كلمة المرور مع كلمة المرور الجديدة!",
        changePassword: "تغيير كلمة المرور"
      },
      createOrganization: {
        header: "إنشاء منظمة جديدة",
        description: "سيكون للمؤسسة الجديدة فرق وإعدادات منفصلة عن مؤسستك الحالية.",
        name: "اسم",
        placeHolder: "أدخل اسم المنظمة",
        required: "هذه الخانة مطلوبه",
        message: "لا يمكن أن تبدأ القيمة المدخلة / تنتهي أو تحتوي على مسافة بيضاء فقط",
        cancelButton: "يلغي",
        createButton: "إنشاء منظمة"
      }
    },

    //Events and logs
    module_events_logs: {
      index: {
        header: "الأحداث والسجلات"
      },
      events_logs_tabs: {
        events: "الأحداث",
        logs: "السجلات"
      },
      ///evnets&logs component file
      event_detail: {
        tb: {
          eventId: "معرف الحدث",
          date: "تاريخ",
          type: "يكتب",
          eventData: ""
        }
      },
      events: {
        th: { //table header
          event: "حدث",
          id: "بطاقة تعريف",
          date: "تاريخ"
        },
        content1: "تتيح لك الأحداث معرفة متى حدث شيء ما في نظامك.",
        content2: "سيتم تخزين الأحداث لمدة تصل إلى 30 يومًا."
      },
      logs: {
        th: {
          status: "حالة",
          description: "وصف",
          date: "تاريخ"
        },
        content: "تُظهر السجلات كل إجراء تم اتخاذه لواجهة برمجة التطبيقات ، وسيتم تخزين السجلات لمدة تصل إلى 30 يومًا."
      },
      logs_details: {
        tb: {
          logId: "معرف السجل",
          date: "تاريخ",
          method: "طريقة",
          url: "URL"
        },
        heading1: "طلب الهيئة",
        heading2: "هيئة الاستجابة"
      }
    },

    //Analytics
    module_analytics: {
      index: {
        heading: "تحليلات توزيع المحتوى",
        timeZone: "وحدة زمنية:",
        noResultFound: "لم يتم العثور على نتائج",
        searchplaceholder: "البحث عن طريق الإسم"
      },
      analytics_tabs: {
        overview: "ملخص",
        viewership: "نسبة المشاهدة",
        ads:"أداء الإعلانات",
        filters_button: "المرشحات",
        export_button: "يصدّر",
        startDate: "تاريخ البدء",
        endDate: "تاريخ الانتهاء",
        apply: "يتقدم",
        cancel: "يلغي",
        dateLast1hr: "آخر ساعة",
        dateLast24hr: "أخر 24 ساعه",
        dateLast7days: "اخر 7 ايام",
        last1Month: "الشهر الماضي",
        today:"اليوم",
        yesterday:"أمس",
        thisWeek:"هذا الاسبوع",
        lastWeek:"الأسبوع الماضي",
        thisMonth:"هذا الشهر",
        lastMonth:"الشهر الماضي",
        filters: {
          contentType: "نوع المحتوى:",
          deviceName: "اسم الجهاز:",
          programme: "برنامج:",
          deviceType: "نوع الجهاز:",
          partners: "شركاء:",
          countries: "بلدان:",
          region: "منطقة:",
          cities: "مدن:",
          content: "محتويات:"
        }
      }
    },

    //component:Analytics tab
    //overview_component
    module_concurrentViewers: {
      heading: "المشاهدون المتزامنون",
      viewers: "مشاهدون"
    },

    module_content: {
      heading: "محتويات",
      description: "نسبة المشاهدة في الوقت الفعلي",
      description1:"الطلبات في الوقت الحقيقي",
      moreInsights: "المزيد من الرؤى",
      content:"محتوى"
    },

    module_countries: {
      heading: "محتويات",
      description: "نسبة المشاهدة في الوقت الفعلي",
      moreInsights: "المزيد من الرؤى",
      description: "نسبة المشاهدة في الوقت الفعلي",
      views: "الآراء",
      country: "دولة",
      requests:"طلبات",
      percentage: "نسبة مئوية",
    },

    module_devices: {
      heading: "الأجهزة",
      description: "نسبة المشاهدة في الوقت الفعلي",
      moreInsights: "المزيد من الرؤى"
    },

    module_device_types: {
      heading: "أنواع الأجهزة",
      description: "نسبة المشاهدة في الوقت الفعلي",
      description1:"الطلبات في الوقت الحقيقي",
      moreInsights: "المزيد من الرؤى",
      devicetypes:"أنواع الأجهزة"

    },

    module_programs: {
      heading: "البرامج",
      moreInsights: "المزيد من الرؤى"
    },

    module_partners: {
      heading: "شركاء",
      description: "نسبة المشاهدة في الوقت الفعلي",
      description1:"الطلبات في الوقت الحقيقي",
      moreInsights: "المزيد من الرؤى",
      partner:"شريك",
      requests:"طلبات",
    },

    module_usage: {
      footer: {
        encoded: "المدة الإجمالية للمحتوى المشفر.",
        stored: "المدة الإجمالية للمحتوى المخزن.",
        streamed: "المدة الإجمالية للمحتوى المتدفق."
      },
      encoded: "مشفر",
      stored: "مخزن",
      streamed: "دفق"
    },

    module_genfunctions: {
      inactiveContent: "هذه المنظمة غير نشطة. الرجاء التواصل",
      contactLink: "اتصل بدعم Videograph",
      content: "جاهز للبدء! قم بالترقية للحصول على رصيد مجاني بقيمة 20 دولارًا. أضف مقاطع فيديو كاملة الطول وبث مباشر وتسجيل مباشر دون أي قيود.",
      updateButton: "يرقي",
      mins: "دقيقة",
      sessions: 'الجلسات',
      mins: "دقيقة",
      viewers: "مشاهدون",
      copied: "نسخ",
      noLinkAvailable: "لا يوجد ارتباط متاح"
    },

    //Viewership//components//
    //Views
    module_views: {
      noOfViews: "عدد المشاهدين",
      viewContent1: "إجمالي عدد المستخدمين",
      viewContent2: "بدأ تشغيل الفيديو.",
      sessions: "الجلسات",
      sessionContent1: "عدد الجلسات",
      sessionContent2: " شاهده المستخدمون.",
      totalViewship: "إجمالي نسبة المشاهدة",
      totalViewshipcontent1: "إجمالي الوقت الذي يقضيه كل مستخدم",
      totalViewshipcontent2: "مشاهدة المحتوى.",
      adViewership: "مشاهدة الإعلانات",
      adContent1: "إجمالي الوقت الذي يقضيه كل مستخدم",
      adContent2: "مشاهدة الإعلانات.",
      avgSessions: "متوسط الجلسة",
      avgscontent1: "متوسط عدد الجلسات التي تم إنفاقها",
      avgscontent2: "بواسطة مستخدمين فريدين.",
      avsSessionsDuration: "متوسط مدة الجلسات ",
      avsSessionsDurationContent1: "متوسط الوقت المنقضي لكل",
      avsSessionsDurationContent2: "مستخدم في جلسة واحدة.",
      noOfViewers: "عدد المشاهدين",
      noOfSessions: "عدد الجلسات ",
      totalViwership: "إجمالي نسبة المشاهدة ",
      adViewershipMins: "مشاهدة الإعلان ",
      avgSession: "متوسط ​​الجلسات ",
      avgSessionDurationMins: "متوسط ​​مدة الجلسة ",
    },
    module_ad_performance: {
      noOfViews: "عدد المشاهدين",
      viewContent1: "إجمالي عدد الإعلانات",
      viewContent2: "تم إدراجها.",
      sessionContent1: "الوقت الإجمالي المتاح",
      sessionContent2: "لإدراج الإعلانات.",
      totalViewshipcontent1: "الوقت الإجمالي للإعلانات",
      totalViewshipcontent2: "تم إدراجها.",
      adContent1: "نسبة الوقت للإعلانات",
      adContent2: "التي تم إدراجها مقارنة بالوقت المتاح.",
      avgscontent1: "العدد الإجمالي للجلسات التي تم فيها",
      avgscontent2: "استلام طلبات الإعلانات.",
      avsSessionsDurationContent1: "متوسط عدد الإعلانات",
      avsSessionsDurationContent2: "تم إدراجها في كل جلسة.",
      noOfInserted: "عدد الإعلانات المدرجة",
      availAdDuration: "المدة الإعلانية المتاحة",
      fillAdsDuration: "مدة الإعلانات المملوءة",
      AdFillRate: "معدل ملء الإعلان",
      totalSessions: "إجمالي الجلسات",
      adsInsertedPerSession: "الإعلانات المدرجة لكل جلسة",
      emptyVastResponses:"الردود الإعلانية الفارغة",
      impressions:"انطباعات",
      adsInserted:" تمت إدراج الإعلانات",
      duration:" المدة",
      performance:" الأداء",
    },

    //ViewewshipTrend
    module_viewershipTrend: {
      heading: "اتجاه المشاهدة",
      heading1: "اتجاه إدراج الإعلان",
      sessionCount: "عدد الجلسات",
      uniqueViewers: "مشاهدون فريدون",
      avgSessionDuration: "متوسط ​​مدة الجلسة",
      adViewershipMins: "دقائق مشاهدة الإعلان",
      viewershipMins: "عدد دقائق المشاهدة",
      requestsvsimpression:"الطلب مقابل الظهور",
      time: "وقت",
      failedavailrequests:"طلبات الاستفادة المملوءة",
      impressions:"انطباعات",
      emptyvastresponse:"ردود واسعة فارغة",
      noadwarnings:"لا توجد تحذيرات إعلانية",
      count: "عدد",
      summary: "ملخص"
    },

    //viewershipTrendin30mins
    module_viewershipTrendin30mins: {
      heading: "اتجاه المشاهدة حسب الوقت من اليوم",
      uniqueViewers: "مشاهدون فريدون",
      sessions: "الجلسات",
      avgSessionDuration: "متوسط ​​مدة الجلسة",
      adViewershipMins: "دقائق مشاهدة الإعلان",
      sessionDuration: "مدة الجلسة",
      time: "وقت",
      adrequest:"طلبات الإعلان",
      countt: "عدد"
    },

    //analytics filters
    //dailog//analytics filters
    module_analytics_filters: {
      selectFilter: "حدد تصفية",
      clearAll: "امسح الكل",
      filtersSelected: "المرشحات المختارة",
      cancell: "يلغيel",
      applyy: "يتقدم",
      placeholderSearch: "يبحث",
      contentType:"نوع المحتوى",
      contentIdStreamId:"معرف المحتوى / معرف الدفق",
      programme: "برنامج",
      deviceType:"نوع الجهاز",
      deviceName:"اسم الجهاز",
      partner:"شريك",
      country:"دولة",
      region:"منطقة",
      city:"مدينة",
      noDataFound:"لاتوجد بيانات"
    },

    //Components//Advanced_video_analytics
    //AdvDatePicker
    module_AdvDatePicker: {
      startDate: "تاريخ البدء ",
      endDate: "تاريخ الانتهاء",
      cancel: "يلغي",
      today: "اليوم",
      oneWeek: "اسبوع واحد",
      oneMonth: "شهر واحد",
      applyy: "يتقدم"
    },

    //common//component
    //ConfirmLogOut
    module_ConfirmLogOut: {
      header: "مستخدم تسجيل الخروج",
      content: "هل أنت متأكد أنك تريد تسجيل الخروج؟",
      cancel: "يلغي",
      buttonlogout: "نعم ، تسجيل الخروج"
    },

    //Settings
    module_setting: {
      CreateSignKey: {
        heading: "يوجد أدناه مفتاح تسجيل الدخول الجديد:",
        labelSigningKeyId: "معرف مفتاح تسجيل الدخول:",
        copied: "نسخ",
        labelBase64: "المفتاح الخاص بترميز Base64:",
        content: "نحن لا نحتفظ بالمفتاح السري. يرجى نسخه أو تنزيله في نظامك",
        download: "تنزيل كملف pem",
        done: "منتهي"
      },
      webHooks: {
        description1: "استخدم Webhooks للحصول على تحديثات في الوقت الفعلي حول أي أحداث تحدث خارج دورة طلب واجهة برمجة التطبيقات.",
        description2: "يمكن تكوين Webhooks لأي بيئة وسيتم إرسال إشعارات لجميع الأحداث الخاصة بالبيئة.",
        createButton: "إنشاء Webhook جديد",
        tableHeadings: {
          urlToNotify: "URL للإعلام",
          signingSecret: "سر التوقيع",
          environment: "بيئة",
          created: "مخلوق",
          status: "حالة",
          actions: "أجراءات",
        },
        active: "نشيط",
        disable: "إبطال"
      },
      createNewWebhook: {
        newWebhook: "Webhook الجديد",
        required: "هذه الخانة مطلوبه",
        urlErrorMessage: "أدخل رابط صحيح من فضلك",
        urlToNotify: "URL للإعلام:",
        placeHolder: "إدخال عنوان الموقع",
        required: "هذه الخانة مطلوبه",
        message: "لا يمكن أن تبدأ القيمة المدخلة / تنتهي أو تحتوي على مسافة بيضاء فقط",
        description: "سيتم إرسال جميع الأحداث إلى عنوان URL هذا. لمعرفة المزيد حول أنواع الأحداث ، راجع",
        docs: "المستندات",
        cancel: "يلغي",
        createButton: "إنشاء Webhook"
      },
      // dialog//deletewebhook
      deleteWebhook: {
        errorMessage: "تم حذف الخطاف التلقائي على الويب",
        header: "حذف Webhook",
        confirmDelete: "هل أنت متأكد أنك تريد حذف Webhook هذا؟",
        deleteMessage: "بمجرد الحذف ، لن يكون الرد التلقائي على الويب متاحًا مرة أخرى ولا يمكن التراجع عن الإجراء.",
        cancelButton: "يلغي",
        deleteButton: "نعم ، احذف"
      },
      billing: {
        description1: "إدارة الفوترة لكل من خطط الفيديو والبيانات هنا. لا تتردد",
        contactUs: "اتصل بنا",
        description2: "لأية استفسارات تتعلق بالفواتير.",
        nextPayment: "الدفعة التالية:",
        editPaymentButton: "تعديل تفاصيل الدفع",
        encoded: "ترميز",
        stored: "تخزين",
        streamed: "تدفق",
        billingCycle: "دورة الفوترة",
        videosTable: {
          header: "استهلاك الفيديو",
          title1: "مقاطع فيديو (حتى 1080 بكسل)",
          title2: "مقاطع الفيديو (فوق 1080 بكسل)",
          total: "إجمالي رسوم الفيديو",
        },
        liveTable: {
          header: "البث المباشر والتسجيل",
          title1: "البث المباشر",
          title2: "تسجيل مباشر",
          total: "إجمالي رسوم البث المباشر"
        },
        videoEditingTable: {
          header: "تحرير الفيديو",
          total: "إجمالي رسوم تحرير الفيديو"
        },
        portraitProTable: {
          header: "بورتريه برو",
          total: "إجمالي رسوم بورتريه برو"
        },
        billingTable: {
          header: "ملخص الفواتير",
          encoding: "رسوم الترميز",
          storage: "رسوم التخزين",
          streaming: "رسوم البث",
          total: "المجموع الحالي"
        },
        walletTable: {
          yourWallet: "رصيد محفظتك",
          remaining: "باق",
          addMoney: "إضافة أموال",
          enableAutoRecharge: "تمكين إعادة الشحن التلقائي",
          recommended: "موصى به",
          description: "احصل على وصول غير منقطع إلى خدماتنا. قم بتعديل إعدادات الدفع عند الحاجة.",
          balanceBelow: "عندما يكون رصيدي أقل من",
          required: "هذا الحقل مطلوب",
          message: "الرجاء إدخال أرقام فقط",
          recharge: "إعادة الشحن تلقائيا",
          saveButton: "يحفظ"
        },
        paymentTable: {
          header: "إعادة الشحن تلقائيا",
          paymentHistory: "سجل الدفع",
          card: "بطاقة",
          expirationDate: "تاريخ انتهاء الصلاحية",
          email: "البريد الإلكتروني",
          zipCode: "الرمز البريدي",
          billingAddress: "عنوان إرسال الفواتير",
          city: "مدينة",
          state: "حالة",
          country: "بلد",
        },
      },
      payment_history: {
        paymentHistory: "تاريخ الدفع",
        PaymentDate: "تاريخ الدفع",
        amount: "كمية",
        actions: "أجراءات",
        done: "منتهي"
      },
      index: {
        heading: "إعدادات"
      },
      tabs: {
        organization: "منظمة",
        billing: "الفواتير",
        aPIAccessTokens: "رموز الوصول إلى API",
        webhooks: "ويب هوك",
        signingKeys: "مفاتيح التوقيع",
      },
      //component//homepage//settingstab
      organization: {
        success:"النجاح",
        tokenExpired:"انتهت صلاحية الرمز",
        userDeleted:"تم حذف المستخدم",
        invitationSent:"دعوة التي وجهت",
        joined:"انضم",
        heading1: "عام",
        organization: "منظمة",
        edit: "يحرر",
        heading2: "أعضاء",
        inviteNoButton: "ادعُ عضوًا",
        th: {
          name: "اسم",
          email: "بريد إلكتروني",
          role: "دور",
          status: "حالة",
          actionn: "فعل"
        },
        tb: {
          inviteSent: "أرسلت الدعوة",
          resend: "إعادة إرسال"
        }
      },
      removeuser: {
        heading: "إزالة المستخدم",
        content: "هل أنت متأكد أنك تريد إزالة المستخدم؟",
        content1: 'بمجرد الإزالة ، لن يتمكن هذا المستخدم من الوصول إلى هذه المؤسسة على Videograph.',
        cancelButton: "يلغي",
        removeButton: "نعم ، قم بإزالة"
      },
      //components//dailog//Edit_organisation_name
      Edit_organisation_name: {
        title: "تحرير اسم المؤسسة",
        organisationName: "اسم المنظمة",
        required: "هذه الخانة مطلوبه",
        message: "لا يمكن أن تبدأ القيمة المدخلة / تنتهي أو تحتوي على مسافة بيضاء فقط",
        cancelButton: "يلغي",
        saveChangButton: "حفظ التغييرات"
      },
      //components//dailog//Newmember_invite
      Newmember_invite: {
        newMemberInvited:"عضو جديد مدعو",
        title: "قم بدعوة عضو جديد",
        emailAddress: "عنوان البريد الإلكتروني",
        required: "هذه الخانة مطلوبه",
        meesage: "عنوان البريد الإلكتروني غير صالح",
        role: "دور",
        rolePlaceholder: "البحث عن طريق الإسم",
        noResultFound: "لم يتم العثور على نتائج",
        sendInvitation: "إرسال دعوة"
      },
      //component//homepage//billing_plan
      billing_plan: {
        heading: "جاهز للبدء!",
        subHeading: "قم بالترقية عن طريق إضافة تفاصيل الدفع. احصل على رصيد مجاني بقيمة 20 دولارًا.",
        updateButton: "يرقي",
        content1: "أضف مقاطع فيديو كاملة الطول ، وبث مباشر ، وتحرير فيديو تسجيل مباشر وأفقي إلى مقاطع فيديو عمودية دون أي قيود.",
        content2: "لن يتم تحصيل رسوم منك حتى تستخدم رصيد Videograph بقيمة 20 دولارًا بالكامل.",
        viewPricing: "عرض التسعير"
      },
      //pages//settings//Edit_payment_details
      Edit_payment_details: {
        titile: "تحرير تفاصيل الدفع",
        labelCreditDebit: "بطاقة الائتمان أو الخصم",
        labelCreditDebitplaceholder: "رقم البطاقة",
        required: "هذه الخانة مطلوبه",
        expirationDate: "Expiration Date",
        labelcvv: "CVV",
        labelcvvplaceholder: "رقم CVV",
        labelBillingAddress: "عنوان وصول الفواتير",
        labelBillingAddressplaceholder: "عنوان الشارع ، صندوق البريد ، الشركة",
        labelBillingAddress2: "عنوان الفواتير 2",
        labelBillingAddressplaceholder2: "رقم الشقة ، الجناح ، الطابق ، إلخ",
        labelCity: "مدينة",
        labelCityplaceholder: "أدخل المدينة",
        labelStatelabel: "اختر ولايه",
        labelCountry: "دولة",
        labelCountryplaceholder: "Select دولة",
        labelBillingEmail: "البريد الالكتروني لقوائم الدفع",
        labelBillingEmailplaceholder: "أدخل عنوان البريد الالكتروني",
        saveButton: "حفظ تفاصيل الدفع",
        cancelButton: "يلغي"
      },
      //component//settingstabs//popup//AddMoney
      AddMoney: {
        addMoney: "إضافة المال",
        currentBalance: "الرصيد الحالي",
        rechargeWallet: "إعادة شحن المحفظة",
        required: "هذه الخانة مطلوبه",
        message: "الرجاء إدخال أرقام فقط",
        enableAutoRecharge: "قم بتمكين إعادة الشحن التلقائي",
        recommendended: "موصى به",
        content: "احصل على وصول غير منقطع إلى خدماتنا. قم بتعديل إعدادات الدفع عند الحاجة.",
        labelWhenMyBalanceIsBelow: "عندما يكون رصيدي أدناه",
        labelAutomaticallyRecharge: "إعادة الشحن تلقائيًا",
        coutinueButton: "يكمل",
      },
      //component//settingstabs//popup//PaymentSuccess
      PaymentSuccess: {
        PaymentSuccessful: "تم الدفع بنجاح",
        youHaveAdded: "لقد قمت بإضافة",
        toYourWallet: "لمحفظتك",
        currentBalanceIs: "الرصيد الحالي هو",
        InvoiceNumber: "رقم الفاتورة: #",
        goBack: "عُد",
      },
      //component//settingstabs//popup//Process
      processing: {
        heading: "معالجة الدفع الخاص بك",
        content: "قد يستغرق هذا بضع ثوان. من فضلك اجلس واسترخي!",
        content2: "لا تغلق أو تحدّث الصفحة."
      },
      //component//settingstabs//popup//Reward
      Reward: {
        congratulations: "تهانينا!",
        content: "لقد قمت بإعداد تفاصيل الدفع الخاصة بك بنجاح",
        content1: "هنا هو جائزتك",
        credit: "> 20 دولارًا من الاعتمادات",
        content2: "لقد أضفنا الأرصدة إلى محفظتك.",
        okButton: "نعم"
      },
      //component//homepage//API Acess Token
      Api_accesstokens: {
        description: "يمكنك إنشاء أو إبطال رموز الوصول إلى واجهة برمجة التطبيقات. تُستخدم الرموز لمصادقة طلب واجهة برمجة التطبيقات وهي خاصة بالبيئة. لمعرفة المزيد قم بزيارة",
        guide: "مرشد",
        createButton: "قم بإنشاء رمز جديد",
        th: {
          tokenid: "معرف الرمز",
          environment: "بيئة",
          permission: "إذن",
          created: "مخلوق",
          createdBy: "انشأ من قبل",
          status: "حالة",
          actions: "أجراءات",
        },
        tb: {
          active: "نشيط",
          activeRevoke: "إبطال الوصول",
          revoke: "سحب او إبطال",
        }
      },
      Revoke_access: {
        heading: "إبطال الوصول",
        content: "هل أنت متأكد أنك تريد إلغاء الوصول؟",
        content1: "بمجرد إبطال الوصول ، سيصبح هذا الرمز المميز غير صالح لجميع المستخدمين. لا يمكن التراجع عن هذا الإجراء.",
        cancelButton: "يلغي",
        revokeButton: "نعم ، إبطال"
      },
      //page//settinga/New_acess_token
      New_acess_token: {
        heading: "رمز وصول جديد",
        permission: "إذن",
        content: "لمعرفة المزيد من الإذن يرجى زيارة",
        tokenAccessGuide: "token access guide",
        labelRead: "يقرأ",
        labelWrite: "يكتب",
        labelReadOnly: "يقرأ فقط",
        labelAccess: "اسم رمز الوصول",
        required: "هذه الخانة مطلوبه",
        message: "لا يمكن أن تبدأ القيمة المدخلة / تنتهي أو تحتوي على مسافة بيضاء فقط",
        labelAccessPlaceholder: "تطوير",
        cancel: "يلغي",
        createToken: "إنشاء رمز"
      },
      //component//homepage//settingstabs//EditApi
      EditApi: {
        save: "يحفظ",
        cancel: "يلغي",
        required: "هذا الحقل مطلوب بدون مسافة في البداية / النهاية"
      },
      //component//dailog//SecretKey
      SecretKey: {
        heading: "يوجد أدناه رمز الوصول الجديد",
        accessTokenId: "معرف رمز الوصول:",
        secretKey: "المفتاح السري:",
        content: "نحن لا نحتفظ بالمفتاح السري. يرجى نسخه أو تنزيله في نظامك",
        copied: "نسخ",
        download: "تنزيل كملف env",
        done: "منتهي"
      },
      //component//homepage//signingkeys
      signingkeys: {
        description: "تُستخدم مفاتيح تسجيل الدخول لتوقيع JSON Web Tokens (JWTs) لتأمين طلبات معينة. يمكن استخدام مفاتيح الفيديو لتأمين عناوين URL للتشغيل ، ويمكن استخدام مفاتيح البيانات لتأمين الوصول إلى أعداد المشاهدين في الوقت الفعلي.",
        createButton: "إنشاء مفتاح جديد",
        th: {
          keyID: "معرف المفتاح",
          environment: "بيئة",
          productt: "منتجات",
          created: "مخلوق",
          status: "حالة",
          actions: "أجراءات",
        },
        tb: {
          active: "نشيط",
          video: "فيديو",
          data: "بلح",
          system: "نظام"
        }
      },
      //page//setting//Create_singing_keys
      Create_signing_key: {
        heading: "مفتاح توقيع جديد",
        product: "منتج",
        searchPlaceholder: "البحث عن طريق الإسم",
        noResultFound: "لم يتم العثور على نتائج",
        cancel: "يلغي",
        createSigningKey: "إنشاء مفتاح التوقيع"
      },
      // dialog// deletesigningkey
      deleteSigningKey: {
        errorMessage: "تم حذف مفتاح التوقيع",
        header: "حذف مفتاح الغناء",
        confirmDelete: "هل أنت متأكد أنك تريد حذف مفتاح التوقيع هذا؟",
        deleteMessage: "بمجرد الحذف ، لن يعد مفتاح التوقيع هذا متاحًا ولا يمكن التراجع عن الإجراء.",
        cancelButton: "يلغي",
        deleteButton: "نعم ، احذف"
      }
    },
    module_scheduleReports:{

      list:{
        reportName:"تقرير اسم",
        sendTo:"ارسل إلى",
        runAt:"الجري في",
        status:"حالة",
        timeZone:"وحدة زمنية",
        actions:"أجراءات",
        resume:"سيرة ذاتية",
        pause:"يوقف",
        delete:"يمسح",
        edit:"يحرر",
        noReportsScheduledPlease:"لم تتم جدولة أي تقارير. لو سمحت",
        setup:"يثبت"

      },
      setup:{
        reportName:"تقرير اسم",
        emailTo:"البريد الإلكتروني ل",
        oneTime:"مره واحده",
        recurring:"يتكرر",
        sendAt:"أرسل في",
        from:"من",
        to:"ل",
        daily:"يوميًا",
        weekly:"أسبوعي",
        monthly:"شهريا",
        metrics:"المقاييس",
        all:"الجميع",
        metricsForOverview:"مقاييس نظرة عامة",
        metricsForViewership:"مقاييس نسبة المشاهدة",
        encodedMins:"دقائق مشفرة",
        storedMins:"الدقائق المخزنة",
        streamedMins:"دقائق البث",
        deviceTypes:"نوع الجهاز",
        devices:"الأجهزة",
        contents:"محتويات",
        concurrentViewers:"المشاهدون المتزامنون",
        countries:"بلدان",
        partners:"الشركاء",
        noOfViewers:"عدد المشاهدين",
        sessions:"الجلسات",
        totalViewership:"إجمالي نسبة المشاهدة",
        adViewership:"نسبة مشاهدة الإعلان",
        avgSessionsPerUser:"متوسط ​​عدد الجلسات لكل مستخدم",
        avgSessionDuration:"متوسط ​​مدة الجلسة",
        splitAllDataByFilter:"تقسيم كافة البيانات حسب عامل التصفية",
        filters:"المرشحات",
        cancel:"يلغي",
        saveReport:"احفظ التقرير",
        namePlaceHolder:"قم بتسمية تقريرك",
        nameError:"يجب ألا يكون الاسم فارغًا أو يحتوي على مسافة بيضاء فقط",
        nameError1:"يرجى التأكد من أن الاسم لا يبدأ بمسافة.",
        nameError2:"يجب ألا يتجاوز الاسم 64 حرفًا.",
        emailIDPlaceholder:"أدخل معرفات البريد الإلكتروني مفصولة بفاصلة",
        emailError:"يجب ألا يكون البريد الإلكتروني فارغًا أو يحتوي على مسافة بيضاء فقط",
        required:"هذه الخانة مطلوبه"

      }

    }
  },


  "te": {

    module_navbar: {
      title: "వీడియోగ్రాఫ్",
      environments: "పర్యావరణాలు",
      videos: "వీడియోలు",
      liveStream: "ప్రత్యక్ష ప్రసారం",
      liveRecording: "ప్రత్యక్ష రికార్డింగ్",
      monitoring:"పర్యవేక్షణ",
      adinsertion:"ప్రకటన చొప్పించడం",
      analytics: "విశ్లేషణలు",
      infraMonitor:"ఇన్ఫ్రామానిటర్",
      portraitPro: "పోర్ట్రెయిట్  ప్రో",
      interactiveLive: "ఇంటరాక్టివ్ లైవ్",
      advAnalytics: "అధునాతన వీడియో విశ్లేషణలు",
      eventsLogs: "ఈవెంట్‌లు & లాగ్‌లు",
      settings: "సెట్టింగ్‌లు",
      apiDocs: "API డాక్స్",
      logout: "లాగ్అవుట్"
    },

    //components//utils//EnvDropDown
    module_EnvDropDown: {
      environment: "పర్యావరణం",
      noResultFound: "ఫలితం కనుగొనబడలేదు",
      searchByName:"పేరు ద్వారా శోధించండి"
    },

    // activities//components//dailog///activies
    module_activities: {
      activities: {
        heading: "కార్యకలాపాలు"
      },
      logs: {
        content: "తీసుకున్న ప్రతి API చర్యను లాగ్‌లు చూపుతాయి.లాగ్‌లు 30 రోజుల వరకు నిల్వ చేయబడతాయి.",
        status: "స్థితి",
        description: "వివరణ",
        date: "తేదీ",
        NoDataFound: "డేటా ఏదీ కనుగొనబడలేదు",
        NoLogsAvailable: "లాగ్‌లు ఏవీ అందుబాటులో లేవు"
      },
      eventDetailActivity: {
        eventId: "ఈవెంట్ Id",
        data: "తేదీ",
        type: "టైప్ చేయండి",
        eventData: "ఈవెంట్ డేటా"
      },
      events: {
        description1: "మీ సిస్టమ్‌లో ఏదైనా జరిగినప్పుడు ఈవెంట్‌లు మీకు తెలియజేస్తాయి.",
        description2: "ఈవెంట్‌లు 30 రోజుల వరకు నిల్వ చేయబడతాయి.",
        events: "ఈవెంట్స్",
        id: "ID",
        date: "తేదీ",
        noDataFound: "డేటా ఏదీ కనుగొనబడలేదు",
        NoEventAvailable: "ఈవెంట్‌లు ఏవీ అందుబాటులో లేవు"
      },
      logDetailActivity: {
        logId: "లాగ్ ID",
        date: "తేదీ",
        method: "పద్ధతి",
        url: "URL",
        requestBody: "రిక్వెస్ట్ బాడీ ",
        responseBody: "రెస్పాన్స్ బాడీ"
      },
    },

    // Videos
    module_videos: {
      index_page: {
        header: "వీడియోలు",
        content1: "మా సేవను ఉపయోగించి మీ assetని అప్‌లోడ్ చేయండి, ట్రాన్స్‌కోడ్ చేయండి, నిల్వ చేయండి మరియు బట్వాడా చేయండి.",
        content2: "మీరు APIని ఉపయోగించి వీడియోను అప్‌లోడ్ చేయవచ్చు లేదా మీ వినియోగదారులతో భాగస్వామ్యం చేయడానికి ఇక్కడ నుండి నేరుగా అప్‌లోడ్ చేయవచ్చు.",
        viewGuide: "గైడ్‌ని వీక్షించండి",
        addVideoButton: "కొత్త వీడియోని జోడించండి",
        searchVideos: "వీడియోలను శోధించండి",
        popupVideoDelete: "వీడియో తొలగించబడింది",
        tableHeadings: {
          addedOn: "జోడించబడింది",
          name: "పేరు",
          contentId: "కంటెంట్ ID",
          imagePreview: "చిత్రం ప్రివ్యూ",
          type: "టైప్",
          tags:"టాగ్లు",
          duration: "వ్యవధి",
          resolution: "స్పష్టత",
          status: "స్థితి",
          actions: "చర్యలు"
        },
        noDataFound: "వీడియో డేటా ఏదీ కనుగొనబడలేదు"
      },
      onboardingPage: {
        header: "వీడియోలు",
        upload: {
          title: "వీడియో ఫైల్‌లను అప్‌లోడ్ చేయండి మరియు ప్రసారం చేయండి",
          content1: "వీడియోగ్రాఫ్‌ని ఉపయోగించి మీ వీడియోలను అప్‌లోడ్ , ట్రాన్స్‌కోడ్ , స్టోర్ మరియు డెలివరీ చేయండి.",
          content2: "మీరు మా APIని ఉపయోగించి లేదా నేరుగా ఇక్కడ నుండి వీడియోను అప్‌లోడ్ చేయవచ్చు",
          content3: "మరియు దానిని మీ వినియోగదారులకు తెలియజేయవచ్చు"
        },
        button: {
          addNewVideo: "కొత్త వీడియోని జోడించండి",
          viewGuide: "గైడ్‌ని వీక్షించండి"
        },
        onDemandVideoFeatures: {
          title: "ఆన్-డిమాండ్ వీడియో ఫీచర్లు",
          videoFeature1: {
            title: "వీడియో క్లిప్పింగ్",
            content: "మీ వీడియోలను అప్‌లోడ్ చేయండి & వాటి నుండి క్లిప్‌లను సృష్టించండి."
          },
          videoFeature2: {
            title: "ఉపశీర్షికలు",
            content: "మీ వీడియోలకు బహుళ ఉపశీర్షిక ఫైల్‌లను జోడించండి."
          },
          videoFeature3: {
            title: "అధునాతన సవరణ",
            content: "APIల ద్వారా మల్టిపుల్ ఇమేజ్ & టెక్స్ట్ ఓవర్‌లేలను జోడించండి."
          },
          videoFeature4: {
            title: "సురక్షిత ప్లేబ్యాక్",
            content: "signed ప్లేబ్యాక్‌తో మీ వీడియోను ప్రైవేట్‌గా చేయండి."
          }
        }
      },

      // direct_uploade
      direct_uploade: {
        createBulkUpload: "బల్క్ అప్‌లోడ్‌ను సృష్టించండి",
        importBulkVideos: "మీ బల్క్ వీడియోలను దిగుమతి చేసుకోండి",
        selectFile: "ఫైల్‌ని ఎంచుకోండి",
        supportedFormatsExcel: "మద్దతు ఉన్న ఫైల్ ఫార్మాట్‌లు .xlsx (గరిష్ట అప్‌లోడ్ పరిమితి వరకు",
        videos: "వీడియోలు)",
        downloadText: "ఇక్కడ క్లిక్ చేయడం ద్వారా సూచన కోసం Excel టెంప్లేట్‌ను డౌన్‌లోడ్ చేయండి",
        here: "ఇక్కడ",
        importButton: "దిగుమతి",
        or:"లేదా",
        addNewVideo: "కొత్త వీడియోని జోడించండి",
        uploadVideo: "మీ వీడియో ఫైల్‌ను అప్‌లోడ్ చేయండి",
        placeholder: "వీడియో పేరును నమోదు చేయండి",
        required: "ఈ ఖాళీని తప్పనిసరిగా పూరించవలెను",
        message: "నమోదు చేసిన విలువ ప్రారంభం/ముగింపు లేదా వైట్ స్పేస్ మాత్రమే కలిగి ఉండకూడదు",
        name: "పేరు*",
        selectFile: "ఫైల్‌ని ఎంచుకోండి",
        supportedFormats: "మద్దతు ఉన్న ఫార్మాట్‌లు .mkv,.mp4,.avi,.3gp,.m4v,.mov,.webm,.wmv,.mxf,.ts",
        fileUploaded: "ఫైల్ అప్‌లోడ్ చేయబడింది",
        upload: "అప్‌లోడ్ చేయండి",
        selectUpload:"దయచేసి అప్‌లోడ్ చేయడానికి ఫైల్‌ను ఎంచుకోండి",
        videoError:"దయచేసి మద్దతు ఉన్న ఫార్మాట్‌లలో ఒకదానిలో వీడియో ఫైల్‌ను ఎంచుకోండి: .mkv,.mp4,.avi,.3gp,.m4v,.mov,.webm,.wmv,.mxf,.ts",
        selectFileError:"దయచేసి ఫైల్‌ని ఎంచుకోండి",
        invalidFileFormat:"చెల్లని ఫైల్ ఫార్మాట్. Excel ఫైల్‌లు (.xlsx, .xls) మాత్రమే అనుమతించబడతాయి.",
        maxLimit:"గరిష్ట వీడియో పరిమితి",
        unableToRead:"ఫైల్‌ని చదవడం సాధ్యం కాలేదు. దయచేసి మళ్లీ ప్రయత్నించండి."
      },

      // videodelivery_addnewassets
      videodelivery_addnewassets: {
        postUsingUrl: "వీడియో URLని ఉపయోగించి పోస్ట్ చేయండి:",
        postBodyEditor: "పోస్ట్ బాడీ ఎడిటర్:",
        validation: "ఈ ఖాళీని తప్పనిసరిగా పూరించవలెను",
        runRequest: "రన్ రిక్వెస్ట్",
        syntaxErr:"సింటాక్స్ లోపం",
        urlErr:"దయచేసి చెల్లుబాటు అయ్యే urlని నమోదు చేయండి",
        urlRequired:"URL అవసరం",
        playBackPolicyErr:"ప్లేబాక్ విధానం అవసరం"
      },

      // videodetails
      videoDetails: {
        header: "వీడియో జాబితా",
        editButton: "సవరించు",
        required: "ఈ ఖాళీని తప్పనిసరిగా పూరించవలెను",
        message: "నమోదు చేసిన విలువ ప్రారంభం/ముగింపు లేదా వైట్ స్పేస్ మాత్రమే కలిగి ఉండకూడదు",
        saveButton: "సేవ్ చేయండి",
        cancelButton: "రద్దు చేయండి",
      },

      // videolist
      videoList: {
        videoDetails: "వీడియో వివరాలు",
        videoClips: "వీడియో క్లిప్‌లు",
        thumbnails: "తుమ్బనైల్స్ ",
        subtitles: "ఉపశీర్షికలు",
        deleteVideo: "వీడియోను తొలగించండి",
        retry:"మళ్లీ ప్రయత్నించండి"
      },

      // videodeliverytabs // homepage // components
      videoDeliveryTabs: {
        overview: "అవలోకనం",
        videoClips: "వీడియో క్లిప్‌లు",
        thumbnails: "తుమ్బనైల్స్ ",
        subtitles: "ఉపశీర్షికలు",
        others: "ఇతరులు"
      },

      // overview- videodeliverytabs
      overview: {
        testVideoBanner: "ఇది ఉచిత పరీక్ష వీడియో. పరీక్ష వీడియోలు 10 సెకన్లకు పరిమితం చేయబడ్డాయి మరియు 24 గంటల తర్వాత తొలగించబడతాయి.",
        shareableUrl: "భాగస్వామ్యం చేయదగిన URL:",
        linkToHls: "HLSకి లింక్:",
        embedCode: "పొందుపరిచిన కోడ్:",
        linkToThumbnail: "థంబ్‌నెయిల్‌కి లింక్:",
        mp4Url: "MP4 URL:",
        analyticsButton: "విశ్లేషణలు",
        activitiesButton: "కార్యకలాపాలు",
        deleteButton: "వీడియోను తొలగించండి",
        downloadButton: "వీడియోను డౌన్‌లోడ్ చేయండి",
        videoDetails: {
          header: "వీడియో వివరాలు",
          contentId: "కంటెంట్ ID",
          created: "సృష్టించబడింది",
          status: "స్థితి",
          duration: "వ్యవధి",
          aspectRatio: "కారక నిష్పత్తి",
          resolution: "స్పష్టత",
          streamId: "స్ట్రీమ్ ID",
          startTime: "ప్రారంభ సమయం",
          endTime: "ముగింపు సమయం"
        },
        playbackSample: "ప్లేబ్యాక్ నమూనా",
        videoUrls: "వీడియో URLలు",
        copied: "కాపీ చేయబడింది",
        videoSourceInfo: {
          header: "వీడియో మూలం సమాచారం",
          title: "వీడియో URL",
          videoInfo: {
            title: "వీడియో సమాచారం",
            width: "వెడల్పు",
            height: "ఎత్తు",
            frameRate: "ఫ్రేమ్ రేట్",
            encoding: "ఎన్కోడింగ్",
            duration: "వ్యవధి"
          },
          audioInfo: {
            title: "ఆడియో సమాచారం",
            sampleRate: "నమూనా రేటు",
            encoding: "ఎన్కోడింగ్",
            channels: "ఛానెల్‌లు",
            duration: "వ్యవధి",
          }
        }
      },

      // others- videodeliverytabs
      others: {
        message1: "ఈ ఖాళీని తప్పనిసరిగా పూరించవలెను",
        titleandDescription: {
          header: "శీర్షిక & వివరణ",
          title: "శీర్షిక",
          titlePlaceHolder: "శీర్షిక లేదా వీడియోను నమోదు చేయండి",
          titleRequired: "ఈ ఖాళీని తప్పనిసరిగా పూరించవలెను",
          description: "వివరణ",
          descriptionPlaceHolder: "మీ వివరణను నమోదు చేయండి",
          buttonSave: "సేవ్ చేయండి",
          message: "నమోదు చేసిన విలువ ప్రారంభం/ముగింపు లేదా వైట్ స్పేస్ మాత్రమే కలిగి ఉండకూడదు",
        },
        tagsandMetadata: {
          header: "ట్యాగ్‌లు మరియు మెటాడేటా",
          title: "టాగ్లు",
          tagsRequired: "ఈ ఖాళీని తప్పనిసరిగా పూరించవలెను, దయచేసి ట్యాగ్‌ని జోడించడానికి ఎంటర్ నొక్కండి",
          tagsComma: "ప్రతి ట్యాగ్ తర్వాత కామాను నమోదు చేయండి",
          description: "మెటా డేటా",
          keyPlaceHolder: "ఒక కీని నమోదు చేయండి",
          valuePlaceHolder: "విలువను నమోదు చేయండి",
          buttonSave: "సేవ్ చేయండి",
          buttonAdd: "జోడించు",
          message: "నమోదు చేసిన విలువ ప్రారంభం/ముగింపు లేదా వైట్ స్పేస్ మాత్రమే కలిగి ఉండకూడదు",
        },
        toastMsg:{
          one:'శీర్షిక మరియు వివరణ విజయవంతంగా సేవ్ చేయబడింది',
          two:'ట్యాగ్‌లు మరియు మెటాడేటా విజయవంతంగా సేవ్ చేయబడ్డాయి'
        }
      },
      // thumbnails
      thumbnails: {
        header: "ఇమేజ్ సాధనాన్ని ఉపయోగించి థంబ్నెయిల్ సృష్టించండి",
        errorMessage: "దయచేసి వీడియో నిడివి కంటే తక్కువ సమయాన్ని నమోదు చేయండి",
        time: "సమయం*",
        required: "ఈ ఖాళీని తప్పనిసరిగా పూరించవలెను",
        message1: "దయచేసి hh:mm:ss ఆకృతిని నమోదు చేయండి",
        imageWidth: "చిత్రం వెడల్పు",
        placeHolder1: "వెడల్పును pxలో నమోదు చేయండి",
        message2: "దయచేసి సంఖ్యలను మాత్రమే నమోదు చేయండి",
        imageHeight: "చిత్రం ఎత్తు",
        placeHolder2: "pxలో ఎత్తును నమోదు చేయండి",
        createButton: "థంబ్నెయిల్ సృష్టించండి",
        download: "దిగువ URL నుండి చిత్రాన్ని డౌన్‌లోడ్ చేయండి:"
      },
      // thumbnailsApi
      thumbnailsApi: {
        header: "చిత్రం APIని ఉపయోగించి థంబ్నెయిల్ సృష్టించండి",
        runRequest: "రన్ రిక్వెస్ట్    ",
        download: "దిగువ URL నుండి చిత్రాన్ని డౌన్‌లోడ్ చేయండి:"
      },
      //gifs
      gifs: {
        create: "వీడియో ఎడిటర్‌ని ఉపయోగించి GIFని సృష్టించండి",
        startTime: "ప్రారంభ సమయం",
        endTime: "ముగింపు సమయం",
        imageWidth: "చిత్రం వెడల్పు",
        placeHolder1: "pxలో వెడల్పును నమోదు చేయండి డిఫాల్ట్ 320px",
        imageHeight: "చిత్రం ఎత్తు",
        placeHolder2: "pxలో ఎత్తును నమోదు చేయండి",
        createButton: "GIFని సృష్టించండి",
        download: "దిగువ URL నుండి చిత్రాన్ని డౌన్‌లోడ్ చేయండి",
        createGif: "ఇమేజ్ Apiని ఉపయోగించి GIFని సృష్టించండి",
        runRequest: "రన్ రిక్వెస్ట్"
      },
      subtitles: {
        header: "ఉపశీర్షికల జాబితా",
        addedOn: "జోడించబడింది",
        name: "పేరు",
        subtitleId: "ఉపశీర్షిక ID",
        format: "ఫార్మాట్",
        actions: "చర్యలు",
        uploadSubtitleFile: "ఉపశీర్షిక ఫైళ్లను అప్‌లోడ్ చేయండి",
        uploadYourFile: "మీ ఫైల్‌ని అప్‌లోడ్ చేయండి",
        name2: "పేరు*",
        required: "ఈ ఖాళీని తప్పనిసరిగా పూరించవలెను",
        message: "నమోదు చేసిన విలువ ప్రారంభం/ముగింపు లేదా వైట్ స్పేస్ మాత్రమే కలిగి ఉండకూడదు",
        languageCode: "భాషా కోడ్*",
        support: "క్లోజ్డ్ క్యాప్షన్‌లకు మద్దతు ఇస్తుంది",
        selectFile: "ఫైల్‌ని ఎంచుకోండి",
        supportedFormats: "మద్దతు ఉన్న ఫార్మాట్‌లు .SRT, .VTT",
        uploadButton: "అప్‌లోడ్ చేయండి",
        postUsingUrl: "వీడియో URLని ఉపయోగించి పోస్ట్ చేయండి:",
        runRequest: "రన్ రిక్వెస్ట్",
        noDataFound: "ఉపశీర్షిక ఫైల్ కనుగొనబడలేదు"
      },
      // videoClips- videodeliverytabs
      videoClips: {
        header: "వీడియో క్లిప్‌ల జాబితా",
        noVideoFound: "వీడియో క్లిప్ కనుగొనబడలేదు",
        tableHeadings: {
          addedOn: "జోడించబడింది",
          name: "పేరు",
          videoId: "వీడియో ID",
          actions: "చర్యలు",
        },
        viewVideo: "వీడియో చూడండి",
        createClips: "వీడియో క్లిప్‌లను సృష్టించండి"
      },

      videoClipsTabs: {
        useVideoEditor: "వీడియో ఎడిటర్ ఉపయోగించండి",
        useApi: "APIని ఉపయోగించండి"
      },
      // videoeditor- videodeliverytabs
      videoEditor: {
        name: "పేరు*",
        startTime: "ప్రారంభ సమయం*",
        endTime: "ముగింపు సమయం*",
        placeHolder1: "క్లిప్ పేరు",
        required: "ఈ ఖాళీని తప్పనిసరిగా పూరించవలెను",
        message1: "నమోదు చేసిన విలువ ప్రారంభం/ముగింపు లేదా వైట్ స్పేస్ మాత్రమే కలిగి ఉండకూడదు",
        message2: "దయచేసి hh:mm:ss ఆకృతిని నమోదు చేయండి",
        createButton: "వీడియో క్లిప్‌ని సృష్టించండి"
      },
      // using_api
      usingApi: {
        runRequest: "రన్ రిక్వెస్ట్"
      },
    },
    //Environment 
    module_environment: {
      index: {
        header: {
          title: "పర్యావరణం",
          description: "పర్యావరణం మీ డేటాను సమూహపరచడానికి మిమ్మల్ని అనుమతిస్తుంది. మాకు అభివృద్ధి, QA, స్టేజింగ్ మరియు ఉత్పత్తి అనే నాలుగు రకాల పర్యావరణాలు ఉన్నాయి. మీరు పేర్లను మార్చవచ్చు లేదా అవసరమైన విధంగా అదనపు వాతావరణాలను సృష్టించవచ్చు.",
          addbutton: "పర్యావరణాన్ని జోడించండి"
        },
        tableheader: {
          name: "పేరు",
          video: "వీడియో",
          analytics: "విశ్లేషణలు",
        },//tb=table body
        tb: {
          il7d: "గత 7 రోజుల్లో",
          encoded: " ఎన్కోడ్ చేయబడింది",
          stored: " నిల్వ",
          streamed: " ప్రసారం చేయబడింది",
          hours: "  గంటలు",
          apitokens: "API టోకెన్లు",
          views: "వీక్షణలు",
          uniqueviews: "ప్రత్యేక వీక్షణలు",
          watchedtime: "సమయం చూసారు",
          envKey: " ఎన్వి కీ",
          livestream: "ప్రత్యక్ష ప్రసారం",
          liverecording: "ప్రత్యక్ష రికార్డింగ్",
          table_card_video_description: "లైవ్ మరియు ఆన్-డిమాండ్ వీడియోల స్ట్రీమింగ్ కోసం వీడియోగ్రాఫ్ APIలను ఉపయోగించండి.",
          table_card_analytics_description: "ఈ వాతావరణంలో వీడియోలను అప్‌లోడ్ చేయడం ద్వారా వీడియో మెట్రిక్‌లను ట్రాక్ చేయడం ప్రారంభించండి.",

        }
      },
    },
    module_SelectEnv: {
      validationMessage: "స్టార్ట్/ఎండ్/ఓన్లీ స్పేస్‌లో స్పేస్ లేకుండా ఈ ఫీల్డ్ అవసరం",
      noResultFound: "ఫలితం కనుగొనబడలేదు",
      cancel: "రద్దు చేయండి",
      save: "సేవ్ చేయండి",
      placeholder: "పేరు ద్వారా శోధించండి"

    },

    //Environment add new environment page
    module_add_new_environment: {
      title: "కొత్త పర్యావరణాన్ని జోడించండి",
      labelenv: "పర్యావరణం పేరు",
      label_env_ph: "పేరును నమోదు చేయండి",
      label_required: "ఈ ఖాళీని తప్పనిసరిగా పూరించవలెను",
      label_message: "నమోదు చేసిన విలువ ప్రారంభం/ముగింపు లేదా వైట్ స్పేస్ మాత్రమే కలిగి ఉండకూడదు",
      label_type: "టైప్",
      no_result_found: "ఫలితం కనుగొనబడలేదు",
      cancel: "రద్దు చేయండి",
      addbutton: "పర్యావరణాన్ని జోడించండి",
      labelTypePlaceholder: "పేరు ద్వారా శోధించండి",
    },

    //components//ad_list
    module_ad_list: {
      failedToUpload: "అప్‌లోడ్ చేయడంలో విఫలమైంది",
      pendingVideo: "పెండింగ్ వీడియో",
      processing: "ప్రాసెసింగ్",
      streamDetails: "స్ట్రీమ్ వివరాలు",
      disableStream: "స్ట్రీమ్‌ని నిలిపివేయండి",
      videoDetails: "వీడియో వివరాలు",
    },

    //Live streams
    module_livestream: {
      onboarding: {
        header: "ప్రత్యక్ష ప్రసారాలు",
        title: "ప్రత్యక్ష ప్రసారాలను ప్రచురించండి",
        content1: "వీడియోగ్రాఫ్ లైవ్ స్ట్రీమ్ APIలను ఉపయోగించండి మరియు మీ అప్లికేషన్‌లో ",
        content2: "HLS లైవ్ స్ట్రీమ్‌ని ఇంటిగ్రేట్ చేయండి. APIలను ఉపయోగించి లేదా నేరుగా డాష్‌బోర్డ్ నుండి ప్రత్యక్ష ప్రసారాలను సృష్టించండి.",
        buttonCreate: "ప్రత్యక్ష ప్రసారాన్ని సృష్టించండి",
        buttonView: " గైడ్‌ని వీక్షించండి",
        features: {
          heading: "ప్రత్యక్ష ప్రసార ఫీచర్లు",
          title1: "సురక్షిత స్ట్రీమింగ్",
          content1: "సంతకం చేసిన ప్లేబ్యాక్‌తో ప్రత్యక్ష ప్రసారాలను ప్రైవేట్‌గా చేయండి.",
          titile2: "తక్కువ జాప్యం",
          content2: "లైవ్ స్ట్రీమింగ్ జాప్యం 4 సెకన్ల కంటే తక్కువ.",
          title3: "ప్రకటన చొప్పింపులు",
          content3: "ప్రత్యక్ష ప్రసారాలలో ప్రకటనను చొప్పించాలనుకుంటున్నారా?",
          title4: "ప్రత్యక్ష పరస్పర చర్యలు",
          content4: "ప్రత్యక్ష పరస్పర చర్యలను జోడించడానికి సహాయం కావాలా? ",
          talkToUs: "మాతో మాట్లాడండి"
        }
      },
      createLiveStreaming: {
        header: "ప్రత్యక్ష ప్రసారాన్ని సృష్టించండి",
        postUsingUrl: "వీడియో Urlని ఉపయోగించి పోస్ట్ చేయండి",
        postBodyEditor: "పోస్ట్ బాడీ ఎడిటర్",
        buttonRunRequest: "రన్ రిక్వెస్ట్",
        validation: "ఈ ఫీల్డ్ అవసరం"
      },
      index: {
        header: "ప్రత్యక్ష ప్రసారాలు",
        description: "వీడియోగ్రాఫ్ లైవ్ స్ట్రీమ్ APIలను ఉపయోగించండి మరియు మీ అప్లికేషన్‌లో లైవ్ వీడియోని ఇంటిగ్రేట్ చేయండి.",
        description_view: "గైడ్‌ని వీక్షించండి",
        create_button: "ప్రత్యక్ష ప్రసారాన్ని సృష్టించండి",
        placeholder: "ప్రత్యక్ష ప్రసారాలను శోధించండి",
        popupVideoDelete: "వీడియో తొలగించబడింది",
        //th:table head
        th: {
          addon: "జోడించబడింది",
          name: "పేరు",
          StreamID: "స్ట్రీమ్ ID",
          streamKey: "స్ట్రీమ్ కీ",
          imagePreview: "చిత్రం ప్రివ్యూ",
          type: "టైప్",
          tags:"టాగ్లు",
          status: "స్థితి",
          actions: "చర్యలు",
          noLiveDataFound: "ప్రత్యక్ష డేటా ఏదీ కనుగొనబడలేదు"
        }
      },
      live_streaming_details: {
        header: "ప్రత్యక్ష ప్రసారాలు",
        edit: "సవరించు",
        cancelButton: "రద్దు చేయండి",
        saveButton: "సేవ్"
      },
      //components//livestream_tabs
      livestream_tabs: {
        overview: "అవలోకనం",
        videoClips: "వీడియో క్లిప్‌లు",
        advancemonitor:"అధునాతన పర్యవేక్షణ",
        others: "ఇతరులు",
        customUrls: "అనుకూల URLలు"
      },
      //live stearm//--live stream tabs
      overview: {
        videourl: {
          title: "వీడియో URL",
          shareableURL: "భాగస్వామ్యం చేయదగిన URL",
          linkToHLS: "HLSకి లింక్ చేయండి",
          embedCode: "పొందుపరిచిన కోడ్:",
          linkToThumbnail: "థంబ్‌నెయిల్‌కి లింక్:",
        },
        button_analytics: "విశ్లేషణలు",
        button_activities: "కార్యకలాపాలు",
        button_delete: "స్ట్రీమ్‌ను తొలగించండి",
        liveStreamDetails: {
          title: "Live స్ట్రీమ్ ID",
          ingestURL: "URLని చేర్చండి",
          rTMPsURL: "RTMPల URL",
          streamKey: "స్ట్రీమ్ కీ",
          Created: "సృష్టించబడింది",
          status: "స్థితి",
          copy: "కాపీ చేయండి",
          activesince: "నాటి నుంచి క్రియాశీలంగా ఉన్నారు",
          copied:"కాపీ చేయబడింది"
        },
        livestream: {
          title: 'ప్రత్యక్ష ప్రసారం',
          start: "ప్రారంభించు",
          startStop: "ప్రారంభం/ఆపు",
          live: "ప్రత్యక్షం",
          active: "ఆక్టివ్",
          offline: "ఆఫ్‌లైన్"
        },
        healthMonitoring: {
          streamHealth: "స్ట్రీమ్ ఆరోగ్యం",
          last1Hour: "చివరి 1 గంట",
          last4Hours: "చివరి 4 గంటలు",
          last8Hours: "చివరి 8 గంటలు",
          videoFrameRate: "వీడియో ఫ్రేమ్ రేట్ (FPS)",
          videoBitrate: "వీడియో బిట్రేట్ (VBR) కెబిబిఎస్‌లో"
        }
      },
      customUrls: {
        playbackUrls: {
          customize: "ప్లేబ్యాక్ URLలను అనుకూలీకరించండి!",
          addCustom: "ప్లేబ్యాక్ URLలకు భాగస్వామి, శైలి, భాష మొదలైన అనుకూల పారామితులను జోడించండి",
          createCustom: "అనుకూల URLని సృష్టించండి"
        },
        playbackList: {
          createCustom: "అనుకూల URLని సృష్టించండి",
          placeholder: "పేరు లేదా ప్లేబ్యాక్ urlతో శోధించండి",
          addedOn: "జోడించబడింది",
          name: "పేరు",
          customPlaybackUrl: "అనుకూల ప్లేబ్యాక్ URL",
          status: "స్థితి",
          actions: "చర్యలు",
          copied: "కాపీ చేయబడింది",
          noResultFound: "ఫలితం కనుగొనబడలేదు",
          itemsPerPage: "ప్రతి పేజీకి సంబంధించిన అంశాలు:",
          editUrl: "URLని సవరించండి",
          duplicate: "నకిలీ",
          delete: "తొలగించు",
          toastMsg1: "ప్లేబ్యాక్ url తొలగించబడింది",
          toastMsg2: "ప్లేబ్యాక్ url పునఃప్రారంభించబడింది",
          toastMsg3: "ప్లేబ్యాక్ url పాజ్ చేయబడింది"
        },
        createCustomUrl: {
          createCustom: "అనుకూల URLని సృష్టించండి",
          editCustom: "అనుకూల URLని సవరించండి",
          name: "పేరు",
          parameters: "పారామితులు",
          partner: "భాగస్వామి",
          genre: "శైలి",
          none: "ఏదీ లేదు",
          language: "భాష",
          category: "వర్గం",
          cancel: "రద్దు చేయండి",
          createUrl: "URLని సృష్టించండి",
          editUrl: "సవరించు"
        }
      },
      others: {
        titleandDescription: {
          header: "శీర్షిక & వివరణ",
          title: "శీర్షిక",
          titlePlaceHolder: "శీర్షిక లేదా వీడియోను నమోదు చేయండి",
          titleRequired: "ఈ ఖాళీని తప్పనిసరిగా పూరించవలెను",
          description: "వివరణ",
          descriptionPlaceHolder: "మీ వివరణను నమోదు చేయండి",
          buttonSave: "సేవ్ చేయండి",
          buttonAdd: "జోడించు",
          message: "నమోదు చేసిన విలువ ప్రారంభం/ముగింపు లేదా వైట్ స్పేస్ మాత్రమే కలిగి ఉండకూడదు",
          message1: "ఈ ఖాళీని తప్పనిసరిగా పూరించవలెను"
        },
        tagsandMetadata: {
          header: "ట్యాగ్‌లు మరియు మెటాడేటా",
          title: "టాగ్లు",
          tagsRequired: "ఈ ఖాళీని తప్పనిసరిగా పూరించవలెను, దయచేసి ట్యాగ్‌ని జోడించడానికి ఎంటర్ నొక్కండి",
          tagsComma: "ప్రతి ట్యాగ్ తర్వాత కామాను నమోదు చేయండి",
          description: "మెటా డేటా",
          keyPlaceHolder: "ఒక కీని నమోదు చేయండి",
          valuePlaceHolder: "విలువను నమోదు చేయండి",
          buttonSave: "సేవ్ చేయండి",
          message: "నమోదు చేసిన విలువ ప్రారంభం/ముగింపు లేదా వైట్ స్పేస్ మాత్రమే కలిగి ఉండకూడదు",
        },
        toastMsg:{
          one:'శీర్షిక మరియు వివరణ విజయవంతంగా సేవ్ చేయబడింది',
          two:'ట్యాగ్‌లు మరియు మెటాడేటా విజయవంతంగా సేవ్ చేయబడ్డాయి'
        },
        thumbnails:{
          thumbnails: "సూక్ష్మచిత్రాలు",
          selectImage: "చిత్రాన్ని ఎంచుకోండి",
          supportedFormats: "మద్దతు ఉన్న ఫార్మాట్‌లు .jpg, .jpeg, .png",
          upload: "అప్‌లోడ్ చేయండి",
          errorMsg: "దయచేసి ఒక చిత్రాన్ని ఎంచుకోండి",
          errorMsg2: "చెల్లని ఫార్మాట్, చిత్రాలు (.jpeg,png,jpg) మాత్రమే అనుమతించబడతాయి",
          toastMsg: "సూక్ష్మచిత్రం విజయవంతంగా జోడించబడింది"
        }
      },
      //component//live_list
      live_list: {
        streamDetails: "స్ట్రీమ్ వివరాలు",
        deleteStream: "స్ట్రీమ్‌ను తొలగించండి",
        videoDetails: "వీడియో వివరాలు"
      },
      Delete_content: {
        heading: "స్ట్రీమ్‌ను తొలగించండి",
        content: "మీరు ఖచ్చితంగా ఈ స్ట్రీమ్‌ని తొలగించాలనుకుంటున్నారా?",
        content1: "తొలగించిన తర్వాత, ఈ స్ట్రీమ్ ఇకపై పర్యవేక్షించబడదు మరియు అన్ని చారిత్రక డేటా తొలగించబడుతుంది.",
        cancelButton: "రద్దు చేయండి",
        deleteButton: "అవును, తొలగించండి",
        conHeading: "కంటెంట్‌ని తొలగించండి",
        conContent: "మీరు ఖచ్చితంగా ఈ కంటెంట్‌ను తొలగించాలనుకుంటున్నారా?",
        conContent1: "తొలగించిన తర్వాత, ఈ కంటెంట్ ఇకపై పర్యవేక్షించబడదు మరియు మొత్తం చారిత్రక డేటా తొలగించబడుతుంది.",
        conCancelButton: "రద్దు చేయండి",
        conDeleteButton: "అవును, తొలగించండి",
      }
    },

    module_adinsertion:{
      index:{
        header:"ప్రకటన చొప్పించడం",
        description:"మీ ప్రోగ్రామ్‌లోని ప్రకటనలను భర్తీ చేయడానికి వీడియోగ్రాఫ్ ప్రకటన చొప్పింపు APIలను ఉపయోగించండి",
        button:"ప్రకటన చొప్పించడాన్ని సృష్టించండి",
      th: {
        addon: "జోడించబడింది",
          name: "పేరు",
          StreamID: "స్ట్రీమ్ ID",
          imagePreview: "చిత్రం ప్రివ్యూ",
          type: "టైప్",
          tags:"టాగ్లు",
          status: "స్థితి",
          actions: "చర్యలు",
      },
    },
    overview: {
      adInsertionDetails: "ప్రకటన చొప్పింపు వివరాలు",
      adInsertionId: "ప్రకటన చొప్పింపు ID",
      preRoll: "ప్రీరోల్",
      maxPreRoll: "ప్రీరోల్ గరిష్టంగా అనుమతించబడిన వ్యవధి",
      finalUrl: "చివరి URL",
      adTagUrl: "ప్రకటన ట్యాగ్ URL:",
      playbackParams: "ప్లేయర్ పారామ్‌లతో ప్లేబ్యాక్ URL:",
      playbackUrl: "ప్లేబ్యాక్ URL:",
      edit: "సవరించు"
    }
},

    // portraitPro
    module_portraitPro: {
      index: {
        header: "పోర్ట్రెయిట్ PRO",
        description: "సెకన్లలో మీ వీడియోలను పోట్రైట్ నిష్పత్తికి స్వయంచాలకంగా క్రాప్ చేయడానికి వీడియో క్రాపింగ్ టూల్‌ను పోర్ట్రెయిట్ చేయడానికి Videgraph యొక్క AI-ఆధారిత ల్యాండ్‌స్కేప్‌ని ఉపయోగించండి.",
        viewGuide: "గైడ్‌ని వీక్షించండి",
        createButton: "పోర్ట్రెయిట్ వీడియోని సృష్టించండి",
        searchVideos: "వీడియోలను శోధించండి",
        tableHeadings: {
          addedOn: "జోడించబడింది",
          name: "పేరు",
          contentId: "కంటెంట్ ID",
          imagePreview: "చిత్రం ప్రివ్యూ",
          type: "టైప్",
          tags:"టాగ్లు",
          duration: "వ్యవధి",
          resolution: "స్పష్టత",
          status: "స్థితి",
          actions: "చర్యలు"
        },
        noDataFound: "వీడియో డేటా ఏదీ కనుగొనబడలేదు"
      },
      portraitpro_details: {
        heading: "పోర్ట్రెయిట్  ప్రో",
        editButton: "సవరించు",
        save: "సేవ్ చేయండి",
        cancel: "రద్దు చేయండి"
      },
      onboardingPage: {
        header: "పోర్ట్రెయిట్  ప్రో",
        title: "తదుపరి తరం - AI పోర్ట్రెయిట్ వీడియో క్రాపింగ్",
        description1: "మీ వీడియోలను సోషల్ మీడియా ప్లాట్‌ఫారమ్‌లలో ప్రచురించడానికి గంటల తరబడి",
        description2: " క్రాప్ చేయవద్దు, వీడియో క్రాపింగ్ టూల్‌ని పోర్ట్రెయిట్ చేయడానికి వీడియోగ్రాఫ్ యొక్క ",
        description3: " AI-ఆధారిత ల్యాండ్‌స్కేప్‌ని ఉపయోగించి మీ వీడియోలను సెకనులలో ",
        description4: "పోట్రైట్ నిష్పత్తికి స్వయంచాలకంగా కత్తిరించండి.",
        transformVideo: "మీ వీడియోని మార్చుకోండి!",
        selectFile: "ఫైల్‌ని ఎంచుకోండి",
        or: "లేదా",
        placeHolder: "(.mp4) వీడియో URLని నమోదు చేయండి",
        message: "దయచేసి చెల్లుబాటు అయ్యే urlని నమోదు చేయండి",
        uploadmessage: ".mp4 ఫైల్‌లను మాత్రమే అప్‌లోడ్ చేయండి",
        createButton: "పోర్ట్రెయిట్ వీడియోని సృష్టించండి",
        subscribedFalse1: "చెల్లింపు వివరాలను సెటప్ చేయండి మరియు ఉచిత $20 క్రెడిట్‌ను పొందండి,",
        subscribedFalse2: " మీ వీడియోలను ఉచిత క్రెడిట్‌లతో మార్చుకోండి.",
        upgrade: "అప్‌గ్రేడ్ చేయండి"
      },
      createNewPortrait: {
        header: "కొత్త పోర్ట్రెయిట్ వీడియోని సృష్టించండి",
        uploadFile: "మీ వీడియో ఫైల్‌ను అప్‌లోడ్ చేయండి",
        name: "పేరు*",
        placeHolder: "వీడియో పేరును నమోదు చేయండి",
        required: "ఈ ఖాళీని తప్పనిసరిగా పూరించవలెను",
        message: "నమోదు చేసిన విలువ ప్రారంభం/ముగింపు లేదా వైట్ స్పేస్ మాత్రమే కలిగి ఉండకూడదు",
        selectFile: "ఫైల్‌ని ఎంచుకోండి",
        or: "లేదా",
        placeHolder2: "(.mp4) వీడియో URLని నమోదు చేయండి",
        message2: "దయచేసి చెల్లుబాటు అయ్యే urlని నమోదు చేయండి",
        supportedFormats: "మద్దతు ఉన్న ఫార్మాట్‌లు mp4",
        createButton: "పోర్ట్రెయిట్ వీడియోని సృష్టించండి"
      },
      // sociallist // components
      socialList: {
        videoDetails: "వీడియో వివరాలు",
        thumbnails: "తుమ్బనైల్స్",
        deleteVideo: "వీడియోను తొలగించండి"
      },
      // overview- socialcliptabs
      overview: {
        testVideoBanner: "ఇది ఉచిత పరీక్ష వీడియో. పరీక్ష వీడియోలు 10 సెకన్లకు పరిమితం చేయబడ్డాయి మరియు 24 గంటల తర్వాత తొలగించబడతాయి.",
        linkToHls: "HLSకి లింక్:",
        embedCode: "పొందుపరిచిన కోడ్:",
        linkToThumbnail: "థంబ్‌నెయిల్‌కి లింక్:",
        mp4Url: "MP4 URL:",
        analyticsButton: "విశ్లేషణలు",
        activitiesButton: "కార్యకలాపాలు",
        deleteButton: "వీడియోను తొలగించండి",
        videoDetails: {
          header: "వీడియో వివరాలు",
          contentId: "కంటెంట్ ID",
          created: "సృష్టించబడింది",
          status: "స్థితి",
          duration: "వ్యవధి",
          aspectRatio: "కారక నిష్పత్తి",
          resolution: "స్పష్టత",
          maxFrameRate: "గరిష్ట ఫ్రేమ్ రేట్",
          streamId: "స్ట్రీమ్ ID",
          startTime: "ప్రారంభ సమయం",
          endTime: "ముగింపు సమయం"
        },
        playbackSample: "ప్లేబ్యాక్ నమూనా",
        videoUrls: "వీడియో URLలు",
        copied: "కాపీ చేయబడింది",
        videoSourceInfo: {
          header: "వీడియో మూలం సమాచారం",
          title: "వీడియో URL",
          videoInfo: {
            title: "వీడియో సమాచారం",
            width: "వెడల్పు",
            height: "ఎత్తు",
            frameRate: "ఫ్రేమ్ రేట్",
            encoding: "ఎన్కోడింగ్",
            duration: "వ్యవధి"
          },
          audioInfo: {
            title: "ఆడియో సమాచారం",
            sampleRate: "నమూనా రేటు",
            encoding: "ఎన్కోడింగ్",
            channels: "ఛానెల్‌లు",
            duration: "వ్యవధి",
          }
        }
      },
      // others- socialcliptabs
      others: {
        message1: "ఈ ఖాళీని తప్పనిసరిగా పూరించవలెను",
        titleandDescription: {
          header: "శీర్షిక & వివరణ",
          title: "శీర్షిక",
          titlePlaceHolder: "శీర్షిక లేదా వీడియోను నమోదు చేయండి",
          titleRequired: "ఈ ఖాళీని తప్పనిసరిగా పూరించవలెను",
          description: "వివరణ",
          descriptionPlaceHolder: "మీ వివరణను నమోదు చేయండి",
          buttonSave: "సేవ్ చేయండి",
          message: "నమోదు చేసిన విలువ ప్రారంభం/ముగింపు లేదా వైట్ స్పేస్ మాత్రమే కలిగి ఉండకూడదు",
        },
        tagsandMetadata: {
          header: "ట్యాగ్‌లు మరియు మెటాడేటా",
          title: "టాగ్లు",
          tagsRequired: "ఈ ఖాళీని తప్పనిసరిగా పూరించవలెను, దయచేసి ట్యాగ్‌ని జోడించడానికి ఎంటర్ నొక్కండి",
          tagsComma: "ప్రతి ట్యాగ్ తర్వాత కామాను నమోదు చేయండి",
          description: "మెటా డేటా",
          keyPlaceHolder: "ఒక కీని నమోదు చేయండి",
          valuePlaceHolder: "విలువను నమోదు చేయండి",
          buttonSave: "సేవ్ చేయండి",
          buttonAdd: "జోడించు",
          message: "నమోదు చేసిన విలువ ప్రారంభం/ముగింపు లేదా వైట్ స్పేస్ మాత్రమే కలిగి ఉండకూడదు",
        },
        toastMsg:{
          one:'శీర్షిక మరియు వివరణ విజయవంతంగా సేవ్ చేయబడింది',
          two:'ట్యాగ్‌లు మరియు మెటాడేటా విజయవంతంగా సేవ్ చేయబడ్డాయి'
        }
      },
      // thumbnails
      thumbnails: {
        header: "ఇమేజ్ సాధనాన్ని ఉపయోగించి థంబ్నెయిల్ సృష్టించండి",
        errorMessage: "దయచేసి వీడియో నిడివి కంటే తక్కువ సమయాన్ని నమోదు చేయండి",
        time: "సమయం*",
        required: "ఈ ఖాళీని తప్పనిసరిగా పూరించవలెను",
        message1: "దయచేసి hh:mm:ss ఆకృతిని నమోదు చేయండి",
        imageWidth: "చిత్రం వెడల్పు",
        placeHolder1: "వెడల్పును pxలో నమోదు చేయండి",
        message2: "దయచేసి సంఖ్యలను మాత్రమే నమోదు చేయండి",
        imageHeight: "చిత్రం ఎత్తు",
        placeHolder2: "pxలో ఎత్తును నమోదు చేయండి",
        createButton: "థంబ్నెయిల్ సృష్టించండి",
        download: "దిగువ URL నుండి చిత్రాన్ని డౌన్‌లోడ్ చేయండి:"
      },

      // thumbnailsApi
      thumbnailsApi: {
        header: "చిత్రం APIని ఉపయోగించి థంబ్నెయిల్ సృష్టించండి",
        runRequest: "రన్ రిక్వెస్ట్    ",
        download: "దిగువ URL నుండి చిత్రాన్ని డౌన్‌లోడ్ చేయండి:"
      },
      // socialClipTabs- components
      socialClipTabs: {
        overview: "అవలోకనం",
        thumbnails: "తుమ్బనైల్స్",
        others: "ఇతరులు"
      },
      // videoeditor- socialclipstabs//components
      videoEditor: {
        name: "పేరు*",
        startTime: "ప్రారంభ సమయం*",
        endTime: "ముగింపు సమయం*",
        placeHolder1: "క్లిప్ పేరు",
        required: "ఈ ఖాళీని తప్పనిసరిగా పూరించవలెను",
        message1: "నమోదు చేసిన విలువ ప్రారంభం/ముగింపు లేదా వైట్ స్పేస్ మాత్రమే కలిగి ఉండకూడదు",
        message2: "దయచేసి hh:mm:ss ఆకృతిని నమోదు చేయండి",
        createButton: "వీడియో క్లిప్‌ని సృష్టించండి"
      },
      // using_api
      usingApi: {
        runRequest: "రన్ రిక్వెస్ట్ "
      },
    },

    //liveRecording
    module_liveRecording: {
      index: {
        header: "ప్రత్యక్ష రికార్డింగ్",
        description: "ప్రోగ్రామ్‌లను రికార్డ్ చేయడానికి మరియు వాటి నుండి వీడియో క్లిప్‌లను రూపొందించడానికి వీడియోగ్రాఫ్ లైవ్ రికార్డింగ్ APIలను ఉపయోగించండి.",
        createButton: "లైవ్ రికార్డింగ్‌ని సృష్టించండి",
        searchPlaceHolder: "ప్రత్యక్ష రికార్డింగ్‌లను శోధించండి",
        viewGuide: "గైడ్‌ని వీక్షించండి",
        popupVideoDelete: "వీడియో తొలగించబడింది",
        tableHeadings: {
          addedOn: "జోడించబడింది",
          name: "పేరు",
          streamId: "స్ట్రీమ్ ID",
          imagePreview: "చిత్రం ప్రివ్యూ",
          type: "టైపు",
          tags:"టాగ్లు",
          duration: "వ్యవధి",
          resolution: "స్పష్టత",
          status: "స్థితి",
          actions: "చర్యలు"
        },
        noDataFound: "ప్రత్యక్ష రికార్డింగ్ కనుగొనబడలేదు"
      },
      onboardingPage: {
        header: "ప్రత్యక్ష రికార్డింగ్",
        title: "ప్రత్యక్ష ప్రసారాలను రికార్డ్ చేయండి",
        description1: "'రికార్డ్' అనే పరామితిని పాస్ చేయడం ద్వారా ప్రత్యక్ష ప్రసారాలను రికార్డ్ చేయండి:",
        description2: "ప్రత్యక్ష ప్రసారాన్ని సృష్టించేటప్పుడు నిజం. ప్రారంభించిన తర్వాత,",
        description3: "లైవ్ స్ట్రీమ్ రికార్డింగ్ 12 గంటల పాటు అందుబాటులో ఉంటుంది.",
        createButton: "లైవ్ రికార్డింగ్‌ని సృష్టించండి",
        viewGuide: "గైడ్‌ని వీక్షించండి",
        liveRecordingFeatures: {
          title: "లైవ్ రికార్డింగ్ ఫీచర్లు",
          feature1: "రియల్ టైమ్ వీడియో క్లిప్పింగ్",
          content1: "ప్రత్యక్ష ప్రసార రికార్డింగ్‌ల నుండి క్లిప్‌లను సృష్టించండి.",
          feature2: "రికార్డింగ్‌ల ప్లేబ్యాక్",
          content2: "సంతకం చేసిన urlతో సురక్షిత రికార్డింగ్‌ల ప్లేబ్యాక్.",
          feature3: "సురక్షిత స్ట్రీమింగ్",
          content3: "సంతకం చేసిన ప్లేబ్యాక్‌తో ప్రత్యక్ష ప్రసారాలను సురక్షితంగా చేయండి.",
          feature4: "ప్రత్యక్ష పరస్పర చర్యలు",
          content4: "ప్రత్యక్ష పరస్పర చర్యలను జోడించడానికి సహాయం కావాలా? ",
          talkToUs: "మాతో మాట్లాడండి"
        }
      },
      //pages//liverecording
      createLiveRecording: {
        header: "లైవ్ రికార్డింగ్‌ని సృష్టించండి",
        postUsingUrl: "వీడియో URLని ఉపయోగించి పోస్ట్ చేయండి:",
        postBodyEditor: "పోస్ట్ బాడీ ఎడిటర్:",
        validation: "ఈ ఖాళీని తప్పనిసరిగా పూరించవలెను",
        runRequest: "రన్ రిక్వెస్ట్"
      },
      // liverecordingdetails//liveecording//pages
      liveRecordingDetails: {
        liveRecording: "ప్రత్యక్ష రికార్డింగ్",
        editButton: "సవరించు",
        required: "ఈ ఖాళీని తప్పనిసరిగా పూరించవలెను",
        message: "నమోదు చేసిన విలువ ప్రారంభం/ముగింపు లేదా వైట్ స్పేస్ మాత్రమే కలిగి ఉండకూడదు",
        saveButton: "సేవ్ చేయండి",
        cancelButton: "రద్దు చేయండి"
      },
      // liverecordingtabs- component
      liveRecordingTabs: {
        overview: "అవలోకనం",
        videoClips: "వీడియో క్లిప్‌లు",
        others: "ఇతరులు"
      },
      // videoClips- liverecordingTabs
      videoClips: {
        header: "వీడియో క్లిప్‌ల జాబితా",
        noVideoFound: "వీడియో క్లిప్ కనుగొనబడలేదు",
        tableHeadings: {
          addedOn: "జోడించబడింది",
          name: "పేరు",
          videoId: "వీడియో ID",
          actions: "చర్యలు",
        },
        viewVideo: "వీడియో చూడండి",
        createClips: "వీడియో క్లిప్‌లను సృష్టించండి"
      },
      // videoeditor- recordingvideoclipstabs
      videoEditor: {
        name: "పేరు*",
        startTime: "ప్రారంభ సమయం*",
        endTime: "ముగింపు సమయం*",
        placeHolder1: "క్లిప్ పేరు",
        placeHolder2: "యుగ ఆకృతిలో నమోదు చేయండి",
        required: "ఈ ఖాళీని తప్పనిసరిగా పూరించవలెను",
        message: "దయచేసి యుగ ఆకృతిలో నమోదు చేయండి",
        createButton: "వీడియో క్లిప్‌ని సృష్టించండి"
      },
      // using_api
      usingApi: {
        runRequest: "రన్ రిక్వెస్ట్"
      },
      recordingVideoClipsTabs: {
        useVideoEditor: "వీడియో ఎడిటర్ ఉపయోగించండి",
        useApi: "APIని ఉపయోగించండి"
      },
      // overview //liverecordingtabs
      overview: {
        videoUrl: {
          title: "వీడియో URLలు",
          shareableUrl: "భాగస్వామ్యం చేయదగిన URL",
          linkToHls: "HLSకి లింక్ చేయండి",
          embedCode: "పొందుపరిచిన కోడ్:",
          linkToThumbnail: "థంబ్‌నెయిల్‌కి లింక్:",
        },
        buttonAnalytics: "విశ్లేషణలు",
        buttonActivities: "కార్యకలాపాలు",
        buttonDelete: "స్ట్రీమ్‌ను తొలగించండి",
        liveStreamDetails: {
          header: "లైవ్ స్ట్రీమ్ వివరాలు",
          title: "ప్రత్యక్ష ప్రసార ID",
          ingestUrl: "URLని చేర్చండి",
          rtmpsUrl: "RTMPల URL",
          streamKey: "స్ట్రీమ్ కీ",
          created: "సృష్టించబడింది",
          status: "స్థితి",
          copy: "కాపీ చేయండి",
          activeSince: "నాటి నుంచి ఆక్టివ్గా ఉన్నారు",
          copied:"కాపీ చేయబడింది"
        },
        liveStream: {
          title: 'లైవ్ స్ట్రీమ్ ప్లేయర్',
          start: "ప్రారంభించండి",
          startStop: "ప్రారంభం/ఆపు",
          live: "ప్రత్యక్షం",
          active: "ఆక్టివ్",
          offline: "ఆఫ్‌లైన్"
        }
      },
      // others- liverecordingtabs
      others: {
        message1: "ఈ ఖాళీని తప్పనిసరిగా పూరించవలెను",
        titleandDescription: {
          header: "శీర్షిక & వివరణ",
          title: "శీర్షిక",
          titlePlaceHolder: "శీర్షిక లేదా వీడియోను నమోదు చేయండి",
          titleRequired: "ఈ ఖాళీని తప్పనిసరిగా పూరించవలెను",
          description: "వివరణ",
          descriptionPlaceHolder: "మీ వివరణను నమోదు చేయండి",
          buttonSave: "సేవ్ చేయండి",
          message: "నమోదు చేసిన విలువ ప్రారంభం/ముగింపు లేదా వైట్ స్పేస్ మాత్రమే కలిగి ఉండకూడదు",
          message1: "ఈ ఖాళీని తప్పనిసరిగా పూరించవలెను"
        },
        tagsandMetadata: {
          header: "ట్యాగ్‌లు మరియు మెటాడేటా",
          title: "టాగ్లు",
          tagsRequired: "ఈ ఖాళీని తప్పనిసరిగా పూరించవలెను, దయచేసి ట్యాగ్‌ని జోడించడానికి ఎంటర్ నొక్కండి",
          tagsComma: "ప్రతి ట్యాగ్ తర్వాత కామాను నమోదు చేయండి",
          description: "మెటా డేటా",
          keyPlaceHolder: "ఒక కీని నమోదు చేయండి",
          valuePlaceHolder: "విలువను నమోదు చేయండి",
          buttonSave: "సేవ్ చేయండి",
          buttonAdd: "జోడించు",
          message: "నమోదు చేసిన విలువ ప్రారంభం/ముగింపు లేదా వైట్ స్పేస్ మాత్రమే కలిగి ఉండకూడదు",
        },
        toastMsg:{
          one:'శీర్షిక మరియు వివరణ విజయవంతంగా సేవ్ చేయబడింది',
          two:'ట్యాగ్‌లు మరియు మెటాడేటా విజయవంతంగా సేవ్ చేయబడ్డాయి'
        }
      },
      //components
      recording_list: {
        streamDetails: "స్ట్రీమ్ వివరాలు",
        deleteStream: "స్ట్రీమ్‌ను తొలగించండి",
        videoDetails: "వీడియో వివరాలు",
        videoClips: "వీడియో క్లిప్‌లు"
      }
    },

    // Accounts
    module_account: {
      index: {
        header: "ఖాతాలు",
        errorMessage: "ప్రత్యేక అక్షరాలు/సంఖ్యలు అనుమతించబడవు",
        firstNameMessage: "మొదటి పేరులో కనీసం 3 అక్షరాలు ఉండాలి",
        lastNameMessage: "చివరి పేరులో కనీసం 3 అక్షరాలు ఉండాలి",
        logout: "లాగ్ అవుట్",
        title1: "వ్యక్తిగత వివరాలు",
        firstName: "మొదటి పేరు",
        placeHolder1: "సునీల్",
        message: "నమోదు చేసిన విలువ ప్రారంభం/ముగింపు లేదా వైట్ స్పేస్ మాత్రమే కలిగి ఉండకూడదు",
        lastName: "చివరి పేరు",
        placeHolder2: "గవాస్కర్",
        required: "ఈ ఖాళీని తప్పనిసరిగా పూరించవలెను",
        email: "ఇమెయిల్",
        saveChanges: "మార్పులను ఊంచు",
        title2: "సంస్థ",
        createButton: "సంస్థను సృష్టించండి",
      },
      manageAccount: {
        title: "ఖాతా నిర్వహణ",
        errorMessage: "పాస్‌వర్డ్ విజయవంతంగా మార్చబడింది",
        errorToolTip: "దయచేసి మార్పు కోసం కొత్త పాస్‌వర్డ్‌ని నమోదు చేయండి",
        changePassword: "పాస్‌వర్డ్ మార్చండి",
        currentPassword: "ప్రస్తుత పాస్వర్డ్",
        required: "ఈ ఖాళీని తప్పనిసరిగా పూరించవలెను",
        newPassword: "కొత్త పాస్వర్డ్",
        message: "తప్పనిసరిగా 8 అక్షరాలు, ఒక పెద్ద అక్షరం, ఒక చిన్న అక్షరం, ఒక సంఖ్య మరియు ఒక ప్రత్యేక కేస్ అక్షరం ఉండాలి",
        confirmPassword: "కొత్త పాస్‌వర్డ్‌ని నిర్ధారించండి",
        message2: "పాస్‌వర్డ్ కొత్త పాస్‌వర్డ్‌తో సరిపోలాలి!",
        changePassword: "పాస్‌వర్డ్ మార్చండి"
      },
      createOrganization: {
        header: "కొత్త సంస్థను సృష్టించండి",
        description: "కొత్త సంస్థ మీ ప్రస్తుత సంస్థ నుండి ప్రత్యేక బృందాలు మరియు సెట్టింగ్‌లను కలిగి ఉంటుంది.",
        name: "పేరు",
        placeHolder: "సంస్థ పేరును నమోదు చేయండి",
        required: "ఈ ఖాళీని తప్పనిసరిగా పూరించవలెను",
        message: "నమోదు చేసిన విలువ ప్రారంభం/ముగింపు లేదా వైట్ స్పేస్ మాత్రమే కలిగి ఉండకూడదు",
        cancelButton: "రద్దు చేయండి",
        createButton: "సంస్థను సృష్టించండి"
      }
    },

    //Eents and Logs
    module_events_logs: {
      index: {
        header: "ఈవెంట్‌లు మరియు లాగ్‌లు"
      },
      events_logs_tabs: {
        events: "ఈవెంట్స్ ",
        logs: "లాగ్‌లు"
      },
      ///evnets&logs component file
      event_detail: {
        tb: {
          eventId: "ఈవెంట్ ID",
          date: "సమాచారం",
          type: "టైప్ చేయండి",
          eventData: "ఈవెంట్ డేటా"
        }
      },
      events: {
        th: { //table header
          event: "ఈవెంట్",
          id: "ID",
          date: "తేదీ"
        },
        content1: "మీ సిస్టమ్‌లో ఏదైనా జరిగినప్పుడు ఈవెంట్‌లు మీకు తెలియజేస్తాయి.",
        content2: "ఈవెంట్‌లు 30 రోజుల వరకు నిల్వ చేయబడతాయి."
      },
      logs: {
        th: {
          status: "స్థితి",
          description: "వివరణ",
          date: "తేదీ"
        },
        content: "తీసుకున్న ప్రతి API చర్యను లాగ్‌లు చూపుతాయి.లాగ్‌లు 30 రోజుల వరకు నిల్వ చేయబడతాయి."
      },
      logs_details: {
        tb: {
          logId: "లాగ్ ID",
          date: "తేదీ",
          method: "పద్ధతి",
          url: "URL"
        },
        heading1: "శరీరాన్ని అభ్యర్థించండి",
        heading2: "రెస్పాన్స్ బాడీ"
      }
    },

    //Analytics
    module_analytics: {
      index: {
        heading: "కంటెంట్ డిస్ట్రిబ్యూషన్ అనలిటిక్స్",
        timeZone: "సమయమండలం:",
        noResultFound: "ఫలితం కనుగొనబడలేదు",
        searchplaceholder: "పేరు ద్వారా శోధించండి"
      },
      analytics_tabs: {
        overview: "అవలోకనం",
        viewership: "వీక్షకుల సంఖ్య",
        ads:"ప్రకటనల పనితీరు",
        filters_button: "ఫిల్టర్లు",
        export_button: "ఎగుమతి చేయండి",
        startDate: "ప్రారంబపు తేది",
        endDate: "ఆఖరి తేది",
        apply: "దరఖాస్తు చేసుకోండి",
        cancel: "రద్దు చేయండి",
        dateLast1hr: "చివరి 1 గంట",
        dateLast24hr: "గత 24 గంటలు",
        dateLast7days: "గత 7 రోజులు",
        last1Month: "గత 30 రోజులు",
        today:"నేడు",
        yesterday:"నిన్న",
        thisWeek:"ఈ వారం",
        lastWeek:"గత వారం",
        thisMonth:"ఈ నెల",
        lastMonth:"పోయిన నెల",
        filters: {
          contentType: "కంటెంట్ రకం:",
          deviceName: "పరికరం పేరు:",
          programme: "కార్యక్రమం:",
          deviceType: "పరికరం రకం:",
          partners: "భాగస్వాములు:",
          countries: "దేశాలు:",
          region: "ప్రాంతం:",
          cities: "నగరాలు:",
          content: "కంటెంట్:"
        }
      }
    },

    //component:Analytics tab_overview_component
    module_concurrentViewers: {
      viewers: "వీక్షకులు",
      heading: "ఉమ్మడి వీక్షకులు"
    },

    module_content: {
      heading: "కంటెంట్‌లు",
      description: "నిజ సమయంలో వీక్షకుల సంఖ్య",
      description1:"నిజ సమయంలో అభ్యర్థనలు",
      moreInsights: "మరిన్ని అంతర్దృష్టులు",
      content:"విషయము"
    },

    module_countries: {
      heading: "దేశం",
      description: "నిజ సమయంలో వీక్షకుల సంఖ్య",
      country: "దేశం",
      requests:"అభ్యర్థనలు",
      percentage: "శాతం",
      views: "చూడండి",
      moreInsights: "మరిన్ని అంతర్దృష్టులు"
    },

    module_devices: {
      heading: "పరికరాలు",
      description: "నిజ సమయంలో వీక్షకుల సంఖ్య",
      moreInsights: "మరిన్ని అంతర్దృష్టులు"
    },

    module_device_types: {
      heading: "పరికరం రకం",
      description: "నిజ సమయంలో వీక్షకుల సంఖ్య",
      description1:"నిజ సమయంలో అభ్యర్థనలు",
      moreInsights: "మరిన్ని అంతర్దృష్టులు",
      devicetypes:"పరికర రకాలు"
    },

    module_programs: {
      heading: "కార్యక్రమాలు",
      moreInsights: "మరిన్ని అంతర్దృష్టులు"
    },

    module_partners: {
      heading: "భాగస్వాములు",
      description: "నిజ సమయంలో వీక్షకుల సంఖ్య",
      description1:"నిజ సమయంలో అభ్యర్థనలు",
      moreInsights: "మరిన్ని అంతర్దృష్టులు",
      partner:"భాగస్వామి",
      requests:"అభ్యర్థనలు",
    },

    module_usage: {
      footer: {
        encoded: "ఎన్‌కోడ్ చేయబడిన కంటెంట్ మొత్తం వ్యవధి.",
        stored: "నిల్వ చేయబడిన కంటెంట్ మొత్తం వ్యవధి.",
        streamed: "ప్రసారం చేయబడిన కంటెంట్ మొత్తం వ్యవధి."
      },
      encoded: "ఎన్కోడ్ చేయబడింది",
      stored: "నిల్వ",
      streamed: "ప్రసారం చేయబడింది"
    },

    //status//components//utils
    module_genfunctions: {
      inactiveContent: "ఈ సంస్థ నిష్క్రియంగా ఉంది. దయచేసి సంప్రదించు",
      contactLink: "వీడియోగ్రాఫ్ మద్దతును సంప్రదించండి",
      content: "ప్రారంభించడానికి సిద్ధంగా ఉంది! ఉచిత $20 క్రెడిట్ పొందడానికి అప్‌గ్రేడ్ చేయండి. ఎలాంటి పరిమితులు లేకుండా పూర్తి నిడివి వీడియోలు, లైవ్ స్ట్రీమ్‌లు మరియు లైవ్ రికార్డింగ్‌ను జోడించండి.",
      updateButton: "అప్‌గ్రేడ్ చేయండి",
      sessions: 'సెషన్స్',
      mins: "నిమిషాలు",
      viewers: "వీక్షకులు",
      copied: "కాపీ చేయబడింది",
      noLinkAvailable: "లింక్ అందుబాటులో లేదు"
    },

    //Viewership//components//
    module_views: {
      noOfViews: "వీక్షకుల సంఖ్య",
      viewContent1: "మొత్తం వినియోగదారుల మొత్తం",
      viewContent2: "వీడియో ప్లేబ్యాక్‌ను ప్రారంభించింది.",
      sessions: "సెషన్స్",
      sessionContent1: "సెషన్ల సంఖ్య",
      sessionContent2: "వినియోగదారులు వీక్షించారు.",
      totalViewship: "మొత్తం వీక్షకుల సంఖ్య",
      totalViewshipcontent1: "ప్రతి వినియోగదారు గడిపిన మొత్తం సమయం",
      totalViewshipcontent2: " కంటెంట్‌ని చూస్తున్నారు.",
      adViewership: "ప్రకటన వ్యూయర్‌షిప్",
      adContent1: "ప్రతి వినియోగదారు గడిపిన మొత్తం సమయం",
      adContent2: "ప్రకటనలు చూడటం.",
      avgSessions: "సగటు సెషన్",
      avgscontent1: "ఖర్చు చేసిన సగటు సెషన్ గణన",
      avgscontent2: "ప్రత్యేక వినియోగదారుల ద్వారా.",
      avsSessionsDuration: "సగటు సెషన్ల వ్యవధి",
      avsSessionsDurationContent1: "సగటున గడిపిన సమయం",
      avsSessionsDurationContent2: "ఒకే సెషన్‌లో వినియోగదారు.",
      noOfViewers: "వీక్షకుల సంఖ్య",
      noOfSessions: "సెషన్ల సంఖ్య",
      totalViwership: "మొత్తం వీక్షకుల సంఖ్య",
      adViewershipMins: "ప్రకటన వ్యూయర్‌షిప్",
      avgSession: "సగటు సెషన్‌లు ",
      avgSessionDurationMins: "సగటు సెషన్ వ్యవధి",
    },
    
    module_ad_performance: {
    noOfViews: "వ్యూయర్ల సంఖ్య",
    viewContent1: "ఎడ్స్ మొత్తం సంఖ్య",
    viewContent2: " చేరాడు.",
    sessionContent1: "ఎడ్స్ చేసే కొనుగోలు కొనుగోల లభించే మొత్తం",
    sessionContent2: " లభించింది.",
    totalViewshipcontent1: "ఎడ్స్ మొత్తం కాలం",
    totalViewshipcontent2: " చేరాడు.",
    adContent1: "లభించే కొనుగోలు మొత్తం కాలం",
    adContent2: " లభించింది.",
    avgscontent1: "ఎడ్ అభ్యర్థనల కొనుగోలుకు పొందిన",
    avgscontent2: " సమయాల మొత్తం.",
    avsSessionsDurationContent1: "ఎడ్స్ ఔసతీయ సంఖ్య",
    avsSessionsDurationContent2: " సెషన్ కే చేరాడు.",
    noOfInserted: "ఎడ్స్ చేరాడున్న సంఖ్య",
    availAdDuration: "లభించే ఎడ్ కాలం",
    fillAdsDuration: "పూర్తి చేరిన ఎడ్ కాలం",
    AdFillRate: "ఎడ్ పూర్తి దరం",
    totalSessions: "మొత్తం సమయాలు",
    adsInsertedPerSession: "ప్రతి సెషన్లో చేరిన ఎడ్స్",
    emptyVastResponses:"ఖాళీ ప్రకటన ప్రతిస్పందనలు",
    impressions:"ముద్రలు",
    adsInserted:" ప్రకటనలు చేసబడింది",
    duration:" కాలం",
    performance:" ప్రదర్శన",
    },






    //ViewewshipTrend
    module_viewershipTrend: {
      heading: "వీక్షకుల ధోరణి",
      heading1: "ప్రకటన చొప్పించే ధోరణి",
      sessionCount: "సెషన్ కౌంట్",
      avgSessionDuration: "సగటు సెషన్ వ్యవధి",
      adViewershipMins: "ప్రకటన వ్యూయర్‌షిప్ నిమిషాలు",
      uniqueViewers: "ప్రత్యేక వీక్షకులు",
      viewershipMins: "వీక్షకుల సంఖ్య నిమిషాలు",
      requestsvsimpression:"అభ్యర్థన vs ఇంప్రెషన్",
      time: "సమయం",
      failedavailrequests:"పూరించిన లభ్యత అభ్యర్థనలు",
      impressions:"ముద్రలు",
      emptyvastresponse:"ఖాళీ విస్తారమైన ప్రతిస్పందనలు",
      noadwarnings:"ప్రకటన హెచ్చరికలు లేవు",
      count: "లెక్కించు",
      summary: "సారాంశం"
    },

    //viewershipTrendin30mins
    module_viewershipTrendin30mins: {
      heading: "రోజు సమయానికి వీక్షకుల ట్రెండ్",
      uniqueViewers: "ప్రత్యేక వీక్షకులు",
      sessions: "సెషన్స్",
      avgSessionDuration: "సగటు సెషన్ వ్యవధి",
      adViewershipMins: "ప్రకటన వ్యూయర్‌షిప్ నిమిషాలు",
      sessionDuration: "సెషన్ వ్యవధి",
      time: "సమయం",
      adrequest:"ప్రకటన అభ్యర్థనలు",
      countt: "లెక్కించు"
    },

    //analytics filters
    //dailog//analytics filters
    module_analytics_filters: {
      selectFilter: "ఫిల్టర్‌ని ఎంచుకోండి",
      clearAll: "అన్నీ క్లియర్ చేయండి",
      filtersSelected: "ఫిల్టర్‌లు ఎంచుకోబడ్డాయి",
      cancell: "రద్దు చేయండి",
      applyy: "దరఖాస్తు చేసుకోండి",
      placeholderSearch: "వెతకండి",
      contentType:"కంటెంట్ రకం",
      contentIdStreamId:"కంటెంట్ ID / స్ట్రీమ్ ID",
      programme: "కార్యక్రమం",
      deviceType:"పరికరం రకం",
      deviceName:"పరికరం పేరు",
      partner:"భాగస్వామి",
      country:"దేశం",
      region:"ప్రాంతం",
      city:"నగరం",
      noDataFound:"డేటా ఏదీ కనుగొనబడలేదు"
    },

    //Components//Advanced_video_analytics
    //AdvDatePicker
    module_AdvDatePicker: {
      startDate: "ప్రారంబపు తేది",
      endDate: "ఆఖరి తేది",
      cancel: "రద్దు చేయండి",
      today: "ఈరోజు",
      oneWeek: "ఒక వారం",
      oneMonth: "ఒక నెల",
      applyy: "దరఖాస్తు చేసుకోండి"
    },

    //AdvFilter
    module_AdvFilter: {
      selectFilter: "ఫిల్టర్‌ని ఎంచుకోండి",
      clearAll: "అన్నీ క్లియర్ చేయండి",
      noResultFound: "ఫలితం కనుగొనబడలేదు",
      cancell: "రద్దు చేయండి",
      applyy: "దరఖాస్తు చేసుకోండి"
    },

    //common//component
    //ConfirmLogOut
    module_ConfirmLogOut: {
      header: "లాగ్అవుట్ వినియోగదారు",
      content: "మీరు ఖచ్చితంగా లాగ్ అవుట్ చేయాలనుకుంటున్నారా?",
      cancel: "రద్దు చేయండి",
      buttonlogout: "అవును, లాగ్అవుట్"
    },

    //Settings
    module_setting: {
      CreateSignKey: {
        heading: "మీ కొత్త సైన్ ఇన్ కీ క్రింద ఉంది:",
        labelSigningKeyId: "సైన్ ఇన్ కీ ID:",
        copied: "కాపీ చేయబడింది",
        labelBase64: "Base64-ఎన్కోడ్ చేసిన ప్రైవేట్ కీ:",
        content: "మేము రహస్య కీని నిల్వ చేయము. దయచేసి దీన్ని మీ సిస్టమ్‌లోకి కాపీ చేయండి లేదా డౌన్‌లోడ్ చేయండి",
        download: ".pem ఫైల్‌గా డౌన్‌లోడ్ చేయండి",
        done: "పూర్తి"
      },
      webHooks: {
        description1: "API అభ్యర్థన చక్రం వెలుపల జరిగే ఏవైనా ఈవెంట్‌లపై నిజ సమయ నవీకరణలను పొందడానికి Webhookలను ఉపయోగించండి.",
        description2: "వెబ్‌హుక్‌లను ఏదైనా పర్యావరణం కోసం కాన్ఫిగర్ చేయవచ్చు మరియు పర్యావరణం కోసం అన్ని ఈవెంట్‌ల కోసం నోటిఫికేషన్‌లు పంపబడతాయి.",
        createButton: "కొత్త Webhookని సృష్టించండి",
        tableHeadings: {
          urlToNotify: "తెలియజేయడానికి URL",
          signingSecret: "సైనింగ్ రహస్యం",
          environment: "పర్యావరణం",
          created: "సృష్టించబడింది",
          status: "స్థితి",
          actions: "చర్యలు",
        },
        active: "చురుకుగా",
        disable: "డిసేబుల్"
      },
      createNewWebhook: {
        newWebhook: "కొత్త వెబ్‌హుక్",
        required: "ఈ ఖాళీని తప్పనిసరిగా పూరించవలెను",
        urlErrorMessage: "దయచేసి చెల్లుబాటు అయ్యే urlని నమోదు చేయండి",
        urlToNotify: "తెలియజేయడానికి URL:",
        placeHolder: "urlని నమోదు చేయండి",
        required: "ఈ ఖాళీని తప్పనిసరిగా పూరించవలెను",
        message: "నమోదు చేసిన విలువ ప్రారంభం/ముగింపు లేదా వైట్ స్పేస్ మాత్రమే కలిగి ఉండకూడదు",
        description: "అన్ని ఈవెంట్‌లు ఈ URLకి పంపబడతాయి. ఈవెంట్‌ల రకాల గురించి మరింత తెలుసుకోవడానికి మా పత్రాలను చూడండి",
        docs: "మా పత్రాలను",
        cancel: "రద్దు చేయండి",
        createButton: "వెబ్‌హుక్‌ని సృష్టించండి"
      },
      // dialog//deletewebhook
      deleteWebhook: {
        errorMessage: "వెబ్‌హుక్ తొలగించబడింది",
        header: "వెబ్‌హుక్‌ను తొలగించండి",
        confirmDelete: "మీరు ఖచ్చితంగా ఈ Webhookని తొలగించాలనుకుంటున్నారా?",
        deleteMessage: "తొలగించిన తర్వాత, ఈ వెబ్‌హుక్ ఇకపై అందుబాటులో ఉండదు మరియు చర్య రద్దు చేయబడదు.",
        cancelButton: "రద్దు చేయండి",
        deleteButton: "అవును, తొలగించు"
      },
      billing: {
        description1: "వీడియో మరియు డేటా ప్లాన్‌ల కోసం బిల్లింగ్‌ని ఇక్కడ నిర్వహించండి. సంకోచించకండి",
        contactUs: "మమ్మల్ని సంప్రదించండి",
        description2: "బిల్లింగ్‌కు సంబంధించిన ఏవైనా సందేహాల కోసం.",
        nextPayment: "తదుపరి చెల్లింపు:",
        editPaymentButton: "చెల్లింపు వివరాలను సవరించండి",
        encoded: "ఎన్కోడ్ చేయబడింది",
        stored: "నిల్వ",
        streamed: "ప్రసారం చేయబడింది",
        billingCycle: "బిల్లింగ్ చక్రం",
        videosTable: {
          header: "వీడియో వినియోగం",
          title1: "వీడియోలు (1080p వరకు)",
          title2: "వీడియోలు (1080p పైన)",
          total: "మొత్తం వీడియో ఛార్జీలు",
        },
        liveTable: {
          header: "ప్రత్యక్ష ప్రసారం & రికార్డింగ్",
          title1: "ప్రత్యక్ష ప్రసారం",
          title2: "ప్రత్యక్ష రికార్డింగ్",
          total: "మొత్తం లైవ్ స్ట్రీమింగ్ ఛార్జీలు"
        },
        videoEditingTable: {
          header: "వీడియో ఎడిటింగ్",
          total: "మొత్తం వీడియో ఎడిటింగ్ ఛార్జీలు"
        },
        portraitProTable: {
          header: "పోర్ట్రెయిట్  ప్రో",
          total: "మొత్తం పోర్ట్రెయిట్  ప్రో ఛార్జీలు"
        },
        billingTable: {
          header: "బిల్లింగ్ సారాంశం",
          encoding: "ఎన్‌కోడింగ్ ఛార్జీలు",
          storage: "నిల్వ ఛార్జీలు",
          streaming: "స్ట్రీమింగ్ ఛార్జీలు",
          total: "ప్రస్తుత మొత్తం"
        },
        walletTable: {
          yourWallet: "మీ వాలెట్ బ్యాలెన్స్",
          remaining: "మిగిలి ఉంది",
          addMoney: "డబ్బు జోడించండి",
          enableAutoRecharge: "ఆటో రీఛార్జ్‌ని ప్రారంభించండి",
          recommended: "సిఫార్సు చేయబడింది",
          description: "మా సేవలకు అంతరాయం లేకుండా యాక్సెస్ పొందండి. మీకు అవసరమైనప్పుడు చెల్లింపు సెట్టింగ్‌లను సవరించండి.",
          balanceBelow: "నా బ్యాలెన్స్ దిగువన ఉన్నప్పుడు",
          required: "ఈ ఖాళీని తప్పనిసరిగా పూరించవలెను",
          message: "దయచేసి సంఖ్యలను మాత్రమే నమోదు చేయండి",
          recharge: "స్వయంచాలకంగా రీఛార్జ్ చేయండి",
          saveButton: "సేవ్ చేయండి"
        },
        paymentTable: {
          header: "స్వయంచాలకంగా రీఛార్జ్ చేయండి",
          paymentHistory: "చెల్లింపు చరిత్ర",
          card: "కార్డ్",
          expirationDate: "గడువు తేదీ",
          email: "ఇమెయిల్",
          zipCode: "పిన్ కోడ్",
          billingAddress: "రశీదు చిరునామా",
          city: "నగరం",
          state: "రాష్ట్రం",
          country: "దేశం",
        },
      },
      payment_history: {
        paymentHistory: "చెల్లింపు చరిత్ర",
        PaymentDate: "చెల్లింపు తేదీ",
        amount: "మొత్తం",
        actions: "చర్యలు",
        done: "పూర్తి"
      },
      index: {
        heading: "సెట్టింగ్‌లు"
      },
      tabs: {
        organization: "సంస్థ",
        billing: "బిల్లింగ్",
        aPIAccessTokens: "API యాక్సెస్ టోకెన్లు",
        webhooks: "వెబ్‌బూక్స్",
        signingKeys: "సంతకం కీలు"
      },
      //component//homepage//settingstab
      organization: {
        success:"విజయం",
        tokenExpired:"టోకెన్ గడువు ముగిసింది",
        userDeleted:"వినియోగదారు తొలగించబడ్డారు",
        invitationSent:"ఆహ్వానం పంపబడింది",
        joined:"చేరారు",
        heading1: "జనరల్",
        organization: "సంస్థ",
        edit: "సవరించు",
        heading2: "సభ్యులు",
        inviteNoButton: "సభ్యులను ఆహ్వానించండి",
        th: {
          name: "పేరు",
          email: "ఇమెయిల్",
          role: "పాత్ర",
          status: "స్థితి",
          actionn: "చర్య"
        },
        tb: {
          inviteSent: "ఆహ్వానం పంపబడింది",
          resend: "మళ్లీ పంపండి"
        }
      },
      removeuser: {
        heading: "వినియోగదారుని తీసివేయండి",
        content: "మీరు ఖచ్చితంగా వినియోగదారుని తీసివేయాలనుకుంటున్నారా?",
        content1: 'తీసివేయబడిన తర్వాత, ఈ వినియోగదారు ఇకపై వీడియోగ్రాఫ్‌లో ఈ సంస్థను యాక్సెస్ చేయలేరు.',
        cancelButton: "రద్దు చేయండి",
        removeButton: "అవును, తీసివేయండి"
      },
      //components//dailog//Edit_organisation_name
      Edit_organisation_name: {
        title: "సంస్థ పేరును సవరించండి",
        organisationName: "సంస్థ పేరు",
        required: "ఈ ఖాళీని తప్పనిసరిగా పూరించవలెను",
        message: "నమోదు చేసిన విలువ ప్రారంభం/ముగింపు లేదా వైట్ స్పేస్ మాత్రమే కలిగి ఉండకూడదు",
        cancelButton: "రద్దు చేయండి",
        saveChangButton: "మార్పులను ఊంచు"
      },

      //components//dailog//Newmember_invite
      Newmember_invite: {
        newMemberInvited:"కొత్త సభ్యుడు ఆహ్వానించబడ్డారు",
        title: "కొత్త సభ్యుడిని ఆహ్వానించండి",
        emailAddress: "ఇమెయిల్ చిరునామా",
        required: "ఈ ఖాళీని తప్పనిసరిగా పూరించవలెను",
        meesage: "చెల్లని ఇమెయిల్ చిరునామా",
        role: "పాత్ర",
        rolePlaceholder: "పేరు ద్వారా శోధించండి",
        noResultFound: "ఫలితం కనుగొనబడలేదు",
        sendInvitation: "ఆహ్వానం పంపండి"
      },
      //component//homepage//billing_plan
      billing_plan: {
        heading: "ప్రారంభించడానికి సిద్ధంగా ఉంది!",
        subHeading: "చెల్లింపు వివరాలను జోడించడం ద్వారా అప్‌గ్రేడ్ చేయండి. ఉచిత $20 క్రెడిట్ పొందండి.",
        updateButton: "అప్‌గ్రేడ్ చేయండి",
        content1: "ఎలాంటి పరిమితులు లేకుండా పోర్ట్రెయిట్ వీడియోలకు పూర్తి-నిడివి గల వీడియోలు, లైవ్ స్ట్రీమ్‌లు, లైవ్ రికార్డింగ్ వీడియో ఎడిటింగ్ మరియు ల్యాండ్‌స్కేప్‌ను జోడించండి.",
        content2: "మీరు 20$ వీడియోగ్రాఫ్ క్రెడిట్‌ను పూర్తిగా ఉపయోగించుకునే వరకు మీకు ఛార్జీ విధించబడదు.",
        viewPricing: "ధరను వీక్షించండి"
      },
      //pages//settings//Edit_payment_details
      Edit_payment_details: {
        titile: "Edit Payment Details",
        labelCreditDebit: "Credit or Debit Card",
        labelCreditDebitplaceholder: "Cardnumber",
        required: "ఈ ఖాళీని తప్పనిసరిగా పూరించవలెను",
        expirationDate: "Expiration Date",
        labelcvv: "CVV",
        labelcvvplaceholder: "CVV number",
        labelBillingAddress: "Billing Address",
        labelBillingAddressplaceholder: "Street address, P.O box,company",
        labelBillingAddress2: "Billing Address 2",
        labelBillingAddressplaceholder2: "Apartment number,Suite,Floor,Etc",
        labelCity: "City",
        labelCityplaceholder: "Enter City",
        labelState: "State",
        labelStatelabel: "Selete state",
        labelCountry: "Country",
        labelCountryplaceholder: "Select country",
        labelBillingEmail: "Billing Email",
        labelBillingEmailplaceholder: "Enter Email address",
        saveButton: "Save Payment Details",
        cancelButton: "Cancel"
      },
      //component//settingstabs//popup//AddMoney
      AddMoney: {
        addMoney: "డబ్బు జోడించండి",
        currentBalance: "ప్రస్తుత నిల్వ",
        rechargeWallet: "రీఛార్జ్ వాలెట్",
        required: "ఈ ఖాళీని తప్పనిసరిగా పూరించవలెను",
        message: "దయచేసి సంఖ్యలను మాత్రమే నమోదు చేయండి",
        enableAutoRecharge: "ఆటో రీఛార్జ్‌ని ప్రారంభించండి",
        recommendended: "సిఫార్సు చేయబడింది",
        content: "మా సేవలకు అంతరాయం లేకుండా యాక్సెస్ పొందండి. మీకు అవసరమైనప్పుడు చెల్లింపు సెట్టింగ్‌లను సవరించండి.",
        labelWhenMyBalanceIsBelow: "నా బ్యాలెన్స్ దిగువన ఉన్నప్పుడు",
        labelAutomaticallyRecharge: "స్వయంచాలకంగా రీఛార్జ్ చేయండి",
        coutinueButton: "కొనసాగించు",
      },
      //component//settingstabs//popup//PaymentSuccess
      PaymentSuccess: {
        PaymentSuccessful: "చెల్లింపు విజయవంతమైంది",
        youHaveAdded: "మీరు జోడించారు",
        toYourWallet: "మీ వాలెట్‌కి",
        currentBalanceIs: "ప్రస్తుత బ్యాలెన్స్ ఉంది",
        InvoiceNumber: "ఇన్వాయిస్ సంఖ్యా: #",
        goBack: "వెనక్కి వెళ్ళు",
      },
      //component//settingstabs//popup//Processing
      processing: {
        heading: "మీ చెల్లింపును ప్రాసెస్ చేస్తోంది",
        content: "దీనికి కొన్ని సెకన్లు పట్టవచ్చు. దయచేసి కూర్చుని విశ్రాంతి తీసుకోండి!",
        content2: "పేజీని మూసివేయవద్దు లేదా రిఫ్రెష్ చేయవద్దు."
      },
      //component//settingstabs//popup//Reward
      Reward: {
        congratulations: "అభినందనలు!",
        content: "మీరు మీ చెల్లింపు వివరాలను విజయవంతంగా సెటప్ చేసారు",
        content1: "మీ రివార్డ్  ఇక్కడ ఉన్నాయి",
        credit: ">$20 క్రెడిట్‌లు",
        content2: "మేము మీ వాలెట్‌కు క్రెడిట్‌లను జోడించాము.",
        okButton: "అలాగే"
      },
      //component//homepage//API Acess Token
      Api_accesstokens: {
        description: "మీరు API యాక్సెస్ టోకెన్‌లను సృష్టించవచ్చు లేదా ఉపసంహరించుకోవచ్చు. API అభ్యర్థనను ప్రామాణీకరించడానికి టోకెన్‌లు ఉపయోగించబడతాయి మరియు పర్యావరణ నిర్దిష్టమైనవి. మరింత తెలుసుకోవడానికి మా ",
        guide: "గైడ్‌ని సందర్శించండి",
        createButton: "కొత్త టోకెన్‌ని సృష్టించండి",
        th: {
          tokenid: "టోకెన్ ID",
          environment: "పర్యావరణం",
          permission: "అనుమతి",
          created: "సృష్టించబడింది",
          createdBy: "సృష్టికర్త",
          status: "స్థితి",
          actions: "చర్యలు",
        },
        tb: {
          active: "ఆక్టివ్ ",
          activeRevoke: "యాక్సెస్ రద్దు",
          revoke: "ఉపసంహరించుకోండి",
        }
      },
      Revoke_access: {
        heading: "ఉపసంహరణ ప్రాప్యత",
        content: "మీరు ఖచ్చితంగా యాక్సెస్‌ని ఉపసంహరించాలనుకుంటున్నారా?",
        content1: "ఒకసారి యాక్సెస్ ఉపసంహరించుకుంటే, ఈ టోకెన్ వినియోగదారులందరికీ చెల్లదు. ఈ చర్య రద్దు చేయబడదు.",
        cancelButton: "రద్దు చేయండి",
        revokeButton: "అవును, ఉపసంహరించుకోండి"
      },
      //page//settinga/New_acess_token
      New_acess_token: {
        heading: "కొత్త యాక్సెస్ టోకెన్",
        permission: "అనుమతి",
        content: "మరింత అనుమతిని తెలుసుకోవడానికి దయచేసి మా ",
        tokenAccessGuide: "టోకెన్ యాక్సెస్ గైడ్‌ని సందర్శించండి",
        labelRead: "చదవండి",
        labelWrite: "వ్రాయడానికి",
        labelReadOnly: "చదవడానికి మాత్రమే",
        labelAccess: "టోకెన్ పేరును యాక్సెస్ చేయండి",
        required: "ఈ ఖాళీని తప్పనిసరిగా పూరించవలెను",
        message: "నమోదు చేసిన విలువ ప్రారంభం/ముగింపు లేదా వైట్ స్పేస్ మాత్రమే కలిగి ఉండకూడదు",
        labelAccessPlaceholder: "అభివృద్ధి",
        cancel: "రద్దు చేయండి",
        createToken: "టోకెన్ సృష్టించండి"
      },
      
EditApi: {
  save: "సేవ్ చేయండి",
  cancel: "రద్దు చేయండి",
  required: "ప్రారంభం/ముగింపులో ఖాళీ లేకుండా ఈ ఫీల్డ్ అవసరం"
},

      //component//dailog//SecretKey
      SecretKey: {
        heading: "దిగువన కొత్త యాక్సెస్ టోకెన్ ఉంది",
        accessTokenId: "యాక్సెస్ టోకెన్ ID:",
        secretKey: "రహస్య కీ:",
        content: "మేము రహస్య కీని నిల్వ చేయము. దయచేసి దీన్ని మీ సిస్టమ్‌లోకి కాపీ చేయండి లేదా డౌన్‌లోడ్ చేయండి",
        copied: "కాపీ చేయబడింది",
        download: ".env ఫైల్‌గా డౌన్‌లోడ్ చేయండి",
        done: "పూర్తి"
      },
      //component//homepage//signingkeys
      signingkeys: {
        description: "నిర్దిష్ట అభ్యర్థనలను భద్రపరచడం కోసం JSON వెబ్ టోకెన్‌ల (JWTలు) సంతకం చేయడానికి సైన్ ఇన్ కీలు ఉపయోగించబడతాయి. ప్లేబ్యాక్ URLలను సురక్షితంగా ఉంచడానికి వీడియో కీలను ఉపయోగించవచ్చు మరియు నిజ-సమయ వీక్షకుల గణనలకు ప్రాప్యతను సురక్షితంగా ఉంచడానికి డేటా కీలను ఉపయోగించవచ్చు.",
        createButton: "కొత్త కీని సృష్టించండి",
        th: {
          keyID: "కీ ID",
          environment: "పర్యావరణం",
          productt: "ఉత్పత్తి",
          created: "సృష్టించబడింది",
          status: "స్థితి",
          actions: "చర్యలు",
        },
        tb: {
          active: "ఆక్టివ్ ",
          video: "వీడియో",
          data: "తేదీ",
          system: "సిస్టం"
        }
      },
      //page//setting//Create_singing_keys
      Create_signing_key: {
        heading: "కొత్త సైనింగ్ కీ",
        product: "ఉత్పత్తి",
        searchPlaceholder: "పేరు ద్వారా శోధించండి",
        noResultFound: "ఫలితం కనుగొనబడలేదు",
        cancel: "రద్దు చేయండి",
        createSigningKey: "సైనింగ్ కీని సృష్టించండి"
      },
      // dialog// deletesigningkey
      deleteSigningKey: {
        errorMessage: "సైనింగ్ కీ తొలగించబడింది",
        header: "సైనింగ్ కీని తొలగించండి",
        confirmDelete: "మీరు ఈ సైనింగ్ కీని ఖచ్చితంగా తొలగించాలనుకుంటున్నారా?",
        deleteMessage: "తొలగించిన తర్వాత, ఈ సైనింగ్  కీ ఇకపై అందుబాటులో ఉండదు మరియు చర్య రద్దు చేయబడదు.",
        cancelButton: "రద్దు చేయండి",
        deleteButton: "అవును, తొలగించు"
      },
    },
    module_scheduleReports:{

      list:{
        reportName:"నివేదిక పేరు",
        sendTo:"పంపే",
        runAt:"వద్ద రన్",
        status:"స్థితి",
        timeZone:"సమయమండలం",
        actions:"చర్యలు",
        resume:"పునఃప్రారంభం",
        pause:"పాజ్ చేయండి",
        delete:"తొలగించు",
        edit:"సవరించు",
        noReportsScheduledPlease:"నివేదికలు షెడ్యూల్ చేయబడలేదు. దయచేసి",
        setup:"సెటప్",

      },
      setup:{
        reportName:"నివేదిక పేరు",
        emailTo:"కు ఇమెయిల్ చేయండి",
        oneTime:"ఒక్కసారి",
        recurring:"పునరావృతం",
        sendAt:"వద్ద పంపండి",
        from:"నుండి",
        to:"కు",
        daily:"రోజువారీ",
        weekly:"వారానికోసారి",
        monthly:"నెలవారీ",
        metrics:"కొలమానాలు",
        all:"అన్నీ",
        metricsForOverview:"స్థూలదృష్టి కోసం కొలమానాలు",
        metricsForViewership:"వీక్షకుల కోసం కొలమానాలు",
        encodedMins:"ఎన్కోడ్ చేసిన నిమిషాలు",
        storedMins:"నిల్వ చేయబడిన నిమిషాలు",
        streamedMins:"స్ట్రీమ్ చేసిన నిమిషాలు",
        deviceTypes:"పరికరం రకం",
        devices:"పరికరాలు",
        contents:"కంటెంట్‌లు",
        concurrentViewers:"ఉమ్మడి వీక్షకులు",
        countries:"దేశాలు",
        partners:"భాగస్వాములు",
        noOfViewers:"వీక్షకుల సంఖ్య",
        sessions:"సెషన్స్",
        totalViewership:"మొత్తం వీక్షకుల సంఖ్య",
        adViewership:"ప్రకటన వ్యూయర్‌షిప్",
        avgSessionsPerUser:"ప్రతి వినియోగదారుకు సగటు సెషన్‌లు",
        avgSessionDuration:"సగటు సెషన్ వ్యవధి",
        splitAllDataByFilter:"ఫిల్టర్ ద్వారా మొత్తం డేటాను విభజించండి",
        filters:"ఫిల్టర్లు",
        cancel:"రద్దు చేయండి",
        saveReport:"నివేదికను సేవ్ చేయండి",
        namePlaceHolder:"Give your report a name",
        nameError:"పేరు ఖాళీగా ఉండకూడదు లేదా వైట్‌స్పేస్ మాత్రమే కలిగి ఉండకూడదు.",
        nameError1:"దయచేసి పేరు ఖాళీతో ప్రారంభం కాలేదని నిర్ధారించుకోండి.",
        nameError2:"పేరు 64 అక్షరాలకు మించకూడదు.",
        emailIDPlaceholder:"కామాతో వేరు చేయబడిన ఇమెయిల్ ఐడిలను నమోదు చేయండి.",
        emailError:"ఇమెయిల్ ఖాళీగా ఉండకూడదు లేదా వైట్‌స్పేస్ మాత్రమే కలిగి ఉండకూడదు.",
        required:"ఈ ఖాళీని తప్పనిసరిగా పూరించవలెను"

      }


    }

  },


}

