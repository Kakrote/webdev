const express = require('express')
const first=require('./routers/first')
const app=express()
const port=3000

app.use((req,res,next)=>{
    console.log(`url: ${req.originalUrl} statuscode: ${res.statusCode} `)
    next()
})

app.use('/first',first)
app.get('/',(req,res)=>{
    // console.log(`url: ${req.originalUrl} status: ${res.statusCode}`)
    res.send('hello ! ')
})
app.listen(port,()=>{
    console.log(`this project is runing on the port ${port}`)
})