/* Vamos tentar achar o índice de um número específico dentro de um array ORDENADO */
meuArray = [-2, 1, 3, 4, 6, 9, 10, 12, 15, 16]

function buscaNoArray(array, esquerda, direita, x){//o 'x' representa o número que quero buscar
    if(esquerda > direita){
        return -1;
    }

    let meio = Math.floor((esquerda + direita) / 2);

    if(x === array[meio]){
        return meio;
    }

    if(x < array[meio]) {
        return buscaNoArray(array, esquerda, meio - 1, x);
    }

    return buscaNoArray(array, meio+1, direita, x);
}

console.log(buscaNoArray(meuArray, 0, meuArray.length-1, 10))