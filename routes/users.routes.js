const express = require('express');

const {
	getAllUsers,
	createUser,
	login,
} = require('../controllers/users.controller.js');

const { createUserValidators } = require('../middlewares/validators.middleware');
const usersRouter = express.Router();

usersRouter.get('/', getAllUsers);
usersRouter.post('/signup', createUserValidators, createUser);
usersRouter.post('/login', login);

module.exports = { usersRouter };