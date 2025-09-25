const http = require("http");
const app  = require("./app")
const server = http.createServer(app);
let PORT = 3001;

server.listen(PORT, function () {
  console.log(
    `The server is running successfully on PORT: http://localhost:${PORT}`);
});