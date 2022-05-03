const express = require('express')
const bodyParser = require('body-parser')
const { redirect } = require('express/lib/response')


const app = express()
const port = 3000


// Obtener fecha y hora
var requestTime = function (req, res, next) {
    var todaysDate = new Date();
    //req.requestTime = todaysDate.prototype.getDate();
    req.requestTime = todaysDate;
    next();
};
  
app.use(requestTime);


// Main page
app.get('/', async (req, res) => {
    var responseText = 'Main Page';
    responseText += ' Requested at: ' + req.requestTime + '';
    res.send(responseText)
})


// Projects
app.get('/projects', async (req, res) => {
    res.send('Acá se van a listar todos los proyectos')
})

app.post('/projects', (req, res) => {
// add new project
    clientsService.add(req.body);

    res.status(201).send(req.body);
    //trabajar body y guardarlo en la bbdd

});

app.get('/projects/:idProject', async (req, res) => {
    console.log(req.params.idProject)
    res.send('Acá se va a listar el proyecto con idProject')
})

app.get('/projects/:idProject/tasks', async (req, res) => {
    res.send('Acá se va a listar las tareas de un proyecto especifico')
})

app.post('/projects/:idProject/tasks', (req, res) => {
    // add new task to project
        clientsService.add(req.body);
    
        res.status(201).send(req.body);
        //trabajar body y guardarlo en la bbdd
    
    });

app.get('/projects/:idProject/tasks/:idTask', async (req, res) => {
    res.send('Acá se va a listar la tarea con idTask de un proyecto con idProject')
})

app.get('/projects/:idProject/employees', async (req, res) => {
    res.send('Acá se va a listar los empleados de un proyecto')
})

app.get('/projects/:idProject/employees/:idEmployee', async (req, res) => {
    res.send('Acá se va a listar el empleado con idEmployee de un proyecto con idProject')
})

// Tasks
app.get('/tasks', async (req, res) => {
    res.send('Acá se van a listar todas las tareas')
})

app.get('/tasks/:idTask', async (req, res) => {
    res.send('Acá se va a listar la tarea con idTarea')
})

// Employees
app.get('/employees', async (req, res) => {
    res.send('Acá se van a listar todos los empleados')
})

app.post('/employees', (req, res) => {
    // add new employee
        clientsService.add(req.body);
    
        res.status(201).send(req.body);
        //trabajar body y guardarlo en la bbdd
    
    });

app.get('/employees/:idEmployee', async (req, res) => {
    res.send('Acá se va a listar el empleado con idEmployee')
})

app.listen(port, () => {
    console.log(`Trabajo práctico de Arquitectua Web, escucha de puerto: ${port}`)
})