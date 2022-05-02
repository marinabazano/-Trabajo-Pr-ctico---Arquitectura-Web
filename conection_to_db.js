var mongoose = require('mongoose');
var async = require("async");

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/arquitectura_web');

mongoose.connection.on('error', function (err) {
    console.log('Error connecting to mongo: ' + err);
});

mongoose.connection.on('open', function (err) {
    console.log('connected mongo!');

    // Projects
    var projectSchema = mongoose.Schema({
        project_id: Number,
        project_name: String,
        description: String,
        estimated_hours: Number
    });

    var projects = mongoose.model('projects', projectSchema);

    projects.find(function (err, projects) {
        if (err) return console.error(err);
        console.dir(projects);
    });


    // Tasks
    var taskSchema = mongoose.Schema({
        task_id: Number,
        task_name: String,
        description: String,
        project_id: Number
    });

    var tasks = mongoose.model('tasks', taskSchema);

    tasks.find(function (err, tasks) {
        if (err) return console.error(err);
        console.dir(tasks);
    });


    // Employees
    var employeeSchema = mongoose.Schema({
        employee_id: Number,
        employee_name: String,
        area: String
    });

    var employees = mongoose.model('employees', employeeSchema);

    employees.find(function (err, employees) {
        if (err) return console.error(err);
        console.dir(employees);
    });


    // ProjectEmployee -- corregir
    var projectemployeeSchema = mongoose.Schema({
        project_id: Number,
        employee_id: Number
    });

    var projectemployee = mongoose.model('project_employee', projectemployeeSchema);

    projectemployee.find(function (err, projectemployee) {
        if (err) return console.error(err);
        console.dir(projectemployee);
    });







    async.parallel([], function () {

        //mongoose.connection.close();

    });
});

