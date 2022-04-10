let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z][0-9]+\d$/i; 
let result = userCheck.test(username);

console.log(result);