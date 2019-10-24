const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../.env') })

// To execute this seed, run from the root of the project
// $ node bin/seeds.js
const mongoose = require('mongoose')
const Product = require('../models/Product')

require('../configs/database')

let products = []

async function deleteAllThenInsertAll() {
  await Product.deleteMany()
  await Product.insertMany(products)
  mongoose.disconnect()
  return 'good seeds'
}
