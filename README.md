# octocat-images
[![npm version](https://badge.fury.io/js/octocat-images.svg)](https://badge.fury.io/js/octocat-images)
[![Build Status](https://travis-ci.org/John-Lin/octocat-images.svg?branch=master)](https://travis-ci.org/John-Lin/octocat-images)

Get or save image from [octodex.gituhb.com](octodex.gituhb.com).

![droctocat](./img/droctocat.png?raw=true "droctocat")

## Example Usage

```javascript
'use strict';
let OctoCatCrawler = require('octocat-images');
let crawler = new OctoCatCrawler();

crawler.list((err, octocats) => {
  if (err) throw err;
  for (let octocat of octocats) {
    console.log(octocat.url, octocat.name);
    octocat.save('images');
  }
});

crawler.choice((err, octocat) => {
  console.log(octocat.url, octocat.name); octocat.save('images');
});
```
