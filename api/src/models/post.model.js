const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
  title: String,
  title: String,
  imageUrl: String,
  weight: Number,
  size: Number,
  style: String,
  price: Number,
  description: String,
  date: {
    type: Date,
    // `Date.now()` returns the current unix timestamp as a number
    default: Date.now
  },
  isAvailable: Boolean,
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment"
  }],
  bookings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Booking"
  }]
})

module.exports = mongoose.model('Post', postSchema);
