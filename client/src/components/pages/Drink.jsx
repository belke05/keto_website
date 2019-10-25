import React, { useEffect, useState } from 'react'
import product_management from '../../api/product-management'
import OneProduct from '../../components/sub-components/OneProduct'

export default function Drink(props) {
  const [drinks, setDrinks] = useState([])
  const [filters, setFilter] = useState({
    nutritional_value: {
      cal: 85,
    },
    rating: 5,
    price: 2,
  })
  useEffect(() => {
    product_management.getProducts('drink').then(foundDrinks => {
      setDrinks(foundDrinks)
    })
  }, [])
  return (
    <div className="product-display">
      {drinks.map(drink => {
        return <OneProduct product={drink} filter={filters} />
      })}
    </div>
  )
}
