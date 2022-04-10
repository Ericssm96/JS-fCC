function titleCase(str) {
    let myArr = str.split(" ");
    let newStr = "";
    for(let i=0; i<myArr.length; i++){
        for (let j=0; j<myArr[i].length; j++){
            if(j==0){
                newStr += myArr[i][j].toUpperCase();
            } else {
                newStr += myArr[i][j].toLowerCase();
            }
        }
        if (i<myArr.length-1){
            newStr += " ";
        }
    }
    return newStr;
}

console.log(titleCase("I'm a little tea pot"));