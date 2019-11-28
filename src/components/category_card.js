import React, { Component } from 'react'

export default class CategoryCard extends Component {
  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
        <div
          className="card text-center"
          style={{
            width: '18rem',
            marginBottom: '4rem',
          }}
        >
          <img
            class="card-img-top"
            src="logo.png"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">
              Card title
            </h5>
            <p class="card-text">
              Some quick example text to
              build on the card title
              and make up the bulk of
              the card's content.
            </p>
            <a
              href="#"
              class="btn btn-primary"
            >
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    )
  }
}
