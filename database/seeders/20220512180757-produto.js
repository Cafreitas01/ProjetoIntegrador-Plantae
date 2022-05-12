'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('produto', [
      {
        tipo: 'Samambaia americana',
        preco: '9,90',
        categoria:'planta',
        descricao:'Samambaia Americana para area interna ou sombra',
        estoque:'5',
        tamanho:'0,30cm cuia 21, produzida por semente'
        },
    ], {});

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('produto', null, {});
  }
};
