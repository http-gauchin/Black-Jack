let carrinho = JSON.parse(localStorage.getItem('blackjack_cart')) || [];

function salvarCarrinho() {
  localStorage.setItem('blackjack_cart', JSON.stringify(carrinho));
  atualizarBadgeCarrinho();
}

function adicionarAoCarrinho(produto, quantidade = 1) {
  const itemExistente = carrinho.find(item => item.id === produto.id);
  if (itemExistente) {
    itemExistente.quantidade += quantidade;
  } else {
    carrinho.push({ ...produto, quantidade });
  }
  salvarCarrinho();
  alert(`${produto.nome} adicionado ao carrinho!`);
}

function adicionarComboAoCarrinho(combo) {
  // Combo is considered as a single unit or an object of 3 products.
  // We'll store it as a special product.
  const comboProduto = {
    id: 'combo-' + Date.now(),
    nome: 'Combo Black Jack',
    categoria: 'Combos',
    imagem: 'fotos/Gelo Saborizado.png', // Default combo image
    preco: combo.precoTotal,
    quantidade: 1,
    descricao: `Bebida: ${combo.bebida.nome} | Gelo: ${combo.gelo.nome} | Energético: ${combo.energetico.nome}`,
    isCombo: true
  };
  carrinho.push(comboProduto);
  salvarCarrinho();
  alert('Combo adicionado ao carrinho!');
}

function removerDoCarrinho(id) {
  carrinho = carrinho.filter(item => item.id !== id);
  salvarCarrinho();
  renderizarCarrinho();
}

function aumentarQuantidade(id) {
  const item = carrinho.find(item => item.id === id);
  if (item) {
    item.quantidade++;
    salvarCarrinho();
    renderizarCarrinho();
  }
}

function diminuirQuantidade(id) {
  const item = carrinho.find(item => item.id === id);
  if (item && item.quantidade > 1) {
    item.quantidade--;
    salvarCarrinho();
    renderizarCarrinho();
  } else if (item && item.quantidade === 1) {
    removerDoCarrinho(id);
  }
}

function obterQuantidadeTotalItens() {
  return carrinho.reduce((total, item) => total + item.quantidade, 0);
}

function calcularSubtotal() {
  return carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
}

function calcularDescontoAtacado() {
  const qtdTotal = obterQuantidadeTotalItens();
  if (qtdTotal >= 30) {
    return calcularSubtotal() * 0.15;
  }
  return 0;
}

function calcularTotal() {
  return calcularSubtotal() - calcularDescontoAtacado();
}

function formatarMoeda(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function atualizarBadgeCarrinho() {
  const badge = document.querySelector('.cart-count');
  if (badge) {
    badge.textContent = obterQuantidadeTotalItens();
  }
}

function renderizarCarrinho() {
  const cartContainer = document.getElementById('cart-items');
  const cartSummary = document.getElementById('cart-summary-details');
  if (!cartContainer || !cartSummary) return;

  cartContainer.innerHTML = '';

  if (carrinho.length === 0) {
    cartContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
    cartSummary.innerHTML = '';
    return;
  }

  carrinho.forEach(item => {
    cartContainer.innerHTML += `
      <div class="cart-item">
        <div class="cart-item-img">
          <img src="${item.imagem}" alt="${item.nome}">
        </div>
        <div class="cart-item-info">
          <h4>${item.nome}</h4>
          <p class="cart-item-price">${formatarMoeda(item.preco)} un.</p>
          ${item.isCombo ? `<p style="font-size: 0.8rem; color: #aaa">${item.descricao}</p>` : ''}
        </div>
        <div class="cart-item-actions">
          <div class="quantity-selector" style="margin-bottom:0;">
            <button class="quantity-btn" onclick="diminuirQuantidade(${typeof item.id === 'string' ? `'${item.id}'` : item.id})">-</button>
            <input type="text" class="quantity-input" value="${item.quantidade}" readonly>
            <button class="quantity-btn" onclick="aumentarQuantidade(${typeof item.id === 'string' ? `'${item.id}'` : item.id})">+</button>
          </div>
          <button class="remove-btn" onclick="removerDoCarrinho(${typeof item.id === 'string' ? `'${item.id}'` : item.id})">Remover</button>
        </div>
      </div>
    `;
  });

  const subtotal = calcularSubtotal();
  const desconto = calcularDescontoAtacado();
  const total = calcularTotal();
  const qtdTotal = obterQuantidadeTotalItens();

  let discountHtml = '';
  if (qtdTotal >= 30) {
    discountHtml = `
      <div class="discount-alert active">
        Desconto de atacado aplicado: 15%
      </div>
      <div class="summary-row" style="color: #2ecc71;">
        <span>Desconto (15%)</span>
        <span>- ${formatarMoeda(desconto)}</span>
      </div>
    `;
  } else {
    discountHtml = `
      <div class="discount-alert">
        Desconto de atacado disponível a partir de 30 produtos. (Faltam ${30 - qtdTotal})
      </div>
    `;
  }

  cartSummary.innerHTML = `
    <div class="summary-row">
      <span>Subtotal (${qtdTotal} itens)</span>
      <span>${formatarMoeda(subtotal)}</span>
    </div>
    ${discountHtml}
    <div class="summary-row total">
      <span>Total</span>
      <span>${formatarMoeda(total)}</span>
    </div>
    <a href="checkout.html" class="btn-primary" style="width: 100%; margin-top: 20px;">Continuar para Checkout</a>
  `;
}

// Initial badge update
document.addEventListener('DOMContentLoaded', atualizarBadgeCarrinho);

window.adicionarAoCarrinho = adicionarAoCarrinho;
window.adicionarComboAoCarrinho = adicionarComboAoCarrinho;
window.removerDoCarrinho = removerDoCarrinho;
window.aumentarQuantidade = aumentarQuantidade;
window.diminuirQuantidade = diminuirQuantidade;
window.calcularSubtotal = calcularSubtotal;
window.calcularDescontoAtacado = calcularDescontoAtacado;
window.calcularTotal = calcularTotal;
window.renderizarCarrinho = renderizarCarrinho;
window.formatarMoeda = formatarMoeda;
window.obterQuantidadeTotalItens = obterQuantidadeTotalItens;
