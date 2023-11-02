const { Schema, model } = require('mongoose');


const bongoSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  price: {
    type: Number
  },
  types: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Type',
      required: true,
    }
  ]
});

// Define Bongo model using the schema
const Bongo = model('Bongo', bongoSchema);

module.exports = Bongo;