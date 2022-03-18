const express = require('express');
const servicosController = require('../controllers/servicosController');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.render('servicos');
});

module.exports = router;
