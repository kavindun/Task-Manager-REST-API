const express = require('express')
require('./dbconection/mongoose')
const taskRouter = require('./routes/task')
const userRouter = require('./routes/user')

const app = express()
const port = process.env.PORT || 3000
/*
app.use((req,res,next)=>{
    res.status(509).send("Site is currently down. chack abck soon")
})
    */
app.use(express.json())
app.use(taskRouter)
app.use(userRouter)



app.listen(port, () => {
    console.log('Server is up on port ' + port)
})