const express = require('express')
const jobController = require('../controller/JobController')

const router = express.Router()

router.post('/apijobs', jobController.createJob)
router.get('/api/jobs/:id', jobController.getJob)
router.get('/api/jobs', jobController.getAllJobs)
router.put('/api/jobs/:id', jobController.updateJob)
router.delete('/api/jobs/:id', jobController.deleteJob)

module.exports = router