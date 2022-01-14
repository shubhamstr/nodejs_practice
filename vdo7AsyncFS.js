const fs = require("fs");

fs.writeFile('vdo7.txt','hello1', (err) => {
    console.log('created file');
    console.log(err);
});

fs.appendFile('vdo7.txt','shubham', (err) => {
    console.log('append file');
    console.log(err);
});

fs.readFile('vdo7.txt', 'utf-8', (err, data) => {
    console.log(data);
    console.log(err);
});