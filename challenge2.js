// let first = parseInt(process.argv[2], 10);

let sum = 0;

for( let num of process.argv.slice(2) ) {
  sum += Number(num);
}

console.log(sum);
