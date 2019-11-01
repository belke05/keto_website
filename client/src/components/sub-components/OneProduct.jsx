import React, { useEffect, useState } from 'react'
import user_management from '../../api/user-management'

export default function OneProduct({ product, children, favourites }) {
  let [reviewAmount, setReviewAmount] = useState(0)
  useEffect(() => {
    setReviewAmount(Math.floor(Math.random() * 20))
  }, [])

  function handleHeartClick(e) {
    const productId = e.target.dataset.productid
    e.target.classList.toggle('red-heart')
    user_management.addToFavourite(productId)
    console.log(e.target)
    console.log(e.target.dataset)
  }

  function handleCartClick(e) {}

  return (
    <div className="one-product">
      <img className="product-image" src={product.picture_url}></img>
      <figcaption className="product-card__title">
        <h3>{product.name}</h3>
      </figcaption>
      <p>
        <div>
          <div>
            <div class="review-stars__icon">
              <svg
                class={`icon-svg icon-svg--size-4 icon-svg--color-${
                  product.rating >= 1 ? 'blue' : 'grey'
                } icon-svg--vertical-align-top`}
                viewBox="0 0 99 99"
                aria-hidden="true"
                focusable="false"
              >
                <circle cx="49.5" cy="49.5" r="49.5"></circle>
                <path d="M49.5 99C77.5 99 99 76.8 99 49.5S77.5 0 49.5 0v99z"></path>
                <path
                  fill="#FFFFFF"
                  d="M53.4 24.2l5 15.6s11.7-.2 16.4-.1c4 0 5.9 4.9 2.4 7.5-3.7 2.6-13.3 9.5-13.3 9.5L69 72.2c1.2 4-3.1 7-6.4 4.6L49.5 65.3 36.3 76.8c-3.4 2.4-7.6-.7-6.4-4.6l5.2-15.5-13.3-9.5c-3.1-2.2-2.1-7.4 2.4-7.5l16.4.1 4.9-15.6c1.4-4.1 6.7-3.7 7.9 0z"
                ></path>
              </svg>
            </div>
            <div class="review-stars__icon">
              <svg
                class={`icon-svg icon-svg--size-4 icon-svg--color-${
                  product.rating >= 2 ? 'blue' : 'grey'
                } icon-svg--vertical-align-top`}
                viewBox="0 0 99 99"
                aria-hidden="true"
                focusable="false"
              >
                <circle cx="49.5" cy="49.5" r="49.5"></circle>
                <path d="M49.5 99C77.5 99 99 76.8 99 49.5S77.5 0 49.5 0v99z"></path>
                <path
                  fill="#FFFFFF"
                  d="M53.4 24.2l5 15.6s11.7-.2 16.4-.1c4 0 5.9 4.9 2.4 7.5-3.7 2.6-13.3 9.5-13.3 9.5L69 72.2c1.2 4-3.1 7-6.4 4.6L49.5 65.3 36.3 76.8c-3.4 2.4-7.6-.7-6.4-4.6l5.2-15.5-13.3-9.5c-3.1-2.2-2.1-7.4 2.4-7.5l16.4.1 4.9-15.6c1.4-4.1 6.7-3.7 7.9 0z"
                ></path>
              </svg>
            </div>
            <div class="review-stars__icon">
              <svg
                class={`icon-svg icon-svg--size-4 icon-svg--color-${
                  product.rating >= 3 ? 'blue' : 'grey'
                } icon-svg--vertical-align-top`}
                viewBox="0 0 99 99"
                aria-hidden="true"
                focusable="false"
              >
                <circle cx="49.5" cy="49.5" r="49.5"></circle>
                <path d="M49.5 99C77.5 99 99 76.8 99 49.5S77.5 0 49.5 0v99z"></path>
                <path
                  fill="#FFFFFF"
                  d="M53.4 24.2l5 15.6s11.7-.2 16.4-.1c4 0 5.9 4.9 2.4 7.5-3.7 2.6-13.3 9.5-13.3 9.5L69 72.2c1.2 4-3.1 7-6.4 4.6L49.5 65.3 36.3 76.8c-3.4 2.4-7.6-.7-6.4-4.6l5.2-15.5-13.3-9.5c-3.1-2.2-2.1-7.4 2.4-7.5l16.4.1 4.9-15.6c1.4-4.1 6.7-3.7 7.9 0z"
                ></path>
              </svg>
            </div>
            <div class="review-stars__icon">
              <svg
                class={`icon-svg icon-svg--size-4 icon-svg--color-${
                  product.rating >= 4 ? 'blue' : 'grey'
                } icon-svg--vertical-align-top`}
                viewBox="0 0 99 99"
                aria-hidden="true"
                focusable="false"
              >
                <circle cx="49.5" cy="49.5" r="49.5"></circle>
                <path d="M49.5 99C77.5 99 99 76.8 99 49.5S77.5 0 49.5 0v99z"></path>
                <path
                  fill="#FFFFFF"
                  d="M53.4 24.2l5 15.6s11.7-.2 16.4-.1c4 0 5.9 4.9 2.4 7.5-3.7 2.6-13.3 9.5-13.3 9.5L69 72.2c1.2 4-3.1 7-6.4 4.6L49.5 65.3 36.3 76.8c-3.4 2.4-7.6-.7-6.4-4.6l5.2-15.5-13.3-9.5c-3.1-2.2-2.1-7.4 2.4-7.5l16.4.1 4.9-15.6c1.4-4.1 6.7-3.7 7.9 0z"
                ></path>
              </svg>
            </div>
            <div class="review-stars__icon">
              <svg
                class={`icon-svg icon-svg--size-4 icon-svg--color-${
                  product.rating >= 5 ? 'blue' : 'grey'
                } icon-svg--vertical-align-top`}
                viewBox="0 0 99 99"
                aria-hidden="true"
                focusable="false"
              >
                <circle cx="49.5" cy="49.5" r="49.5"></circle>
                <path
                  // fill="#DDD"
                  d="M49.5 0h-.2v99h.2C76.8 99 99 76.8 99 49.5S76.8 0 49.5 0z"
                ></path>
                <path
                  fill="white"
                  d="M53.4 24.2l5 15.6s11.7-.2 16.4-.1c4 0 5.9 4.9 2.4 7.5-3.7 2.6-13.3 9.5-13.3 9.5L69 72.2c1.2 4-3.1 7-6.4 4.6L49.5 65.3 36.3 76.8c-3.4 2.4-7.6-.7-6.4-4.6l5.2-15.5-13.3-9.5c-3.1-2.2-2.1-7.4 2.4-7.5l16.4.1 4.9-15.6c1.4-4.1 6.7-3.7 7.9 0z"
                ></path>
              </svg>
            </div>

            <span>
              {reviewAmount}
              reviews
            </span>
          </div>
          <div>
            <b>{product.price}, -</b>
            <i class="fas fa-shopping-cart" data-productId={product._id}></i>
            {/* readable via the .dataset object */}
            <i
              class={
                'fas fa-heart'
                // favourites &&
                // favourites.includes(product._id) &&
                // 'fas fa-heart'
              }
              onClick={handleHeartClick}
              data-productid={product._id}
            ></i>
          </div>
        </div>
      </p>
    </div>
  )
}
