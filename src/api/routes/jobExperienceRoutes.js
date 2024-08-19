const express = require('express')
const jobController = require('../controller/JobController')

const router = express.Router()

router.post('/api/jobs', jobController.createJob)
router.get('/api/jobs/:id', jobController.getJob)
router.get('/api/jobs', jobController.getAllJobs)
router.put('/api/jobs/:id', jobController.updateJob)
router.delete('/api/jobs/:id', jobController.deleteJob)
router.get('/api/search/userJobs/:userId', jobController.getJobByUser)

module.exports = router