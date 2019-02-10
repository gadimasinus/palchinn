const express = require('express')
const router = express.Router()

require('./routes/events')(router)

module.exports = router
