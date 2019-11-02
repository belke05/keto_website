import React, { useEffect, useState } from 'react'
import product_management from '../../api/product-management'
import OneProduct from '../../components/sub-components/OneProduct'
import FilterMenu from '../sub-components/FilterMenu'
import { Pagination } from 'react-bootstrap'
import { useUserValue } from '../contexts/UserContext'

export default function ProductDisplay(props) {
  const [currentProducts, setCurrentProducts] = useState([])
  const [products, setProducts] = useState([])
  const [userFavourites, setUserFavourites] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [filterState, setFilterState] = useState({
    sortPrice: { sortPriceAscending: false, sortPriceDescending: false },
    sortRating: { sortRatingAscending: false, sortRatingDescending: false },
    priceRange: [0, 100],
    categoriesToKeep: {},
  })
  const [{ user }, dispatch] = useUserValue()
  useEffect(() => {
    if (user) setUserFavourites(user._favourites)
    product_management
      .getProducts(props.match.params.type)
      .then(foundProducts => {
        setProducts(foundProducts)
        setCurrentProducts(foundProducts.slice(0, 9))
      })
    changeStyling()
  }, [])

  function changeStyling() {
    const nav = document.querySelector('#nav')
    const icons = document.querySelectorAll('.fas')
    const user_icon = document.querySelector('#user-btn')
    icons.forEach(icon => (icon.style.color = 'white'))
    nav.style.background = '#236166'
    nav.classList.remove('bg-transparent')
    user_icon.style.backgroundColor = '#bc8c2a'
    user_icon.style.borderColor = '#bc8c2a'
  }

  function filter(product) {
    console.log(product, filterState.priceRange[0])
    if (
      Number(product.price) > filterState.priceRange[0] &&
      Number(product.price) < filterState.priceRange[1]
    ) {
      return true
    }
    return false
  }

  function categoryFilter(product) {
    let check = []
    // if (check.length == 0) return true
    if (filterState.categoriesToKeep.checkedVegan) check.push('vegan')
    if (filterState.categoriesToKeep.checkedTea) check.push('tea')
    if (filterState.categoriesToKeep.checkedKombucha) check.push('kombucha')
    let truthChecker = false
    check.forEach(checky => {
      if (
        product.name.toLowerCase().includes(checky) ||
        product.tags
          .join('')
          .toLowerCase()
          .includes(checky)
      ) {
        truthChecker = true
        return
      }
    })
    if (check.length == 0 || truthChecker) return true
    return false
  }

  function renderPaginationItems() {
    let items = []
    let count = 0
    for (let number = 0; number <= products.length / 9; number++) {
      count++
      items.push(
        <Pagination.Item
          key={count}
          active={currentPage === count}
          onClick={e => {
            console.log(e.target.text, products)
            const page_num = Number(e.target.text)
            setCurrentPage(Number(page_num))
            console.log(
              'page num',
              page_num,
              'current products',
              products.slice(page_num - 1 * 9, page_num * 9)
            )
            const prods = [...products]
            const current_products = prods.slice(
              (page_num - 1) * 9,
              page_num * 9
            )
            setCurrentProducts(current_products)
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
          {currentProducts.map(product => {
            if (filter(product) && categoryFilter(product)) {
              return (
                <OneProduct
                  key={product._id}
                  product={product}
                  favourites={userFavourites}
                  setUserFavourites={setUserFavourites}
                />
              )
            } else {
              return false
            }
          })}
        </div>
      </div>
      <div>
        <Pagination>
          {products.length && renderPaginationItems().map(item => item)}
        </Pagination>
      </div>
    </>
  )
}
