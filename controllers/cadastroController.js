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

module.exports = cadastroController;