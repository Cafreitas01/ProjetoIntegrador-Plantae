module.exports = (Sequelize, Datatypes) => {
    const Detalhe_de_pagamento = Sequelize.define("Detalhe_de_pagamento",{

    id_pedido:{
            type: Datatypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            allowNull: false
        },
    pedido_status:{
        type: Datatypes.STRING,
        allowNull: false
    },
    quantidade:{
     type: Datatypes.INTEGER,
     allowNull: false
    },

}, {
     tableName:"detalhe_de_pagamento",
     timesTamps: false
    });

    Detalhe_de_pagamento.associate = (models) => {
        Detalhe_de_pagamento.hasMany(models.forma_de_pagamento,{
            foreignKey: "forma_de_pagamento_id",
            as: "forma_de_pagamento"
        })
        
        Detalhe_de_pagamento.hasMany(models.forma_de_pagamento,{
            foreignKey: "pedido_id",
            as: "pedido"
        })
    }
    return Detalhe_de_pagamento;
};