import React from 'react'
import '../App.css'

export default function Navbar() {
  return (
    <div className="well">
      <span className="dropdown">
        <button
          className="btn btn-primary dropdown-toggle"
          data-toggle="dropdown"
        >
          <i class="fas fa-user-circle pull-right"></i>
        </button>

        <ul className="dropdown-menu">
          <li>
            <a>Log In</a>
          </li>
          <li>
            <a>Sign Up</a>
          </li>
        </ul>
      </span>
      <button
        type="button"
        className="btn btn-primary pull-right mx-auto"
      >
        <span className="glyphicon glyphicon-shopping-cart"></span>
        &ensp; MY CART
      </button>
    </div>
  )
}
