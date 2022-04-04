const express = require('express');
const carrinhoController = require('../controllers/carrinhoController');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.render('carrinho');
});

module.exports = router;
