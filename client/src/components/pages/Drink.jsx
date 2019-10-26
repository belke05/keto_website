import React, { useEffect, useState } from 'react'
import product_management from '../../api/product-management'
import OneProduct from '../../components/sub-components/OneProduct'
import FilterMenu from '../sub-components/FilterMenu'

export default function Drink(props) {
  const [drinks, setDrinks] = useState([])
  const [filter, setFilter] = useState({
    name: null,
    ingredients: [null],
    nutritional_value: {
      // store len 2 array with min and max
      cal: [null, null],
      fat: [null, null],
      carbs: [null, null],
      protein: [null, null],
      sugar: [null, null],
      fiber: [null, null],
      salt: [null, null],
    },
    tags: [null],
    price: null,
    rating: null,
    sales: null,
  })
  useEffect(() => {
    product_management.getProducts('drink').then(foundDrinks => {
      setDrinks(foundDrinks)
    })
  }, [])
  function filteringRange(product) {
    if (
      product.nutritional_value.cal > filter.nutritional_value.cal[0] &&
      product.nutritional_value.cal < filter.nutritional_value.cal[1]
    ) {
      return true
    }
    return false
  }
  function filteringTagsIngredients(product) {
    if (filter.ingredients) {
      return true
    }
    return false
  }
  function filteringPriceRating(product) {
    if (product.nutritional_value.cal < filter.nutritional_value.cal) {
      return true
    }
    return false
  }
  function globalFilter(product) {
    return filteringRange(product) &&
      filteringTagsIngredients(product) &&
      filteringPriceRating(product)
      ? true
      : false
  }

  return (
    <div className="product-display">
      <FilterMenu
        setFilterValue={setFilter}
        filterValue={filter}
        setDrinkValue={setDrinks}
        drinkValue={drinks}
      />
      {/* {drinks.filter(drink => {
        return globalFilter(drink) ? <OneProduct product={drink} /> : null
      })} */}
      {drinks.map(drink => {
        return <OneProduct product={drink} />
      })}
    </div>
  )
}
