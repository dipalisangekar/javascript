console.log("----------------STEP1------------");
function square(num) {
  console.log("Given value is:", num);
  var result = num * num;
  console.log("Result is:", result);
}
square(9);
square(11);
square(25);
square(1023);
console.log("----------------STEP2------------");
function multiply(n1, n2, n3) {
  console.log("Given numbers are :", n1, n2, n3);
  var result = n1 * n2 * n3;
  return result;
}
var returnvalue = multiply(5, 5, 5);
console.log("Multiplication is:", returnvalue);
var resultvalue = multiply(25, 35, 36);
console.log("Multiplication is :", resultvalue);

console.log("----------------STEP2------------");
function swap(n1, n2) {
  console.log("Before swap", "n1=", n1, "n2=", n2);
  var temp = n1;
  n1 = n2;
  n2 = temp;
  console.log("After swap", "n1=", n1, "n2=", n2);
}
swap(100, 200);
swap("Jenny", "Menny");
