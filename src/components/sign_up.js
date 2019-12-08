import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import '../App.css'
import store from '../store'

export default class SignUp extends Component {
  handleSubmit = event => {
    store.deserialize()
    store.userInfo.mobile = event
      .target[0]
      ? event.target[0].value
      : null
    store.userInfo.password = event
      .target[1]
      ? event.target[1].value
      : null
    store.userInfo.address = event
      .target[2]
      ? event.target[2].value
      : null
    store.serialize()
    this.props.history.push('/')
    window.location.reload(true)
  }
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card card-signin my-5">
              <div class="card-body">
                <h5 class="card-title text-center">
                  Sign Up
                </h5>
                <form
                  class="form-signin"
                  onSubmit={
                    this.handleSubmit
                  }
                >
                  <div class="form-label-group">
                    <input
                      type="tel"
                      id="inputTel"
                      class="form-control"
                      placeholder="Mobile Number"
                      pattern="[0-9]{10}[0-9]?"
                      required
                      autofocus
                    />
                    <label for="inputTel">
                      Mobile Number
                    </label>
                  </div>

                  <div class="form-label-group">
                    <input
                      type="password"
                      id="inputPassword"
                      class="form-control"
                      placeholder="Password"
                      required
                    />
                    <label for="inputPassword">
                      Password
                    </label>
                  </div>
                  <div class="form-label-group">
                    <input
                      type="text"
                      id="address"
                      class="form-control"
                      placeholder="Address"
                      required
                      autofocus
                    />
                    <label for="address">
                      Address
                    </label>
                  </div>
                  <button
                    class="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                  >
                    Register
                  </button>
                  <hr class="my-4" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
