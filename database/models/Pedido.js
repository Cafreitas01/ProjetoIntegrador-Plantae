module.exports = (Sequelize, Datatypes) => {
    const Pedido = Sequelize.define("Pedido", {
        total: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        ordem_de_servico: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
    }, {
        tableName: "pedido",
        timesTamps: true
    });


    return Pedido;
};