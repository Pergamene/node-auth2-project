const express = require('express');
const cors = require('cors');

const usersRouter = require('../users/users-router');
const authenticator = require('./api/authenticator');
const registerRouter = require('../register/register-router');
const loginRouter = require('../login/login-router');

const server = express();

server.use(express.json());
server.use(cors());

server.use('/api/users', authenticator, usersRouter);
server.use('/api/register', registerRouter);
server.use('/api/login', loginRouter);

server.get('/', (req, res) => {
  res.json({ api: 'up' });
});

module.exports = server;
