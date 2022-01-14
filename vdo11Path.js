// PATH MODULES
const path = require("path");


console.log(path.dirname("C:/xampp/htdocs/learn/nodejs_practice/vdo11Path.js"));
console.log(path.extname("C:/xampp/htdocs/learn/nodejs_practice/vdo11Path.js"));
console.log(path.basename("C:/xampp/htdocs/learn/nodejs_practice/vdo11Path.js"));
console.log(path.parse("C:/xampp/htdocs/learn/nodejs_practice/vdo11Path.js"));


const parse = path.parse("C:/xampp/htdocs/learn/nodejs_practice/vdo11Path.js");
console.log(parse.name);