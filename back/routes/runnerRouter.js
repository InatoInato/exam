const express = require('express')
const router = express.Router()
const newRunner = require('../controllers/runnerController.js')

router.post('/newrunner', newRunner.newRunner)

module.exports = router