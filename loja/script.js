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

{/* <div class="card">
<img src="https://img.ltwebstatic.com/images3_pi/2022/03/16/164742749494df6bb2c4ed50a408ff58ea462a3454_thumbnail_900x.webp"
    alt="">
<p>Vestido florado primavera e verão 100% algodão,bordado com laço na cor rosa</p>
<div class="box-price">
    <span><s>De R$ 160,00</s></span>
    <span class="promotional-price">Por R$ 130,00</span>
    <span>ou até 10x de 13</span>
</div>
</div> */}
window.onload = function () {
roupas.forEach(roupa => {
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
    console.log(card);
    document.getElementById("produtos").appendChild(card)
});
}

