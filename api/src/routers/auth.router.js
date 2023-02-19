const express = require('express');
const AuthController = require('../controllers/auth.controller');
const router = express.Router();

router.post('/signin', AuthController.signin);
router.post('/signup', AuthController.signup);
router.get('/tokens', AuthController.getAllToken);
router.post('/forgot-password', AuthController.createToken);
router.delete('/forgot-password/:id', AuthController.deleteToken);

module.exports = router;