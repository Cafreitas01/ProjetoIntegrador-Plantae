var express = require("express");
var router = express.Router();
var terrariosController = require("../controllers/terrariosController");

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("terrarios", { title: "express" });
});


router.get("/terrarios", terrariosController.terrarios);

module.exports = router;