const express = require('express');
<<<<<<< HEAD
const UsuarioController = require('../controllers/UsuarioController');
const router = express.Router();

router.get('/', UsuarioController.new);
router.post('/', UsuarioController.create);
=======
const cadastroController = require('../controllers/cadastroController');
const router = express.Router();

router.get('/', cadastroController.index);

router.post('/', cadastroController.store);
>>>>>>> 0b3dbf7c68fb04d4b21227f001863c5dffd784fd

module.exports = router;