module.exports = (Sequelize, Datatypes) => {
    const FormaDePagamento = Sequelize.define("FormaDePagamento", {
        tipo_de_pagamento: {
            type: Datatypes.STRING,
            allowNull: false
        },
        vencimento: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        numero_da_conta: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        usuarios_id: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
    }, {
        tableName: "forma_de_pagamento",
        underscored: true
    });


    FormaDePagamento.associate = (models) => {
        FormaDePagamento.belongsTo(models.User, {
            foreignKey: "user_id",
            as: "user"
        })
    }
    return FormaDePagamento;
};