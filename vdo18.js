const fs = require("fs");

const bioData = {
    name : "shubham",
    age : 21,
    channel : "shubham tech"
};
console.log(bioData.channel);

// const json1 = JSON.stringify(bioData);
// console.log(json1);


// const object = JSON.parse(json1);
// console.log(object)

// const json = JSON.stringify(bioData);
// fs.writeFile('biodata.json',json,(err)=>{
//     console.log(err);
// })

fs.readFile('biodata.json',"utf-8",(err,data)=>{
    console.log(data);
    const d = JSON.parse(data);
    console.log(d);
})









