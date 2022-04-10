function sequenciaFibonacci(num){
    if ((num === 0) || (num === 1)){
        return num;
    }
    return sequenciaFibonacci(num-1) + sequenciaFibonacci (num-2);
}

console.log(sequenciaFibonacci(21))