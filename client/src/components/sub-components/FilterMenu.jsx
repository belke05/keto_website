import React from 'react'
import RangeSlider from '../sub-components/Sliders'
import ReviewFilter from '../sub-components/RadioButton'
import DrinkCategoryFilter from '../sub-components/DrinkCategoryFilter'
import FoodCategoryFilter from '../sub-components/FoodCategoryFilter'
export default function FilterMenu({
  filterState,
  setFilterState,
  displayCategory,
}) {
  function priceSort(a, b) {
    return filterState.sortPriceAscending
      ? a - b
      : filterState.sortPriceDescending
      ? b - a
      : null
  }
  function ratingSort() {}
  function priceFilter({ price }) {}
  return (
    <section className="filter-nav">
      <RangeSlider
        setFilter={setFilterState}
        filterValues={filterState}
        className="space-top"
      />
      <ReviewFilter setFilter={setFilterState} filterValues={filterState} />
      {(displayCategory === 'drink' && (
        <DrinkCategoryFilter
          setFilter={setFilterState}
          filterValues={filterState}
        />
      )) ||
        (displayCategory === 'food' && (
          <FoodCategoryFilter
            setFilter={setFilterState}
            filterValues={filterState}
          />
        ))}
    </section>
  )
}
