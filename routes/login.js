const express = require('express');
const loginController = require('../controllers/loginController');
const router = express.Router();

router.get('/', loginController.index);
router.post('/', LoginController.authenticate);
router.post('/google', LoginController.authGoogle);

module.exports = router;
