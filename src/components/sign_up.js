import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import '../App.css'

export default class SignUp extends Component {
  state = {
    disabled:false
  }
  
  handleSubmit = event => {
    event.preventDefault();
    this.setState({disabled:true});
    var userInfo = {
      "mobile":[`${event.target[0] ? event.target[0].value:null}`],
      "name":`${event.target[1] ? event.target[1].value:null}`,
      "address":`${event.target[2] ? event.target[2].value:null}`,
    };

    fetch('https://stormy-sea-40558.herokuapp.com/https://boiling-falls-20751.herokuapp.com/api/customer/', {
      method: "POST",
      body: JSON.stringify(userInfo),
      headers:{ 
        "Content-type": "application/json; charset=UTF-8"
      } 
    })
    .then(res => res.json())
    .then(res => {
      localStorage.setItem("userInfo", res._id);
      this.props.history.push('/');
      window.location.reload(true);
    })
    .catch(err => {
      this.setState({disabled: false});
      console.log("Error ", err);
    });
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
                      pattern="[\+\d\-]*\d{10}"
                      required
                      autofocus
                    />
                    <label for="inputTel">
                      Mobile Number
                    </label>
                  </div>

                  <div class="form-label-group">
                    <input
                      type="text"
                      id="name"
                      class="form-control"
                      placeholder="Name"
                      required
                    />
                    <label for="name">
                      Name
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
                    disabled={this.state.disabled}
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