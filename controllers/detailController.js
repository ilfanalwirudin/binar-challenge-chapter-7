module.exports = {
  index: async (req, res) =>
    await res.status(200).render("details", {
      title: "Details Page",
    }),
};
