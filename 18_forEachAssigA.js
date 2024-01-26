

const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log(`Given array is : ${arrayNumbers}`);

console.log("========================Step 1===========================");
arrayNumbers.forEach((numbers,index) => {
console.log(`index:${index}, value:${numbers}`);
});

console.log("========================Step 2===========================");
console.log('positive numbers from given array is :');
arrayNumbers.forEach((numbers) => {
if (numbers>0) {
    console.log(numbers);
}
});

console.log("========================Step 3===========================");
console.log('Negetive numbers from given array is :');
const newArray=[];
const array = arrayNumbers.forEach((numbers) => {
    if (numbers<0) {
       newArray.push(numbers); 
    }
})
console.log(newArray);

console.log("========================Step 4===========================");
console.log('Even numbers from given array is :');
arrayNumbers.forEach((numbers) => {
    if (numbers%2==0) {
        console.log(numbers);
    }
});

console.log("========================Step 5===========================");
console.log('Sum of all element from array is :');
let sum=0;
arrayNumbers.forEach((numbers) => {
    sum = sum + numbers;
});
console.log(sum);

console.log("========================Step 6===========================");
console.log('Even indexed array value are :');
arrayNumbers.forEach((numbers,index) => {
    if (index % 2 == 0) {
        console.log(`index: ${index},  value :${numbers}`);
    }
});



