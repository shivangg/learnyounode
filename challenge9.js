const http = require('http');
const bl = require('bl');

let urls = process.argv.slice(2);

let getData = (url) => {
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      res.pipe(bl((err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data.toString());
      }))
    })
  })
}

(async () => {
    let dataList = [];
    for (let url of urls){
      let data = undefined;
      try {
        data = await getData(url);
      } catch (err) {
        console.log(err);
      }
      dataList.push(data);
    }

    for(let data of dataList) {
      console.log(data);
    }
  }
)();