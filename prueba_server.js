const express = require('express')
const { redirect } = require('express/lib/response')
const app = express()
const port = 3000


// http://localhost:3000/
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// http://localhost:3000/projects/
app.get('/projects/', (req, res) => {
    res.send('Acá se van a listar los proyectos')
})
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})