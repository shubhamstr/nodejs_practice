const http = require("http"); 
const fs = require( "fs"); 

const server = http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url == "/"){
        res.end('hello from other side shubham');
    }else if(req.url == "/about"){
        res.end('hello from about side shubham');
    }else if(req.url == "/userapi"){
        fs.readFile(`${__dirname}/data.json`,"utf-8",(err,data)=>{
            console.log(data);
            res.end(data);
        });
    }else {
        res.writeHead(404,{"content-type":"text/html"});
        res.end("<h1>404 error</h1>");
    }
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the port 8000");
});