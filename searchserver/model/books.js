const mongoose = require("mongoose")

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  author: {
    type: String,
    require: true
  },
  year: {
    type: Number,
    require: true,
  },
  category: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model("Book", bookSchema);