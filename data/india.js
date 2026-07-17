// ÍNDIA
window.RECIPES = window.RECIPES || {};
window.RECIPES["india"] = [

  // ===================== FRANGO =====================
  {
    name: "Tandoori Chicken",
    subgroup: "Frango",
    desc: "Frango marinado em iogurte, gengibre, alho e especiarias (garam masala, páprica), assado em forno bem quente até ficar com marcas escurecidas — servido com naan.",
    origin: "Índia (Punjab)",
    time: { prep: "20 min + 6h marinada", cook: "35 min", total: "≈7h" },
    yield: "4 porções",
    difficulty: "Fácil",
    tags: ["protein:frango", "ingredient:iogurte"],
    ingredients: [
      "1 frango inteiro, em pedaços (ou 8 sobrecoxas), com pequenos cortes na carne",
      "200 g de iogurte natural integral",
      "3 dentes de alho, 1 pedaço de gengibre, ambos ralados",
      "Suco de 1 limão",
      "2 colheres (sopa) de garam masala",
      "1 colher (sopa) de páprica (ou colorau, para a cor vermelha característica)",
      "1 colher (chá) de cominho, 1 colher (chá) de coentro em pó",
      "1 colher (chá) de pimenta caiena (a gosto)",
      "Sal a gosto",
      "Manteiga derretida, para regar"
    ],
    ingredientsStructured: [
      {
        raw: "1 frango inteiro, em pedaços (ou 8 sobrecoxas), com pequenos cortes na carne",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "frango inteiro", prep: "em pedaços, com pequenos cortes na carne", alt: "8 sobrecoxas", optional: false, isReference: false },
        ],
      },
      {
        raw: "200 g de iogurte natural integral",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "grama", item: "iogurte natural integral", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "3 dentes de alho, 1 pedaço de gengibre, ambos ralados",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: "dente", item: "alho", prep: "ralados", alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "pedaco", item: "gengibre", prep: "ralados", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Suco de 1 limão",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "suco de 1 limão", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 colheres (sopa) de garam masala",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "colher-sopa", item: "garam masala", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (sopa) de páprica (ou colorau, para a cor vermelha característica)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "páprica", prep: null, alt: "colorau, para a cor vermelha característica", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (chá) de cominho, 1 colher (chá) de coentro em pó",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "cominho", prep: null, alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "coentro em pó", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (chá) de pimenta caiena (a gosto)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "pimenta caiena (a gosto)", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "Manteiga derretida, para regar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "manteiga derretida", prep: "para regar", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Faça cortes profundos na carne do frango (isso ajuda a marinada a penetrar bem).",
      "Misture o iogurte, alho, gengibre, limão e todas as especiarias, formando a marinada.",
      "Cubra o frango com a marinada, massageando bem, inclusive dentro dos cortes. Cubra e leve à geladeira por no mínimo 6 horas (idealmente durante a noite).",
      "Pré-aqueça o forno o mais quente possível (240-250°C) ou prepare a churrasqueira em fogo alto.",
      "Disponha o frango numa grade sobre uma assadeira (para o excesso de marinada escorrer, não fritar o frango).",
      "Asse por 25-30 minutos, virando na metade do tempo, até a temperatura interna atingir 74°C e a superfície ficar com manchas escuras características (efeito de forno tandoor tradicional).",
      "Regue com manteiga derretida nos últimos 5 minutos.",
      "Sirva com naan e uma salada de cebola roxa marinada em limão."
    ],
    tips: [
      "Quanto mais tempo de marinada (dentro do razoável), mais profundo o sabor e mais macia a carne — o ácido do iogurte e limão ajuda a amaciar as fibras.",
      "Um forno tandoor tradicional atinge temperaturas extremamente altas (400°C+) — em casa, use a temperatura máxima do seu forno e considere finalizar na grelha/churrasqueira para o efeito de crosta carbonizada.",
      "A cor vermelha vibrante tradicional vem de corante alimentício além da páprica — pode ser omitido sem afetar o sabor."
    ]
  },
  {
    name: "Butter Chicken (Murgh Makhani)",
    subgroup: "Frango",
    desc: "Frango grelhado após marinar em iogurte e especiarias, finalizado num molho cremoso de tomate, manteiga e creme de leite — servido com arroz basmati ou naan.",
    origin: "Índia (Delhi)",
    time: { prep: "20 min + 2h marinada", cook: "35 min", total: "≈3h" },
    yield: "4 porções",
    difficulty: "Média",
    tags: ["protein:frango", "ingredient:tomate", "ingredient:iogurte"],
    ingredients: [
      "600 g de peito ou coxa de frango, em cubos",
      "150 g de iogurte natural",
      "2 colheres (sopa) de suco de limão",
      "1 colher (sopa) de garam masala (dividida)",
      "60 g de manteiga (dividida)",
      "1 cebola picada, 4 dentes de alho picados, 1 pedaço de gengibre ralado",
      "500 g de tomate pelado (ou tomate fresco maduro, ralado)",
      "1 colher (chá) de cominho, 1 colher (chá) de páprica",
      "150 ml de creme de leite fresco",
      "1 colher (sopa) de açúcar ou mel",
      "Coentro fresco, para finalizar",
      "Arroz basmati ou naan, para servir"
    ],
    ingredientsStructured: [
      {
        raw: "600 g de peito ou coxa de frango, em cubos",
        group: null,
        items: [
          { qty: 600, qtyRange: null, unit: "grama", item: "peito", prep: null, alt: "coxa de frango, em cubos", optional: false, isReference: false },
        ],
      },
      {
        raw: "150 g de iogurte natural",
        group: null,
        items: [
          { qty: 150, qtyRange: null, unit: "grama", item: "iogurte natural", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 colheres (sopa) de suco de limão",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "colher-sopa", item: "suco de limão", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (sopa) de garam masala (dividida)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "garam masala (dividida)", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "60 g de manteiga (dividida)",
        group: null,
        items: [
          { qty: 60, qtyRange: null, unit: "grama", item: "manteiga (dividida)", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 cebola picada, 4 dentes de alho picados, 1 pedaço de gengibre ralado",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cebola", prep: "picada", alt: null, optional: false, isReference: false },
          { qty: 4, qtyRange: null, unit: "dente", item: "alho", prep: "picados", alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "pedaco", item: "gengibre", prep: "ralado", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "500 g de tomate pelado (ou tomate fresco maduro, ralado)",
        group: null,
        items: [
          { qty: 500, qtyRange: null, unit: "grama", item: "tomate pelado", prep: null, alt: "tomate fresco maduro, ralado", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (chá) de cominho, 1 colher (chá) de páprica",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "cominho", prep: null, alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "páprica", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "1 colher (sopa) de açúcar ou mel",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "açúcar", prep: null, alt: "mel", optional: false, isReference: false },
        ],
      },
      {
        raw: "Coentro fresco, para finalizar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "coentro fresco", prep: "para finalizar", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Arroz basmati ou naan, para servir",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "arroz basmati", prep: "para servir", alt: "naan", optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Marine o frango com iogurte, limão e metade do garam masala por no mínimo 2 horas (idealmente durante a noite).",
      "Grelhe ou asse o frango marinado (numa frigideira quente ou forno a 220°C) até dourar bem por fora e cozinhar por dentro, cerca de 15-18 minutos. Reserve.",
      "Numa panela, derreta metade da manteiga e refogue a cebola até dourar, 8 minutos. Junte o alho e o gengibre, refogando por 1-2 minutos.",
      "Adicione o cominho, páprica e o restante do garam masala, refogando por 1 minuto para florescer as especiarias.",
      "Junte o tomate e cozinhe em fogo médio-baixo por 15-20 minutos, até reduzir e encorpar bem.",
      "Bata esse molho no liquidificador até ficar completamente liso (cuidado com líquido quente), depois volte à panela.",
      "Junte o creme de leite, o restante da manteiga e o açúcar, misturando bem e ajustando o sal.",
      "Adicione o frango grelhado ao molho, cozinhando por 5-8 minutos para incorporar sabores.",
      "Finalize com coentro fresco. Sirva com arroz basmati ou naan."
    ],
    tips: [
      "Grelhar/assar o frango separadamente antes de juntar ao molho (em vez de cozinhá-lo direto nele) dá um sabor de carne grelhada que enriquece muito o prato final.",
      "Bater o molho de tomate até ficar completamente liso é o que dá a textura aveludada característica do Butter Chicken — não pule essa etapa.",
      "É um dos pratos indianos mais populares internacionalmente, criado em Delhi como forma de aproveitar frango tandoori numa receita nova e cremosa."
    ]
  },
  {
    name: "Chicken Tikka Masala",
    subgroup: "Frango",
    desc: "Pedaços de frango marinado e grelhado (tikka) num molho cremoso de tomate com creme de leite e especiarias — parecido com o Butter Chicken, porém mais picante e defumado.",
    origin: "Reino Unido / Índia",
    time: { prep: "20 min + 2h marinada", cook: "35 min", total: "≈3h" },
    yield: "4 porções",
    difficulty: "Média",
    tags: ["protein:frango", "ingredient:tomate", "ingredient:iogurte"],
    ingredients: [
      "600 g de peito de frango, em cubos",
      "150 g de iogurte natural",
      "2 colheres (sopa) de suco de limão",
      "1 colher (sopa) de garam masala",
      "1 colher (chá) de páprica defumada",
      "3 colheres (sopa) de óleo ou manteiga",
      "1 cebola picada, 4 dentes de alho picados, 1 pedaço de gengibre ralado",
      "1 colher (sopa) de pasta de tomate",
      "400 g de tomate pelado",
      "1 colher (chá) de cominho, 1 colher (chá) de coentro em pó, 1/2 colher (chá) de pimenta caiena",
      "150 ml de creme de leite fresco",
      "Coentro fresco",
      "Arroz basmati, para servir"
    ],
    ingredientsStructured: [
      {
        raw: "600 g de peito de frango, em cubos",
        group: null,
        items: [
          { qty: 600, qtyRange: null, unit: "grama", item: "peito de frango", prep: "em cubos", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "150 g de iogurte natural",
        group: null,
        items: [
          { qty: 150, qtyRange: null, unit: "grama", item: "iogurte natural", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 colheres (sopa) de suco de limão",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "colher-sopa", item: "suco de limão", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (sopa) de garam masala",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "garam masala", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (chá) de páprica defumada",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "páprica defumada", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "3 colheres (sopa) de óleo ou manteiga",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: "colher-sopa", item: "óleo", prep: null, alt: "manteiga", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 cebola picada, 4 dentes de alho picados, 1 pedaço de gengibre ralado",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cebola", prep: "picada", alt: null, optional: false, isReference: false },
          { qty: 4, qtyRange: null, unit: "dente", item: "alho", prep: "picados", alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "pedaco", item: "gengibre", prep: "ralado", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (sopa) de pasta de tomate",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "pasta de tomate", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "400 g de tomate pelado",
        group: null,
        items: [
          { qty: 400, qtyRange: null, unit: "grama", item: "tomate pelado", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (chá) de cominho, 1 colher (chá) de coentro em pó, 1/2 colher (chá) de pimenta caiena",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "cominho", prep: null, alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "coentro em pó", prep: null, alt: null, optional: false, isReference: false },
          { qty: 0.5, qtyRange: null, unit: "colher-cha", item: "pimenta caiena", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "Coentro fresco",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "coentro fresco", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Arroz basmati, para servir",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "arroz basmati", prep: "para servir", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Marine o frango com iogurte, limão, garam masala e páprica defumada por no mínimo 2 horas.",
      "Grelhe ou asse o frango marinado até dourar bem e ficar levemente carbonizado nas bordas (imita o efeito do forno tandoor). Reserve.",
      "Numa panela, aqueça o óleo e refogue a cebola até dourar. Junte alho e gengibre, refogando por 1-2 minutos.",
      "Adicione a pasta de tomate e as especiarias (cominho, coentro, caiena), refogando por 1 minuto.",
      "Junte o tomate pelado e cozinhe em fogo médio-baixo por 15-20 minutos, até reduzir e encorpar.",
      "Bata o molho no liquidificador até ficar liso, volte à panela.",
      "Junte o creme de leite, ajuste o sal, e adicione o frango grelhado, cozinhando por 5-8 minutos para incorporar.",
      "Finalize com coentro fresco e sirva com arroz basmati."
    ],
    tips: [
      "É extremamente parecido ao Butter Chicken na técnica — a diferença está mais nas proporções de especiarias e no toque de defumado da páprica, além de geralmente ser um pouco mais picante.",
      "Considerado por muitos historiadores culinários uma criação anglo-indiana, popularizada no Reino Unido — hoje um dos pratos 'indianos' mais consumidos no mundo.",
      "Grelhar o frango com boas marcas de carbonização é essencial para reproduzir o sabor tandoori que dá nome ao prato ('tikka' se refere aos pedaços grelhados)."
    ]
  },

  // ===================== CARNES E ARROZ =====================
  {
    name: "Rogan Josh",
    subgroup: "Carnes e Arroz",
    desc: "Ensopado de cordeiro cozido lentamente em molho encorpado de cebola, iogurte, páprica e especiarias inteiras (canela, cravo, cardamomo) — de cor vermelha intensa, servido com arroz basmati.",
    origin: "Índia (Caxemira)",
    time: { prep: "20 min", cook: "1h40", total: "2h" },
    yield: "4-6 porções",
    difficulty: "Média",
    tags: ["protein:cordeiro", "ingredient:iogurte"],
    ingredients: [
      "1 kg de cordeiro (paleta ou pernil), em cubos",
      "4 colheres (sopa) de óleo ou ghee (manteiga clarificada)",
      "2 cebolas picadas",
      "5 dentes de alho, 1 pedaço de gengibre — ambos ralados ou em pasta",
      "200 g de iogurte natural",
      "2 colheres (sopa) de páprica (para a cor vermelha característica)",
      "1 colher (sopa) de coentro em pó, 1 colher (chá) de cominho",
      "1 pau de canela, 4 cravos, 4 vagens de cardamomo",
      "1 colher (chá) de pimenta caiena (a gosto)",
      "300 ml de caldo de carne ou água",
      "Coentro fresco, arroz basmati para servir"
    ],
    ingredientsStructured: [
      {
        raw: "1 kg de cordeiro (paleta ou pernil), em cubos",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "quilograma", item: "cordeiro (paleta ou pernil)", prep: "em cubos", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "4 colheres (sopa) de óleo ou ghee (manteiga clarificada)",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: "colher-sopa", item: "óleo", prep: null, alt: "ghee (manteiga clarificada)", optional: false, isReference: false },
        ],
      },
      {
        raw: "2 cebolas picadas",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "cebolas", prep: "picadas", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "5 dentes de alho, 1 pedaço de gengibre — ambos ralados ou em pasta",
        group: null,
        items: [
          { qty: 5, qtyRange: null, unit: "dente", item: "alho", prep: "ralados ou em pasta", alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "pedaco", item: "gengibre", prep: "ralados ou em pasta", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "200 g de iogurte natural",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "grama", item: "iogurte natural", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 colheres (sopa) de páprica (para a cor vermelha característica)",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "colher-sopa", item: "páprica (para a cor vermelha característica)", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (sopa) de coentro em pó, 1 colher (chá) de cominho",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "coentro em pó", prep: null, alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "cominho", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 pau de canela, 4 cravos, 4 vagens de cardamomo",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "pau de canela", prep: null, alt: null, optional: false, isReference: false },
          { qty: 4, qtyRange: null, unit: null, item: "cravos", prep: null, alt: null, optional: false, isReference: false },
          { qty: 4, qtyRange: null, unit: null, item: "vagens de cardamomo", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (chá) de pimenta caiena (a gosto)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "pimenta caiena (a gosto)", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "300 ml de caldo de carne ou água",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "mililitro", item: "caldo de carne", prep: null, alt: "água", optional: false, isReference: false },
        ],
      },
      {
        raw: "Coentro fresco, arroz basmati para servir",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "coentro fresco", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "arroz basmati", prep: "para servir", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Aqueça o óleo/ghee numa panela funda e doure a cebola até ficar bem dourada, 10-12 minutos.",
      "Junte o alho e o gengibre, refogando por 2 minutos.",
      "Adicione a canela, cravo e cardamomo inteiros, refogando por 1 minuto para liberar os óleos aromáticos.",
      "Junte a páprica, coentro, cominho e pimenta caiena, mexendo rapidamente (fogo baixo, para não queimar as especiarias).",
      "Adicione o cordeiro, mexendo para envolver bem nas especiarias e dourar levemente por fora, 5-8 minutos.",
      "Junte o iogurte, uma colher de cada vez, mexendo bem entre as adições (evita talhar).",
      "Cubra com o caldo/água, deixe ferver, tampe e cozinhe em fogo baixo por 1h15-1h30, até a carne ficar bem macia.",
      "Ajuste o sal, retire as especiarias inteiras se preferir (opcional). Finalize com coentro fresco e sirva com arroz basmati."
    ],
    tips: [
      "O nome significa literalmente 'carne avermelhada' em persa/urdu — a cor vermelha profunda vem da generosa quantidade de páprica (ou pimentas secas caxemiras tradicionalmente).",
      "Adicionar o iogurte aos poucos, com a panela fora do fogo mais intenso, evita que ele talhe ao entrar em contato com o calor.",
      "Um dos pratos mais emblemáticos da Caxemira, com forte influência da culinária mongol e persa trazida pela rota comercial histórica da região."
    ]
  },
  {
    name: "Biryani",
    subgroup: "Carnes e Arroz",
    desc: "Arroz basmati cozido em camadas com carne (frango ou cordeiro) marinada e especiarias, finalizado em fogo baixo e tampa lacrada (técnica 'dum') para os sabores se infundirem no arroz.",
    origin: "Índia",
    time: { prep: "30 min + 1h marinada", cook: "1h", total: "2h30" },
    yield: "6 porções",
    difficulty: "Alta",
    tags: ["protein:frango", "protein:cordeiro", "ingredient:arroz", "ingredient:iogurte"],
    ingredients: [
      "800 g de frango ou cordeiro, em pedaços",
      "200 g de iogurte natural",
      "2 colheres (sopa) de pasta de gengibre e alho",
      "2 colheres (sopa) de garam masala",
      "1 pitada de açafrão, dissolvida em 3 colheres (sopa) de leite morno",
      "3 xícaras de arroz basmati, de molho por 30 minutos",
      "2 cebolas, fatiadas fino e fritas até dourar bem e ficarem crocantes (birista)",
      "4 colheres (sopa) de ghee ou manteiga (dividida)",
      "Especiarias inteiras: 1 pau de canela, 4 cravos, 4 cardamomos, 2 folhas de louro",
      "Coentro e hortelã frescos, picados",
      "Sal a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "800 g de frango ou cordeiro, em pedaços",
        group: null,
        items: [
          { qty: 800, qtyRange: null, unit: "grama", item: "frango", prep: null, alt: "cordeiro, em pedaços", optional: false, isReference: false },
        ],
      },
      {
        raw: "200 g de iogurte natural",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "grama", item: "iogurte natural", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 colheres (sopa) de pasta de gengibre e alho",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "colher-sopa", item: "pasta de gengibre e alho", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 colheres (sopa) de garam masala",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "colher-sopa", item: "garam masala", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 pitada de açafrão, dissolvida em 3 colheres (sopa) de leite morno",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "pitada", item: "açafrão", prep: null, alt: null, optional: false, isReference: false },
          { qty: 3, qtyRange: null, unit: "colher-sopa", item: "leite morno", prep: "para dissolver o açafrão", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "3 xícaras de arroz basmati, de molho por 30 minutos",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: "xicara", item: "arroz basmati", prep: "de molho por 30 minutos", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 cebolas, fatiadas fino e fritas até dourar bem e ficarem crocantes (birista)",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "cebolas", prep: "fatiadas fino e fritas até dourar bem e ficarem crocantes (birista)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "4 colheres (sopa) de ghee ou manteiga (dividida)",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: "colher-sopa", item: "ghee", prep: null, alt: "manteiga (dividida)", optional: false, isReference: false },
        ],
      },
      {
        raw: "Especiarias inteiras: 1 pau de canela, 4 cravos, 4 cardamomos, 2 folhas de louro",
        group: "especiarias inteiras",
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "pau de canela", prep: null, alt: null, optional: false, isReference: false },
          { qty: 4, qtyRange: null, unit: null, item: "cravos", prep: null, alt: null, optional: false, isReference: false },
          { qty: 4, qtyRange: null, unit: null, item: "cardamomos", prep: null, alt: null, optional: false, isReference: false },
          { qty: 2, qtyRange: null, unit: "folha", item: "louro", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Coentro e hortelã frescos, picados",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "coentro fresco", prep: "picados", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "hortelã fresca", prep: "picados", alt: null, optional: false, isReference: false },
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
      "Marine a carne com o iogurte, pasta de gengibre-alho, garam masala e sal por no mínimo 1 hora.",
      "Cozinhe a carne marinada numa panela com um pouco de ghee, em fogo médio, até quase totalmente cozida e o molho encorpar, 20-25 minutos. Reserve.",
      "Cozinhe o arroz basmati escorrido em água fervente com sal e as especiarias inteiras, só até ficar 70% cozido (ainda firme no centro), cerca de 5-6 minutos. Escorra.",
      "Numa panela funda com tampa bem ajustada, espalhe metade do arroz parcialmente cozido no fundo.",
      "Distribua a carne cozida por cima, regue com metade do leite com açafrão, e espalhe metade da cebola frita crocante, coentro e hortelã.",
      "Cubra com o restante do arroz, regue com o restante do açafrão e cebola frita, coentro e hortelã.",
      "Regue com o restante do ghee derretido por cima de tudo.",
      "Tampe bem (selando as bordas com massa de farinha e água, ou papel-alumínio bem apertado, técnica chamada 'dum') e cozinhe em fogo bem baixo por 25-30 minutos, deixando o vapor terminar de cozinhar o arroz e incorporar todos os sabores.",
      "Misture delicadamente antes de servir, revelando as camadas."
    ],
    tips: [
      "A técnica 'dum' (cozimento lacrado a vapor, em fogo bem baixo) é o que permite que os sabores da carne e das especiarias subam e se infundam no arroz sem misturar tudo previamente.",
      "A cebola frita crocante (birista) é um componente essencial, não apenas decorativo — pode ser preparada com antecedência e guardada.",
      "Existem inúmeras variações regionais de biryani na Índia (Hyderabadi, Lucknowi, Kolkata) — esta é uma versão clássica de base ampla."
    ]
  },

  // ===================== VEGETARIANOS E PÃES =====================
  {
    name: "Dal Makhani",
    subgroup: "Vegetarianos e Pães",
    desc: "Ensopado cremoso de feijão preto (urad dal) e feijão vermelho, cozidos lentamente em molho de tomate com manteiga (ghee) e creme de leite — prato vegetariano rico e amanteigado.",
    origin: "Índia (Punjab)",
    time: { prep: "15 min + 8h molho", cook: "1h30", total: "≈10h" },
    yield: "4-6 porções",
    difficulty: "Fácil",
    tags: ["diet:vegetariana", "ingredient:feijao", "ingredient:tomate", "ingredient:lentilha"],
    ingredients: [
      "200 g de feijão preto pequeno (urad dal inteiro), de molho por 8h",
      "50 g de feijão vermelho (rajma), de molho junto",
      "3 colheres (sopa) de ghee ou manteiga (dividida)",
      "1 cebola picada, 4 dentes de alho picados, 1 pedaço de gengibre ralado",
      "300 g de tomate pelado (ou tomate fresco ralado)",
      "1 colher (chá) de cominho, 1 colher (chá) de garam masala",
      "1/2 colher (chá) de pimenta caiena (a gosto)",
      "150 ml de creme de leite fresco",
      "Coentro fresco",
      "Naan ou arroz, para servir"
    ],
    ingredientsStructured: [
      {
        raw: "200 g de feijão preto pequeno (urad dal inteiro), de molho por 8h",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "grama", item: "feijão preto pequeno (urad dal inteiro)", prep: "de molho por 8h", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "50 g de feijão vermelho (rajma), de molho junto",
        group: null,
        items: [
          { qty: 50, qtyRange: null, unit: "grama", item: "feijão vermelho (rajma)", prep: "de molho junto", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "3 colheres (sopa) de ghee ou manteiga (dividida)",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: "colher-sopa", item: "ghee", prep: null, alt: "manteiga (dividida)", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 cebola picada, 4 dentes de alho picados, 1 pedaço de gengibre ralado",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cebola", prep: "picada", alt: null, optional: false, isReference: false },
          { qty: 4, qtyRange: null, unit: "dente", item: "alho", prep: "picados", alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "pedaco", item: "gengibre", prep: "ralado", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "300 g de tomate pelado (ou tomate fresco ralado)",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "grama", item: "tomate pelado", prep: null, alt: "tomate fresco ralado", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (chá) de cominho, 1 colher (chá) de garam masala",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "cominho", prep: null, alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "garam masala", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1/2 colher (chá) de pimenta caiena (a gosto)",
        group: null,
        items: [
          { qty: 0.5, qtyRange: null, unit: "colher-cha", item: "pimenta caiena (a gosto)", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "Coentro fresco",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "coentro fresco", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Naan ou arroz, para servir",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "naan", prep: "para servir", alt: "arroz", optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Escorra o feijão de molho e cozinhe em água nova (panela de pressão reduz bastante o tempo: cerca de 30-35 minutos após pegar pressão; em panela comum, 1h30-2h), até ficar bem macio.",
      "Numa panela separada, aqueça metade do ghee e refogue a cebola até dourar, 8 minutos. Junte o alho e o gengibre, refogando por 2 minutos.",
      "Adicione o tomate, cominho, garam masala e pimenta caiena, cozinhando em fogo médio-baixo por 12-15 minutos, até encorpar.",
      "Junte o feijão já cozido com um pouco do seu caldo, misturando bem com o molho de tomate.",
      "Cozinhe em fogo baixo por 30-40 minutos, mexendo ocasionalmente e amassando levemente parte do feijão contra a panela, para engrossar naturalmente.",
      "Junte o creme de leite e o restante do ghee, cozinhando por mais 10 minutos, mexendo sempre.",
      "Ajuste o sal, finalize com coentro fresco. Sirva com naan ou arroz."
    ],
    tips: [
      "O cozimento longo e lento é o que dá a cremosidade característica do dal makhani — tradicionalmente, em restaurantes indianos, cozinha por horas em fogo bem baixo (às vezes durante a noite toda).",
      "Amassar parte do feijão contra a panela ajuda a engrossar o prato naturalmente, sem precisar de nenhum espessante.",
      "'Makhani' significa 'amanteigado' — não economize no ghee/manteiga e no creme de leite, são o que dão a riqueza característica do prato."
    ]
  },
  {
    name: "Samosa",
    subgroup: "Vegetarianos e Pães",
    desc: "Pastel triangular de massa crocante, recheado com batata amassada, ervilha e especiarias, frito até dourar — servido com chutney de hortelã ou tamarindo.",
    origin: "Índia",
    time: { prep: "45 min", cook: "20 min", total: "1h05" },
    yield: "16 unidades",
    difficulty: "Média",
    tags: ["diet:vegetariana", "ingredient:batata", "ingredient:ervilha"],
    ingredients: [
      "Para a massa: 300 g de farinha de trigo, 60 ml de óleo, 1 pitada de sal, água morna o suficiente para formar a massa",
      "Para o recheio: 3 batatas médias, cozidas e amassadas grosseiramente",
      "100 g de ervilha (fresca ou congelada)",
      "1 colher (sopa) de óleo",
      "1 colher (chá) de sementes de cominho",
      "1 pedaço de gengibre ralado, 1 pimenta verde picada",
      "1 colher (chá) de garam masala, 1/2 colher (chá) de cúrcuma",
      "Coentro fresco picado, suco de limão",
      "Óleo, para fritar"
    ],
    ingredientsStructured: [
      {
        raw: "Para a massa: 300 g de farinha de trigo, 60 ml de óleo, 1 pitada de sal, água morna o suficiente para formar a massa",
        group: "massa",
        items: [
          { qty: 300, qtyRange: null, unit: "grama", item: "farinha de trigo", prep: null, alt: null, optional: false, isReference: false },
          { qty: 60, qtyRange: null, unit: "mililitro", item: "óleo", prep: null, alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "pitada", item: "sal", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "água morna", prep: "o suficiente para formar a massa", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Para o recheio: 3 batatas médias, cozidas e amassadas grosseiramente",
        group: "recheio",
        items: [
          { qty: 3, qtyRange: null, unit: null, item: "batatas médias", prep: "cozidas e amassadas grosseiramente", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "100 g de ervilha (fresca ou congelada)",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "grama", item: "ervilha (fresca ou congelada)", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "1 colher (chá) de sementes de cominho",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "sementes de cominho", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 pedaço de gengibre ralado, 1 pimenta verde picada",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "pedaco", item: "gengibre", prep: "ralado", alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: null, item: "pimenta verde", prep: "picada", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (chá) de garam masala, 1/2 colher (chá) de cúrcuma",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "garam masala", prep: null, alt: null, optional: false, isReference: false },
          { qty: 0.5, qtyRange: null, unit: "colher-cha", item: "cúrcuma", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Coentro fresco picado, suco de limão",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "coentro fresco", prep: "picado", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "suco de limão", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Óleo, para fritar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "óleo", prep: "para fritar", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Prepare a massa: misture a farinha, óleo e sal, esfregando com os dedos até formar uma farofa. Adicione água morna aos poucos, formando uma massa firme (mais dura que massa de pão). Sove por 5 minutos, cubra e descanse por 20 minutos.",
      "Prepare o recheio: aqueça o óleo e refogue as sementes de cominho até estalarem. Junte o gengibre e a pimenta, refogando por 1 minuto.",
      "Adicione a batata amassada, a ervilha, garam masala e cúrcuma, misturando bem e cozinhando por 5 minutos. Finalize com coentro e limão. Deixe esfriar.",
      "Divida a massa em bolinhas, abra cada uma num círculo fino e corte ao meio, formando dois semicírculos.",
      "Pegue um semicírculo, umedeça a borda reta com água e dobre formando um cone, selando a lateral.",
      "Preencha o cone com uma colher do recheio de batata, sem apertar demais.",
      "Feche a abertura superior do cone, selando bem com água e fazendo pequenas pregas.",
      "Aqueça o óleo numa panela funda a 160-170°C (temperatura mais baixa que o normal, para cozinhar bem por dentro sem queimar por fora).",
      "Frite os samosas por 10-12 minutos, virando ocasionalmente, até dourarem bem e ficarem crocantes. Escorra e sirva quentes, com chutney de hortelã ou tamarindo."
    ],
    tips: [
      "A massa deve ser mais firme e menos elástica que uma massa de pão comum — isso é o que dá a casca crocante e levemente laminada característica do samosa.",
      "Fritar em temperatura mais baixa que o normal é essencial — o samosa precisa de tempo suficiente para a massa cozinhar bem por dentro antes de dourar demais por fora.",
      "Pode ser montado e congelado cru — frite direto do congelador, apenas aumentando alguns minutos o tempo de fritura."
    ]
  },
  {
    name: "Naan",
    subgroup: "Vegetarianos e Pães",
    desc: "Pão chato de fermentação com iogurte, assado em frigideira bem quente até formar bolhas douradas — pincelado com manteiga (ou ghee) e alho ao sair do fogo.",
    origin: "Índia",
    time: { prep: "20 min + 1h fermentação", cook: "10 min", total: "1h30" },
    yield: "8 unidades",
    difficulty: "Fácil",
    tags: ["diet:vegetariana", "ingredient:iogurte"],
    ingredients: [
      "500 g de farinha de trigo",
      "7 g de fermento biológico seco",
      "1 colher (sopa) de açúcar",
      "1 colher (chá) de sal",
      "150 g de iogurte natural",
      "150 ml de água morna",
      "2 colheres (sopa) de óleo",
      "Manteiga derretida (ou ghee) e alho picado, para pincelar (opcional)"
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
        raw: "1 colher (sopa) de açúcar",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "açúcar", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "150 g de iogurte natural",
        group: null,
        items: [
          { qty: 150, qtyRange: null, unit: "grama", item: "iogurte natural", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "150 ml de água morna",
        group: null,
        items: [
          { qty: 150, qtyRange: null, unit: "mililitro", item: "água morna", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "Manteiga derretida (ou ghee) e alho picado, para pincelar (opcional)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "manteiga derretida", prep: "para pincelar", alt: "ghee", optional: true, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "alho", prep: "picado, para pincelar", alt: null, optional: true, isReference: false },
        ],
      },
    ],
    steps: [
      "Misture a farinha, fermento, açúcar e sal.",
      "Junte o iogurte, água morna e óleo, misturando até formar uma massa. Sove por 8-10 minutos até ficar lisa e elástica.",
      "Cubra e deixe fermentar em local morno por 1 hora, até dobrar de volume.",
      "Divida a massa em 8 porções, modele bolinhas e deixe descansar cobertas por 10 minutos.",
      "Abra cada porção num formato oval, de cerca de 5mm de espessura.",
      "Aqueça uma frigideira de ferro (ou antiaderente pesada) bem quente, em fogo alto, sem óleo.",
      "Cozinhe cada naan por 1-2 minutos de um lado, até formar bolhas e começar a dourar, depois vire e cozinhe o outro lado por mais 1-2 minutos, pressionando levemente com uma espátula.",
      "Retire e pincele imediatamente com manteiga derretida (com alho picado, se desejar). Sirva quente."
    ],
    tips: [
      "Tradicionalmente assado num forno tandoor, colado nas paredes verticais quentes — numa frigideira bem quente em casa, o resultado se aproxima bastante, especialmente se finalizar rapidamente no forno com grill ligado.",
      "O iogurte na massa é o que dá a maciez e leve acidez característica do naan, diferenciando-o de outros pães chatos.",
      "Pincelar com manteiga (ou ghee) e alho assim que sai da frigideira, ainda quente, é o toque final clássico que a maioria dos restaurantes indianos usa."
    ]
  },
];
