'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('pedido', { 
      pedido_id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false
      },
      total: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ordem_de_serviço: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at:{
        type:"TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false
      },
      updated_at:{
        type:"TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false
      },
    });
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('pedido');
  }
};