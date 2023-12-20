const os = require('os');
const fs = require('fs');
const path = require('path');
const add = require('./2-secndMod.js');
const { num1, num2 } = require('./3-variables.js');

const first = fs.readFileSync('./content/test.txt', 'utf8');
const scnd = fs.readFileSync('./content/subContent/test2.txt', 'utf8');
fs.writeFileSync('./content/newFile.txt/', `Concatenating the following files: ${first} and ${scnd}`);
console.log(first, scnd);

console.log(__dirname);
console.log(add(num1, num2));
// console.log(module);
const user = os.type();
console.log(user);
console.log(path.sep);