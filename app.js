var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var carrinhoRouter = require('./routes/carrinho');
var contatoRouter = require('./routes/contato');
var devolucaoEprivacidadeRouter = require('./routes/devolucaoEprivacidade');
var dicasEcuidadosRouter = require('./routes/dicasEcuidados')
var inicialRouter = require('./routes/inicial');
var maisVendidasRouter = require('./routes/maisVendidas');
var menuRoter = require('./routes/menu');
var minhaContaRouter = require('./routes/minhaConta');
var servicosRouter = require('./routes/servicos');
var viveiroRouter = require('./routes/viveiro');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('./carrinho' , carrinhoRouter);
app.use('./contato' , contatoRouter);
app.use('./devolucaoEprivacidade' , devolucaoEprivacidadeRouter);
app.use('./dicasEcuidados', dicasEcuidadosRouter );
app.use('./inicial' , inicialRouter);
app.use('./maisVendidas' , maisVendidasRouter);
app.use('./menu' , menuRoter);
app.use('./minhaConta' , minhaContaRouter);
app.use('./servicos', servicosRouter);
app.use('./viveiro' , viveiroRouter);




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
