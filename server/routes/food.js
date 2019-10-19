const express = require('express')
const router = express.Router()

router.get('/food', (req, res, next) => {
  console.log('here')
  res.json({ msg: 'helloooooo' })
})

module.exports = router
