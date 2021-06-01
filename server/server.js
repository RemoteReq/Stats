require('dotenv').config('./.env');
const express = require('express');
const path = require('path');

const app = express();

const PORT = 8080;

const auth = require('./auth.js');

app.use(express.static('build'));

app.use(auth);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.listen(PORT, () => {console.log(`Analytics online on port ${PORT}`)});