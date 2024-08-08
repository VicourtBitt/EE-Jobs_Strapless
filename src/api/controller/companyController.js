const companyService = require("../services/companyService")

const createCompany = async (req, res) => {
    try {
        const company = await companyService.createCompany(req.body)
        res.status(201).json({ msg: `Nova compania criada. ${company}` })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getCompany = async (req, res) => {
    try {
        const company = await companyService.getCompany(req.params.id)
        res.status(200).json(company)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

const getAllCompanies = async (req, res) => {
    try {
        const companyInfo = await companyService.getAllCompanies()
        req.status(200).json(companyInfo)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const updateCompany = async (req, res) => {
    try {
        const companyInfo = await companyService.updateCompany(req.params.id, req.body)
        res.status(200).json(companyInfo)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    createCompany,
    getCompany,
    getAllCompanies,
    updateCompany
}