const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookingSchema = new Schema({
  username: String,
  telephoneNumber: String,
  date: {
    type: Date,
    default: Date.now
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
  },
  shop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shop"
  },
})

module.exports = mongoose.model('Booking', bookingSchema);