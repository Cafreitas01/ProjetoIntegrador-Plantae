const express = require('express');
const dicasEcuidadosController = require('../controllers/dicasEcuidadosController');
const router = express.Router();

router.get('/', dicasEcuidadosController.index);

module.exports = router;