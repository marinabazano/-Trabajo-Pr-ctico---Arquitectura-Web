const express = require('express')
const bodyParser = require('body-parser')

const { redirect } = require('express/lib/response')
const app = express()
const port = 3000


var requestTime = function (req, res, next) {
    var todaysDate = new Date();
    //req.requestTime = todaysDate.prototype.getDate();
    req.requestTime = todaysDate;
    next();
};
  
app.use(requestTime);

// http://localhost:3000/
app.get('/', async (req, res) => {
    var responseText = 'Main Page';
    responseText += ' Requested at: ' + req.requestTime + '';
    res.send(responseText)
})


// Projects

// http://localhost:3000/projects
app.get('/projects', async (req, res) => {
    res.send('Acá se van a listar todos los proyectos')
})
  
// http://localhost:3000/projects/:idProject
app.get('/projects/:idProject', async (req, res) => {
    res.send('Acá se va a listar el proyecto con idProject')
})

// Tasks

// Employees
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})