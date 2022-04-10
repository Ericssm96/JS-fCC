function steamrollArray(arr) {
    const arr2=[];
    for (let i=0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            arr2.push(...steamrollArray(arr[i]))
        } else {
            arr2.push(arr[i])
        }
    }
    return arr2
}
  
console.log(steamrollArray([1, [2], [3, [[4]]]]));