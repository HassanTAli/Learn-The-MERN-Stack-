const express = require('express')
const {
  registerUser,
  loginUser,
  getMe,
} = require('../controllers/userController')

const router = express.Router()

router.route('/').post(registerUser)
router.route('/login').post(loginUser)
router.route('/me').get(getMe)

module.exports = router
