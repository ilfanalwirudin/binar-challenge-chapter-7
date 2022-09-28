module.exports = {
  index: async (req, res, next) => {
    const name = req.query.name || "Player";
    console.log(name);
    await res.status(200).render("game", {
      title: "Try Out The Games",
      player,
      style: "game",
    });
  },
};
