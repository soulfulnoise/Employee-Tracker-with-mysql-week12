--  DROP DATABASE IF EXISTS Employee_trackerDB;

-- CREATE DATABASE Employee_trackerDB;

USE Employee_trackerDB;

INSERT INTO employee(first_name, last_name, role_id, manager_id)

VALUES
("Alvin","Thompson",1,NULL),
("Jessie","Alverez",15,NULL),
("Jamila","Gunn",28,NULL),
("Sharika","Lewis",1,NULL),
("Deandre","Lewis",1,NULL),
("Big","Sean",1,NULL),
("Alvin","Thompson",1,NULL),
("Alvin","Thompson",1,NULL),
("Alvin","Thompson",1,NULL),
("Alvin","Thompson",1,NULL),

INSERT INTO role(title,salary, department_id)

VALUES

("CEO", 300000, 1)
("Office Manager", 150000, 2)
("Admin Manager", 91000, 5)
("Opertions Manager", 300000, 3)
("Tech Manager", 250000, 4)
("Sales Rep", 90000, 12)
("Project Lead",85000 , 10)
("Payroll Manager", 97000, 6)
("Senior Developer", 140000, 8)
("Junior Developer", 80000, 1)
("Account Rep", 100000, 1)
