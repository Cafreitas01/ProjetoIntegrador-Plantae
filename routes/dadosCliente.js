const express = require('express');
const dadosClienteController = require('../controllers/dadosClienteController');
const router = express.Router();

router.get('/', dadosClienteController.index);

module.exports = router;
