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

    let list = [];
    list.push(`<li> Project ID | Project Name | Description | Estimated Hours </li>`);
    projects.forEach((c) => {

      list.push(`<li>${c.project_id} | ${c.project_name} | ${c.description} | ${c.estimated_hours} </li>`);

    });
  
    try {
      response.status(200)
      response.send(
        `<html>
          <body style="background-color:lavender;">
          <head>
            <title>Projects</title>
          </head>
          <body>
            <ul>
              ${list.join('')}
            </ul>
            ${projects}            
          </body>
        </html>`
      );
    } catch (error) {
      response.status(500).send(error);
    }
});

app.get('/projects/:idProject', async (request, response) => {
  console.log(request.params.idProject)
  //res.send('Acá se va a listar el proyecto con idProject = ' + req.params.idProject)
  const projects = await Project.find({project_id: request.params.idProject});
    try {
      response.status(200)
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
  try {
		await Project.deleteOne({ project_id: req.params.idProject })
    console.log("Document deleted succussfully!");
		res.status(204).send()
	} catch {
		res.status(404).send({ error })
	}
})

// GET Tasks

app.get("/tasks", async (request, response) => {
    const tasks = await Task.find({});

    let list = [];
    list.push(`<li> Task ID | Task Name | Description | Project ID </li>`);
    tasks.forEach((c) => {

      list.push(`<li>${c.task_id} | ${c.task_name} | ${c.description} | ${c.project_id} </li>`);

    });
  
    try {
      response.status(200)
      response.send(
        `<html>
          <body style="background-color:lavender;">
          <head>
            <title>Tasks</title>
          </head>
          <body>
            <ul>
              ${list.join('')}
            </ul>
            ${tasks}            
          </body>
        </html>`
      );
    } catch (error) {
      response.status(500).send(error);
    }
});

app.get('/tasks/:idTask', async (request, response) => {
  console.log(request.params.idTask)
  //res.send('Acá se va a listar la tarea con idTask = ' + req.params.idTask)
  const tasks = await Task.find({task_id: request.params.idTask});
    try {
      response.status(200)
      response.send(tasks);
    } catch (error) {
      response.status(500).send(error);
    }
})

// POST Task

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

// DELETE Task

app.delete('/tasks/:idTask', async (req, res) => {
  try {
		await Task.deleteOne({ task_id: req.params.idTask })
    console.log("Document deleted succussfully!");
		res.status(204).send()
	} catch {
		res.status(404).send({ error })
	}
})


// GET Employees

app.get("/employees", async (request, response) => {
    const employees = await Employee.find({});

    let list = [];
    list.push(`<li> Employee ID | Employee Name | Area | Project ID </li>`);
    employees.forEach((c) => {

      list.push(`<li>${c.employee_id} | ${c.employee_name} | ${c.area} | ${c.project_id} </li>`);

    });
    
    try {
      response.status(200)
      response.send(
        `<html>
          <body style="background-color:lavender;">
          <head>
            <title>Employees</title>
          </head>
          <body>
            <ul>
              ${list.join('')}
            </ul>
            ${employees}            
          </body>
        </html>`
      );
    } catch (error) {
      response.status(500).send(error);
    }
});

app.get('/employees/:idEmployee', async (request, response) => {
  console.log(request.params.idEmployee)
  //response.send('Acá se va a listar el empleado con idEmployee = ' + request.params.idEmployee)
  const employees = await Employee.find({employee_id: request.params.idEmployee});
    try {
      response.status(200)
      response.send(employees);
    } catch (error) {
      response.status(500).send(error);
    }
})

// POST Employee

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

// DELETE Employee

app.delete('/employees/:idEmployee', async (req, res) => {
  try {
		await Employee.deleteOne({ employee_id: req.params.idEmployee })
    console.log("Document deleted succussfully!");
		res.status(204).send()
	} catch {
		res.status(404).send({ error })
	}
})


//-------------------GETs de cada pantalla (response archivos .HTML)---------------------


module.exports = app;