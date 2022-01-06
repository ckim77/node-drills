const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Hello World");
});

server.listen(4004, () => {
    console.log("Server is up")
});

