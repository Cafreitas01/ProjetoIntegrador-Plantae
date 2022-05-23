const express = require('express');
const UsuarioController = require('../controllers/UsuarioController');
const router = express.Router();

router.get('/', UsuarioController.new);
router.post('/', UsuarioController.create);

module.exports = router;