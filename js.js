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
            produto.style.display = 'block';
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
