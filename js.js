function adicionarAoCarrinho(produto) {
    window.location.href = 'pagamento.html';
}

function buscarProduto() {
    const pesquisa = document.getElementById('pesquisa').value.toLowerCase();
    const produtos = document.querySelectorAll('.produto');
    let encontrado = false;

    produtos.forEach(produto => {
        const nomeProduto = produto.getAttribute('data-nome').toLowerCase();
        if (nomeProduto.includes(pesquisa)) {
            produto.style.display = 'flex'; // Change to flex to show the item as a flex item
            encontrado = true;
        } else {
            produto.style.display = 'none';
        }
    });

    const resultadoBusca = document.getElementById('resultadoBusca');
    if (!encontrado) {
        resultadoBusca.innerHTML = '<p>Produto não encontrado</p>';
    } else {
        resultadoBusca.innerHTML = '';
    }
}

// Exibir todos os produtos inicialmente
window.addEventListener('DOMContentLoaded', (event) => {
    const produtos = document.querySelectorAll('.produto');
    produtos.forEach(produto => {
        produto.style.display = 'flex'; // Change to flex to ensure they display correctly
    });
});
