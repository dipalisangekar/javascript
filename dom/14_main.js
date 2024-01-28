

const first=document.getElementById("first")
console.log(first)
first.style.color="red";

const second = document.getElementById("second")
console.log(second);
second.style.color="CadetBlue";

console.log(`==== Remove a node ========`);

const elementList = document.querySelector('#list');

const elementList2 = document.querySelector('#list2');

elementList.removeChild(elementList2);

console.log(`==== Changing Attribute ========`);

const elementLink = document.querySelector('#visitLink');

elementLink.setAttribute('href', "https://www.w3schools.com/");

elementLink.setAttribute('target', "_self");
