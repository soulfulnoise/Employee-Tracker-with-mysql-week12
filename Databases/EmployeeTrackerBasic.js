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
        type:"list",
        name:"options",
        message: "What would like to do?",
        choices[
            
        ]
    });
