// var listaCompras= [
//     "banana",
//     "arroz",
//     "feijão",
//     "farinha",
//     "ovo",
//     "maçã",
// ];

// console.table(listaCompras)
// var filtroCompra= listaCompras.filter((item)=>{
// return item=='ovo'
// })
// console.table(filtroCompra)

var listaCarros = [
    {
        chassi: 57765,
        nome: "onix",
        cor: "vermelho",
        ano: 2013,
        placa: "hjk4567",
        valor: 40.000,
    },
    {
        chassi: 5776895,
        nome: "celta",
        cor: "cinza",
        ano: 2009,
        placa: "hjk6767",
        valor: 25.000,
    },
    {
        chassi: 57765568,
        nome: "corsa",
        cor: "branco",
        ano: 2012,
        placa: "hbn4567",
        valor: 30.000,
    },
    {
        chassi: 57778965,
        nome: "onix",
        cor: "cinza",
        ano: 2022,
        placa: "hjv5867",
        valor: 40.000,
    }
]

// var filtroCarros = listaCarros.filter((carro) => carro.cor== "cinza")
// console.table(filtroCarros)
// console.log(filtroCarros)



// var buscaCarro = listaCarros.find((carro) => carro.cor== "cinza")
// console.table(buscaCarro)
// console.log(buscaCarro)

// listaCarros.sort((a, b) => a.ano - b.ano); // ordenar numeros

//ordenar textos
// listaCarros.sort((a, b) =>{
//     if (a.nome < b.nome) {
//         return -1;
//       }
//       if (a.nome > b.nome) {
//         return 1;
//       }
//       return 0;
// });
console.table(listaCarros)
console.log(listaCarros)

// var somaCarros = listaCarros.reduce(function (total, carro) {
//     return total + carro.valor;
// }, 10.000)

// console.log(somaCarros)

var nomesCarros = listaCarros.map(function(carro){
return carro.nome;
})

console.log(nomesCarros)