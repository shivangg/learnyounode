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

(async () => {
  let data = await getData(process.argv[2]);
  console.log(data.length);
  console.log(data);
})();
