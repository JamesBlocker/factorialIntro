var inputString = "Believe you can and you're halfway there. Theodore Roosevelt";
var outputString = "";


var splitString = inputString.split("");
for (i = 0; i <= splitString.length; i++) {
  var currentChar = inputString[i];
  if (splitString[i] === "a" ||
    splitString[i] === "e" ||
    splitString[i] === "i" ||
    splitString[i] === "o" ||
    splitString[i] === "u") {
    currentChar = "-";
  }
  outputString = outputString + currentChar;
}
console.log(outputString);

//|| splitString[i] = "e" || splitString[i] = "i" || splitString[i] = "o" || splitString[i] = "u")

// if () is a) {
//   string.replace(a,-);
// }else if (is e) {
//   string.replace()
// }

// inputstring.replace(a,- 'g')
// input
