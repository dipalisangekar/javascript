
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
   professor.certificates=['Hacker Rank Participation','Certificate in IFE course','certificate in adv programming'];
  console.log(professor.certificates);

  console.log("============New Property STEP4=============");
  professor.totalExperience = "14 years";
  console.log(JSON.stringify(professor));
  
  console.log("============ Modify age STEP5=============");
  professor.age = 45;
  console.log(professor);

  console.log("============Add certificate STEP6=============");
   professor.certificates.splice(2,0,"Oracle certified");
     console.log(`New certificate is:"${professor.certificates}"`);
console.log("============Add last element of certificate STEP7 =============");
  let lastElement = professor.certificates[3];
  console.log(`Last element of certificates is: "${lastElement}"`);

  console.log("============Complete object STEP8 =============");
    for (const key in professor) {
        if (Object.hasOwnProperty.call(professor,key)) {
            const element = professor[key];
            console.log(`key=>${key}, values=>${element} `);
        }
    }
    console.log("============Traverse Array STEP 9 =============");
     for (const element of professor.certificates) {
        console.log(element);
    }
    