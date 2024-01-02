
console.log("==============STEP1=============");
function squareOfWordLength(n1) {
    console.log(`Given string is :${n1}`);
    var lengthofword = n1.length;
    console.log(`Length of given string is:${lengthofword}`);
    var lengthSquare = lengthofword * lengthofword;
    console.log(`Square of length is :${lengthSquare}`);
    return lengthSquare;
}
squareOfWordLength("JavaScript");
console.log(`================STEP2============`);
squareOfWordLength("Google Chrome");
console.log(`================STEP3==============`);
squareOfWordLength("Developer Smart");

console.log("================STEP=============");
function angular() {
    var string = "I am Angular Developer";
    console.log(`Given String is: ${string}`);
    var result = string.length;
    console.log(`Length of string is = ${result}`);
    var wordCount = string.split(" ");
    console.log(`total no. of words in string is=${wordCount.length}`);
    var division = result / wordCount.length;
    console.log(`Division of length of string and no of words is=${division}`);
    var multiplication = result * wordCount.length;
    console.log(`Multiplication of string lengh and no of words is=${multiplication}`);
}
angular();