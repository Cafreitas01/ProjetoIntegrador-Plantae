'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('carrinho_sessao', { 
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
    await queryInterface.dropTable('carrinho_sessao');
  }
};