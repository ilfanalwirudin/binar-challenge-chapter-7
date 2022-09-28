module.exports = {
  index: (req, res, next) =>
    res.status(200).render("login", {
      title: "Login Page",
      msg: req.query.msg,
      style: "login",
    }),
};
