var express = require("express");
var router = express.Router();
var inicialController = require("../controllers/inicialController");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", {title: "express"});
});


router.get("/inicial", inicialController.index);

module.exports = router;

