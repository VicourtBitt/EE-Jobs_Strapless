const { UserRegister, UserInfo, PhoneNumber, Address, JobExperience, SkilledWith, CompanyRegister } = require('../model')

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
}