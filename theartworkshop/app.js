var createError = require('http-errors');
var express = require('express');
var session = require('express-session'); //session variable added
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//database connected to express
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/artdb'); //artdb is the database name 


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({secret: "Your secret key"})); //session initialized
app.use(express.static(path.join(__dirname, 'public')));

//database is connected here 
app.use(function(req,res,next){
  req.db = db;
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
