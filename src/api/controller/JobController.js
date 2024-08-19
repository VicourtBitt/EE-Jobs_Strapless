const jobService = require("../services/jobService")

const createJob = async (req, res) => {
    try {
        const job = await jobService.createJobExperience(req.body)
        res.status(201).json({ msg: `Experiência profissional registrada. ${job}` })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getJob = async (req, res) => {
    try {
        const job = await jobService.getJobExperience(req.params.id)
        res.status(200).json(job)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

const getAllJobs = async (req, res) => {
    try {
        const job = await jobService.getAllJobExperiences()
        res.status(200).json(job)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getJobByUser = async (req, res) => {
    try {
        const jobs = await jobService.getJobInfos(req.params.userId)
        res.status(200).json(jobs)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const updateJob = async (req, res) => {
    try {
        const jobInfo = await jobService.updateJobExperience(req.params.id, req.body)
        res.status(200).json(jobInfo)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const deleteJob = async (req, res) => {
    try {
        const { id } = req.params
        const result = await jobService.deleteJobExperience(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({error: error.message })
    }
}

module.exports = {
    createJob,
    getJob,
    getAllJobs,
    getJobByUser,
    updateJob,
    deleteJob
}