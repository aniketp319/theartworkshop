var express = require('express');
var router = express.Router();

/* GET home page. Gallery is the index page*/
router.get('/', function(req, res, next) {
  res.render('gallery', { title: 'Express' });
});

router.get('/events', function(req, res, next) {
  res.render('event', { title: 'Express' });
});

router.get('/ourstory', function(req, res, next) {
  res.render('ourstory', { title: 'Express' });
});


module.exports = router;
