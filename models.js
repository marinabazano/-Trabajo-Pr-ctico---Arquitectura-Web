const mongoose = require("mongoose");


// Schema Project

const projectSchema = mongoose.Schema({
    project_id: {
        type: Number,
        required: true
    },
    project_name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    estimated_hours: {
        type: Number,
        default: 0
    }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;


// Schema Task

const taskSchema = mongoose.Schema({
    task_id: {
        type: Number,
        required: true
    },
    task_name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    project_id: {
        type: Number
    }
});

const Task = mongoose.model('Task', taskSchema);

//module.exports = Task;



// Schema Employee

const employeeSchema = mongoose.Schema({
    employee_id: {
        type: Number,
        required: true
    },
    employee_name: {
        type: String,
        required: true
    },
    area: {
        type: String
    },
    project_id: {
        type: Number
    }
});

const Employee = mongoose.model('Employee', employeeSchema);

//module.exports = Employee;

module.exports = {
    Project,
    Task,
    Employee
};