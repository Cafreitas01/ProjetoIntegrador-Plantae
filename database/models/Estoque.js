const { v4: uuid } = require('uuid');

module.exports = (Sequelize, Datatypes) => {
    const Estoque = Sequelize.define("Estoque", {
        quantidade: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        id: {
            type: Datatypes.UUID,
            primaryKey: true,
            allowNull: false
        },
        produto_id: {
            type: Datatypes.UUID,
            allowNull: false
        }

    }, {
        tableName: "estoque",
        underscored: true
    });

    Estoque.beforeValidate(product => product.id = uuid());

    Estoque.associate = models => {
        Estoque.hasMany(models.Product, {
            foreigKey: "productId",
            as: "products"
        })
    }
    return Estoque;
};