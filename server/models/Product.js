const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    ingredients: { type: Array },
    nutritional_value: {
      cal: { type: Number },
      fat: { type: Number },
      carbs: { type: Number },
      protein: { type: Number },
      sugar: { type: Number },
      fiber: { type: Number },
      salt: { type: Number },
    },
    category: { type: String, enum: ['drink', 'food', 'sups'] },
    tags: { type: Array },
    picture_url: { type: String },
    price: { type: Number, required: true },
    rating: { type: Number },
    sales: { type: Number },
  },
  {
    timestamps: true,
  }
)

const Product = mongoose.model('Product', productSchema)
module.exports = Product
