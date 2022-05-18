const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const expressHandler = require('express-async-handler')
const User = require('../models/userModel')

//@desc    Register new user
//@route   POST /api/users
//@access  public
const registerUser = expressHandler(async (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Please add more fields')
  }

  // Check if user exists
  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  // Hash Password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  })

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

//@desc    Authenticate a user
//@route   POST /api/users/login
//@access  public
const loginUser = expressHandler(async (req, res) => {
  res.json({ message: 'Login User' })
})

//@desc    Get user data
//@route   GET /api/users/me
//@access  public
const getMe = expressHandler(async (req, res) => {
  res.json({ message: 'User data Display' })
})

module.exports = { registerUser, loginUser, getMe }