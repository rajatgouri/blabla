/*const jwt = require("jsonwebtoken");
const config = require('../config/config');
const ExtractJwt = require('passport-jwt').ExtractJwt;

module.exports = (req, res, next) => {
  try {
    console.log(req.headers);
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    jwt.verify(token, config.jwtSecret);
    next();
  } catch (error) {
    res.status(401).json({ message: "Auth failed!" });
  }
};*/

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
var winston = require('../config/winston');

const config = require('../config/config');
const User = require('../models/user');
 
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret
}
 
module.exports = new JwtStrategy(opts, function (jwt_payload, done) {
 User.findById(jwt_payload.id, function (err, user) {
    if (err) {
        winston.error(err);
        return done(err, false);
    }
    if (user) {
        return done(null, user);
    } else {
        return done(null, false);
    }
  });
});