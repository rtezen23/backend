const express = require('express');
var cors = require('cors')

const { usersRouter } = require('./routes/users.routes');
const { gestionsRouter } = require('./routes/gestions.routes');

const app = express();

app.use(cors())

app.use(express.json());

app.use('/api/v1/users', usersRouter);
app.use('/api/v1/gestions', gestionsRouter);

module.exports = { app };