console.log("================STEP 1=================");
var isEvenOrOdd = function (n) {
  if (n % 2 == 0) {
    return "EVEN";
  } else {
    return "ODD";
  }
};
var result = isEvenOrOdd(45);
console.log(`Given number is= 45`);
console.log(`Given number is ${result}`);

var result = isEvenOrOdd(70);
console.log(`Given number is= 70`);
console.log(`Given number is ${result}`);

var result = isEvenOrOdd(67);
console.log(`Given number is= 67`);
console.log(`Given number is ${result}`);

var result = isEvenOrOdd(98);
console.log(`Given number is= 98`);
console.log(`Given number is ${result}`);

console.log("=====================STEP 2====================");
 var isEligible = function (age) {
  if (age >= 18) {
    console.log(`Age is ${age}`);
    console.log("The person is eligible for vote");
  } else {
    console.log(`Age is ${age}`);
    console.log("The person is not eligible for vote");
  }
};
var result = isEligible(18);
var result = isEligible(20);
var result = isEligible(17);

console.log("====================STEP 3====================");
var givenString = function (word) {
  var length = word.length;
  if (length > 10) {
    console.log(`Given string ${word} is more than 10 character`);
  } else {
    console.log(`Given string ${word} is not more than 10 character`);
  }
};
givenString("JavaScript-Es6");

givenString("Html");

console.log("====================STEP4===================");
var checkStart = function (word) {
  if (word.startsWith("Java")) {
    console.log(`Given word-${word} starts with Java`);
  } else {
    console.log(`Given word-${word} does not starts with Java`);
  }
};

checkStart("JavaScript Language");
checkStart("UI Developer");
console.log("End of the program.....");
