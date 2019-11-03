import React, { useEffect, useState } from 'react'
import product_management from '../../api/product-management'
import OneProduct from '../../components/sub-components/OneProduct'
import FilterMenu from '../sub-components/FilterMenu'
import { useUserValue } from '../contexts/UserContext'

export default function ProductDisplay(props) {
  const [{ user }, dispatch] = useUserValue()
  const [products, setProducts] = useState([])
  const [userFavourites, setUserFavourites] = useState(null)
  const [filterState, setFilterState] = useState({
    sortPrice: { sortPriceAscending: false, sortPriceDescending: false },
    sortRating: null,
    priceRange: [0, 50],
    categoriesToKeep: {},
  })

  useEffect(() => {
    if (user) setUserFavourites(user._favourites)
    product_management
      .getProducts(props.match.params.type)
      .then(foundProducts => {
        setProducts(foundProducts)
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

  function ratingFilter(product) {
    if (filterState.sortRating) {
      return product.rating >= filterState.sortRating ? true : false
    }
    return true
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

  return (
    <>
      <div className="display_wrapper">
        <FilterMenu
          filterState={filterState}
          setFilterState={setFilterState}
          displayCategory={props.match.params.type}
        />
        <div className="product-display">
          {products.map(product => {
            if (
              filter(product) &&
              categoryFilter(product) &&
              ratingFilter(product)
            ) {
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
    </>
  )
}
