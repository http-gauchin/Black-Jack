# Blueprint.md — Black Jack Drinks

## Visão geral do projeto

Criar um site completo, profissional e responsivo para comércio/delivery de bebidas alcoólicas chamado **Black Jack Drinks**.

O site deve ter visual escuro, premium, elegante e inspirado na identidade da logo enviada, com aparência de bar, cassino, whisky, bebidas especiais e delivery moderno.

A interface deve funcionar bem em:

```text
Celular
Tablet
Notebook
Computador
```

O site deve ser dividido em várias páginas, não deve ser feito em página única.

## Identidade visual

A identidade visual deve seguir a logo da marca **Black Jack Drinks**.

Usar como base visual:

```text
Preto profundo
Dourado envelhecido
Laranja caramelizado
Branco quente
Cinza grafite
Marrom whisky
```

Estilo visual desejado:

```text
Premium
Escuro
Elegante
Com efeitos de brilho suave
Degradês
Sombras
Cards arredondados
Botões chamativos
Animações leves
Visual de bebidas, cassino e whisky
```

Evitar visual infantil, colorido demais ou poluído.

O site precisa parecer uma loja séria de bebidas alcoólicas.

## Estrutura de diretórios

O projeto deve ter a seguinte estrutura:

```text
Black jack/
│
├── blueprint.md
├── index.html
├── produtos.html
├── produto.html
├── combos.html
├── carrinho.html
├── checkout.html
├── confirmacao.html
├── termos.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── app.js
│   ├── produtos.js
│   ├── carrinho.js
│   ├── idade.js
│   └── termos.js
│
├── logo/
│   └── arquivos da logo em png, jpeg ou jpg
│
└── fotos/
    └── fotos das bebidas em png, jpeg ou jpg
```

## Regra para a pasta logo

Criar uma pasta chamada:

```text
logo/
```

A logo do site ficará dentro dessa pasta.

A IA ou o código deve procurar automaticamente os arquivos de imagem dentro da pasta `logo`.

Formatos aceitos:

```text
.png
.jpeg
.jpg
```

Não deixar o nome da logo fixo no código.

O sistema deve considerar qualquer imagem válida dentro da pasta `logo`.

Se tiver mais de uma imagem, usar a primeira encontrada ou a imagem que tiver `logo` no nome.

A logo deve aparecer em:

```text
Cabeçalho
Modal de maioridade
Página inicial
Rodapé
Página de termos de uso
```

## Regra para a pasta fotos

Todas as fotos dos produtos ficarão dentro da pasta:

```text
fotos/
```

A IA ou o código deve ler automaticamente os arquivos dessa pasta.

Formatos aceitos:

```text
.png
.jpeg
.jpg
```

Não precisa deixar os nomes das fotos fixos no código.

Cada imagem encontrada na pasta `fotos` deve virar um produto no site.

A IA deve analisar a imagem do produto e tentar gerar:

```text
Nome do produto
Categoria
Descrição curta
Ingredientes ou composição, quando estiver visível na imagem
Preço fictício
Imagem do produto
```

## Regra importante sobre ingredientes

A IA deve consultar a imagem do produto para tentar identificar ingredientes, composição ou informações do rótulo.

Se a imagem mostrar claramente a composição, usar as informações visíveis.

Se a imagem não mostrar os ingredientes com clareza, não inventar ingredientes específicos.

Nesse caso, preencher assim:

```text
Composição não identificada com clareza na imagem. Recomenda-se conferir o rótulo original do fabricante antes da venda.
```

Pode criar uma descrição comercial simples, mas não pode afirmar ingredientes específicos que não aparecem na imagem.

## Páginas obrigatórias

O site deve ter as seguintes páginas:

```text
index.html
produtos.html
produto.html
combos.html
carrinho.html
checkout.html
confirmacao.html
termos.html
```

## Fluxo principal do site

```text
1. Usuário acessa index.html
2. Modal de maioridade aparece sobrepondo a tela
3. Usuário lê a explicação inicial
4. Usuário pode abrir o link Termos de Uso
5. Usuário confirma que tem 18 anos ou mais
6. Site libera o acesso
7. Usuário navega pelos produtos
8. Usuário adiciona produtos ou combos no carrinho
9. Usuário informa endereço e dados
10. Usuário confirma o pedido
11. Página de confirmação é exibida
```

