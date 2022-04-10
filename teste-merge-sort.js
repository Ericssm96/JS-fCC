let meuArray = [5, 1, 7, 9, 3, 18, 29, -3, 6]

function divideArray(array, inicio, fim){
    if(inicio < fim){
        let meio = Math.floor((inicio+fim) / 2);
        divideArray(array, inicio, meio);
        divideArray(array, meio+1, fim);
        organizar(array, inicio, meio, fim);
    }
}

function organizar(array, inicio, meio, fim){
    let i = inicio, j = meio + 1, k = 0, temp=[]; //vamos usar esses dados para copiar o array para evitar fazer alterações no array original

    while (i<=meio && j<=fim){ // com essa divisão feita, podemos começar as comparações lineares
        if (array[i] <= array[j]){
            temp[k] = array[i];
            k++;
            i++;
        } else {
            temp[k++] = array[j++] //fazer isso é a mesma coisa que fazer o pós incremento em linhas separadas, como fizemos no if.
        }

    }
}
