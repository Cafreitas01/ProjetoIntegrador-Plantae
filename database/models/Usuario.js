module.exports = (Sequelize, Datatypes) => {
    const Usuario = Sequelize.define("Usuario",{

    
    id:{
            type: Datatypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            allowNull: false
        },
        CPF: {
            type: Datatypes.INTEGER,
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
     underscored: true
    });

    Usuario.associate = (models) => { 
        Usuario.hasMany(models.forma_de_pagamento,{
            foreignKey: "id",
            as: "forma_de_pagamento"
        })
    }
    return Usuario;
};