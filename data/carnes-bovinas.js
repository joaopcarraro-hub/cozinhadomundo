// CARNES BOVINAS
window.RECIPES = window.RECIPES || {};
window.RECIPES["carnes-bovinas"] = [

  // ===================== ASSADOS E GRELHADOS NOBRES =====================
  {
    name: "Beef Wellington",
    subgroup: "Assados e Grelhados Nobres",
    desc: "Filé mignon selado, envolto em duxelles de cogumelos e presunto de Parma, coberto com massa folhada e assado até dourar.",
    origin: "Reino Unido",
    time: { prep: "1h + 1h geladeira", cook: "35 min", total: "≈2h45" },
    yield: "4-6 porções",
    difficulty: "Alta",
    tags: ["contains:suino", "ingredient:cogumelo"],
    ingredients: [
      "800 g de filé mignon em peça central (parte mais uniforme)",
      "1 receita de duxelles (ver receita, categoria Clássicos Contemporâneos)",
      "8 fatias de presunto de Parma",
      "1 disco de massa folhada grande",
      "2 colheres (sopa) de mostarda Dijon",
      "1 gema batida, para pincelar",
      "Sal, pimenta e óleo para selar"
    ],
    ingredientsStructured: [
      {
        raw: "800 g de filé mignon em peça central (parte mais uniforme)",
        group: null,
        items: [
          { qty: 800, qtyRange: null, unit: "grama", item: "filé mignon em peça central (parte mais uniforme)", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 receita de duxelles (ver receita, categoria Clássicos Contemporâneos)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "receita de duxelles", prep: "ver receita, categoria clássicos contemporâneos", alt: null, optional: false, isReference: true },
        ],
      },
      {
        raw: "8 fatias de presunto de Parma",
        group: null,
        items: [
          { qty: 8, qtyRange: null, unit: "fatia", item: "presunto de parma", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 disco de massa folhada grande",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "disco", item: "massa folhada grande", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 colheres (sopa) de mostarda Dijon",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "colher-sopa", item: "mostarda dijon", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 gema batida, para pincelar",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "gema", prep: "batida, para pincelar", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Sal, pimenta e óleo para selar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "sal", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "pimenta", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "óleo", prep: "para selar", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Tempere o filé com sal e pimenta. Sele rapidamente em fogo bem alto, por todos os lados, apenas para dourar a superfície (30-40 segundos por lado) — o interior deve continuar cru. Deixe esfriar completamente.",
      "Pincele o filé frio com a mostarda Dijon por toda a superfície.",
      "Estenda um filme plástico grande na bancada e disponha as fatias de presunto de Parma sobrepostas, formando um retângulo.",
      "Espalhe a duxelles fria uniformemente sobre o presunto.",
      "Coloque o filé no centro e, usando o filme plástico como guia, enrole firmemente o presunto e a duxelles ao redor do filé, formando um cilindro compacto. Torça as pontas do filme e leve à geladeira por 30-45 minutos para firmar.",
      "Abra a massa folhada. Retire o filme do cilindro de carne e posicione no centro da massa.",
      "Envolva a massa ao redor do cilindro, selando bem as bordas com um pouco de água ou gema batida, cortando o excesso.",
      "Leve à geladeira novamente por 20-30 minutos. Pincele toda a superfície com gema batida e faça marcas decorativas (leves cortes diagonais) com a ponta de uma faca, sem furar a massa.",
      "Asse a 200°C por 30-35 minutos, até a massa dourar bem e a temperatura interna da carne atingir 50-52°C (para malpassado/ao ponto para menos).",
      "Deixe descansar por 10 minutos antes de fatiar com uma faca bem afiada, em fatias de 2-3 cm."
    ],
    tips: [
      "A duxelles precisa estar completamente seca e fria antes de usar — qualquer umidade residual encharca a massa folhada por dentro, impedindo que fique crocante.",
      "Selar o filé rapidamente e deixá-lo esfriar totalmente antes de envolver é essencial — carne quente cozinha demais por dentro durante o tempo no forno.",
      "Use um termômetro de carne para garantir o ponto exato — é fácil errar o ponto num prato tão trabalhoso, então vale a pena a precisão."
    ]
  },
  {
    name: "Chateaubriand",
    subgroup: "Assados e Grelhados Nobres",
    desc: "Peça central e mais grossa do filé mignon, selada e regada com manteiga, finalizada no forno e servida fatiada para compartilhar.",
    origin: "França",
    time: { prep: "10 min", cook: "25 min", total: "35 min" },
    yield: "2-3 porções",
    difficulty: "Média",
    tags: [],
    ingredients: [
      "600-700 g de filé mignon, na parte central mais grossa, em peça única",
      "2 colheres (sopa) de óleo neutro",
      "30 g de manteiga",
      "2 dentes de alho amassados (com casca)",
      "2 ramos de tomilho",
      "Sal e pimenta a gosto",
      "1 receita de Béarnaise ou Bordelaise, para servir (ver receitas, categoria Molhos)"
    ],
    ingredientsStructured: [
      {
        raw: "600-700 g de filé mignon, na parte central mais grossa, em peça única",
        group: null,
        items: [
          { qty: null, qtyRange: [600, 700], unit: "grama", item: "filé mignon", prep: "na parte central mais grossa, em peça única", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 colheres (sopa) de óleo neutro",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "colher-sopa", item: "óleo neutro", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "30 g de manteiga",
        group: null,
        items: [
          { qty: 30, qtyRange: null, unit: "grama", item: "manteiga", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 dentes de alho amassados (com casca)",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "dente", item: "alho", prep: "amassados (com casca)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 ramos de tomilho",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "ramo", item: "tomilho", prep: null, alt: null, optional: false, isReference: false },
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
      {
        raw: "1 receita de Béarnaise ou Bordelaise, para servir (ver receitas, categoria Molhos)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "receita de béarnaise", prep: "para servir; ver receitas, categoria molhos", alt: "bordelaise", optional: false, isReference: true },
        ],
      },
    ],
    steps: [
      "Retire a carne da geladeira 30-40 minutos antes de cozinhar, para amornar. Tempere generosamente com sal e pimenta.",
      "Aqueça o óleo numa frigideira (ou grelha) em fogo alto até quase soltar fumaça.",
      "Sele a peça por todos os lados, incluindo as laterais, até dourar bem uniformemente, cerca de 2-3 minutos por lado.",
      "Abaixe o fogo para médio, junte a manteiga, o alho e o tomilho. Regue a carne com a manteiga derretida repetidamente (arroser) por 3-4 minutos.",
      "Transfira para o forno pré-aquecido a 180°C e continue assando por 12-15 minutos, até a temperatura interna atingir 50-52°C para malpassado ou 54-56°C para ao ponto.",
      "Retire e deixe descansar por 10 minutos, coberto levemente com papel-alumínio, antes de fatiar.",
      "Fatie na diagonal, em fatias grossas, e sirva com Béarnaise ou Bordelaise."
    ],
    tips: [
      "Chateaubriand é tradicionalmente a peça central e mais grossa do filé mignon, cortada em porção única para ser fatiada à mesa — não é um método de preparo, é o corte específico.",
      "É clássico servi-lo para compartilhar entre duas pessoas, fatiado no centro da mesa.",
      "O 'arroser' (regar com a manteiga derretida repetidamente durante o cozimento) é o que dá sabor extra e ajuda a formar uma crosta ainda mais saborosa."
    ]
  },
  {
    name: "Steak au Poivre",
    subgroup: "Assados e Grelhados Nobres",
    desc: "Filé com crosta grosseira de pimenta-do-reino, selado e servido com molho cremoso de conhaque flambado e creme de leite.",
    origin: "França",
    time: { prep: "10 min", cook: "15 min", total: "25 min" },
    yield: "2 porções",
    difficulty: "Média",
    tags: [],
    ingredients: [
      "2 filés mignon grossos (ou contrafilé), cerca de 200 g cada",
      "3 colheres (sopa) de grãos de pimenta-do-reino preta, levemente amassados",
      "1 colher (sopa) de óleo neutro",
      "30 g de manteiga",
      "1 cebola picada",
      "80 ml de conhaque",
      "150 ml de creme de leite fresco",
      "Sal a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "2 filés mignon grossos (ou contrafilé), cerca de 200 g cada",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "filés mignon", prep: "grossos, cerca de 200 g cada", alt: "contrafilé", optional: false, isReference: false },
        ],
      },
      {
        raw: "3 colheres (sopa) de grãos de pimenta-do-reino preta, levemente amassados",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: "colher-sopa", item: "grãos de pimenta-do-reino preta", prep: "levemente amassados", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (sopa) de óleo neutro",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "óleo neutro", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "30 g de manteiga",
        group: null,
        items: [
          { qty: 30, qtyRange: null, unit: "grama", item: "manteiga", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "80 ml de conhaque",
        group: null,
        items: [
          { qty: 80, qtyRange: null, unit: "mililitro", item: "conhaque", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "150 ml de creme de leite fresco",
        group: null,
        items: [
          { qty: 150, qtyRange: null, unit: "mililitro", item: "creme de leite fresco", prep: null, alt: null, optional: false, isReference: false },
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
      "Seque bem os filés com papel toalha. Pressione os grãos de pimenta amassados por toda a superfície da carne, de ambos os lados, formando uma crosta grosseira.",
      "Tempere com sal (com moderação, já que a pimenta já dá bastante intensidade).",
      "Aqueça o óleo numa frigideira em fogo alto. Sele os filés por 3-4 minutos de cada lado (para ao ponto), até formar uma crosta escura por fora.",
      "Retire os filés e reserve, cobertos, para descansar.",
      "Na mesma frigideira, abaixe o fogo para médio, adicione a manteiga e refogue a cebola até translúcida.",
      "Retire a frigideira do fogo e adicione o conhaque com cuidado. Volte ao fogo e flambe (ou deixe reduzir até evaporar o álcool, se preferir não flambar), raspando o fundo da frigideira.",
      "Junte o creme de leite, deixe reduzir em fogo médio por 3-4 minutos, até encorpar. Ajuste o sal.",
      "Volte os filés à frigideira só para aquecer no molho, ou sirva o molho por cima. Sirva imediatamente."
    ],
    tips: [
      "A crosta de pimenta é generosa por design — é a assinatura do prato, não tenha medo de usar bastante.",
      "Ao flambar o conhaque, afaste o rosto e mantenha uma tampa por perto por segurança; a chama se apaga sozinha em poucos segundos.",
      "Clássico de bistrô francês, tradicionalmente servido com batata frita ou palha."
    ]
  },
  {
    name: "Steak Diane",
    subgroup: "Assados e Grelhados Nobres",
    desc: "Filé fino selado rapidamente e servido com molho de cogumelos, conhaque flambado, mostarda Dijon e creme de leite.",
    origin: "EUA / Reino Unido (bistrô clássico)",
    time: { prep: "10 min", cook: "15 min", total: "25 min" },
    yield: "2 porções",
    difficulty: "Média",
    tags: ["ingredient:cogumelo"],
    ingredients: [
      "2 filés mignon (ou contrafilé fino), cerca de 180 g cada, levemente achatados",
      "1 colher (sopa) de óleo",
      "40 g de manteiga (dividida)",
      "1 cebola picada",
      "150 g de cogumelos fatiados",
      "60 ml de conhaque",
      "1 colher (sopa) de mostarda Dijon",
      "1 colher (chá) de molho inglês (Worcestershire)",
      "100 ml de creme de leite fresco",
      "Sal e pimenta a gosto",
      "Salsinha picada para finalizar"
    ],
    ingredientsStructured: [
      {
        raw: "2 filés mignon (ou contrafilé fino), cerca de 180 g cada, levemente achatados",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "filés mignon", prep: "cerca de 180 g cada, levemente achatados", alt: "contrafilé fino", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (sopa) de óleo",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "óleo", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "40 g de manteiga (dividida)",
        group: null,
        items: [
          { qty: 40, qtyRange: null, unit: "grama", item: "manteiga (dividida)", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "150 g de cogumelos fatiados",
        group: null,
        items: [
          { qty: 150, qtyRange: null, unit: "grama", item: "cogumelos", prep: "fatiados", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "60 ml de conhaque",
        group: null,
        items: [
          { qty: 60, qtyRange: null, unit: "mililitro", item: "conhaque", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "1 colher (chá) de molho inglês (Worcestershire)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "molho inglês (worcestershire)", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "100 ml de creme de leite fresco",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "mililitro", item: "creme de leite fresco", prep: null, alt: null, optional: false, isReference: false },
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
      {
        raw: "Salsinha picada para finalizar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "salsinha", prep: "picada para finalizar", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Tempere os filés com sal e pimenta. Aqueça o óleo com metade da manteiga numa frigideira em fogo alto.",
      "Sele os filés por 2-3 minutos de cada lado (para malpassado a ao ponto, já que são finos). Retire e reserve.",
      "Na mesma frigideira, adicione o restante da manteiga e refogue a cebola até translúcida.",
      "Junte os cogumelos e refogue até dourarem, 5 minutos.",
      "Retire a frigideira do fogo, adicione o conhaque e flambe com cuidado (ou deixe reduzir em fogo baixo até evaporar o álcool).",
      "Junte a mostarda, o molho inglês e o creme de leite. Deixe reduzir em fogo médio por 2-3 minutos, até encorpar.",
      "Volte os filés à frigideira, regando com o molho, por 1-2 minutos para aquecer.",
      "Finalize com salsinha picada e sirva imediatamente, com o molho por cima."
    ],
    stepIngredients: [
      [{ entryIndex: 2, itemIndex: 0, fraction: 0.5 }],
      null,
      [{ entryIndex: 2, itemIndex: 0, fraction: 0.5 }],
      null,
      null,
      null,
      null,
      null,
    ],
    tips: [
      "Tradicionalmente preparado 'à mesa' (tableside) em restaurantes clássicos, como um show culinário — pode ser recriado em casa com a mesma sequência de passos.",
      "A combinação de mostarda Dijon e molho inglês é o que dá a acidez e profundidade características do molho Diane.",
      "Use filés mais finos que no Chateaubriand ou Steak au Poivre — a receita foi pensada para cozimento rápido e apresentação teatral."
    ]
  },
  {
    name: "Tornedor Rossini",
    subgroup: "Assados e Grelhados Nobres",
    desc: "Medalhão de filé mignon sobre torrada de brioche, coroado com foie gras selado e regado com molho de Madeira e Demi-glace.",
    origin: "França / Itália",
    time: { prep: "15 min", cook: "20 min", total: "35 min" },
    yield: "2 porções",
    difficulty: "Alta",
    tags: ["protein:ave", "ingredient:vinho"],
    ingredients: [
      "2 medalhões de filé mignon (tournedos), cerca de 4-5 cm de altura",
      "2 fatias de pão brioche ou pão de forma, do tamanho dos medalhões",
      "2 fatias de foie gras (cerca de 60 g cada)",
      "30 g de manteiga (dividida)",
      "1 colher (sopa) de óleo",
      "150 ml de Madeira (vinho)",
      "200 ml de Demi-glace (ver receita, categoria Molhos)",
      "Lascas de trufa negra (opcional, tradicional)",
      "Sal e pimenta a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "2 medalhões de filé mignon (tournedos), cerca de 4-5 cm de altura",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "medalhões de filé mignon (tournedos)", prep: "cerca de 4-5 cm de altura", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 fatias de pão brioche ou pão de forma, do tamanho dos medalhões",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "fatia", item: "pão brioche", prep: "do tamanho dos medalhões", alt: "pão de forma", optional: false, isReference: false },
        ],
      },
      {
        raw: "2 fatias de foie gras (cerca de 60 g cada)",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "fatia", item: "foie gras", prep: "cerca de 60 g cada", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "30 g de manteiga (dividida)",
        group: null,
        items: [
          { qty: 30, qtyRange: null, unit: "grama", item: "manteiga (dividida)", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (sopa) de óleo",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "óleo", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "150 ml de Madeira (vinho)",
        group: null,
        items: [
          { qty: 150, qtyRange: null, unit: "mililitro", item: "madeira (vinho)", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "200 ml de Demi-glace (ver receita, categoria Molhos)",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "mililitro", item: "demi-glace", prep: "ver receita, categoria molhos", alt: null, optional: false, isReference: true },
        ],
      },
      {
        raw: "Lascas de trufa negra (opcional, tradicional)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "lascas de trufa negra", prep: "tradicional", alt: null, optional: true, isReference: false },
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
      "Tempere os medalhões de filé com sal e pimenta. Amarre com barbante culinário ao redor da lateral para manter o formato cilíndrico alto, se necessário.",
      "Toste as fatias de pão brioche na manteiga até dourarem dos dois lados. Reserve.",
      "Aqueça o óleo numa frigideira em fogo alto e sele os medalhões por 3-4 minutos de cada lado, para malpassado a ao ponto. Retire e deixe descansar.",
      "Numa frigideira separada, bem quente e sem gordura (o foie gras solta a própria gordura), sele as fatias de foie gras rapidamente, 30-45 segundos de cada lado, até dourar por fora e ficar macio por dentro. Retire imediatamente (cozinha muito rápido).",
      "Na frigideira onde selou a carne, deglaceie com o Madeira, raspando o fundo, e deixe reduzir pela metade.",
      "Junte a Demi-glace e cozinhe por 3-4 minutos até encorpar. Ajuste o sal.",
      "Monte: uma torrada de brioche na base, o medalhão de filé por cima, e a fatia de foie gras selada coroando tudo.",
      "Regue com o molho de Madeira e finalize com lascas de trufa negra, se disponível. Sirva imediatamente."
    ],
    tips: [
      "O foie gras cozinha extremamente rápido e derrete se ficar tempo demais na frigideira quente — tenha tudo pronto antes de selá-lo, para servir na sequência sem demora.",
      "Prato criado em homenagem ao compositor Gioachino Rossini, famoso gourmand — um dos pratos mais luxuosos e clássicos da alta gastronomia francesa.",
      "Se não tiver foie gras disponível, o prato ainda funciona muito bem só com o filé, a torrada e o molho de Madeira."
    ]
  },

  // ===================== ENSOPADOS E BRASEADOS =====================
  {
    name: "Boeuf Bourguignon",
    subgroup: "Ensopados e Braseados",
    desc: "Ensopado francês clássico de carne bovina cozida lentamente em vinho tinto com bacon, cogumelos e cebolinhas pérola.",
    origin: "França (Borgonha)",
    time: { prep: "30 min", cook: "3h", total: "3h30" },
    yield: "6 porções",
    difficulty: "Média",
    tags: ["contains:suino", "ingredient:vinho", "ingredient:cogumelo"],
    ingredients: [
      "1,5 kg de acém ou músculo bovino, em cubos grandes",
      "200 g de bacon em cubos",
      "2 cenouras em rodelas grossas",
      "2 cebolas em cubos",
      "3 dentes de alho picados",
      "750 ml de vinho tinto encorpado (Borgonha, se possível)",
      "500 ml de fundo escuro de carne",
      "2 colheres (sopa) de extrato de tomate",
      "1 folha de louro, 2 ramos de tomilho",
      "300 g de cogumelos paris",
      "20 cebolinhas pérola",
      "30 g de farinha de trigo",
      "Óleo, sal e pimenta a gosto",
      "Salsinha picada para finalizar"
    ],
    ingredientsStructured: [
      {
        raw: "1,5 kg de acém ou músculo bovino, em cubos grandes",
        group: null,
        items: [
          { qty: 1.5, qtyRange: null, unit: "quilograma", item: "acém", prep: "em cubos grandes", alt: "músculo bovino", optional: false, isReference: false },
        ],
      },
      {
        raw: "200 g de bacon em cubos",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "grama", item: "bacon", prep: "em cubos", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 cenouras em rodelas grossas",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "cenouras", prep: "em rodelas grossas", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 cebolas em cubos",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "cebolas", prep: "em cubos", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "3 dentes de alho picados",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: "dente", item: "alho", prep: "picados", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "750 ml de vinho tinto encorpado (Borgonha, se possível)",
        group: null,
        items: [
          { qty: 750, qtyRange: null, unit: "mililitro", item: "vinho tinto encorpado", prep: "borgonha, se possível", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "500 ml de fundo escuro de carne",
        group: null,
        items: [
          { qty: 500, qtyRange: null, unit: "mililitro", item: "fundo escuro de carne", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 colheres (sopa) de extrato de tomate",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "colher-sopa", item: "extrato de tomate", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 folha de louro, 2 ramos de tomilho",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "folha", item: "louro", prep: null, alt: null, optional: false, isReference: false },
          { qty: 2, qtyRange: null, unit: "ramo", item: "tomilho", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "300 g de cogumelos paris",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "grama", item: "cogumelos paris", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "20 cebolinhas pérola",
        group: null,
        items: [
          { qty: 20, qtyRange: null, unit: null, item: "cebolinhas pérola", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "30 g de farinha de trigo",
        group: null,
        items: [
          { qty: 30, qtyRange: null, unit: "grama", item: "farinha de trigo", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Óleo, sal e pimenta a gosto",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "óleo", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "sal", prep: "a gosto", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "pimenta", prep: "a gosto", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Salsinha picada para finalizar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "salsinha", prep: "picada para finalizar", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Seque bem a carne com papel toalha e tempere com sal e pimenta. Numa panela funda, doure o bacon até crocante, retire e reserve, deixando a gordura na panela.",
      "Sele a carne em lotes (sem lotar a panela) na gordura do bacon, até dourar bem por todos os lados. Retire e reserve.",
      "Na mesma panela, doure a cenoura e a cebola em cubos por 8 minutos. Junte o alho e o extrato de tomate, refogue por 2 minutos.",
      "Polvilhe a farinha por cima e mexa por 1-2 minutos.",
      "Volte a carne e o bacon à panela. Cubra com o vinho tinto e o fundo escuro, junte louro e tomilho.",
      "Deixe ferver, abaixe o fogo, tampe e cozinhe em fogo baixo (ou no forno a 160°C) por 2h30-3 horas, até a carne ficar extremamente macia.",
      "Enquanto isso, salteie as cebolinhas pérola e os cogumelos numa frigideira à parte até dourarem, e reserve.",
      "Nos últimos 20 minutos de cozimento, junte as cebolinhas e cogumelos salteados à panela.",
      "Ajuste sal e pimenta, finalize com salsinha picada e sirva com purê de batata, macarrão ou pão."
    ],
    tips: [
      "É o ensopado francês mais famoso do mundo — a base (vinho tinto, bacon, cogumelos, cebolinhas pérola) reaparece em outros pratos como os Ovos en Meurette.",
      "Use um corte de carne com bastante colágeno (acém, músculo) — cortes magros ficam secos depois do cozimento longo.",
      "Como quase todo braseado, fica ainda melhor no dia seguinte."
    ]
  },
  {
    name: "Ossobuco",
    subgroup: "Ensopados e Braseados",
    desc: "Posta de canela bovina com osso e tutano, braseada em vinho branco e tomate até desmanchar, finalizada com gremolata fresca.",
    origin: "Itália (Milão)",
    time: { prep: "20 min", cook: "2h", total: "2h20" },
    yield: "4 porções",
    difficulty: "Média",
    tags: ["ingredient:vinho", "ingredient:tomate", "ingredient:limao"],
    ingredients: [
      "4 postas de ossobuco (canela bovina ou de vitela com o osso e o tutano), cerca de 4 cm de espessura",
      "Farinha de trigo, para empanar levemente",
      "3 colheres (sopa) de azeite ou manteiga",
      "1 cebola, 1 cenoura, 1 talo de salsão — em cubos (mirepoix)",
      "2 dentes de alho picados",
      "200 ml de vinho branco seco",
      "400 g de tomate pelado picado",
      "500 ml de fundo de carne ou caldo",
      "1 folha de louro, 1 ramo de tomilho",
      "Para a gremolata: raspas de 1 limão, 1 dente de alho picado bem fino, salsinha picada",
      "Sal e pimenta a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "4 postas de ossobuco (canela bovina ou de vitela com o osso e o tutano), cerca de 4 cm de espessura",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: "posta", item: "ossobuco", prep: "canela bovina ou de vitela com o osso e o tutano, cerca de 4 cm de espessura", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Farinha de trigo, para empanar levemente",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "farinha de trigo", prep: "para empanar levemente", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "3 colheres (sopa) de azeite ou manteiga",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: "colher-sopa", item: "azeite", prep: null, alt: "manteiga", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 cebola, 1 cenoura, 1 talo de salsão — em cubos (mirepoix)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cebola", prep: "em cubos (mirepoix)", alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: null, item: "cenoura", prep: "em cubos (mirepoix)", alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "talo", item: "salsão", prep: "em cubos (mirepoix)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 dentes de alho picados",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "dente", item: "alho", prep: "picados", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "200 ml de vinho branco seco",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "mililitro", item: "vinho branco seco", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "400 g de tomate pelado picado",
        group: null,
        items: [
          { qty: 400, qtyRange: null, unit: "grama", item: "tomate pelado", prep: "picado", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "500 ml de fundo de carne ou caldo",
        group: null,
        items: [
          { qty: 500, qtyRange: null, unit: "mililitro", item: "fundo de carne", prep: null, alt: "caldo", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 folha de louro, 1 ramo de tomilho",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "folha", item: "louro", prep: null, alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "ramo", item: "tomilho", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Para a gremolata: raspas de 1 limão, 1 dente de alho picado bem fino, salsinha picada",
        group: "gremolata",
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "raspas de limão", prep: null, alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "dente", item: "alho", prep: "picado bem fino", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "salsinha", prep: "picada", alt: null, optional: false, isReference: false },
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
      "Faça pequenos cortes na membrana ao redor de cada posta de ossobuco (evita que curvem durante o cozimento). Tempere com sal e pimenta, e passe levemente na farinha.",
      "Aqueça o azeite numa panela larga e doure as postas por todos os lados, até formar uma crosta dourada. Retire e reserve.",
      "Na mesma panela, refogue o mirepoix até dourar, 8 minutos. Junte o alho e refogue por 1 minuto.",
      "Deglaceie com o vinho branco, raspando o fundo da panela, e deixe reduzir pela metade.",
      "Junte o tomate picado e o fundo de carne, adicione louro e tomilho.",
      "Volte as postas de ossobuco à panela, o líquido deve cobri-las até pouco mais da metade.",
      "Tampe e cozinhe em fogo baixo (ou no forno a 160°C) por 1h30-2 horas, até a carne ficar extremamente macia e quase se soltando do osso.",
      "Prepare a gremolata misturando as raspas de limão, alho picado bem fino e salsinha.",
      "Sirva o ossobuco com o molho da panela, finalizado com a gremolata fresca por cima — tradicionalmente acompanhado do Risotto alla Milanese."
    ],
    tips: [
      "O tutano dentro do osso é uma iguaria à parte — sirva com uma colher especial (ou pequena) para que os convidados possam retirá-lo e saboreá-lo.",
      "A gremolata fresca por cima, adicionada só na hora de servir, é o que dá o contraste de frescor essencial ao prato — não pule essa etapa achando que é só decoração.",
      "A combinação clássica com Risotto alla Milanese (ver receita, categoria Risotos) não é acaso: os dois nasceram juntos na tradição milanesa."
    ]
  },
  {
    name: "Goulash",
    subgroup: "Ensopados e Braseados",
    desc: "Ensopado húngaro caldoso de carne bovina com páprica, cebola, tomate e pimentão, tradicionalmente servido com creme azedo.",
    origin: "Hungria",
    time: { prep: "20 min", cook: "2h", total: "2h20" },
    yield: "6 porções",
    difficulty: "Fácil",
    tags: ["ingredient:tomate", "ingredient:pimentao"],
    ingredients: [
      "1,2 kg de acém bovino, em cubos grandes",
      "3 colheres (sopa) de banha ou óleo",
      "3 cebolas grandes, em cubos",
      "3 dentes de alho picados",
      "3 colheres (sopa) de páprica doce húngara (+ 1 colher chá de páprica picante, opcional)",
      "1 colher (chá) de cominho em pó",
      "2 tomates picados sem pele",
      "1 pimentão vermelho picado",
      "1 L de caldo de carne",
      "2 batatas grandes, em cubos (opcional, tradicional em algumas versões)",
      "Sal e pimenta a gosto",
      "Creme azedo (sour cream) para servir (opcional)"
    ],
    ingredientsStructured: [
      {
        raw: "1,2 kg de acém bovino, em cubos grandes",
        group: null,
        items: [
          { qty: 1.2, qtyRange: null, unit: "quilograma", item: "acém bovino", prep: "em cubos grandes", alt: null, optional: false, isReference: false },
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
        raw: "3 cebolas grandes, em cubos",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: null, item: "cebolas grandes", prep: "em cubos", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "3 dentes de alho picados",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: "dente", item: "alho", prep: "picados", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "3 colheres (sopa) de páprica doce húngara (+ 1 colher chá de páprica picante, opcional)",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: "colher-sopa", item: "páprica doce húngara", prep: null, alt: "1 colher (chá) de páprica picante (opcional)", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (chá) de cominho em pó",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "cominho em pó", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "1 pimentão vermelho picado",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "pimentão vermelho", prep: "picado", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 L de caldo de carne",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "litro", item: "caldo de carne", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 batatas grandes, em cubos (opcional, tradicional em algumas versões)",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "batatas", prep: "grandes, em cubos; tradicional em algumas versões", alt: null, optional: true, isReference: false },
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
      {
        raw: "Creme azedo (sour cream) para servir (opcional)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "creme azedo (sour cream)", prep: "para servir", alt: null, optional: true, isReference: false },
        ],
      },
    ],
    steps: [
      "Aqueça a banha numa panela funda e refogue a cebola em fogo médio-baixo até ficar bem macia e dourada, 15 minutos — esse é o passo que dá a base doce característica do prato.",
      "Tempere a carne com sal e junte à panela, selando por todos os lados.",
      "Retire a panela do fogo por um instante e adicione a páprica, mexendo rapidamente (isso evita que ela queime e fique amarga em contato direto com o fogo).",
      "Volte ao fogo, junte o alho, o cominho, o tomate e o pimentão. Refogue por 3-4 minutos.",
      "Cubra com o caldo de carne, deixe ferver, tampe e cozinhe em fogo baixo por 1h30, até a carne começar a ficar macia.",
      "Se for usar batatas, junte-as e cozinhe por mais 25-30 minutos, até tudo ficar macio e o caldo encorpado.",
      "Ajuste sal e pimenta. Sirva quente, com uma colher de creme azedo por cima, se desejar, acompanhado de pão ou Spätzle (ver receita, categoria Massas)."
    ],
    tips: [
      "Retirar a panela do fogo antes de adicionar a páprica é um truque importante — o pó queima muito rápido em contato direto com superfície quente, ficando amargo.",
      "Goulash é mais um ensopado caldoso do que um guisado espesso — não deixe reduzir demais, o caldo abundante e avermelhado é característico do prato.",
      "Usar páprica húngara de boa qualidade (defumada ou doce) faz uma diferença enorme comparado a páprica genérica."
    ]
  },

  // ===================== PRATOS DO DIA A DIA =====================
  {
    name: "Bife à Parmigiana",
    subgroup: "Pratos do Dia a Dia",
    desc: "Bife empanado e frito, coberto com molho de tomate, muçarela e parmesão, gratinado no forno até derreter.",
    origin: "Brasil / Itália (adaptação)",
    time: { prep: "20 min", cook: "25 min", total: "45 min" },
    yield: "4 porções",
    difficulty: "Fácil",
    tags: ["ingredient:tomate", "ingredient:queijo"],
    ingredients: [
      "4 bifes de contrafilé ou patinho, finos",
      "Sal e pimenta a gosto",
      "Farinha de trigo, 2 ovos batidos e farinha de rosca — para empanar",
      "Óleo para fritar",
      "500 ml de molho de tomate (ver receita Sauce Tomate, categoria Molhos)",
      "200 g de muçarela fatiada",
      "80 g de parmesão ralado",
      "Manjericão fresco (opcional)"
    ],
    ingredientsStructured: [
      {
        raw: "4 bifes de contrafilé ou patinho, finos",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: null, item: "bifes de contrafilé", prep: "finos", alt: "patinho", optional: false, isReference: false },
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
      {
        raw: "Farinha de trigo, 2 ovos batidos e farinha de rosca — para empanar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "farinha de trigo", prep: "para empanar", alt: null, optional: false, isReference: false },
          { qty: 2, qtyRange: null, unit: null, item: "ovos", prep: "batidos, para empanar", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "farinha de rosca", prep: "para empanar", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Óleo para fritar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "óleo", prep: "para fritar", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "500 ml de molho de tomate (ver receita Sauce Tomate, categoria Molhos)",
        group: null,
        items: [
          { qty: 500, qtyRange: null, unit: "mililitro", item: "molho de tomate", prep: "ver receita sauce tomate, categoria molhos", alt: null, optional: false, isReference: true },
        ],
      },
      {
        raw: "200 g de muçarela fatiada",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "grama", item: "muçarela", prep: "fatiada", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "80 g de parmesão ralado",
        group: null,
        items: [
          { qty: 80, qtyRange: null, unit: "grama", item: "parmesão", prep: "ralado", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Manjericão fresco (opcional)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "manjericão fresco", prep: null, alt: null, optional: true, isReference: false },
        ],
      },
    ],
    steps: [
      "Tempere os bifes com sal e pimenta.",
      "Passe cada bife na farinha, depois no ovo batido e por fim na farinha de rosca, pressionando para aderir.",
      "Frite em óleo quente até dourar por igual dos dois lados. Escorra em papel toalha.",
      "Disponha os bifes fritos numa assadeira, cubra generosamente com o molho de tomate.",
      "Cubra com as fatias de muçarela e polvilhe com o parmesão ralado.",
      "Leve ao forno pré-aquecido a 200°C por 10-15 minutos, até o queijo derreter e dourar levemente.",
      "Finalize com manjericão fresco, se desejar, e sirva com arroz e batata frita ou purê."
    ],
    tips: [
      "Fritar os bifes até ficarem crocantes antes de cobrir com molho é o que evita que fiquem murchos e moles no forno.",
      "Prato clássico do cardápio de restaurantes brasileiros, adaptado da 'cotoletta alla parmigiana' italiana, mas com identidade própria por aqui.",
      "Use um molho de tomate bem temperado e não muito líquido, para não encharcar o empanado."
    ]
  },
  {
    name: "Filé ao Molho Madeira",
    subgroup: "Pratos do Dia a Dia",
    desc: "Medalhões de filé mignon selados, servidos com molho encorpado de vinho Madeira, échalote e cogumelos.",
    origin: "Portugal / Internacional",
    time: { prep: "10 min", cook: "20 min", total: "30 min" },
    yield: "2-4 porções",
    difficulty: "Fácil",
    tags: ["ingredient:vinho", "ingredient:cogumelo"],
    ingredients: [
      "4 medalhões de filé mignon, cerca de 150-180 g cada",
      "1 colher (sopa) de óleo",
      "30 g de manteiga (dividida)",
      "1 cebola picada",
      "150 g de cogumelos fatiados (opcional)",
      "150 ml de vinho Madeira",
      "200 ml de Demi-glace ou fundo escuro reduzido (ver receitas, categoria Molhos)",
      "Sal e pimenta a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "4 medalhões de filé mignon, cerca de 150-180 g cada",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: null, item: "medalhões de filé mignon", prep: "cerca de 150-180 g cada", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (sopa) de óleo",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "óleo", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "30 g de manteiga (dividida)",
        group: null,
        items: [
          { qty: 30, qtyRange: null, unit: "grama", item: "manteiga (dividida)", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "150 g de cogumelos fatiados (opcional)",
        group: null,
        items: [
          { qty: 150, qtyRange: null, unit: "grama", item: "cogumelos", prep: "fatiados", alt: null, optional: true, isReference: false },
        ],
      },
      {
        raw: "150 ml de vinho Madeira",
        group: null,
        items: [
          { qty: 150, qtyRange: null, unit: "mililitro", item: "vinho madeira", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "200 ml de Demi-glace ou fundo escuro reduzido (ver receitas, categoria Molhos)",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "mililitro", item: "demi-glace", prep: "ver receitas, categoria molhos", alt: "fundo escuro reduzido", optional: false, isReference: true },
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
      "Tempere os medalhões com sal e pimenta.",
      "Aqueça o óleo com metade da manteiga numa frigideira em fogo alto. Sele os medalhões por 3-4 minutos de cada lado, conforme o ponto desejado. Retire e reserve, cobertos.",
      "Na mesma frigideira, abaixe o fogo para médio, adicione o restante da manteiga e refogue a cebola até translúcida.",
      "Se for usar, junte os cogumelos e refogue até dourarem.",
      "Deglaceie com o vinho Madeira, raspando o fundo da frigideira, e deixe reduzir pela metade.",
      "Junte a Demi-glace ou o fundo escuro reduzido, cozinhe por 3-5 minutos até o molho encorpar.",
      "Ajuste o sal, volte os medalhões à frigideira só para aquecer no molho, e sirva imediatamente."
    ],
    stepIngredients: [
      null,
      [{ entryIndex: 2, itemIndex: 0, fraction: 0.5 }],
      [{ entryIndex: 2, itemIndex: 0, fraction: 0.5 }],
      null,
      null,
      null,
      null,
    ],
    tips: [
      "Use um vinho Madeira de verdade (não conhaque ou vinho do Porto) — o sabor levemente oxidado e adocicado é a assinatura do prato.",
      "É um dos pratos mais clássicos e queridos de restaurantes portugueses e de hotéis, simples de fazer mas com sabor sofisticado.",
      "Combina muito bem com purê de batata ou arroz branco simples, que absorvem bem o molho."
    ]
  },
];
