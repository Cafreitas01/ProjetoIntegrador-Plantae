const express = require('express');
const terrariosController = require('../controllers/terrariosController');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.render('terrarios');
});

module.exports = router;