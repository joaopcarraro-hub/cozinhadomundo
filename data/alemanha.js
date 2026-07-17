// ALEMANHA
// Nota: Schnitzel já está em Suínos; Goulash em Carnes Bovinas; Spätzle em Massas.
window.RECIPES = window.RECIPES || {};
window.RECIPES["alemanha"] = [

  {
    name: "Sauerbraten",
    subgroup: "Carnes de Panela",
    desc: "Carne bovina marinada por dias em vinagre e especiarias, cozida lentamente em molho agridoce engrossado com pão de gengibre.",
    origin: "Alemanha",
    time: { prep: "30 min + 3 dias marinada", cook: "2h30", total: "≈3 dias" },
    yield: "6 porções",
    difficulty: "Média",
    tags: ["protein:boi"],
    ingredients: [
      "1,5 kg de acém ou coxão duro bovino, em peça",
      "500 ml de vinagre de vinho tinto",
      "500 ml de água",
      "2 cebolas, 2 cenouras — em pedaços grandes",
      "1 folha de louro, 6 grãos de cravo, 1 colher (sopa) de grãos de pimenta-do-reino",
      "3 colheres (sopa) de óleo",
      "100 g de pão de gengibre (lebkuchen) ou biscoito de gengibre, esfarelado (espessante tradicional)",
      "2 colheres (sopa) de passas (opcional)",
      "Sal a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "1,5 kg de acém ou coxão duro bovino, em peça",
        group: null,
        items: [
          { qty: 1.5, qtyRange: null, unit: "quilograma", item: "acém", prep: "em peça", alt: "coxão duro bovino", optional: false, isReference: false },
        ],
      },
      {
        raw: "500 ml de vinagre de vinho tinto",
        group: null,
        items: [
          { qty: 500, qtyRange: null, unit: "mililitro", item: "vinagre de vinho tinto", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "500 ml de água",
        group: null,
        items: [
          { qty: 500, qtyRange: null, unit: "mililitro", item: "água", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 cebolas, 2 cenouras — em pedaços grandes",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "cebolas", prep: "em pedaços grandes", alt: null, optional: false, isReference: false },
          { qty: 2, qtyRange: null, unit: null, item: "cenouras", prep: "em pedaços grandes", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 folha de louro, 6 grãos de cravo, 1 colher (sopa) de grãos de pimenta-do-reino",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "folha", item: "louro", prep: null, alt: null, optional: false, isReference: false },
          { qty: 6, qtyRange: null, unit: null, item: "grãos de cravo", prep: null, alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "grãos de pimenta-do-reino", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "3 colheres (sopa) de óleo",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: "colher-sopa", item: "óleo", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "100 g de pão de gengibre (lebkuchen) ou biscoito de gengibre, esfarelado (espessante tradicional)",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "grama", item: "pão de gengibre (lebkuchen)", prep: "esfarelado (espessante tradicional)", alt: "biscoito de gengibre", optional: false, isReference: false },
        ],
      },
      {
        raw: "2 colheres (sopa) de passas (opcional)",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "colher-sopa", item: "passas", prep: null, alt: null, optional: true, isReference: false },
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
      "Prepare a marinada: ferva o vinagre, água, cebola, cenoura, louro, cravo e pimenta-do-reino por 5 minutos. Deixe esfriar completamente.",
      "Coloque a carne num recipiente não reativo (vidro ou cerâmica) e cubra completamente com a marinada fria.",
      "Cubra e leve à geladeira por 3 dias (mínimo), virando a carne uma vez ao dia — esse tempo longo de marinada é o que dá o sabor agridoce característico e amacia a carne.",
      "Retire a carne da marinada, seque bem com papel toalha (reserve a marinada e os legumes).",
      "Tempere com sal e sele em óleo quente numa panela funda, até dourar bem por todos os lados.",
      "Junte os legumes da marinada (escorridos) à panela, refogando por 5 minutos.",
      "Cubra com a marinada coada, deixe ferver, tampe e cozinhe em fogo baixo (ou no forno a 160°C) por 2-2h30, até a carne ficar bem macia.",
      "Retire a carne. Coe o molho, volte à panela e junte o pão de gengibre esfarelado (e as passas, se usar), mexendo até engrossar e formar um molho agridoce encorpado.",
      "Fatie a carne, sirva coberta com o molho, tradicionalmente acompanhada de Spätzle (ver receita, categoria Massas) ou Kartoffelsalat."
    ],
    tips: [
      "O tempo de marinada de vários dias não é exagero — é o que transforma um corte duro numa carne macia e dá o característico sabor agridoce, então não abrevie esse processo.",
      "O pão de gengibre esfarelado como espessante é a técnica tradicional alemã (em vez de farinha ou amido) — dá um toque levemente adocicado e especiado ao molho.",
      "Considerado por muitos o 'prato nacional' não oficial da Alemanha, com variações regionais na doçura e nas especiarias usadas."
    ]
  },
  {
    name: "Eisbein",
    subgroup: "Carnes de Panela",
    desc: "Joelho de porco cozido lentamente em caldo temperado até ficar macio, com a pele finalizada crocante no forno, servido com chucrute.",
    origin: "Alemanha",
    time: { prep: "20 min", cook: "2h30", total: "2h50" },
    yield: "4 porções",
    difficulty: "Fácil",
    tags: ["protein:suino"],
    ingredients: [
      "2 joelhos de porco (eisbein), com pele",
      "2 L de água",
      "1 cebola, 2 cenouras, 1 talo de salsão — em pedaços",
      "2 folhas de louro, 1 colher (sopa) de grãos de pimenta-do-reino",
      "1 colher (sopa) de sementes de cominho",
      "Sal a gosto",
      "Chucrute (repolho fermentado) e purê de batata, para servir"
    ],
    ingredientsStructured: [
      {
        raw: "2 joelhos de porco (eisbein), com pele",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "joelhos de porco (eisbein)", prep: "com pele", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 L de água",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "litro", item: "água", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 cebola, 2 cenouras, 1 talo de salsão — em pedaços",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cebola", prep: "em pedaços", alt: null, optional: false, isReference: false },
          { qty: 2, qtyRange: null, unit: null, item: "cenouras", prep: "em pedaços", alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "talo", item: "salsão", prep: "em pedaços", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 folhas de louro, 1 colher (sopa) de grãos de pimenta-do-reino",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "folha", item: "louro", prep: null, alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "grãos de pimenta-do-reino", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (sopa) de sementes de cominho",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "sementes de cominho", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Sal a gosto",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "sal", prep: "a gosto", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Chucrute (repolho fermentado) e purê de batata, para servir",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "chucrute (repolho fermentado)", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "purê de batata", prep: "para servir", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Numa panela grande, cubra os joelhos de porco com água, junte a cebola, cenoura, salsão, louro, pimenta-do-reino e cominho.",
      "Tempere com sal generosamente (a água deve ficar como um caldo bem temperado).",
      "Deixe ferver, retire a espuma que sobe, abaixe o fogo e cozinhe em fervura suave, tampado, por 2-2h30, até a carne ficar extremamente macia e quase se soltando do osso.",
      "Retire os joelhos do caldo (reserve o caldo, é saboroso e pode virar base de sopa).",
      "Se desejar a pele mais crocante, transfira os joelhos para uma assadeira e leve ao forno bem quente (220-230°C) por 15-20 minutos, até a pele dourar e ficar crocante.",
      "Sirva com chucrute e purê de batata."
    ],
    tips: [
      "A etapa final no forno (opcional, mas muito apreciada) transforma a pele cozida e macia numa crosta crocante, similar a um 'crackling' — vale o passo extra.",
      "O caldo de cozimento, rico em colágeno e sabor, não deve ser descartado — use como base para uma sopa de repolho ou lentilha no dia seguinte.",
      "Prato robusto típico de cervejarias alemãs, tradicionalmente servido com uma boa caneca de cerveja escura."
    ]
  },
  {
    name: "Kartoffelsalat",
    subgroup: "Acompanhamentos",
    desc: "Salada de batata morna com bacon, cebola e molho de vinagre e mostarda — versão alemã sem maionese.",
    origin: "Alemanha",
    time: { prep: "15 min", cook: "20 min", total: "35 min" },
    yield: "6 porções",
    difficulty: "Fácil",
    tags: ["contains:suino", "ingredient:batata"],
    ingredients: [
      "1 kg de batata, com casca",
      "150 g de bacon em cubos",
      "1 cebola picada bem fina",
      "100 ml de vinagre de vinho branco (ou de maçã)",
      "200 ml de caldo de carne ou água quente",
      "1 colher (sopa) de mostarda Dijon",
      "2 colheres (sopa) de azeite ou óleo",
      "Cebolinha picada",
      "Sal e pimenta a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "1 kg de batata, com casca",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "quilograma", item: "batata", prep: "com casca", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "150 g de bacon em cubos",
        group: null,
        items: [
          { qty: 150, qtyRange: null, unit: "grama", item: "bacon", prep: "em cubos", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 cebola picada bem fina",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cebola", prep: "picada bem fina", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "100 ml de vinagre de vinho branco (ou de maçã)",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "mililitro", item: "vinagre de vinho branco", prep: null, alt: "vinagre de maçã", optional: false, isReference: false },
        ],
      },
      {
        raw: "200 ml de caldo de carne ou água quente",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "mililitro", item: "caldo de carne", prep: null, alt: "água quente", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (sopa) de mostarda Dijon",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "mostarda dijon", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 colheres (sopa) de azeite ou óleo",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "colher-sopa", item: "azeite", prep: null, alt: "óleo", optional: false, isReference: false },
        ],
      },
      {
        raw: "Cebolinha picada",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "cebolinha", prep: "picada", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Sal e pimenta a gosto",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "sal", prep: "a gosto", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "pimenta", prep: "a gosto", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Cozinhe as batatas com casca em água salgada até ficarem macias mas ainda firmes, cerca de 20 minutos. Escorra, deixe amornar levemente e descasque enquanto ainda quentes.",
      "Corte as batatas mornas em rodelas.",
      "Numa frigideira, doure o bacon até crocante. Retire parte para reservar, deixando o restante e a gordura na frigideira.",
      "Refogue a cebola na gordura do bacon até ficar translúcida.",
      "Adicione o vinagre e o caldo quente, deixando ferver por 2 minutos. Junte a mostarda, misturando bem.",
      "Despeje esse molho quente sobre as batatas fatiadas ainda mornas, misturando delicadamente (as batatas absorvem melhor o molho enquanto ainda quentes).",
      "Regue com um fio de azeite, ajuste sal e pimenta.",
      "Finalize com o bacon reservado e cebolinha picada. Sirva morna ou em temperatura ambiente."
    ],
    tips: [
      "Misturar o molho quente com as batatas ainda mornas (nunca frias) é o segredo — as batatas absorvem muito mais sabor nesse estado do que depois de esfriarem.",
      "Esta é a versão 'quente' bávara/do sul da Alemanha (com bacon e vinagre, sem maionese) — existe também uma versão do norte com maionese, igualmente tradicional em sua região.",
      "Acompanhamento clássico de Schnitzel, salsichas grelhadas e praticamente qualquer prato de carne alemão."
    ]
  },
];
