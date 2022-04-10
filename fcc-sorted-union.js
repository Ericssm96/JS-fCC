function uniteUnique(...arr) {
    let newArr = arr[0];
    for(let i=1; i<arr.length; i++){
        arr[i].forEach(item=>{
            if(arr[0].indexOf(item)==-1){
                newArr.push(item);
            }
        })
    }
    return newArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));