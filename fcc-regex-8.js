let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor)+\s[a-z\D]*\s*Roosevelt/;
let result = myRegex.test(myString); 