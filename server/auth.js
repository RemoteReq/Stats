const express = require('express');
const route = express.Router();

route.post('/auth', (req, res) => {
  console.log(process.env.USER_AUTH, process.env.PASS_AUTH);  
  
  res.send(200)
})

module.exports = route;