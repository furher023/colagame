var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/signIn', function(req, res, next) {
  res.render('signIn');
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
      else res.redirect('/signIn');
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
