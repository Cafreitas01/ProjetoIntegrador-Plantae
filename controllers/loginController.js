 const bcrypt = require('bcrypt');
const usuariosModel = require('../models/usuarios.json');

const loginController = {
  index: (req, res) => res.render('login'),
  store: (req, res) => {
    const { email, senha } = req.body;
    
    const usuario = usuariosModel.find(usuario => usuario.email === email);

    if (!usuario) {
      return res.render('cadastro', { erro: '' });
    }

    if (!bcrypt.compareSync(senha, usuario.senha)) {
      return res.render('login', { erro: 'Email e/ou senha estão incorretos. Tente novamente' });
    }

    req.session.usuario = usuario;

    res.redirect('/admin');
  }
};

module.exports = loginController;