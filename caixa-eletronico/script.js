function preencheSaque(saque) {
    var form = document.getElementsByTagName("form")[0]
    form.valorSaque.value = saque;
}
var sacouHoje = 0;
function sacar() {
    var form = document.getElementsByTagName("form")[0]
    var saldo = form.saldo.value;
    var valorSaque = parseFloat(form.valorSaque.value);
    if (valorSaque <= 0) {
        alert("Digite um valor para saque!!");
        return;
    }
    if (valorSaque > 1200 || sacouHoje + valorSaque > 1200) {
        alert("Limite de saque diário R$ 1.200,00.");
        return;
    }
    if (parseFloat(saldo) >= valorSaque) {
        sacouHoje = sacouHoje + valorSaque
        var novoSaldo = saldo - valorSaque;
        form.saldo.value = novoSaldo;
    } else {
        alert("Saldo insuficiente!!")
    }
    sacarNotas(valorSaque)
}

function sacarNotas(valorSaque) {
    var resto = 0;
    if (valorSaque >= 200) {

        resto = valorSaque % 200;
        var quantidadeNotas = (valorSaque - resto) / 200;
        valorSaque = resto;
        alert("Você recebeu: " + quantidadeNotas + " nota(s) de duzentos reais")
    }
    if (valorSaque >= 100) {

        resto = valorSaque % 100;
        var quantidadeNotas = (valorSaque - resto) / 100;
        valorSaque = resto;
        alert("Você recebeu: " + quantidadeNotas + " nota(s) de cem reais")
    }
    if (valorSaque >= 50) {

        resto = valorSaque % 50;
        var quantidadeNotas = (valorSaque - resto) / 50;
        valorSaque = resto;
        alert("Você recebeu: " + quantidadeNotas + " nota(s) de cinquenta reais")
    }
    if (valorSaque >= 20) {

        resto = valorSaque % 20;
        var quantidadeNotas = (valorSaque - resto) / 20;
        valorSaque = resto;
        alert("Você recebeu: " + quantidadeNotas + " nota(s) de vinte reais")
    }
    if (valorSaque >= 10) {

        resto = valorSaque % 10;
        var quantidadeNotas = (valorSaque - resto) / 10;
        valorSaque = resto;
        alert("Você recebeu: " + quantidadeNotas + " nota(s) de dez reais")
    }
    if (valorSaque >= 5 && (valorSaque % 5 == 0 || valorSaque % 5 == 2)) {

        resto = valorSaque % 5;
        var quantidadeNotas = (valorSaque - resto) / 5;
        valorSaque = resto;
        alert("Você recebeu: " + quantidadeNotas + " nota(s) de cinco reais")
    }
    if (valorSaque >= 2) {

        resto = valorSaque % 2;
        var quantidadeNotas = (valorSaque - resto) / 2;
        valorSaque = resto;
        alert("Você recebeu: " + quantidadeNotas + " nota(s) de dois reais")
    }
}