const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const session = require('express-session');

// const loginPlantae = require('./middlewares/loginPlantae');


const contatoRouter = require('./routes/contato');
const indexRouter = require('./routes/index');
const pagamentoRouter = require('./routes/pagamento');
const agradecimentoRouter = require('./routes/agradecimento')
const cartsRouter = require('./routes/carts');
const usersRouter = require('./routes/users');
const checkoutRouter = require('./routes/checkout');
const sobreRouter = require('./routes/sobre');
const terrariosRouter = require('./routes/terrarios');
const viveiroRouter = require('./routes/viveiro');
const loginRouter = require('./routes/login');
const maisVendidasRouter = require('./routes/maisVendidas');
const servicosRouter = require('./routes/servicos');
const menuRouter = require('./routes/menu');
const dicasEcuidadosRouter = require('./routes/dicasEcuidados');
const minhaContaRouter = require('./routes/minhaConta');
const inicialRouter = require('./routes/inicial');
const cadastroRouter = require('./routes/cadastro');
const ferramentasRouter = require('./routes/ferramentas');
const entregaRouter = require('./routes/entrega');
const productsRouter = require('./routes/products');

const app = express();

// const autenticador = require('./middlewares/autenticacao');
// const checkoutController = require('./controllers/checkoutController');
// const usuario = require("./models/usuarios");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(methodOverride("_method"));
// app.use(bodyParser.urlencoded({extended:false}))
// app.use(bodyParser.json())
// app.use(loginPlantae); 
// app.use() requires a middleware function
// app.use(session({ secret: "Iniciar a sess??o" }));

//metodoNovo
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
secret: 'I am creating a cart!'
}));

app.use(methodOverride('_method'));



app.use('/viveiro', viveiroRouter);
app.use('/terrarios', terrariosRouter);
app.use('/checkout', checkoutRouter);
app.use('/agradecimento', agradecimentoRouter);
app.use('/login', loginRouter);
app.use('/pagamento', pagamentoRouter);
app.use('/sobre', sobreRouter);
app.use('/contato', contatoRouter);
app.use('/maisVendidas', maisVendidasRouter);
app.use('/servicos', servicosRouter);
app.use('/menu', menuRouter);
app.use('/dicasEcuidados', dicasEcuidadosRouter);
app.use('/minhaConta', minhaContaRouter);
app.use('/inicial', inicialRouter);
app.use('/cadastro', cadastroRouter);
app.use('/ferramentas', ferramentasRouter);
app.use('/entrega', entregaRouter);
app.use('/', indexRouter);
app.use('/', usersRouter);
app.use('/', productsRouter);
app.use('/cart', cartsRouter);


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