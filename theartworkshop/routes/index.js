var express = require('express');
var session = require('express-session');
var router = express.Router();

/* GET home page. Gallery is the index page*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  
  res.render('login');
});

router.get('/admin', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
