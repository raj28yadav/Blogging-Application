const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/", (req, res) => {
    res.render("home");
})

const port = 8000;

app.listen(port, () => {
    console.log("Server Started");
})