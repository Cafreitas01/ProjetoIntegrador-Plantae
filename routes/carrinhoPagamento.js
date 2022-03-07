var express = require("express");
var router = express.Router();
var carrinhoPagamentoController = require("../controllers/carrinhoPagamentoController");

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("carrinhoPagamento", { title: "express" });
});


router.get("/carrinhoPagamento", carrinhoPagamentoController.carrinhoPagamento);

module.exports = router;