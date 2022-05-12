module.exports = (Sequelize, Datatypes) => {
    const Item_carrinho = Sequelize.define("Item_carrinho", {
        quantidade: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        produtos_id: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        carrinho_id: {
            type: Datatypes.INTEGER,
            allowNull: false
        },

    }, {
        tableName: "item_carrinho",
        timesTamps: false
    });

    Item_carrinho.associate = (models) => {
        Item_carrinho.belongsTo(models.Carrinho_sessao, {
            foreignKey: "Carrinho_sessao_Id_usuario",
            as: "carrinho_sessao"
        })
        Item_carrinho.belongsTo(models.Produto, {
            foreignKey: "produtos_id",
            as: "produto"
        })
    }
    return Item_carrinho;
};