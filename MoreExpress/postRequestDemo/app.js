var express = require("express");
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.set("view engine", "ejs");

var friends = ["Marko", "Darko", "Zarko", "Jova", "Marko"];


app.get("/", function (req, res) {
    res.render("home");
});

app.post("/addfriend", function(req, res) {
    var newFriend = req.body.newFriend;
    friends.push(newFriend);
    console.log(friends);
    res.redirect("/friends");
});

app.get("/friends", function(req, res) {
    res.render("friends", {friends: friends});
});


app.listen(3000, function () {
    console.log("SERVER STARTED...")
});