const express = require('express')
const rout=require('./routers/bloging')
const app= express()
const port= 3000

app.use((req,res,next)=>{
    res.on("close", ()=>{
        console.log(`${res.statusCode} ${req.method} ${req.url}`)
    })
    next()
})
app.get('/',(req,res)=>{
    res.send("hello world31")
})
app.use('/bloging',rout)
// creating a custum middleware

app.listen(port,()=>{
    console.log(`the port ${port} is sucessfully runing`)
})