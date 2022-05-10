// //
// const { OAuth2Client } = require('google-auth-library');
// const { Usuario } = require('../database/models');

// module.exports = {
//   new: function(request, response) {
//     return response.render('login')
//   },
//   authenticate: function(request, response) {

//   },
//   authGoogle: async function(request, response) {
//     const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

//     const ticket = await client.verifyIdToken({
//       idToken: request.body.credential,
//       audience: process.env.GOOGLE_CLIENT_ID
//     });

//     const { name, email,senha,data_de_nascimento,CPF,telefone, sub: google_id } = ticket.getPayload();

//     const userAlreadyExists = await Usuario.findOne({
//       where: { google_id }
//     });

//     if (usuarioAlreadyExists) {
//       request.session.usuario = usuarioAlreadyExists;
//       return response.redirect('/');
//     }

//     const usuario = await Usuario.create({
//       name,
//       email,
//       senha,
//       data_de_nascimento,
//       CPF,
//       telefone,
//       google_id
//     });

//     request.session.usuario = Usuario;
//     return response.redirect('/');
//   }
// }

