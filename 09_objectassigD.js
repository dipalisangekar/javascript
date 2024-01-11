
console.log("================STEP 1===============");
 let professor = {
          firstName: "Prachi Shirshikar",
          age : 40,
          education: "PhD",
          department: "Electrical department",
          Designation: "Head of Department"

 }
 console.log(professor);
 console.log("============Nested Object STEP2=============");
 professor.degrees = "Degrees- engineering:'csc', PHD:'Adv computing', Masters:'MTec'";
 console.log(professor.degrees);

 console.log("============array STEP3=============");
  let certificates=['Hacker Rank Participation','Certificate in IFE course','certificate in adv programming'];
  console.log(certificates);

  console.log("============New Property STEP4=============");
  professor.totalExperience = "14 years";
  console.log(professor);

  console.log("============ STEP5=============");
  professor.age = 45;
  console.log(professor);
  