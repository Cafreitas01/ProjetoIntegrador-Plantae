'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('endereco_de_entrega', { 
      rua:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    numero_da_residencia:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    bairro:{
        type:Sequelize.STRING,
        allowNull:false
    },
    cidade:{
        type:Sequelize.STRING,
        allowNull:false
    },
    pais:{
        type:Sequelize.STRING,
        allowNull:false
    },
    CEP:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull: false
    },
    });
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('endereco_de_entrega');
  }
};

