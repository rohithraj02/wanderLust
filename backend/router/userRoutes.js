// userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// routes to mannipulate user data

router.get('/', userController.getAllUsers);
router.get('/:email', userController.getUser);
router.put('/:email', userController.updateUser);
router.delete('/:email', userController.deleteUser);

module.exports = router;
