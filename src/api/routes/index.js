const express = require('express')
const cors = require('cors')
const corsConfig = {
    origin: "*",
    credentials: true,
    optionSucessStatus: 200
}
const users = require("./userRoutes.js")
const companies = require('./companyRoutes.js')
const jobExperiences = require('./jobExperienceRoutes.js')
const skills = require('./skillRoutes.js')
const emails = require('./emailRoutes.js')

module.exports = appDB => {
    appDB.use(
        express.json(),
        cors(corsConfig),
        users,
        companies,
        jobExperiences,
        skills,
        emails
    )
}
