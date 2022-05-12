'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('detalhe_de_pagamento', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false
      },
      formas_de_pagamento_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      pedidos_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('detalhe_de_pagamento');
  }
};