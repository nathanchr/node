const http = require('http');
const fs = require('fs');

let myReadStream = fs.createReadStream(__dirname + '/readme.txt');
let myWriteStream = fs.createWriteStream(__dirname + '/output.txt');

myReadStream.on('data', chunk => {
    console.log(chunk);
    myWriteStream.write(chunk);
})