const express = require('express');
const minhaContaController = require('../controllers/minhaContaController');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.render('minhaConta');
});

module.exports = router;