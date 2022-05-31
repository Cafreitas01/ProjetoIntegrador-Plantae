// const carrinhoController = {
//   index: (req, res) => res.render('carrinho')
// };

// module.exports = carrinhoController;

const { Carrinho_sessao, Item_Carrinho, Produto, Usuario } = require('../database/models');

exports.renderCart = async (request, response) => {
  const carrinho_sessao = await Carrinho_sessao.findOne({
    where: { usuarioId: request.session.usuarios.id },
    include: {
      model: Item_Carrinho,
      as: "items",
      include: {
        model: Produto,
        as: "produto"
      }
    }
  });

  return response.render('carrinho_sessao', { carrinho_sessao });
}

exports.addToCart = async function (request, response) {
  const { produtoId } = request.params;
  const { quantity = 1 } = request.body;

  const carrinho_sessao = await Carrinho_sessao.findOne({
    where: { usuarioId: request.session.usuario.id },
    include: { all: true, nested: true }
  });

  const isProductInCart = await carrinho_sessao.getItems({ where: { produtoId } })
    .then(items => items[0])

  if (!isProductInCart) {
    await carrinho_sessao.createItem({ produtoId, quantity: Number(quantity) });
  } else {
    isProductInCart.quantity += Number(quantity);
    await isProductInCart.save()
  }

  await carrinho_sessao.reload();

  const total = carrinho_sessao.toJSON().items.reduce((total, item) => {
    return total + item.quantity * item.produto.price;
  }, 0);

  carrinho_sessao.total = total;

  await carrinho_sessao.save();

  return response.redirect('/carrinho_sessao');
};

exports.removeFromCart = async function (request, response) {
  const { produtoId } = request.params;
  const { id: usuarioId } = request.session.Usuario;

  const carrinho = await Carrinho.findOne({
    where: { usuarioId },
    include: { all: true, nested: true }
  });

  await Item_Carrinho.destroy({ where: { produtoId } });

  await carrinho.updateTotal(usuarioId);

  return response.redirect('/carrinho');
}

exports.incrementProductQuantity = async function (request, response) {
  const { produtoId } = request.params;
  const { id: usuarioId } = request.session.Usuario;

  const carrinho = await Carrinho.findOne({
    where: { usuarioId },
    include: { all: true, nested: true }
  });

  const cartProduct = await carrinho.getItems({ where: { produtoId } })
    .then(items => items[0]);

  cartProduct.quantity += 1;

  await cartProduct.save()

  await carrinho.updateTotal(usuarioId);

  return response.redirect('/carrinho');
}

exports.decrementProductQuantity = async function (request, response) {
  const { produtoId } = request.params;
  const { id: usuarioId } = request.session.Usuarios;

  const carrinho = await Carrinho.findOne({
    where: { usuarioId },
    include: { all: true, nested: true }
  });

  const cartProduct = await carrinho.getItems({ where: { produtoId } })
    .then(items => items[0]);

  if (cartProduct.quantity - 1 === 0) {
    await Item_Carrinho.destroy({ where: { produtoId } });
  } else {
    cartProduct.quantity -= 1;
    await cartProduct.save()
  }

  await Carrinho_sessao.updateTotal(usuarioId);

  return response.redirect('/carrinho');
  
}