const net = require('net');
let data = "";
let server = net.createServer((socket) => {

  let zeroPadder = (strNum) => {
    return (strNum.length < 2) ? (0 + strNum) : strNum;
  }

  let date = new Date();
  data = date.getFullYear() + "-" + zeroPadder(String(Number(date.getMonth() + 1)))
  +"-" + zeroPadder(date.getDate())
  +" " + zeroPadder(date.getHours())
  +":" + zeroPadder(date.getMinutes());

  socket.end(data + '\n');
});

server.listen(process.argv[2]);