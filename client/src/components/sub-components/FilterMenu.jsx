import React, { useState } from 'react'

export default function FilterMenu({
  setFilterValue,
  filterValue,
  setDrinkValue,
  drinkValue,
}) {
  const [filterState, setFilterState] = useState({sortPrice: {sortPriceAscending: false, sortPriceDescending: false}, sortRating: {sortRatingAscending: false, sortRatingDescending: false}})
  function sortDrinks() {
    let sortedDrinks
    if(filterState.sortPrice){
      sortedDrinks = drinkValue.sort(priceSort(a, b))
    } else if () {

    }
    
  }
  function priceSort(a, b) {
    return filterState.sortPriceAscending
      ? a - b
      : filterState.sortPriceDescending
      ? b - a
      : null
  }
  function ratingSort() {}
  return <div></div>
}
