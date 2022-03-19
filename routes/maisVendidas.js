const express = require('express');
const maisVendidasController = require('../controllers/maisVendidasController');
const router = express.Router();

router.get('/', maisVendidasController.index);

module.exports = router;