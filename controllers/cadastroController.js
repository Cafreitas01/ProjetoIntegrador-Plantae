const uuidv4 = require('uuidv4');
const bcrypt = require('bcrypt');
const fs = require('fs');

const usuariosModel = require('../models/usuarios.json');
const path = require('path');



const cadastroController = {
  index: (req, res) => {
    res.render('cadastro')
  },
  store: (req, res) => {
    const { nome, email, senha, confirmaSenha } = req.body;

    if (senha !== confirmaSenha) {
      return res.render('cadastro', { erro: 'Senhas não coincidem' });
    };

    const emailJaExiste = usuariosModel.some(usuario => usuario.email === email);

    if (emailJaExiste) {
      return res.render('cadastro', { erro: 'Email já utilizado. Tente outro' });
    }

    const usuario = {
      id: uuidv4.uuid(),
      nome,
      email,
      senha: bcrypt.hashSync(senha, 10),
      nome_completo,
      cpf,
      email,
      data_de_nascimento,
      telefone,
      rua,
      cidade,
      pais,
      numero_da_residencia,
    };

    usuariosModel.push(usuario);

    fs.writeFileSync(__dirname + '/../models/usuarios.json', JSON.stringify(usuariosModel))

    res.redirect('/login');
  }
};

module.exports = cadastroController;


