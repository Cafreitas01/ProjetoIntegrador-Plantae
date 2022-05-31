// const bcryptjs = require('bcryptjs');
const { usuario } = require('../database/models');
const { hashSync, compareSync } = require('bcryptjs');

exports.createUsuario = async function(request, response) {
  const {nome_completo, email,senha } = request.body;
  const usuarioAlreadyExists = await usuario.findOne({where:{email}});

  if (usuarioAlreadyExists) return response.redirect('/login');

  const usuario = await Usuario.create({
    nome_completo,
    email,
    senha: hashSync(password, 10)
  });

  await usuario.createCarrinho();

  request.session.usuario = { ...usuario.toJSON(), senha: null};

  return response.redirect('/login');
}

exports.authenticate = async function(request, response) {
  const { email, senha } = request.body;

  const usuario = await Usuario.findOne({ where: {email}});

  if (!usuario) return response.redirect('/login');

  console.log('found usuario')

  const doesPasswordMatch = compareSync(senha, usuario.senha);

  console.log('password match')

  request.session.user = { ...usuario.toJSON(), senha: null}

  return response.redirect('/carrinho');
}

exports.renderRegister = (request, response) => response.render('register');

exports.renderLogin = (request, response) => response.render('login');






// module.exports = {
//   new: function (request, response) {
//     return response.render('cadastro');
//   },
//   create: async function (request, response) {
//     try {
//       const { email, senha } = request.body;

//       const userAlreadyExists = await usuario.findOne({
//         where: { email }
//       });

//       if (userAlreadyExists) {
//         return response.redirect('/cadastro');
//       }

//       const usuario = await usuario.create({
//         nome_completo,
//         email,
//         senha,
        
//       });

//       request.session.usuario = { ...usuario.dataValues, senha: null }

//       return response.redirect('/carrinho');
//     } catch (error) {
//       console.log(error);
//     }
//   }
// }