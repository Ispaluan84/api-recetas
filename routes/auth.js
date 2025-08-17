const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

//Registro de usuario

router.post('/register', authController.registerUser);

//Loginde Usuario

router.post('/login', authController.loginUser);

module.exports = router;