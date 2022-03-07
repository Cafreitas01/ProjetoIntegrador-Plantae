var express = require("express");
var router = express.Router();
var carrinhoProdutoController = require("../controllers/carrinhoProdutoController");

/* GET home page. */
router.get("/carrinhoProduto", function (req, res, next) {
    res.render("carrinhoProduto", { title: "express" });
});


router.get("/carrinhoProduto", carrinhoProdutoController.carrinhoProduto);

module.exports = router;