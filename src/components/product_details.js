import React, { Component } from 'react'
import store from '../store'
import { Link } from 'react-router-dom'

export default class ProductDetails extends Component {
  state = {
    quantity: 1,
  }

  render() {
    const { addProduct } = store
    const product = this.props.location
      .state.data
    return (
      <div class="super_container">
        <div class="single_product">
          <div
            class="container-fluid"
            style={{
              backgroundColor: '#fff',
              padding: '11px',
            }}
          >
            <div class="row">
              <div class="col-lg-2 order-lg-1 order-2">
                <ul class="image_list">
                  <li data-image="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713229/single_4.jpg">
                    <img
                      src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713229/single_4.jpg"
                      alt=""
                    />
                  </li>
                  <li data-image="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713228/single_2.jpg">
                    <img
                      src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713228/single_2.jpg"
                      alt=""
                    />
                  </li>
                  <li data-image="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713228/single_3.jpg">
                    <img
                      src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713228/single_3.jpg"
                      alt=""
                    />
                  </li>
                </ul>
              </div>
              <div class="col-lg-4 order-lg-2 order-1">
                <div class="image_selected">
                  <img
                    src={product.imgUrl}
                    alt=""
                  />
                </div>
              </div>
              <div class="col-lg-6 order-3">
                <div class="product_description">
                  <div class="product_name">
                    {product.name}
                  </div>
                  <div class="product-rating">
                    <span class="badge badge-success">
                      <i class="fa fa-star"></i>{' '}
                      4.5 Star
                    </span>{' '}
                    <span class="rating-review">
                      {
                        '35 Ratings & 45 Reviews'
                      }
                    </span>
                  </div>
                  <div>
                    {' '}
                    <span class="product_price">
                      ₹ {product.cost}
                    </span>{' '}
                    <strike class="product_discount">
                      {' '}
                      <span
                        style={{
                          color:
                            'black',
                        }}
                      >
                        ₹ 2,000
                      </span>{' '}
                    </strike>{' '}
                  </div>
                  <div>
                    {' '}
                    <span class="product_saved">
                      You Saved:
                    </span>{' '}
                    <span
                      style={{
                        color: 'black',
                      }}
                    >
                      ₹ 2,000
                    </span>{' '}
                  </div>
                  <hr class="singleline" />
                  <div>
                    {' '}
                    <span class="product_info">
                      EMI starts at ₹
                      2,000. No Cost EMI
                      Available
                    </span>
                    <br />{' '}
                    <span class="product_info">
                      Warranty: 6 months
                      warranty
                    </span>
                    <br />{' '}
                    <span class="product_info">
                      7 Days easy return
                      policy
                    </span>
                    <br />{' '}
                    <span class="product_info">
                      7 Days easy return
                      policy
                    </span>
                    <br />{' '}
                    <span class="product_info">
                      In Stock: 25 units
                      sold this week
                    </span>{' '}
                  </div>
                  <div>
                    <div class="row">
                      <div class="col-md-5">
                        <div class="br-dashed">
                          <div class="row">
                            <div class="col-md-3 col-xs-3">
                              {' '}
                              <img src="https://img.icons8.com/color/48/000000/price-tag.png" />{' '}
                            </div>
                            <div class="col-md-9 col-xs-9">
                              <div class="pr-info">
                                {' '}
                                <span class="break-all">
                                  Get 5%
                                  instant
                                  discount
                                  + 10X
                                  rewards
                                  @
                                  RENTOPC
                                </span>{' '}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-7">
                        {' '}
                      </div>
                    </div>
                    <div
                      class="row"
                      style={{
                        marginTop:
                          '15px',
                      }}
                    >
                      <div
                        class="col-xs-6"
                        style={{
                          marginLeft:
                            '15px',
                        }}
                      >
                        {' '}
                        <span class="product_options">
                          RAM Options
                        </span>
                        <br />{' '}
                        <button class="btn btn-primary btn-sm">
                          4 GB
                        </button>{' '}
                        <button class="btn btn-primary btn-sm">
                          8 GB
                        </button>{' '}
                        <button class="btn btn-primary btn-sm">
                          16 GB
                        </button>{' '}
                      </div>
                      <div
                        class="col-xs-6"
                        style={{
                          marginLeft:
                            '55px',
                        }}
                      >
                        {' '}
                        <span class="product_options">
                          Storage
                          Options
                        </span>
                        <br />{' '}
                        <button class="btn btn-primary btn-sm">
                          500 GB
                        </button>{' '}
                        <button class="btn btn-primary btn-sm">
                          1 TB
                        </button>{' '}
                      </div>
                    </div>
                  </div>
                  <hr class="singleline" />
                  <div class="order_info d-flex flex-row">
                    <form action="#" />
                  </div>
                  <div class="row">
                    <div
                      class="col-xs-6"
                      style={{
                        marginLeft:
                          '13px',
                      }}
                    >
                      <div class="product_quantity">
                        <span>
                          QTY:
                        </span>
                        <input
                          id="quantity_input"
                          type="text"
                          pattern="[0-9]*"
                          value={
                            this.state
                              .quantity
                          }
                          onChange={event => {
                            event.stopPropagation()
                            if (
                              event.target &&
                              typeof event
                                .target
                                .value ===
                                'number' &&
                              this.state
                                .quantity !==
                                event
                                  .target
                                  .value
                            )
                              this.setState(
                                {
                                  quantity:
                                    event
                                      .target
                                      .value,
                                }
                              )
                          }}
                        />
                        <div class="quantity_buttons">
                          <div
                            id="quantity_inc_button"
                            class="quantity_inc quantity_control"
                            onClick={event => {
                              event.stopPropagation()
                              let quantity = this
                                .state
                                .quantity
                              this.setState(
                                {
                                  quantity:
                                    quantity +
                                    1,
                                }
                              )
                            }}
                          >
                            <i class="fas fa-chevron-up"></i>
                          </div>
                          <div
                            id="quantity_dec_button"
                            class="quantity_dec quantity_control"
                            onClick={event => {
                              event.stopPropagation()
                              let quantity = this
                                .state
                                .quantity
                              if (
                                quantity >
                                1
                              )
                                this.setState(
                                  {
                                    quantity:
                                      quantity -
                                      1,
                                  }
                                )
                            }}
                          >
                            <i class="fas fa-chevron-down"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xs-6">
                      {' '}
                      <button
                        type="button"
                        class="btn btn-primary shop-button"
                        onClick={() => {
                          addProduct(
                            product,
                            this.state
                              .quantity
                          )
                        }}
                      >
                        Add to Cart
                      </button>{' '}
                      <Link
                        to={{
                          pathname:
                            '/checkout',
                          product: product,
                          quantity: this
                            .state
                            .quantity,
                        }}
                        class="btn btn-success shop-button"
                      >
                        Buy Now
                      </Link>
                      <div class="product_fav">
                        <i class="fas fa-heart"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
