let hello = "   Hello, World!  ";
let wsRegex = /(\s+)(\w+)(\D{1})(\s{1})(\w+)(\D{1})(\s+)/i; // Change this line
let result = hello.replace(wsRegex, '$2$3$4$5$6'); // Change this line

console.log(result);