const express = require('express');
const checkoutController = require('../controllers/checkoutController');
const router = express.Router();

router.get('/', checkoutController.index);

module.exports = router;