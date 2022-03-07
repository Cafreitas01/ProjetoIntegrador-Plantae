var express = require("express");
var router = express.Router();
var carrinhoDadosClienteController = require("../controllers/carrinhoDadosClienteController");

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("carrinhoDadosCliente", { title: "express" });
});


router.get("/carrinhoDadosCliente", carrinhoDadosClienteController.carrinhoDadosCliente);

module.exports = router;