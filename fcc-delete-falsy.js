function bouncer(arr) {
    let newArr = [];
    arr.forEach((item)=>{
        if(!!item==true){
            newArr.push(item);
        }
    })
    return newArr;
}

let myArr = [7, "ate", "", false, 9];
console.log(bouncer(myArr));