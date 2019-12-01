import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export default class SignUp extends Component {
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
                <form class="form-signin">
                  <div class="form-label-group">
                    <input
                      type="tel"
                      id="inputTel"
                      class="form-control"
                      placeholder="Mobile Number"
                      pattern="[0-9]{11}"
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

                  <div class="border-top card-body text-center">
                    Have an account?
                    <Link
                      to="/logIn"
                      href=""
                    >
                      Log In
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
