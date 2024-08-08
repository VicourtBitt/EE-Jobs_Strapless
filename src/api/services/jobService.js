const { JobExperience } = require("../model")

const createJobExperience = async (jobData) => {
    const { role_at_time, average_payment, companyRegisterId } = jobData

    const jobInfo = await JobExperience.create({ role_at_time, average_payment, userRegistedId: localStorage.getItem("currentUserId"), companyRegisterId: companyRegisterId })
    return jobInfo
}

const getJobExperience = async (jobId) => {
    const job = await JobExperience.findByPk(jobId)
    return job
}

const getAllJobExperiences = async () => {
    return JobExperience.findAll()
}

const updateJobExperience = async (id, data) => {
    const jobInfo = await JobExperience.findByPk(id)
    if (!jobInfo) {
        throw new Error("Job Experience not found")
    }

    jobInfo.update(data)
    return jobInfo
}

const deleteJobExperience = async (id) => {
    try {
        const jobToDelete = await JobExperience.findByPk(id)
        if (!jobToDelete) {
            throw new Error("Experiencia de trabalho não existente")
        }
        await jobToDelete.destroy()
    } catch (error) {
        throw error
    }
}
 
module.exports = {
    createJobExperience,
    getJobExperience,
    getAllJobExperiences,
    updateJobExperience,
    deleteJobExperience
}