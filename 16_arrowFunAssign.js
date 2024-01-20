
console.log("======================STEP 1===================");
const show =()=>{
    console.log(`Good Morning, Today is Thursday.`);

}
show();

console.log(` `);
console.log("======================STEP 2===================");

const multiplication = (n1,n2,n3=1)=>{
    let result = n1*n2*n3;
     console.log(`Multiplication of given no is:${result}`);
}
multiplication(5,5,2);
multiplication(10,4,);

console.log(` `);
console.log("======================STEP 3===================");

const add=(n1,n2,n3,n4,n5)=>{
    return n1+n2+n3+n4+n5;
}
const returnValue1 = add(100,100,200,349,756);
const returnValue2=add(" I am"," learning"," ES6"," features"," in depth.");
console.log(`Addition of given no is: ${returnValue1}`);
console.log(`Addition of given no is:${returnValue2}`);
console.log("========================END=======================");




