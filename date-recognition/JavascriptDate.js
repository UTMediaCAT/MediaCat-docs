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
  require('metascraper-url')(),
]);

const got = require('got');
module.exports = {
  articleParserfunction(url) {
    const promise = new Promise(function(resolve, reject) {
      extract(url).then( (article) => {
        return resolve(article);
      }).catch((err) => {
        console.log(err);
        return reject(err);
      });
    });
    return promise;
  },

  metascraperfunction(url) {
    const promise = new Promise(function(resolve, reject) {
      got(url).then((response) => {
        const {body: html, url} = response;
        metascraper({html, url}).then( (metadata) => {
          return resolve(metadata);
        });
      }).catch((err) => {
        console.log(err);
        return reject(err);
      });
    });
    return promise;
  },
};
