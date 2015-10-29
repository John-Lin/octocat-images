// var parseImage = function(callback) {
//   request(URL, (err, response, html) => {
//     if (!err && response.statusCode === 200) {
//       var imgs = [];
//       var imgObj = {};
//       var $ = cheerio.load(html);
//       var imgTag = $('a.preview-image > img');
//       var numberTag = $('p.number');
//
//       for (var i = 0; i < imgTag.length; i++) {
//         imgObj.name = imgTag[i].attribs.alt;
//         imgObj.url = `${URL}${imgTag[i].attribs['data-src']}`;
//
//         // clone an object push into array
//         imgs.push(JSON.parse(JSON.stringify(imgObj)));
//       }
//
//       callback(null, imgs);
//     } else {
//       callback(err);
//     }
//   });
// };

var saveImage = function(url) {
  var splitUrl = url.split('/');
  var filename = splitUrl[splitUrl.length - 1];
  request(url).pipe(fs.createWriteStream(`images/${filename}`));
};

// parseImage((err, images) => {
//   for (i of images) {
//     console.log(i.url);
//     saveImage(i.url);
//   }
// });
