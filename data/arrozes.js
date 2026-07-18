// ARROZES
window.RECIPES = window.RECIPES || {};
window.RECIPES["arrozes"] = [

  // ===================== ARROZES SECOS =====================
  {
    name: "Arroz Biro-Biro",
    subgroup: "Arrozes Secos",
    desc: "Arroz soltinho finalizado com tiras de omelete, bacon crocante e cheiro-verde.",
    origin: "Brasil",
    time: { prep: "10 min", cook: "25 min", total: "35 min" },
    yield: "4 porções",
    difficulty: "Fácil",
    tags: ["contains:suino", "ingredient:arroz", "ingredient:ovo"],
    ingredients: [
      "2 xícaras de arroz branco",
      "3 colheres (sopa) de manteiga (dividida)",
      "1 cebola picada bem fina",
      "2 dentes de alho picados",
      "2 ovos, batidos e feitos em omelete fina, depois cortada em tiras",
      "100 g de bacon em cubos pequenos",
      "3 colheres (sopa) de salsinha e cebolinha picadas",
      "4 xícaras de caldo de galinha ou água quente",
      "Sal a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "2 xícaras de arroz branco",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "xicara", item: "arroz branco", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "3 colheres (sopa) de manteiga (dividida)",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: "colher-sopa", item: "manteiga (dividida)", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "2 dentes de alho picados",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "dente", item: "alho", prep: "picados", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 ovos, batidos e feitos em omelete fina, depois cortada em tiras",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "ovos", prep: "batidos e feitos em omelete fina, depois cortada em tiras", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "100 g de bacon em cubos pequenos",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "grama", item: "bacon", prep: "em cubos pequenos", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "3 colheres (sopa) de salsinha e cebolinha picadas",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: "colher-sopa", item: "salsinha e cebolinha", prep: "picadas", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "4 xícaras de caldo de galinha ou água quente",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: "xicara", item: "caldo de galinha", prep: null, alt: "água quente", optional: false, isReference: false },
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
      "Numa panela, doure o bacon em fogo médio até crocante, retire e reserve, deixando a gordura na panela.",
      "Na mesma panela, derreta parte da manteiga e refogue a cebola e o alho até dourarem levemente.",
      "Junte o arroz e refogue por 2-3 minutos, mexendo sempre, até os grãos ficarem translúcidos e levemente tostados.",
      "Cubra com o caldo quente, tempere com sal (com moderação, o bacon já salga), tampe e cozinhe em fogo baixo até o arroz absorver todo o líquido e ficar soltinho, cerca de 18 minutos.",
      "Enquanto isso, prepare a omelete fina, deixe esfriar levemente e corte em tiras finas.",
      "Quando o arroz estiver pronto, misture delicadamente o bacon crocante, as tiras de omelete, o restante da manteiga e o cheiro-verde picado.",
      "Sirva quente, como acompanhamento generoso."
    ],
    stepIngredients: [
      null,
      [{ entryIndex: 1, itemIndex: 0, fraction: 0.5 }],
      null,
      null,
      null,
      [{ entryIndex: 1, itemIndex: 0, fraction: 0.5 }],
      null,
    ],
    tips: [
      "O toque de omelete em tiras e bacon crocante é o que diferencia esse arroz de um arroz branco comum — ambos entram só no final, para preservar a textura.",
      "Tostar bem o arroz antes de adicionar o líquido é o que garante grãos soltos no final, sem empapar.",
      "Um clássico esquecido da cozinha brasileira caseira, com raízes na tradição portuguesa de arroz enriquecido."
    ]
  },
  {
    name: "Arroz de Pato",
    subgroup: "Arrozes Secos",
    desc: "Arroz assado no próprio caldo de pato desfiado, com chouriço, e finalizado com crosta crocante — clássico português.",
    origin: "Portugal",
    time: { prep: "20 min", cook: "1h40", total: "2h" },
    yield: "6 porções",
    difficulty: "Média",
    tags: ["protein:ave", "contains:suino", "ingredient:arroz"],
    ingredients: [
      "1 pato inteiro (1,8-2 kg), em pedaços",
      "200 g de chouriço/linguiça calabresa fatiado",
      "150 g de bacon em cubos",
      "1 cebola, 1 cenoura — em cubos",
      "3 dentes de alho picados",
      "2 folhas de louro",
      "150 ml de vinho branco",
      "1,5 L de água ou caldo de legumes",
      "3 xícaras de arroz",
      "Sal e pimenta a gosto",
      "Raspas de laranja (opcional, toque tradicional)"
    ],
    ingredientsStructured: [
      {
        raw: "1 pato inteiro (1,8-2 kg), em pedaços",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "pato", prep: "inteiro (1,8-2 kg), em pedaços", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "200 g de chouriço/linguiça calabresa fatiado",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "grama", item: "chouriço/linguiça calabresa", prep: "fatiado", alt: null, optional: false, isReference: false },
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
        raw: "1 cebola, 1 cenoura — em cubos",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cebola", prep: "em cubos", alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: null, item: "cenoura", prep: "em cubos", alt: null, optional: false, isReference: false },
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
        raw: "2 folhas de louro",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "folha", item: "louro", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "150 ml de vinho branco",
        group: null,
        items: [
          { qty: 150, qtyRange: null, unit: "mililitro", item: "vinho branco", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1,5 L de água ou caldo de legumes",
        group: null,
        items: [
          { qty: 1.5, qtyRange: null, unit: "litro", item: "água", prep: null, alt: "caldo de legumes", optional: false, isReference: false },
        ],
      },
      {
        raw: "3 xícaras de arroz",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: "xicara", item: "arroz", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "Raspas de laranja (opcional, toque tradicional)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "raspas de laranja", prep: "toque tradicional", alt: null, optional: true, isReference: false },
        ],
      },
    ],
    steps: [
      "Tempere o pato com sal e pimenta. Numa panela funda, doure o bacon até crocante, retire e reserve.",
      "Na gordura do bacon, sele os pedaços de pato até dourarem bem por todos os lados. Retire e reserve.",
      "Refogue a cebola, cenoura e alho na mesma panela até dourarem, 8-10 minutos.",
      "Deglaceie com o vinho branco e deixe reduzir por 2 minutos.",
      "Volte o pato à panela, cubra com a água/caldo, junte o louro. Tampe e cozinhe em fogo baixo por 1h-1h15, até o pato ficar bem macio.",
      "Retire o pato, desfie a carne (descartando ossos e pele em excesso) e reserve. Coe o caldo de cozimento.",
      "Pré-aqueça o forno a 200°C. Numa panela, refogue as fatias de chouriço rapidamente, junte o arroz e refogue por 2 minutos.",
      "Adicione o caldo coado (na proporção de 2 partes de líquido para 1 de arroz), o pato desfiado e as raspas de laranja, se usar. Ajuste o sal.",
      "Transfira para um refratário, cubra e leve ao forno por 20-25 minutos, até o arroz absorver o líquido.",
      "Descubra e volte ao forno por mais 10-15 minutos, até a superfície dourar levemente. Sirva quente."
    ],
    tips: [
      "A etapa final descoberta no forno é o que cria a crosta levemente crocante por cima, uma característica valorizada nesse prato tradicional português.",
      "Usar o próprio caldo de cozimento do pato (bem saboroso, com toda a gordura e sabor da carne) é o que faz o arroz ficar tão rico — não substitua por água pura.",
      "Pode ser preparado com antecedência até a etapa de ir ao forno, facilitando o preparo para receber convidados."
    ]
  },

  // ===================== ARROZES CALDOSOS =====================
  {
    name: "Arroz Caldoso",
    subgroup: "Arrozes Caldosos",
    desc: "Como uma paella bem mais líquida — arroz com camarão, lula e mexilhão, cozido em fumet até ficar caldoso feito sopa espessa.",
    origin: "Espanha",
    time: { prep: "20 min", cook: "30 min", total: "50 min" },
    yield: "4 porções",
    difficulty: "Média",
    tags: ["protein:frutos-do-mar", "ingredient:arroz", "ingredient:tomate"],
    ingredients: [
      "300 g de arroz tipo bomba (ou arbóreo)",
      "300 g de camarão médio, limpo (cascas reservadas)",
      "200 g de lula em anéis",
      "8 mexilhões limpos",
      "1 pimentão vermelho picado",
      "3 tomates maduros ralados",
      "4 dentes de alho picados",
      "1 pitada de açafrão",
      "1,5 L de fumet de peixe (feito com as cascas do camarão), bem quente",
      "Azeite de oliva",
      "Salsinha picada",
      "Sal a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "300 g de arroz tipo bomba (ou arbóreo)",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "grama", item: "arroz tipo bomba", prep: null, alt: "arbóreo", optional: false, isReference: false },
        ],
      },
      {
        raw: "300 g de camarão médio, limpo (cascas reservadas)",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "grama", item: "camarão médio", prep: "limpo (cascas reservadas)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "200 g de lula em anéis",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "grama", item: "lula", prep: "em anéis", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "8 mexilhões limpos",
        group: null,
        items: [
          { qty: 8, qtyRange: null, unit: null, item: "mexilhões", prep: "limpos", alt: null, optional: false, isReference: false },
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
        raw: "3 tomates maduros ralados",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: null, item: "tomates maduros", prep: "ralados", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "4 dentes de alho picados",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: "dente", item: "alho", prep: "picados", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 pitada de açafrão",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "pitada", item: "açafrão", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1,5 L de fumet de peixe (feito com as cascas do camarão), bem quente",
        group: null,
        items: [
          { qty: 1.5, qtyRange: null, unit: "litro", item: "fumet de peixe", prep: "feito com as cascas do camarão, bem quente", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Azeite de oliva",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "azeite de oliva", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Salsinha picada",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "salsinha", prep: "picada", alt: null, optional: false, isReference: false },
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
      "Prepare um fumet rápido fervendo as cascas do camarão em água por 15 minutos; coe e mantenha quente.",
      "Numa panela larga, aqueça o azeite e sele rapidamente o camarão e a lula, só para dourar por fora. Retire e reserve.",
      "Na mesma panela, refogue o pimentão até macio, junte o alho e o tomate ralado, cozinhando até o sofrito encorpar, 8-10 minutos.",
      "Dissolva o açafrão numa concha do fumet e junte à panela.",
      "Adicione o arroz, misture bem com o sofrito por 1-2 minutos.",
      "Cubra com o fumet quente — diferente da paella, aqui a proporção de líquido é bem maior (cerca de 4 partes de líquido para 1 de arroz), já que o resultado deve ficar caldoso, como um risoto bem mais líquido.",
      "Cozinhe em fogo médio por 15 minutos, mexendo ocasionalmente (diferente da paella, aqui pode mexer um pouco).",
      "Nos últimos 5 minutos, junte o camarão, a lula selados e os mexilhões (com a abertura para cima).",
      "Ajuste sal, finalize com salsinha picada. Sirva imediatamente em pratos fundos, ainda bem caldoso — a textura deve ser fluida, quase como uma sopa espessa de arroz."
    ],
    tips: [
      "A diferença fundamental da paella é a quantidade de líquido: aqui o objetivo é um arroz molhado e caldoso, servido em prato fundo com colher, não um arroz seco com grãos soltos.",
      "Sirva imediatamente após o cozimento — o arroz continua absorvendo líquido mesmo fora do fogo, e o caldo pode 'sumir' se demorar para servir.",
      "Muito popular nas regiões costeiras da Espanha como prato de conforto do dia a dia, mais informal que a paella de ocasião."
    ]
  },
  {
    name: "Arroz de Polvo",
    subgroup: "Arrozes Caldosos",
    desc: "Arroz caldoso português cozido no próprio caldo de cozimento do polvo, com pedaços de polvo por cima.",
    origin: "Portugal",
    time: { prep: "20 min", cook: "1h", total: "1h20" },
    yield: "4-6 porções",
    difficulty: "Média",
    tags: ["protein:frutos-do-mar", "ingredient:arroz", "ingredient:tomate"],
    ingredients: [
      "1 polvo (1,2-1,5 kg), limpo e pré-cozido (ver receita Polvo Grelhado para o cozimento inicial, sem grelhar)",
      "3 colheres (sopa) de azeite de oliva",
      "1 cebola picada",
      "4 dentes de alho picados",
      "2 tomates maduros picados sem pele",
      "1 pimentão vermelho picado",
      "1,5 L do caldo de cozimento do polvo (reservado)",
      "2 xícaras de arroz",
      "1 folha de louro",
      "Coentro ou salsinha picada",
      "Sal e pimenta a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "1 polvo (1,2-1,5 kg), limpo e pré-cozido (ver receita Polvo Grelhado para o cozimento inicial, sem grelhar)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "polvo", prep: "(1,2-1,5 kg), limpo e pré-cozido; ver receita polvo grelhado para o cozimento inicial, sem grelhar", alt: null, optional: false, isReference: true },
        ],
      },
      {
        raw: "3 colheres (sopa) de azeite de oliva",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: "colher-sopa", item: "azeite de oliva", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "4 dentes de alho picados",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: "dente", item: "alho", prep: "picados", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 tomates maduros picados sem pele",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "tomates maduros", prep: "picados sem pele", alt: null, optional: false, isReference: false },
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
        raw: "1,5 L do caldo de cozimento do polvo (reservado)",
        group: null,
        items: [
          { qty: 1.5, qtyRange: null, unit: "litro", item: "caldo de cozimento do polvo", prep: "reservado", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 xícaras de arroz",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "xicara", item: "arroz", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 folha de louro",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "folha", item: "louro", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Coentro ou salsinha picada",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "coentro", prep: null, alt: "salsinha picada", optional: false, isReference: false },
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
      "Cozinhe o polvo em água com cebola e louro até ficar macio (cerca de 45-50 minutos), seguindo a técnica da receita de Polvo Grelhado. Reserve o caldo de cozimento e corte o polvo em pedaços.",
      "Numa panela larga, aqueça o azeite e refogue a cebola, o alho e o pimentão até macios, 8-10 minutos.",
      "Junte o tomate picado e cozinhe até desmanchar, formando um refogado encorpado.",
      "Adicione o arroz, misturando bem com o refogado por 1-2 minutos.",
      "Cubra com o caldo de cozimento do polvo, bem quente (na proporção de cerca de 3 partes de líquido para 1 de arroz, para um resultado caldoso).",
      "Cozinhe em fogo médio por 12-15 minutos, mexendo ocasionalmente.",
      "Junte os pedaços de polvo nos últimos 5 minutos, só para aquecer.",
      "Ajuste sal e pimenta, finalize com coentro ou salsinha picada. Sirva bem caldoso, em pratos fundos."
    ],
    tips: [
      "Usar o próprio caldo de cozimento do polvo (em vez de água ou caldo genérico) é o segredo do sabor profundo desse prato — não descarte esse líquido.",
      "O polvo já está totalmente cozido antes de entrar no arroz, então a etapa final é só para aquecer — cozinhar demais nessa fase deixa o polvo borrachudo.",
      "Prato tradicional das regiões costeiras portuguesas, especialmente popular no inverno pelo caldo reconfortante."
    ]
  },
  {
    name: "Arroz de Mariscos",
    subgroup: "Arrozes Caldosos",
    desc: "Arroz caldoso português com mistura farta de camarão, mexilhão, amêijoa e lula, cozidos em fumet de peixe.",
    origin: "Portugal",
    time: { prep: "25 min", cook: "30 min", total: "55 min" },
    yield: "4-6 porções",
    difficulty: "Média",
    tags: ["protein:frutos-do-mar", "ingredient:arroz", "ingredient:tomate"],
    ingredients: [
      "300 g de camarão médio, limpo (cascas reservadas)",
      "500 g de mexilhões limpos",
      "300 g de amêijoas (ou vôngole), limpas",
      "200 g de lula em anéis",
      "1 cebola picada",
      "4 dentes de alho picados",
      "3 tomates maduros picados sem pele",
      "1 pimentão vermelho picado",
      "1,5 L de fumet de peixe (feito com as cascas do camarão)",
      "2 xícaras de arroz",
      "100 ml de vinho branco",
      "Azeite de oliva, louro, coentro ou salsinha",
      "Sal e pimenta a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "300 g de camarão médio, limpo (cascas reservadas)",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "grama", item: "camarão médio", prep: "limpo (cascas reservadas)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "500 g de mexilhões limpos",
        group: null,
        items: [
          { qty: 500, qtyRange: null, unit: "grama", item: "mexilhões", prep: "limpos", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "300 g de amêijoas (ou vôngole), limpas",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "grama", item: "amêijoas", prep: "limpas", alt: "vôngole", optional: false, isReference: false },
        ],
      },
      {
        raw: "200 g de lula em anéis",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "grama", item: "lula", prep: "em anéis", alt: null, optional: false, isReference: false },
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
        raw: "4 dentes de alho picados",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: "dente", item: "alho", prep: "picados", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "3 tomates maduros picados sem pele",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: null, item: "tomates maduros", prep: "picados sem pele", alt: null, optional: false, isReference: false },
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
        raw: "1,5 L de fumet de peixe (feito com as cascas do camarão)",
        group: null,
        items: [
          { qty: 1.5, qtyRange: null, unit: "litro", item: "fumet de peixe", prep: "feito com as cascas do camarão", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 xícaras de arroz",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "xicara", item: "arroz", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "100 ml de vinho branco",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "mililitro", item: "vinho branco", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Azeite de oliva, louro, coentro ou salsinha",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "azeite de oliva", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "louro", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "coentro", prep: null, alt: "salsinha", optional: false, isReference: false },
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
      "Prepare um fumet rápido fervendo as cascas do camarão em água por 15 minutos; coe e mantenha quente.",
      "Numa panela larga, aqueça o azeite e refogue a cebola, alho e pimentão até macios, 8-10 minutos.",
      "Junte o tomate picado e cozinhe até desmanchar, formando um refogado encorpado.",
      "Deglaceie com o vinho branco, deixe reduzir por 2 minutos.",
      "Adicione o arroz, misturando bem com o refogado.",
      "Cubra com o fumet quente (proporção generosa, cerca de 3-4 partes de líquido para 1 de arroz), junte o louro.",
      "Cozinhe em fogo médio por 12 minutos, mexendo ocasionalmente.",
      "Junte a lula e cozinhe por mais 3 minutos, depois adicione os mexilhões e amêijoas (com a abertura para cima) e o camarão.",
      "Continue cozinhando por mais 5-6 minutos, até os moluscos abrirem e o camarão ficar rosado — descarte qualquer molusco que não abrir.",
      "Ajuste sal e pimenta, finalize com coentro ou salsinha picada. Sirva imediatamente, bem caldoso."
    ],
    tips: [
      "Adicione os frutos do mar em ordem de tempo de cozimento (lula primeiro, depois moluscos com casca, depois camarão por último) para que cada um fique no ponto certo.",
      "Use a maior variedade possível de frutos do mar frescos disponíveis — é um prato de fartura, tradicionalmente feito para compartilhar em família.",
      "Como todo arroz caldoso, sirva imediatamente após o cozimento, já que o arroz continua absorvendo líquido."
    ]
  },
];
