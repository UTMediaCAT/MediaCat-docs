/*
How to:


Each url list corresponds to each test. We are testing the
Javascript article-parser and the Javascript Metascrapper,
so we have two seperate url lists. Each url list corresponds
to a date list. In the date list, put the date you expect its corresponding
article url to return from these libraries.

I put null on websites I expect the date parser will have difficulty finding
a date for. Like home pages.

Here the Metascraper out performs the python libraries and the Javascript
article-parser because it returns dates to urls that we expect to return
null. We expected some urls to return null because of how difficult it
usually is to extract them but the metascraper returns a guess anyways which is
good news.

Unlike the python library date guesser, it gives a date even on the home page.
 This is fine behaviour.

*/


// import {articleParserfunction, metascraperfunction} from './JavascriptDate';

const JavascriptDate = require('./JavascriptDate')
const articleParserfunction = JavascriptDate.articleParserfunction
const metascraperfunction = JavascriptDate.metascraperfunction


// const targetUrl =
// 'https://www.aljazeera.com/economy/2020/10/7/trump-urges-congress-to-pass' +
// '-targeted-aid-after-halting-talks';

const urlsJavascriptDateTest = [
  'https://www.aljazeera.com/',
  'https://www.aljazeera.com/economy/2020/10/7/trump-urges-congress-to-' +
  'pass-targeted-aid-after-halting-talks',
  'https://www.nytimes.com/',
  'https://www.nytimes.com/2020/10/03/us/sean-conley-trump-doctor.html?action=' +
  'click&module=Spotlight&pgtype=Homepage',
  'https://www.cbc.ca/',
  'https://www.cbc.ca/radio/thecurrent/the-current-for-oct-1-2020' +
   '-1.5745953/made-in-america-how-trump-and-biden-s-rival-visions-' +
   'for-economic-recovery-are-resonating-with-illinois-voters-1.5746657',
];

const datesJavascriptDateTest =
  [null, new Date(2020, 9, 7), null,
    new Date(2020, 9, 3), null, new Date(2020, 9, 2)];


const urlsJavascriptMetascrapperTest = [
  'https://www.dw.com/uk/коментар-націоналізм-родом-зі-східної-європи/a-42081385',
  'https://www.aljazeera.com/',
  'https://www.aljazeera.com/economy/2020/10/7/trump-urges-congress-to-pass-targeted' +
  '-aid-after-halting-talks',
  'https://www.nytimes.com/',
  'https://www.nytimes.com/2020/10/03/us/sean-conley-trump-doctor.html?action=click&module' +
  '=Spotlight&pgtype=Homepage',
  'https://www.cbc.ca/',
  'https://www.cbc.ca/radio/thecurrent/the-current-for-oct-1-2020-1.5745953' +
  '/made-in-america-how-trump-and-biden-s-rival-visions-for-economic-recovery' +
  '-are-resonating-with-illinois-voters-1.5746657',
  'https://jewishchronicle.timesofisrael.com/lawfare-joins-point-park-profs-legal-team-in-discrimination-suit/',
  'https://www.haaretz.com/us-news/.premium-anti-zionist-hasidic-jews-shake-the-room-at-barclays-center-1.5483293',
  'https://www.jpost.com/israel-news/tel-aviv-ranked-among-top-5-most-artistic-cities-in-the-world-to-visit-644129',
  'https://www.themarker.com/coronavirus/.premium-1.9200329?utm_source=dlvr.it&utm_medium=twitter&utm_campaign=haaretz',
  'https://www.themarker.com/hblocked?returnTo=https%3A%2F%2Fwww.themarker.com%2Fopinion%2F1.9198144%3Futm_source%3Ddlvr.it%26utm_medium%3Dtwitter%26utm_campaign%3Dhaaretz',
  'https://www.ynetnews.com/articles/0,7340,L-4934332,00.html',
  'http://www.israelnationalnews.com/News/News.aspx/236464',
  'https://nocamels.com/2020/01/drip-irrigation-digital-farming-netafim-innovative-agriculture-tech/',
  'https://nocamels.com/2016/05/israeli-black-hole-stephen-hawking-nobel-prize/',
  'https://nocamels.com/2019/01/watergen-genny-water-air/',
  'https://www.israelnationalnews.com/News/News.aspx/288156',
];

const datesJavascriptMetascrapperTest =
  [null, null, new Date(2020, 9, 7),
    null, new Date(2020, 9, 3), null, new Date(2020, 9, 2),
    new Date(2020, 8, 25), new Date(2017, 7, 12), new Date(2020, 9, 1),
    new Date(2020, 0, 10), null, new Date(2017, 2, 12),
    new Date(2017, 9, 9), new Date(2020, 0, 19), new Date(2020, 4, 1),
    new Date(2019, 0, 28), new Date(2020, 8, 30)];


