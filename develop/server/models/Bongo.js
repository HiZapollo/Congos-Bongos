const { Schema } = require('mongoose');


const bongoSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
bongoid: {
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
});

module.exports = bongoSchema;