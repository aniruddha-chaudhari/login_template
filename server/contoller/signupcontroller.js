const userService = require('../services/signup');

async function createduser(req, res) {
    try {
        const userData = req.body;
        const user = await userService.createUser(userData.username, userData.email, userData.password);
        res.status(201).json({user: user,message : "User created successfully"});
    } catch(error) {
        console.log(error);
        res.status(400).json({message : error.message});
    }
}

module.exports = {
    createduser
}