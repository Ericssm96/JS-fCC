function truncateString(str, num) {
    let newStr = "";
    for(let i=0; i<num && i<str.length; i++){
        newStr += str[i];
    }
    if (num<str.length){
        newStr += "...";
    }
    return newStr;
}
  
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));