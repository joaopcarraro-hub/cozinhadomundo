// MÉXICO
// Nota: Huevos Rancheros já está na categoria Preparações Clássicas com Ovos.
window.RECIPES = window.RECIPES || {};
window.RECIPES["mexico"] = [

  // ===================== CARNES DE PANELA =====================
  {
    name: "Birria",
    subgroup: "Carnes de Panela",
    desc: "Carne bovina cozida lentamente num molho de pimentas secas tostadas, servida desfiada em tacos com o caldo (consomê) para mergulhar.",
    origin: "México (Jalisco)",
    time: { prep: "30 min + 1h marinada", cook: "3h", total: "≈4h30" },
    yield: "6-8 porções",
    difficulty: "Média",
    tags: ["protein:boi", "ingredient:milho"],
    ingredients: [
      "2 kg de paleta ou costela bovina, em pedaços grandes",
      "6 pimentas guajillo secas, sem sementes",
      "3 pimentas ancho secas, sem sementes",
      "2 pimentas chipotle secas (ou em conserva)",
      "1 cebola, 6 dentes de alho",
      "2 tomates",
      "1 colher (sopa) de cominho, 1 colher (chá) de orégano, 2 cravos, 1 pau de canela pequeno",
      "3 colheres (sopa) de vinagre",
      "1,5 L de caldo de carne ou água",
      "Tortillas de milho, cebola e coentro picados, limão, para servir"
    ],
    ingredientsStructured: [
      {
        raw: "2 kg de paleta ou costela bovina, em pedaços grandes",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "quilograma", item: "paleta", prep: null, alt: "costela bovina, em pedaços grandes", optional: false, isReference: false },
        ],
      },
      {
        raw: "6 pimentas guajillo secas, sem sementes",
        group: null,
        items: [
          { qty: 6, qtyRange: null, unit: null, item: "pimentas guajillo secas", prep: "sem sementes", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "3 pimentas ancho secas, sem sementes",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: null, item: "pimentas ancho secas", prep: "sem sementes", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 pimentas chipotle secas (ou em conserva)",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "pimentas chipotle secas", prep: null, alt: "em conserva", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 cebola, 6 dentes de alho",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cebola", prep: null, alt: null, optional: false, isReference: false },
          { qty: 6, qtyRange: null, unit: "dente", item: "alho", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 tomates",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "tomates", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (sopa) de cominho, 1 colher (chá) de orégano, 2 cravos, 1 pau de canela pequeno",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "cominho", prep: null, alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "orégano", prep: null, alt: null, optional: false, isReference: false },
          { qty: 2, qtyRange: null, unit: null, item: "cravos", prep: null, alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: null, item: "pau de canela pequeno", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "3 colheres (sopa) de vinagre",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: "colher-sopa", item: "vinagre", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1,5 L de caldo de carne ou água",
        group: null,
        items: [
          { qty: 1.5, qtyRange: null, unit: "litro", item: "caldo de carne", prep: null, alt: "água", optional: false, isReference: false },
        ],
      },
      {
        raw: "Tortillas de milho, cebola e coentro picados, limão, para servir",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "tortillas de milho", prep: "para servir", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "cebola", prep: "picada, para servir", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "coentro", prep: "picado, para servir", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "limão", prep: "para servir", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Toste as pimentas secas numa frigideira seca por 1-2 minutos de cada lado, até perfumarem (sem queimar). Hidrate em água quente por 15-20 minutos.",
      "Toste também a cebola, alho e tomate numa frigideira seca (ou na grelha) até pegarem cor em pontos, isso aprofunda o sabor.",
      "Bata as pimentas hidratadas (escorridas) com a cebola, alho, tomate tostados, cominho, orégano, cravo, canela e vinagre no liquidificador, adicionando um pouco da água de hidratação das pimentas, até formar uma pasta lisa.",
      "Tempere a carne com sal e cubra com essa pasta, massageando bem. Deixe marinar por no mínimo 1 hora (idealmente durante a noite).",
      "Transfira a carne marinada para uma panela funda, cubra com o caldo/água.",
      "Tampe e cozinhe em fogo baixo (ou no forno a 160°C) por 2h30-3 horas, até a carne ficar extremamente macia e se desfazendo.",
      "Retire a carne, desfie com dois garfos. Coe o caldo de cozimento (o consomê), que fica rico e avermelhado.",
      "Sirva a carne desfiada em tacos com tortillas de milho, acompanhada do consomê quente à parte para mergulhar (birria estilo 'quesabirria', se adicionar queijo derretido nos tacos antes de dourar)."
    ],
    tips: [
      "Tostar as pimentas secas e os vegetais antes de bater é o que dá profundidade e complexidade ao molho — não pule essa etapa achando que é dispensável.",
      "O consomê (caldo de cozimento) é tão importante quanto a carne — muitos preferem mergulhar os tacos nele antes de comer, ou tomá-lo à parte como uma sopa.",
      "A versão 'quesabirria' (tacos com queijo, dourados numa chapa até ficarem crocantes, servidos com o consomê para mergulhar) se tornou um fenômeno viral e é uma ótima forma de servir as sobras."
    ]
  },
  {
    name: "Mole Poblano",
    subgroup: "Carnes de Panela",
    desc: "Frango em molho escuro e encorpado de pimentas secas, especiarias, oleaginosas e um toque de chocolate amargo.",
    origin: "México (Puebla)",
    time: { prep: "40 min", cook: "1h30", total: "2h10" },
    yield: "6-8 porções",
    difficulty: "Alta",
    tags: ["protein:frango", "protein:ave", "ingredient:chocolate", "ingredient:castanha", "ingredient:milho", "ingredient:tomate"],
    ingredients: [
      "1 frango inteiro, em pedaços (ou peru)",
      "4 pimentas ancho secas, 3 pimentas mulato secas, 2 pimentas pasilla secas, sem sementes",
      "1 cebola, 4 dentes de alho",
      "2 tomates",
      "50 g de amêndoas, 30 g de amendoim, 30 g de passas",
      "1 tortilla de milho, torrada e picada",
      "1 fatia de pão amanhecido, torrada",
      "40 g de chocolate amargo, picado",
      "1 colher (chá) de canela em pó, 1 colher (chá) de cominho, 2 cravos",
      "800 ml de caldo de galinha",
      "Óleo, sal a gosto",
      "Gergelim torrado, para finalizar"
    ],
    ingredientsStructured: [
      {
        raw: "1 frango inteiro, em pedaços (ou peru)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "frango inteiro", prep: "em pedaços", alt: "peru", optional: false, isReference: false },
        ],
      },
      {
        raw: "4 pimentas ancho secas, 3 pimentas mulato secas, 2 pimentas pasilla secas, sem sementes",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: null, item: "pimentas ancho secas", prep: "sem sementes", alt: null, optional: false, isReference: false },
          { qty: 3, qtyRange: null, unit: null, item: "pimentas mulato secas", prep: "sem sementes", alt: null, optional: false, isReference: false },
          { qty: 2, qtyRange: null, unit: null, item: "pimentas pasilla secas", prep: "sem sementes", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 cebola, 4 dentes de alho",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cebola", prep: null, alt: null, optional: false, isReference: false },
          { qty: 4, qtyRange: null, unit: "dente", item: "alho", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 tomates",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "tomates", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "50 g de amêndoas, 30 g de amendoim, 30 g de passas",
        group: null,
        items: [
          { qty: 50, qtyRange: null, unit: "grama", item: "amêndoas", prep: null, alt: null, optional: false, isReference: false },
          { qty: 30, qtyRange: null, unit: "grama", item: "amendoim", prep: null, alt: null, optional: false, isReference: false },
          { qty: 30, qtyRange: null, unit: "grama", item: "passas", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 tortilla de milho, torrada e picada",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "tortilla de milho", prep: "torrada e picada", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 fatia de pão amanhecido, torrada",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "fatia", item: "pão amanhecido", prep: "torrada", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "40 g de chocolate amargo, picado",
        group: null,
        items: [
          { qty: 40, qtyRange: null, unit: "grama", item: "chocolate amargo", prep: "picado", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (chá) de canela em pó, 1 colher (chá) de cominho, 2 cravos",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "canela em pó", prep: null, alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "cominho", prep: null, alt: null, optional: false, isReference: false },
          { qty: 2, qtyRange: null, unit: null, item: "cravos", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "800 ml de caldo de galinha",
        group: null,
        items: [
          { qty: 800, qtyRange: null, unit: "mililitro", item: "caldo de galinha", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Óleo, sal a gosto",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "óleo", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "sal", prep: "a gosto", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Gergelim torrado, para finalizar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "gergelim", prep: "torrado, para finalizar", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Tempere o frango com sal e cozinhe em água ou caldo até ficar macio, cerca de 35-40 minutos. Reserve a carne e o caldo separadamente.",
      "Toste as pimentas secas numa frigideira seca, sem queimar, e hidrate em água quente por 15-20 minutos.",
      "Toste a cebola, alho e tomate numa frigideira ou no forno até pegarem cor.",
      "Numa frigideira com um pouco de óleo, toste rapidamente e separadamente as amêndoas, amendoim, passas, tortilla picada e pão, até dourarem levemente.",
      "Bata as pimentas hidratadas com os vegetais tostados, as oleaginosas e pão tostados, canela, cominho e cravo no liquidificador, adicionando caldo de galinha aos poucos, até formar uma pasta bem lisa (pode precisar bater em lotes).",
      "Numa panela grande, aqueça um pouco de óleo e frite essa pasta em fogo médio por 10-15 minutos, mexendo sempre (o molho 'salpica' bastante, tenha cuidado).",
      "Adicione o restante do caldo de galinha reservado, ajustando a consistência (deve ficar encorpado, como um molho espesso, não líquido).",
      "Junte o chocolate picado, mexendo até derreter completamente e incorporar.",
      "Cozinhe em fogo baixo por 20-30 minutos, mexendo ocasionalmente, até o molho ficar bem escuro e encorpado.",
      "Adicione o frango cozido ao molho, aquecendo bem. Ajuste o sal. Finalize com gergelim torrado e sirva com arroz e tortillas."
    ],
    stepIngredients: [
      null,
      null,
      null,
      null,
      null,
      [{ entryIndex: 9, itemIndex: 0, fraction: 0.3 }],
      [{ entryIndex: 9, itemIndex: 0, fraction: 0.7 }],
      null,
      null,
      null,
    ],
    tips: [
      "O chocolate no mole não é para deixar doce — é usado em pequena quantidade para dar profundidade e amargor complexo, equilibrando as pimentas e especiarias.",
      "É um dos pratos mais trabalhosos e simbólicos da culinária mexicana, com dúzias de ingredientes e etapas de torrefação — tradicionalmente reservado para grandes celebrações.",
      "O molho de mole (sem a carne) pode ser feito com grande antecedência e até congelado — o trabalho vale a pena fazer em maior quantidade."
    ]
  },
  {
    name: "Pozole",
    subgroup: "Carnes de Panela",
    desc: "Sopa/caldo de porco com milho pozole (hominy) em molho de pimentas, servida com repolho, rabanete e limão à parte.",
    origin: "México",
    time: { prep: "25 min", cook: "2h30", total: "2h55" },
    yield: "6-8 porções",
    difficulty: "Média",
    tags: ["protein:suino", "ingredient:milho", "ingredient:limao"],
    ingredients: [
      "1 kg de paleta de porco, em pedaços grandes",
      "800 g de milho para pozole (hominy), pré-cozido ou em lata, escorrido",
      "4 pimentas guajillo secas, sem sementes",
      "2 pimentas ancho secas, sem sementes",
      "1 cebola, 6 dentes de alho",
      "1 colher (sopa) de orégano seco",
      "2 L de água ou caldo",
      "Sal a gosto",
      "Para servir: repolho fatiado, rabanete fatiado, cebola picada, orégano, limão, tortillas fritas (tostadas) ou totopos"
    ],
    ingredientsStructured: [
      {
        raw: "1 kg de paleta de porco, em pedaços grandes",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "quilograma", item: "paleta de porco", prep: "em pedaços grandes", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "800 g de milho para pozole (hominy), pré-cozido ou em lata, escorrido",
        group: null,
        items: [
          { qty: 800, qtyRange: null, unit: "grama", item: "milho para pozole (hominy)", prep: "pré-cozido ou em lata, escorrido", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "4 pimentas guajillo secas, sem sementes",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: null, item: "pimentas guajillo secas", prep: "sem sementes", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 pimentas ancho secas, sem sementes",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "pimentas ancho secas", prep: "sem sementes", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 cebola, 6 dentes de alho",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cebola", prep: null, alt: null, optional: false, isReference: false },
          { qty: 6, qtyRange: null, unit: "dente", item: "alho", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (sopa) de orégano seco",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "orégano seco", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 L de água ou caldo",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "litro", item: "água", prep: null, alt: "caldo", optional: false, isReference: false },
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
        raw: "Para servir: repolho fatiado, rabanete fatiado, cebola picada, orégano, limão, tortillas fritas (tostadas) ou totopos",
        group: "servir",
        items: [
          { qty: null, qtyRange: null, unit: null, item: "repolho", prep: "fatiado", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "rabanete", prep: "fatiado", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "cebola", prep: "picada", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "orégano", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "limão", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "tortillas fritas (tostadas)", prep: null, alt: "totopos", optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Cozinhe a paleta de porco em água com metade da cebola e 2 dentes de alho, até ficar macia, cerca de 1h30-2 horas. Reserve a carne e o caldo.",
      "Toste as pimentas secas numa frigideira seca (sem queimar) e hidrate em água quente por 15-20 minutos.",
      "Bata as pimentas hidratadas com o restante da cebola, alho e orégano no liquidificador, com um pouco da água de hidratação, até formar uma pasta lisa. Coe para remover pele residual.",
      "Junte essa pasta ao caldo de cozimento da carne, temperando e ajustando o sal.",
      "Adicione o milho pozole (hominy) e a carne desfiada ou em pedaços, cozinhando em fogo médio-baixo por mais 30-40 minutos, até os sabores se incorporarem bem.",
      "Sirva bem quente, em tigelas fundas, com os acompanhamentos (repolho, rabanete, cebola, orégano, limão) à parte, para cada um montar o próprio prato.",
      "Acompanhe com tortillas tostadas ou totopos crocantes."
    ],
    stepIngredients: [
      [{ entryIndex: 4, itemIndex: 0, fraction: 0.5 }, { entryIndex: 4, itemIndex: 1, fraction: 0.333 }],
      null,
      [{ entryIndex: 4, itemIndex: 0, fraction: 0.5 }, { entryIndex: 4, itemIndex: 1, fraction: 0.667 }],
      null,
      null,
      null,
      null,
    ],
    tips: [
      "O milho pozole (hominy, milho nixtamalizado) tem textura e sabor bem diferentes do milho comum — encontre em latas em mercados latinos, já pronto para uso.",
      "Os acompanhamentos frescos servidos à parte (repolho, rabanete, limão) não são opcionais — são parte fundamental da experiência, adicionando crocância e frescor ao caldo quente.",
      "Existem versões vermelha (com pimentas, como esta), verde (com tomatillo) e branca (sem pimenta) — todas igualmente tradicionais em diferentes regiões do México."
    ]
  },

  // ===================== TORTILLAS RECHEADAS =====================
  {
    name: "Tacos al Pastor",
    subgroup: "Tortillas Recheadas",
    desc: "Tortillas de milho com porco marinado em pimentas e grelhado, finalizadas com abacaxi caramelizado, cebola e coentro.",
    origin: "México (Cidade do México)",
    time: { prep: "25 min + 4h marinada", cook: "20 min", total: "≈4h45" },
    yield: "4 porções (≈16 tacos)",
    difficulty: "Média",
    tags: ["protein:suino", "ingredient:milho"],
    ingredients: [
      "800 g de lombo de porco, fatiado fino",
      "3 pimentas guajillo secas, sem sementes, hidratadas",
      "2 dentes de alho, 1/4 de cebola",
      "2 colheres (sopa) de vinagre",
      "1 colher (chá) de cominho, 1 colher (chá) de orégano",
      "100 g de abacaxi picado (dividido)",
      "16 tortillas de milho pequenas",
      "Cebola e coentro picados, limão, para servir",
      "Molho de pimenta a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "800 g de lombo de porco, fatiado fino",
        group: null,
        items: [
          { qty: 800, qtyRange: null, unit: "grama", item: "lombo de porco", prep: "fatiado fino", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "3 pimentas guajillo secas, sem sementes, hidratadas",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: null, item: "pimentas guajillo secas", prep: "sem sementes, hidratadas", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 dentes de alho, 1/4 de cebola",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "dente", item: "alho", prep: null, alt: null, optional: false, isReference: false },
          { qty: 0.25, qtyRange: null, unit: null, item: "cebola", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 colheres (sopa) de vinagre",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "colher-sopa", item: "vinagre", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (chá) de cominho, 1 colher (chá) de orégano",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "cominho", prep: null, alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "orégano", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "100 g de abacaxi picado (dividido)",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "grama", item: "abacaxi", prep: "picado (dividido)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "16 tortillas de milho pequenas",
        group: null,
        items: [
          { qty: 16, qtyRange: null, unit: null, item: "tortillas de milho pequenas", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Cebola e coentro picados, limão, para servir",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "cebola", prep: "picados, para servir", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "coentro", prep: "picados, para servir", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "limão", prep: "para servir", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Molho de pimenta a gosto",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "molho de pimenta", prep: "a gosto", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Bata as pimentas hidratadas com alho, cebola, vinagre, cominho, orégano e um pouco do abacaxi picado no liquidificador, até formar uma pasta lisa.",
      "Cubra as fatias de porco com essa marinada, massageando bem. Deixe marinar na geladeira por no mínimo 4 horas (idealmente durante a noite).",
      "Aqueça uma frigideira ou chapa bem quente. Grelhe as fatias de porco marinado em lotes, por 2-3 minutos de cada lado, até dourarem bem e cozinharem por completo.",
      "Pique a carne grelhada em pedaços pequenos.",
      "Grelhe rapidamente o restante do abacaxi picado na mesma chapa, até caramelizar levemente.",
      "Aqueça as tortillas de milho numa frigideira seca, poucos segundos de cada lado.",
      "Monte os tacos: tortilla, porco picado, um pouco de abacaxi grelhado, cebola e coentro picados.",
      "Sirva com limão e molho de pimenta à parte."
    ],
    stepIngredients: [
      [{ entryIndex: 5, itemIndex: 0, fraction: 0.25 }],
      null,
      null,
      null,
      [{ entryIndex: 5, itemIndex: 0, fraction: 0.75 }],
      null,
      null,
      null,
    ],
    tips: [
      "A técnica tradicional usa um espeto vertical rotativo (trompo), inspirado no shawarma trazido por imigrantes libaneses ao México — a versão de frigideira/chapa recria o sabor de forma acessível em casa.",
      "O abacaxi na marinada e grelhado por cima não é acidente — o contraste doce com a carne picante e defumada é a assinatura do prato.",
      "Empilhar fatias finas de carne marinada (imitando o trompo) e assar no forno em fatias empilhadas é outra técnica caseira que se aproxima do resultado tradicional."
    ]
  },
  {
    name: "Enchiladas",
    subgroup: "Tortillas Recheadas",
    desc: "Tortillas de milho recheadas com frango desfiado, mergulhadas em molho de pimenta e gratinadas com queijo no forno.",
    origin: "México",
    time: { prep: "25 min", cook: "30 min", total: "55 min" },
    yield: "4 porções (12 unidades)",
    difficulty: "Fácil",
    tags: ["protein:frango", "ingredient:milho", "ingredient:queijo"],
    ingredients: [
      "12 tortillas de milho",
      "400 g de frango cozido e desfiado",
      "4 pimentas guajillo secas (ou 400g tomate para versão verde/vermelha simples)",
      "2 dentes de alho, 1/4 de cebola",
      "300 ml de caldo de galinha",
      "Óleo, para fritar levemente as tortillas",
      "150 g de queijo tipo mussarela ou queijo fresco mexicano, ralado",
      "Creme de leite ou crema mexicana, cebola roxa fatiada, coentro, para finalizar"
    ],
    ingredientsStructured: [
      {
        raw: "12 tortillas de milho",
        group: null,
        items: [
          { qty: 12, qtyRange: null, unit: null, item: "tortillas de milho", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "400 g de frango cozido e desfiado",
        group: null,
        items: [
          { qty: 400, qtyRange: null, unit: "grama", item: "frango", prep: "cozido e desfiado", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "4 pimentas guajillo secas (ou 400g tomate para versão verde/vermelha simples)",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: null, item: "pimentas guajillo secas", prep: null, alt: "400g tomate para versão verde/vermelha simples", optional: false, isReference: false },
        ],
      },
      {
        raw: "2 dentes de alho, 1/4 de cebola",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "dente", item: "alho", prep: null, alt: null, optional: false, isReference: false },
          { qty: 0.25, qtyRange: null, unit: null, item: "cebola", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "Óleo, para fritar levemente as tortillas",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "óleo", prep: "para fritar levemente as tortillas", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "150 g de queijo tipo mussarela ou queijo fresco mexicano, ralado",
        group: null,
        items: [
          { qty: 150, qtyRange: null, unit: "grama", item: "queijo tipo mussarela", prep: null, alt: "queijo fresco mexicano, ralado", optional: false, isReference: false },
        ],
      },
      {
        raw: "Creme de leite ou crema mexicana, cebola roxa fatiada, coentro, para finalizar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "creme de leite", prep: "para finalizar", alt: "crema mexicana", optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "cebola roxa", prep: "fatiada, para finalizar", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "coentro", prep: "para finalizar", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Toste as pimentas secas e hidrate em água quente por 15 minutos.",
      "Bata as pimentas hidratadas com alho, cebola e o caldo de galinha no liquidificador, até formar um molho liso.",
      "Coe o molho e aqueça numa panela por 8-10 minutos, temperando com sal.",
      "Numa frigideira, esquente rapidamente cada tortilla num pouco de óleo (poucos segundos de cada lado, só para amaciar e ficar mais resistente, sem fritar totalmente), escorrendo em papel toalha.",
      "Mergulhe cada tortilla no molho quente, cobrindo bem dos dois lados.",
      "Recheie cada tortilla com um pouco de frango desfiado, enrole e disponha numa travessa, com a costura para baixo.",
      "Regue com o restante do molho por cima, polvilhe com queijo ralado.",
      "Leve ao forno a 200°C por 10-15 minutos, até o queijo derreter.",
      "Finalize com creme, cebola roxa fatiada e coentro fresco antes de servir."
    ],
    tips: [
      "Passar a tortilla rapidamente no óleo antes de mergulhar no molho evita que ela rasgue ou desmanche ao enrolar — é um passo importante, não pule.",
      "Pode ser feita com molho verde (tomatillo) no lugar do vermelho de pimenta guajillo — ambas são tradicionais, apenas variações regionais.",
      "Monte só pouco antes de assar/servir — enchiladas montadas com muita antecedência ficam encharcadas e perdem a estrutura."
    ]
  },
  {
    name: "Quesadillas",
    subgroup: "Tortillas Recheadas",
    desc: "Tortilla dobrada recheada com queijo derretido (e recheio opcional), selada na frigideira até dourar por fora.",
    origin: "México",
    time: { prep: "10 min", cook: "10 min", total: "20 min" },
    yield: "4 unidades",
    difficulty: "Fácil",
    tags: ["diet:vegetariana", "ingredient:queijo", "ingredient:cogumelo"],
    ingredients: [
      "4 tortillas de trigo ou milho grandes",
      "300 g de queijo tipo mussarela ou queijo Oaxaca, ralado",
      "200 g de recheio opcional (frango desfiado, cogumelos salteados, ou flor de abóbora)",
      "1 colher (sopa) de óleo ou manteiga",
      "Guacamole e pico de gallo, para servir"
    ],
    ingredientsStructured: [
      {
        raw: "4 tortillas de trigo ou milho grandes",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: null, item: "tortillas de trigo", prep: null, alt: "milho grandes", optional: false, isReference: false },
        ],
      },
      {
        raw: "300 g de queijo tipo mussarela ou queijo Oaxaca, ralado",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "grama", item: "queijo tipo mussarela", prep: null, alt: "queijo Oaxaca, ralado", optional: false, isReference: false },
        ],
      },
      {
        raw: "200 g de recheio opcional (frango desfiado, cogumelos salteados, ou flor de abóbora)",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "grama", item: "recheio opcional", prep: "frango desfiado, cogumelos salteados, ou flor de abóbora", alt: null, optional: true, isReference: false },
        ],
      },
      {
        raw: "1 colher (sopa) de óleo ou manteiga",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "óleo", prep: null, alt: "manteiga", optional: false, isReference: false },
        ],
      },
      {
        raw: "Guacamole e pico de gallo, para servir",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "guacamole", prep: "para servir", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "pico de gallo", prep: "para servir", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Aqueça uma frigideira grande em fogo médio com um pouco de óleo ou manteiga.",
      "Distribua o queijo ralado (e o recheio adicional, se usar) sobre metade de cada tortilla.",
      "Dobre a tortilla ao meio, cobrindo o recheio.",
      "Coloque na frigideira quente e cozinhe por 2-3 minutos de cada lado, pressionando levemente com uma espátula, até a tortilla dourar e o queijo derreter completamente por dentro.",
      "Corte em triângulos e sirva imediatamente, com guacamole e pico de gallo à parte."
    ],
    tips: [
      "O queijo Oaxaca (semelhante a uma muçarela filante) é o tradicional mexicano, com boa capacidade de derreter em fios — muçarela comum é um substituto perfeitamente aceitável.",
      "Não sobrecarregue o recheio — quesadillas muito cheias vazam o queijo derretido e são difíceis de virar sem quebrar.",
      "Simples e rápida, é um dos pratos mexicanos mais versáteis, aceitando praticamente qualquer recheio disponível na geladeira."
    ]
  },
  {
    name: "Chiles Rellenos",
    subgroup: "Tortillas Recheadas",
    desc: "Pimentão poblano assado e descascado, recheado com queijo, empanado em massa de ovo aerada e frito, servido com molho de tomate.",
    origin: "México (Puebla)",
    time: { prep: "30 min", cook: "20 min", total: "50 min" },
    yield: "6 unidades",
    difficulty: "Média-alta",
    tags: ["diet:vegetariana", "contains:ovo", "ingredient:queijo", "ingredient:pimentao", "ingredient:tomate"],
    ingredients: [
      "6 pimentões poblano (ou pimentão verde grande, na falta do poblano)",
      "300 g de queijo tipo Oaxaca ou muçarela, em tiras",
      "4 ovos (claras e gemas separadas)",
      "3 colheres (sopa) de farinha de trigo (dividida)",
      "Óleo, para fritar",
      "400 g de tomate pelado, para o molho",
      "1/4 de cebola, 1 dente de alho",
      "Sal a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "6 pimentões poblano (ou pimentão verde grande, na falta do poblano)",
        group: null,
        items: [
          { qty: 6, qtyRange: null, unit: null, item: "pimentões poblano", prep: null, alt: "pimentão verde grande, na falta do poblano", optional: false, isReference: false },
        ],
      },
      {
        raw: "300 g de queijo tipo Oaxaca ou muçarela, em tiras",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "grama", item: "queijo tipo oaxaca", prep: null, alt: "muçarela, em tiras", optional: false, isReference: false },
        ],
      },
      {
        raw: "4 ovos (claras e gemas separadas)",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: null, item: "ovos", prep: "claras e gemas separadas", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "3 colheres (sopa) de farinha de trigo (dividida)",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: "colher-sopa", item: "farinha de trigo (dividida)", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "400 g de tomate pelado, para o molho",
        group: null,
        items: [
          { qty: 400, qtyRange: null, unit: "grama", item: "tomate pelado", prep: "para o molho", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1/4 de cebola, 1 dente de alho",
        group: null,
        items: [
          { qty: 0.25, qtyRange: null, unit: null, item: "cebola", prep: null, alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "dente", item: "alho", prep: null, alt: null, optional: false, isReference: false },
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
      "Toste os pimentões poblano diretamente na chama do fogão (ou sob o grill do forno), virando até a pele ficar totalmente enegrecida e bolhada por todos os lados.",
      "Transfira para um saco plástico fechado (ou tigela coberta com filme) por 10-15 minutos — o vapor solta a pele.",
      "Descasque delicadamente os pimentões (a pele deve sair fácil), faça um corte lateral e retire as sementes com cuidado, mantendo o pimentão inteiro.",
      "Recheie cada pimentão com tiras de queijo, sem superlotar.",
      "Prepare o molho: bata o tomate, cebola e alho no liquidificador, cozinhe numa panela por 12-15 minutos, temperando com sal.",
      "Bata as claras em neve firme, depois incorpore as gemas delicadamente, formando uma massa aerada.",
      "Passe cada pimentão recheado levemente na farinha, depois mergulhe na massa de ovo batido, cobrindo bem.",
      "Frite em óleo quente (170°C), virando com cuidado, até dourar por igual, 3-4 minutos.",
      "Escorra em papel toalha e sirva com o molho de tomate quente por cima."
    ],
    tips: [
      "Tostar a pele do pimentão até enegrecer completamente e depois 'suar' no saco plástico é a técnica clássica que facilita muito descascar sem rasgar a polpa.",
      "A massa de ovo batido (clara em neve + gema) é o que dá a casca fofa e dourada característica — diferente de um empanado comum com farinha de rosca.",
      "Um dos pratos mais trabalhosos e queridos da cozinha poblana, tradicionalmente servido em ocasiões festivas."
    ]
  },
  {
    name: "Tamales",
    subgroup: "Tortillas Recheadas",
    desc: "Massa de milho fofa recheada com frango ou porco em molho, embrulhada em folha de milho e cozida no vapor.",
    origin: "México",
    time: { prep: "1h + hidratar folhas", cook: "1h30", total: "2h30" },
    yield: "16 unidades",
    difficulty: "Alta",
    tags: ["protein:frango", "contains:suino", "ingredient:milho"],
    ingredients: [
      "20 folhas de milho secas (para tamales), hidratadas em água morna por 30 minutos",
      "500 g de massa de milho (masa harina, hidratada com caldo conforme instrução da embalagem)",
      "200 g de banha ou manteiga, batida até ficar fofa",
      "1 colher (sopa) de fermento em pó",
      "300 g de frango desfiado (ou porco), em molho vermelho ou verde (ver receitas Mole ou Enchiladas)",
      "Sal a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "20 folhas de milho secas (para tamales), hidratadas em água morna por 30 minutos",
        group: null,
        items: [
          { qty: 20, qtyRange: null, unit: "folha", item: "milho secas", prep: "para tamales, hidratadas em água morna por 30 minutos", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "500 g de massa de milho (masa harina, hidratada com caldo conforme instrução da embalagem)",
        group: null,
        items: [
          { qty: 500, qtyRange: null, unit: "grama", item: "massa de milho (masa harina)", prep: "hidratada com caldo conforme instrução da embalagem", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "200 g de banha ou manteiga, batida até ficar fofa",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "grama", item: "banha", prep: null, alt: "manteiga, batida até ficar fofa", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (sopa) de fermento em pó",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "fermento em pó", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "300 g de frango desfiado (ou porco), em molho vermelho ou verde (ver receitas Mole ou Enchiladas)",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "grama", item: "frango desfiado", prep: "em molho vermelho ou verde; ver receitas mole ou enchiladas", alt: "porco", optional: false, isReference: true },
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
      "Bata a banha (ou manteiga) na batedeira até ficar bem fofa e clara, cerca de 5 minutos.",
      "Junte a massa de milho hidratada, o fermento e o sal, batendo até incorporar bem e formar uma massa leve e aerada — teste colocando uma bolinha em água: se flutuar, está no ponto.",
      "Escorra as folhas de milho hidratadas e seque levemente.",
      "Espalhe uma camada de massa (cerca de 2-3 colheres de sopa) no centro de cada folha, deixando bordas livres.",
      "Coloque uma porção do recheio de frango (ou porco) no centro da massa.",
      "Dobre as laterais da folha para dentro, cobrindo o recheio com a massa, depois dobre a ponta inferior para cima, formando um pacote fechado.",
      "Disponha os tamales em pé, com a abertura para cima, numa panela de cozimento a vapor (vaporeira), sem apertar muito.",
      "Cozinhe no vapor por 1h-1h20, até a massa se soltar facilmente da folha quando aberta (esse é o teste de ponto).",
      "Deixe descansar 5-10 minutos antes de servir — desembrulhe e coma com garfo e faca, ou direto da folha."
    ],
    tips: [
      "O teste da bolinha de massa flutuando em água é o método tradicional para verificar se a massa está aerada o suficiente antes de montar os tamales.",
      "Não aperte demais os tamales na vaporeira — eles precisam de espaço para o vapor circular e cozinhar por igual.",
      "Rendem grandes quantidades e congelam muito bem (já cozidos) — muitas famílias mexicanas fazem tamaladas (mutirões de tamales) em grande escala para congelar."
    ]
  },

  // ===================== MOLHOS E ACOMPANHAMENTOS =====================
  {
    name: "Guacamole",
    subgroup: "Molhos e Acompanhamentos",
    desc: "Pasta cremosa de abacate amassado com cebola, pimenta, tomate, coentro e limão, servida com totopos ou tacos.",
    origin: "México",
    time: { prep: "15 min", cook: "0 min", total: "15 min" },
    yield: "4 porções",
    difficulty: "Fácil",
    tags: ["diet:vegetariana", "ingredient:tomate", "ingredient:limao"],
    ingredients: [
      "3 abacates maduros",
      "1/2 cebola roxa picada bem fina",
      "1-2 pimentas jalapeño ou serrano, picadas bem fino (sem sementes se quiser menos picante)",
      "2 tomates picados, sem sementes",
      "Suco de 1-2 limões",
      "Coentro fresco picado",
      "Sal a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "3 abacates maduros",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: null, item: "abacates maduros", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1/2 cebola roxa picada bem fina",
        group: null,
        items: [
          { qty: 0.5, qtyRange: null, unit: null, item: "cebola roxa", prep: "picada bem fina", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1-2 pimentas jalapeño ou serrano, picadas bem fino (sem sementes se quiser menos picante)",
        group: null,
        items: [
          { qty: null, qtyRange: [1, 2], unit: null, item: "pimentas jalapeño", prep: null, alt: "serrano, picadas bem fino (sem sementes se quiser menos picante)", optional: false, isReference: false },
        ],
      },
      {
        raw: "2 tomates picados, sem sementes",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "tomates picados", prep: "sem sementes", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Suco de 1-2 limões",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "suco de 1-2 limões", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Coentro fresco picado",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "coentro fresco", prep: "picado", alt: null, optional: false, isReference: false },
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
      "Corte os abacates ao meio, retire o caroço e retire a polpa com uma colher para uma tigela.",
      "Amasse a polpa com um garfo, deixando a textura levemente rústica (com pedaços), nunca completamente lisa como um purê.",
      "Junte a cebola, pimenta, tomate e coentro picados.",
      "Tempere com suco de limão e sal, misturando delicadamente.",
      "Prove e ajuste o sal e a acidez.",
      "Sirva imediatamente com totopos (chips de tortilla), ou como acompanhamento de tacos e outros pratos."
    ],
    tips: [
      "O suco de limão não é só para temperar — também retarda a oxidação (escurecimento) do abacate, então não economize se for guardar por algum tempo.",
      "Se for guardar, cubra com filme plástico encostado diretamente na superfície do guacamole (sem deixar ar entre eles) e leve à geladeira — reduz bastante o escurecimento.",
      "Use abacates bem maduros (que cedem levemente à pressão) — abacates verdes demais não têm a cremosidade necessária."
    ]
  },
];
