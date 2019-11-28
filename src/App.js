import React from 'react'
import './App.css'
import Navbar from './components/nav'
import Header from './components/header'
import ProductCategories from './components/product_categories'
import Footer from './components/footer'

function App() {
  return (
    <React.Fragment>
      <Header />
      <Navbar />
      <ProductCategories />
      <Footer />
    </React.Fragment>
  )
}

export default App
