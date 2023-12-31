console.log("===================STEP1=================");

function stringHandsOn() {
  var string = "   Hey you are doing good, keep it up   ";
  console.log(`1.Given string is:${string}`);
  var result = string.length;
  console.log(`2.Length of given string is :${result}`);
  var trimResult = string.trim();
  var trimLength = trimResult.length;
  console.log(`3.Trimmed string : ${trimResult}, Trimmed Length : ${trimLength}`);
  var extraSpace = result - trimLength;
  console.log(`4.Total no of extra spaces:${extraSpace}`);
  var char = trimResult.charAt(0);
  var char2 = trimResult.charAt(trimLength - 1);
  console.log(`5.1st and last charactor of trimmed string:${char},${char2}`);
  var wordCount = trimResult.split(" ");
  console.log(`6.Total words available in the string:${wordCount.length}`);
  var indexofgood = string.indexOf("good");
  console.log(`7.Index of good in given string:${indexofgood}`);
  var subString = trimResult.substring(22);
  var slice = trimResult.slice(22);
  console.log(`8.Substring starting from index 22  `);
  console.log(`A.Substring using substring is:${subString}`);
  console.log(`B.Substring using slice is:${slice}`);
  var value = trimResult.startsWith("Hey");
  var end = trimResult.endsWith("up");
  console.log(`9.Is string ends with word "up":${end}`);
  console.log(`10.Is string start with word "Hey":${value}`);
}
stringHandsOn();
