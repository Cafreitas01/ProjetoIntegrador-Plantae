
var express = require("express");
var router = express.Router();
var viveiroController = require("../controllers/viveiroController");

/* GET home page. */
router.get("/", function (req, res) {
    res.render("viveiro", { title: "express" });
});

module.exports = router;