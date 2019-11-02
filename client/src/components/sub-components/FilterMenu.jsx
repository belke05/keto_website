import React from 'react'
import RangeSlider from '../sub-components/Sliders'
import ReviewFilter from '../sub-components/RadioButton'
import CategoryFilter from '../sub-components/CategoryFilter'

export default function FilterMenu({ filterState, setFilterState }) {
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
      <ReviewFilter />
      <CategoryFilter setFilter={setFilterState} filterValues={filterState} />
    </section>
  )
}
