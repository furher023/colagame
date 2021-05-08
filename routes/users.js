var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/dashboard', function(req, res, next) {
  res.render('dashboard');
});

router.post('/create', function(req, res, next) {
  console.log(req.body);
  res.render('dashboard');
});

module.exports = router;
