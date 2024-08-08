const userService = require('../services/userService');

const createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body)
        res.status(201).json({ msg: `Novo usuário criado. ${user}` })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

const getUser = async (req, res) => {
    try {
        const user = await userService.getUser(req.params.id)
        res.status(200).json(user)
    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}

const getAllUser = async (req, res) => {
    try {
        const userInfos = await userService.getAllUser()
        req.status(200).json(userInfos)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const updateUser = async (req, res) => {
    try {
        const userInfo = await userService.updateUser(req.params.id, req.body)
        res.status(200).json(userInfo)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    createUser,
    getUser,
    getAllUser,
    updateUser
}