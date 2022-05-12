'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Usuario', [
      {
        nome_completo: 'maria',
        cpf: '32523212512',
        Email: 'exemplo@exemplo.com.br',
        data_de_nascimento: '03021980',
        telefone: '1121521212',
        senha: 'lua3020',
        rua: 'daesquina',
        cidade: 'Sao Paulo',
        pais: 'Brasil',
        numero_da_residencia: '2',
        created_at:'01.01.01',
        updated_at:'01.01.01'
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Usuario', null, {});
  }
};
