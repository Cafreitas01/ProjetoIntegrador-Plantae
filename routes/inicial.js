const express = require('express');
const inicialController = require('../controllers/inicialController');
const router = express.Router();

router.get('/', inicialController.index);

module.exports = router;