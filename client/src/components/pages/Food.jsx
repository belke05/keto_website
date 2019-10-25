import React, { useEffect, useState } from 'react'
import product_management from '../../api/product-management'

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
      {food.map(item => {
        return <img src={item.picture_url}></img>
      })}
    </div>
  )
}
