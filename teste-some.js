const itens = [
    {nome: "Chaveiro",     preço: 10},
    {nome: "Isqueiro",     preço: 5},
    {nome: "Seda",         preço: 8},
    {nome: "Erva",         preço: 50},
    {nome: "Dixavador",    preço: 60},
    {nome: "Engradado",    preço: 24},
    {nome: "Uísque",       preço: 80},
    {nome: "Toddynho",    preço: 2}
]

const temItemBarato = itens.some(function(item){
    return item.preço <= 10;
})

console.log(temItemBarato);