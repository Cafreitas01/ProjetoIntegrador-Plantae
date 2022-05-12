'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('item_carrinho', [
      {
        quantidade:'1',
        produtos_id:'2',
        carrinho_id:'3'
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('item_carrinho', null, {});
  }
};