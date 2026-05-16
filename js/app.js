document.addEventListener('DOMContentLoaded', () => {
  // --- AGE VERIFICATION MODAL ---
  const modal = document.getElementById('age-modal');
  if (modal) {
    const isVerified = localStorage.getItem('blackjack_age_verified');
    if (!isVerified) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    const btnYes = document.getElementById('btn-age-yes');
    const btnNo = document.getElementById('btn-age-no');
    const msgBlock = document.getElementById('age-blocked-msg');

    if (btnYes) {
      btnYes.addEventListener('click', () => {
        localStorage.setItem('blackjack_age_verified', 'true');
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
      });
    }

    if (btnNo) {
      btnNo.addEventListener('click', () => {
        if (msgBlock) {
          msgBlock.classList.remove('hidden');
          msgBlock.textContent = "Acesso negado. Este site é exclusivo para maiores de 18 anos.";
          document.querySelector('.modal-buttons').classList.add('hidden');
        }
      });
    }
  }

  // --- MOBILE MENU ---
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // --- RENDER PRODUCTS IN INDEX.HTML (Highlights) ---
  const gridDestaques = document.getElementById('grid-destaques');
  if (gridDestaques && window.produtos) {
    // Show 4 products as highlight
    const destaques = window.produtos.slice(0, 4);
    gridDestaques.innerHTML = destaques.map(produto => generateProductCard(produto)).join('');
  }

  // --- RENDER PRODUCTS IN PRODUTOS.HTML ---
  const gridProdutos = document.getElementById('grid-produtos');
  const categoryFilters = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('search-input');
  
  if (gridProdutos && window.produtos) {
    let currentCategory = 'Todos';
    let currentSearch = '';

    const renderFilteredProducts = () => {
      const filtered = window.produtos.filter(p => {
        const matchCat = currentCategory === 'Todos' || p.categoria === currentCategory;
        const matchSearch = p.nome.toLowerCase().includes(currentSearch.toLowerCase()) || 
                            p.descricao.toLowerCase().includes(currentSearch.toLowerCase());
        return matchCat && matchSearch;
      });
      gridProdutos.innerHTML = filtered.map(produto => generateProductCard(produto)).join('');
      if(filtered.length === 0) gridProdutos.innerHTML = '<p>Nenhum produto encontrado.</p>';
    };

    renderFilteredProducts();

    categoryFilters.forEach(btn => {
      btn.addEventListener('click', (e) => {
        categoryFilters.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentCategory = e.target.dataset.category;
        renderFilteredProducts();
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value;
        renderFilteredProducts();
      });
    }
  }

  // --- SINGLE PRODUCT PAGE LOGIC ---
  const singleProductContainer = document.getElementById('single-product-container');
  if (singleProductContainer && window.produtos) {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const produto = window.produtos.find(p => p.id === productId);

    if (produto) {
      singleProductContainer.innerHTML = `
        <div class="product-gallery">
          <img src="${produto.imagem}" alt="${produto.nome}">
        </div>
        <div class="product-meta">
          <div class="product-category">${produto.categoria}</div>
          <h1>${produto.nome}</h1>
          <div class="price">${window.formatarMoeda(produto.preco)}</div>
          <div class="description">${produto.descricao}</div>
          
          <div class="ingredients-box">
            <h3>Ingredientes / Composição</h3>
            <p>${produto.ingredientes}</p>
          </div>

          <div class="quantity-selector">
            <button class="quantity-btn" id="btn-dec">-</button>
            <input type="number" min="1" id="prod-quantity" class="quantity-input" value="1">
            <button class="quantity-btn" id="btn-inc">+</button>
          </div>

          <button class="btn-primary" style="width: 100%;" id="btn-add-cart">Adicionar ao Carrinho</button>
        </div>
      `;

      let qty = 1;
      const inputQty = document.getElementById('prod-quantity');
      
      inputQty.addEventListener('change', (e) => {
        const val = parseInt(e.target.value, 10);
        if (val >= 1) {
          qty = val;
        } else {
          qty = 1;
          inputQty.value = 1;
        }
      });
      
      document.getElementById('btn-inc').addEventListener('click', () => {
        qty++;
        inputQty.value = qty;
      });
      document.getElementById('btn-dec').addEventListener('click', () => {
        if(qty > 1) { qty--; inputQty.value = qty; }
      });
      document.getElementById('btn-add-cart').addEventListener('click', () => {
        window.adicionarAoCarrinho(produto, qty);
      });
    } else {
      singleProductContainer.innerHTML = '<p>Produto não encontrado.</p>';
    }
  }

  // --- COMBOS PAGE LOGIC ---
  const formCombo = document.getElementById('form-combo');
  if (formCombo && window.produtos) {
    // Populate the radios
    const radioContainer = document.getElementById('bebidas-principais');
    const principais = window.produtos.filter(p => ['Vodka', 'Gin', 'Whisky'].includes(p.categoria));
    
    radioContainer.innerHTML = principais.map(p => `
      <label class="radio-option">
        <input type="radio" name="bebida_principal" value="${p.id}" required>
        <div class="radio-custom"></div>
        <img src="${p.imagem}" class="radio-img" alt="${p.nome}">
        <div>
          <strong>${p.nome}</strong><br>
          <span style="font-size: 0.8rem; color: #aaa">${p.categoria}</span>
        </div>
      </label>
    `).join('');

    formCombo.addEventListener('submit', (e) => {
      e.preventDefault();
      const selectedId = document.querySelector('input[name="bebida_principal"]:checked').value;
      const bebida = window.produtos.find(p => p.id == selectedId);
      
      // Default items for combo based on blueprint
      const gelo = window.produtos.find(p => p.categoria === 'Gelo saborizado') || { nome: 'Gelo Saborizado', preco: 8 };
      const energetico = window.produtos.find(p => p.categoria === 'Energético') || { nome: 'Energético', preco: 15 };
      
      const precoTotal = bebida.preco + gelo.preco + energetico.preco;

      const combo = {
        bebida,
        gelo,
        energetico,
        precoTotal
      };

      window.adicionarComboAoCarrinho(combo);
    });
  }

  // --- CHECKOUT FORM LOGIC ---
  const checkoutForm = document.getElementById('checkout-form');
  const cpfCnpjInput = document.getElementById('cpf-cnpj');
  
  if (cpfCnpjInput) {
    cpfCnpjInput.addEventListener('input', function(e) {
      let v = e.target.value.replace(/\D/g, "");
      if (v.length <= 11) { // CPF
        v = v.replace(/(\d{3})(\d)/, "$1.$2");
        v = v.replace(/(\d{3})(\d)/, "$1.$2");
        v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
      } else { // CNPJ
        v = v.replace(/^(\d{2})(\d)/, "$1.$2");
        v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
        v = v.replace(/\.(\d{3})(\d)/, ".$1/$2");
        v = v.replace(/(\d{4})(\d)/, "$1-$2");
      }
      e.target.value = v.substring(0, 18);
    });
  }

  if (checkoutForm) {
    const inputRua = document.getElementById('endereco-rua');
    const inputBairro = document.getElementById('endereco-bairro');
    const inputCidade = document.getElementById('endereco-cidade');
    const deliveryInfo = document.getElementById('delivery-info');
    const deliveryTimeSpan = document.getElementById('delivery-time');
    
    let debounceTimer;

    const calcularEntrega = async () => {
      const rua = inputRua?.value.trim();
      const bairro = inputBairro?.value.trim();
      const cidade = inputCidade?.value.trim() || 'Pimenta Bueno';
      
      if (rua && bairro && rua.length > 3 && bairro.length > 3) {
        deliveryInfo.style.display = 'block';
        deliveryTimeSpan.textContent = 'Calculando...';
        
        try {
          // Store Coordinates: R. Fagundes Varela, 320 - Pioneiros, Pimenta Bueno - RO
          const storeLat = -11.6740;
          const storeLon = -61.1900;
          
          const query = encodeURIComponent(`${rua}, ${bairro}, ${cidade}, RO, Brazil`);
          const geoRes = await fetch(`https://nominatim.openstreetmap.org/search?q=${query}&format=json&limit=1`, {
            headers: { 'Accept-Language': 'pt-BR' }
          });
          const geoData = await geoRes.json();
          
          if (geoData && geoData.length > 0) {
            const customerLat = parseFloat(geoData[0].lat);
            const customerLon = parseFloat(geoData[0].lon);
            
            const routeRes = await fetch(`https://router.project-osrm.org/route/v1/driving/${storeLon},${storeLat};${customerLon},${customerLat}?overview=false`);
            const routeData = await routeRes.json();
            
            if (routeData.routes && routeData.routes.length > 0) {
              const durationSeconds = routeData.routes[0].duration;
              const durationMinutes = Math.ceil(durationSeconds / 60) + 15; // 15 mins for prep
              deliveryTimeSpan.textContent = `Aproximadamente ${durationMinutes} a ${durationMinutes + 10} minutos`;
              return;
            }
          }
        } catch (e) {
          console.error('Erro ao calcular rota real:', e);
        }
        
        // Fallback determinístico caso a API falhe ou endereço não seja encontrado
        const hash = (rua + bairro).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        const baseTime = 15 + (hash % 25); // Entre 15 e 40 minutos base
        deliveryTimeSpan.textContent = `Aproximadamente ${baseTime} a ${baseTime + 10} minutos`;
      } else {
        deliveryInfo.style.display = 'none';
      }
    };

    [inputRua, inputBairro, inputCidade].forEach(input => {
      if (input) {
        input.addEventListener('input', () => {
          clearTimeout(debounceTimer);
          debounceTimer = setTimeout(calcularEntrega, 1000);
        });
      }
    });

    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const agree18 = document.getElementById('agree-18').checked;
      if (!agree18) {
        alert("Você precisa confirmar que tem 18 anos ou mais.");
        return;
      }
      
      if(window.obterQuantidadeTotalItens() === 0) {
        alert("Seu carrinho está vazio!");
        return;
      }

      // Simulate order success
      localStorage.removeItem('blackjack_cart'); // clear cart
      window.location.href = 'confirmacao.html';
    });
  }

  // --- RENDER CART ON CARRINHO.HTML ---
  if (document.getElementById('cart-items') && window.renderizarCarrinho) {
    window.renderizarCarrinho();
  }
});

function generateProductCard(produto) {
  return `
    <div class="product-card">
      <div class="product-img-wrapper">
        <img src="${produto.imagem}" alt="${produto.nome}">
      </div>
      <div class="product-info">
        <div class="product-category">${produto.categoria}</div>
        <h3 class="product-name">${produto.nome}</h3>
        <div class="product-price">${window.formatarMoeda(produto.preco)}</div>
        <p class="product-desc">${produto.descricao}</p>
        <div class="product-actions">
          <a href="produto.html?id=${produto.id}" class="btn-secondary" style="flex:1">Ver Detalhes</a>
          <button class="btn-primary" onclick="window.adicionarAoCarrinhoPorId(${produto.id})">Adicionar</button>
        </div>
      </div>
    </div>
  `;
}
