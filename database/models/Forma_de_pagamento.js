module.exports = (Sequelize, Datatypes) => {
    const Forma_de_pagamento = Sequelize.define("Forma_de_pagamento",{

    id:{
            type: Datatypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            allowNull: false
        },
    tipo_de_pagamento:{
        type: Datatypes.STRING,
        allowNull: false
    },
    vencimento:{
        type: Datatypes.INTEGER,
        allowNull: false
    },
    numero_da_conta:{
        type: Datatypes.INTEGER,
        allowNull: false
    },
    
     tableName:"formaDePagamento",
     timesTamps: true
    });


Forma_de_pagamento.associate = (models) => { 
    Forma_de_pagamento.hasMany(models.usuario,{
        foreignKey: "usuario_id",
        as: "usuario"
    })
}
return Forma_de_pagamento;
};