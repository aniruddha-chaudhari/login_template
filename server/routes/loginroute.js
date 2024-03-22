const express = require('express');
const router = express.Router();
const { login, verifyToken } = require('../contoller/logincontroller');
const cors = require('cors');

router.use(cors());

router.post('/login', login);
router.get('/verifyToken', verifyToken); // Add this line

module.exports = router;