var marrigeEligibility = function (gender, age) {
  if (age < 0) {
    console.log(`${gender} ${age} is invalid Input......`);
  } else {
    if ((gender =="female" && age >= 18)) {
      console.log(`Gender=${gender}, Age=${age} is eligible for marrige`);
    } else if ((gender =="male" && age >= 21)) {
      console.log(`Gender=${gender}, Age=${age} is eligible for marriage`);
    } else {
      console.log(`Gender=${gender}, Age=${age} is not eligible for marriage`);
    }
  }
};
marrigeEligibility("male", 17);
marrigeEligibility("male", 25);
marrigeEligibility("female", 28);
marrigeEligibility("female", 16);
marrigeEligibility("Other", 35);
marrigeEligibility("Other", 41);

