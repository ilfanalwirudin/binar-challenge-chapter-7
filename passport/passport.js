const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
const { userGame } = require("../models");

const options = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: "secrettoken",
};

passport.use(
  new JwtStrategy(options, async (payload, done) => {
    await userGame
      .findOne({ where: { username: payload.username } })
      .then((user) => done(null, user))
      .catch((err) => done(err, false));
  })
);

module.exports = passport;
