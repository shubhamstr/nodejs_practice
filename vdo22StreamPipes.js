const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on('request',(req,res)=>{
    // using stream pipes
    const rstream = fs.createReadStream("vdo22.txt");
    rstream.pipe(res);
});

server.listen(8000,"127.0.0.1");