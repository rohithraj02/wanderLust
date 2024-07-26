// authController.js
const authService = require('../services/authServices');
const { errorLogger,infoLogger } = require('../services/loggers');
const { LOGGER_LEVEL0, LOGGER_LEVEL2 } = require('dotenv').config().parsed;

// register a new user
exports.register = async (req, res) => {
    try {
        console.log(req.body)
        await authService.registerUser(req.body);
        infoLogger[LOGGER_LEVEL2]('User registered successfully',req.body.email)
        res.json({error:false, message: 'User registered successfully' });
    } catch (error) {
        console.log(error)
        errorLogger[LOGGER_LEVEL0](error.message)
        res.json({error:true, message: error.message});
    }
};

// authenticate user login
exports.login = async (req, res) => {
    try {
        const token = await authService.loginUser(req.body);
        res.json({loggedIn: true,error:false, token });
    } catch (error) {
        errorLogger[LOGGER_LEVEL0]('Error authenticating the user')
        res.json({ loggedIn:false, error:true, message: 'Error authenticating the user' });
    }
};
