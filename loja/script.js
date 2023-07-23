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
        nome: "Vestido florado primavera e verão 100% algodão,bordado com laço na cor rosa",
        cor: "rosa",
        tamanho: "G",
        tecido: "algodão",
        preço: 170,
        imagem: "https://img.ltwebstatic.com/images3_pi/2022/03/16/164742749494df6bb2c4ed50a408ff58ea462a3454_thumbnail_900x.webp"
    },
    {
        nome: "Vestido florado primavera e verão 100% algodão,bordado com laço na cor rosa",
        cor: "rosa",
        tamanho: "G",
        tecido: "algodão",
        preço: 130,
        imagem: "https://img.ltwebstatic.com/images3_pi/2022/03/16/164742749494df6bb2c4ed50a408ff58ea462a3454_thumbnail_900x.webp"
    },
    {
        nome: "Vestida florado primavera e verão 100% algodão,bordado com laço na cor rosa",
        cor: "rosa",
        tamanho: "G",
        tecido: "algodão",
        preço: 150,
        imagem: "https://img.ltwebstatic.com/images3_pi/2022/03/16/164742749494df6bb2c4ed50a408ff58ea462a3454_thumbnail_900x.webp"
    },
    {
        nome: "Vestido florado primavera e verão 100% algodão,bordado com laço na cor rosa",
        cor: "rosa",
        tamanho: "G",
        tecido: "algodão",
        preço: 170,
        imagem: "https://img.ltwebstatic.com/images3_pi/2022/03/16/164742749494df6bb2c4ed50a408ff58ea462a3454_thumbnail_900x.webp"
    },
];
roupas.unshift()
roupas.push( {
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

window.onload = function () {
    roupas.forEach(roupa => {
        criaCard(roupa);
    });

}