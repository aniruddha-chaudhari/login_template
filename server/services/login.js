 const bcrypt = require('bcrypt');
 const user = require('../models/users');
 const {genrateToken} = require('../utils/jwtUtils');

 async function loginUser(username, password) {
    console.log('Arguments:', username,password);
   try{
      const existingUser = await user.findOne({username: username});
      if(!existingUser) {
          throw new Error("user not found");
      }
      const isPasswordMatch = await bcrypt.compare(password, existingUser.password);
if (!isPasswordMatch) {
    throw new Error("Invalid password");
     }
     const token = genrateToken(existingUser);
     return token;
   }
   catch(error) {
    throw new Error("Invalid credentials");
    }
}

module.exports = {
    loginUser
}
   