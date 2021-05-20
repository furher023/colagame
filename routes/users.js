var express = require("express");
var router = express.Router();
const db = require('../modules/dbConnect');

/* GET users listing. */


router.post("/joinGame", function (req, res, next) {});

router.get("/dashboard1", function (req, res, next) {
  res.render("dashboard1", {
    joinedGame: true,
    joinedTeam: true,
    game_time: "May 18, 2021 06:56:00",
  });
});

module.exports = router;
