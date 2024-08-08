const express = require('express')
const skillController = require("../controller/skillController")

const router = express.Router()

router.post('/skill', skillController.createSkill)
router.get('/skill/:id', skillController.getSkill)
router.get('/skill', skillController.getAllSkills)
router.delete('/skill/:id', skillController.deleteSkill)

module.exports = router