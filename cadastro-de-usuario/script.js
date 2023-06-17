var form = document.forms[0];
form.onsubmit = function save(event){
event.preventDefault();
    var usuario = {
        nome: form.nome.value,
        dataNascimento: form.dataNascimento.value,
        sexo: form.sexo.value,
        estadoCivil: form.estadoCivil.value,
        estado: form.estado.value,
        rua: form.rua.value,
        numero: form.numero.value,
        cep: form.cep.value
    }
fetch('http://localhost:3000/usuarios', {
  method: "POST",
  body: JSON.stringify(usuario),
  headers: {"Content-type": "application/json; charset=UTF-8"}
})
alert( "Cadastro realizado com sucesso!")
}