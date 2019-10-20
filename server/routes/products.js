const express = require('express')
const router = express.Router()

// get all the products
router.get('/products', (req, res, next) => {
  console.log('here')
  res.json({ msg: 'helloooooo' })
})

// get a single product
router.get('/products/:productId', (req, res, next) => {
  console.log('here')
  res.json({ msg: 'helloooooo' })
})

// delete a single product
router.delete('/products/:productId', (req, res, next) => {
  console.log('here')
  res.json({ msg: 'helloooooo' })
})

module.exports = router
