import React, { Component } from 'react'
import CategoryCard from './category_card'
import { categories } from '../data/categories'
import { poshak } from '../data/poshak'
import { pagadi } from '../data/pagadi'
import { mukut } from '../data/mukut'
import { mala } from '../data/mala'
import { durga } from '../data/durga'
import { idols } from '../data/idols'
import { jhoola } from '../data/jhoola'
import { singhasan } from '../data/singhasan'
import { lp } from '../data/lp'

let data = {
  categories: categories,
  poshak: poshak,
  pagadi: pagadi,
  mukut: mukut,
  mala: mala,
  durga: durga,
  idols: idols,
  jhoola: jhoola,
  singhasan: singhasan,
  lp: lp,
}
export default class ProductList extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {data &&
          data[this.props.type] ? (
            data[this.props.type].map(
              (dataItem, index) => {
                return (
                  <CategoryCard
                    key={index}
                    data={dataItem}
                    type={
                      this.props.type
                    }
                  />
                )
              }
            )
          ) : (
            <div />
          )}
        </div>
      </div>
    )
  }
}
