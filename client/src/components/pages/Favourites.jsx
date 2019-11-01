import React, { useState, useEffect } from 'react'
import { useUserValue } from '../contexts/UserContext'
import product_management from '../../api/product-management'
import OneProduct from '../../components/sub-components/OneProduct'
import { spawnSync } from 'child_process'

export default function Favourites() {
  const [{ user }, dispatch] = useUserValue()
  const [userFavourites, setUserFavourites] = useState([])
  useEffect(() => {
    if (user) {
      const product_ids = user._favourites
      product_management
        .getQueriesProducts(product_ids.join('_'))
        .then(foundFavourites => {
          setUserFavourites(foundFavourites)
        })
    }
  })
  return (
    <div>
      <div class="fact-slogan fact-slogan--page-title">
        <h1 class="fact-slogan__fact no-margin-bottom">
          <span class="fact fact--page-title">Verlanglijstje</span>
        </h1>
        <span class="fact-slogan__slogan">Uitstelgedrag.</span>
      </div>
      {userFavourites.map(favourite => {
        return (
          <span>
            <OneProduct
              key={favourite._id}
              product={favourite}
              favourites={userFavourites}
            />
          </span>
        )
      })}
    </div>
  )
}
