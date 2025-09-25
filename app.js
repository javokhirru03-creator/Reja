console.log("Running the web server");
const express = require("express");
const app = express();


// 1 Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session code

// 3 Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing

const fs = require("fs");
const path = require("path");
app.get("/author", function (req, res) {
  const filePath = path.join(__dirname, "database", "user.json");
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Xatolik yuz berdi");
    }
    const userdata = JSON.parse(data); 
    res.render("author", { user: userdata });
  });
});
// app.post("/create-item", (req, res) => {
//   console.log(req.body);
//   res.json({ test: "Success" });
// });
app.get("/", function (req, res) {
  res.render("rejalar");
});
module.exports = app;

