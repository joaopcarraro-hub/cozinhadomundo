// FRUTOS DO MAR
window.RECIPES = window.RECIPES || {};
window.RECIPES["frutos-do-mar"] = [

  // ===================== ARROZ E CALDEIRADAS =====================
  {
    name: "Paella",
    subgroup: "Arroz e Caldeiradas",
    desc: "Arroz espanhol de grãos soltos, cozido com açafrão e frutos do mar (ou frango), com crosta dourada no fundo.",
    origin: "Espanha (Valência)",
    time: { prep: "25 min", cook: "35 min", total: "1h" },
    yield: "4-6 porções",
    difficulty: "Média-alta",
    tags: ["contains:frango", "ingredient:arroz", "ingredient:tomate", "ingredient:ervilha", "ingredient:pimentao"],
    ingredients: [
      "400 g de arroz tipo bomba (ou arbóreo, na falta do original)",
      "300 g de camarão médio, limpo (cascas reservadas)",
      "300 g de mexilhões limpos",
      "200 g de lula em anéis",
      "4 pedaços de frango com osso (coxa/sobrecoxa), opcional para paella mista",
      "1 pimentão vermelho picado",
      "3 tomates maduros ralados (só a polpa, sem a pele)",
      "4 dentes de alho picados",
      "1 pitada generosa de açafrão em pistilos (ou corante próprio para paella)",
      "1 L de fumet de peixe (feito com as cascas do camarão) ou caldo de peixe, bem quente",
      "100 g de ervilha (opcional)",
      "Azeite de oliva",
      "Sal a gosto",
      "Rodelas de limão para servir"
    ],
    ingredientsStructured: [
      {
        raw: "400 g de arroz tipo bomba (ou arbóreo, na falta do original)",
        group: null,
        items: [
          { qty: 400, qtyRange: null, unit: "grama", item: "arroz tipo bomba", prep: null, alt: "arbóreo, na falta do original", optional: false, isReference: false },
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
        raw: "300 g de mexilhões limpos",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "grama", item: "mexilhões", prep: "limpos", alt: null, optional: false, isReference: false },
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
        raw: "4 pedaços de frango com osso (coxa/sobrecoxa), opcional para paella mista",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: "pedaco", item: "frango com osso", prep: "coxa/sobrecoxa; opcional para paella mista", alt: null, optional: true, isReference: false },
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
        raw: "3 tomates maduros ralados (só a polpa, sem a pele)",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: null, item: "tomates maduros", prep: "ralados (só a polpa, sem a pele)", alt: null, optional: false, isReference: false },
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
        raw: "1 pitada generosa de açafrão em pistilos (ou corante próprio para paella)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "pitada", item: "açafrão em pistilos", prep: "generosa", alt: "corante próprio para paella", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 L de fumet de peixe (feito com as cascas do camarão) ou caldo de peixe, bem quente",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "litro", item: "fumet de peixe (feito com as cascas do camarão)", prep: null, alt: "caldo de peixe, bem quente", optional: false, isReference: false },
        ],
      },
      {
        raw: "100 g de ervilha (opcional)",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "grama", item: "ervilha", prep: null, alt: null, optional: true, isReference: false },
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
        raw: "Sal a gosto",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "sal", prep: "a gosto", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Rodelas de limão para servir",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "rodelas de limão", prep: "para servir", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Prepare um fumet rápido fervendo as cascas do camarão em água por 15 minutos; coe e mantenha quente.",
      "Numa paellera (ou frigideira larga e rasa), aqueça bastante azeite e doure o frango (se usar), até dourar bem. Retire e reserve.",
      "Na mesma panela, sele rapidamente o camarão e a lula, só para dourar por fora. Retire e reserve.",
      "Refogue o pimentão até macio, junte o alho e o tomate ralado, cozinhando até o molho (sofrito) encorpar e escurecer levemente, 8-10 minutos.",
      "Dissolva o açafrão numa concha do fumet quente e junte à panela.",
      "Adicione o arroz, distribuindo por igual e mexendo só uma vez para incorporar ao sofrito — a partir daqui, NÃO mexa mais o arroz.",
      "Cubra com o fumet quente (cerca de 2,5 vezes o volume do arroz), volte o frango à panela, e ajuste o sal.",
      "Cozinhe em fogo médio-alto por 10 minutos sem mexer, depois abaixe para médio-baixo e continue por mais 8-10 minutos.",
      "Nos últimos 5 minutos, distribua o camarão, a lula e os mexilhões (com a abertura para cima) por cima do arroz, junto com as ervilhas.",
      "Continue cozinhando até o líquido secar completamente e o fundo formar uma crosta dourada e crocante (o 'socarrat', muito valorizado).",
      "Desligue o fogo, cubra com um pano limpo por 5 minutos antes de servir, com rodelas de limão."
    ],
    tips: [
      "A regra de ouro: depois que o arroz entra na panela, não mexa mais — mexer libera o amido e transforma a paella num risoto, o que é o oposto do objetivo (grãos soltos, com uma crosta no fundo).",
      "O 'socarrat' (a crosta caramelizada e levemente queimada no fundo) é considerada a melhor parte da paella por muitos espanhóis — não tenha medo de deixar o fundo formar essa crosta.",
      "Uma paellera larga e rasa (não uma panela funda) é importante — a superfície ampla permite que o líquido evapore por igual e rápido."
    ]
  },

  // ===================== MEXILHÕES E MOLUSCOS =====================
  {
    name: "Moules Marinières",
    subgroup: "Mexilhões e Moluscos",
    desc: "Mexilhões cozidos no vapor com vinho branco, échalote e alho — clássico francês servido com o caldo e pão.",
    origin: "França / Bélgica",
    time: { prep: "15 min", cook: "10 min", total: "25 min" },
    yield: "2-3 porções",
    difficulty: "Fácil",
    tags: ["ingredient:vinho"],
    ingredients: [
      "1,5 kg de mexilhões frescos, limpos e escovados",
      "30 g de manteiga",
      "2 cebolas picadas",
      "2 dentes de alho picados",
      "250 ml de vinho branco seco",
      "100 ml de creme de leite fresco (opcional)",
      "3 colheres (sopa) de salsinha picada",
      "Pimenta a gosto (o sal geralmente não é necessário — os mexilhões já são salgados)",
      "Baguete para acompanhar"
    ],
    ingredientsStructured: [
      {
        raw: "1,5 kg de mexilhões frescos, limpos e escovados",
        group: null,
        items: [
          { qty: 1.5, qtyRange: null, unit: "quilograma", item: "mexilhões", prep: "frescos, limpos e escovados", alt: null, optional: false, isReference: false },
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
        raw: "2 cebolas picadas",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "cebolas", prep: "picadas", alt: null, optional: false, isReference: false },
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
        raw: "250 ml de vinho branco seco",
        group: null,
        items: [
          { qty: 250, qtyRange: null, unit: "mililitro", item: "vinho branco seco", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "100 ml de creme de leite fresco (opcional)",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "mililitro", item: "creme de leite fresco", prep: null, alt: null, optional: true, isReference: false },
        ],
      },
      {
        raw: "3 colheres (sopa) de salsinha picada",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: "colher-sopa", item: "salsinha", prep: "picada", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Pimenta a gosto (o sal geralmente não é necessário — os mexilhões já são salgados)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "pimenta", prep: "a gosto (o sal geralmente não é necessário — os mexilhões já são salgados)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Baguete para acompanhar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "baguete", prep: "para acompanhar", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Verifique os mexilhões: descarte qualquer um que esteja quebrado ou que não feche ao ser pressionado levemente.",
      "Numa panela grande (com tampa), derreta a manteiga e refogue a cebola e o alho até perfumarem, sem dourar, 2-3 minutos.",
      "Junte o vinho branco e deixe ferver por 1-2 minutos.",
      "Adicione todos os mexilhões de uma vez, tampe a panela e cozinhe em fogo alto por 5-6 minutos, balançando a panela ocasionalmente (sem tirar a tampa), até todos abrirem.",
      "Descarte qualquer mexilhão que não tenha aberto após o cozimento.",
      "Se for usar, junte o creme de leite e misture rapidamente.",
      "Finalize com salsinha picada e pimenta a gosto. Sirva imediatamente, na própria panela ou em tigelas fundas, com o caldo, acompanhado de baguete para molhar."
    ],
    tips: [
      "Mexilhões que não abrem depois de cozidos devem ser descartados — é sinal de que não estavam vivos/frescos antes do cozimento.",
      "O caldo perfumado que se forma no fundo da panela é tão importante quanto os mexilhões — sirva sempre com pão para aproveitar até a última gota.",
      "A versão com creme de leite é chamada 'à la crème'; sem ele, é a versão clássica mais simples e tradicional."
    ]
  },
  {
    name: "Polvo Grelhado",
    subgroup: "Mexilhões e Moluscos",
    desc: "Polvo cozido até macio e depois grelhado rápido em fogo alto com azeite, alho e páprica defumada.",
    origin: "Portugal / Mediterrâneo",
    time: { prep: "10 min", cook: "1h10", total: "1h20" },
    yield: "4 porções",
    difficulty: "Média",
    tags: [],
    ingredients: [
      "1 polvo inteiro (1,5-2 kg), limpo",
      "1 cebola, cortada ao meio",
      "1 folha de louro",
      "Azeite de oliva extra virgem",
      "3 dentes de alho picados",
      "Páprica defumada",
      "Sal grosso e pimenta a gosto",
      "Limão para servir"
    ],
    ingredientsStructured: [
      {
        raw: "1 polvo inteiro (1,5-2 kg), limpo",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "polvo", prep: "inteiro (1,5-2 kg), limpo", alt: null, optional: false, isReference: false },
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
        raw: "1 folha de louro",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "folha", item: "louro", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "3 dentes de alho picados",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: "dente", item: "alho", prep: "picados", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Páprica defumada",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "páprica defumada", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Sal grosso e pimenta a gosto",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "sal grosso", prep: "a gosto", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "pimenta", prep: "a gosto", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Limão para servir",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "limão", prep: "para servir", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Se o polvo for fresco (não pré-cozido), bata-o contra uma superfície dura algumas vezes ou congele por 24h e descongele — isso ajuda a quebrar as fibras e amaciar naturalmente.",
      "Numa panela grande com água, junte a cebola e o louro, leve para ferver.",
      "Segure o polvo pela cabeça e mergulhe os tentáculos na água fervente 3 vezes seguidas (isso 'encaracola' os tentáculos de forma bonita), depois submerja por completo.",
      "Reduza para fogo médio-baixo e cozinhe, sem tampa, por 45-60 minutos (dependendo do tamanho), até ficar macio ao espetar com um garfo.",
      "Deixe o polvo esfriar dentro da própria água de cozimento por 15 minutos — isso ajuda a manter a maciez e suculência.",
      "Corte os tentáculos em pedaços grandes. Tempere com azeite, alho picado, páprica, sal e pimenta.",
      "Grelhe numa chapa ou churrasqueira bem quente por 2-3 minutos de cada lado, só até caramelizar levemente por fora e ficar levemente crocante nas pontas.",
      "Sirva com um fio extra de azeite e limão."
    ],
    tips: [
      "Congelar o polvo cru antes de cozinhar (mesmo que só por um dia) é um truque prático e eficaz para amaciá-lo, substituindo métodos mais trabalhosos como bater a carne repetidamente.",
      "Não deixe o polvo esfriar fora da água — o resfriamento dentro do próprio caldo de cozimento é o que garante a textura macia e suculenta ao grelhar depois.",
      "A grelhada final deve ser rápida e em fogo bem alto — o objetivo é só caramelizar a superfície, já que o polvo já está totalmente cozido."
    ]
  },
  {
    name: "Lula Recheada",
    subgroup: "Mexilhões e Moluscos",
    desc: "Lulas inteiras recheadas com seus próprios tentáculos, farinha de rosca e parmesão, cozidas em molho de tomate.",
    origin: "Mediterrâneo",
    time: { prep: "30 min", cook: "35 min", total: "1h05" },
    yield: "4 porções",
    difficulty: "Média",
    tags: ["ingredient:queijo", "ingredient:tomate", "ingredient:ovo"],
    ingredients: [
      "8 lulas médias inteiras, limpas (com os tentáculos separados e reservados)",
      "3 colheres (sopa) de azeite (dividido)",
      "1 cebola picada bem fina",
      "2 dentes de alho picados",
      "Os tentáculos das lulas, picados",
      "100 g de farinha de rosca",
      "50 g de parmesão ralado",
      "1 ovo",
      "2 colheres (sopa) de salsinha picada",
      "400 ml de molho de tomate (ver receita Sauce Tomate, categoria Molhos)",
      "100 ml de vinho branco seco",
      "Sal e pimenta a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "8 lulas médias inteiras, limpas (com os tentáculos separados e reservados)",
        group: null,
        items: [
          { qty: 8, qtyRange: null, unit: null, item: "lulas médias", prep: "inteiras, limpas (com os tentáculos separados e reservados)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "3 colheres (sopa) de azeite (dividido)",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: "colher-sopa", item: "azeite (dividido)", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "Os tentáculos das lulas, picados",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "os tentáculos das lulas", prep: "picados", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "100 g de farinha de rosca",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "grama", item: "farinha de rosca", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "50 g de parmesão ralado",
        group: null,
        items: [
          { qty: 50, qtyRange: null, unit: "grama", item: "parmesão", prep: "ralado", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 ovo",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "ovo", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 colheres (sopa) de salsinha picada",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "colher-sopa", item: "salsinha", prep: "picada", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "400 ml de molho de tomate (ver receita Sauce Tomate, categoria Molhos)",
        group: null,
        items: [
          { qty: 400, qtyRange: null, unit: "mililitro", item: "molho de tomate", prep: "ver receita sauce tomate, categoria molhos", alt: null, optional: false, isReference: true },
        ],
      },
      {
        raw: "100 ml de vinho branco seco",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "mililitro", item: "vinho branco seco", prep: null, alt: null, optional: false, isReference: false },
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
      "Pique os tentáculos reservados bem fino. Numa frigideira, aqueça um pouco do azeite e refogue a cebola e o alho até macios, junte os tentáculos picados e refogue por 3-4 minutos.",
      "Fora do fogo, misture essa mistura com a farinha de rosca, parmesão, ovo e salsinha, formando um recheio úmido e coeso.",
      "Recheie cada lula com essa mistura, usando uma colher pequena, sem apertar demais (o recheio expande no cozimento) — deixe cerca de 1 cm livre na abertura.",
      "Feche a abertura de cada lula com um palito de dente.",
      "Aqueça o restante do azeite numa panela larga e sele as lulas recheadas rapidamente, por todos os lados, até dourarem levemente.",
      "Deglaceie com o vinho branco, deixe reduzir por 2 minutos.",
      "Junte o molho de tomate, tampe e cozinhe em fogo baixo por 25-30 minutos, até as lulas ficarem macias.",
      "Retire os palitos antes de servir. Sirva com o molho, acompanhado de arroz ou pão."
    ],
    stepIngredients: [
      [{ entryIndex: 1, itemIndex: 0, fraction: 0.5 }],
      null,
      null,
      null,
      [{ entryIndex: 1, itemIndex: 0, fraction: 0.5 }],
      null,
      null,
      null,
    ],
    tips: [
      "Não superlote as lulas com recheio — elas encolhem um pouco durante o cozimento e um recheio muito apertado pode romper a lula.",
      "Cozinhar em fogo baixo e por tempo suficiente é importante: lula cozida rápido e em fogo alto fica borrachuda; cozida lentamente no molho, fica macia.",
      "Pode usar as pontas dos tentáculos que sobrarem para enriquecer o próprio molho de tomate, picadas bem fino."
    ]
  },

  // ===================== CRUSTÁCEOS =====================
  {
    name: "Lagosta Thermidor",
    subgroup: "Crustáceos",
    desc: "Carne de lagosta num molho cremoso de conhaque, mostarda e cogumelos, gratinada de volta na própria casca.",
    origin: "França",
    time: { prep: "25 min", cook: "25 min", total: "50 min" },
    yield: "2 porções",
    difficulty: "Alta",
    tags: ["ingredient:queijo", "ingredient:cogumelo", "ingredient:vinho"],
    ingredients: [
      "2 lagostas inteiras (600-700 g cada), vivas ou já cozidas",
      "40 g de manteiga",
      "1 cebola picada",
      "150 g de cogumelos fatiados",
      "50 ml de conhaque",
      "150 ml de vinho branco seco",
      "150 ml de creme de leite fresco",
      "1 colher (chá) de mostarda Dijon",
      "50 g de queijo gruyère ralado",
      "1 gema",
      "Pimenta-caiena, sal e pimenta a gosto",
      "Salsinha picada"
    ],
    ingredientsStructured: [
      {
        raw: "2 lagostas inteiras (600-700 g cada), vivas ou já cozidas",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "lagostas", prep: "inteiras (600-700 g cada), vivas ou já cozidas", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "40 g de manteiga",
        group: null,
        items: [
          { qty: 40, qtyRange: null, unit: "grama", item: "manteiga", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "50 ml de conhaque",
        group: null,
        items: [
          { qty: 50, qtyRange: null, unit: "mililitro", item: "conhaque", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "150 ml de vinho branco seco",
        group: null,
        items: [
          { qty: 150, qtyRange: null, unit: "mililitro", item: "vinho branco seco", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "1 colher (chá) de mostarda Dijon",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "mostarda dijon", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "50 g de queijo gruyère ralado",
        group: null,
        items: [
          { qty: 50, qtyRange: null, unit: "grama", item: "queijo gruyère", prep: "ralado", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 gema",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "gema", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Pimenta-caiena, sal e pimenta a gosto",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "pimenta-caiena", prep: "a gosto", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "sal", prep: "a gosto", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "pimenta", prep: "a gosto", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Salsinha picada",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "salsinha", prep: "picada", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Se as lagostas estiverem vivas, cozinhe em água fervente salgada por 8-10 minutos (para o tamanho indicado). Deixe esfriar levemente.",
      "Corte cada lagosta ao meio no sentido do comprimento. Retire a carne da cauda e das pinças, picando em pedaços grandes. Reserve as cascas (metades) inteiras para rechear depois.",
      "Numa frigideira, derreta a manteiga e refogue a cebola e os cogumelos até dourarem, 5-6 minutos.",
      "Deglaceie com o conhaque (flambe com cuidado, se desejar) e depois com o vinho branco, deixando reduzir pela metade.",
      "Junte o creme de leite e a mostarda, cozinhe por 3-4 minutos até encorpar.",
      "Retire do fogo, tempere com pimenta-caiena, sal e pimenta. Misture uma colher do molho quente com a gema para temperar, depois volte essa mistura à frigideira, mexendo bem (sem ferver mais, para não talhar a gema).",
      "Junte a carne de lagosta picada ao molho, misturando delicadamente.",
      "Preencha as cascas reservadas com essa mistura, polvilhe com o queijo gruyère ralado.",
      "Leve ao forno ou salamandra bem quente por 8-10 minutos, até gratinar e dourar por cima. Finalize com salsinha picada e sirva imediatamente."
    ],
    tips: [
      "Reservar as cascas da lagosta inteiras (cortadas ao meio) para servir o recheio de volta nelas é a apresentação clássica e visualmente impactante do prato.",
      "Não deixe o molho ferver depois de adicionar a gema — ela pode talhar; o calor residual da frigideira já é suficiente para incorporá-la com segurança.",
      "Prato de ocasião especial por excelência — vale reservar para um jantar a dois particularmente comemorativo."
    ]
  },
  {
    name: "Camarão ao Bisque",
    subgroup: "Crustáceos",
    desc: "Camarão salteado num creme espesso feito da própria bisque (sopa de casca de camarão), servido sobre arroz.",
    origin: "França (adaptação)",
    time: { prep: "15 min", cook: "20 min", total: "35 min" },
    yield: "2-3 porções",
    difficulty: "Média",
    tags: [],
    ingredients: [
      "500 g de camarão médio, limpo (cascas reservadas)",
      "1 receita de Bisque pronta (ver receita, categoria Sopas), ou 500 ml se já tiver pronta",
      "2 colheres (sopa) de manteiga",
      "1 fio de conhaque",
      "100 ml de creme de leite fresco",
      "Sal e pimenta a gosto",
      "Arroz branco ou massa, para servir",
      "Salsinha picada"
    ],
    ingredientsStructured: [
      {
        raw: "500 g de camarão médio, limpo (cascas reservadas)",
        group: null,
        items: [
          { qty: 500, qtyRange: null, unit: "grama", item: "camarão médio", prep: "limpo (cascas reservadas)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 receita de Bisque pronta (ver receita, categoria Sopas), ou 500 ml se já tiver pronta",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "receita de bisque", prep: "pronta; ver receita, categoria sopas", alt: "500 ml se já tiver pronta", optional: false, isReference: true },
        ],
      },
      {
        raw: "2 colheres (sopa) de manteiga",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "colher-sopa", item: "manteiga", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 fio de conhaque",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "fio", item: "conhaque", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "Arroz branco ou massa, para servir",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "arroz branco", prep: "para servir", alt: "massa", optional: false, isReference: false },
        ],
      },
      {
        raw: "Salsinha picada",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "salsinha", prep: "picada", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Se ainda não tiver a bisque pronta, prepare-a com as cascas do camarão usado nesta receita (ver receita Bisque, categoria Sopas).",
      "Tempere o camarão com sal e pimenta.",
      "Numa frigideira, derreta a manteiga em fogo alto e sele o camarão rapidamente, 1-2 minutos de cada lado, até ficarem rosados. Retire e reserve.",
      "Na mesma frigideira, adicione um fio de conhaque, deixando reduzir por 30 segundos.",
      "Junte a bisque pronta e o creme de leite, aqueça em fogo médio até engrossar levemente, 5-8 minutos.",
      "Volte o camarão à frigideira, misturando delicadamente no molho só para aquecer, 1-2 minutos (evite cozinhar demais).",
      "Ajuste sal e pimenta, finalize com salsinha picada. Sirva sobre arroz branco ou uma massa simples."
    ],
    tips: [
      "É uma forma prática e elegante de transformar uma bisque (sopa) em prato principal, incorporando o próprio camarão nela.",
      "Não cozinhe o camarão demais na segunda etapa — ele já foi selado antes, então só precisa aquecer no molho para não ficar borrachudo.",
      "Ótimo para aproveitar uma bisque feita com antecedência, transformando-a rapidamente num jantar completo."
    ]
  },
  {
    name: "Camarão à Provençal (para servir com arroz)",
    subgroup: "Crustáceos",
    desc: "Camarão salteado em molho de alho e manteiga, servido sobre arroz branco como prato principal.",
    origin: "França",
    time: { prep: "10 min", cook: "10 min", total: "20 min" },
    yield: "3-4 porções (prato principal)",
    difficulty: "Fácil",
    tags: [],
    ingredients: [
      "1 receita completa de Camarão à Provençal (ver receita, categoria Entradas Quentes) — dobre as quantidades para servir como prato principal",
      "Arroz branco, para acompanhar"
    ],
    ingredientsStructured: [
      {
        raw: "1 receita completa de Camarão à Provençal (ver receita, categoria Entradas Quentes) — dobre as quantidades para servir como prato principal",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "receita completa de camarão à provençal", prep: "ver receita, categoria entradas quentes; dobre as quantidades para servir como prato principal", alt: null, optional: false, isReference: true },
        ],
      },
      {
        raw: "Arroz branco, para acompanhar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "arroz branco", prep: "para acompanhar", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Siga a receita de Camarão à Provençal já detalhada na categoria Entradas Quentes, dobrando as proporções.",
      "Em vez de servir com baguete como entrada, sirva sobre uma cama de arroz branco soltinho, deixando o molho de alho e manteiga se misturar ao arroz.",
      "Finalize com salsinha fresca extra."
    ],
    tips: [
      "É o mesmo preparo clássico da entrada, só ajustado em porção e acompanhamento para funcionar como prato principal de um jantar a dois.",
      "Combina muito bem com um arroz branco bem simples, que absorve o molho de alho e manteiga sem competir com o sabor do camarão."
    ]
  },
];
