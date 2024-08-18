const emailService = require("../services/emailService")

const createEmail = async (req, res) => {
    try {
        const results = await emailService.createRegister(req.body)
        res.status(201).json(results)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getEmail = async (req, res) => {
    try {
        const results = await emailService.getEmail(req.body)
        res.status(200).json(results)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const updatePassword = async (req, res) => {
    try {
        const results = await emailService.updatePassword(req.body)
        res.status(200).json(results)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    createEmail,
    getEmail,
    updatePassword
}