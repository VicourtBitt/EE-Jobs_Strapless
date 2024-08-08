const { CompanyRegister } = require("../model")

const createCompany = async ( companyData ) => {
    const { company_name, company_cnpj, company_sector, company_size, company_email, company_number } = companyData
    
    const companyRegister = await CompanyRegister.create({ company_name, company_cnpj, company_sector, company_size, company_email, company_number })
    return companyRegister
}

const getCompany = async (companyId) => {
    const company = await CompanyRegister.findByPk(companyId)
    return company
}

const getAllCompanies = async () => {
    return await CompanyRegister.findAll()
}

const updateCompany = async (id, data) => {
    const companyInfo = await CompanyRegister.findByPk(id)
    if (!companyInfo) {
        throw new Error("Company not found")
    }

    companyInfo.update(data)
    return companyInfo
}

module.exports = {
    createCompany,
    getCompany,
    getAllCompanies,
    updateCompany
}