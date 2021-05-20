var express = require("express");
var router = express.Router();
const db = require('../modules/dbConnect');

/* GET user dashboard. */
router.get("/dashboard", function (req, res, next) {
  
  if(req.session.user!= undefined){
    res.render("userDashboard", {
      joinedGame: true,
      joinedTeam: true,
      game_time: "May 18, 2021 06:56:00",
      user: req.session.user
    });
  }
  else
    res.redirect('/signIn');
  
});

router.post("/joinGame", function (req, res, next) {});

router.post("/joinTeam",(req,res,next)=>{
  
})



module.exports = router;
