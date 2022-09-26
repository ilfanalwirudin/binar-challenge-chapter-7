const { userGame, userBiodata, userGameHistory } = require("../models");

module.exports = {
  //Get All Users
  getAllUser: async (req, res) =>
    await userGame
      .findAll({
        include: [
          {
            model: userGameBiodata,
          },
          {
            model: userGameHistory,
          },
        ],
      })
      .then((user) =>
        user.length == 0
          ? res.status(200).send("No users yet!")
          : res.status(200).json(user)
      ),

  update: async (req, res) =>
    await userGame
      .update(
        {
          username: req.body.username,
          password: req.body.password,
        },
        { where: { id: req.params.id } }
      )
      .then((user) => res.status(201).json("User updated !"))
      .catch(() => res.status(422).send("Cannot update the user")),

  delete: async (req, res) =>
    await userGame
      .destroy({ where: { id: req.params.id } })
      .then(() =>
        res.status(201).json({
          message: `Users id of ${req.params.id} has been deleted!`,
        })
      )
      .catch(() => res.status(422).send("Cannot delete the user id")),
};
