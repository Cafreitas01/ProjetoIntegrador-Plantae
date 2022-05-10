module.exports = (Sequelize, Datatypes) => {
    const Pedido = Sequelize.define("Pedido",{

    ordem_de_servico:{
            type: Datatypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            allowNull: false
        },
    total:{
        type: Datatypes.INTEGER,
        allowNull: false
    },
   
}, {
     tableName:"pedido",
     timesTamps: true
    });

   
    return Pedido;
};