import React, { Component } from 'react'
import { cart } from '../data/cart'

export default class Checkout extends Component {
  state = {
    products: cart.products,
    totalCost: cart.totalCost,
  }

  componentDidMount = () => {
    if (this.props.location.product) {
      let productMap = new Map()
      productMap.set(
        this.props.location.product,
        this.props.location.quantity
      )
      this.setState({
        products: productMap,
        totalCost:
          this.props.location.product
            .cost *
          this.props.location.quantity,
      })
    }
  }

  render() {
    return (
      <div>
        {JSON.stringify(
          this.state.products
        ) +
          ' totalCost = ' +
          this.state.totalCost}
      </div>
    )
  }
}
