const express = require('express');
const router = express.Router();
const sponsorController = require('../controllers/sponsorController.js');

router.post('/register', sponsorController.newSponsor);

module.exports = router;