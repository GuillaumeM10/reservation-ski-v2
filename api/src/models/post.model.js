const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  size: {
    type: Number,
    required: true
  },
  style: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
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
  }],
  shop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shop"
  }
})

module.exports = mongoose.model('Post', postSchema);
