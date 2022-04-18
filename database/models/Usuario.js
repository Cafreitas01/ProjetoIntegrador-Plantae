module.exports = (Sequelize, Datatypes) => {
    const Usuario = Sequelize.define("Usuario",{

    nome_completo: {
            type: Datatypes.STRING,
            allowNull: false
    },
    id:{
            type: Datatypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            allowNull: false
        },
    Email:{
        type: Datatypes.STRING,
        allowNull: false
    },
    data_de_nascimento:{
        type: Datatypes.INTEGER,
        allowNull: false
    },
    telefone:{
        type: Datatypes.INTEGER,
        allowNull: false
    },
    senha:{
        type: Datatypes.INTEGER,
        allowNull: false
    }, 
    rua:{
        type: Datatypes.STRING,
        allowNull: false
    },
    cidade:{
        type: Datatypes.STRING,
        allowNull: false
    },
    pais:{
        type: Datatypes.STRING,
        allowNull: false
    },
    numero_da_residencia:{
        type: Datatypes.INTEGER,
        allowNull: false
    },

}, {
     tableName:"usuarios",
     timesTamps: true
    });

    Usuario.associate = (models) => { 
        Usuario.hasMany(models.carrinho_sessao,{
            foreignKey: "carrinho_sessao_id",
            as: "carrinho_sessao"
        })
    }
    return Usuario;
};