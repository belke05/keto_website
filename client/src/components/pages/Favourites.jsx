import React, { useState, useEffect } from 'react'
import { useUserValue } from '../contexts/UserContext'
import product_management from '../../api/product-management'
import OneProduct from '../../components/sub-components/OneProduct'

export default function Favourites() {
  const [{ user }, dispatch] = useUserValue()
  const [userFavourites, setUserFavourites] = useState([])
  useEffect(() => {
    changeStyling()
    if (user) {
      const product_ids = user._favourites
      product_management
        .getQueriesProducts(product_ids.join('_'))
        .then(foundFavourites => {
          setUserFavourites(foundFavourites)
        })
    }
  }, [])
  function changeStyling() {
    try {
      const nav = document.querySelector('#nav')
      const icons = document.querySelectorAll('.fas')
      const user_icon = document.querySelector('#user-btn')
      const logout_btn = document.querySelector('.btn-logout')
      icons.forEach(icon => (icon.style.color = 'white'))
      nav.style.background = '#236166'
      nav.classList.remove('bg-transparent')
      user_icon.style.backgroundColor = '#bc8c2a'
      user_icon.style.borderColor = '#bc8c2a'
      logout_btn.style.color = 'white'
    } catch (e) {}
  }
  return (
    <div>
      <section className="favourites_section">
        {userFavourites.map(favourite => {
          return (
            <OneProduct
              key={favourite._id}
              product={favourite}
              favourites={userFavourites}
            />
          )
        })}
      </section>
    </div>
  )
}
