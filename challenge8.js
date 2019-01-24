const http = require('http');
const bl = require('bl');

function getData(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      res.pipe(bl((err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data.toString());
      }))
    });
  })
}

getData(process.argv[2])
  .then( data => {
    console.log(data.length);
    console.log(data);
  })
  .catch( err => {
    console.error(err);
  } )