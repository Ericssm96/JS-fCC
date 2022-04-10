function chunkArrayInGroups(arr, size) {
    let newArr = [], j = size;
    for(let i = 0; i < arr.length; size += j){
        newArr.push(arr.slice(i, size));
        i += j;
    }
    return newArr;
}
  
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));