'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('item_carrinho', {
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      produtos_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      carrinho_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('item_carrinho');
  }
};