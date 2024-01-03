
console.log("==================STEP1==================");
function greaterNumber(n1,n2){
 var a=n1;
 var b=n2;
 console.log(`Given numbers are a= ${a},b= ${b}`);
  var result = a > b ? "a is greater than b":"b is grater than a";
 console.log (result);
}
greaterNumber(10,-10);
console.log("================================");
greaterNumber(800,899);
//greaterNumber(20,10);
//greaterNumber(50,10);
//greaterNumber(30,80);
console.log("==================STEP2===================");
  function isEvenOrOddNum(n1){
   var a=n1;
    console.log(`Given Number is = ${a} `);
   var result = a % 2 == 0 ? "True (Given number is even)" : "False (Given number is odd)";
    console.log(result);
    return result;
    return result;
  }
  isEvenOrOddNum(29);
  isEvenOrOddNum(44);
  isEvenOrOddNum(0);
  isEvenOrOddNum(101);
  
  console.log("==================STEP3====================");
     function wordLength(n1){
       var word=n1;
      console.log(`Given word is =${word}`);
       var length=word.length;
       console.log(`Length of word is=${length}`);
       var result = length % 2 ==0 ?  "Word has 'EVEN' length" : "Word has 'ODD' length";
        console.log(result);
     return(result);
    
    }
      wordLength("JavaScript");
      
      wordLength("Developer");
     
      wordLength("Google");

