const http = require("http"); 

const server = http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url == "/"){
        res.end('hello from home side shubham');
    }else if(req.url == "/about"){
        res.end('hello from about side shubham');
    }else if(req.url == "/contact"){
        res.end('hello from contact side shubham');
    }else {
        res.writeHead(404,{"content-type":"text/html"});
        res.end("<h1>404 error</h1>");
    }
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the port 8000");
});