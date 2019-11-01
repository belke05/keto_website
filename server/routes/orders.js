const express = require('express')
const router = express.Router()
const Order = require('../models/Order')

router.post('user/order', (req, res, next) => {
  Order.create({})
})

module.exports = router
