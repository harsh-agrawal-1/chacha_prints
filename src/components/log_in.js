import React, { Component } from 'react'
import '../App.css'

export default class LogIn extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card card-signin my-5">
              <div class="card-body">
                <h5 class="card-title text-center">
                  Log In
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

                  <div class="custom-control custom-checkbox mb-3">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="customCheck1"
                    />
                    <label
                      class="custom-control-label"
                      for="customCheck1"
                    >
                      Remember password
                    </label>
                  </div>
                  <button
                    class="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                  >
                    Sign in
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
