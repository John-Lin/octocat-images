# octocat-images

## Example Usage

```javascript
'use strict';
let OctoCatCrawler = require('./lib/octocat-crawler.js');
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
