const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String },
    password: { type: String },
    last_name: { type: String },
    first_name: { type: String },
    avatar_url: { type: String },
    _shoppingCart: [
      {
        _product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: { type: Number, default: 0 },
        timeOfAddition: { type: Date, default: Date.now },
      },
    ],
    _favourites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model('User', userSchema)
module.exports = User
