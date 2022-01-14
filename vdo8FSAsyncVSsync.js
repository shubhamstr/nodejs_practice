const fs = require("fs");

// synchronous
// const file = fs.readFileSync('vdo7.txt', 'utf-8');
// console.log(file);
// console.log('after data');


// asynchronous
fs.readFile('vdo7.txt', 'utf-8', (err, data) => {
    console.log(data);
});
console.log('after data');
