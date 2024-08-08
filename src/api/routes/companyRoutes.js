const express = require('express')
const companyController = require("../controller/companyController")

const router = express.Router()

router.post('/companies', companyController.createCompany)
router.get('/companies/:id', companyController.getCompany)
router.get('/companies', companyController.getAllCompanies)
router.put('/companies/:id', companyController.updateCompany)

module.exports = router