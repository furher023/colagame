var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/signUp", (req, res, next)=>{
  res.render("signUp");
});

//create a new user in db

router.post("/signUp", async (req, res, next)=>{
  let schema = require('../modules/schema');
  try{

      const password = req.body.password;
      const cpassword = req.body.password1;
      if(password === cpassword){
        const User = new schema.User({ 
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          confirmpassword: req.body.password1

      })

      console.log(User);
      const registered = await User.save();
      //res.redirect('/users/dashboard');
      res.status(201).render(index); 

      }else{
          res.send("Password are not matching")
      } 
  
  } catch(error) {
      res.status(400).send(error);
  }

})

router.get('/signIn', function(req, res, next) {
  res.render('signIn',{log_error:false});
});

router.post('/signIn', function(req, res, next) {

  let authenticate = require('../modules/authentication');
  let setSession = require('../modules/session');

  authenticate(req.body)
  .then( (result) =>{
    setSession(req,result);
    res.redirect('/users/dashboard');
  } )
  .catch( (err) =>{
      if(err) res.send(err);
      else res.redirect('/signIn',{log_error:true});
  })

});

router.get('/serverTime',(req,res,next)=>{
  //var df=new Date(2021,4,6,6,30);
  var d = new Date();
  //d=d-df;
  //console.log(d);
  res.send(d.toLocaleTimeString());
})

module.exports = router;