## Modal obrigatório de confirmação +18

Ao abrir o site pela primeira vez, deve aparecer uma mensagem sobrepondo toda a tela.

Essa mensagem deve bloquear o uso do site até o usuário confirmar que tem 18 anos ou mais.

O modal deve ter fundo escurecido, efeito de desfoque atrás e card central com visual premium.

O usuário só poderá entrar no site se marcar a confirmação de maioridade.

Modelo do modal:

```text
BLACK JACK DRINKS

Bebidas selecionadas para festas, encontros e momentos especiais.

Este site comercializa bebidas alcoólicas e é destinado exclusivamente a pessoas maiores de 18 anos.

Antes de continuar, confirme que você possui idade legal para acessar conteúdos e ofertas relacionados a bebidas alcoólicas.

[ ] Declaro que tenho 18 anos ou mais e estou ciente das regras de consumo responsável.

Ao continuar, você declara que leu e aceita os Termos de Uso.

Termos de Uso

[ Entrar no site ]
[ Sair ]
```

## Regras do modal +18

O botão **Entrar no site** deve começar desativado.

Ele só deve ser ativado quando o usuário marcar:

```text
Declaro que tenho 18 anos ou mais e estou ciente das regras de consumo responsável.
```

O link **Termos de Uso** deve abrir a página:

```text
termos.html
```

Também pode abrir em modal, mas obrigatoriamente deve existir a página `termos.html`.

Depois que o usuário confirmar, salvar no navegador:

```text
localStorage.setItem("blackJackMaioridadeConfirmada", "true")
```

Quando o usuário voltar ao site, não precisa mostrar o modal novamente se a confirmação já estiver salva.

Se clicar em **Sair**, mostrar uma mensagem:

```text
Acesso não permitido. Este site é destinado apenas para maiores de 18 anos.
```

E bloquear a navegação.

## Texto breve acima do site

Na página inicial, acima dos produtos, deve existir uma apresentação curta e profissional.

Modelo:

```text
Black Jack Drinks

Uma experiência premium para quem busca bebidas selecionadas, combos práticos e atendimento rápido para festas, encontros e consumo responsável.

Escolha seus produtos, monte seu combo e finalize o pedido com praticidade.
```

Também adicionar aviso discreto:

```text
Venda e consumo permitidos somente para maiores de 18 anos.
Beba com moderação.
```

## Página termos.html

Criar uma página completa de Termos de Uso.

Ela deve seguir a identidade visual do site e ter aparência profissional.

O texto deve ser bem estruturado, com linguagem clara e séria.

A página deve conter:

```text
Logo
Título
Texto jurídico organizado
Botão para voltar ao site
Rodapé
```

## Termos de Uso — modelo completo

Usar este texto como base na página `termos.html`:

