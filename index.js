const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const userRoute = require("./routes/user");

const app = express();
const port = 8000;

app.use(express.urlencoded({extended: false}));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/blogify')
.then(() => {console.log("MongoDb connected")});

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/", (req, res) => {
    res.render("home");
})
app.use("/user", userRoute);


app.listen(port, () => {
    console.log("Server Started");
})