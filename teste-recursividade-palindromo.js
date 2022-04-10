/* neste programa quero checar se uma string ée palíndromo usando a recursividade.
p.s.: palíndromos são palavras que ficam iguais quando postas de trás pra frente
 */
const palavra = "kayak";

function checaPalindromo(texto){ //primeiro, vamos precisar criar uma maneira de fazer a função não ter um loop infinito
    if(texto.length === 0 || texto.length === 1){ //se o parâmetro da recursividade chegar a tere um length de 0 ou 1, é porque é um palíndromo
        return true;
    }

    if(texto[0] === texto[texto.length-1]){ //comparo a primeira letra da string com a última, e se elas forem iguais, diminui o parâmetro para comparação na próxima chamada excluindo as duas letras que já sei que são equivalentes e testando apenas as outras
        return checaPalindromo(texto.substring(1, texto.length-1));
    }

    return false; //se o segundo if não for repetido até que o primeiro if retorne true, é porque em algum momento as letras das posições inversamente proporcionais eram diferentes, então a palavra não era um palíndromo. Nesse caso retornamos false.
}

console.log(checaPalindromo(palavra));