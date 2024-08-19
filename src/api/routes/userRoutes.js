const express = require('express');
const userController = require('../controller/userController')

const router = express.Router()

router.post('/api/users', userController.postUser)
router.get('/api/users/:id', userController.getUser)
router.get('/api/users', userController.getAllUser)
router.put('/api/users/:id', userController.updateUser)
router.put('api/update/general_role/:userId', userController.updateRole)
router.get('/api/search/general_role/:role', userController.filterUserByRole)
// router.get('/users/search/:first_name', userController.filterUserByName)
router.get('/api/search/user_names/:name', userController.getByName)
router.get('/api/search/role/:userId', userController.getUserRole)


module.exports = router