```text
TERMOS DE USO — BLACK JACK DRINKS

Última atualização: [inserir data atual]

1. OBJETIVO DO SITE

O presente site tem finalidade comercial e informativa, disponibilizando ao usuário a visualização de bebidas, combos, preços, características dos produtos e opções de pedido para entrega ou retirada, conforme disponibilidade da empresa responsável.

2. ACESSO RESTRITO A MAIORES DE 18 ANOS

O acesso e a utilização deste site são permitidos exclusivamente a pessoas com idade igual ou superior a 18 anos.

Ao acessar o site, marcar a confirmação de maioridade ou realizar qualquer pedido, o usuário declara, sob sua responsabilidade, possuir idade legal para acesso, compra e consumo de bebidas alcoólicas.

É proibida a venda, fornecimento, entrega, serviço ou disponibilização de bebida alcoólica a criança ou adolescente, nos termos do Estatuto da Criança e do Adolescente, especialmente conforme a Lei nº 8.069/1990, com alteração promovida pela Lei nº 13.106/2015.

3. CONSUMO RESPONSÁVEL

A Black Jack Drinks incentiva o consumo responsável e moderado de bebidas alcoólicas.

O uso indevido de bebidas alcoólicas pode causar danos à saúde, prejuízos sociais e riscos à segurança.

O usuário declara estar ciente de que não deve dirigir após consumir bebida alcoólica e que deve observar a legislação aplicável.

4. INFORMAÇÕES DOS PRODUTOS

As informações, imagens, descrições, preços, ingredientes e composições dos produtos são disponibilizados para auxiliar a escolha do consumidor.

A empresa buscará manter as informações claras, adequadas e atualizadas, respeitando os princípios de informação ao consumidor previstos no Código de Defesa do Consumidor.

Quando a composição não estiver visível ou confirmada na imagem do produto, o site poderá informar que a composição deve ser conferida no rótulo original do fabricante.

5. PREÇOS, DISPONIBILIDADE E PROMOÇÕES

Os preços, descontos, combos, condições de pagamento e disponibilidade dos produtos podem variar conforme estoque, região de entrega, fornecedores e promoções vigentes.

A confirmação final do pedido dependerá da disponibilidade dos produtos e da validação pela empresa responsável.

6. COMBOS E ATACADO

O site poderá oferecer combos promocionais, incluindo gelo saborizado, energético e uma bebida principal escolhida pelo cliente entre as opções disponíveis.

Quando houver regra de atacado, o desconto somente será aplicado se o pedido atingir a quantidade mínima informada no site.

7. DADOS DO CLIENTE E ENTREGA

Para finalização do pedido, poderão ser solicitados dados como nome, telefone, CPF ou CNPJ, endereço de entrega e forma de pagamento.

O usuário é responsável por fornecer informações corretas, completas e atualizadas.

A empresa poderá recusar, cancelar ou suspender o pedido caso identifique informações incorretas, suspeita de fraude, impossibilidade de entrega ou descumprimento da confirmação de maioridade.

8. RESPONSABILIDADE DO USUÁRIO

O usuário se compromete a utilizar o site de forma lícita, responsável e compatível com estes Termos de Uso.

É proibido utilizar o site para práticas fraudulentas, informações falsas, tentativa de compra por menor de idade ou qualquer conduta contrária à legislação brasileira.

9. LIMITAÇÃO DE RESPONSABILIDADE

A Black Jack Drinks não se responsabiliza por erros decorrentes de informações fornecidas incorretamente pelo usuário, indisponibilidade momentânea do site, falhas de conexão, alterações de estoque ou uso indevido dos produtos adquiridos.

10. PROTEÇÃO AO CONSUMIDOR

O site deve apresentar informações claras sobre produtos, preços, características, forma de pagamento, entrega e condições da compra, respeitando os direitos básicos do consumidor previstos na Lei nº 8.078/1990.

11. PUBLICIDADE E BEBIDAS ALCOÓLICAS

As comunicações visuais e promocionais do site devem ser direcionadas ao público adulto, evitando linguagem, imagens ou elementos que estimulem consumo por menores de idade.

A marca deve manter comunicação compatível com a natureza do produto e com as restrições legais aplicáveis à publicidade de bebidas alcoólicas.

12. ALTERAÇÕES DOS TERMOS

Estes Termos de Uso poderão ser atualizados a qualquer momento para adequação legal, operacional ou comercial.

A versão vigente estará sempre disponível no rodapé do site.

13. ACEITE DOS TERMOS

Ao acessar o site, confirmar a maioridade, navegar pelas páginas ou realizar pedido, o usuário declara ter lido, compreendido e aceitado estes Termos de Uso.

Caso não concorde com estes termos, o usuário não deverá utilizar o site.

14. CONTATO

Em caso de dúvidas, solicitações ou informações sobre pedidos, o usuário poderá entrar em contato pelos canais oficiais informados no site.
```

## Rodapé obrigatório

Todas as páginas devem ter rodapé.

O rodapé deve conter:

```text
Logo pequena
Black Jack Drinks
Venda permitida somente para maiores de 18 anos
Beba com moderação
Link Termos de Uso
Link Produtos
Link Combos
Link Carrinho
```

Modelo:

```text
© 2026 Black Jack Drinks. Venda e consumo permitidos somente para maiores de 18 anos. Beba com moderação.

Termos de Uso | Produtos | Combos | Carrinho
```

O link **Termos de Uso** deve apontar para:

```text
termos.html
```

## Embasamento legal que deve orientar o site

O projeto deve considerar os seguintes pontos legais:

