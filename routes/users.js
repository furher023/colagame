var express = require("express");
var router = express.Router();
const db = require('../modules/dbConnect');

/* GET user dashboard. */
router.get("/dashboard", function (req, res, next) {
  
  if(req.session.user!= undefined){
    if(req.session.user.gameData != null){
      let register = db.model('register');
      register.find({user:req.session.user.email,game:req.session.user.gameData.id,status:true},(err,result)=>{
        if(err) console.log(err);
        if(register.team != undefined)
        res.render("userDashboard", {
          joinedGame: true,
          joinedTeam: true,
          game_time: "May 18, 2021 06:56:00",
          user: req.session.user
        });
        else
        res.render("userDashboard", {
          joinedGame: true,
          joinedTeam: false,
          game_time: "May 18, 2021 06:56:00",
          user: req.session.user
        });
      })
      
    }
    else{
      res.render("userDashboard", {
        joinedGame: false,
        joinedTeam: false,
        game_time: null,
        user: req.session.user
      });
    }
    
  }
  else
    res.redirect('/signIn');
  
});

router.post("/joinGame", function (req, res, next) {
  let gameStatus = require('../modules/gameStatus');

  gameStatus(req.body.gameId)
  .then((result)=>{
    if(result.status){
      let registerModel = db.model('register');
      let register = new registerModel();
      register.gameId = req.body.gameId;
      register.user = req.session.user.email;
      register.save((err,response) => {
        if (err)  console.log(err);
        else {
          req.session.user.gameData= result;
          res.redirect('users/dashboard');
        }
      })
    }
    else{
      res.render('userDashboard')
    }
  })
  
});

router.post("/joinTeam",(req,res,next)=>{
  
})



module.exports = router;
