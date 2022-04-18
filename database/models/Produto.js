module.exports = (Sequelize, Datatypes) => {
    const Produto = Sequelize.define("Produto",{

    id_produto:{
            type: Datatypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            allowNull: false
        },
    cor:{
        type: Datatypes.STRING,
        allowNull: false
    },
    preco:{
        type: Datatypes.INTEGER,
        allowNull: false
    },
    categoria:{
        type: Datatypes.STRING,
        allowNull: false
    },
    descricao:{
        type: Datatypes.STRING,
        allowNull: false
    },
    estoque:{
        type: Datatypes.INTEGER,
        allowNull: false
    },
    tamanho:{
        type: Datatypes.INTEGER,
        allowNull: false
    },
    nome_do_produto:{
        type: Datatypes.INTEGER,
        allowNull: false
    },
    numero_da_residencia:{
        type: Datatypes.INTEGER,
        allowNull: false
    },
    
}, {
     tableName:"produto",
     timesTamps: false
    });
    
    Produto.associate = (models) => { 
        Produto.hasMany(models.carrinho_sessao,{
            foreignKey: "carrinho_sessao_id",
            as: "carrinho_sessao"
        })
    }
    return Produto;
};