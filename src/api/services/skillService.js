const { Skill } = require("../model")

const createSkill = async (skillInfo) => {
    const { skill } = skillInfo
    const skillToRegister = await Skill.create({skill})

    // still have to implement the skilled with stuff inside this controller and service

    return skillToRegister
}

const getSkill = async (id) => {
    const specificSkill = await Skill.findByPk(id)

    return specificSkill
}

const getAllSkills = async () => {
    return Skill.findAll()
}

const deleteSkill = async(id) => {
    try {
        const skillToDelete = await Skill.findByPk(id)
        if (!skillToDelete) {
            throw new Error("A competência não existe")
        }
        await skillToDelete.destroy()
    } catch (error) {
        throw error
    }
}

module.exports = {
    createSkill,
    getSkill,
    getAllSkills,
    deleteSkill
}