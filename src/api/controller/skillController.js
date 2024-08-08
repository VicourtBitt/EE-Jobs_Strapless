const skillService = require("../services/skillService")

const createSkill = async (req, res) => {
    try {
        const skill = await skillService.createSkill(req.body)
        res.status(200).json("Competência criada")
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getSkill = async (req, res) => {
    try {
        const skill = await skillService.getSkill(req.params.id)
        res.status(200).json(skill)
    } catch (erorr) {
        res.status(400).json({ error: error.message })
    }
}

const getAllSkills = async (req, res) => {
    try {
        const skills = await skillService.getAllSkills()
        res.status(200).json(skills)
    } catch (erorr) {
        res.status(400).json({ error: error.message })
    }
}

const deleteSkill = async (req, res) => {
    try {
        const { id } = req.params
        const result = await skillService.deleteSkill(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({error: error.message })
    }
}

module.exports = {
    createSkill,
    getSkill,
    getAllSkills,
    deleteSkill
}