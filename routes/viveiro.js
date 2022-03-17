const express = require('express');
const viveiroController = require('../controllers/viveiroController');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.render('viveiro');
});

module.exports = viveiroController;

