var express = require('express');
var router = express.Router();
var db = require('../modules/dbConnect')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Sign Up Render
router.get('/signUp', function(req, res, next) {
  res.render('signUp');
});

//Sign Up Post
router.post('/signUp', function(req, res, next) {
  let userModel = db.model('user');
  let user = new userModel();
  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;
  user.email = req.body.email;
  user.passwordHash = req.body.password;
  user.save((err,result)=>{
    if(err){
      console.log(err);
      res.send(" Not able to signup");
    } 
    else{
      console.log(result);
      res.redirect('/signIn');
    }
  });
});

//Sign In render
router.get('/signIn', function(req, res, next) {
  res.render('signIn',{log_error:false});
});

//Sign In post
router.post('/signIn', function(req, res, next) {

  let authenticate = require('../modules/authentication');
  let setSession = require('../modules/session');

  authenticate(req.body)
  .then( (result) =>{
    setSession(req,result);
    if(req.session.admin == 0)
    res.redirect('/users/dashboard');
    else{
      res.redirect('/admin/dashboard');
    }
  } )
  .catch( (err) =>{
      if(err) res.send(err);
      else res.render('signIn',{log_error:true});
  })

});

// Getting server time
router.get('/serverTime',(req,res,next)=>{
  //var df=new Date(2021,4,6,6,30);
  var d = new Date();
  //d=d-df;
  //console.log(d);
  res.send(d.toLocaleTimeString());
});

//Update round
router.post('/updateRound',(req,res)=>{
  let data = JSON.parse(req.body.data);
  console.log(data);
  res.send("done");
})

module.exports = router;
