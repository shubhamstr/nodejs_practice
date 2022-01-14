// OS MODULES
const os = require("os");

console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());


const freememory = os.freemem();
console.log(freememory); //bytes value
console.log(`${freememory/1024/1024/1024}`); // GB value


const freememory2 = os.totalmem();
console.log(freememory2); //bytes value
console.log(`${freememory2/1024/1024/1024}`); // GB value