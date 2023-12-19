const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.end(`
        <h1>Welcome to our home page</h1>
        <a href="/about">About</a>`);
    } else if(req.url === "/about") {
        res.end(`
        <h1>All about us</h1>
        <a href="/">Home</a>`);
    } else {
        res.end(`
        <h1>Ooops! we cant find that page</h1>
        <a href="/">Home</a>`);
    }
})

server.listen(5000, () => {
    console.log('server listening on port 5000');
});