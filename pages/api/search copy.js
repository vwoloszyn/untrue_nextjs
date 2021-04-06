// Fake users data
const users = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]


const results = {
  "_type": "SearchResponse",
  "instrumentation": {
    "_type": "ResponseInstrumentation",
    "pingUrlBase": "https://www.bingapis.com/api/ping?IG=C85CAD4AB1F24E93A7F3C685E7DAAEB4&CID=19F9E2694E5269A53A48F2794F4B68BF&ID=",
    "pageLoadPingUrl": "https://www.bingapis.com/api/ping/pageload?IG=C85CAD4AB1F24E93A7F3C685E7DAAEB4&CID=19F9E2694E5269A53A48F2794F4B68BF&Type=Event.CPT&DATA=0"
  },
  "queryContext": {
    "originalQuery": "test"
  },
  "webPages": {
    "webSearchUrl": "https://www.bing.com/search?q=test",
    "webSearchUrlPingSuffix": "DevEx,5567.1",
    "totalEstimatedMatches": 661000,
    "value": [
      {
        "id": "https://api.bing.microsoft.com/api/v7/#WebPages.0",
        "name": "Did Dozens of Countries Order COVID-19 Tests in 2018 ...",
        "url": "https://www.snopes.com/fact-check/countries-covid-19-tests-2018/",
        "urlPingSuffix": "DevEx,5104.1",
        "datePublished": "2020-09-11T00:00:00.0000000",
        "datePublishedDisplayText": "Sep 11, 2020",
        "isFamilyFriendly": true,
        "displayUrl": "https://www.snopes.com/fact-check/countries-covid-19-tests-2018",
        "snippet": "Data displayed on the World Bank's World Integrated Trade Solution (WITS) website in September 2020 proved that dozens of nations imported or exported items labeled \"COVID-19 Test Kits\" in 2018 ...",
        "dateLastCrawled": "2021-04-02T15:36:00.0000000Z",
        "openGraphImage": {
          "contentUrl": "https://www.snopes.com/tachyon/2020/09/Copy-of-FEATURED-IMAGE-1200-Pixels-1-2.png",
          "width": 1200,
          "height": 675
        },
        "fixedPosition": false,
        "language": "en",
        "isNavigational": false
      },
      {
        "id": "https://api.bing.microsoft.com/api/v7/#WebPages.1",
        "name": "Are These ‘16 Easy Tests' to Check Whether Food Is 'Fake ...",
        "url": "https://www.snopes.com/fact-check/fake-real-food-tests/",
        "urlPingSuffix": "DevEx,5121.1",
        "datePublished": "2019-06-06T00:00:00.0000000",
        "datePublishedDisplayText": "Jun 06, 2019",
        "isFamilyFriendly": true,
        "displayUrl": "https://www.snopes.com/fact-check/fake-real-food-tests",
        "snippet": "This test can be traced to the FSSAI guidelines, known as “Detect Adulteration with Rapid Test” (DART), which set out the following method: “Boil 2-3 ml of sample with 5ml of water. Cool and ...",
        "dateLastCrawled": "2021-04-01T06:12:00.0000000Z",
        "openGraphImage": {
          "contentUrl": "https://www.snopes.com/tachyon/2019/06/Screenshot-2019-06-05-at-13.55.36.png",
          "width": 1440,
          "height": 900
        },
        "fixedPosition": false,
        "language": "en",
        "isNavigational": false
      },
      {
        "id": "https://api.bing.microsoft.com/api/v7/#WebPages.2",
        "name": "Did Tanzania's President Expose Faulty COVID-19 Testing by ...",
        "url": "https://www.snopes.com/fact-check/tanzania-president-covid-tests/",
        "urlPingSuffix": "DevEx,5143.1",
        "datePublished": "2020-05-07T00:00:00.0000000",
        "datePublishedDisplayText": "May 07, 2020",
        "isFamilyFriendly": true,
        "displayUrl": "https://www.snopes.com/fact-check/tanzania-president-covid-tests",
        "snippet": "Tanzania President John Magufuli secretly sent specimens from a fruit, quail, and goat to a lab testing for the COVID-19 coronavirus disease in humans — and the results came back positive.",
        "dateLastCrawled": "2021-04-02T09:00:00.0000000Z",
        "openGraphImage": {
          "contentUrl": "https://www.snopes.com/tachyon/2020/05/GettyImages-1187384950-scaled-e1588892619940.jpg",
          "width": 1200,
          "height": 812
        },
        "fixedPosition": false,
        "language": "en",
        "isNavigational": false
      },
      {
        "id": "https://api.bing.microsoft.com/api/v7/#WebPages.3",
        "name": "Is China Using Anal Swabs to Test for COVID-19? | Snopes.com",
        "url": "https://www.snopes.com/fact-check/china-anal-swabs-covid/",
        "urlPingSuffix": "DevEx,5162.1",
        "datePublished": "2021-01-27T00:00:00.0000000",
        "datePublishedDisplayText": "Jan 27, 2021",
        "isFamilyFriendly": true,
        "displayUrl": "https://www.snopes.com/fact-check/china-anal-swabs-covid",
        "snippet": "Readers were surprised to see reports of China using anal swabs to test for COVID-19. Maybe wearing a mask isn't such a bad idea after all.",
        "dateLastCrawled": "2021-04-01T06:06:00.0000000Z",
        "openGraphImage": {
          "contentUrl": "https://www.snopes.com/tachyon/2021/01/cotton-swabs-592148_1280-e1611781404266.jpg",
          "width": 1280,
          "height": 697
        },
        "fixedPosition": false,
        "language": "en",
        "isNavigational": false
      },
      {
        "id": "https://api.bing.microsoft.com/api/v7/#WebPages.4",
        "name": "1895 Exam | Snopes.com",
        "url": "https://www.snopes.com/fact-check/1895-exam/",
        "urlPingSuffix": "DevEx,5177.1",
        "isFamilyFriendly": true,
        "displayUrl": "https://www.snopes.com/fact-check/189",
        "snippet": "The questions on this exam don’t reflect only items of “basic knowledge” — many of the questions require the test-taker to have absorbed some very specialized information, and if today’s ...",
        "dateLastCrawled": "2021-04-01T11:39:00.0000000Z",
        "openGraphImage": {
          "contentUrl": "https://www.snopes.com/tachyon/2019/11/2019-snopes-open-graph-default.png",
          "width": 1024,
          "height": 512
        },
        "fixedPosition": false,
        "language": "en",
        "isNavigational": false
      },
      {
        "id": "https://api.bing.microsoft.com/api/v7/#WebPages.5",
        "name": "Are You Immune to COVID-19 If You Have Antibodies ...",
        "url": "https://www.snopes.com/news/2020/06/12/are-you-immune-to-covid-19-if-you-have-antibodies/",
        "urlPingSuffix": "DevEx,5193.1",
        "datePublished": "2020-06-12T00:00:00.0000000",
        "datePublishedDisplayText": "Jun 12, 2020",
        "isFamilyFriendly": true,
        "displayUrl": "https://www.snopes.com/news/2020/06/12/are-you-immune-to-covid-19-if-you-have-antibodies",
        "snippet": "This test detects the genetic code of the SARS-CoV-2 virus in your body. If you have a positive nasal swab PCR result, you not only have the infection, but you are potentially infectious and ...",
        "dateLastCrawled": "2021-04-01T04:15:00.0000000Z",
        "openGraphImage": {
          "contentUrl": "https://www.snopes.com/tachyon/2020/06/getty_antibodies.jpg",
          "width": 1200,
          "height": 749
        },
        "fixedPosition": false,
        "language": "en",
        "isNavigational": false
      },
      {
        "id": "https://api.bing.microsoft.com/api/v7/#WebPages.6",
        "name": "Was Donald Trump's IQ Measured at 73? | Snopes.com",
        "url": "https://www.snopes.com/fact-check/donald-trump-nyma-iq/",
        "urlPingSuffix": "DevEx,5209.1",
        "datePublished": "2019-05-06T00:00:00.0000000",
        "datePublishedDisplayText": "May 06, 2019",
        "isFamilyFriendly": true,
        "displayUrl": "https://www.snopes.com/fact-check/donald-trump-nyma-iq",
        "snippet": "Trump IQ test results discovered in former NYMA employee’s closet. The result: 73. The results of an IQ test that President Donald Trump allegedly took during his first year at New York Military ...",
        "dateLastCrawled": "2021-04-01T22:09:00.0000000Z",
        "openGraphImage": {
          "contentUrl": "https://www.snopes.com/tachyon/2019/05/GettyImages-1146741180.jpg",
          "width": 1024,
          "height": 683
        },
        "fixedPosition": false,
        "language": "en",
        "isNavigational": false
      },
      {
        "id": "https://api.bing.microsoft.com/api/v7/#WebPages.7",
        "name": "FACT CHECK: How to Spot a Two-Way Mirror?",
        "url": "https://www.snopes.com/fact-check/spot-two-way-mirror/",
        "urlPingSuffix": "DevEx,5224.1",
        "isFamilyFriendly": true,
        "displayUrl": "https://www.snopes.com/fact-check/spot-two-way-mirror",
        "snippet": "The fingernail test described above is a method for determining the difference between first-surface mirrors and second-surface mirrors, both of which are ordinary mirrors glazed in a different ...",
        "dateLastCrawled": "2021-04-02T00:15:00.0000000Z",
        "openGraphImage": {
          "contentUrl": "https://www.snopes.com/tachyon/2016/09/Untitled-design-4.jpg",
          "width": 1200,
          "height": 627
        },
        "fixedPosition": false,
        "language": "en",
        "isNavigational": false
      },
      {
        "id": "https://api.bing.microsoft.com/api/v7/#WebPages.8",
        "name": "FACT CHECK: Do Some People Have a 4th Retinal Cone?",
        "url": "https://www.snopes.com/fact-check/people-4th-retinal-cone/",
        "urlPingSuffix": "DevEx,5244.1",
        "datePublished": "2015-03-02T00:00:00.0000000",
        "datePublishedDisplayText": "Mar 02, 2015",
        "isFamilyFriendly": true,
        "displayUrl": "https://www.snopes.com/fact-check/people-4th-retinal-cone",
        "snippet": "The test, which was posted just a few days after the Internet became obsessed identifying the color of a dress, asked viewers to count the number of colors in an image. The amount of colors ...",
        "dateLastCrawled": "2021-04-01T22:42:00.0000000Z",
        "openGraphImage": {
          "contentUrl": "https://www.snopes.com/tachyon/2015/06/4th-retinal-cone-tetrochromacy.jpg",
          "width": 1201,
          "height": 628
        },
        "fixedPosition": false,
        "language": "en",
        "isNavigational": false
      }
    ]
  },
  "rankingResponse": {
    "mainline": {
      "items": [
        {
          "answerType": "WebPages",
          "resultIndex": 0,
          "value": {
            "id": "https://api.bing.microsoft.com/api/v7/#WebPages.0"
          }
        },
        {
          "answerType": "WebPages",
          "resultIndex": 1,
          "value": {
            "id": "https://api.bing.microsoft.com/api/v7/#WebPages.1"
          }
        },
        {
          "answerType": "WebPages",
          "resultIndex": 2,
          "value": {
            "id": "https://api.bing.microsoft.com/api/v7/#WebPages.2"
          }
        },
        {
          "answerType": "WebPages",
          "resultIndex": 3,
          "value": {
            "id": "https://api.bing.microsoft.com/api/v7/#WebPages.3"
          }
        },
        {
          "answerType": "WebPages",
          "resultIndex": 4,
          "value": {
            "id": "https://api.bing.microsoft.com/api/v7/#WebPages.4"
          }
        },
        {
          "answerType": "WebPages",
          "resultIndex": 5,
          "value": {
            "id": "https://api.bing.microsoft.com/api/v7/#WebPages.5"
          }
        },
        {
          "answerType": "WebPages",
          "resultIndex": 6,
          "value": {
            "id": "https://api.bing.microsoft.com/api/v7/#WebPages.6"
          }
        },
        {
          "answerType": "WebPages",
          "resultIndex": 7,
          "value": {
            "id": "https://api.bing.microsoft.com/api/v7/#WebPages.7"
          }
        },
        {
          "answerType": "WebPages",
          "resultIndex": 8,
          "value": {
            "id": "https://api.bing.microsoft.com/api/v7/#WebPages.8"
          }
        }
      ]
    }
  }
}
export default function handler(req, res) {
  // Get data from your database
  //res.status(200).json(users)
  res.status(200).json(results)
}
