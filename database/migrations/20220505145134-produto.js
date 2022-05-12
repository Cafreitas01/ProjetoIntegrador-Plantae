'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('produto', {
      tipo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      preco: {
        type: Sequelize.INTEGER,
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
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('produto');
  }
};