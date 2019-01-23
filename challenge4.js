const fs = require('fs');
let fileContents = undefined;

let lineFinder = () => {fs.readFile(process.argv[2], (err, data) => {
  if (err) {
    console.log(err);
  }

  fileContents = data.toString().split('\n').length - 1;
  console.log(fileContents);
})};

lineFinder();

