var express = require('express');
var session = require('express-session');
var router = express.Router();

//This function checks whether the session variable for user is set or not
function checkAdmin(req, res,next){
  if(req.session.user){
     console.log("logged in");
     next();     //If session exists, proceed to page
  } else {
     console.log(req.session.user);
     res.redirect("/login");  //Error, trying to access unauthorized page!
  }
}

/* Get Index page.*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* About Us Page */
router.get('/aboutus', function(req, res, next) {
  res.render('aboutus');
});
/* Contact Us Page */
router.get('/contactus', function(req, res, next) {
  res.render('contactus');
});
/* Events Page */
router.get('/events', function(req, res, next) {
  res.render('events');
});
/* Event Page */

/* Join Us page */
router.get('/joinus', function(req, res, next) {
  res.render('joinus');
});


/*Admin pages*/
/* get login page */
router.get('/login', function(req, res, next) {
  res.render('login');
});

/*for login authentication, connected to DB.*/ 
router.post('/adminlogin',function(req,res,next){
  un = req.body.formUsername;
  pw = req.body.formPassword;
  //console.log(un);
  //console.log(pw);
  var db = req.db;
  var collection = db.collection('users');
  var query = { $and:[{"username": un},{"password":pw}]}; //query is generated here
  //the above query is run below and checked if the returned tuple is 1 that means the username and password exists.
  collection.count(query).then(function(count){
    if(count==1)
    {
      req.session.user=un; //session variable is set after adminlogin is authenticated
      res.redirect("/admin");
    }
    else
    res.redirect("/login");
  });
});

//before rendering admin, it is checked whether the admin has logged in by calling checkAdmin function defined earlier.
router.get('/admin', checkAdmin ,function(req, res, next) {
  res.render('admin');
});

module.exports = router;
