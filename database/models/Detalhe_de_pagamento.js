module.exports = (Sequelize, Datatypes) => {
    const DetalheDePagamento = Sequelize.define("DetalheDePagamento", {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        status: {
            type: Datatypes.STRING,
            allowNull: false
        },
        formas_de_pagamento_id: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        pedidos_id: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
    }, {
        tableName: "detalhe_de_pagamento",
        timestamps: false
    });

    DetalheDePagamento.associate = (models) => {
        DetalheDePagamento.hasMany(models.FormaDePagamento, {
            foreignKey: "formas_de_pagamento_id",
            as: "forma_de_pagamento"
        })

        DetalheDePagamento.hasMany(models.Pedido, {
            foreignKey: "pedido_id",
            as: "pedido"
        })
    }
    return DetalheDePagamento;
};