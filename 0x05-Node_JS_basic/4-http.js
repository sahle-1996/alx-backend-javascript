const http = require('http');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});

const port = 1245;
const hostname = 'localhost';

app.listen(port, hostname, () => {
  // Server is running
});

module.exports = app;
