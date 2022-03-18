const express = require('express');
const usersController = require('../controllers/usersController');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.render('users');
});

module.exports = router;
