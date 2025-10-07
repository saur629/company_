


const express = require('express')
const { SignupController , LoginController } = require('../controllers/userControllers')


const router = express.Router()


router.post('/signup' , SignupController)
router.post('/login', LoginController)


module.exports = router