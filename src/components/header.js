import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Link to="/">
      <div className="container">
        <div className="jumbotron">
          <div className="row">
            <div className="col-5">
              <img
                src="logo.png"
                alt="(OM)"
                className="img-fluid img-thumbnail img-circle"
              />
            </div>
            <div className="col-offset-6 heading text-">
              CHACHA PRINTS
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
