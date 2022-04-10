let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,}\D{2,})(?=\d{2,})/i
let result = pwRegex.test(sampleWord);