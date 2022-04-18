module.exports = (Sequelize, Datatypes) => {
    const Item_carrinho = Sequelize.define("Item_carrinho",{

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
     tableName:"itemcarrinho",
     timesTamps: false
    });

    Item_carrinho.associate = (models) =>{
        Item_carrinho.belongsTo(models.Carrinho_sessao,{
            foreignKey: "Carrinho_sessao_Id_usuario",
            as: "produto"
        })

    }
    return Item_carrinho;
};