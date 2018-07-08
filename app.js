var express = require("express");
var path = require("path");
var http = require("http");
var app = express();
var routes = require("./routes");
var bodyParser = require("body-parser");

app.set("view engine", "pug");

app.use(function(req, res, next) {
    req.name = "Raninho";
    console.log("I am a custom middleware!");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
// app.get("/", function(req, res) {
//     res.send("Hello from ExpressJS " + req.name + "!");
// });
// app.get("/", function(req, res, next) {
//     next(new Error("Custom error"));
// });
app.get("/", function(req, res) {
    res.render("index", {
        message: "Hello world from template engine..."
    });
});
app.use("/hello", routes);
app.use("/public", express.static(path.join(__dirname, "public")));

app.use(function(err, req, res, next) {
    res.status(500)
       .json({
           message: "Something wrong happens..."
       });
});

// app.listen(3000, function() {
//     console.log("Express started!");
// });

http.createServer(app).listen(3000, function() {
    console.log("Express started on: localhost:3000.");    
});
