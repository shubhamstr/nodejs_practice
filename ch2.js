const fs = require("fs");

// fs.mkdir('thapa',function(){
//     console.log("folder created");
// });

// fs.writeFile('thapa/bio.txt','hello',function(){
//     console.log("file created");
// })

// fs.appendFile('thapa/bio.txt','shubham',function(){
//     console.log("file modified");
// })

// fs.readFile('thapa/bio.txt',function(err,data){
//     console.log('file read');
//     console.log(err);
//     console.log(data);
// })


// fs.readFile('thapa/bio.txt','utf-8',function(err,data){
//         console.log('file read2');
//     console.log(err);
//     console.log(data);
//     })

// fs.rename("thapa/bio.txt","thapa/mybio.txt",function(){
//     console.log("file modified");
// })

// fs.unlink("thapa/mybio.txt",function(){
//     console.log('file deleted');
// })

fs.rmdir("thapa",function(){
    console.log("folder deleted");
})
