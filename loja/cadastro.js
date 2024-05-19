var form = document.forms[0];
form.onsubmit = function save(event){
event.preventDefault();
var produto={
    nome:form.nome.value,
    preco:form.preco.value,
    tamanho:form.tamanho.value,
    quantidade:form.quantidade.value,
    imagem:form.imagem.value
}
cadastrarProduto(produto)
form.reset();

}