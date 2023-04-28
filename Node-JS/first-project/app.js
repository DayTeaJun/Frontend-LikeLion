var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

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
app.use(express.static(path.join(__dirname, 'public')));

// 미들웨어 : 요청(req)과 응답(res)사이에 위치하고 특정 기능을 수행하는 기능(미들웨어 없으면 같은 요청응답 여러개가 있으면 그 만큼 만들어줘야함)
//app.use((req, res, next) => {
// 어떤 요청이 들어와도 해당 미들웨어 함수를 한번씩 수행하게됨
//  console.log("middleware!!"); // 요청이 들어오면 찍힘
//  next(); // 실행이 되고 난 후에 라우터에 맞게 함수가 실행됨.
//});

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
