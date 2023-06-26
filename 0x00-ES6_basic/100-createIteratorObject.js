export default function createIteratorObject(report) {
  let departmentIndex = 0;
  let employeeIndex = 0;
  const departments = Object.keys(report.allEmployees);

  return {
    next() {
      if (departmentIndex >= departments.length) {
        return {
          done: true
        };
      }

      const currentDepartment = departments[departmentIndex];
      const employees = report.allEmployees[currentDepartment];
      
      if (employeeIndex >= employees.length) {
        departmentIndex++;
        employeeIndex = 0;
        return this.next();
      }

      const currentEmployee = employees[employeeIndex];
      employeeIndex++;

      return {
        value: currentEmployee,
        done: false
      };
    }
  };
}
