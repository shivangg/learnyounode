const http = require('http');
const streamTf = require('through2-map');

const port = process.argv[2];

const server = http.createServer((req, res) => {
  if (req.method !== 'POST') {
    return res.end('Send me POST requests!');
  }
  req.pipe(streamTf(dataChunk => {
    // console.log(dataChunk);
    return dataChunk.toString().toUpperCase();
  })).pipe(res);
});

server.listen(port);