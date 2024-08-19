const {Op} = require('sequelize')
const sequelize  = require('../config/database')
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
            include: [{
                model: Address,
                attributes: ['city', 'state', 'country']
            }, {
                model: PhoneNumber
            }],
        }, {
            model: JobExperience,
            attributes: ['id', 'role_at_time', 'average_payment'],
            include: {
                model: CompanyRegister,
                attributes: ['company_name', 'company_email', 'company_sector']
            }
        }, {
            model: Email,
            attributes: ['email']
        }],
        attributes: ['cpf_cnpj']
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

const getAllByName = async (param) => {
    const user = await UserRegister.findAll({
        include: {
            model: UserInfo,
            where : {
                [Op.or]: [
                    {
                        first_name: {
                            [Op.like] : `%${param}%`
                        }
                    }, {
                        last_name: {
                            [Op.like] : `%${param}%`
                        }
                    }
                ]
            }
        }
    })
    return user
}

const getUserRole = async (param) => {
    const [results, metadata] = await sequelize.query(`
        SELECT ui.id, CONCAT(ui.first_name, ' ', ui.last_name) AS full_name,
        ui.general_role
        FROM UserRegisters ur
        JOIN UserInfos ui ON ur.id = ui.userRegisterId
        WHERE ur.id = ${param}
    `)
    return results
}

const updateUserRole = async (id, data) => {
    const [results, metadata] = await sequelize.query(`
        UPDATE UserInfos
        SET general_role = '${data}'
        WHERE UserInfos.userRegisteredId = ${id}
    `)
    return results
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
    getUserRole,
    updateUserRole,
    getAllByName,
    updateUser,
    postUser
}