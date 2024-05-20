const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Server1被调用...');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, Server 1!\n');
});

server.listen(3000, () => {
    console.log('Server1 listening on port 3000');
});