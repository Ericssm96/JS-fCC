let meuArray = [8, 2, 3, 1, 6, 4]

function multiply(arr, n) {
    if (n <= 0) {
        return 1;
    } else {
        return multiply(arr, n - 1) * arr[n - 1];
    }
}

console.log(multiply(meuArray, 3));