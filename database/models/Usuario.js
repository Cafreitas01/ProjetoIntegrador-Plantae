module.exports = (Sequelize, Datatypes) => {
    const Usuario = Sequelize.define("Usuario", {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nome_completo: {
            type: Datatypes.STRING,
            allowNull: false
        },
        email: {
            type: Datatypes.STRING,
            allowNull: false
        },
        senha: {
            type: Datatypes.INTEGER,
            allowNull: false
        },

    }, {
        tableName: "usuarios",
        underscored: true
    });

    Usuario.beforeValidate(usuario => {
        usuario.id = uuid()
      });

    Usuario.associate = (models) => {
        Usuario.hasMany(models.FormaDePagamento, {
            foreignKey: "usuarios_id",
            as: "formasDePagamento",
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        })
    }
    return Usuario;
};