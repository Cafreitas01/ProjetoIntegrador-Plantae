'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('produto', { 
      id_produto: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      cor: {
        type: Sequelize.STRING,
        allowNull: false
      },
      preco: {
        type: Sequelize.STRING,
        allowNull: false
      },
      categoria: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      estoque: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      tamanho: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      nome_do_produto: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      numero_da_residencia: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
    });
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('produto');
  }
};