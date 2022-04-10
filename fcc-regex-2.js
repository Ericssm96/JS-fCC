let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = extractStr.match(/coding/i); // Change this line
let result = /coding/.test(extractStr); // Change this line

console.log(codingRegex[0], result)