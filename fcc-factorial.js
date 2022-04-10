function factorialize(num) {
    let fat = 1;
    for(let i=num; i>0; i--){
        fat *= i;
    }
    return fat;
}
  
console.log(factorialize(5));