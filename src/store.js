import {
  autorun,
  observable,
} from 'mobx'

class CartClass {
  @observable products = new Map()
  @observable totalCost = 0
}
class Store {
  @observable cart = new CartClass()

  addProduct = (product, quantity) => {
    this.deserialize()
    if (
      !this.cart.products.has(
        JSON.stringify(product)
      )
    ) {
      this.cart.products.set(
        JSON.stringify(product),
        quantity
      )
      this.cart.totalCost +=
        product.cost * quantity
    } else if (
      this.cart.products.get(
        JSON.stringify(product)
      ) !== quantity
    ) {
      this.cart.totalCost +=
        product.cost *
        (quantity -
          this.cart.products.get(
            JSON.stringify(product)
          ))
      this.cart.products.set(
        JSON.stringify(product),
        quantity
      )
    }
    this.serialize()
  }

  removeProduct = product => {
    this.deserialize()
    let costReduced = 0
    if (
      this.cart.products.has(
        JSON.stringify(product)
      )
    )
      costReduced =
        product.cost *
        this.cart.products.get(
          JSON.stringify(product)
        )
    this.cart.products.delete(
      JSON.stringify(product)
    )
    this.cart.totalCost -= costReduced
    this.serialize()
  }

  serialize = () => {
    localStorage.clear()
    localStorage.setItem(
      'products',
      JSON.stringify(
        Array.from(
          this.cart.products.keys()
        )
      )
    )
    localStorage.setItem(
      'quantities',
      JSON.stringify(
        Array.from(
          this.cart.products.values()
        )
      )
    )
    localStorage.setItem(
      'totalCost',
      this.cart.totalCost
    )
  }

  deserialize = () => {
    const products = JSON.parse(
      localStorage.getItem('products')
    )
    const quantities = JSON.parse(
      localStorage.getItem('quantities')
    )
    if (
      products &&
      quantities &&
      Array.isArray(products) &&
      Array.isArray(quantities)
    ) {
      this.cart.products.clear()
      products.forEach(
        (product, index) => {
          this.cart.products.set(
            product,
            quantities[index]
          )
        }
      )
      this.cart.totalCost = parseInt(
        localStorage.getItem(
          'totalCost'
        )
      )
    }
  }

  clearCart = () => {
    this.cart.products.clear()
    this.cart.totalCost = 0
    localStorage.clear()
  }
}

const store = new Store()

export default store

autorun(() => {
  console.log('running')
})
