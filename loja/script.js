var filtroProdutos = [];


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
    exibirListaRoupas(criaCard);
  
}