const http = require('http');
const util = require('util');

const get = util.promisify(http.get);

// http.get(process.argv[2], (res) => {
//   res.setEncoding('utf8');
//   res.on('data', console.log);
//   res.on('error', console.error);
// }).on('error', console.error);

function getData(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      res.setEncoding('utf8');
      res.on('data', (data) => {
        console.log(data);
      });
      res.on('error', reject);
    }).on('error', reject);
  });
}

getData(process.argv[2])
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  })