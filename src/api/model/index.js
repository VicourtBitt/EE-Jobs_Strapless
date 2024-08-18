const sequelize = require("../config/database.js")

const UserRegister = require("../model/userRegister.js")
const UserInfo = require("../model/userInfo.js")
const CompanyRegister = require("../model/companyRegister.js")
const PhoneNumber = require("../model/phoneNumber.js")
const Address = require("../model/address.js")
const Email = require("../model/email.js")
const JobExperience = require("../model/jobExperience.js")
const Skill = require("../model/skill.js")
const SkilledWith = require("../model/skilledWith.js")

// ASSOCIAÇÕES em USERREGISTER
UserRegister.hasOne(UserInfo, {foreignKey: 'userRegisterId'})       // X
UserInfo.belongsTo(UserRegister, {foreignKey: 'userRegisterId'})    // X

UserRegister.hasMany(JobExperience, {foreignKey: "userRegisterId"}) // X
JobExperience.belongsTo(UserRegister, {foreignKey: "userRegisterId"})

// ASSOCIAÇÕES em USERINFO
UserInfo.hasMany(PhoneNumber, {foreignKey: "userInfoId"})           // X
PhoneNumber.belongsTo(UserInfo, {foreignKey: "userInfoId"})         // X

UserRegister.hasOne(Email, {foreignKey: "userRegisterId"})                 // X
Email.belongsTo(UserInfo, {foreignKey: "userRegisterId"})               // X

Skill.hasMany(SkilledWith, {foreignKey: "skillId"})                 // X
SkilledWith.belongsTo(Skill, {foreignKey: "skillId"})               // X

UserInfo.hasOne(Address, {foreignKey: "userInfoId"})                // X
Address.belongsTo(UserInfo, {foreignKey: "userInfoId"})             // X

UserInfo.hasMany(SkilledWith, {foreignKey: "userInfoId"})           // X
SkilledWith.belongsTo(UserInfo, {foreignKey: "userInfoId"})         // X

// ASSOCIAÇÕES em COMPANYREGISTER
CompanyRegister.hasMany(JobExperience, {foreignKey: "companyRegisterId"})
JobExperience.belongsTo(CompanyRegister, {foreignKey: "companyRegisterId"})

module.exports = {
    sequelize,
    UserRegister,
    UserInfo,
    CompanyRegister,
    PhoneNumber,
    Address,
    Email,
    JobExperience,
    Skill,
    SkilledWith
}