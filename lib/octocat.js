'use strict';
var request = require('request');
var fs = require('fs');
var mkdirp = require('mkdirp');

class OctoCat {
    constructor(name, url) {
      this.name = name || null;
      this.url = url || null;
    }

    save(dir) {
      let folder = dir || 'images';
      let splitUrl = this.url.split('/');
      let filename = splitUrl[splitUrl.length - 1];
      mkdirp.sync(folder);
      request
        .get(this.url)
        .on('response', function(response) {
          if (response.statusCode === 404) {
            throw(new Error('Page not found!'));
          }
        })
        .on('error', function(err) {
          throw(err);
        })
        .pipe(fs.createWriteStream(`${folder}/${filename}`));
    };

}

module.exports = OctoCat;
