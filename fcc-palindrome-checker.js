function palindrome(str) {
    let reversedStr = [];
    let lowCasedStr = str.toLowerCase();
    const formattedStr = lowCasedStr.replace(/[\W_]/g, '');
    const letterArray = formattedStr.split('');

    for(let i=0; i<letterArray.length; i++){
        reversedStr.unshift(letterArray[i])
    }

    const isPalindrome = reversedStr.every((letter, index)=>letter===letterArray[index])

    return isPalindrome
  }

console.log(palindrome("eye_"));
