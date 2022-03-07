const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const viveiroRouter = require('./routes/viveiro');
const terrariosRouter = require('./routes/terrarios');
const carrinhoProdutoRouter = require('./routes/carrinhoProduto');
const carrinhoDadosClienteRouter = require('./routes/carrinhoDadosCliente');
const carrinhoPagamentoRouter = require('./routes/carrinhoPagamento');


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
app.use('/viveiro', viveiroRouter);
app.use('/terrarios', terrariosRouter);
app.use('/carrinhoProduto', carrinhoProdutoRouter);
app.use('/carrinhoDadosCliente', carrinhoDadosClienteRouter);
app.use('/carrinhoPagamento', carrinhoPagamentoRouter);



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
