console.log("============STEP1=============");
let str = "I am very good IT Developer";
let vowelCount = 0;
for (let index = 0; index < str.length; index++) {
  let char = str.charAt(index).toLowerCase();
  if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
    vowelCount = vowelCount + 1;
  }
}
console.log(`Total number of vowels in string is:${vowelCount}`);

console.log("===============STEP2==============");
let sum = 0;
for (let index = 1; index <= 5; index++) {
  sum = sum + index * index * index;
}
console.log(`Sum of cube of Numbers from 1 to 5 are : ${sum}`);

console.log("=============STEP3=============");
let string1 = "Hard work always pays back";
let string2 = "Soon i will be UI IT champ";
function oddpositionedChars(string) {
  for (let index = 0; index < string.length; index++) {
    let char = string.charAt(index);
    if (index % 2==1 && char!=" ") {
      console.log(string.charAt(index));
    }
  }
}
console.log(`Given string is:"${string1}"`);
console.log(`odd positioned chars in given string are`);
oddpositionedChars(string1);
console.log(`Given string is:"${string2}"`);
console.log(`Odd positioned chars in given string are`);
oddpositionedChars(string2);
