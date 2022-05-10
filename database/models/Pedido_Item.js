module.exports = (Sequelize, Datatypes) => {
    const Pedido_item = Sequelize.define("pedido_item",{

    quantidade:{
        type: Datatypes.INTEGER,
        allowNull: false
    },
    id:{
        type: Datatypes.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull: false
        },
}, {
     tableName:"pedido_item",
     timesTamps: true
    });

    Pedido_item.associate = (models) => {
      Pedido_item.belongsTo(models.pedido_item,{
          foreignKey: "pedido_id",
          as: "pedido"
      })
      Pedido_item.belongsTo(models.pedido_item,{
        foreignKey: "produto_id",
        as: "produto"
    })
    }
    return Pedido_item;
};