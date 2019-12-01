import React, { Component } from 'react'
import CategoryCard from './category_card'

import { categories } from '../data'

export default class ProductCategories extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <CategoryCard
            key={1}
            data={
              categories &&
              categories[0]
                ? categories[0]
                : []
            }
          />
          <CategoryCard
            key={2}
            data={
              categories &&
              categories[1]
                ? categories[1]
                : []
            }
          />
          <CategoryCard
            key={3}
            data={
              categories &&
              categories[2]
                ? categories[2]
                : []
            }
          />
          <CategoryCard
            key={4}
            data={
              categories &&
              categories[3]
                ? categories[3]
                : []
            }
          />
          <CategoryCard
            key={5}
            data={
              categories &&
              categories[4]
                ? categories[4]
                : []
            }
          />
          <CategoryCard
            key={6}
            data={
              categories &&
              categories[5]
                ? categories[5]
                : []
            }
          />
          <CategoryCard
            key={7}
            data={
              categories &&
              categories[6]
                ? categories[6]
                : []
            }
          />
          <CategoryCard
            key={8}
            data={
              categories &&
              categories[7]
                ? categories[7]
                : []
            }
          />
        </div>
      </div>
    )
  }
}
