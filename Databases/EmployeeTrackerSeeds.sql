--  DROP DATABASE IF EXISTS Employee_trackerDB;

-- CREATE DATABASE Employee_trackerDB;

USE Employee_trackerDB;

INSERT INTO emplooyee(first_name, last_name, role_id, manager_id)

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
("Vincent","Abraham",15,4);



INSERT INTO role(title,salary, department_id)

VALUES

("Office Manager", 150000, 1),
("Admin Manager", 91000, 1),
("Assistant", 60000,1),
("Opertions Manager", 300000, 2),
("Payroll", 97000, 2),
("Sales Rep", 90000, 2),
("Account Rep", 100000, 2),
("Tech Manager", 250000, 3),
("Project Lead",85000 , 3),
("Accessibility", 1115000,3),
("Senior Developer", 140000, 3),
("Junior Developer", 80000, 3),
("Computer Enginer", 97000,3),


INSERT INTO department(department_name)
VALUES
("Admin Department"),
("Operations Department"),
("Technology Department");