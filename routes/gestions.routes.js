const express = require('express');

const {
	getAllGestion, createGestions
} = require('../controllers/gestions.controller.js');

const gestionsRouter = express.Router();

gestionsRouter.get('/', getAllGestion);
gestionsRouter.post('/', createGestions);

module.exports = { gestionsRouter };