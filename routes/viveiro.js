
var express = require("express");
var router = express.Router();
var viveiroController = require("../controllers/viveiroController");

router.get("/", function (req, res) {
    res.render("viveiro", { title: "express" });
});

module.exports = router;