var roupas = [
    {
        nome: "Vestida florado primavera e verão 100% algodão,bordado com laço na cor rosa",
        cor: "rosa",
        tamanho: "G",
        tecido: "algodão",
        preço: 150,
        imagem: "https://img.ltwebstatic.com/images3_pi/2022/03/16/164742749494df6bb2c4ed50a408ff58ea462a3454_thumbnail_900x.webp"
    },
    {
        nome: "Vestido preto",
        cor: "preto",
        tamanho: "G",
        tecido: "veludo",
        preço: 170,
        imagem: "https://lojamilana.com/cdn/shop/files/vestido-joanie-preto-p-142_700x.webp?v=1689020383"
    },
    {
        nome: "vestido vermelho",
        cor: "vermelho",
        tamanho: "G",
        tecido: "seda",
        preço: 130,
        imagem: "https://lojamilana.com/cdn/shop/files/vestido-jessica-283_700x.webp?v=1687550361"
    },
    {
        nome: "vestido creme",
        cor: "creme",
        tamanho: "m",
        tecido: "croche",
        preço: 150,
        imagem: "https://lojamilana.com/cdn/shop/files/vestido-diana-297_700x.jpg?v=1687530574"
    },
    {
        nome: "vestido jeans",
        cor: "jeans",
        tamanho: "G",
        tecido: "jeans",
        preço: 170,
        imagem: "https://lojamilana.com/cdn/shop/files/vestido-abbigail-florido-p-319_700x.webp?v=1695700335"
    },
];
var filtroProdutos = [];
roupas.unshift()
roupas.push({
    nome: "novo item Vestida florado primavera e verão 100% algodão,bordado com laço na cor rosa",
    cor: "rosa",
    tamanho: "G",
    tecido: "algodão",
    preço: 150,
    imagem: "https://img.ltwebstatic.com/images3_pi/2022/03/16/164742749494df6bb2c4ed50a408ff58ea462a3454_thumbnail_900x.webp"
})
roupas.pop()

function criaCard(roupa) {
    var card = document.createElement("div");
    card.classList = "card";

    var img = document.createElement('img');
    img.src = roupa.imagem;
    card.appendChild(img)

    var p = document.createElement("p");
    p.textContent = roupa.nome;
    card.appendChild(p);

    var boxPrice = document.createElement("div");
    boxPrice.classList = "box-price";

    var price = document.createElement("span");
    price.classList = "promotional-price";
    price.textContent = "Por R$ " + roupa.preço;
    boxPrice.appendChild(price);
    card.appendChild(boxPrice);
    document.getElementById("produtos").appendChild(card)
}

function pesquisar(event) {
    event.preventDefault();
    console.log(event.target.pesquisa.value)
    var pesquisa = event.target.pesquisa.value;

    filtroProdutos = roupas.filter((roupa) => roupa.nome.toLocaleLowerCase().indexOf(pesquisa.toLocaleLowerCase())!=-1)
    document.getElementById("produtos").textContent ="";
    filtroProdutos.forEach(roupa => {
        criaCard(roupa);
    });

    if (filtroProdutos.length ==0) {
        document.getElementById("produtos").textContent ="Produto não encontrado!";
    }
}

window.onload = function () {
    document.getElementById("form-pesquisa").addEventListener("submit", pesquisar);
    roupas.forEach(roupa => {
        criaCard(roupa);
    });
}