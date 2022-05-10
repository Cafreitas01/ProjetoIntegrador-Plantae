module.exports = (Sequelize, Datatypes) => {
    const Carrinho_sessao = Sequelize.define("Carrinho_sessao",{

    id:{
            type: Datatypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            allowNull: false
        },
    total:{
        type: Datatypes.INTEGER,
        allowNull: false
    },
    quantidade:{
        type: Datatypes.INTEGER,
        allowNull: false
    },
}, {
     tableName:"carrinho_sessao",
     timesTamps: true
    });
  
    Carrinho_sessao.associate =(models) => {
        Carrinho_sessao.hasMany(models.usuario,{
            foreignKey:"usuario_id",
            as: "usuario"
        })
    } 
};
