import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export default function Navbar() {
  return (
    <div className="container my-3">
      <div className="well-fluid navbar border">
        <span className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            data-toggle="dropdown"
          >
            <i class="fas fa-user-circle pull-right"></i>
          </button>

          <ul className="dropdown-menu">
            <li>
              <Link to="/logIn">
                <button className="btn">
                  Log In
                </button>
              </Link>
            </li>
            <li className="divider">
              <hr />
            </li>
            <li>
              <Link to="/signUp">
                <button className="btn">
                  Sign Up
                </button>
              </Link>
            </li>
          </ul>
        </span>
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
