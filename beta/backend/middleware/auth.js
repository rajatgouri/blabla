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