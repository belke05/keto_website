import React, { useEffect, useState } from 'react'
import product_management from '../../api/product-management'
import OneProduct from '../../components/sub-components/OneProduct'
import FilterMenu from '../sub-components/FilterMenu'
import { Pagination } from 'react-bootstrap'

export default function Drink(props) {
  const [drinks, setDrinks] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [filterState, setFilterState] = useState({
    sortPrice: { sortPriceAscending: false, sortPriceDescending: false },
    sortRating: { sortRatingAscending: false, sortRatingDescending: false },
    priceRange: [0, 100],
  })
  useEffect(() => {
    product_management.getProducts('drink').then(foundDrinks => {
      // const drinkComponents = foundDrinks.map(drink => {
      //   return <OneProduct product={drink} />
      // })
      setDrinks(foundDrinks)
    })
    document.querySelector('#nav').style.background = '#a9a9a9'
    document.querySelector('#nav').classList.remove('bg-transparent')
  }, [])

  function filter(drink) {
    console.log(drink, filterState.priceRange[0])
    if (
      Number(drink.price) > filterState.priceRange[0] &&
      Number(drink.price) < filterState.priceRange[1]
    ) {
      return true
    }
    return false
  }

  function renderPaginationItems() {
    let items = []
    let count = 0
    for (let number = 0; number <= drinks.length / 9; number++) {
      count++
      items.push(
        <Pagination.Item
          key={count}
          active={currentPage === count}
          onClick={e => {
            console.log(e.target.text)
            setCurrentPage(Number(e.target.text))
          }}
        >
          {count}
        </Pagination.Item>
      )
    }
    return items
  }

  return (
    <>
      <div className="display_wrapper">
        <FilterMenu filterState={filterState} setFilterState={setFilterState} />
        <div className="product-display">
          {/* {drinks.filter(drink => {
        return globalFilter(drink) ? <OneProduct product={drink} /> : null
      })} */}
          {drinks.slice(currentPage - 1 * 9, currentPage * 10).map(drink => {
            if (filter(drink)) {
              return <OneProduct product={drink} />
            } else {
              return false
            }
          })}
        </div>
      </div>
      <div>
        <Pagination>
          {drinks.length && renderPaginationItems().map(item => item)}
        </Pagination>
      </div>
    </>
  )
}
