'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('estoque', {
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      produto_id: {
        type: Datatypes.INTEGER,
        allowNull: false
      },

      created_at: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false
      },
      updated_at: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false
      },
    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('estoque');
  }
};
