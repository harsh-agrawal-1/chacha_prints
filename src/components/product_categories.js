import React, { Component } from 'react'
import CategoryCard from './category_card'

export default class ProductCategories extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
    )
  }
}
