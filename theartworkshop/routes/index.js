var express = require('express');
var session = require('express-session');
var router = express.Router();

function checkAdmin(req, res,next){
  if(req.session.user){
     console.log("logged in");
     next();     //If session exists, proceed to page
  } else {
     console.log(req.session.user);
     res.redirect("/login");  //Error, trying to access unauthorized page!
  }
}

/* GET home page. Gallery is the index page*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/adminlogin',function(req,res,next){
  un = req.body.formUsername;
  pw = req.body.formPassword;
  console.log(un);
  console.log(pw);
  var db = req.db;
  var collection = db.collection('users');
  var query = { $and:[{"username": un},{"password":pw}]};
  collection.count(query).then(function(count){
    if(count==1)
    {
      req.session.user=un;
      res.redirect("/admin");
    }
    else
    res.redirect("/login");
  });
});

router.get('/admin', checkAdmin ,function(req, res, next) {

  
  res.render('admin');
});



module.exports = router;
