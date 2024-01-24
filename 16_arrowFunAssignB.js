

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

console.log("================================ STEP 1 =============================");
    
for (const employee of arrayEmployee) {

    if ( employee.emp_company==="TCS") {
        console.log(`Name: ${employee.emp_name},  Company:${employee.emp_company}`);  
    }
}
console.log("================================ STEP 2 =============================");
for (const employee of arrayEmployee) {
    if ( employee.emp_dept==="Finance") {
        console.log(`Department: ${employee.emp_dept}, Employee Name: ${employee.emp_name}`);
    
    }
}    

console.log("================================ STEP 3 =============================");
    for (const employee of arrayEmployee) {
    if (employee.emp_name.startsWith('R')) {
    employee.getdetails();
    }
    }  

console.log("================================ STEP 4 =============================");
    for (const employee of arrayEmployee) {
        if (employee.emp_salary>75000) {
        console.log(`Employee Name:${employee.emp_name}, Employee Company:${employee.emp_company}, Employee salary:${employee.emp_salary} `);
        }
        }  
        
console.log("================================ STEP 5 =============================");
    for (const employee of arrayEmployee) {
            if (employee.emp_salary>=50000 && employee.emp_dept=="IT") {
            employee.getdetails();
            }
            }  
console.log("================================ STEP 6 =============================");
    
for (const employee of arrayEmployee) {
    
    if ( employee.emp_company==="Infy") {
employee.getdetails();    }
}



   