```text
Lei nº 8.069/1990 — Estatuto da Criança e do Adolescente
Lei nº 13.106/2015 — torna crime vender, fornecer, servir, ministrar ou entregar bebida alcoólica a criança ou adolescente
Lei nº 8.078/1990 — Código de Defesa do Consumidor, com dever de informação adequada e clara
Lei nº 9.294/1996 — restrições relacionadas à propaganda de bebidas alcoólicas
Decreto nº 2.018/1996 — regulamenta a Lei nº 9.294/1996
Lei nº 11.705/2008 — reforça definição e restrições relacionadas a bebidas alcoólicas
```

O site deve usar essas referências para justificar:

```text
Bloqueio de acesso para menores de 18 anos
Confirmação obrigatória de maioridade
Termos de Uso acessíveis
Informação clara sobre produtos, preços e condições
Comunicação responsável
Aviso de consumo moderado
```

## Cabeçalho

Todas as páginas devem ter cabeçalho fixo ou destacado.

Elementos:

```text
Logo
Nome Black Jack Drinks
Menu
Botão Carrinho
```

Menu:

```text
Início
Produtos
Combos
Carrinho
Termos
```

No celular, o menu deve virar botão hambúrguer.

## Página index.html

A página inicial deve conter:

```text
Modal obrigatório de confirmação +18
Cabeçalho
Hero/banner principal
Explicação breve do site
Botões principais
Categorias
Produtos em destaque
Chamada para combos
Rodapé
```

Hero sugerido:

```text
Bebidas premium para festas, encontros e momentos especiais.

Monte seu pedido, escolha seus combos e receba com praticidade.

[ Ver bebidas ]
[ Ver combos ]
```

## Página produtos.html

A página de produtos deve conter:

```text
Cabeçalho
Título
Barra de pesquisa
Filtro por categoria
Cards dos produtos
Rodapé
```

Categorias:

```text
Todos
Vodka
Gin
Whisky
Energético
Gelo saborizado
Bebidas
Combos
```

Cada card deve ter:

```text
Foto
Nome
Categoria
Preço
Mini descrição
Botão Ver detalhes
Botão Adicionar
```

## Página produto.html

Página para detalhes de um produto específico.

Não colocar história da bebida.

Conteúdo:

```text
Imagem grande
Nome
Categoria
Preço
Descrição
Ingredientes/composição
Quantidade
Botão adicionar ao carrinho
Rodapé
```

## Página combos.html

Página específica para combos.

O combo deve conter:

```text
Gelo saborizado
Energético
Uma bebida principal
```

A bebida principal deve ser escolhida entre:

```text
Vodka
Gin
Whisky
```

Regra obrigatória:

```text
O cliente só pode escolher uma bebida principal por combo.
```

Modelo:

```text
Combo Black Jack

Inclui:
- Gelo saborizado
- Energético
- 1 bebida principal

Escolha sua bebida principal:
( ) Vodka
( ) Gin
( ) Whisky

[ Adicionar ao carrinho ]
```

Ao adicionar ao carrinho, salvar também a escolha da bebida principal.

## Página carrinho.html

O carrinho deve usar `localStorage`.

Deve conter:

```text
Produtos adicionados
Combos adicionados
Quantidade
Botão aumentar
Botão diminuir
Botão excluir
Subtotal
Desconto de atacado
Total final
Botão continuar
Rodapé
```

Regra de atacado:

```text
Se o carrinho tiver 30 produtos ou mais, aplicar 15% de desconto.
```

Mostrar aviso quando ainda não atingiu:

```text
Desconto de atacado disponível a partir de 30 produtos.
```

Mostrar aviso quando atingiu:

```text
Desconto de atacado aplicado: 15%
```

## Página checkout.html

A página de finalização deve conter:

```text
Dados do cliente
Endereço de entrega
Forma de pagamento
Resumo do pedido
Confirmação final de maioridade
Rodapé
```

Campos do cliente:

```text
Nome completo
Telefone
CPF ou CNPJ
```

Campos de endereço:

```text
Rua
Número
Bairro
Cidade
Complemento
Referência
```

Formas de pagamento:

```text
Pix
Cartão
Dinheiro na entrega
```

Antes de finalizar, exigir:

```text
[ ] Confirmo que tenho 18 anos ou mais e aceito os Termos de Uso.
```

O botão finalizar só deve funcionar se o campo estiver marcado.

## Página confirmacao.html

A página deve mostrar:

