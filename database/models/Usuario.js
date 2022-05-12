module.exports = (Sequelize, Datatypes) => {
    const Usuario = Sequelize.define("Usuario", {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        cpf: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        email: {
            type: Datatypes.STRING,
            allowNull: false
        },
        dataDeNascimento: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        telefone: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        senha: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        rua: {
            type: Datatypes.STRING,
            allowNull: false
        },
        cidade: {
            type: Datatypes.STRING,
            allowNull: false
        },
        pais: {
            type: Datatypes.STRING,
            allowNull: false
        },
        numero_da_residencia: {
            type: Datatypes.INTEGER,
            allowNull: false
        },

    }, {
        tableName: "usuarios",
        underscored: true
    });

    Usuario.associate = (models) => {
        Usuario.hasMany(models.FormaDePagamento, {
            foreignKey: "usuarios_id",
            as: "formasDePagamento"
        })
    }
    return Usuario;
};