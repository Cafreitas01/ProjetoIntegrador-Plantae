module.exports = (Sequelize, Datatypes) => {
    const Produto = Sequelize.define("Produto", {
        cor: {
            type: Datatypes.STRING,
            allowNull: false
        },
        preco: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        categoria: {
            type: Datatypes.STRING,
            allowNull: false
        },
        descricao: {
            type: Datatypes.STRING,
            allowNull: false
        },
        estoque: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        tamanho: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

    }, {
        tableName: "produto",
        timesTamps: false
    });
    return Produto;
};