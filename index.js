
const express = require("express");
const app = express();
// const mongoose = require("mongoose");
// const Listing = require("./models/listing.js");
const path = require("path");
// const methodOverride = require("method-override");
const ejsMAte = require("ejs-mate");
engine = require('ejs-mate');




// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

// main()
//   .then(() => {
//     console.log("connected to DB");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));

// use ejs-locals for all ejs templates:
app.engine('ejs', engine);

//main routh
app.get("/home",  (req, res) => {
    // const allListings = await Listing.find({});
    res.render("Pags/home.ejs");
  });

app.get("/new",  (req, res) => {
    // const allListings = await Listing.find({});
    res.render("Pags/new.ejs");
});

app.get("/", (req, res) => {
    res.send("Hi, I am root");
});

app.listen( 3000 , (res,req) => {
    console.log("listening to  30000")
})