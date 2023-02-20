const express = require('express');
const AuthController = require('../controllers/auth.controller');
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware');

router.post('/signin', AuthController.signin);
router.post('/signup', AuthController.signup);
router.post('/user', authMiddleware ,AuthController.getUser);
router.post('/forgot-password', AuthController.forgotPassword);
router.post('/reset-password/:id', AuthController.resetPassword);

module.exports = router;