import React, { Component } from 'react'
import store from '../store'

export default class UserProfile extends Component {
  render() {
    store.deserialize()
    const { userInfo } = store
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
                      Birth Date
                    </label>
                  </div>
                  <div class="col-md-8 col-6">
                    {userInfo.birthdate}
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
                    {userInfo.mobile}
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
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
