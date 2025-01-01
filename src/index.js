const express = require('express')
require('./dbconection/mongoose')
const taskRouter = require('./routes/task')

const app = express()
const port = process.env.PORT || 3000


app.use(express.json())
app.use(taskRouter)



app.listen(port, () => {
    console.log('Server is up on port ' + port)
})