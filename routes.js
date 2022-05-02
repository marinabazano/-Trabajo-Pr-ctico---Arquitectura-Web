const express = require("express");
const { Project, Task, Employee } = require('./models.js');
const app = express();

// Obtener fecha y hora
var requestTime = function (req, res, next) {
    var todaysDate = new Date();
    req.requestTime = todaysDate;
    next();
};
app.use(requestTime);

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

// POST Project

app.post("/projects", async (request, response) => {
    const project = new Project(request.body);
  
    try {
      await project.save();
      response.send(project);
    } catch (error) {
      response.status(500).send(error);
    }
});

// GET Tasks

app.get("/tasks", async (request, response) => {
    const tasks = await Task.find({});
  
    try {
      response.send(tasks);
    } catch (error) {
      response.status(500).send(error);
    }
});

// POST Project

app.post("/tasks", async (request, response) => {
    const task = new Task(request.body);
  
    try {
      await task.save();
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

// POST Project

app.post("/employees", async (request, response) => {
    const employee = new Employee(request.body);
  
    try {
      await employee.save();
      response.send(employee);
    } catch (error) {
      response.status(500).send(error);
    }
});


module.exports = app;