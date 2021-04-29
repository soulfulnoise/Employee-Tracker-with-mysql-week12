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
    console.log(`Connection Success ${connectiong.threadID}`);

    managmentView();
});



//Management View to handle employees

const managmentView = () => {
    inquirer
    .prompt({
        type:'list',
        message: 'What would like to do?',
        choices:[
            "Add new Department",
            'Add employee Role',
            'Add new Employee',
            'View Departments',
            'View current Employees',
            'View Roles',          
            'Update Employees Role',],
            name:'option',
    })
    // Based on choice call one of above choices
    .then((answer) => {
        console.log(res.choice);

        switch (res.choice) {
            case 'View current Employees':
            viewEmployee();
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

function addDepartment() {
    inquirer.prompt({
        type:"input",
        message:"Name the new Department.",
        name:"department_name"
    })
}


function viewEmployee() {
    // pull from database  give results in console.log
    let query ="SELECT * FROM emplooyee";
    connection.query(query,function(err,res){
        if (err) throw err;
        console.table(res);
        managmentView();
    });

}