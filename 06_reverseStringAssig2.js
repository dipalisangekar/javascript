console.log("=============Reverse String=============");

function reverseString(string) {
  console.log(`Given string is:"${string}"`);

  let result = "";

  for (let index = string.length-1; index >= 0; index--) {
    if (string.charAt(index) != " ") {
      result = result + string.charAt(index);
    };
  };

  console.log(`Reverse of given string is: ${result}`);

  console.log(" ");
};
reverseString("Hard work always pays back");
reverseString("Soon i will be UI IT champ");
