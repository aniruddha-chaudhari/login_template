const User = require('../models/users');
const bcrypt = require('bcrypt');

async function createUser(username, email, password) {
    console.log('Arguments:', username, email, password);
    const hashedPassword = await bcrypt.hash(password, 10);
    const createduser = new User({
        username: username,
        email: email,
        password: hashedPassword
    });

    const savedUser = await createduser.save();
    return savedUser;
}
module.exports = {createUser};