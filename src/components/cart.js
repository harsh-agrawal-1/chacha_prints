import React, {
  Component,
  Fragment,
} from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import store from '../store'

@observer
class Cart extends Component {
  componentDidMount = () => {
    store.deserialize()
  }

  render() {
    const {
      cart,
      removeProduct,
    } = store
    return (
      <div class="pb-5">
        <div class="container">
          {cart.products &&
          cart.products.size != 0 ? (
            <Fragment>
              <div class="row">
                <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            class="border-0 bg-light"
                          >
                            <div class="p-2 px-3 text-uppercase">
                              Product
                            </div>
                          </th>
                          <th
                            scope="col"
                            class="border-0 bg-light"
                          >
                            <div class="py-2 text-uppercase">
                              Price
                            </div>
                          </th>
                          <th
                            scope="col"
                            class="border-0 bg-light"
                          >
                            <div class="py-2 text-uppercase">
                              Quantity
                            </div>
                          </th>
                          <th
                            scope="col"
                            class="border-0 bg-light"
                          >
                            <div class="py-2 text-uppercase">
                              Remove
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.from(
                          cart.products.keys()
                        ).map(
                          (
                            product,
                            index
                          ) => {
                            product = JSON.parse(product);
                            return (
                              <tr
                                key={
                                  index
                                }
                              >
                                <th
                                  scope="row"
                                  class="border-0"
                                >
                                  <div class="p-2">
                                    <img
                                      src={
                                        product.imgUrl
                                      }
                                      alt={
                                        product.name
                                      }
                                      width="70"
                                      class="img-fluid rounded shadow-sm"
                                    />
                                    <div class="ml-3 d-inline-block align-middle">
                                      <h5 class="mb-0">
                                        {' '}
                                        <a
                                          href="#"
                                          class="text-dark d-inline-block align-middle"
                                        >
                                          {
                                            product.name
                                          }
                                        </a>
                                      </h5>
                                      <span class="text-muted font-weight-normal font-italic d-block">
                                        Category:
                                        Watches
                                      </span>
                                    </div>
                                  </div>
                                </th>
                                <td class="border-0 align-middle">
                                  <strong>
                                    {'₹' +
                                      product.cost}
                                  </strong>
                                </td>
                                <td class="border-0 align-middle">
                                  <strong>
                                    {cart.products.get(
                                      JSON.stringify(product)
                                    )}
                                  </strong>
                                </td>
                                <td class="border-0 align-middle">
                                  <a
                                    href="#"
                                    class="text-dark"
                                    onClick={event => {
                                      event.stopPropagation()
                                      removeProduct(
                                        product
                                      )
                                    }}
                                  >
                                    <i class="fa fa-trash"></i>
                                  </a>
                                </td>
                              </tr>
                            )
                          }
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div class="row py-5 p-4 bg-white rounded shadow-sm">
                <div class="col-lg-6">
                  <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                    Coupon code
                  </div>
                  <div class="p-4">
                    <p class="font-italic mb-4">
                      If you have a
                      coupon code,
                      please enter it in
                      the box below
                    </p>
                    <div class="input-group mb-4 border rounded-pill p-2">
                      <input
                        type="text"
                        placeholder="Apply coupon"
                        aria-describedby="button-addon3"
                        class="form-control border-0"
                      />
                      <div class="input-group-append border-0">
                        <button
                          id="button-addon3"
                          type="button"
                          class="btn btn-dark px-4 rounded-pill"
                        >
                          <i class="fa fa-gift mr-2"></i>
                          Apply coupon
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                    ADDRESS OF DELIVERY
                  </div>
                  <div class="p-4">
                    <p class="font-italic mb-4">
                      Please provide
                      complete address
                      along with phone
                      number.
                    </p>
                    <textarea
                      name=""
                      cols="30"
                      rows="2"
                      class="form-control"
                    ></textarea>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                    Order summary{' '}
                  </div>
                  <div class="p-4">
                    <p class="font-italic mb-4">
                      Shipping and
                      additional costs
                      are calculated
                      based on address
                      you have entered.
                    </p>
                    <ul class="list-unstyled mb-4">
                      <li class="d-flex justify-content-between py-3 border-bottom">
                        <strong class="text-muted">
                          Order Subtotal{' '}
                        </strong>
                        <strong>
                          ₹
                          {
                            cart.totalCost
                          }
                        </strong>
                      </li>
                      <li class="d-flex justify-content-between py-3 border-bottom">
                        <strong class="text-muted">
                          Shipping and
                          handling
                        </strong>
                        <strong>
                          ₹0
                        </strong>
                      </li>
                      <li class="d-flex justify-content-between py-3 border-bottom">
                        <strong class="text-muted">
                          Tax
                        </strong>
                        <strong>
                          ₹0
                        </strong>
                      </li>
                      <li class="d-flex justify-content-between py-3 border-bottom">
                        <strong class="text-muted">
                          Total
                        </strong>
                        <h5 class="font-weight-bold">
                          ₹
                          {cart.totalCost !=
                          0
                            ? cart.totalCost
                            : 0}
                        </h5>
                      </li>
                    </ul>
                    <Link
                      to="/checkout"
                      class="btn btn-dark rounded-pill py-2 btn-block"
                    >
                      Procceed to
                      checkout
                    </Link>
                  </div>
                </div>
              </div>
            </Fragment>
          ) : (
            <h1>Your cart is empty.</h1>
          )}
        </div>
      </div>
    )
  }
}

export default Cart
