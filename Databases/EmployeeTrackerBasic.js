// Dependencies
const mysql = require('mysql');
const inquirer = require('inquirer');

// Establishing connection
const connection = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'root',
    database:'employeeTracker_DB',
});

connection.connect(err => {
    if (err) throw err;
    console.log(`Connection Success ${connectiong.threadID}`)
    managmentview();
});

//Management View to handle employees

const managmentview = () => {
    inquirer
    .prompt({
        name:'options',
        type:'list',
        message: 'What would like to do?',
        choices:[
            'View current Employees',
            'View  Employees by Department',
            'View  Employees by Manager',
            'Add  new Employee',
            'Remove Employee',
            'Update Employees Role',
            'Update Employee Manager'],

            name:"choice"
    })
    // Based on choice call one of above choices
    .then((answer) => {
        console.log(answer. choice);

        switch (answer. choice) {
            case 'View current empployees':
            employeeView();
            break;

            case 'View  Employees by Department':
                departmentView();
                break;
            
            case  'View  Employees by Manager':
                managerView();
                break;

            case 'Add  new Employee':
                addEmployee();
                break;
            
            case 'Remove Employee':
                removeEmployee();
                break;
            
            case 'Update Employees Role':
                updateEmployee();
                break;
            
            case 'Update Employee Manager':
                updateEmployeeManager();
                break;
        }
    }) 
};
