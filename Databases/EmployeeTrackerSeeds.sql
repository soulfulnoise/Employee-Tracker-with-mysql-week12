--  DROP DATABASE IF EXISTS Employee_trackerDB;

-- CREATE DATABASE Employee_trackerDB;

USE Employee_trackerDB;

INSERT INTO employee(first_name, last_name, role_id, manager_id)

VALUES
("Alvin","Thompson",8,NULL),
("Jessie","Alverez",6,2),
("Andwelle","Spaulding",11,2),
("Sharieka","Lewis",1,NULL),
("Deandre","Lewis",10,7),
("Jordan","Belfort",5,7),
("Chelsea","Jones",3,7),
("Billy","IDOl",16,NULL),
("Naomi","Lapagila",13,4),
("Efraim ","Diveroli",12,4),
("Vincent","Abraham",15,4),
,


INSERT INTO role(title,salary, department_id)

VALUES

("Office Manager", 150000, 2)
("Admin Manager", 91000, 2)
("Assistant", 60000,2)
("Opertions Manager", 300000, 7)
("Payroll", 97000, 7)
("Sales Rep", 90000, 7)
("Account Rep", 100000, 7)
("Tech Manager", 250000, 4)
("Project Lead",85000 , 4)
("Accessibility", 1115000,4)
("Senior Developer", 140000, 4)
("Junior Developer", 80000, 4)
("Computer Enginer", 97000,4)


INSERT INTO department(department_name)
VALUES
("Admin Department"),
("Operations Department"),
("Technology Department");