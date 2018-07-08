var express = require("express");
var router = express.Router();

router.use(function(req, res, next) {
    console.log("I am a router custom middleware!");
    next();
});

router.get("/", function(req, res) {
    res.json({
        message: "Hello world"
    });
});

router.get("/a?r", function(req, res) {
    res.send("router a?r");
});

router.get("/b+r", function(req, res) {
    res.send("router b+r");
});

router.get("/c*r", function(req, res) {
    res.send("router c*r");
});

router.get("/params/:name", function(req, res) {
    res.json({
        params: req.params,
        host: req.hostname,
        headers: req.headers
    });
});

router.post("/body", function(req, res) {
    res.json(req.body);
});

router.get("/res", function(req, res) {
    res.status(202).json({
        name: 'Leonan',
        lastname: 'Pontes'
    });
});

// router.get("/render", function(req, res) {
//     res.render('index', {

//     });
// });

module.exports = router;