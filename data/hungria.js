// HUNGRIA
// Nota: Goulash já está em Carnes Bovinas.
window.RECIPES = window.RECIPES || {};
window.RECIPES["hungria"] = [

  {
    name: "Chicken Paprikash",
    subgroup: "Principais",
    desc: "Frango cozido em molho cremoso de páprica húngara, cebola e creme azedo, servido com Spätzle ou nhoque.",
    origin: "Hungria",
    time: { prep: "15 min", cook: "40 min", total: "55 min" },
    yield: "4 porções",
    difficulty: "Fácil",
    tags: ["protein:frango", "ingredient:pimentao", "ingredient:tomate"],
    ingredients: [
      "1 frango, em pedaços (ou 6-8 sobrecoxas)",
      "3 colheres (sopa) de banha ou óleo",
      "1 cebola picada",
      "1 pimentão vermelho picado",
      "3 colheres (sopa) de páprica doce húngara",
      "2 tomates picados sem pele",
      "300 ml de caldo de galinha",
      "200 ml de creme azedo (sour cream) ou creme de leite fresco com um fio de limão",
      "1 colher (sopa) de farinha de trigo",
      "Sal a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "1 frango, em pedaços (ou 6-8 sobrecoxas)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "frango", prep: "em pedaços", alt: "6-8 sobrecoxas", optional: false, isReference: false },
        ],
      },
      {
        raw: "3 colheres (sopa) de banha ou óleo",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: "colher-sopa", item: "banha", prep: null, alt: "óleo", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 cebola picada",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cebola", prep: "picada", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 pimentão vermelho picado",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "pimentão vermelho", prep: "picado", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "3 colheres (sopa) de páprica doce húngara",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: "colher-sopa", item: "páprica doce húngara", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 tomates picados sem pele",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "tomates", prep: "picados sem pele", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "300 ml de caldo de galinha",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "mililitro", item: "caldo de galinha", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "200 ml de creme azedo (sour cream) ou creme de leite fresco com um fio de limão",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "mililitro", item: "creme azedo (sour cream)", prep: null, alt: "creme de leite fresco com um fio de limão", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (sopa) de farinha de trigo",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "farinha de trigo", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Sal a gosto",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "sal", prep: "a gosto", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Tempere o frango com sal. Aqueça a banha numa panela funda e doure os pedaços por todos os lados. Retire e reserve.",
      "Na mesma panela, refogue a cebola e o pimentão até dourarem, 8-10 minutos.",
      "Retire a panela do fogo por um instante e adicione a páprica, mexendo rapidamente (evita queimar e ficar amarga).",
      "Volte ao fogo, junte o tomate picado e refogue por 2-3 minutos.",
      "Volte o frango à panela, cubra com o caldo de galinha, tampe e cozinhe em fogo baixo por 25-30 minutos, até o frango ficar macio.",
      "Retire o frango. Misture o creme azedo com a farinha até dissolver bem, depois incorpore ao molho da panela, mexendo em fogo baixo até engrossar levemente (não deixe ferver forte, para não talhar).",
      "Volte o frango ao molho, aqueça bem e ajuste o sal.",
      "Sirva com Spätzle (ver receita, categoria Massas) ou nhoque."
    ],
    tips: [
      "A técnica de retirar a panela do fogo antes de adicionar a páprica é a mesma usada no Goulash — evita que a especiaria queime em contato direto com a superfície quente.",
      "Misturar a farinha ao creme azedo antes de incorporar ao molho (em vez de direto) ajuda a evitar que ele talhe com o calor.",
      "Use páprica húngara de boa qualidade — é o ingrediente central do prato, então a diferença de qualidade é bastante perceptível no resultado final."
    ]
  },
  {
    name: "Lángos",
    subgroup: "Pães e Petiscos",
    desc: "Disco de massa fermentada frito em óleo até dourar, esfregado com alho e coberto com creme azedo e queijo — street food húngaro.",
    origin: "Hungria",
    time: { prep: "20 min + 1h fermentação", cook: "15 min", total: "1h35" },
    yield: "6 unidades",
    difficulty: "Fácil",
    tags: ["diet:vegetariana", "ingredient:queijo"],
    ingredients: [
      "500 g de farinha de trigo",
      "7 g de fermento biológico seco",
      "1 colher (chá) de açúcar",
      "1 colher (chá) de sal",
      "300 ml de água morna",
      "2 colheres (sopa) de óleo",
      "Óleo, para fritar",
      "Alho amassado (misturado com água ou óleo), creme azedo e queijo ralado, para servir"
    ],
    ingredientsStructured: [
      {
        raw: "500 g de farinha de trigo",
        group: null,
        items: [
          { qty: 500, qtyRange: null, unit: "grama", item: "farinha de trigo", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "7 g de fermento biológico seco",
        group: null,
        items: [
          { qty: 7, qtyRange: null, unit: "grama", item: "fermento biológico seco", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (chá) de açúcar",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "açúcar", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (chá) de sal",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "sal", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "300 ml de água morna",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "mililitro", item: "água morna", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 colheres (sopa) de óleo",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "colher-sopa", item: "óleo", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Óleo, para fritar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "óleo", prep: "para fritar", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Alho amassado (misturado com água ou óleo), creme azedo e queijo ralado, para servir",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "alho amassado", prep: "misturado com água ou óleo, para servir", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "creme azedo", prep: "para servir", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "queijo ralado", prep: "para servir", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Misture a farinha, fermento, açúcar e sal. Adicione a água morna e o óleo, misturando até formar uma massa.",
      "Sove por 8-10 minutos até ficar lisa e elástica.",
      "Cubra e deixe fermentar em local morno por 1 hora, até dobrar de volume.",
      "Divida a massa em 6 porções. Achate cada uma com as mãos (não use rolo), formando discos irregulares e rústicos de cerca de 1 cm de espessura, esticando levemente com os dedos como uma pizza.",
      "Aqueça bastante óleo numa panela funda a 180°C.",
      "Frite cada disco por 2-3 minutos de cada lado, até dourar bem e inflar levemente.",
      "Escorra em papel toalha. Ainda quente, esfregue com alho amassado (ou pincele com água/óleo com alho).",
      "Cubra com creme azedo e queijo ralado, ou sirva simples com sal. Sirva imediatamente, quente."
    ],
    tips: [
      "Esticar a massa com as mãos (não com rolo) cria a textura irregular e rústica característica, com bolhas e partes mais finas que ficam extra crocantes ao fritar.",
      "Esfregar o alho enquanto o pão ainda está bem quente é essencial — o calor 'ativa' e libera o aroma do alho na superfície porosa.",
      "Street food extremamente popular na Hungria, vendido em barraquinhas de feiras e mercados, com toppings que variam de simples (só alho e sal) a elaborados (queijo, creme azedo, presunto)."
    ]
  },
];
