const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()
const PORT = config.get('port') || 5000
const MONGO_URI = config.get('mongoUri')

async function start () {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(MONGO_URI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true
        })
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}`))
    } catch (error) {
        console.log('Server error: ', error.message)
        process.exit(1)
    }
}

start()