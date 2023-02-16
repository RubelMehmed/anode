const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('<html><h1 style="color:blue">This is my first pure NodeJs S        erver </h1></html>');

    } else if (req.url === '/About')  {
        res.write('<html><h1 style="color:blue">This is about us page for the project i show  </h1></html>');
    }
 
  res.end();
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



// res.writeHead(200, {'Content-Type': 'text/plain'});
