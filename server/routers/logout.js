const express = require('express');
const passport = require('passport');


const logout = express.Router();

logout.get('/', (req, res) => {
  req.logout();
  res.end();
});


module.exports.logoutRouter = logout;