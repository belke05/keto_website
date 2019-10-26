import React, { useEffect, useState } from 'react'
import product_management from '../../api/product-management'
import OneProduct from '../sub-components/OneProduct'

export default function Food(props) {
  const [food, setFood] = useState([])
  useEffect(() => {
    product_management.getProducts('food').then(foundFood => {
      setFood(foundFood)
    })
  }, [])
  // const FoodDisplay = ({ food }) => {
  //   // ;<>
  //   ;<img src={food.picture_url}></img>
  //   // </>
  // }
  return (
    <div className="product-display">
      {food.map((item, i) => {
        return <OneProduct product={item} key={i} />
      })}
    </div>
  )
}
