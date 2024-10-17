const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let sitename='anshul'
  res.render("index",{sitename:sitename})// loading the html page 
})
app.get('/blog/:slug', (req, res) => {
  let blogname='neha'
  let blogcuntain='hello neha'
  res.render("template/blogpost.html ",{blogname:blogname,blogcuntain:blogcuntain})// loading the html page 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

