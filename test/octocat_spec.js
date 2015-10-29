'use strict';
let OctoCatCrawler = require('../lib/octocat-crawler.js');
let OctoCat = require('../lib/octocat.js');
let fs = require('fs');
var should = require('should');

describe('OctoCatCrawler', function() {
  this.timeout(8000);
  describe('#list()', function() {
    it('should parse image without error', function(done) {
      let octocatObj = [];
      let crawler = new OctoCatCrawler();
      crawler.list((err, items) => {
        if (err) throw err;
        for (let item of items) {
          item.should.have.property('name');
          item.should.have.property('url');
          item.should.have.property('number');
        }

        items.should.have.length(123);
        done();
      });

    });
  });

  describe('#choice()', function() {
    it('should return a rand image without error', function(done) {
      let octocatObj = [];
      let crawler = new OctoCatCrawler();
      crawler.choice((err, items) => {
        if (err) throw err;
        items.should.have.property('name');
        items.should.have.property('url');
        items.should.have.property('number');
        done();
      });

    });
  });

});

describe('OctoCat', function() {
  describe('#save()', function() {
    it('should save image without error', function() {
      let filename = 'nyantocat.gif';
      let octocat = new OctoCat(
        '#47',
        'the Nyantocat',
        `http://octodex.gitub.com/images/${filename}`
      );
      octocat.save('images');

      after(function() {
        fs.unlinkSync(`images/${filename}`);
      });

    });
  });
});
