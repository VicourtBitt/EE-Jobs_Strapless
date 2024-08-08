const express = require('express')
const jobController = require('../controller/JobController')

const router = express.Router()

router.post('/jobs', jobController.createJob)
router.get('/jobs/:id', jobController.getJob)
router.get('/jobs', jobController.getAllJobs)
router.put('/jobs/:id', jobController.updateJob)
router.delete('/jobs/:id', jobController.deleteJob)

module.exports = router