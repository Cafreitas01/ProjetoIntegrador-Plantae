'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('estoque', [
      {
        quantidade:'1',
        produto_id:'212',
        created_at:'01.01.01',
        updated_at:'01.01.01'
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('estoque', null, {});
  }
};