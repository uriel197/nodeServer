const { writeFileSync, createReadStream } = require('fs');
const http = require('http');
// stream.on('data', (chunk) => {
//     console.log(chunk);
// });
// stream.on('err', (err) => console.log(err));

// to create a big file:
// for(let i = 1; i < 10000; i++) {
//     writeFileSync('./content/bigFile.txt', `Hello world ${i}\n`)
// }

const server = http.createServer((req, res) => {
    const stream = createReadStream('./content/bigFile.txt');
    stream.on('open', () => {
        stream.pipe(res);
    })
    stream.on('error', (err) => {
        res.end(err)
    });
})

server.listen(3000, () => console.log('listening on port 3000'));
