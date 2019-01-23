const fs = require('fs');
const util = require('util');

let extFilter = (path, keyExt, callback) => {
  let foundFiles = [];
  const readdir = util.promisify(fs.readdir);

  readdir(path)
    .then(buf => {
      let fileList = buf.toString().split(',');

      for (let element of fileList) {
        if (element.split('.')[1] === keyExt) {
          foundFiles.push(element);
        }
      }
      return callback(null, foundFiles);
    })
    .catch(err => {
      return callback(err);
    })
};


module.exports = extFilter;