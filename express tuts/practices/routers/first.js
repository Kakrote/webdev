const express =require('express')
const router=express.Router()

router.use((req,res,next)=>{
    console.log(`hello this is routers ${req.originalUrl} port: ${req.params}`)
    next()
})

router.get('/',(req,res)=>{
    console.log(`url: ${req.originalUrl} stauscode: ${res.statusCode}`)
    res.send("this is first! ")

})
module.exports=router