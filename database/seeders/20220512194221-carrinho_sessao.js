'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('carrinho_sessao', [
      {
        total: '39.90',
        usuario_id: '252',
        created_at: '01.01.01',
        updated_at: '01.01.01'
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('carrinho_sessao', null, {});
  }
};
