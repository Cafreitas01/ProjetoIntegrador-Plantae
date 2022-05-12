'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('forma_de_pagamento', [
      {
       tipo_de_pagamento:'Credito',
       vencimento:'01.03',
       numero_da_conta:'21252121',
       usuarios_id:'21',
       created_at:'03.03.2021',
       updated_at:'01.01.1990'
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('forma_de_pagamento', null, {});
  }
};