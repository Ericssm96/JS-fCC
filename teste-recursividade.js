const frase = "Void eyes"

function escreveContrario(texto){
    if(texto.length === 0){
        return"";
    }
    return escreveContrario(texto.substring(1)) + texto[0];
}

console.log(escreveContrario(frase))