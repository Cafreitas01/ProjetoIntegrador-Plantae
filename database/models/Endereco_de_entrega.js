module.exports = (Sequelize, Datatypes) => {
    const Endereco_de_entrega = Sequelize.define("Endereco_de_entrega", {
        rua: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        numero_da_residencia: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        bairro: {
            type: Datatypes.STRING,
            allowNull: false
        },
        cidade: {
            type: Datatypes.STRING,
            allowNull: false
        },
        pais: {
            type: Datatypes.STRING,
            allowNull: false
        },
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        pedido_id: {
            type: Datatypes.INTEGER,
            allowNull: false
        },

    }, {
        tableName: "endereco_de_entrega",
        underscored: true
    });

    Endereco_de_entrega.associate = (models) => {
        Endereco_de_entrega.hasMany(models.Endereco_de_entrega, {
            foreigKey: "pedidos_id",
            as: "Endereco_de_entrega"
        })
    }
    return Endereco_de_entrega;
};