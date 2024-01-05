// Function Expression - FE
// FE - Storing function inside the variable
console.log("=======================STEP1======================");
var display = function () {
  console.log("display");
};
display(); // Call - Function expression
//console.log(display);
var maleMarriageEligibility = function (gender, age, boyName) {
  var result =
    gender == "Male" && age >= 21
      ? `Hey ${boyName}, you are eligible for Marriage`
      : `Hey ${boyName}, You are not eligible, Please try next time.`;
  console.log(result);
};
maleMarriageEligibility("Male", 25, "Billgates");
maleMarriageEligibility("Male", 20, "Elon");

console.log("=======================STEP2========================");
var display = function () {
console.log("display");
};
display();

var femaleMarriageEligibility = function (gender, age, girlName) {
  var result =
    gender == "Female" && age >= 18
      ? `Hey ${girlName}, you are eligible for Marriage`
      : `Hey ${girlName}, You are not eligible, Please try next time.`;
  console.log(result);
};
femaleMarriageEligibility("Female", 16, "Jenifer");
femaleMarriageEligibility("Female", 27, "Malinda Gates");
