const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema(
  {
    price: { type: Number, required: true },
    _products: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Product' }],
    _users: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
  },
  { timestamps: true }
)
