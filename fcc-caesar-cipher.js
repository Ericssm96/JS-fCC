function rot13(str) {
    str = str.toUpperCase();
    const strArray = str.split('');
    const otherCharsRegex = /^[ .?!-]/g
    let decodedStr = strArray.map(char=>{
        let charCode = char.charCodeAt(0);
    if(otherCharsRegex.test(char)){
            return char
        } else if (charCode > 77) {
            return String.fromCharCode(charCode-13)
        } else {
            return String.fromCharCode(charCode+13)
        }
    });
    
    
    return decodedStr.join('')
}

console.log(rot13("SERR PBQR PNZC"));