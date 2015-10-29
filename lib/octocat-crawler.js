'use strict';
var request = require('request');
var cheerio = require('cheerio');
var OctoCat = require('./octocat.js');

class OctoCatCrawler {
    constructor() {
      this.URL = 'http://octodex.github.com';
    }

    list(callback) {
      request(this.URL, (err, response, html) => {
        if (!err && response.statusCode === 200) {
          var $ = cheerio.load(html);
          let imgTag = $('a.preview-image > img');
          let ret = [];

          // var numberTag = $('p.number');

          for (let i = 0; i < imgTag.length; i++) {
            let oc = new OctoCat(
              imgTag[i].attribs.alt,
              `${this.URL}${imgTag[i].attribs['data-src']}`
            );
            ret.push(oc);
          }

          callback(null, ret);

        } else {
          callback(err);
        }
      });
    }

    choice(callback) {
      this.list((err, items) => {
        let rand = items[Math.floor(Math.random() * items.length)];
        if (rand) {
          callback(null, rand);
        } else {
          throw(new Error('No image!'));
        }

      });
    }
}

module.exports = OctoCatCrawler;
