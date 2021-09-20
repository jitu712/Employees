onmessage = function (params) {
    console.log('Message received from main script');
    let output = "";
    let employees = params.data[0];
    switch (params[1]) {
        case "highest":
            let max = { employee_salary: 0 };
            employees.forEach(e => e.employee_salary > max.employee_salary && (max = e));
            output = "Employee with highest salary is " + max.employee_name + " with salary of " + max.employee_salary;
            break;
        case "lowest":
            let min = { employee_salary: Infinity };
            employees.forEach(e => e.employee_salary < min.employee_salary && (min = e));
            output = "Employee with lowest salary is " + min.employee_name + " with salary of " + min.employee_salary;
            break;

        default:
            break;
    }

    console.log('Posting message back to main script');
    postMessage(output);
}