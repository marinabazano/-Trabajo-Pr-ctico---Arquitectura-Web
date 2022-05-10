const express = require("express");
const { Project, Task, Employee } = require('./models.js');
const app = express();
const bodyParser = require('body-parser')
const { redirect } = require('express/lib/response')

// Obtener fecha y hora
var requestTime = function (req, res, next) {
    var todaysDate = new Date();
    req.requestTime = todaysDate;
    next();
};

app.use(requestTime);
//app.use(bodyParser);
app.use(express.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

// GET Home

app.get('/', async (req, res) => {
    var responseText = 'Main Page';
    responseText += ' Requested at: ' + req.requestTime + '';
    res.send(responseText)
})

// GET Projects

app.get("/projects", async (request, response) => {
    const projects = await Project.find({});
  
    try {
      response.send(projects);
    } catch (error) {
      response.status(500).send(error);
    }
});

app.get('/projects/:idProject', async (request, response) => {
  console.log(request.params.idProject)
  //res.send('Acá se va a listar el proyecto con idProject = ' + req.params.idProject)
  const projects = await Project.find({project_id: request.params.idProject});
    try {
      response.send(projects);
    } catch (error) {
      response.status(500).send(error);
    }
})

// POST Project

app.post("/projects", async (request, response) => {
    const project = new Project(request.body);
    console.log(request.body)
    try {
      project.save(function(err, doc) {
        if (err) return console.error(err);
        console.log("Document inserted succussfully!");
      });
      response.send(project);
    } catch (error) {
      response.status(500).send(error);
    }
});

// DELETE Project

app.delete('/projects/:idProject', async (req, res) => {
  console.log(req.params.idProject)
  res.send('Acá se va a borrar el proyecto con idProject = ' + req.params.idProject)
})

// GET Tasks

app.get("/tasks", async (request, response) => {
    const tasks = await Task.find({});
  
    try {
      response.send(tasks);
    } catch (error) {
      response.status(500).send(error);
    }
});

app.get('/tasks/:idTask', async (request, response) => {
  console.log(request.params.idTask)
  //res.send('Acá se va a listar la tarea con idTask = ' + req.params.idTask)
  const tasks = await Task.find({task_id: request.params.idTask});
    try {
      response.send(tasks);
    } catch (error) {
      response.status(500).send(error);
    }
})

// POST Project

app.post("/tasks", async (request, response) => {
    const task = new Task(request.body);
  
    console.log(request.body)
    try {
      task.save(function(err, doc) {
        if (err) return console.error(err);
        console.log("Document inserted succussfully!");
      });
      response.send(task);
    } catch (error) {
      response.status(500).send(error);
    }
});

// GET Employees

app.get("/employees", async (request, response) => {
    const employees = await Employee.find({});
  
    try {
      response.send(employees);
    } catch (error) {
      response.status(500).send(error);
    }
});

app.get('/employees/:idEmployee', async (request, response) => {
  console.log(request.params.idEmployee)
  //response.send('Acá se va a listar el empleado con idEmployee = ' + request.params.idEmployee)
  const employees = await Employee.find({employee_id: request.params.idEmployee});
    try {
      response.send(employees);
    } catch (error) {
      response.status(500).send(error);
    }
})

// POST Project

app.post("/employees", async (request, response) => {
    const employee = new Employee(request.body);
  
    console.log(request.body)
    try {
      employee.save(function(err, doc) {
        if (err) return console.error(err);
        console.log("Document inserted succussfully!");
      });
      response.send(employee);
    } catch (error) {
      response.status(500).send(error);
    }
});


//-------------------GETs de cada pantalla (response archivos .HTML)---------------------


module.exports = app;