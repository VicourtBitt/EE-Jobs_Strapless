const sequelize = require('../config/database')
const userService = require('../services/userService');

const postUser = async (req, res) => {
    try {
        const { userInfo, userRegister } = await userService.postUser(req.body)
        res.status(201).json({msg: userInfo, userRegister})
    } catch (error) {
        res.status(400).json({error: error})
    }
}

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
        res.status(200).json(userInfos)
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

const filterUserByRole = async (req, res) => {
    try {
        const allUsers = await userService.getAllUser()
        const filteredUsers = allUsers.filter(user => user.UserInfo.general_role.includes(req.params.general_role))
        res.status(200).json(filteredUsers)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getByName = async (req, res) => {
    try {
        const [results, metadata] = await sequelize.query(`
            SELECT CONCAT(first_name, ' ', last_name) AS full_name
            FROM UserInfos
        `)
        res.status(200).json(results)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// const filterUserByName = async (req, res) => {
//     try {
//         const allUsers = await userService.getAllUser()
//         const filteredUsers = allUsers.filter(user => user.UserInfo.first_name.includes(req.params.first_name))
//         res.status(200).json(filteredUsers)
//     } catch (error) {
//         res.status(400).json({ error: error.message })
//     }
// }

module.exports = {
    createUser,
    getUser,
    getAllUser,
    updateUser,
    filterUserByRole,
    getByName,
    postUser
    // filterUserByName
}