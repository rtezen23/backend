const express = require('express');

const {
	getAllUbigeos,
} = require('../controllers/ubigeos.controller.js');

const ubigeosRouter = express.Router();

ubigeosRouter.get('/', getAllUbigeos);

module.exports = { ubigeosRouter };