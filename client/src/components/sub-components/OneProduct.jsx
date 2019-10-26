import React from 'react'

export default function OneProduct({ product, children }) {
  return (
    <div className="one-product">
      <img className="product-image" src={product.picture_url}></img>
      <p>{product.description}</p>
    </div>
  )
}
