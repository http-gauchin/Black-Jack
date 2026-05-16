const disclaimer = "Composição não identificada com clareza na imagem. Recomenda-se conferir o rótulo original do fabricante antes da venda.";

const produtos = [
  {
    id: 1,
    nome: "Absolut Vodka",
    categoria: "Vodka",
    imagem: "fotos/Absolute Vodka.png",
    preco: 99.90,
    descricao: "Vodka sueca clássica, pura e de sabor suave.",
    ingredientes: disclaimer
  },
  {
    id: 2,
    nome: "Dewar's",
    categoria: "Whisky",
    imagem: "fotos/Dewar's.png",
    preco: 129.90,
    descricao: "Blended Scotch Whisky de sabor marcante.",
    ingredientes: disclaimer
  },
  {
    id: 3,
    nome: "Energético Baly",
    categoria: "Energético",
    imagem: "fotos/Energetico Baly.png",
    preco: 12.50,
    descricao: "Energético nacional, ótimo para misturar.",
    ingredientes: disclaimer
  },
  {
    id: 4,
    nome: "Energético Furya",
    categoria: "Energético",
    imagem: "fotos/Energetico Furia.png",
    preco: 9.90,
    descricao: "Energético intenso para suas festas.",
    ingredientes: disclaimer
  },
  {
    id: 5,
    nome: "Monster Energy",
    categoria: "Energético",
    imagem: "fotos/Energetico Monster.png",
    preco: 15.90,
    descricao: "Sabor potente para garantir a energia da noite.",
    ingredientes: disclaimer
  },
  {
    id: 6,
    nome: "Red Bull Energy Drink",
    categoria: "Energético",
    imagem: "fotos/Energetico RedBull.png",
    preco: 16.90,
    descricao: "O energético clássico mundialmente conhecido.",
    ingredientes: disclaimer
  },
  {
    id: 7,
    nome: "TNT Energy Drink",
    categoria: "Energético",
    imagem: "fotos/Energetico TNT.png",
    preco: 11.50,
    descricao: "Energia em lata para suas melhores misturas.",
    ingredientes: disclaimer
  },
  {
    id: 8,
    nome: "Fazenda Velha",
    categoria: "Bebidas",
    imagem: "fotos/Fazenda Velha.png",
    preco: 45.00,
    descricao: "Cachaça tradicional de sabor inconfundível.",
    ingredientes: disclaimer
  },
  {
    id: 9,
    nome: "Gelo Saborizado",
    categoria: "Gelo saborizado",
    imagem: "fotos/Gelo Saborizado.png",
    preco: 8.00,
    descricao: "Gelo com sabores especiais para enriquecer seu drink.",
    ingredientes: "Água potável, aromatizante natural. " + disclaimer
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
    ingredientes: disclaimer
  },
  {
    id: 12,
    nome: "Tequila",
    categoria: "Bebidas",
    imagem: "fotos/Tequila.png",
    preco: 110.00,
    descricao: "Tequila autêntica para animar a festa.",
    ingredientes: disclaimer
  },
  {
    id: 13,
    nome: "Vodka Bombay",
    categoria: "Vodka",
    imagem: "fotos/Vodka Bombay.png",
    preco: 135.00,
    descricao: "Bebida destilada clássica com sabor refinado.",
    ingredientes: disclaimer
  },
  {
    id: 14,
    nome: "Weber Haus",
    categoria: "Bebidas",
    imagem: "fotos/Weber Haus.png",
    preco: 85.00,
    descricao: "Bebida artesanal de alta qualidade.",
    ingredientes: disclaimer
  },
  {
    id: 15,
    nome: "Jack Daniel's",
    categoria: "Whisky",
    imagem: "fotos/Whisky Jack Daniels.png",
    preco: 169.90,
    descricao: "O icônico Tennessee Whiskey.",
    ingredientes: disclaimer
  }
];

// Exports if using modules, but for simple script tags we just expose them globally
window.produtos = produtos;
