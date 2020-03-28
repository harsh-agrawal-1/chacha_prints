import React, { Component } from 'react'
import '../App.css'
import { Link } from 'react-router-dom';

export default class LogIn extends Component {

  state = {
    unableToLogin : false,
    disabled : false
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({disabled:true});
    const mob = event.target && event.target[0] && event.target[0].value;
    fetch(`https://stormy-sea-40558.herokuapp.com/https://boiling-falls-20751.herokuapp.com/api/customer/?mobile=${mob}`)
    .then(res => res.json())
    .then(res => {
      res && res._id && localStorage.setItem("userInfo", res._id);
      this.props.history.push('/');
      window.location.reload();
    })
    .catch(err => {
      this.setState({unableToLogin: true, disabled: false});
      console.log("unable to find customer details in DB", err)
    });
  }
  
  render() {
    return (
        <div class="container">
          <div class="row">
            <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            {this.state.unableToLogin?
              <div>
                Unable To Login, Please Try again.
                <br /><br />
                Click here to  &ensp; 
                <i class="fas fa-user-plus pull-right">
                <Link to="/signUp">
                    {' '}
                    Sign Up
                </Link>
                </i>
              </div>
            :<div></div>}
            
            <div class="card card-signin my-5">
              <div class="card-body">
                <h5 class="card-title text-center">
                  Log In
                </h5>
                <form class="form-signin" onSubmit={this.onSubmit}>
                  <div class="form-label-group">
                    <input
                      type="tel"
                      id="inputTel"
                      class="form-control"
                      placeholder="Mobile Number"
                      pattern="\d*\d{10}"
                      title="Enter only 10 digit mobile number. (Don't include +/- symbols)"
                      required
                      autofocus
                    />
                    <label for="inputTel">
                      Mobile Number
                    </label>
                  </div>

                  <button
                    class="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                    disabled={this.state.disabled}
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