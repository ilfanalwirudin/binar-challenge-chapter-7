const { userGame, userGameHistory, userBiodata } = require("../models");
const bcrypt = require("bcrypt");

module.exports = {
  index: async (req, res) => {
    const msg = req.query.msg;

    if (req.query.user == "admin") {
      await userGame
        .findAll({
          order: [["id", "ASC"]],
        })
        .then((user) =>
          res.status(200).render("dashboard", {
            title: "Dashboard Page",
            user,
            msg: msg,
          })
        );
    } else if (req.query.user != "admin") {
      res.redirect("/login");
    }
  },

  create: async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const userData = {
      username: req.body.username,
      password: hashedPassword,
    };
    await userGame
      .findOne({
        where: {
          username: req.body.username,
        },
      })
      .then((user) =>
        !user
          ? userGame
              .create(userData)
              .then(() => {
                res.status(201).redirect("/dashboard");
              })
              .catch((err) => {
                res.status(422).send("Cannot create user");
              })
          : res.redirect("/dashboard")
      )
      .catch((err) => res.send(err));
  },

  update: async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const hashedPassword = await bcrypt.hash(password, 10);
    const userData = {
      username: username,
      password: hashedPassword,
    };

    const updateData = async (data) =>
      await userGame
        .update(data, { where: { id: req.params.id } })
        .then(() => {
          res.status(201).redirect("/dashboard");
        })
        .catch((err) => res.status(422).send("Cannot update user: ", err));

    const findUsername = async (username) =>
      await userGame.findOne({
        where: {
          username: username,
        },
      });

    userGame
      .findOne({
        where: {
          id: req.params.id,
        },
      })
      .then((id) => {
        if (username != "" && password != "") {
          findUsername(username).then((dbUser) => {
            !dbUser ? updateData(userData) : res.redirect("/dashboard");
          });
        } else if (username != "" && password == "") {
          findUsername(username).then((dbUser) => {
            !dbUser
              ? updateData({ username: username })
              : res.redirect("/dashboard&msg=error");
          });
        } else if (username == "" && password != "") {
          updateData({ password: hashedPassword });
        }
      })
      .catch((err) => res.send("ERROR: " + err));
  },

  delete: async (req, res) =>
    await userGame
      .destroy({ where: { id: req.params.id } })
      .then(() => res.status(201).redirect("/dashboard"))
      .catch(() => res.status(422).send("Cannot delete the games id")),

  handler: async (req, res) =>
    await userGame.findAll().then(() => res.status(200).redirect("/dashboard")),
};
