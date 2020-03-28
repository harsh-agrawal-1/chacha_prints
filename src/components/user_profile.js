import React, { Component } from 'react'
import store from '../store'

export default class UserProfile extends Component {

  state = {
    userInfo : {}
  };
  
  componentWillMount = () => {
    const userId = localStorage.getItem("userInfo");
    console.log(userId);
    fetch(`https://stormy-sea-40558.herokuapp.com/https://boiling-falls-20751.herokuapp.com/api/customer/${userId}`)
    .then(res => res.json())
    .then(res => {
      this.setState({userInfo: { ...res, userId}});
    })
    .catch(err => {
      console.log("error occured while fetching customer details", err);
      localStorage.removeItem("userInfo");
      this.props.history.push('/');
      window.location.reload(true);
    });
  }
  
  render() {
    const { userInfo } = this.state;
    return (
      <div className="container">
        <div class="row">
          <div class="col-12">
            <div
              class="tab-content ml-1"
              id="myTabContent"
            >
              <div
                class="tab-pane fade show active"
                id="basicInfo"
                role="tabpanel"
                aria-labelledby="basicInfo-tab"
              >
                <div class="row">
                  <div class="col-sm-3 col-md-2 col-5">
                    <label
                      style={{
                        fontWeight:
                          'bold',
                      }}
                    >
                      Full Name
                    </label>
                  </div>
                  <div class="col-md-8 col-6">
                    {userInfo.name}
                  </div>
                </div>
                <hr />

                <div class="row">
                  <div class="col-sm-3 col-md-2 col-5">
                    <label
                      style={{
                        fontWeight:
                          'bold',
                      }}
                    >
                      Mobile Number
                    </label>
                  </div>
                  <div class="col-md-8 col-6">
                    {userInfo.mobile && Array.isArray(userInfo.mobile) 
                      && userInfo.mobile.map((mob) => `${mob}  `)}
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3 col-md-2 col-5">
                    <label
                      style={{
                        fontWeight:
                          'bold',
                      }}
                    >
                      Address
                    </label>
                  </div>
                  <div class="col-md-8 col-6">
                    {userInfo.address}
                  </div>
                </div>
                <hr />
                <button
                    class="btn btn-lg btn-primary btn-block text-uppercase"
                    onClick={() => {
                      localStorage.removeItem("userInfo");
                      this.props.history.push('/');
                      window.location.reload(true);
                    }}
                    type="button"
                  >
                    Sign Out
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
