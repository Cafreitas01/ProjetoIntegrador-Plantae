const dataBase = require('./dataBase')

const Usuario = dataBase.sequelize.define('usuario', {
    id: {
        type: dataBase.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome_completo: {
        type: dataBase.Sequelize.INTEGER,
        allowNull: false
      },
    cpf: {
        type: dataBase.Sequelize.INTEGER,
        allowNull: false
    },
    email: {
        type: dataBase.Sequelize.STRING,
        allowNull: false
    },
    dataDeNascimento: {
        type: dataBase.Sequelize.INTEGER,
        allowNull: false
    },
    telefone: {
        type: dataBase.Sequelize.INTEGER,
        allowNull: false
    },
    senha: {
        type: dataBase.Sequelize.INTEGER,
        allowNull: false
    },
    rua: {
        type: dataBase.Sequelize.STRING,
        allowNull: false
    },
    cidade: {
        type: dataBase.Sequelize.STRING,
        allowNull: false
    },
    pais: {
        type: dataBase.Sequelize.STRING,
        allowNull: false
    },
    numero_da_residencia: {
        type: dataBase.Sequelize.INTEGER,
        allowNull: false
    },

}, {
    tableName: "usuario",
    underscored: true
});


module.exports = Usuario;