function convertHTML(str) {
    let myArr = str.split("");
    for(let i=0; i<myArr.length; i++){
        if(myArr[i]=="&"){
            myArr[i]="&amp;"
        }
        if(myArr[i]=="<"){
            myArr[i]="&lt;"
        }
        if(myArr[i]==">"){
            myArr[i]="&gt;"
        }
        if(myArr[i]=="'"){
            myArr[i]="&apos;"
        }
        if(myArr[i]=='"'){
            myArr[i]="&quot;"
        }
    }
    
    return myArr.join("");
}

console.log(convertHTML("Dolce & Gabbana"));