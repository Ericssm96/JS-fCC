const itens = [
    {nome: "Chaveiro",     preço: 10},
    {nome: "Isqueiro",     preço: 5},
    {nome: "Seda",         preço: 8},
    {nome: "Erva",         preço: 50},
    {nome: "Dixavador",    preço: 60},
    {nome: "Engradado",    preço: 24},
    {nome: "Uísque",       preço: 80},
    {nome: "Tooddynho",    preço: 2}
]

const nomeDosItens = itens.map(function(item){
    return item.preço-9;
})

console.log(nomeDosItens)