const fs = require('fs');

let extFilter = (path, keyExt, callback) => {
  let foundFiles = [];

  fs.readdir(path, (err, buf) => {
    if (err) {
      return callback(err);
    } else {
      let fileList = buf.toString().split(',');
      for (let element of fileList) {
        if (element.split('.')[1] === keyExt) {
          foundFiles.push(element);
        }
      }
    }
    return callback(err, foundFiles);

    // return foundFiles;
  })
};


module.exports = extFilter;