const express = require('express');
const produtoEscolhidoController = require('../controllers/produtoEscolhidoController');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.render('produtoEscolhido');
});

module.exports = router;
