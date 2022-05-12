module.exports = (Sequelize, Datatypes) => {
    const Carrinho_sessao = Sequelize.define("Carrinho_sessao", {

        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        total: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        usuario_id: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
    }, {
        tableName: "carrinho_sessao",
        underscored: true
    });

    Carrinho_sessao.associate = (models) => {
        Carrinho_sessao.hasMany(models.Usuario, {
            foreignKey: "usuario_id",
            as: "usuario"
        })
    }
    return Carrinho_sessao;
};
