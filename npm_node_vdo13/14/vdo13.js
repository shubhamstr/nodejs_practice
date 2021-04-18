const chalk = require("chalk");
const validator = require("validator");


console.log(chalk.blue("hello world"));
console.log(chalk.blue.italic("hello world"));
console.log(chalk.blue.underline("hello world"));
console.log(chalk.blue.underline.inverse("hello world"));
console.log(chalk.green.underline.inverse("success"));


const res = validator.isEmail("shubhamsutar5799@gmail.com");
console.log(res);
console.log(res ? chalk.green("success"):chalk.red("fail"));