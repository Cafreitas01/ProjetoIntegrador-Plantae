module.exports = (Sequelize, Datatypes) => {
    const Pedido_item = Sequelize.define("Pedido_item", {
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
        produto_id: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        pedido_id: {
            type: Datatypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: "pedido_item",
        underscored: true
    });

    Pedido_item.associate = (models) => {
        Pedido_item.belongsTo(models.Pedido, {
            foreignKey: "pedido_id",
            as: "pedido"
        })
        Pedido_item.belongsTo(models.Produto, {
            foreignKey: "produto_id",
            as: "produto"
        })
    }
    return Pedido_item;
};