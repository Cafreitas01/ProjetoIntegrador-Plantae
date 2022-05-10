'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('forma_de_pagamento', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
    quantidade:{
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('forma_de_pagamento');
  }
};
