
var JavascriptDate = require('./JavascriptDate');

// const targetUrl = 'https://www.aljazeera.com/economy/2020/10/7/trump-urges-congress-to-pass-targeted-aid-after-halting-talks';

const urlsPlain = [
    'https://www.aljazeera.com/',
    'https://www.aljazeera.com/economy/2020/10/7/trump-urges-congress-to-pass-targeted-aid-after-halting-talks',
    'https://www.nytimes.com/',
    'https://www.nytimes.com/2020/10/03/us/sean-conley-trump-doctor.html?action=click&module=Spotlight&pgtype=Homepage',
    'https://www.cbc.ca/',
    'https://www.cbc.ca/radio/thecurrent/the-current-for-oct-1-2020-1.5745953/made-in-america-how-trump-and-biden-s-rival-visions-for-economic-recovery-are-resonating-with-illinois-voters-1.5746657'
    ]



const urls = [
        'https://www.dw.com/uk/коментар-націоналізм-родом-зі-східної-європи/a-42081385',
        'https://www.aljazeera.com/',
        'https://www.aljazeera.com/economy/2020/10/7/trump-urges-congress-to-pass-targeted-aid-after-halting-talks',
        'https://www.nytimes.com/',
        'https://www.nytimes.com/2020/10/03/us/sean-conley-trump-doctor.html?action=click&module=Spotlight&pgtype=Homepage',
        'https://www.cbc.ca/',
        'https://www.cbc.ca/radio/thecurrent/the-current-for-oct-1-2020-1.5745953/made-in-america-how-trump-and-biden-s-rival-visions-for-economic-recovery-are-resonating-with-illinois-voters-1.5746657'
        ]

const dates = [null,null, new Date(2020, 9, 7),null,new Date(2020, 9, 3), null, new Date(2020, 9, 2)]

const datesPlain = [null, new Date(2020, 9, 7),null,new Date(2020, 9, 3), null, new Date(2020, 9, 2)]


JavascriptDateTestFunc = function (url, date) {
    // const url = 'https://goo.gl/MV8Tkh';
    // const date = new Date(2017, 6, 17);
    let promise = new Promise(function(resolve, reject){
        JavascriptDate.articleParserfunction(url).then(dateReturned => {
            
                // console.log(dateReturned);
                // console.log(dateReturned.published);
                if (date == null || dateReturned == null || dateReturned.published == null || dateReturned.published == ""){

                    if ((dateReturned == null) && (date == null)){
                        console.log("MATCHED! " + url)
                        // console.log(true)
                        resolve (true)
                    } else if ((dateReturned == null) && ( date == null)) {
                        console.log("MATCHED! " + url)
                        // console.log(true)
                        resolve (true)
                    } else if ( (dateReturned) && (dateReturned.published == null) && ( date == null)) {
                        console.log("MATCHED! " + url)
                        // console.log(true)
                        resolve (true)
                    } else if ( (dateReturned) && (dateReturned.published == "") && ( date == null)) {
                        console.log("MATCHED! " + url)
                        // console.log(true)
                        resolve (true)
                    } else {
                        let string = ""
                        string += "Not a match! " + url
                        if (dateReturned) {
                            string += " Date Returned: " + dateReturned.published;
                        } else  {
                            string += " Date Returned: " + dateReturned;

                        }
                        console.log(string + " Date Expected: " + date);
                        resolve (false)
                    }

                } else {
                    const date2 = new Date(dateReturned.published);
                    date.setHours(0,0,0,0)
                    date2.setHours(0,0,0,0)
                    let string = " Date Returned: " + date2;
                    string += " Date Expected: " + date;
                    // console.log(date2 === date);
                    let match = date2 === date
                    string += " Match? : " + match
                    console.log(string)
                    resolve (date2 === date);
                }
            });
            
        });

    return promise;
};


JavascriptDateTestPromise = function(){
    let list = []

    for (i = 0; i < urlsPlain.length; i++) {
        list.push(JavascriptDateTestFunc(urlsPlain[i], datesPlain[i]))

    };

    let promise = new Promise (function(resolve, reject) {
        Promise.all(list).then((values) => {
            console.log("VALUES")
            console.log(values)
            resolve(values)
        })
    })

    return promise


}


JavascriptDateTest = function() {
    JavascriptDateTestPromise().then((values) => {
        let matches = 0
        for (i=0; i < values.length; i++) {
            if (values[i]) {
                matches = matches + 1
            }
        }


        console.log("There are " + matches + " matches out of " + values.length +" urls.")



    })
}


JavascriptMetascrapperTestFunc = function(urls){
    let list = []
    
    for (i=0; i < urls.length; i++) {
        let targetUrl = urls[i]
        list.push(JavascriptDate.metascraperfunction(targetUrl))
    };

    let promise = new Promise (function(resolve, reject) {
        Promise.all(list).then((values) => {
            resolve(values)
        })
    })

    return promise
};

JavascriptMetascrapperTest = function(){
    JavascriptMetascrapperTestFunc(urls).then((values) => {
        console.log(values)
        let matches = 0

        for (i=0; i < urls.length; i++) {

            date1 = values[i].date
            date2 = dates[i]

            if (date1 === null || date2 === null) {
                if ((date1 == null) && (date2==null)) {
                    console.log("MATCHED! " + urls[i])
                    console.log("returned: " + values[i].date)
                    console.log("expected: " + dates[i])
                    matches = matches + 1
                } else {
                    console.log("Not a match! " + urls[i])
                    console.log("returned: " + values[i].date)
                    console.log("expected: " + dates[i])
                }
            } else {

                date1 = new Date(date1);

                if (date1.setHours(0,0,0,0) == date2.setHours(0,0,0,0)){
                    console.log("MATCHED! " + urls[i])
                    console.log("returned: " + date1)
                    console.log("expected: " + date2)
                    matches = matches + 1
                } else {
                    console.log("Not a match! " + urls[i])
                    console.log("returned: " + date1)
                    console.log("expected: " + date2)
                }

            }

        }

        console.log("There are " + matches + " matches out of " + urls.length +" urls.")

    });
}


// Automative Testing
JavascriptDateTest()
JavascriptMetascrapperTest()

// Manual Testing

// url1 = "https://www.cbc.ca/radio/thecurrent/the-current-for-oct-1-2020-1.5745953/made-in-america-how-trump-and-biden-s-rival-visions-for-economic-recovery-are-resonating-with-illinois-voters-1.5746657"

// JavascriptDate.articleParserfunction(url1).then(dateReturned => {
//     console.log(dateReturned)
// })