```text
Pedido realizado com sucesso
Número do pedido
Resumo dos produtos
Resumo dos combos
Endereço
Forma de pagamento
Total final
Botão voltar ao início
Rodapé
```

## Arquivo js/produtos.js

Criar um array de produtos.

O arquivo deve ser gerado com base nas fotos da pasta `fotos`.

Formato:

```javascript
const produtos = [
  {
    id: 1,
    nome: "Nome do produto",
    categoria: "Whisky",
    imagem: "fotos/arquivo-da-imagem.jpg",
    preco: 89.90,
    descricao: "Descrição curta e comercial do produto.",
    ingredientes: "Composição identificada ou mensagem de não identificação."
  }
];
```

Não fixar nomes de fotos manualmente no blueprint.

O código final deve considerar imagens nos formatos:

```text
png
jpeg
jpg
```

## Arquivo js/idade.js

Responsável por controlar o modal de maioridade.

Funções necessárias:

```text
mostrarModalMaioridade()
confirmarMaioridade()
bloquearAcessoMenor()
verificarMaioridadeSalva()
```

Regra:

```text
Se localStorage.blackJackMaioridadeConfirmada for true, liberar site.
Se não houver confirmação, mostrar modal.
```

## Arquivo js/termos.js

Responsável por interações da página de termos.

Pode conter:

```text
Voltar para página anterior
Atualizar data dos termos
Controlar links do rodapé
```

## Arquivo js/carrinho.js

Funções necessárias:

```text
adicionarAoCarrinho(produto)
adicionarComboAoCarrinho(combo)
removerDoCarrinho(id)
aumentarQuantidade(id)
diminuirQuantidade(id)
calcularSubtotal()
calcularDescontoAtacado()
calcularTotal()
renderizarCarrinho()
salvarCarrinho()
carregarCarrinho()
```

## CSS e responsividade

O arquivo `css/style.css` deve conter todo o visual.

Usar:

```text
Degradê preto para grafite
Detalhes dourados/laranja
Botões com hover
Cards com sombra
Modal com blur
Animação leve na entrada
Layout em grid
Media queries para celular e computador
```

No celular:

```text
Menu hambúrguer
Cards em uma coluna
Botões grandes
Modal ocupando quase toda a largura
Texto bem legível
```

No computador:

```text
Menu horizontal
Hero dividido em texto e imagem/logo
Cards em três ou quatro colunas
Modal central menor e elegante
```

## Efeitos visuais sugeridos

Usar efeitos leves:

```text
Glow dourado em botões principais
Borda dourada suave nos cards
Background com radial-gradient
Hover com elevação dos cards
Transição suave nos botões
Blur no fundo do modal
Animação fade-in nas páginas
```

Não exagerar nas animações.

O site precisa ser bonito, mas rápido e leve.

## Regras finais importantes

```text
Não criar história da bebida.
Não fazer tudo em uma única página.
Criar várias páginas separadas.
Criar página termos.html.
Criar modal obrigatório de maioridade.
Só liberar acesso se o usuário confirmar +18.
Manter link Termos de Uso no modal e no rodapé.
Usar pasta logo para a logo.
Usar pasta fotos para as bebidas.
Aceitar imagens png, jpeg e jpg.
Não fixar nomes das imagens no blueprint.
Gerar produtos com base nas fotos.
Não inventar ingredientes quando não estiverem visíveis.
Criar carrinho funcional com localStorage.
Criar combos com gelo saborizado, energético e uma bebida principal.
Permitir apenas uma bebida principal por combo.
Aplicar 15% de desconto em atacado a partir de 30 produtos.
Manter visual premium inspirado na logo enviada.
Adaptar completamente para celular e computador.
```

## Entrega esperada

Ao final, o projeto deve conter:

```text
Black jack/
│
├── blueprint.md
├── index.html
├── produtos.html
├── produto.html
├── combos.html
├── carrinho.html
├── checkout.html
├── confirmacao.html
├── termos.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── app.js
│   ├── produtos.js
│   ├── carrinho.js
│   ├── idade.js
│   └── termos.js
│
├── logo/
│   └── imagens png, jpeg ou jpg
│
└── fotos/
    └── imagens png, jpeg ou jpg
```

O site deve abrir pelo arquivo:

```text
index.html
```

E deve navegar corretamente por todas as páginas.
