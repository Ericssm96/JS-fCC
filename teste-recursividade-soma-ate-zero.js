//Aqui terá um proograma que conta de um número até zero e soma todos os termos contados
/*const teste = 6;
let resultado = 0;

function somaFatorial(numero){
    if (numero === 0){
        return resultado;
    }
    resultado += numero;
    return somaFatorial(numero-1);
}

console.log(somaFatorial(teste));*/
const teste = 6;

function somaFatorial(numero){
    if (numero <= 1){
        return numero;
    }
    return numero + somaFatorial(numero-1)
}

console.log(somaFatorial(teste));