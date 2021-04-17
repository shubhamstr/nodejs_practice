// PATH MODULES
const path = require("path");


console.log(path.dirname("D:\nodejs\vdo11.js"));
console.log(path.extname("D:\nodejs\vdo11.js"));
console.log(path.basename("D:\nodejs\vdo11.js"));
console.log(path.parse("D:\nodejs\vdo11.js"));


const parse = path.parse("D:\nodejs\vdo11.js");
console.log(parse.name);