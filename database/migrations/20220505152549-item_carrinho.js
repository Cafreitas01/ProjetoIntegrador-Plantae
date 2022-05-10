'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('item_carrinho', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
    });
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('item_carrinho');
  }
};