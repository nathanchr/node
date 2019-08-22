const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log('Req being made ' + req.url);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    let myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    myReadStream.pipe(res);
    // res.send('Server response');
});

server.listen(3000, '127.0.0.1');
