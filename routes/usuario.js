const express = require('express');
const cadastroController = require('../controllers/cadastroController');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.render('cadastro');
});

module.exports = router;
