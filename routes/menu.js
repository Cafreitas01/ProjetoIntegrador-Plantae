const express = require('express');
const menuController = require('../controllers/menuController');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.render('menu');
});

module.exports = router;