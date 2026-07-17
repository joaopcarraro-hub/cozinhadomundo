// ESPANHA
// Nota: Paella (Valenciana) já está em Frutos do Mar; Tortilla Española em Ovos
// Básicos; Croquetas em Entradas Quentes; Gazpacho em Sopas. Aqui o restante.
window.RECIPES = window.RECIPES || {};
window.RECIPES["espanha"] = [

  // ===================== ARROZ E MASSA =====================
  {
    name: "Arroz Negro",
    subgroup: "Arroz e Massa",
    desc: "Arroz de frutos do mar cozido com tinta de lula, que deixa o grão preto, finalizado com uma colherada de aioli.",
    origin: "Espanha (Catalunha)",
    time: { prep: "20 min", cook: "35 min", total: "55 min" },
    yield: "4 porções",
    difficulty: "Média-alta",
    tags: ["protein:frutos-do-mar", "ingredient:arroz"],
    ingredients: [
      "350 g de arroz tipo bomba (ou arbóreo)",
      "300 g de lula, em anéis (limpe e reserve as bolsas de tinta, se disponíveis, ou compre tinta de lula em sachê)",
      "200 g de camarão médio, limpo (cascas reservadas)",
      "1 cebola picada, 1 pimentão vermelho picado",
      "4 dentes de alho picados",
      "2 tomates ralados",
      "2 sachês de tinta de lula (ou a tinta reservada)",
      "1 L de fumet de peixe (feito com as cascas do camarão), bem quente",
      "Azeite de oliva",
      "Aioli (ver receita, categoria Clássicos Contemporâneos), para servir",
      "Sal a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "350 g de arroz tipo bomba (ou arbóreo)",
        group: null,
        items: [
          { qty: 350, qtyRange: null, unit: "grama", item: "arroz tipo bomba", prep: null, alt: "arbóreo", optional: false, isReference: false },
        ],
      },
      {
        raw: "300 g de lula, em anéis (limpe e reserve as bolsas de tinta, se disponíveis, ou compre tinta de lula em sachê)",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "grama", item: "lula", prep: "em anéis (limpe e reserve as bolsas de tinta, se disponíveis, ou compre tinta de lula em sachê)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "200 g de camarão médio, limpo (cascas reservadas)",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "grama", item: "camarão médio", prep: "limpo (cascas reservadas)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 cebola picada, 1 pimentão vermelho picado",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cebola", prep: "picada", alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: null, item: "pimentão vermelho", prep: "picado", alt: null, optional: false, isReference: false },
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
        raw: "2 tomates ralados",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "tomates", prep: "ralados", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 sachês de tinta de lula (ou a tinta reservada)",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "sachês de tinta de lula", prep: null, alt: "a tinta reservada", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 L de fumet de peixe (feito com as cascas do camarão), bem quente",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "litro", item: "fumet de peixe (feito com as cascas do camarão)", prep: "bem quente", alt: null, optional: false, isReference: false },
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
        raw: "Aioli (ver receita, categoria Clássicos Contemporâneos), para servir",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "aioli", prep: "ver receita, categoria clássicos contemporâneos; para servir", alt: null, optional: false, isReference: true },
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
      "Numa paellera ou frigideira larga, aqueça o azeite e sele rapidamente a lula e o camarão, só para dourar por fora. Retire e reserve.",
      "Na mesma panela, refogue a cebola e o pimentão até macios, junte o alho e o tomate ralado, cozinhando até o sofrito encorpar, 8-10 minutos.",
      "Dissolva a tinta de lula numa concha do fumet quente e misture bem.",
      "Adicione o arroz, misturando com o sofrito por 1-2 minutos.",
      "Cubra com o fumet (já com a tinta dissolvida), distribuindo por igual. A partir daqui, evite mexer muito o arroz.",
      "Cozinhe em fogo médio-alto por 10 minutos, depois abaixe para médio-baixo e continue por mais 8-10 minutos.",
      "Nos últimos 5 minutos, distribua a lula e o camarão reservados por cima.",
      "Deixe secar o líquido completamente, formando o arroz preto característico. Sirva com uma colherada de aioli por cima."
    ],
    tips: [
      "A tinta de lula é o que dá a cor preta intensa e o sabor umami profundo do prato — encontre em peixarias ou compre sachês prontos em empórios espanhóis/italianos.",
      "O aioli branco por cima cria um contraste visual marcante com o arroz preto, além de complementar bem o sabor do mar.",
      "Assim como na paella, evite mexer demais o arroz depois que o líquido é adicionado, para manter os grãos soltos."
    ]
  },
  {
    name: "Fideuà",
    subgroup: "Arroz e Massa",
    desc: "A 'paella de massa' valenciana — macarrão fino torrado e cozinhado com frutos do mar, servido com aioli.",
    origin: "Espanha (Valência)",
    time: { prep: "20 min", cook: "25 min", total: "45 min" },
    yield: "4 porções",
    difficulty: "Média",
    tags: ["protein:frutos-do-mar"],
    ingredients: [
      "350 g de massa fideuà (ou vermicelli/cabelo-de-anjo, quebrados em pedaços de 3-4 cm)",
      "300 g de camarão médio, limpo (cascas reservadas)",
      "200 g de lula em anéis",
      "8 mexilhões limpos",
      "1 cebola picada, 1 pimentão vermelho picado",
      "3 dentes de alho picados",
      "2 tomates ralados",
      "1 pitada de açafrão",
      "1 L de fumet de peixe (feito com as cascas do camarão), bem quente",
      "Azeite de oliva",
      "Aioli, para servir (ver receita, categoria Clássicos Contemporâneos)"
    ],
    ingredientsStructured: [
      {
        raw: "350 g de massa fideuà (ou vermicelli/cabelo-de-anjo, quebrados em pedaços de 3-4 cm)",
        group: null,
        items: [
          { qty: 350, qtyRange: null, unit: "grama", item: "massa fideuà", prep: null, alt: "vermicelli/cabelo-de-anjo, quebrados em pedaços de 3-4 cm", optional: false, isReference: false },
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
        raw: "1 cebola picada, 1 pimentão vermelho picado",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cebola", prep: "picada", alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: null, item: "pimentão vermelho", prep: "picado", alt: null, optional: false, isReference: false },
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
        raw: "2 tomates ralados",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "tomates", prep: "ralados", alt: null, optional: false, isReference: false },
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
        raw: "1 L de fumet de peixe (feito com as cascas do camarão), bem quente",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "litro", item: "fumet de peixe (feito com as cascas do camarão)", prep: "bem quente", alt: null, optional: false, isReference: false },
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
        raw: "Aioli, para servir (ver receita, categoria Clássicos Contemporâneos)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "aioli", prep: "para servir; ver receita, categoria clássicos contemporâneos", alt: null, optional: false, isReference: true },
        ],
      },
    ],
    steps: [
      "Prepare um fumet rápido fervendo as cascas do camarão em água por 15 minutos; coe e mantenha quente.",
      "Numa paellera ou frigideira larga, torre a massa fideuà a seco (sem gordura) em fogo médio, mexendo sempre, até dourar levemente — isso realça o sabor de torrado da massa. Reserve.",
      "Na mesma panela, aqueça o azeite e sele rapidamente a lula e o camarão. Retire e reserve.",
      "Refogue a cebola e o pimentão até macios, junte o alho e o tomate ralado, cozinhando até o sofrito encorpar.",
      "Dissolva o açafrão numa concha do fumet e junte à panela.",
      "Volte a massa torrada à panela, distribuindo por igual. Cubra com o fumet quente.",
      "Cozinhe em fogo médio, sem mexer muito (como na paella), por 10-12 minutos.",
      "Nos últimos 5 minutos, distribua o camarão, a lula e os mexilhões (com a abertura para cima) por cima.",
      "Continue até o líquido secar e a massa ficar al dente, com as pontas ligeiramente crocantes. Sirva com aioli."
    ],
    tips: [
      "Torrar a massa antes de cozinhar é o passo que define o prato — dá um sabor de torrado que a paella (com arroz) não tem.",
      "É basicamente a versão valenciana da paella, mas com massa fina no lugar do arroz — usa a mesma técnica de sofrito e cozimento sem mexer.",
      "O aioli servido à parte (para cada um adicionar a gosto) é o acompanhamento tradicional obrigatório."
    ]
  },

  // ===================== TAPAS CLÁSSICAS =====================
  {
    name: "Gambas al Ajillo",
    subgroup: "Tapas Clássicas",
    desc: "Camarões salteados em azeite abundante com alho e pimenta, servidos borbulhando com pão para molhar.",
    origin: "Espanha",
    time: { prep: "10 min", cook: "8 min", total: "18 min" },
    yield: "2-3 porções (tapa)",
    difficulty: "Fácil",
    tags: ["protein:frutos-do-mar"],
    ingredients: [
      "400 g de camarão médio, limpo",
      "6 dentes de alho fatiados finos",
      "1 pimenta dedo-de-moça (ou flocos de pimenta) a gosto",
      "150 ml de azeite de oliva",
      "1 fio de conhaque ou vinho branco (opcional)",
      "Salsinha picada",
      "Sal a gosto",
      "Pão rústico para servir"
    ],
    ingredientsStructured: [
      {
        raw: "400 g de camarão médio, limpo",
        group: null,
        items: [
          { qty: 400, qtyRange: null, unit: "grama", item: "camarão médio", prep: "limpo", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "6 dentes de alho fatiados finos",
        group: null,
        items: [
          { qty: 6, qtyRange: null, unit: "dente", item: "alho", prep: "fatiados finos", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 pimenta dedo-de-moça (ou flocos de pimenta) a gosto",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "pimenta dedo-de-moça", prep: "a gosto", alt: "flocos de pimenta", optional: false, isReference: false },
        ],
      },
      {
        raw: "150 ml de azeite de oliva",
        group: null,
        items: [
          { qty: 150, qtyRange: null, unit: "mililitro", item: "azeite de oliva", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 fio de conhaque ou vinho branco (opcional)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "fio", item: "conhaque", prep: null, alt: "vinho branco", optional: true, isReference: false },
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
      {
        raw: "Pão rústico para servir",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "pão rústico", prep: "para servir", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Tempere o camarão com sal.",
      "Numa frigideira ou cazuela de barro individual, aqueça o azeite em fogo médio com o alho fatiado e a pimenta, até o alho começar a dourar levemente (sem queimar).",
      "Suba o fogo para alto e adicione o camarão, salteando rapidamente por 2-3 minutos, até ficarem rosados por fora e opacos por dentro.",
      "Se for usar, adicione o conhaque ou vinho branco, deixando reduzir por 30 segundos.",
      "Finalize com salsinha picada.",
      "Sirva imediatamente, ainda borbulhando no azeite quente, com bastante pão para molhar no óleo aromatizado."
    ],
    tips: [
      "A quantidade generosa de azeite não é acidente — o próprio óleo aromatizado com alho e pimenta é parte essencial da experiência, para mergulhar o pão.",
      "Não cozinhe o camarão demais — o tempo total na frigideira deve ser rápido, só o suficiente para ficarem rosados.",
      "Servido tradicionalmente em pequenas cazuelas de barro individuais, ainda fervendo levemente ao chegar à mesa."
    ]
  },
  {
    name: "Pulpo a la Gallega",
    subgroup: "Tapas Clássicas",
    desc: "Polvo cozido e fatiado sobre rodelas de batata, temperado só com azeite, sal grosso e páprica — tapa clássica galega.",
    origin: "Espanha (Galícia)",
    time: { prep: "10 min", cook: "50 min", total: "1h" },
    yield: "4 porções (tapa)",
    difficulty: "Média",
    tags: ["protein:frutos-do-mar", "ingredient:batata"],
    ingredients: [
      "1 polvo (1,2-1,5 kg), limpo",
      "1 cebola, cortada ao meio",
      "3 batatas médias, cozidas e fatiadas em rodelas grossas",
      "Azeite de oliva extra virgem",
      "Páprica doce e páprica picante (pimentón dulce e picante), a gosto",
      "Sal grosso"
    ],
    ingredientsStructured: [
      {
        raw: "1 polvo (1,2-1,5 kg), limpo",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "polvo", prep: "(1,2-1,5 kg), limpo", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 cebola, cortada ao meio",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cebola", prep: "cortada ao meio", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "3 batatas médias, cozidas e fatiadas em rodelas grossas",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: null, item: "batatas médias", prep: "cozidas e fatiadas em rodelas grossas", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Azeite de oliva extra virgem",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "azeite de oliva extra virgem", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Páprica doce e páprica picante (pimentón dulce e picante), a gosto",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "páprica doce (pimentón dulce)", prep: "a gosto", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "páprica picante (pimentón picante)", prep: "a gosto", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Sal grosso",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "sal grosso", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Cozinhe o polvo seguindo a técnica clássica (ver receita Polvo Grelhado, categoria Frutos do Mar, para o processo de amaciar e cozinhar) até ficar macio, cerca de 45-50 minutos, junto com a cebola na água.",
      "Deixe esfriar dentro da própria água de cozimento por 10-15 minutos.",
      "Corte os tentáculos em rodelas de cerca de 1,5 cm de espessura.",
      "Numa travessa de madeira (tradicional), disponha as rodelas de batata cozida no fundo.",
      "Arrume as rodelas de polvo por cima das batatas.",
      "Regue generosamente com azeite de oliva.",
      "Polvilhe com sal grosso e as páprica doce e picante, formando um contraste visual e de sabor.",
      "Sirva em temperatura ambiente ou levemente morno, sem necessidade de mais cozimento."
    ],
    tips: [
      "Diferente do polvo grelhado, aqui o polvo não vai à grelha — é servido diretamente após o cozimento, cortado e temperado apenas com azeite e páprica.",
      "A combinação de páprica doce e picante polvilhada por cima é a assinatura visual e de sabor do prato galego.",
      "Tradicionalmente servido numa tábua ou prato de madeira, nunca em porcelana — parte da apresentação clássica das 'pulperías' galegas."
    ]
  },
  {
    name: "Patatas Bravas",
    subgroup: "Tapas Clássicas",
    desc: "Batatas fritas crocantes cobertas com molho bravas picante de páprica e um fio de aioli.",
    origin: "Espanha (Madrid)",
    time: { prep: "15 min", cook: "30 min", total: "45 min" },
    yield: "4 porções (tapa)",
    difficulty: "Fácil",
    tags: ["diet:vegetariana", "ingredient:batata"],
    ingredients: [
      "800 g de batata, descascada e em cubos grandes",
      "Óleo, o suficiente para fritar",
      "Para o molho bravas: 2 colheres (sopa) de azeite, 1 colher (sopa) de farinha, 1 colher (sopa) de páprica doce, 1 colher (chá) de páprica picante, 200 ml de caldo, 1 colher (sopa) de extrato de tomate, 1 colher (chá) de vinagre",
      "Aioli, para servir (ver receita, categoria Clássicos Contemporâneos)",
      "Sal grosso"
    ],
    ingredientsStructured: [
      {
        raw: "800 g de batata, descascada e em cubos grandes",
        group: null,
        items: [
          { qty: 800, qtyRange: null, unit: "grama", item: "batata", prep: "descascada e em cubos grandes", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Óleo, o suficiente para fritar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "óleo", prep: "o suficiente para fritar", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Para o molho bravas: 2 colheres (sopa) de azeite, 1 colher (sopa) de farinha, 1 colher (sopa) de páprica doce, 1 colher (chá) de páprica picante, 200 ml de caldo, 1 colher (sopa) de extrato de tomate, 1 colher (chá) de vinagre",
        group: "molho bravas",
        items: [
          { qty: 2, qtyRange: null, unit: "colher-sopa", item: "azeite", prep: null, alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "farinha", prep: null, alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "páprica doce", prep: null, alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "páprica picante", prep: null, alt: null, optional: false, isReference: false },
          { qty: 200, qtyRange: null, unit: "mililitro", item: "caldo", prep: null, alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "extrato de tomate", prep: null, alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "vinagre", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Aioli, para servir (ver receita, categoria Clássicos Contemporâneos)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "aioli", prep: "para servir; ver receita, categoria clássicos contemporâneos", alt: null, optional: false, isReference: true },
        ],
      },
      {
        raw: "Sal grosso",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "sal grosso", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Cozinhe os cubos de batata em água salgada por 5 minutos (pré-cozimento, deixa por dentro macio e ajuda a crocância por fora depois). Escorra e seque bem.",
      "Frite as batatas em óleo quente (170°C) até dourarem bem e ficarem crocantes por fora, 8-10 minutos. Escorra em papel toalha e tempere com sal grosso.",
      "Prepare o molho bravas: aqueça o azeite, junte a farinha e cozinhe por 1 minuto. Adicione as páprica, misturando rapidamente.",
      "Junte o extrato de tomate e o caldo aos poucos, mexendo até engrossar levemente, cerca de 5 minutos.",
      "Finalize com o vinagre, ajuste o sal.",
      "Sirva as batatas fritas cobertas com o molho bravas quente e um fio de aioli por cima (ou os dois molhos servidos separadamente, ao lado)."
    ],
    tips: [
      "Pré-cozinhar a batata antes de fritar é o segredo para um interior macio e um exterior extra crocante.",
      "A combinação clássica madrilenha é servir os dois molhos juntos (bravas picante + aioli cremoso) sobre as mesmas batatas — o contraste é parte da experiência.",
      "Uma das tapas mais populares e universalmente encontradas em bares por toda a Espanha."
    ]
  },
  {
    name: "Jamón Ibérico (como servir)",
    subgroup: "Tapas Clássicas",
    desc: "Guia para fatiar e servir o presunto cru espanhol de bolota em temperatura ambiente, puro ou sobre pão com tomate.",
    origin: "Espanha",
    time: { prep: "10 min", cook: "0 min", total: "10 min" },
    yield: "Para petiscar",
    difficulty: "Fácil",
    tags: ["protein:suino", "ingredient:tomate"],
    ingredients: [
      "1 peça (ou fatias já cortadas) de jamón ibérico de bellota, de boa procedência",
      "Pão rústico ou torradas finas",
      "Azeite de oliva extra virgem (opcional)",
      "Tomate ralado (para o clássico 'pan con tomate' espanhol, opcional)"
    ],
    ingredientsStructured: [
      {
        raw: "1 peça (ou fatias já cortadas) de jamón ibérico de bellota, de boa procedência",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "peça de jamón ibérico de bellota", prep: "de boa procedência", alt: "fatias já cortadas", optional: false, isReference: false },
        ],
      },
      {
        raw: "Pão rústico ou torradas finas",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "pão rústico", prep: null, alt: "torradas finas", optional: false, isReference: false },
        ],
      },
      {
        raw: "Azeite de oliva extra virgem (opcional)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "azeite de oliva extra virgem", prep: null, alt: null, optional: true, isReference: false },
        ],
      },
      {
        raw: "Tomate ralado (para o clássico 'pan con tomate' espanhol, opcional)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "tomate ralado", prep: "para o clássico 'pan con tomate' espanhol", alt: null, optional: true, isReference: false },
        ],
      },
    ],
    steps: [
      "Retire o jamón da geladeira 20-30 minutos antes de servir — deve ser degustado em temperatura ambiente, nunca gelado, para a gordura amolecer e liberar todo o sabor.",
      "Se for cortar de uma peça inteira, use uma faca longa e flexível própria para jamón, cortando fatias bem finas e praticamente translúcidas, sempre no mesmo sentido.",
      "Disponha as fatias num prato, sem empilhar (para não grudarem umas nas outras).",
      "Sirva simplesmente assim, ou acompanhado de pão rústico levemente tostado.",
      "Para o clássico 'pan con tomate': tostar o pão, esfregar com um dente de alho, ralar tomate maduro por cima, regar com azeite e sal, e coroar com uma fatia de jamón."
    ],
    tips: [
      "Jamón ibérico de bellota (porcos alimentados com bolota, criados em liberdade) é a categoria mais nobre e cara — vale a diferença de preço para uma ocasião especial.",
      "Nunca sirva gelado — a gordura entremeada precisa estar em temperatura ambiente para derreter levemente na boca, revelando toda a complexidade de sabor.",
      "Menos é mais: jamón de qualidade não precisa de quase nada além dele mesmo e um bom pão — evite cobri-lo com muitos outros sabores."
    ]
  },

  // ===================== SOPAS FRIAS E GUISADOS =====================
  {
    name: "Salmorejo",
    subgroup: "Sopas Frias e Guisados",
    desc: "Creme frio e espesso de tomate batido com pão, mais encorpado que o gaspacho, servido com ovo cozido e presunto.",
    origin: "Espanha (Córdoba)",
    time: { prep: "15 min", cook: "0 min", total: "15 min + gelar" },
    yield: "4 porções",
    difficulty: "Fácil",
    tags: ["contains:suino", "ingredient:tomate", "ingredient:ovo"],
    ingredients: [
      "1 kg de tomate bem maduro, picado",
      "150 g de pão amanhecido, sem casca, picado",
      "1 dente de alho",
      "150 ml de azeite de oliva extra virgem",
      "2 colheres (sopa) de vinagre de xerez",
      "Sal a gosto",
      "2 ovos cozidos duros, picados, para servir",
      "Presunto cru em tiras finas, para servir",
      "Azeite extra, para finalizar"
    ],
    ingredientsStructured: [
      {
        raw: "1 kg de tomate bem maduro, picado",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "quilograma", item: "tomate bem maduro", prep: "picado", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "150 g de pão amanhecido, sem casca, picado",
        group: null,
        items: [
          { qty: 150, qtyRange: null, unit: "grama", item: "pão amanhecido", prep: "sem casca, picado", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 dente de alho",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "dente", item: "alho", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "150 ml de azeite de oliva extra virgem",
        group: null,
        items: [
          { qty: 150, qtyRange: null, unit: "mililitro", item: "azeite de oliva extra virgem", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 colheres (sopa) de vinagre de xerez",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "colher-sopa", item: "vinagre de xerez", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "2 ovos cozidos duros, picados, para servir",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "ovos", prep: "cozidos duros, picados, para servir", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Presunto cru em tiras finas, para servir",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "presunto cru", prep: "em tiras finas, para servir", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Azeite extra, para finalizar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "azeite extra", prep: "para finalizar", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Deixe o pão de molho num pouco de água por 5-10 minutos, depois esprema bem o excesso.",
      "Bata o tomate, o pão embebido e o alho no liquidificador em velocidade alta, até ficar completamente liso.",
      "Com o liquidificador ligado em velocidade baixa, adicione o azeite em fio fino, emulsionando a mistura até ficar espessa e aveludada — a textura deve ser bem mais grossa que um gaspacho comum.",
      "Tempere com vinagre e sal a gosto.",
      "Passe por peneira se quiser uma textura ainda mais fina e sedosa.",
      "Leve à geladeira por no mínimo 2 horas, bem gelado.",
      "Sirva em tigelas, finalizado com ovo cozido picado, tiras de presunto cru e um fio extra de azeite por cima."
    ],
    tips: [
      "A quantidade generosa de pão é o que diferencia o salmorejo do gaspacho — resulta numa textura muito mais espessa e cremosa, quase como um creme.",
      "Use tomates bem maduros e doces — como no gaspacho, é o ingrediente que define completamente o resultado final.",
      "Os toppings de ovo cozido e presunto não são opcionais na tradição cordobesa — fazem parte da identidade completa do prato."
    ]
  },
  {
    name: "Fabada Asturiana",
    subgroup: "Sopas Frias e Guisados",
    desc: "Ensopado espesso de feijão branco com chouriço, morcela e toucinho, prato de inverno das Astúrias.",
    origin: "Espanha (Astúrias)",
    time: { prep: "20 min + 8h molho", cook: "2h30", total: "≈11h" },
    yield: "6 porções",
    difficulty: "Média",
    tags: ["protein:suino", "ingredient:feijao"],
    ingredients: [
      "500 g de feijão branco grande (tipo fabada, ou cannellini), de molho por 8h",
      "200 g de chouriço espanhol (chorizo), inteiro ou em pedaços grandes",
      "200 g de morcela (blood sausage/morcilla)",
      "150 g de toucinho (lacón ou toucinho salgado)",
      "1 cebola inteira",
      "3 dentes de alho",
      "1 pitada de açafrão",
      "1 folha de louro",
      "Sal a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "500 g de feijão branco grande (tipo fabada, ou cannellini), de molho por 8h",
        group: null,
        items: [
          { qty: 500, qtyRange: null, unit: "grama", item: "feijão branco grande", prep: "tipo fabada, ou cannellini, de molho por 8h", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "200 g de chouriço espanhol (chorizo), inteiro ou em pedaços grandes",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "grama", item: "chouriço espanhol (chorizo)", prep: "inteiro ou em pedaços grandes", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "200 g de morcela (blood sausage/morcilla)",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "grama", item: "morcela (blood sausage/morcilla)", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "150 g de toucinho (lacón ou toucinho salgado)",
        group: null,
        items: [
          { qty: 150, qtyRange: null, unit: "grama", item: "toucinho (lacón ou toucinho salgado)", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 cebola inteira",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cebola inteira", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "3 dentes de alho",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: "dente", item: "alho", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "1 folha de louro",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "folha", item: "louro", prep: null, alt: null, optional: false, isReference: false },
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
      "Escorra o feijão de molho e coloque numa panela grande com água fria suficiente para cobrir generosamente.",
      "Adicione a cebola inteira, o alho, o louro e todas as carnes (chouriço, morcela, toucinho).",
      "Leve para ferver em fogo médio, retirando a espuma que sobe à superfície nos primeiros minutos.",
      "Abaixe para fogo bem baixo (deve borbulhar só de leve) e cozinhe destampado ou parcialmente tampado por 2 a 2h30, adicionando água fria ocasionalmente se necessário ('assustar' o feijão, técnica tradicional que ajuda a cozinhar por igual sem estourar a casca).",
      "Nos últimos 20 minutos, dissolva o açafrão num pouco do caldo quente e junte à panela.",
      "Retire a cebola inteira. Ajuste o sal (as carnes salgadas já temperam bastante).",
      "Retire as carnes, corte em pedaços e volte à panela, ou sirva as carnes inteiras ao lado do feijão.",
      "Sirva bem quente, num prato fundo, com o caldo espesso e cremoso característico."
    ],
    tips: [
      "A técnica de 'assustar' o feijão (adicionar água fria durante o cozimento em fervura) é tradicional das Astúrias para que os grãos cozinhem por igual sem que a casca estoure prematuramente.",
      "Não mexa o feijão com força durante o cozimento — mexa delicadamente ou apenas balance a panela, para manter os grãos inteiros.",
      "É um prato de inverno denso e reconfortante, com o caldo naturalmente engrossado pelo próprio amido do feijão, sem necessidade de nenhum espessante."
    ]
  },
];
