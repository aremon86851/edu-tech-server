const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000;

app.use(cors())

app.get('/', (req, res) => {
    res.send('api server is running')
})

app.listen(port, (req, res) => {
    console.log(port, 'is running')
})