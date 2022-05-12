'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('endereco_de_entrega', [
      {
        rua:'daesquina',
        numero_da_residencia:'3',
        bairro:'algumPorAi',
        cidade:'São Paulo',
        pais:'Brasil',
        pedido_id:'2121',
        created_at:'01.01.01',
        updated_at:'01.01.01'
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('endereco_de_entrega', null, {});
  }
};