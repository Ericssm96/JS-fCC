function fearNotLetter(str) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const missingLetters = alphabet.slice(alphabet.indexOf(str[0]), alphabet.indexOf(str[0])+str.length+1).split("");
    
    
    return missingLetters.filter(letter => str.indexOf(letter)==-1)[0];
}
  
console.log(fearNotLetter("stvwx"));