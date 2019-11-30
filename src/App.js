import React from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'
import './App.css'
import Navbar from './components/nav'
import Header from './components/header'
import ProductCategories from './components/product_categories'
import Footer from './components/footer'
import LogIn from './components/log_in'
import SignUp from './components/sign_up'
import Cart from './components/cart'
import UserProfile from './components/user_profile'

function App() {
  return (
    <React.Fragment>
      <Header />
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          component={ProductCategories}
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
          component={ProductCategories}
        ></Route>
      </Switch>
      <Footer />
    </React.Fragment>
  )
}

export default App
