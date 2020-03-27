import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import { observer } from 'mobx-react'

@observer
class Navbar extends Component {
  render() {
    return (
      <div className="container my-3">
        <div className="well-fluid navbar border">
          {localStorage.getItem(
            'userInfo'
          ) ? (
            <Link
              to="/userInfo"
              className="btn btn-primary"
            >
              <i class="fas fa-user-circle pull-right"></i>
            </Link>
          ) : (
            <Link to="/signUp">
              <i class="fas fa-user-plus pull-right">
                {' '}
                Sign Up
              </i>
            </Link>
          )}
          <Link to="/cart">
            <button
              type="button"
              className="btn btn-primary pull-right mx-auto"
            >
              <i
                class="fa fa-shopping-cart"
                aria-hidden="true"
              ></i>
              &ensp; MY CART
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Navbar
