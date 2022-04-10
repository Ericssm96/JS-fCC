function multiplyAll(arr) {
    let product = 1;
    for(let i=0; i<arr.length; i++){
        for(let c=0; c<arr[i].length; c++){
            product *= arr[i][c];
        }
    }
    return product;
}

console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));