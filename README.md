# octocat-images
[![npm version](https://badge.fury.io/js/octocat-images.svg)](https://badge.fury.io/js/octocat-images)
[![Build Status](https://travis-ci.org/John-Lin/octocat-images.svg?branch=master)](https://travis-ci.org/John-Lin/octocat-images)

:octocat: Get octocat images name, number, url and even download images from [octodex.gituhb.com](octodex.gituhb.com)

![droctocat](./img/droctocat.png?raw=true "droctocat")

## Install

With [npm](https://www.npmjs.com/) do:

```sh
npm install octocat-images
```


## Example Usage

```javascript
'use strict';
let OctoCatCrawler = require('octocat-images');
let crawler = new OctoCatCrawler();

// List all octocat images
crawler.list((err, octocats) => {
  if (err) throw err;
  for (let octocat of octocats) {
    console.log(octocat.number, octocat.name, octocat.url);
    octocat.save('images');
  }
});

// Give you a random choice of octocat image
crawler.choice((err, octocat) => {
  console.log(octocat.number, octocat.name, octocat.url);
  octocat.save('images');
});
```

## APIs

### crawler.list(cb)
Return an array include all octocat instances.

`cb(err, octocats)` fires with the error or the `octocats` instances will be returned.

### crawler.choice(cb)
Return a random choice of octocat instance.

`cb(err, octocats)` fires with the error or the `octocats` instance will be returned.

### octocat.save(dir)
Save the images. The images directory `dir` is required.

## License
MIT © [Che-Wei Lin](https://github.com/John-Lin)
