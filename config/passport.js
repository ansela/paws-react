const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const User = require("../models/User");
const settings = require("../config/settings");

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
  secretOrKey: settings.secret
};

const strategy = new JwtStrategy(opts, function(jwt_payload, next) {
  console.log("payload received", jwt_payload);
  User.findOne({ _id: jwt_payload._id }, (err, user) => {
    if (err) return next(err, false);
    if (user) next(null, user);
    else next(null, false);
  });
});
passport.use(strategy);

module.exports = passport;
