const { create } = require('lodash')
const { UserRegister, UserInfo, PhoneNumber, Address, JobExperience, CompanyRegister, Email } = require('../model')

const postUser = async (userData) => {
    const { cpf_cnpj, first_name, last_name, gender, age, general_role, email, password } = userData
    const userRegister = await UserRegister.create({ cpf_cnpj: cpf_cnpj })
    const userJSON = await userRegister.toJSON()
    const userInfo = await UserInfo.create({
        first_name: first_name,
        last_name: last_name, 
        gender: gender, 
        age: age, 
        general_role: general_role,
        userRegisterId: `${userJSON.id}`
    })
    const createEmail = await Email.create({
        email: email,
        password: password,
        userRegisterId: `${userJSON.id}`
    })
    await console.log(createEmail)
    return {userRegister, userInfo, createEmail}
}

const createUser = async (userData) => {
    const { 
        CPF_CNPJ, first_name, last_name, gender, age,
        email, general_role, phone_number, street, city, state,
        country, postal_code  } = userData

    const userRegister = await UserRegister.create({ CPF_CNPJ })
    const userInfo = await UserInfo.create({ first_name, last_name, gender, age, email, general_role, userRegisteredId: userRegister.id})
    await PhoneNumber.create({ phone_number, userInfoId: userInfo.id })
    await Address.create({street, city, state, country, postal_code, userInfoId: userInfo.id})

    return { userRegister, userInfo }
}

const getUser = async (userId) => {
    const user = await UserRegister.findByPk(userId, {
        include: [{
            model: UserInfo,
            include: [Address, PhoneNumber],
        }, {
            model: JobExperience,
            include: CompanyRegister
        }]
    })

    return user
}

const getAllUser = async () => {
    const user = await UserRegister.findAll({
        include: {
            model: UserInfo,
        }
    })

    return user
}

const updateUser = async (id, data) => {
    const userInfo = await UserInfo.findByPk(id)
    if (!userInfo) {
        throw new Error("User not found")
    }

    userInfo.update(data)
    return userInfo
}

module.exports = {
    createUser,
    getUser,
    getAllUser,
    updateUser,
    postUser
}