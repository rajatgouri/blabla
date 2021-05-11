const jwt = require('jsonwebtoken');
require('dotenv').config();
const { JwtSecret } = process.env;
const config = JwtSecret;

exports.createToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email, name: user.fullName ,role: user.role }, config, {
    expiresIn: 60 * 60 * 12 * 24 // expires in 24 days
  });
}