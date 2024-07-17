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
            produto.style.display = 'flex'; 
            encontrado = true;
        }
    });
    
let carrinho = [];


function adicionarAoCarrinho(nomeProduto) {
   
    const produtoExistente = carrinho.find(produto => produto.nome === nomeProduto);
    if (produtoExistente) {
       
        produtoExistente.quantidade++;
    } else {
     
        carrinho.push({ nome: nomeProduto, quantidade: 1 });
    }
  
    atualizarCarrinho();
}


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


function finalizarCompra() {
    alert('Compra finalizada com sucesso!');
   
    carrinho = [];
   
    atualizarCarrinho();
}


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
        }
    

