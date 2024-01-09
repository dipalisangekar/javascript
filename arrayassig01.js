
console.log("==============STEP1===============");
const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Given array is : ${fruits_seasonal}`);
const firstElementOnArray = fruits_seasonal[0];
console.log(`first element on array is : ${firstElementOnArray}`);
const lastElementOnArray = fruits_seasonal[4];
console.log(`Last Element On Array is : ${lastElementOnArray}`);

console.log("==============STEP2===============");
const fruits = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Given array is : ${fruits}`);
fruits.unshift("Papaya");
console.log(`Array after adding Papaya before Banana is: ${fruits}`);

console.log("==============STEP3===============");
const seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Given array is : ${seasonal}`);
const removedElement = seasonal.splice(3,1);
console.log(`Array after deleting Mango is:${seasonal}`);

console.log("==============STEP4===============");
console.log(`Given array is : ${fruits_seasonal}`);
fruits_seasonal.push('Pineapple');
console.log(`Array after adding element pineapple at last position is: ${fruits_seasonal}`);

console.log("==============STEP5===============");
const arrayFruits =["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Given array is : ${arrayFruits}`);
arrayFruits.splice(4,0,"Dragon fruit");
console.log(`Array after inserting element Dragon fruit before watermelon is: ${arrayFruits}`);

console.log("==============STEP6===============");
const fruitElement =["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Given array is : ${fruitElement}`);
fruitElement.splice(1,1,"Kiwi");
console.log(`Array after replacing orange with kiwi fruit is : ${fruitElement}`);

console.log("==============STEP7===============");
const startElement =["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Given array is : ${startElement}`);
const element=startElement.slice(1,4);
console.log(`Elements starting from index 1 to 4 are : ${element}`);

console.log("==============STEP8===============");  
const lastElement =["Banana","Orange","Apple","Mango","Water Melon"];  
console.log(`Given array is : ${lastElement}`);
let lelement= lastElement.slice(-3);
    console.log(`Last 3 elements of array are : ${lelement}`);

  
  
