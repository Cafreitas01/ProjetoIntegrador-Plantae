module.exports = (Sequelize, Datatypes) => {
    const Estoque = Sequelize.define("Estoque", {
        quantidade: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        produto_id: {
            type: Datatypes.INTEGER,
            allowNull: false
        }

    }, {
        tableName: "estoque",
        underscored: true
    });

    Estoque.associate = (models) => {
        Estoque.hasMany(models.Produto, {
            foreigKey: "produto_id",
            as: "produto"
        })
    }
    return Estoque;
};