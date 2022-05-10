const express = require('express');
const loginController = require('../controllers/LoginController');
const router = express.Router();

router.get('/', loginController.index);
router.post('/', loginController.authenticate);
router.post('/google', loginController.authGoogle);

module.exports = router;
