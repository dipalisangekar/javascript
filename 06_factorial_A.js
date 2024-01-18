

let factorialOfNum = function(num){
    //if (num==0||num==1) {
        //return 1;
        //}
        if (num==null||num==undefined) {
            return`Invalid input`
        }
let result=1;
        for (let index = 1; index <= num; index++) {
    result=result*index;
    
}
  return result;      
    }
    let result1 = factorialOfNum(5);
    console.log(`Factorial of 5: ${result1}`);
    console.log(``);
    let result2 =factorialOfNum(3);
    console.log(`Factorial of 3: ${result2}`);
    console.log(``);
    let result3=factorialOfNum(null);
    console.log(`Factorial of null: ${result3}`);
    console.log(``);
    let result4=factorialOfNum(8);
    console.log(`Factorial of 8: ${result4}`);
    console.log(``);
    let result5=factorialOfNum(undefined);
    console.log(`Factorial of undefined: ${result5}`);
    console.log(``);
    let result6=factorialOfNum(9);
    console.log(`Factorial of 9: ${result6}`);
    console.log(``);                   
    let result7=factorialOfNum(0);
    console.log(`Factorial of 0: ${result7}`);     


