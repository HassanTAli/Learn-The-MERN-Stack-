const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    text: {
      type: string,
      required: [true, 'Please add a name'],
    },
    email: {
      type: string,
      required: [true, 'Please add an email'],
    },
    password: {
      type: string,
      required: [true, 'Please add a password'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', userSchema)
