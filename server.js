const http = require("http");
const mongodb = require("mongodb");

///////
let db;
const connectionString =
  "mongodb+srv://javokhirru03_db_user:PFk7H7cLdNvvLJtR@nick.d4pxyzy.mongodb.net/";
mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("error");
    else {
      console.log("databesega ulandi");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3001;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on PORT: http://localhost:${PORT}`
        );
      });
    }
  }
);
