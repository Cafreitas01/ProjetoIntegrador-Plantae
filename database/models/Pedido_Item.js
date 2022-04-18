module.exports = (Sequelize, Datatypes) => {
    const pedido_item = Sequelize.define("pedido_item",{

    id:{
        type: Datatypes.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull: false
        },
    quantidade:{
        type: Datatypes.INTEGER,
        allowNull: false
    },
}, {
     tableName:"pedido_item",
     timesTamps: false
    });

    Pedido.associate = (models) => {
      Pedido.hasMany(models.pedido_item,{
          foreignKey: "pedido_item_id",
          as: "pedido_item"
      })
    }
    return pedido_item;
};