var express = require("express");
var router = express.Router();
const db = require('../modules/dbConnect');

 //admin dashboard
router.get("/dashboard", function (req, res, next) {
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
    game.rounds = req.body.rounds;
    game.creator = req.session.user.email;
    let date = new Date(req.body.time);
    game.endTime = new Date(date.getTime() +( req.body.rounds > 2 ? 20*60000 + (req.body.rounds-2)*5*60000 : req.body.rounds*10*60000 )); 
    console.log(new Date(date.getTime() +( req.body.rounds > 2 ? 20*60000 + req.body.rounds*5*60000 : req.body.rounds*10*60000 )) );
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
      let table = db.model("game");
      table.find({creator: req.session.user.email},(err,result)=>{
      if(err)  res.render("viewGame", { game: null,user : req.session.user });
      else
      res.render("viewGame", { game: result,user : req.session.user });
    });
  });


module.exports = router;
