const fs = require('fs');


let dirLister = () => {
  fs.readdir(process.argv[2], (err, data) => {
    if (err) {
      console.log(err);
    }
    let files = data.toString().split(',');
    let filteredList = [];

    let keyExt = process.argv[3];
    for(let file of files) {
      let fileExtension = file.split('.')[1]
      if (fileExtension === keyExt) {
        filteredList.push(file);
      }
    }

    for(let file of filteredList){
      console.log(file);
    }
  })
}


dirLister();