// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDdjCGjjKwN0c0LMGXcB_N6uwfzymQPUVA",
    authDomain: "lojaisa-bed62.firebaseapp.com",
    projectId: "lojaisa-bed62",
    storageBucket: "lojaisa-bed62.appspot.com",
    messagingSenderId: "614534537941",
    appId: "1:614534537941:web:f1ea4528ba1f4fbc34385c",
    measurementId: "G-B8F1099KPC"
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