const javascriptDateTestFunc = function(url, date) {
  // const url = 'https://goo.gl/MV8Tkh';
  // const date = new Date(2017, 6, 17);
  const promise = new Promise(function(resolve) {
    articleParserfunction(url).then((dateReturned) => {
    // console.log(dateReturned);
    // console.log(dateReturned.published);
      if (date == null || dateReturned == null ||
        dateReturned.published == null ||
        dateReturned.published == '') {
        if ((dateReturned == null) && (date == null)) {
          console.log('MATCHED! ' + url );
          console.log('Date Returned: ' + dateReturned);
          console.log('Date Expected: ' + date + '\n');
          // console.log(true)
          resolve(true);
        } else if ( (dateReturned) &&
         (dateReturned.published == null) &&
         ( date == null)) {
          console.log('MATCHED! ' + url );
          console.log('Date Returned: ' + dateReturned.published);
          console.log('Date Expected: ' + date + '\n');
          // console.log(true)
          resolve(true);
        } else if ( (dateReturned) && (dateReturned.published == '') &&
         ( date == null)) {
          console.log('MATCHED! ' + url );
          console.log('Date Returned: ' + dateReturned.published);
          console.log('Date Expected: ' + date + '\n');
          resolve(true);
        } else {
          console.log('Not a match! ' + url);
          if (dateReturned) {
            console.log(' Date Returned: ' + dateReturned.published);
          } else {
            console.log(' Date Returned: ' + dateReturned);
          }
          console.log(' Date Expected: ' + date + '\n');
          resolve(false);
        };
      } else {
        const date2 = new Date(dateReturned.published);
        date.setHours(0, 0, 0, 0);
        date2.setHours(0, 0, 0, 0);
        // let string = " Date Returned: " + date2;
        console.log(' Date Returned: ' + date2);
        console.log(' Date Expected: ' + date);
        // console.log(date2 === date);
        const match = (date2 === date);
        // string += " Match? : " + match
        console.log(' Match? : ' + match + '\n');
        // console.log(string + "\n")
        resolve(date2 === date);
      }
    });
  });
  return promise;
};


const javascriptDateTestPromise = function() {
  const list = [];

  for (let i = 0; i < urlsJavascriptDateTest.length; i++) {
    list.push(javascriptDateTestFunc(urlsJavascriptDateTest[i],
        datesJavascriptDateTest[i]));
  }

  const promise = new Promise(function(resolve) {
    Promise.all(list).then((values) => {
      // console.log("VALUES")
      // console.log(values) values of true and false
      resolve(values);
    });
  });
  return promise;
};


const javascriptDateTest = function() {
  javascriptDateTestPromise().then((values) => {
    let matches = 0;
    for (let i=0; i < values.length; i++) {
      if (values[i]) {
        matches = matches + 1;
      }
    }
    console.log('\x1b[33m%s\x1b[0m', 'There are ' +
        matches + ' matches out of ' + values.length +' urls. \n');
  });
};


const javascriptMetascrapperTestFunc = function(urls) {
  const list = [];
  for (let i=0; i < urls.length; i++) {
    const targetUrl = urls[i];
    list.push(metascraperfunction(targetUrl));
  }

  const promise = new Promise(function(resolve) {
    Promise.all(list).then((values) => {
      resolve(values);
    });
  });

  return promise;
};

const javascriptMetascrapperTest = function() {
  javascriptMetascrapperTestFunc(urlsJavascriptMetascrapperTest).then(
      (values) => {
        let matches = 0;

        for (let i=0; i < urlsJavascriptMetascrapperTest.length; i++) {
          let date1 = values[i].date;
          const date2 = datesJavascriptMetascrapperTest[i];

          if (date1 === null || date2 === null) {
            if ((date1 == null) && (date2==null)) {
              console.log('MATCHED! ' + urlsJavascriptMetascrapperTest[i]);
              console.log('returned: ' + values[i].date);
              console.log('expected: ' +
               datesJavascriptMetascrapperTest[i] + '\n');
              matches = matches + 1;
            } else {
              console.log('Not a match! ' + urlsJavascriptMetascrapperTest[i]);
              console.log('returned: ' + values[i].date);
              console.log('expected: ' +
               datesJavascriptMetascrapperTest[i] + '\n');
            }
          } else {
            date1 = new Date(date1);

            if (date1.setHours(0, 0, 0, 0) == date2.setHours(0, 0, 0, 0)) {
              console.log('MATCHED! ' + urlsJavascriptMetascrapperTest[i]);
              console.log('returned: ' + date1);
              console.log('expected: ' + date2 + '\n');
              matches = matches + 1;
            } else {
              console.log('Not a match! ' +
                    urlsJavascriptMetascrapperTest[i]);
              console.log('returned: ' + date1);
              console.log('expected: ' + date2 + '\n');
            }
          }
        }

        console.log('\x1b[33m%s\x1b[0m', 'There are ' + matches +
            ' matches out of ' + urlsJavascriptMetascrapperTest.length +
            ' urls.' + '\n');
      });
};


// Automative Testing
// javascriptDateTest();
javascriptMetascrapperTest();

// Manual Testing

// url1 = "https://www.cbc.ca/radio/thecurrent/the-current-for-oct-1-2020-1.5745953/made-in-america-how-trump-and-biden-s-rival-visions-for-economic-recovery-are-resonating-with-illinois-voters-1.5746657"

// JavascriptDate.articleParserfunction(url1).then(dateReturned => {
//     console.log(dateReturned)
// })
