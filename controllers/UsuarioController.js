const bcryptjs = require('bcryptjs');
const { usuario } = require('../database/models');

module.exports = {
  new: function (request, response) {
    return response.render('cadastro');
  },
  create: async function (request, response) {
    try {
      const { email, senha } = request.body;

      const userAlreadyExists = await usuario.findOne({
        where: { email }
      });

      if (userAlreadyExists) {
        return response.redirect('/cadastro');
      }

      const usuario = await usuario.create({
        nome_completo,
        cpf,
        Email,
        data_de_nascimento,
        telefone,
        senha,
        rua,
        cidade,
        pais,
        numero_da_residencia,
      });

      request.session.usuario = { ...usuario.dataValues, senha: null }

      return response.redirect('/carrinho');
    } catch (error) {
      console.log(error);
    }
  }
}