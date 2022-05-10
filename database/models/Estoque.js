module.exports = (Sequelize, Datatypes) => {
    const Estoque = Sequelize.define("Estoque",{

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
     tableName:"estoque",
     timesTamps: true
    });

    Estoque.associate = (models) => {
        Estoque.hasMany(models.estoque_id,{
            foreigKey: "produto_id",
            as: "produto"
        })
    }
    return Estoque;
};