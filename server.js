const express = require('express')
const app = express()
const perusahaanRouter = require('./router/perusahaans')
const port = 3000
const connectDB = require('./config/db')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(perusahaanRouter)
connectDB()

app.listen(port, () => {
    console.log(`on port ${port}`)
})