const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello there, este es el servidor web de railway-chris");
});

server.listen(process.env.PORT || 3000);
