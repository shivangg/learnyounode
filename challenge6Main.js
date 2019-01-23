const extFilter = require('./challenge6Module');

let printer = (err, list) => {
  if (err) {
    console.log(err);

  }
  for(let elem of list) {
    console.log(elem);
  }
};

extFilter(process.argv[2], process.argv[3], printer);