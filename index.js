// Write your solution in this file!
let employee = {};
function updateEmployeeWithKeyAndValue(employee, key, value) {
  let newEmployee = { ...employee };
  newEmployee[key] = value;
  return  newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, name) {
  let newEmployee = { ...employee };
  delete newEmployee.name;
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
