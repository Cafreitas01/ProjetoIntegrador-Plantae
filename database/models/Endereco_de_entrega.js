module.exports = (Sequelize, Datatypes) => {
    const Endereco_de_entrega = Sequelize.define("Endereco_de_entrega",{

    
    rua:{
        type: Datatypes.INTEGER,
        allowNull: false
    },
    numero_da_residencia:{
        type: Datatypes.INTEGER,
        allowNull: false
    },
    bairro:{
        type:Datatypes.STRING,
        allowNull:false
    },
    cidade:{
        type:Datatypes.STRING,
        allowNull:false
    },
    pais:{
        type:Datatypes.STRING,
        allowNull:false
    },
    CEP:{
        type: Datatypes.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull: false
    },
}, {
     tableName:"endereco_de_entrega",
     timesTamps: false
    });

      return Endereco_de_entrega;
};





