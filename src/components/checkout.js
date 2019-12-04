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
      <div className="container">
        Products are added to billing.
        <br />
        <b>
            Kindly pay ₹{this.state.totalCost} via upi.
        </b>


        <h3> Scan below given QR code to pay.</h3>

        <img className="img-thumbnail"
            src="https://www.dropbox.com/s/qohwqj3h32nysj1/PhonePe.jpeg?raw=1"
            alt="Contact on chacha prints for payments.">
        </img>
      </div>
    )
  }
}
