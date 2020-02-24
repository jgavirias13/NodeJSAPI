const jwt = require('jsonwebtoken');
const config = require('../config/config');

exports.generateToken = (user) => {
  return jwt.sign(user, config.JWT_SECRET, {expiresIn: '4h'});
};