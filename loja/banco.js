// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCeFtO9CTO42xVqWCATFGvRRl31ppKsEM4",
    authDomain: "loja-6a166.firebaseapp.com",
    databaseURL: "https://loja-6a166-default-rtdb.firebaseio.com",
    projectId: "loja-6a166",
    storageBucket: "loja-6a166.appspot.com",
    messagingSenderId: "275445248327",
    appId: "1:275445248327:web:20412b645597e122161c62",
    measurementId: "G-N594L03VHZ"
};

// Inicialize o aplicativo Firebase
firebase.initializeApp(firebaseConfig);

// Referência para o banco de dados
const db = firebase.database();

function cadastrarProduto(roupa) {
    // Dados da roupa

    // Referência para o nó "roupas" no banco de dados
    const roupasRef = db.ref('roupasf');

    // Inserir os dados da roupa no banco de dados
    roupasRef.push(roupa)
        .then(() => {
            alert('Dados da roupa inseridos com sucesso!');
        })
        .catch((error) => {
            alert('Erro ao inserir os dados da roupa:', error);
        });
}

// Função para exibir a lista de roupas
function exibirListaRoupas(fnCriaCard) {
    const roupasRef = db.ref('roupasf');

    // Observa alterações na lista de roupas
    roupasRef.on('value', (snapshot) => {
        const roupas = snapshot.val();
        document.getElementById("produtos").textContent ="";
        for (let key in roupas) {
            const roupa = roupas[key];
            fnCriaCard(roupa);
        }



    });
}
