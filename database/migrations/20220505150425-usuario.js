'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usuario', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome_completo: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      Email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      data_de_nascimento: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      telefone: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      senha: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      rua: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cidade: {
        type: Sequelize.STRING,
        allowNull: false
      },
      pais: {
        type: Sequelize.STRING,
        allowNull: false
      },
      numero_da_residencia: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false
      },
      updated_at: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false
      },
    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('usuario');

  }
};
