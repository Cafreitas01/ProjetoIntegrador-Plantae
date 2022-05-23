const express = require('express');
const agradecimentoController = require('../controllers/agradecimentoController')
const router = express.Router();

router.get('/', agradecimentoController.index);

module.exports = router;