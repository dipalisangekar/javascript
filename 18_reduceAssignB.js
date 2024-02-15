

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

const arrayEmps = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_vinayak, emp_mahi]; 

for (const employee of arrayEmps) {  
    console.log(`The Given Details of Employees are:`);
    employee.getdetails();
}
console.log("============Step1===============");
const employeeFromWipro = arrayEmps.filter((employee)=>{
return employee.emp_company=="wipro";
});

