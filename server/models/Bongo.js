const { Schema, model } = require('mongoose');


const bongoSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  bongoId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number
  },
});

// Define Bongo model using the schema
const Bongo = model('Bongo', bongoSchema);

module.exports = Bongo;