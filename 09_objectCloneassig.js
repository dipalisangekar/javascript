
console.log("==========Object bankSbi=============");
const bankSbi ={
          accountNo: 1234567890,
          ifscno: "SBI1234",
          branchName: "Gandhi nagar",
          type:"Saving"
        }

const bankLocation ={
          street:"M G Road",
          city:"Banglore",
          pin:560043
        }
       
        const clonedObject = Object.assign({}, bankSbi, bankLocation);
        console.log(bankSbi);
        console.log("==========Object banklocation=============");
        console.log(bankLocation);
console.log("==========Cloned Object ============="); 
        console.log(clonedObject);
 
console.log("==========Object RateofInterest ============="); 
const rateOfInterest ={
       homeloanInterest: 9,
       personalLoanInterest:11,
       dueInterest:5
}
console.log(rateOfInterest);

console.log("==========Merged Object Sbidetails ============="); 
const SbiDetails = Object.assign({} ,bankSbi,bankLocation,rateOfInterest,);
console.log(SbiDetails);

console.log("==========Traversing of merged object ============="); 

for (const key in SbiDetails) {
  if (Object.hasOwnProperty.call(SbiDetails, key)) {
    const element = SbiDetails[key];
    console.log(`Key ==> ${key}, Value ==> ${element}`); 
  }
  
}
