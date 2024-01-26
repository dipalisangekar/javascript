

const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19 ];
console.log(`Given array is : ${arrayNumbers}`);

console.log("=========================Step 1========================");
console.log("Array after adding 10 in each element: ");
const arrayTrans = arrayNumbers.map((currentValue) => {
return currentValue + 10;
})
console.log(arrayTrans);

console.log("=========================Step 2========================");
console.log("Cube of each element: ");
const arrayTransformed = arrayNumbers.map((currentValue) => {
    return currentValue*currentValue*currentValue;
})
console.log(arrayTransformed);

console.log("=========================Step 3========================");
console.log("After adding index value to each element: ");
const arrayTr = arrayNumbers.map((index) => {
    return index;
})
console.log(arrayTr);



