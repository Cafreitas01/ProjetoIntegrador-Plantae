const express = require('express');
const pagamentoController = require('../controllers/pagamentoController');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.render('pagamento');
});

module.exports = router;

