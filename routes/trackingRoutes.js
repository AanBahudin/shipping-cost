const express = require('express')
const router = express.Router()
const {trackingPackage} = require('../controllers/trackingController')

router.route('/search?')
    .get(trackingPackage)

module.exports = router