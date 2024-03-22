const express = require('express');
const router = express.Router();
const signupcontroller = require('../contoller/signupcontroller');



router.post('/signup',signupcontroller.createduser)
module.exports = router