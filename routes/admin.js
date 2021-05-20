var express = require("express");
var router = express.Router();
const db = require('../modules/dbConnect');

 //admin dashboard
router.get("/dashboard", function (req, res, next) {
    if(req.session.user != undefined && req.session.admin == 1)
    res.render("adminDashboard",{user : req.session.user});
  });
  
  //create game
  router.post("/create", function (req, res, next) {
    let gameModel = db.model("game");
    let game = new gameModel();
    game.name = req.body.name;
    game.noOfPlayers = req.body.noOfPlayers;
    game.startTime = req.body.time;
    game.rounds = req.body.rounds;
    game.creator = req.session.user.email;
    console.log(game);
    game.save((err,result)=>{
      if(err) res.send(err);
      else{
        console.log(result);
        res.redirect("/admin/viewgame");
      }
    });
  });
  
  // Viewing all created games 
  router.get("/viewGame", function (req, res, next) {
    if(req.session.user != undefined && req.session.admin != 0){
      let table = db.model("game");
      table.find({creator: req.session.user.email},(err,result)=>{
      if(err)  res.render("viewGame", { game: null });
      else
      res.render("viewGame", { game: result });
    });
    }
  });


module.exports = router;
