function sumPrimes(num) {
    let sum = 0;
    for(let i=2; i<=num; i++){
    if(i%i==0 && i%1==0){
        sum+=i;
      }
    }
    return sum;
}

console.log(sumPrimes(10));