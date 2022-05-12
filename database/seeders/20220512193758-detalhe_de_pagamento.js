'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('detalhe_de_pagamento', [
      {
        status:'pago',
        formas_de_pagamento_id:'crédito',
        pedidos_id:'23',
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('detalhe_de_pagamento', null, {});
  }
};