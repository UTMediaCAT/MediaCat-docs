const {extract} = require('article-parser');
const metascraper = require('metascraper')([
    require('metascraper-author')(),
    require('metascraper-date')(),
    require('metascraper-description')(),
    require('metascraper-image')(),
    require('metascraper-logo')(),
    require('metascraper-clearbit')(),
    require('metascraper-publisher')(),
    require('metascraper-title')(),
    require('metascraper-url')()
  ])

const got = require('got')
    
    module.exports = {
        articleParserfunction(url){
            let promise = new Promise(function(resolve, reject){
                extract(url).then((article) => {
                    // console.log(article);
                    return resolve(article);
                }).catch((err) => {
                    console.log(err);
                    return reject(err);
                });
            });
            return promise;
        }, 

        metascraperfunction(url){
            let promise = new Promise(function(resolve, reject){
                got(url).then( response => {
                    const { body : html, url}  = response 
                    metascraper({html, url}).then( metadata => {
                        return resolve(metadata)
                    })
                }).catch((err) => {
                    console.log(err);
                    return reject(err);
                });
            });
            return promise
        }

    };




    

    // articleParserfunction = function(url, callback) {
    //     // const url = 'https://goo.gl/MV8Tkh';
    //     const date = new Date(2017, 6, 17);
    //     extract(url).then((article) => {
    //     // console.log(article);
    //     callback(article, date)
    //     }).catch((err) => {
    //     console.log(err);
    //     return None
    //     })
    // };


    // async function getarticleParserfunction(url){
    //     return articleParserfunction(url)
    // }
    
    // JavascriptDateTest = function () {
    //     const url = 'https://goo.gl/MV8Tkh';




    //     let promise = (date)


    //     let callback = function(dateReturned, date){
    //         console.log(dateReturned);
    //         console.log(date);
    //         console.log(dateReturned == date);
    //     };
    
    //     articleParserfunction(url, callback)
    // };
    
    
    // JavascriptDateTest();