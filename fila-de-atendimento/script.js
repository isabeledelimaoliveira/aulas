var senhaRetirada = 0
function retiraUmaSenha() {
    senhaRetirada = senhaRetirada + 1;
    document.getElementById('senha-retirada').textContent = senhaRetirada
}

var senhaChamada = 0
function chamaUmaSenha() {
   if(senhaChamada < senhaRetirada){
    senhaChamada = senhaChamada + 1;
    document.getElementById('senha-chamada').textContent = senhaChamada
   }else{
    alert("Não a pessoas para serem atendidas")
   }
}
