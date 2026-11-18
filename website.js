const http = require('http');
const fs = require('fs');
const port = process.env.port ||3000;

const server = http.createServer((req,res)=>{
    console.log(req);
    res.setHeader('Content-Type','text/html');
    if (req.url == '/'){
    res.end('<h1>This is Suhani</h1><p>Welcome to this page</p>');
    res.statusCode = 200;
    }
    else if (req.url == '/about'){
    res.end('<h1>Hello Friends!</h1><p>Welcome to this page</p>');
    res.statusCode = 200;
    }
     else if (req.url == '/hello'){
    res.statusCode = 200;
    const data = fs.readFileSync('index.html');
    res.end(data.toString())

    }
    else{
    res.statusCode = 404;
    res.end('<h1>Not Found!</h1><p>This page is not found.</p>');

    }

})
server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})