module.exports = (Sequelize, Datatypes) => {
    const Pedido = Sequelize.define("Pedido",{

    pedido_id:{
            type: Datatypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            allowNull: false
        },
    total:{
        type: Datatypes.INTEGER,
        allowNull: false
    },
    ordem_de_servico:{
        type: Datatypes.STRING,
        allowNull: false
    },
}, {
     tableName:"pedido",
     timesTamps: false
    });

    Pedido.associate = (models) =>{
        Pedido.hasMany(models.endereco_de_entrega,{
            foreignKey: "endereco_de_entrega_id",
            as:"endereco_de_entrega"
        })
    }
    return Pedido;
};