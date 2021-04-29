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

const viewEmployee = (inputs =[]) => {
    inquirer
    .prompt({
        name:"viewEmployee",
        type:"input",
        message:"Enter Employees name"
    })
    //grabbing the info of employee
    .then((choice) => {
      let qury = "SELECT first_name, last_name, id FROM employee WHERE ?";
      connection.query(query,{first_name , last_name: choice.viewEmployee }, function
          (err,res)
          {
              if(err) throw err;

              for (var i = 0; i < res.length; i++) {
                  console.log(
                      " | First Name: " + res[i].first_name +
                      " | Last name: " + res[i].last_name +
                      " | Id: " + res[i].id
                  );
              }
          });
          employeeTracker_DB()
    });
  }
const departmentView = (res) => {
    let query = "SELECT dept_name FROM department";
    connection.query(query, function(err, res) {
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].name);
      }
    });
  }
  const managerView = (res) => {
    let query = "SELECT maneger_id, first_name, last_name FROM employee WHERE manager_id IN (SELECT Manager_id FROM employee WHERE manager_id IS NOT NULL)";
    connection.query(query, function(err, res) {
      
      if(err) throw err;
  
      for (var i = 0; i < res.length; i++) {
        console.log(
          res[i].first_name + " " + 
          res[i].last_name + " || Id: " + 
          res[i].id
        );
      }
    })
    menu();
  }
 