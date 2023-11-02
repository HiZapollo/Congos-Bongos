const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  bongos: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Bongo'
    }
  ]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;