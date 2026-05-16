let carrinho = JSON.parse(localStorage.getItem('blackjack_cart')) || [];

function salvarCarrinho() {
  localStorage.setItem('blackjack_cart', JSON.stringify(carrinho));
  atualizarBadgeCarrinho();
  atualizarCarrinhoFlutuante();
}

function adicionarAoCarrinho(produto, quantidade = 1) {
  const itemExistente = carrinho.find(item => item.id === produto.id);
  if (itemExistente) {
    itemExistente.quantidade += quantidade;
  } else {
    carrinho.push({ ...produto, quantidade });
  }
  salvarCarrinho();
  mostrarToast(`${produto.nome} adicionado ao carrinho!`);
}

function adicionarAoCarrinhoPorId(id) {
  if (window.produtos) {
    const produto = window.produtos.find(p => p.id === id);
    if (produto) {
      adicionarAoCarrinho(produto, 1);
    }
  }
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
  mostrarToast('Combo adicionado ao carrinho!');
}

let itemParaRemoverId = null;

function removerDoCarrinho(id) {
  itemParaRemoverId = id;
  let modal = document.getElementById('remove-confirm-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'remove-confirm-modal';
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal-content">
        <h2 style="color: #ff4c4c; border-bottom: none;">Remover Item</h2>
        <p>Tem certeza que deseja remover este item do carrinho?</p>
        <div class="modal-buttons" style="flex-direction: row; gap: 10px;">
          <button id="btn-confirm-remove" class="btn-primary" style="background: #ff4c4c; flex: 1;">Remover</button>
          <button id="btn-cancel-remove" class="btn-secondary" style="flex: 1; border-color: #888; color: #ccc;">Cancelar</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('btn-confirm-remove').addEventListener('click', () => {
      if (itemParaRemoverId !== null) {
        carrinho = carrinho.filter(item => item.id !== itemParaRemoverId);
        salvarCarrinho();
        if (window.location.pathname.includes('carrinho.html')) {
          renderizarCarrinho();
        }
        mostrarToast('Item removido do carrinho!');
      }
      fecharModalRemocao();
    });

    document.getElementById('btn-cancel-remove').addEventListener('click', () => {
      fecharModalRemocao();
    });
  }
  
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function fecharModalRemocao() {
  const modal = document.getElementById('remove-confirm-modal');
  if (modal) {
    modal.classList.add('hidden');
  }
  document.body.style.overflow = 'auto';
  itemParaRemoverId = null;
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
            <input type="number" min="1" class="quantity-input" value="${item.quantidade}" onchange="atualizarQuantidadeDireta(${typeof item.id === 'string' ? `'${item.id}'` : item.id}, this.value)">
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
document.addEventListener('DOMContentLoaded', () => {
  atualizarBadgeCarrinho();
  atualizarCarrinhoFlutuante();
});

function atualizarQuantidadeDireta(id, novaQtd) {
  const item = carrinho.find(item => item.id === id);
  const qtd = parseInt(novaQtd, 10);
  if (item) {
    if (qtd >= 1) {
      item.quantidade = qtd;
    } else {
      item.quantidade = 1;
    }
    salvarCarrinho();
    if (window.location.pathname.includes('carrinho.html')) {
      renderizarCarrinho();
    }
  }
}

function mostrarToast(mensagem) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = mensagem;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('removing');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function atualizarCarrinhoFlutuante() {
  if (window.location.pathname.includes('carrinho.html') || window.location.pathname.includes('checkout.html') || window.location.pathname.includes('confirmacao.html')) {
    const floatCart = document.getElementById('floating-cart');
    if (floatCart) floatCart.style.display = 'none';
    return;
  }
  
  const qtdTotal = obterQuantidadeTotalItens();
  const subtotal = calcularSubtotal();
  let floatCart = document.getElementById('floating-cart');
  if (qtdTotal === 0) {
    if (floatCart) floatCart.style.display = 'none';
    return;
  }
  if (!floatCart) {
    floatCart = document.createElement('a');
    floatCart.id = 'floating-cart';
    floatCart.className = 'floating-cart';
    floatCart.href = 'carrinho.html';
    document.body.appendChild(floatCart);
  }
  floatCart.style.display = 'flex';
  floatCart.innerHTML = `
    <div class="icon">🛒</div>
    <div class="details">
      <span class="count">${qtdTotal} item${qtdTotal > 1 ? 's' : ''}</span>
      <span class="label">${formatarMoeda(subtotal)}</span>
    </div>
  `;
}

window.adicionarAoCarrinho = adicionarAoCarrinho;
window.adicionarAoCarrinhoPorId = adicionarAoCarrinhoPorId;
window.adicionarComboAoCarrinho = adicionarComboAoCarrinho;
window.removerDoCarrinho = removerDoCarrinho;
window.aumentarQuantidade = aumentarQuantidade;
window.diminuirQuantidade = diminuirQuantidade;
window.atualizarQuantidadeDireta = atualizarQuantidadeDireta;
window.calcularSubtotal = calcularSubtotal;
window.calcularDescontoAtacado = calcularDescontoAtacado;
window.calcularTotal = calcularTotal;
window.renderizarCarrinho = renderizarCarrinho;
window.formatarMoeda = formatarMoeda;
window.obterQuantidadeTotalItens = obterQuantidadeTotalItens;
