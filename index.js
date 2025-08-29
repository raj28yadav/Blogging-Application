const express = require("express");
const mongoose = require("mongoose");
const cookieParser= require("cookie-parser");
const path = require("path");
const userRoute = require("./routes/user");
const { checkForAuthenticationCookie } = require("./middlewares/authentication");

const app = express();
const port = 8000;
mongoose.connect('mongodb://localhost:27017/blogify')
.then(() => {console.log("MongoDb connected")});

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));


app.get("/", (req, res) => {
    console.log(req.user);
    res.render("home", {
        user: req.user,
    });
})
app.use("/user", userRoute);


app.listen(port, () => {
    console.log("Server Started");
})