var express = require('express');
var app = express();

app.get("/", function (req, res) {
    res.send("Hi there!");
});

app.get("/bye", function (req, res) {
    res.send("Bye there!");    
});

app.get("/dog", function (req, res) {
        console.log("SOMEONE HAS MADE REQUEST TO /DOG!!!")
    res.send("MEOW!");
})

app.get("/r/:subredditName", function (req, res) {
        var subreddit = req.params.subredditName;
    res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT!");    
});

app.get("/r/:subredditName/comments/:id/:title/", function (req, res) {
    console.log(req.params);
    res.send("WELCOME TO COMMENTS PAGE!!") 
});

// app.get("/r/subredditName/comments/id/title/")

app.get("*", function (req, res){
    res.send("YOU ARE A STAR!!!");
});

app.listen(3000, function () {
    console.log("Server has started!!!")
});