const jwt = require('jsonwebtoken');

const config = require('../config/config');

exports.createToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email, name: user.fullName ,role: user.role }, config.jwtSecret, {
    expiresIn: 60 * 60 * 12 * 24 // expires in 24 days
  });
}