const express = require('express');

const UsuarioController = require('../controllers/UsuarioController');
const router = express.Router();

router.get('/', UsuarioController.new);
router.post('/', UsuarioController.create);

const cadastroController = require('../controllers/cadastroController');
const router = express.Router();

router.get('/', cadastroController.index);

router.post('/', cadastroController.store);


module.exports = router;