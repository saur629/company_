


const express = require('express')
const { SignupController , LoginController } = require('../controllers/userControllers')
const upload = require('../functions/mediaFunc')


const router = express.Router()


router.post('/signup' , upload.single('avatar') , SignupController)
router.post('/login', LoginController)
router.post('/users', getAllUsers)
router.post('/userid', getUserById)
router.post('/update', updateUse)
router.post('/delete', updateUse)

module.exports = router