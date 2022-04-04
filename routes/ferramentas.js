const express = require('express');
const ferramentasController = require('../controllers/ferramentasController');
const router = express.Router();

router.get('/', ferramentasController.index);

module.exports = router;