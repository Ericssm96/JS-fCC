function sumFibs(num) {
    let n1=0;
    let n2=1;
    let n3=0;
    while(n3<=num){
      n3 = n1 + n2;
      n1=n2;
      n2=n3;
    }
    return n3;
}

console.log(sumFibs(1000));