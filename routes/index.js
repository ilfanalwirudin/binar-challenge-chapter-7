const router = require("express").Router();
const controller = require("../controllers");

// Page Router
router.get("/", controller.home.index);
router.get("/login", controller.login.index);
// router.get("/register", controller.register.index);
router.get("/game", controller.game.index);

router.get("/auth/logout", controller.auth.logout);
router.post("/auth/login", controller.auth.login);
router.post("/auth/register", controller.auth.register);

router.post("/dashboard/add", controller.dashboard.create);
router.post("/dashboard/edit/:id", controller.dashboard.update);
router.post("/dashboard/delete/:id", controller.dashboard.delete);

// Protected page

// API Router

// Table Room

// Table User

// Games

module.exports = router;
