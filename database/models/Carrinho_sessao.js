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

    // Preço de produtos
    Carrinho_sessao.beforeValidate(cart => Carrinho_sessao.id = uuid());

    Carrinho_sessao.prototype.updateTotal = async function(userId){
      const carrinho_sessao =  await Carrinho_sessao.findOne({ 
        where: { userId },
        include: { all: true, nested: true }
      });
  
      const total = carrinho_sessao.toJSON().items.reduce((total, item) => {
        return total + item.quantity * item.product.price;
      }, 0);
  
      carrinho_sessao.total = total;
  
      await carrinho_sessao.save();
    }
 // Preço de produtos
 
    Carrinho_sessao.associate = (models) => {
        Carrinho_sessao.hasMany(models.Usuario, {
            foreignKey: "usuario_id",
            as: "usuario"
        })
    }
    return Carrinho_sessao;
};
