const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on('request',(req,res)=>{
    // fs.readFile("vdo21.txt",(err,data)=>{
    //     if(err)return console.error(err);
    //     res.end(data.toString());
    // });

    // // using streams and buffer
    // const rstream = fs.createReadStream("vdo21.txt");
    // rstream.on("data",(chunkdata) => {
    //     res.write(chunkdata);
    // });

    // rstream.on("end",()=>{
    //     res.end();
    // });

    // rstream.on("error",()=>{
    //     console.log(err);
    //     res.end("file not found");
    // });

    // using stream pipes
    // const rstream = fs.createReadStream("input.txt");
    // rstream.pipe(res);
});

server.listen(8000,"127.0.0.1");