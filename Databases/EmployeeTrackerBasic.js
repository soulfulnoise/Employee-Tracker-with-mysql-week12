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
    // Prompt for info about new Department
    inquirer.prompt({
        type:"input",
        message:"Name the new Department.",
        name:"department_name"
    }).then(function(answer){
        //after prompts insert new department in the DB
        connection.query("INSERT DEPARTMENT (name) VALUES (?)",[ answer.department_name] ,function(err, res) {
            if (err) throw err;
            console.table(res)
            managmentView();
        })
    })
}

function addEmployeeRole() {
    inquirer.prompt([
        {
            type:"input",
            message:"Name of employee Role?",
            name:"role_name"
        },
        {
            type:"input",
            message:"Salary for employee Role?",
            name:"newSalary"
        },
        {
            type:"input",
            message:"Department id number?",
            name:"departmentID"
        }
    ]).then(function(answer){
        connection.query("INSERT INTO role(title,salary,department_id) VALUES(?,?,?)",[answer.role_name, answer.newSalary, answer.departmentID], function(err, res){
            if (err) throw(err);
            console.table(res);
            managmentView();
        })
    })

}

function addEmployee() {
    inquirer.prompt([
        {
            type:"input",
            message:"First name of employee?",
            name:"empFirstName"
        },
        {
            type:"input",
            message:"Last name of employee?",
            name:"empLastName"
        },
        {
            type:"input",
            message:"Employee Role Id Number?",
            name:"roleID"
        },
        {
            type:"input",
            message:"Assign Manger via Manger id Number.",
            name:"mangerID"
        }
    ]).then(function(answer){
        connection.query("INSERT INTO emplooyee(first_name,last_name,role_id,manager_id) VALUES(?,?,?,?)",[answer.first_name, answer.last_name, answer.role_id, answer.manager_ID], function(err, res){
            if (err) throw(err);
            console.table(res);
            managmentView();
        })
    });
}

function updateEmployee() {
    inquirer.prompt([
        {
            type:"input",
            message:"Choose an employee to update.",
            name:"empUpdate",
        },
        {
            type:"input",
            message:"What do you want to updats?.",
            name:"updateRole",
        }
    ]).then(function(answer){
        connection.query("UPDATE emplooyee SET role_id=?",[answer.empUpdate,answer.updateRole],function(err,res){
            if(err) throw err;
            console.table(res);
            managmentView();
        });
    });
}
// giving user acess to db to view department roles and employees
function viewDepartment() {
    let query = "SELECT * FROM department";
    connection.query(query, function(err,res){
        if(err) throw err;
        console.table(res);
        managmentView();
    });
}

function viewRoles() {
    let query = "SELECT * FROM role";
    connection.query(query, function(err,res){
        if(err) throw err;
        console.table(res);
        managmentView();
    });
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
function quit(){
    connection.end();
    process.exit();
}