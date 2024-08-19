const sequelize = require("../config/database")
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

const getJobInfos = async (userId) => {
    const [results, metadata] = await sequelize.query(`
        SELECT je.id, CONCAT(ui.first_name, ' ', ui.last_name) AS full_name,
        je.role_at_time, je.average_payment, cr.company_name 
        FROM JobExperiences je
        JOIN CompanyRegisters cr on je.companyRegisterId = cr.id 
        JOIN UserRegisters ur ON je.userRegisterId = ur.id
        JOIN UserInfos ui on ui.userRegisterId = ur.id
        WHERE ur.id = '${userId}';
    `)
    return results
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
    getJobInfos,
    updateJobExperience,
    deleteJobExperience
}