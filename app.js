const express = require('express');
var cors = require('cors')
const { AppError } = require('./utils/appError.util');
const { globalErrorHandler } = require('./controllers/error.controller');
const rateLimit = require('express-rate-limit');

const { usersRouter } = require('./routes/users.routes');
const { gestionsRouter } = require('./routes/gestions.routes');
const { ubigeosRouter } = require('./routes/ubigeos.routes');

const app = express();

app.use(cors())

// fixing "413 Request Entity Too Large" errors
app.use(express.json({limit: "10mb", extended: true}))
app.use(express.urlencoded({limit: "10mb", extended: true, parameterLimit: 50000}))

// const limiter = rateLimit({
// 	max: 360,
// 	windowMs: 60 * 60 * 1000, // 1 hr
// 	message: 'Requests exceeded',
// });

// app.use(limiter);

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