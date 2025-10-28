


const express = require('express')
const { SignupController , LoginController, getAllUsers, getUserById,  updateUser, deleteUser} = require('../controllers/userControllers')
const upload = require('../functions/mediaFunc')


const router = express.Router()


router.post('/signup' , upload.single('avatar') , SignupController)
router.post('/login', LoginController)
router.get('/', getAllUsers)
router.get('/:id', getUserById)
router.patch('/update', updateUser)
router.delete('/delete', deleteUser)

module.exports = router