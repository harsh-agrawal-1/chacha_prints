const cart = {
  products: new Map(),
  totalCost: 0,
}
const addProduct = (
  product,
  quantity
) => {
  if (!cart.products.has(product)) {
    cart.products.set(product, quantity)
    cart.totalCost +=
      product.cost * quantity
  } else if (
    cart.products.get(product) !==
    quantity
  ) {
    cart.totalCost +=
      product.cost *
      (quantity -
        cart.products.get(product))
    cart.products.set(product, quantity)
  }
}

const removeProduct = product => {
  let costReduced = 0
  if (cart.products.has(product))
    costReduced =
      product.cost *
      cart.products.get(product)
  cart.products.delete(product)
  cart.totalCost -= costReduced
}

const clearCart = () => {
  cart.products.clear()
  cart.totalCost = 0
}

export {
  cart,
  addProduct,
  removeProduct,
  clearCart,
}
