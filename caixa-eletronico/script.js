function preencheSaque(saque) {
    var form = document.getElementsByTagName("form")[0]
    form.valorSaque.value = saque;
}
var sacouHoje = 0;
function sacar() {
    var form = document.getElementsByTagName("form")[0]
    var saldo = form.saldo.value;
    var valorSaque = form.valorSaque.value;
    if (valorSaque > 1200 || sacouHoje + parseFloat(valorSaque) > 1200) {
        alert("Limite de saque diário R$ 1.200,00.");
        return;
    }
    if (parseFloat(saldo) >= parseFloat(valorSaque)) {
        sacouHoje = sacouHoje + parseFloat(valorSaque)
        var novoSaldo = saldo - valorSaque;
        form.saldo.value = novoSaldo;
    } else {
        alert("Saldo insuficiente!!")
    }
}