const express = require('express')
require('./dbconection/mongoose')


const app = express()
const port = process.env.PORT || 3000

app.get('/tasks', (req, res) => {
    res.send("testing");
})



app.listen(port, () => {
    console.log('Server is up on port ' + port)
})