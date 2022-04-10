function rangeOfNumbers(startNum = 1, endNum = 1) {
    if(startNum === endNum){
        return [startNum];
    }
    let contagem = rangeOfNumbers(startNum, endNum-1);
    contagem.push(endNum);
    return contagem;
}

console.log(rangeOfNumbers());