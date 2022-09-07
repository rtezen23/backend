const express = require('express');
var cors = require('cors')
const { AppError } = require('./utils/appError.util');
const { globalErrorHandler } = require('./controllers/error.controller');

const { usersRouter } = require('./routes/users.routes');
const { gestionsRouter } = require('./routes/gestions.routes');
const { ubigeosRouter } = require('./routes/ubigeos.routes');

const app = express();

app.use(cors())

app.use(express.json());

app.use('/api/v1/users', usersRouter);
app.use('/api/v1/gestions', gestionsRouter);
app.use('/api/v1/ubigeos', ubigeosRouter);

app.all('*', (req, res, next) => {
	next(
		new AppError(
			`${req.method} ${req.originalUrl} not found in this server`,
			404
		)
	);
});

app.use(globalErrorHandler);

module.exports = { app };