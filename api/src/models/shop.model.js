const mongoose = require('mongoose');
const { Schema } = mongoose;

const shopSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    // `Date.now()` returns the current unix timestamp as a number
    default: Date.now
  },
  posts: [
    {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
    }
  ],
  bookings: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking"
    }
  ],
  address: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  logo: {
    type: String
  }
})

module.exports = mongoose.model('Shop', shopSchema);
