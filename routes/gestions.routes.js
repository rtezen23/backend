const express = require('express');

const {
	getAllGestion,
} = require('../controllers/gestions.controller.js');

const gestionsRouter = express.Router();

gestionsRouter.get('/', getAllGestion);

module.exports = { gestionsRouter };