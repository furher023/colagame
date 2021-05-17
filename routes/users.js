var express = require("express");
var router = express.Router();

var game = [
  {
    name: "abcd",
    noOfPlayers: "2",
    rounds: "1",
    time: "22-09-1999 22:01",
  },
];

/* GET users listing. */

router.get("/dashboard", function (req, res, next) {
  res.render("dashboard");
});

//create game
router.post("/create", function (req, res, next) {
  const newGame = {
    name: req.body.name,
    noOfPlayers: req.body.noOfPlayers,
    rounds: req.body.rounds,
    time: req.body.time,
  };
  game.push(newGame);
  console.log(game);
  //res.json(game);
  //res.render('dashboard');
});

router.get("/viewGame", function (req, res, next) {
  res.render("viewGame", { game: game });
});

router.post("/joinGame", function (req, res, next) {});

router.get("/dashboard1", function (req, res, next) {
  res.render("dashboard1", {
    joinedGame: true,
    joinedTeam: true,
    game_time: "May 17, 2021 00:55:00",
  });
});

module.exports = router;
