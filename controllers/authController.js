const { userGame, userBiodata, userGameHistory } = require("../models");

module.exports = {
  login: async (req, res, next) =>
    await userGame
      .authenticate(req.body)
      .then((user) =>
        res.status(200).redirect("/?msg=login&user=" + user.username)
      )
      .catch((err) => res.status(400).redirect("/login?msg=notfound")),

  register: async (req, res, next) => {
    await userGame
      .register(req.body)
      .then((userGame) => {
        userBiodata.create({
          user_id: userGame.get("id"),
        });
        userGameHistory.create({
          user_id: userGame.get("id"),
        });
        res.status(201).redirect("/login");
      })
      .catch((err) => res.redirect("/register?msg=userexist"));
  },

  logout: (req, res) => {
    req.logout();
    res.redirect("/");
  },
};
