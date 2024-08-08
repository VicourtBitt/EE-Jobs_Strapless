const express = require('express');
const userController = require('../controller/userController')

const router = express.Router()

router.post('/users', userController.createUser)
router.get('/users/:id', userController.getUser)
router.get('/users', userController.getAllUser)
router.put('/users/:id', userController.updateUser)
router.get('/users/search/:general_role', userController.filterUserByRole)
// router.get('/users/search/:first_name', userController.filterUserByName)

module.exports = router