const fs = require('fs');

let buf = fs.readFileSync(process.argv[2]);
let fileContents = buf.toString();

console.log(fileContents.split('\n').length - 1)