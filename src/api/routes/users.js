const express = require('express');
const router = express.Router();

// getting all methods from controller
const {
  signUp,
  login
} = require('../controllers/users');


router.post('/signup' , signUp);
router.post('/login' , login);


module.exports = router;
