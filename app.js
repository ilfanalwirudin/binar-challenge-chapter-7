//const Modules
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const createError = require("http-errors");
const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const flash = require("express-flash");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const passport = require("./lib/passport");
// const router = require("./routes/");

//const router
const router = require("./routes/index");

//Define Variables
const app = express();
const PORT = process.env.PORT || 5000;
app.set("view engine", "ejs");

// use static module
app.use(express.static("public"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use(passport.initialize());
app.use(flash());

const oneWeek = 1000 * 3600 * 24 * 7;

app.use(
  session({
    cookie: { maxAge: oneWeek },
    saveUninitialized: false,
    resave: "false",
    secret: "secrettoken",
  })
);

//load router
app.use(router);

//use logger middleware
app.use(morgan("tiny"));

//Create error 404
app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

// Port listener
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;
