
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
    price.textContent = "Por R$ " + roupa.preco;
    boxPrice.appendChild(price);
    card.appendChild(boxPrice);

    var quantidade = document.createElement("p");
    quantidade.textContent = "quantidade: " + roupa.quantidade;
    card.appendChild(quantidade);

    document.getElementById("produtos").appendChild(card)
}

function pesquisar(event) {
    event.preventDefault();
    console.log(event.target.pesquisa.value)
    var pesquisa = event.target.pesquisa.value;

    document.getElementById("produtos").textContent = "";
    exibirListaRoupas(criaCard, pesquisa);
}

window.onload = function () {
    document.getElementById("form-pesquisa").addEventListener("submit", pesquisar);
    exibirListaRoupas(criaCard, "");

}