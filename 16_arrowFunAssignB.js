

class Employee{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;

    }
    getdetails(){

    console.log(`"ID": ${this.emp_id}, "Name":${this.emp_name}, "Dept":${this.emp_dept}, "Salary":${this.emp_salary},
     "Company":${this.emp_company}`); 
    }
}
const emp_anil = new Employee(22, "Anil", "IT",50000,"TCS");

const emp_radha = new Employee(33, "Radha","HR", 74000, "Wipro");

const emp_rishi = new Employee(55, "Rishi", "Fianance",47000,"TCS");

const emp_sonali = new Employee(66, "Sonali", "Fianance",45000,"Infy");

const emp_monika = new Employee(77, "Monika","IT", 40000, "Wipro");

const emp_vinay = new Employee(88, "Vinay", "IT", 75000,"TCS");

const emp_mahi = new Employee(99, "Mahesh", "HR",85000,"Infy");

const arrayEmployee = [anil, radha, rishi, sonali, monika, vinay, mahi]; 

for (const element of arrayEmployee) {  
    element.getdetails();
}

