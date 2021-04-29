DROP DATABASE IF EXSISTS employeeTracker_DB;


-- creating a DataBase
CREATE DATABASE employeeTracker_DB;


-- created employee table and col's
CREATE TABLE employee(
 id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NOT NULL,
manager_id INT ,
PRIMARY KEY(id)
);