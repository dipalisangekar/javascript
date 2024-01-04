console.log("====================STEP 1======================");
function maleMarriageEligibility(gender, age, boyName) {
  var result =
    gender == "male" && age >= 21
      ? `Hey ${boyName} , you are eligible for marriage`
      : `Hey ${boyName} , You are not eligible, Please try next time`;
  console.log(result);
}
maleMarriageEligibility("male", 25, "Billgates");
maleMarriageEligibility("male", 17, "Stew Jobs");

console.log("===============STEP 2==============");
function femaleMarriageEligibility(gender, age, girlName) {
  var result =
    gender == "Female" && age >= 18
      ? `Hey ${girlName} , you are eligible for marriage`
      : `Hey ${girlName} , You are not eligible, Please try next time`;

  console.log(result);
}
femaleMarriageEligibility("Female", 16, "Jenifer");
femaleMarriageEligibility("Female", 27, "Malinda Gates");
