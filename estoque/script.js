var produtosEstoque = [
    {
        nome: "shampoo seda",
        preço: 20,
        quantidade: 150,
        imagem: "https://img.ltwebstatic.com/images3_pi/2022/03/16/164742749494df6bb2c4ed50a408ff58ea462a3454_thumbnail_900x.webp"

    },
    {
        nome: "creme de hidratação",
        preço: 12,
        quantidade: 30,
        imagem: "https://img.ltwebstatic.com/images3_pi/2022/03/16/164742749494df6bb2c4ed50a408ff58ea462a3454_thumbnail_900x.webp"

    },

    {
        nome: "hidratante",
        preço:35,
        quantidade: 200,
        imagem: "https://img.ltwebstatic.com/images3_pi/2022/03/16/164742749494df6bb2c4ed50a408ff58ea462a3454_thumbnail_900x.webp"

    },
    {
        nome: "protetor solar",
        preço: 50,
        quantidade: 300,
        imagem: "https://img.ltwebstatic.com/images3_pi/2022/03/16/164742749494df6bb2c4ed50a408ff58ea462a3454_thumbnail_900x.webp"

    },

    {
        nome: "sabonete facial",
        preço:32,
        quantidade:500,
        imagem: "https://img.ltwebstatic.com/images3_pi/2022/03/16/164742749494df6bb2c4ed50a408ff58ea462a3454_thumbnail_900x.webp"

    },
    {
        nome: "algodão",
        preço:25,
        quantidade:340,
        imagem: "https://img.ltwebstatic.com/images3_pi/2022/03/16/164742749494df6bb2c4ed50a408ff58ea462a3454_thumbnail_900x.webp"

    },
    {
        nome: "esfoliante corporal",
        preço:65,
        quantidade:400,
        imagem: "https://img.ltwebstatic.com/images3_pi/2022/03/16/164742749494df6bb2c4ed50a408ff58ea462a3454_thumbnail_900x.webp"

    }

];
function criaCard(estoque) {
    var card = document.createElement("div");
    card.classList = "card";

    var img = document.createElement('img');
    img.src = estoque.imagem;
    card.appendChild(img)

    var p = document.createElement("p");
    p.textContent = estoque.nome;
    card.appendChild(p);

    var boxPrice = document.createElement("div");
    boxPrice.classList = "box-price";

    var price = document.createElement("span");
    price.classList = "promotional-price";
    price.textContent = "Por R$ " + estoque.preço;
    boxPrice.appendChild(price);
    card.appendChild(boxPrice);
    document.getElementById("produtos").appendChild(card)
}

window.onload = function () {
    produtosEstoque.forEach(estoque => {
        criaCard(estoque);
    });

}