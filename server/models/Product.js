const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    ingredients: { type: Array },
    nutritional_value: { type: String, enum: ['drink', 'food', 'other'] },
    picture_url: { type: String },
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model('User', userSchema)
module.exports = User
