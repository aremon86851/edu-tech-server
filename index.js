const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000;

app.use(cors())

const allCourses = require('./data/courses.json')

app.get('/', (req, res) => {
    res.send('api server is running')
})

app.get('/courses', (req, res) => {
    res.send(allCourses)
})

app.listen(port, () => {
    console.log(port, 'is running')
})