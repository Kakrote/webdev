import express from "express"
// import Router from "express.router"
const router=express.Router()

router.get('/',(req,res)=>{
    res.send("This is blog home")
})
router.get('/about',(req,res)=>{
    res.send("this is blog about")
})
router.get('/hero/:slug',(req,res)=>{
    res.send(`the exaple is ${req.params.slug}`)
})
export default router