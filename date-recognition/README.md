
# data-recognition
This folder contains test scripts that was used to determine the performance of the Metascraper library in comparison to others (i.e. article-parser) 
To run the test script do:

`npm install`

1. either comment out `javascriptDateTest();` or `javascriptMetascrapperTest();` at the end of the script of `JavascriptDateTest.js` under Automative Testing
OR
2. uncomment anything underneath Manual Testing if you are going to test a few urls.

`node JavascriptDateTest.js` to run the script.

The function `javascriptDateTest()` tests the dates the article-parser returns

The function `javascriptMetascrapperTest()` tests the dates the Metascraper returns

# JavascriptDateTest.js

## params
### constants
`urlsJavascriptDateTest` the urls that the `javascriptDateTest();` will test

`datesJavascriptDateTest` the hard coded dates that `javascriptDateTest();` will use to compare it's results to

`urlsJavascriptMetascrapperTest` the urls that the `javascriptMetascrapperTest();` will test

`datesJavascriptMetascrapperTest` the hard coded dates that `javascriptMetascrapperTest()` will use to compare it's results to

# PythonDateTest.js

Similar to the javascript tests, python libraries were also tested. Compares articleDateExtractor with dateGuessor.

simply run `python3 PythonDateTest.py`

## params

### constants
`urls` constant is the list of urls you would like to test

`dates` constant is the list of dates you would like to compare with



