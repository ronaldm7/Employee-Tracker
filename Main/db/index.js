// Import the database connection object
const connection = require("./connection");

// Define a database class with methods for interacting with the database
class DB {
  constructor(connection) {
    this.connection = connection;
  }

  // Find all employees in the database
  findAllEmployees() {
    return this.connection.promise().query(
      "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
    );
  }

  // Find all possible managers for a given employee
  findAllPossibleManagers(employeeId) {
    return this.connection.promise().query(
      "SELECT id, first_name, last_name FROM employee WHERE id != ?",
      employeeId
    );
  }

  // Create a new employee in the database
  createEmployee(employee) {
    return this.connection.promise().query("INSERT INTO employee SET ?", employee);
  }

  // Remove an employee from the database
  removeEmployee(employeeId) {
    return this.connection.promise().query(
      "DELETE FROM employee WHERE id = ?",
      employeeId
    );
  }

  // Update an employee's role in the database
  updateEmployeeRole(employeeId, roleId) {
    return this.connection.promise().query(
      "UPDATE employee SET role_id = ? WHERE id = ?",
      [roleId, employeeId]
    );
  }

  // Update an employee's manager in the database
  updateEmployeeManager(employeeId, managerId) {
    return this.connection.promise().query(
      "UPDATE employee SET manager_id = ? WHERE id = ?",
      [managerId, employeeId]
    );
  }

  // Find all roles in the database
  findAllRoles() {
    return this.connection.promise().query(
      "SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;"
    );
  }

  // Create a new role in the database
  createRole(role) {
    return this.connection.promise().query("INSERT INTO role SET ?", role);
  }

  // Remove a role from the database
  removeRole(roleId) {
    return this.connection.promise().query("DELETE FROM role WHERE id = ?", roleId);
  }

  // Find all departments in the database
  findAllDepartments() {
    return this.connection.promise().query(
      "SELECT department.id, department.name FROM department;"
    );
  }

  // Get the budget for each department in the database
  viewDepartmentBudgets() {
    return this.connection.promise().query(
      "SELECT department.id, department.name, SUM(role.salary) AS utilized_budget FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id GROUP BY department.id, department.name;"
    );
  }

  // Create a new department in the database
  createDepartment(department) {
    return this.connection.promise().query("INSERT INTO department SET ?", department);
  }

  // Remove a department from the database
  removeDepartment(departmentId) {
    return this.connection.promise().query(
      "DELETE FROM department WHERE id = ?",
      departmentId
    );
  }

  // Find all employees in a department
  findAllEmployeesByDepartment(departmentId) {
    return this.connection.promise().query(
      "SELECT employee.id, employee.first FROM department;");
    }
  };
