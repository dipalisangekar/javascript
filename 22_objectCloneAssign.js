

const arrayNums=[20, 3, 4, 56, 90, 400, 49];
console.log(`Given array is : ${arrayNums}`);

console.log("==================Step 1=====================");
console.log(`Original Array :`);
console.log(arrayNums);
arrayNums.push(55,66);
const clonedArray = arrayNums;
console.log(`After shallow cloning and adding values 55 and 66 in the array:`);
console.log(clonedArray);

console.log("==================Step 2=====================");
const arrayNum=[20, 3, 4, 56, 90, 400, 49];
console.log(`Original Array :`);
console.log(arrayNum);

arrayNum.splice(4,0,10,25);
const newArray=[...arrayNum]
console.log(`Deep clone using spread operator, Updated original array with values 10 and 25 before 90 :`);
console.log(newArray);

console.log("==================Step 3=====================");
const arrayN=[20, 3, 4, 56, 90, 400, 49];
console.log(`Original Array :${arrayN}`);

const arrayEven = [2, 30, 14, 18];
console.log(`Other array: ${arrayEven}`);

const conarray=arrayN.concat(arrayEven);
console.log(`After concating both the array output is:`);
console.log(conarray);

console.log("==================Step 4=====================");
const employee_info ={
    emp_id: 27,
    emp_name: "John doe",
    salary:{
        july_month:"40,0000INR",
        aug_month:"50,0000Inr",
        jun_month: "65,0000INR"
    },
    address:{
        locality:{
            colony:"OM Vridavan society",
            street:"Kanch pokli,431202",
    },
    city: "Mumbai",
    state:"Maharastra",
    country:"India"
},
Mobiles: ["+91 8600 3456 88","1800_4567 32","+91_9096 5678 77"]
}
console.log(`Given employee object is:`);
console.log(JSON.stringify(employee_info));

console.log("==================Step 5=====================");
console.log(`a.Address:-`);
console.log(JSON.stringify(employee_info.address));
//console.log(`2.City:${employee_info.address.city}`);
//console.log(`3.State:${employee_info.address.state}`);
//console.log(`4.Country:${employee_info.address.country}`);
console.log("   ");
console.log(`b.Mobile Nos:-`);
console.log(JSON.stringify(employee_info.Mobiles));

console.log("==================Step 6=====================");
const copyemployee_info = JSON.parse(JSON.stringify(employee_info));/////deep cloning using JSON.stringify
console.log(`Before updating values of original and cloned object:`);
console.log(`Salary for July month : ${JSON.stringify(employee_info.salary.july_month)}`);
console.log(`country : ${JSON.stringify(employee_info.address.country)}`);
////Updating values
employee_info.salary.july_month = "80000INR";
employee_info.address.country = "United Kingdom";
console.log('   ');
console.log(`After updating valus of original and cloned object :`);
console.log(`Salary for July month : ${JSON.stringify(employee_info.salary.july_month)}`);
console.log(`country : ${JSON.stringify(employee_info.address.country)}`);






