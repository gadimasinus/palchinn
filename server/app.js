const express = require("express")
const app = express()
const api = require("./api")
const morgan = require('morgan')
const bodyparser = require('body-parser')
const cors = require('cors')


app.set('port', (process.PORT || 8081))
app.use(bodyparser.json())

app.use(bodyparser.urlencoded({ extended: false }))

app.use(cors())
app.use('/api', api)

app.use(express.static('static'))

app.use(morgan('dev'))

app.use(function (req, res) {
    const err = new Error('Not found')
    err.status = 404
    res.json(err)
})

//mongodb connection

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/pinchell', { useNewUrlParser: true })

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error :'))

db.once('open', function () {
    console.log('connected to mongodb')
    app.listen(app.get('port'), function () {
        console.log("Pinchell server is listening on port " + app.get('port'))
    })
})

