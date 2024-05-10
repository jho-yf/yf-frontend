const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Server2被调用...');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, Server 2!\n');
});

server.listen(3001, () => {
    console.log('Server1 listening on port 3001');
});