import http from "http";

const server = http.createServer((req, res) =>{
    res.end("second practice")
});

server.listen (4004, () => {
    console.log("Server is up")
});

