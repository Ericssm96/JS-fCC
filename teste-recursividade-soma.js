let meuArray = [8, 2, 3, 1, 6, 4]

function sum(arr, n) {
    // Only change code below this line
    if (n === 1){
        return arr[0];
    } else if(n === 0){
        return 0;
    }
    return sum(arr, n-1) + arr[n-1]
    // Only change code above this line
}

console.log(sum(meuArray, 4))