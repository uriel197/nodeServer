const fs = require('fs');
const os = require('os');

fs.readFile('./content/test.txt', 'utf8', (err, res) => {
    if(err) console.log(err);
    const first = res;
    fs.readFile('./content/subContent/test2.txt', 'utf8', (err, res) => {
        if(err) console.log(err);
        const scnd = res
        fs.writeFile('./content/new-async-file.txt', `this is a new concatenation: ${first}, ${scnd}`, (err, res) => {
            if(err) console.log(err);
            console.log(res);
        });
    })
});

console.log(__dirname);