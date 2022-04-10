let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
console.log(quRegex.test(quit));
console.log(qRegex.test(noquit));