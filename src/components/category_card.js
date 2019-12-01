import React, { Component } from 'react'

export default class CategoryCard extends Component {
  render() {
    return (
      <div className="col-12 col-sm-8 col-md-6 col-lg-4 mx-auto">
        <div
          className="card text-center"
          style={{
            width: '18rem',
            marginBottom: '4rem',
          }}
        >
          <img
            class="card-img-top"
            src={this.props.data.imgUrl}
            alt={this.props.data.name}
          />
          <div class="card-body">
            <h5 class="card-title">
              {this.props.data.name}
            </h5>
            <p class="card-text">
              {this.props.data.desc}
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
