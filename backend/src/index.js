import http from 'http';
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('DeFi API');
});

if (process.env.NODE_ENV !== 'test') {
  server.listen(3000);
}

export default server;
