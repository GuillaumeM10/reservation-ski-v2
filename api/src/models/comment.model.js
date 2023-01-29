const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
  username: String,
  description: String,
  starts: Number,
  date: {
    type: Date,
    default: Date.now
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
  }
})

module.exports = mongoose.model('Comment', commentSchema);
