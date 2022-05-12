const express = require('express');
const RegistroController = require('../controllers/RegistroController');
const router = express.Router();

router.get('/', RegistroController.new);
router.post('/', RegistroController.create);

module.exports = router;