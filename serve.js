p = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/') {
        res.write('<html> Form </html>');
        res.write(<body> <form method="post" action="/process" > <input name="message" ></input></form></body>);
        res.end();
    } else if(req.url === "/process" && method=== "POST"){
        const body = [];
        req.on('data', (chunk) => {
        body.push(chunk);
    });
    req.on('end', () => {
        console.log('stream finished');
        const parseBody = Buffer.concat(body).toString();
        console.log(parseBody);
        res.write('Thank YOu for submiting');
        res.end();

    });
    } else {

    };
server.listen(3000);
    console.log('listening on post 3000')



//     git remote add origin https://github.com/RubelMehmed/anode.git
// git branch -M main
// git push -u origin main


//git push --set-upstream origin server
})