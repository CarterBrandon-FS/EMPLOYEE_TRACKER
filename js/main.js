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
