use employees;

INSERT INTO department
    (name)
VALUES
    ('Marketing'),
    ('IT'),
    ('Accounting'),
    ('HR');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Marketing Lead', 100000, 1),
    ('Marketing accountant', 80000, 1),
    ('Senior IT', 150000, 2),
    ('Software Dev', 120000, 2),
    ('Account Manager', 160000, 3),
    ('Accountant', 125000, 3),
    ('HR Couns', 250000, 4),
   

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('neymar', 'jr', 1, NULL),
    ('cristiano', 'ronaldo', 2, 1),
    ('messi', 'lionel', 3, NULL),
    ('luca', 'modric', 4, 3),
    ('kun', 'aguero', 5, NULL),
    ('ronaldhino', 'gav', 6, 5),
    ('david', 'beckham', 7, NULL),
    ('vinicis', 'jr', 8, 7);
