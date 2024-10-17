import express from 'express'
import blog from './routes/blog.js'
const app = express()
const port= 3000


app.get('/', (req,res)=>{
    console.log("GET request")
    res.send("This is get request")
})
app.use(express.static("public"))
app.use('/blog',blog)
app.post('/',(req,res)=>{
    console.log("POST request")
    res.send("this is post request")
})
import path from 'path'
app.get('/home',(req,res)=>{
    res.sendFile(path.join(path.resolve(),"templates/home.html"))
})
app.listen(port,()=>{
    console.log(`example app listing on port ${port}`)
})