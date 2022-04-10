const itens = [
    {nome: "Chaveiro",     preco: 10},
    {nome: "Isqueiro",     preco: 5},
    {nome: "Seda",         preco: 8},
    {nome: "Erva",         preco: 50},
    {nome: "Dixavador",    preco: 60},
    {nome: "Engradado",    preco: 24},
    {nome: "Uísque",       preco: 80},
    {nome: "Toddynho",    preco: 2}
]

const itensFiltrados = itens.filter(function(item){
    return item.preco <= 20;
})

console.log(itensFiltrados)