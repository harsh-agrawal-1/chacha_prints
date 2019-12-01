import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(props) {
  return (
    <div className="container">
      <Link to="contact">
        Contact Us
      </Link>
    </div>
  )
}
