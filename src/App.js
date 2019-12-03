import React from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'
import './App.css'
import Navbar from './components/nav'
import Header from './components/header'
import ProductList from './components/product_list'
import Footer from './components/footer'
import LogIn from './components/log_in'
import SignUp from './components/sign_up'
import Cart from './components/cart'
import Checkout from './components/checkout'
import UserProfile from './components/user_profile'
import ContactUs from './components/contact'
import ProductDetails from './components/product_details'
import { dataTypes } from './data/data_types'

function App() {
  return (
    <React.Fragment>
      <Header />
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          render={props => (
            <ProductList
              {...props}
              type="categories"
            />
          )}
        ></Route>
        <Route
          path="/userProfile"
          component={UserProfile}
        ></Route>
        <Route
          path="/logIn"
          component={LogIn}
        ></Route>
        <Route
          path="/signUp"
          component={SignUp}
        ></Route>
        <Route
          path="/cart"
          component={Cart}
        ></Route>
        <Route
          path="/checkout"
          component={Checkout}
        ></Route>
        <Route
          path="/details"
          component={ProductDetails}
        ></Route>
        <Route
          path="/contact"
          component={ContactUs}
        ></Route>
        {dataTypes.map(dataType => {
          return (
            <Route
              path={'/' + dataType}
              render={props => (
                <ProductList
                  {...props}
                  type={dataType}
                />
              )}
            ></Route>
          )
        })}
        <Route
          render={props => (
            <ProductList
              {...props}
              type="categories"
            />
          )}
        ></Route>
      </Switch>
      <hr />
      <Footer />
    </React.Fragment>
  )
}

export default App
