const teste = 57;

let resultado = "";
function convertePraBinario(numero){
    if(numero == 0){
        return resultado;
    }
    resultado = numero % 2 + resultado;
    return convertePraBinario(Math.floor(numero/2));
}

console.log(convertePraBinario(teste))