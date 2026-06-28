// Employee tracker
// lets get started
// lets add the employee, manager and part time classes

// IIFE also has been added to start the process

class Employee {
  constructor(name, age, payRate, hours) {
    this.name = name;
    this.age = age;
    this.payRate = this.payRate;
    this.hours = hours;

    this.annualSalary = 0;
    this.employeeType = "Employee";
  }
}
// manager class that extends emp class
class Manager extends Employee {
  constructor(name, age, payRate, hours) {
    super(name, age, payRate, hours);
    this.employeeType = "Manager";
    this.calcPay();
  }

  calcPay() {
    this.annualSalary = this.hours * this.payRate * 52 - 1000;
  }
}

class PartTime extends Employee {
  constructor(name, age, payRate, hours) {
    super(name, age, payRate, hours);
    this.employeeType = "Part Time";
    this.calcPay();
  }

  calcPay() {
    this.annualSalary = this.hours * this.payRate * 52;
  }
}

class Main {
  constructor() {
    this.employees = [];

    // store to use as a counter. id increase for every employee

    this.idCounter = 1;

    // use ++ to add 1 to the id number after it is used
    // Hard-code 3 employees (matches teacher's example)

    let emp1 = new Manager("Dave", 44, 13, 40);
    emp1.id = this.idCounter++;
    // push to array
    this.employees.push(emp1);

    let emp2 = new PartTime("Lisa", 25, 12, 22);
    emp2.id = this.idCounter++;
    // push to array
    this.employees.push(emp2);

    let emp3 = new PartTime("Mark", 30, 15, 35);
    emp3.id = this.idCounter++;
    // push to array
    this.employees.push(emp2);

    // run the init table display upon starting
    this.displayEmployees();

    // continuous user prompt loop
    this.startMenu();
  }

  // displays the main menu via browser
  startMenu() {
    // captures users selections and parses it
    let choice = Number(
      prompt(
        "Main Menu\n1. Add Employee\n2. Remove Employee\n3. Edit Employee\n4. Display Employees\n\nEnter selections:",
      ),
    );

    switch (choice) {
      case 1:
        this.addEmployee();
        break;
      case 2:
        this.editEmployee();
        break;
      case 3:
        this.editEmployee();
        break;
      case 4:
        this.displayEmployees();
        break;
      default:
        alert("Invalid selection. Try again!");
    }
  }

  // adds a new employee using a single comma
  addEmployee() {
    let input = prompt(
      "Add Employee Name, age, hours/wk, pay rate [separate each by a comma]",
    );

    if (input) {
      let data = input.split(",");

      // extract and clean strings/num from details in array
      let name = data[0].trim();
      let age = parseInt(data[1].trim());
      let hours = parseInt(data[2].trim());
      let payRate = parseInt(data[3].trim());

      let newEmp;

      // init logic to return hours into status
      if (hours >= 40) {
        newEmp = new Manager(name, age, payRate, hours);
      } else {
        newEmp = new PartTime(name, age, payRate, hours);
      }

      newEmp.id = this.idCounter++;
      // push to array
      this.employees.push(newEmp);

      alert(`${name} added!`);

      this.displayEmployees();
    }
  }

  removeEmployee() {
    let input = prompt("Enter ID or Name of employee to remove!");

    if (input) {
      input = input.trim();

      if (!isNaN(input)) {
        let id = parseInt(input);
        this.employees = this.employees.filter((emp) => emp.id !== id);
      } else {
        let name = input.trim();
        this.employees = this.employees.filter(
          (emp) => emp.name.toLowerCase() !== name.toLowerCase(),
        );
      }

      console.log(`✅ Employee removed!`);
      // run the init table display upon starting
      this.displayEmployees();
    }
  }
}
