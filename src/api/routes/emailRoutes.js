const express = require('express')
const emailController = require('../controller/emailController')

const router = express.Router()

router.post('/api/private/register', emailController.createEmail)
router.get('/api/private/register/:email', emailController.getEmail)
router.put('/api/private/newPassword', emailController.updatePassword)

module.exports = router