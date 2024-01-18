

let factorialOfWordsCount = function(word){
   
   if (word==null||word==undefined) {
    return"Invalid input"; 
   }
   
   console.log(`Given string is:${word}`);
   let givenWord = word.split(" ").length;
    console.log(`Total no of words in string is :${givenWord}`);

    let result=1;
    for (let index = 1; index <= givenWord; index++) {
       result=result*index;
        }
        console.log(`Factorial of no ${givenWord} is:${result}`);
        console.log(``);
        
    
}
factorialOfWordsCount("Revision is the mother of sucess")
factorialOfWordsCount("We never fail, we always learn, Mind it");
console.log(`Factorial of null:${factorialOfWordsCount(null)}`);
console.log(``);
factorialOfWordsCount("");
factorialOfWordsCount("Dipali Nagendra Sangekar");
