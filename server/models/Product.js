const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    ingredients: { type: Array },
    nutritional_value: {
      calories: { type: Number },
      fat: { type: String },
      protein: { type: String },
      carbs: { type: String },
    },
    category: { type: String, enum: ['drink', 'food', 'sups'] },
    tags: { type: Array },
    picture_url: { type: String },
    price: { type: Number },
    rating: { type: Number },
    sales: { type: Number },
  },
  {
    timestamps: true,
  }
)

const Product = mongoose.model('Product', productSchema)
module.exports = Product
