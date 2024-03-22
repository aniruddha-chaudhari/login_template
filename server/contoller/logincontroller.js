const auth = require('../services/login');
const jwt = require('jsonwebtoken');

async function login(req, res) {
    try {
        const userData = req.body;
        const token = await auth.loginUser(userData.username, userData.password);
        res.json({token: token});
    } catch (error) {
        console.log(error);
        res.status(401).json({message: "invalid credentials"});
    }
}

async function verifyToken(req, res) {
    // Assuming the token is sent in the 'Authorization' header
    const token = req.headers.authorization?.split(' ')[1];
  
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // Assuming the user information is stored in the 'data' field of the token payload
      const { username, email } = decoded.data;
      res.json({ username, email });
    } catch (err) {
      res.status(403).json({ message: 'Invalid token' });
    }
  }


module.exports = {
    login,
    verifyToken
}