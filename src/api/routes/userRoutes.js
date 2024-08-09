const express = require('express');
const userController = require('../controller/userController')

const router = express.Router()

router.post('/api/users', userController.createUser)
router.get('/api/users/:id', userController.getUser)
router.get('/api/users', userController.getAllUser)
router.put('/api/users/:id', userController.updateUser)
router.get('/api/users/search/:general_role', userController.filterUserByRole)
// router.get('/users/search/:first_name', userController.filterUserByName)

module.exports = router