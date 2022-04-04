const express = require('express');
const entregaController = require('../controllers/entregaController');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.render('entrega');
});

module.exports = router;