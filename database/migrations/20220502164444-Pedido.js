'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pedido', {
      total: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      ordem_de_serviço: {
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
    await queryInterface.dropTable('pedido');
  }
};
