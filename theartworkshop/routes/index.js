var express = require('express');
var router = express.Router();

/* GET home page. Gallery is the index page*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
