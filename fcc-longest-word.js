function findLongestWordLength(str){
    let myArr = str.split(" ");
    let longestWord = "";
    myArr.forEach((word)=>{
        if(word.length>longestWord.length){
            longestWord = word;
        }
    })

    return longestWord.length;
}
  
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));