let randomRange = (minimo, maximo)=>{
    return Math.floor(Math.random() * (maximo - minimo + 1))+minimo;
}

console.log(randomRange(16, 19));