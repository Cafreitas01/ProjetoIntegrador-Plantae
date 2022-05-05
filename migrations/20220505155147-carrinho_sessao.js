'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('detalhe_de_pagamento', { 
      id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull: false
    },
total:{
    type: Sequelize.INTEGER,
    allowNull: false
},
quantidade:{
    type: Sequelize.INTEGER,
    allowNull: false
},
    });
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('detalhe_de_pagamento');
  }
};