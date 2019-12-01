import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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

            {this.props.type ===
            'categories' ? (
              <Link
                to={
                  '/' +
                  this.props.data.link
                }
                class="btn btn-primary"
              >
                Explore
              </Link>
            ) : (
              <Link
                to={{
                  pathname: '/details',
                  state: {
                    data: this.props
                      .data,
                  },
                }}
                class="btn btn-primary"
              >
                Details
              </Link>
            )}
          </div>
        </div>
      </div>
    )
  }
}
