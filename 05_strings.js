const name = "Lalith";
const repoCount = 50;
console.log(name+repoCount+"Value");
console.log(`My name is ${name.toUpperCase()} and my repoCount is ${repoCount}`);

const gameName = new String("LalithGhatty");
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
const newString = console.log(gameName.substring(0,3));
const AnotherString = gameName.slice(-8,4);
console.log(AnotherString);

const newStringOne = "    Lalith  ";
console.log(newStringOne.trim());
const url = "https://lalith.com/lalith%50Ghatty";
console.log(url.replace('%50','-'));








