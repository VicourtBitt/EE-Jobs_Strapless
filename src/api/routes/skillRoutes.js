const express = require('express')
const skillController = require("../controller/skillController")

const router = express.Router()

router.post('/api/skill', skillController.createSkill)
router.get('/api/skill/:id', skillController.getSkill)
router.get('/api/skill', skillController.getAllSkills)
router.delete('/api/skill/:id', skillController.deleteSkill)

module.exports = router