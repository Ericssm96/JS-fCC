let countdown = (n) => {
    if (n<1){
        return [];
    } else {
        let counterList = countdown(n-1);
        counterList.unshift(n);
        return counterList
    }
}

console.log(countdown(10));