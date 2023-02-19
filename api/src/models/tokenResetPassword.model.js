const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TokenResetPassword = new Schema({
  token:{
    type: String,
    required: true,
    unique: true
  },
  user:{
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

module.exports = mongoose.model('TokenResetPassword', TokenResetPassword)