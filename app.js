console.log("Running the web server");
const express = require("express");
const app = express();

//Mongo db chaqirish

const db = require("./server").db("reja");
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
app.post("/create-item", (req, res) => {
  console.log(`user entered /create-item`);
  console.log("req.body.reja", req.body.reja);
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    if (err) {
      console.log(err);
      res.end("something went error");
    } else {
      res.end("sucsesfully");
    }
  });
});
app.get("/", function (req, res) {
  console.log(`user entered /`);
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("something went wrong");
      } else {
        console.log(data);
        res.render("rejalar", { items: data });
      }
    });
});
module.exports = app;
