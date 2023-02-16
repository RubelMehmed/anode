const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const myReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`, 'utf-8');
    myReadStream.pipe(res);

});
server.listen(3000);
console.log('listening on port 3000');


// myReadStream.on('data', (chunk) => {
//     console.log(chunk);
//     console.log(chunk.toString());
  
// });