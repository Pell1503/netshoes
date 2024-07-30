// Variável global para o carrinho
let carrinho = [];

// Função para adicionar ao carrinho e redirecionar para a página de pagamento
function adicionarAoCarrinho(nomeProduto) {
    // Verificar se o produto já está no carrinho
    const produtoExistente = carrinho.find(produto => produto.nome === nomeProduto);
    
    if (produtoExistente) {
        // Se o produto já estiver no carrinho, aumentar a quantidade
        produtoExistente.quantidade++;
    } else {
        // Se o produto não estiver no carrinho, adicionar ao carrinho
        carrinho.push({ nome: nomeProduto, quantidade: 1 });
    }
    
    // Atualizar o carrinho na interface do usuário
    atualizarCarrinho();

    // Redirecionar para a página de pagamento
    window.location.href = 'pagamento.html';
}

// Função para atualizar a exibição do carrinho
function atualizarCarrinho() {
    const listaCarrinho = document.getElementById('listaCarrinho');
    listaCarrinho.innerHTML = '';
    
    carrinho.forEach(produto => {
        const item = document.createElement('li');
        item.textContent = `${produto.nome} - Quantidade: ${produto.quantidade}`;
        listaCarrinho.appendChild(item);
    });
    
    const finalizarCompraBtn = document.getElementById('finalizarCompra');
    finalizarCompraBtn.style.display = carrinho.length > 0 ? 'block' : 'none';
}

// Função para buscar produtos
function buscarProduto() {
    const pesquisa = document.getElementById('pesquisa').value.toLowerCase();
    const produtos = document.querySelectorAll('.produto');
    
    produtos.forEach(produto => {
        const nomeProduto = produto.querySelector('h3').textContent.toLowerCase();
        if (nomeProduto.includes(pesquisa)) {
            produto.style.display = 'block';
        } else {
            produto.style.display = 'none';
        }
    });
}

// Função para finalizar a compra
function finalizarCompra() {
    alert('Compra finalizada com sucesso!');
    carrinho = [];
    atualizarCarrinho();
}
