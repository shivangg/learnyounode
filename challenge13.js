const http = require('http');
const url = require('url');

let server = http.createServer((req, res) => {
  reqData = url.parse(req.url, true);
  res.writeHead(200, {
    'content-type': 'application/json'
  });
  let iso = reqData.query.iso;
  let date = new Date(iso);
  let payload = {};

  if (reqData.pathname === '/api/parsetime') {
    payload = {
      "hour": date.getHours(),
      "minute": date.getMinutes() ,
      "second": date.getSeconds()
    }
  } else if (reqData.pathname === '/api/unixtime') {
    payload = {
      "unixtime": date.getTime()
    }
  }

  res.end(JSON.stringify(payload));
});

server.listen(process.argv[2])