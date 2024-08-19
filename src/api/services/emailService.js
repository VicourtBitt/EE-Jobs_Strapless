const sequelize = require('../config/database')
const { Email } = require('../model')

const createRegister = async (emailData) => {
    const { email, password } = emailData
    const emailRegister = await Email.create({ 
        email: email,
        password: password,
        userRegisterId
    })
    return emailRegister
}

const getEmail = async (emailInfo) => {
    const info = await Email.findOne({ where : { email: `${emailInfo}` }})
    return info
}

const updatePassword = async (email ,newPassword) => {
    const [results, metadata] = await sequelize.query(`
        UPDATE Emails
        SET password = '${newPassword}'
        WHERE email = '${email}'
    `)
    return results
}

module.exports = {
    createRegister, 
    getEmail, 
    updatePassword
}