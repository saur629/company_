


const express = require('express')
const { SignupController , LoginController, getAllUsers, getUserById,  updateUser, deleteUser} = require('../controllers/userControllers')
const upload = require('../functions/mediaFunc')


const router = express.Router()


router.post('/signup' , upload.single('avatar') , SignupController)
router.post('/login', LoginController)
router.post('/users', getAllUsers)
router.post('/userid', getUserById)
router.post('/update', updateUser)
router.post('/delete', deleteUser)

module.exports = router