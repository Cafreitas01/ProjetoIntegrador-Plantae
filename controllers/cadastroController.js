<<<<<<< HEAD
// const cadastroController = {
//     index: (req, res) => res.render('cadastro')
//   };
  
//   module.exports = cadastroController;

//   const { Aluno } = require("../database/models");

const cadastroController = {
  index: async (request, response) => {
    const cadastro = await Cadastro.findAll();

    response.render("index", { cadastro });
  },
  create: (request, response) => {
    response.render("usuario");
  },
  store: async (request, response) => {
    const { nome, sobrenome, ano_matricula } = request.body;

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

    return response.redirect("/cadastro");
  },
  edit: async (request, response) => {
    const { id } = request.params;

    const cadastro = await Usuario.findByPk(id);

    return response.render("cadastro", { cadastro })
  },
  destroy: async (request, response) => {
    const { id } = request.params;

    const cadastro = await cadastro.findByPk(id);

    await cadastro.destroy();

    return response.redirect("/cadastro");
  }

}
=======
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
      senha: bcrypt.hashSync(senha, 10)
    };

    usuariosModel.push(usuario);

    fs.writeFileSync(__dirname + '/../models/usuarios.json', JSON.stringify(usuariosModel))

    res.redirect('/login');
  }
};
>>>>>>> 0b3dbf7c68fb04d4b21227f001863c5dffd784fd

module.exports = cadastroController;