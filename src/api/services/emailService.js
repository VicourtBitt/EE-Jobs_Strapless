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

const getEmail = async (emailName) => {
    const [results, metadate] = sequelize.query(`
        SELECT email, password, userRegisterId
        FROM Emails
        WHERE email = '${emailName}'
    `)
    return results
}

const updatePassword = async (email ,newPassword) => {
    const [results, metadata] = sequelize.query(`
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