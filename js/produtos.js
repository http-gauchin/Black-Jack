const produtos = [
  {
    id: 1,
    nome: "Absolut Vodka",
    categoria: "Vodka",
    imagem: "fotos/Absolute Vodka.png",
    preco: 99.90,
    descricao: "Vodka sueca clássica, pura e de sabor suave.",
    ingredientes: "Trigo de inverno e água de poço profundo."
  },
  {
    id: 2,
    nome: "Dewar's",
    categoria: "Whisky",
    imagem: "fotos/Dewar's.png",
    preco: 129.90,
    descricao: "Blended Scotch Whisky de sabor marcante.",
    ingredientes: "Destilado alcoólico simples de malte envelhecido, destilado alcoólico simples de cereais não malteados, água e corante caramelo."
  },
  {
    id: 3,
    nome: "Energético Baly",
    categoria: "Energético",
    imagem: "fotos/Energetico Baly.png",
    preco: 12.50,
    descricao: "Energético nacional, ótimo para misturar.",
    ingredientes: "Água gaseificada, açúcar, taurina, cafeína, inositol, extrato de guaraná, vitaminas (B3, B5, B6, B12), acidulante ácido cítrico e reguladores de acidez."
  },
  {
    id: 4,
    nome: "Energético Furya",
    categoria: "Energético",
    imagem: "fotos/Energetico Furia.png",
    preco: 9.90,
    descricao: "Energético intenso para suas festas.",
    ingredientes: "Água gaseificada, açúcar, taurina, cafeína e vitaminas do complexo B."
  },
  {
    id: 5,
    nome: "Monster Energy",
    categoria: "Energético",
    imagem: "fotos/Energetico Monster.png",
    preco: 15.90,
    descricao: "Sabor potente para garantir a energia da noite.",
    ingredientes: "Água gaseificada, açúcar, xarope de glicose, taurina, cafeína, vitaminas (B3, B6, B2, B12), extrato de raiz de panax ginseng e L-carnitina."
  },
  {
    id: 6,
    nome: "Red Bull Energy Drink",
    categoria: "Energético",
    imagem: "fotos/Energetico RedBull.png",
    preco: 16.90,
    descricao: "O energético clássico mundialmente conhecido.",
    ingredientes: "Água gaseificada, sacarose, glicose, taurina, cafeína, vitaminas (B3, B5, B6, B12) e acidulante ácido cítrico."
  },
  {
    id: 7,
    nome: "TNT Energy Drink",
    categoria: "Energético",
    imagem: "fotos/Energetico TNT.png",
    preco: 11.50,
    descricao: "Energia em lata para suas melhores misturas.",
    ingredientes: "Água gaseificada, açúcar, taurina, cafeína, inositol, vitaminas (B3, B5, B6, B12) e acidulante ácido cítrico."
  },
  {
    id: 8,
    nome: "Fazenda Velha",
    categoria: "Bebidas",
    imagem: "fotos/Fazenda Velha.png",
    preco: 45.00,
    descricao: "Cachaça tradicional de sabor inconfundível.",
    ingredientes: "Mosto fermentado do caldo de cana-de-açúcar."
  },
  {
    id: 9,
    nome: "Gelo Saborizado",
    categoria: "Gelo saborizado",
    imagem: "fotos/Gelo Saborizado.png",
    preco: 8.00,
    descricao: "Gelo com sabores especiais para enriquecer seu drink.",
    ingredientes: "Água potável e aromatizante idêntico ao natural."
  },
  {
    id: 10,
    nome: "Gelo sem sabor",
    categoria: "Gelo saborizado",
    imagem: "fotos/Gelo sem sabor .png",
    preco: 6.00,
    descricao: "Gelo cristalino comum para qualquer bebida.",
    ingredientes: "Água potável filtrada."
  },
  {
    id: 11,
    nome: "Tanqueray Gin",
    categoria: "Gin",
    imagem: "fotos/Tangueray.png",
    preco: 145.00,
    descricao: "Gin premium com botânicos selecionados.",
    ingredientes: "Álcool etílico potável de origem agrícola, água e extratos de bagas de zimbro, sementes de coentro, raiz de angélica e alcaçuz."
  },
  {
    id: 12,
    nome: "Tequila",
    categoria: "Bebidas",
    imagem: "fotos/Tequila.png",
    preco: 110.00,
    descricao: "Tequila autêntica para animar a festa.",
    ingredientes: "Destilado alcoólico simples de agave azul e água."
  },
  {
    id: 13,
    nome: "Vodka Bombay",
    categoria: "Vodka",
    imagem: "fotos/Vodka Bombay.png",
    preco: 135.00,
    descricao: "Bebida destilada clássica com sabor refinado.",
    ingredientes: "Álcool etílico potável, água e extratos botânicos (zimbro, sementes de coentro, alcaçuz, amêndoas, casca de limão, raiz de lírio, raiz de angélica, cássia, cubeba e grãos do paraíso)."
  },
  {
    id: 14,
    nome: "Weber Haus",
    categoria: "Bebidas",
    imagem: "fotos/Weber Haus.png",
    preco: 85.00,
    descricao: "Bebida artesanal de alta qualidade.",
    ingredientes: "Destilado de mosto fermentado do caldo de cana-de-açúcar."
  },
  {
    id: 15,
    nome: "Jack Daniel's",
    categoria: "Whisky",
    imagem: "fotos/Whisky Jack Daniels.png",
    preco: 169.90,
    descricao: "O icônico Tennessee Whiskey.",
    ingredientes: "Destilado alcoólico de milho, centeio e malte de cevada, e água."
  },
  {
    id: 16,
    nome: "Caixa Antarctica SubZero - 12 un.",
    categoria: "Cerveja",
    imagem: "fotos/Caixa Antarctica SubZero - 12 un..png",
    preco: 45.00,
    descricao: "Cerveja refrescante duplamente filtrada a frio.",
    ingredientes: "Água, malte, cereais não maltados e lúpulo."
  },
  {
    id: 17,
    nome: "Caixa Skol - 15 un.",
    categoria: "Cerveja",
    imagem: "fotos/Caixa Skol - 15 un..png",
    preco: 55.00,
    descricao: "A cerveja que desce redondo para a sua festa.",
    ingredientes: "Água, malte, cereais não maltados e lúpulo."
  },
  {
    id: 18,
    nome: "Saboor Energetico",
    categoria: "Energético",
    imagem: "fotos/Saboor Energetico.png",
    preco: 8.50,
    descricao: "Sabor incrível e muita energia.",
    ingredientes: "0% alcool e muita diversão"
  }
];

window.produtos = produtos;
