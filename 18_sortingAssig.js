

const arrayRollNumbers=[113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
console.log(`Given array is :`);
console.log(arrayRollNumbers);
console.log("  "); 
arrayRollNumbers.reverse();
console.log(`===============Step 1 Reverse Array================`);
console.log(arrayRollNumbers);
console.log("  ");
arrayRollNumbers.sort();
console.log(`===============Step 2 Using sort Method=============`);
console.log(arrayRollNumbers);
console.log("  ");
console.log(`======Step 3 Sorting array in accending order=======`);
const accending=arrayRollNumbers.sort((a,b) => {
   return a > b ? 1 : -1
})
console.log(accending);
console.log("  ");
console.log(`======Step 4 Greatest Number in array=======`);
const largest = accending[9];
console.log(`Largest number in array is: ${largest}`);

console.log("  ");   
console.log(`======Step 5 Smallest Number in array=======`);
const Smallest = accending[0];
console.log(`Smallest number in array is : ${Smallest}`);

console.log("  ");   
console.log(`======Step 6 Remove duplicate number in array=======`);
const newArray=[];
arrayRollNumbers.forEach((num) =>{
   if (!newArray.includes(num)) {
      newArray.push(num);
}
})
console.log(newArray);





    





