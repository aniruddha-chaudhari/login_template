const jwt = require('jsonwebtoken');
const{secretkey} = require('../configuration/jwtConfig');

function genrateToken(user){
    const payload = {
        username: user.username,
        email: user.email
    }
    const token = jwt.sign(payload,secretkey,{expiresIn: '1h'});
    return token
}

module.exports = {genrateToken}