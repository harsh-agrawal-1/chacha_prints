import React, { Component } from 'react'
const CartContext = React.createContext()

class CartProvider extends Component {
  cart = []

  addToCart = product => {
    this.cart.push(product)
  }

  render() {
    return (
      <CartContext.Provider
        value={{
          name: 'harsh',
          cart: this.cart,
          addToCart: this.addToCart,
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    )
  }
}

const CartConsumer =
  CartContext.Consumer

export { CartProvider, CartConsumer }
