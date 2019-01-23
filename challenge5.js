const fs = require('fs');
const util = require('util');

const readdir = util.promisify(fs.readdir);

readdir(process.argv[2])
  .then(data => {
    let files = data.toString().split(',');
    let filteredList = [];

    let keyExt = process.argv[3];
    for (let file of files) {
      let fileExtension = file.split('.')[1]
      if (fileExtension === keyExt) {
        filteredList.push(file);
      }
    }

    for (let file of filteredList) {
      console.log(file);
    }
  })
  .catch(err => {
    console.error(err);
  });