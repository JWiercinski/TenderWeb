var moment = require('moment')
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/indexRouter');
var currentTenderRouter = require("./routes/currentTenderRouter")
var incomingTenderRouter = require("./routes/incomingTenderRouter")
var archiveTenderRouter = require("./routes/archiveTenderRouter")
var currentOfferRouter = require("./routes/currentOfferRouter")
var archiveOfferRouter= require("./routes/archiveOfferRouter")

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.locals.moment=moment
app.use('/', indexRouter);
app.use("/tender/current", currentTenderRouter)
app.use("/tender/incoming", incomingTenderRouter)
app.use("/tender/archive", archiveTenderRouter)
app.use("/offer/current", currentOfferRouter)
app.use("/offer/archive", archiveOfferRouter)

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
