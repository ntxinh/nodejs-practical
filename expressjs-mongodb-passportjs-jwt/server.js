const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
require('dotenv').config();
require('./passport');

const user = require('./routes/user.routes');
const auth = require('./routes/auth.routes');

const server = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

server.use(passport.initialize());

server.use('/auth', auth);
server.use('/user', passport.authenticate('jwt', { session: false }), user);

// eslint-disable-next-line
server.listen(3000, _ => console.log('Server is listening on port 3000...'));
