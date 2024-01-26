

class Employee{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;

    }
    getdetails(){

    console.log(`ID: ${this.emp_id}, Name:${this.emp_name}, Dept:${this.emp_dept}, Salary:${this.emp_salary}, Company:${this.emp_company}`); 
    }
}
const emp_anil = new Employee(22, "Anil", "IT",50000,"TCS");

const emp_radha = new Employee(33, "Radha","HR", 74000, "Wipro");

const emp_rishi = new Employee(55, "Rishi", "Finance",47000,"TCS");

const emp_sonali = new Employee(66, "Sonali", "Finance",45000,"Infy");

const emp_monika = new Employee(77, "Monika","IT", 40000, "Wipro");

const emp_vinayak = new Employee(88, "Vinayak", "IT", 75000,"TCS");

const emp_mahi = new Employee(99, "Mahesh", "HR",85000,"Infy");

const arrayEmployee = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_vinayak, emp_mahi]; 

for (const employee of arrayEmployee) {  
    console.log(`The Given Details of Employees are:`);
    employee.getdetails();
}

console.log("=============================Step 1================================");
console.log("Employee working in TCS");
arrayEmployee.forEach((employee) => {
if (employee.emp_company==="TCS") {
    console.log(`Employee Name: ${employee.emp_name},Employee Compony: ${employee.emp_company}`);
}
});

console.log("=============================Step 2================================");
console.log("Employee salary greater than equal 50000");
arrayEmployee.forEach((employee) => {
if (employee.emp_salary>=50000) {
    employee.getdetails();
}
});

console.log("=============================Step 3================================");
console.log(" Sum of all Employee salary ");
const  add = (n1,n2,n3,n4,n5,n6,n7) =>{
return n1+n2+n3+n4+n5+n6+n7;
}
const sum=add(50000,74000,47000,45000,40000,75000,85000);
console.log(`Sum of all employee salary is : ${sum}`);

console.log("=============================Step 4================================");
console.log(" Average salary ");
const  Average = (n1,n2,n3,n4,n5,n6,n7) =>{
return (n1+n2+n3+n4+n5+n6+n7)/7;
}
const ave=Average(50000,74000,47000,45000,40000,75000,85000);
console.log(`Average Salary is : ${ave}`);

console.log("=============================Step 5================================");
console.log("employee from IT or HR whose salary greater than equal to 75000");
arrayEmployee.forEach((employee) => {
if (employee.emp_salary>=75000||employee.emp_company==="IT"&&employee.emp_dept==="HR") {
    employee.getdetails();
}
});

