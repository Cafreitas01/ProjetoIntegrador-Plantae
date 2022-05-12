'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('pedido', [
      {
        total: '23.20',
        ordem_de_serviço: '1',
        created_at:'01.01.01',
        updated_at:'01.01.01'
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('pedido', null, {});
  }
};
