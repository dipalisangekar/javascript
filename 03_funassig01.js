console.log("-----------------------STEP1-----------------------");
function message() {
  console.log("Good Morning");
  console.log("I am learning javaScript.");
}
message();

console.log("-----------------------STEP2-----------------------");
function personalDetails(firstName, lastName, collegeName) {
  //var firstName = "Dipali";
  //lastName = "Sangekar";
  //collegeName = "BMIT Solapur";
  console.log("Personal Details are:");
  console.log("First name:", firstName);
  console.log("Last name:", lastName);
  console.log("Collage name:", collegeName);
}
personalDetails("Dipali","Sangekar","BMITSolapur");

console.log("------------STEP3-------------");
function swapValues(n1, n2) {
  console.log("Before swipping:");
  console.log("num1=", n1);
  console.log("num2=", n2);
  var temp = n1;
  n1 = n2;
  n2 = temp;
  console.log("After swipping:");
  console.log("num1=", n1);
  console.log("num2=", n2);
}
swapValues("Virat", "Anushka");
console.log("===============");
swapValues(1000, 2000);

console.log("===============STEP4===============");
function addThreeValues(num1, num2, num3) {
  console.log("Given values are:", num1, num2, num3);
  var sum = num1 + num2 + num3;
  console.log("Addition of given value is:", sum);
}
addThreeValues(10.23, 600, 40);

addThreeValues("Hello,", "Good,", "Morning,");
