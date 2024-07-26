// userController.js

const userService = require('../services/userServices');
const { errorLogger, infoLogger } = require('../services/loggers');
const { LOGGER_LEVEL0, LOGGER_LEVEL2 } = require('dotenv').config().parsed;

// get all users from users.json
exports.getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        infoLogger[LOGGER_LEVEL2]('All users fetched successfully')
        res.json({ error: false, users });
    } catch (error) {
        console.log(error)
        errorLogger[LOGGER_LEVEL0]('Error fetching users')
        res.json({ error: true, message: 'Error fetching users' });
    }
};

// get a particular user based on email id
exports.getUser = async (req, res) => {
    try {
        const user = await userService.getUserByEmail(req.params.email);
        infoLogger[LOGGER_LEVEL2]('User fetched successfully')
        res.json({ error: false, user });
    } catch (error) {
        errorLogger[LOGGER_LEVEL0]('User not found')
        res.json({ error: true, message: 'User not found' });
    }
};

// updating particular user based on email id
exports.updateUser = async (req, res) => {
    try {
        await userService.updateUserByEmail(req.params.email, req.body);
        infoLogger[LOGGER_LEVEL2]('User updated successfully', req.body)
        res.json({ error: false, message: 'User updated successfully' });
    } catch (error) {
        errorLogger[LOGGER_LEVEL0]('Error updating the user')
        res.json({ error: true, message: 'Error updating user:' });
    }
};

// deleting particular user based on email id
exports.deleteUser = async (req, res) => {
    try {
        await userService.deleteUserByEmail(req.params.email);
        infoLogger[LOGGER_LEVEL2]('User deleted successfully', req.params.email)
        res.json({ error: false, message: 'User deleted successfully' });
    } catch (error) {
        console.log(error)
        errorLogger[LOGGER_LEVEL0]('Error deleting user')
        res.json({error:true,  message: 'Error deleting user' });
    }
};
