

console.log("======================Step1 Palindrome=====================");
const isPalindrome = function(word){
    const reverseword = word.split('').reverse().join('');
    let result = word === reverseword ? "True" : "False";
    console.log(`${word} is Palindrome :${result}`);
};
isPalindrome("madam");
isPalindrome("dad");
isPalindrome("hello");

console.log(' ');
console.log("====================== Step2 Anagram =====================");
const isAnagram = function(n1, n2){
    const str1 = n1.toLowerCase().split('').sort().join('');
    const str2 = n2.toLowerCase().split('').sort().join('');

    const result = str1 === str2 ? "True" : "False";
    console.log(`"${n1}" and "${n2}" are Anagram :${result} `);
}
isAnagram("Silent","Listen");
isAnagram("Hello","World");
isAnagram("Such","Much");
 