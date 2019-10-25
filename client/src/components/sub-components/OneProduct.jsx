import React from 'react'

export default function OneProduct({ product, filter, children }) {
  function filteringProduct() {
    if (product.nutritional_value.cal < filter.nutritional_value.cal) {
      return true
    }
    return false
  }
  console.log(product, 'product')
  return (
    <div>
      {filteringProduct() && (
        <div className="one-product">
          <img className="product-image" src={product.picture_url}></img>
          <p>{product.description}</p>
        </div>
      )}
    </div>
  )
}
