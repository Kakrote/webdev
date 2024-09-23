const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))


app.get('/about/:slug', (req, res) => {
  res.send(`hello ${req.params.slug}`)
  console.log(req.params)
  console.log(req.query)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})