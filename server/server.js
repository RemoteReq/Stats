require('dotenv').config('./.env');
const express = require('express');
const app = express();

const PORT = 8080;

const auth = require('./auth.js');

app.use(express.static('build'));

app.use(auth);

app.listen(PORT, () => {console.log(`Analytics online on port ${PORT}`)});