const express = require('express')
require('./dbconection/mongoose')
const taskRouter = require('./routes/task')
const userRouter = require('./routes/user')
var cors = require('cors')

//app.use(cors()) // Use this after the variable declaration

const app = express()
const port = process.env.PORT || 3000
/*
app.use((req,res,next)=>{
    res.status(509).send("Site is currently down. chack abck soon")
})
    */
app.use(cors()) // Use this after the variable declaration
app.use(express.json())
app.use(taskRouter)
app.use(userRouter)




app.listen(port, () => {
    console.log('Server is up on port ' + port)
})