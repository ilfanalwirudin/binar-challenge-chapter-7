const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const models = require("../models");
const bcrypt = require("bcrypt");

async function authenticate(username, password, done) {
  try {
    checkPassword = (password) => bcrypt.compareSync(password, user.password);

    const user = await models.userGame.authenticate({ username, password });
    return done(null, user);
  } catch (err) {
    return done(null, false, { message: err.message });
  }
}

// local strategy used
passport.use(
  new LocalStrategy(
    { usernameField: "username", passwordField: "password" },
    authenticate
  )
);

//inserting user data into sessions
passport.serializeUser((user, done) => done(null, user.id));
//retrieving user data from session
passport.deserializeUser(async (id, done) =>
  done(null, await models.userGame.findByPk(id))
);

module.exports = passport;
