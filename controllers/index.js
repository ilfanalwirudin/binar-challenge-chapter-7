const api = require("./apiController");
const auth = require("./authController");
const dashboard = require("./dashboardController");
const detail = require("./detailController");
const game = require("./gameController");
const home = require("./homeController");
const login = require("./loginController");
const register = require("./registerController");

module.exports = {
  api,
  auth,
  dashboard,
  detail,
  game,
  home,
  login,
  register,
};
