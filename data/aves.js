// AVES
window.RECIPES = window.RECIPES || {};
window.RECIPES["aves"] = [

  // ===================== FRANGO =====================
  {
    name: "Coq au Vin",
    subgroup: "Frango",
    desc: "Clássico francês de frango cozido lentamente em vinho tinto com bacon, cebolinhas e cogumelos, em molho encorpado.",
    origin: "França (Borgonha)",
    time: { prep: "25 min", cook: "1h30", total: "1h55" },
    yield: "4 porções",
    difficulty: "Média",
    tags: ["protein:frango", "contains:suino", "ingredient:vinho", "ingredient:cogumelo"],
    ingredients: [
      "1 frango caipira, cortado em 8 pedaços (ou 6-8 sobrecoxas com pele)",
      "150 g de bacon em cubos",
      "20 cebolinhas pérola (ou 2 cebolas médias em cubos)",
      "250 g de cogumelos paris, inteiros ou em metades",
      "2 dentes de alho picados",
      "750 ml de vinho tinto encorpado (Borgonha, se possível)",
      "300 ml de fundo escuro de carne ou caldo de frango",
      "2 colheres (sopa) de extrato de tomate",
      "1 folha de louro, 2 ramos de tomilho",
      "30 g de manteiga + 20 g de farinha (para a manteiga com farinha final)",
      "Sal e pimenta a gosto",
      "Salsinha picada para finalizar"
    ],
    ingredientsStructured: [
      {
        raw: "1 frango caipira, cortado em 8 pedaços (ou 6-8 sobrecoxas com pele)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "frango caipira", prep: "cortado em 8 pedaços", alt: "6-8 sobrecoxas com pele", optional: false, isReference: false },
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
        raw: "20 cebolinhas pérola (ou 2 cebolas médias em cubos)",
        group: null,
        items: [
          { qty: 20, qtyRange: null, unit: null, item: "cebolinhas pérola", prep: null, alt: "2 cebolas médias em cubos", optional: false, isReference: false },
        ],
      },
      {
        raw: "250 g de cogumelos paris, inteiros ou em metades",
        group: null,
        items: [
          { qty: 250, qtyRange: null, unit: "grama", item: "cogumelos paris", prep: "inteiros ou em metades", alt: null, optional: false, isReference: false },
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
        raw: "750 ml de vinho tinto encorpado (Borgonha, se possível)",
        group: null,
        items: [
          { qty: 750, qtyRange: null, unit: "mililitro", item: "vinho tinto encorpado", prep: "borgonha, se possível", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "300 ml de fundo escuro de carne ou caldo de frango",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "mililitro", item: "fundo escuro de carne", prep: null, alt: "caldo de frango", optional: false, isReference: false },
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
        raw: "30 g de manteiga + 20 g de farinha (para a manteiga com farinha final)",
        group: null,
        items: [
          { qty: 30, qtyRange: null, unit: "grama", item: "manteiga + 20 g de farinha (para a manteiga com farinha final)", prep: null, alt: null, optional: false, isReference: false },
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
      "Tempere o frango com sal e pimenta. Numa panela funda, doure o bacon até crocante, retire e reserve, deixando a gordura na panela.",
      "Sele o frango na gordura do bacon, em fogo médio-alto, até dourar bem por todos os lados. Retire e reserve.",
      "Na mesma panela, doure as cebolinhas e os cogumelos até pegarem cor. Junte o alho e o extrato de tomate, refogue por 2 minutos.",
      "Volte o frango e o bacon à panela. Cubra com o vinho tinto e o fundo escuro, junte o louro e o tomilho.",
      "Deixe ferver, abaixe o fogo, tampe parcialmente e cozinhe em fogo baixo (ou no forno a 160°C) por 1h-1h15, até o frango ficar bem macio.",
      "Retire o frango e os legumes com uma escumadeira, mantendo aquecidos. Reduza o molho em fogo médio até encorpar levemente.",
      "Prepare a manteiga com farinha (misture a manteiga amolecida com a farinha até formar uma pasta) e incorpore aos poucos ao molho fervente, mexendo até engrossar ao ponto desejado.",
      "Volte o frango e os legumes ao molho, aqueça bem. Finalize com salsinha picada e sirva com purê de batata ou pão."
    ],
    tips: [
      "Use um vinho tinto de boa qualidade que você beberia — ele é reduzido e concentrado, então vinhos ruins deixam o molho com sabor ácido e desagradável.",
      "Marinar o frango no vinho por algumas horas (ou durante a noite) antes de cozinhar aprofunda ainda mais o sabor, embora não seja obrigatório.",
      "Fica ainda melhor no dia seguinte, quando os sabores se assentam completamente."
    ]
  },
  {
    name: "Chicken Cordon Bleu",
    subgroup: "Frango",
    desc: "Filé de frango recheado com presunto e queijo gruyère, empanado e frito (ou assado) até dourar e o queijo derreter por dentro.",
    origin: "Suíça / França",
    time: { prep: "25 min", cook: "20 min", total: "45 min" },
    yield: "4 porções",
    difficulty: "Média",
    tags: ["protein:frango", "contains:suino", "ingredient:queijo"],
    ingredients: [
      "4 filés de peito de frango grandes",
      "4 fatias de presunto",
      "4 fatias de queijo gruyère (ou emmental)",
      "Sal e pimenta a gosto",
      "Farinha de trigo, 2 ovos batidos e farinha panko — para empanar",
      "Óleo para fritar (ou manteiga e azeite, para dourar na frigideira)"
    ],
    ingredientsStructured: [
      {
        raw: "4 filés de peito de frango grandes",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: "file", item: "peito de frango grandes", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "4 fatias de presunto",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: "fatia", item: "presunto", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "4 fatias de queijo gruyère (ou emmental)",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: "fatia", item: "queijo gruyère", prep: null, alt: "emmental", optional: false, isReference: false },
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
        raw: "Farinha de trigo, 2 ovos batidos e farinha panko — para empanar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "farinha de trigo", prep: "para empanar", alt: null, optional: false, isReference: false },
          { qty: 2, qtyRange: null, unit: null, item: "ovos", prep: "batidos, para empanar", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "farinha panko", prep: "para empanar", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Óleo para fritar (ou manteiga e azeite, para dourar na frigideira)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "óleo", prep: "para fritar", alt: "manteiga e azeite, para dourar na frigideira", optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Corte cada filé de frango ao meio, sem chegar a separar completamente, formando uma 'borboleta'. Abra e cubra com filme plástico, batendo levemente com um batedor de carne até uniformizar a espessura.",
      "Tempere com sal e pimenta. Coloque uma fatia de presunto e uma de queijo sobre metade de cada filé aberto.",
      "Feche o filé por cima do recheio, pressionando as bordas para selar bem (use palitos de dente se necessário para prender).",
      "Passe cada filé recheado na farinha, depois no ovo batido e por fim na farinha panko, pressionando para aderir bem.",
      "Para fritar: aqueça óleo a 170-180°C e frite até dourar por igual e o frango cozinhar por dentro, 8-10 minutos, virando na metade.",
      "Alternativa mais leve: doure em frigideira com manteiga e azeite por 3-4 minutos de cada lado, depois termine no forno a 180°C por 10-12 minutos.",
      "Deixe descansar 3-5 minutos antes de cortar (o queijo derretido está muito quente) e sirva."
    ],
    tips: [
      "Selar bem as bordas do frango ao redor do recheio é essencial — se abrir durante o cozimento, o queijo derretido vaza todo para fora.",
      "Congele os filés recheados e empanados por 15-20 minutos antes de fritar/assar — isso ajuda a manter o formato e evita que abram.",
      "Verifique a temperatura interna do frango (74°C) antes de servir, já que a peça é espessa por causa do recheio."
    ]
  },
  {
    name: "Suprême de Frango",
    subgroup: "Frango",
    desc: "Peito de frango com osso da asa, selado com a pele crocante e servido coberto pelo molho Suprême (creme de fundo de aves).",
    origin: "França",
    time: { prep: "10 min", cook: "20 min", total: "30 min" },
    yield: "4 porções",
    difficulty: "Média",
    tags: [],
    ingredients: [
      "4 suprêmes de frango (peito com o osso da asa, pele mantida)",
      "2 colheres (sopa) de manteiga",
      "1 colher (sopa) de azeite",
      "1 receita de molho Suprême (ver receita, categoria Molhos)",
      "Sal e pimenta a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "4 suprêmes de frango (peito com o osso da asa, pele mantida)",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: null, item: "suprêmes de frango", prep: "peito com o osso da asa, pele mantida", alt: null, optional: false, isReference: false },
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
        raw: "1 colher (sopa) de azeite",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "azeite", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 receita de molho Suprême (ver receita, categoria Molhos)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "receita de molho suprême", prep: "ver receita, categoria molhos", alt: null, optional: false, isReference: true },
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
      "Tempere o frango com sal e pimenta, deixando a pele intacta.",
      "Aqueça a manteiga e o azeite numa frigideira em fogo médio-alto. Sele o frango com a pele para baixo primeiro, até dourar e ficar crocante, 5-6 minutos.",
      "Vire e sele o outro lado por mais 2-3 minutos.",
      "Abaixe o fogo para médio-baixo, tampe a frigideira e cozinhe por mais 8-10 minutos, até a temperatura interna atingir 74°C.",
      "Retire o frango e deixe descansar por 5 minutos, coberto levemente com papel-alumínio.",
      "Enquanto isso, prepare o molho Suprême (ver receita).",
      "Sirva o frango fatiado ou inteiro, coberto com o molho Suprême."
    ],
    tips: [
      "'Suprême' é o corte clássico francês: peito de frango com o osso da primeira falange da asa mantido, para uma apresentação mais elegante.",
      "Selar bem a pele primeiro é o que garante a crocância — não mexa o frango nos primeiros minutos, deixe a pele dourar sem interferência.",
      "É a combinação clássica que dá nome ao próprio molho — vale dominar essa dupla junto."
    ]
  },
  {
    name: "Frango Recheado",
    subgroup: "Frango",
    desc: "Frango inteiro assado com recheio de farofa, linguiça, damasco e castanhas, regado com os próprios sucos até dourar.",
    origin: "Internacional",
    time: { prep: "30 min", cook: "1h20", total: "1h50" },
    yield: "6 porções",
    difficulty: "Média",
    tags: ["protein:frango", "contains:suino", "ingredient:castanha"],
    ingredients: [
      "1 frango inteiro (1,8-2 kg)",
      "200 g de farofa ou farinha de rosca temperada",
      "100 g de linguiça calabresa picada (ou bacon)",
      "1 cebola picada, 2 dentes de alho picados",
      "50 g de damasco seco ou ameixa seca picada (opcional, toque agridoce)",
      "50 g de castanhas picadas (opcional)",
      "1 ovo",
      "Caldo de galinha, o suficiente para umedecer o recheio",
      "Manteiga amolecida, ervas frescas, sal e pimenta",
      "1 cebola, 1 cenoura — para a assadeira"
    ],
    ingredientsStructured: [
      {
        raw: "1 frango inteiro (1,8-2 kg)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "frango", prep: "inteiro (1,8-2 kg)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "200 g de farofa ou farinha de rosca temperada",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "grama", item: "farofa", prep: null, alt: "farinha de rosca temperada", optional: false, isReference: false },
        ],
      },
      {
        raw: "100 g de linguiça calabresa picada (ou bacon)",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "grama", item: "linguiça calabresa", prep: "picada", alt: "bacon", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 cebola picada, 2 dentes de alho picados",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cebola", prep: "picada", alt: null, optional: false, isReference: false },
          { qty: 2, qtyRange: null, unit: "dente", item: "alho", prep: "picados", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "50 g de damasco seco ou ameixa seca picada (opcional, toque agridoce)",
        group: null,
        items: [
          { qty: 50, qtyRange: null, unit: "grama", item: "damasco seco", prep: "toque agridoce", alt: "ameixa seca picada", optional: true, isReference: false },
        ],
      },
      {
        raw: "50 g de castanhas picadas (opcional)",
        group: null,
        items: [
          { qty: 50, qtyRange: null, unit: "grama", item: "castanhas", prep: "picadas", alt: null, optional: true, isReference: false },
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
        raw: "Caldo de galinha, o suficiente para umedecer o recheio",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "caldo de galinha", prep: "o suficiente para umedecer o recheio", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Manteiga amolecida, ervas frescas, sal e pimenta",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "manteiga", prep: "amolecida", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "ervas frescas", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "sal", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "pimenta", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 cebola, 1 cenoura — para a assadeira",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cebola", prep: "para a assadeira", alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: null, item: "cenoura", prep: "para a assadeira", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Prepare o recheio: refogue a linguiça, cebola e alho até dourarem. Misture com a farofa/farinha de rosca, damasco, castanhas e o ovo, umedecendo com caldo de galinha até formar uma mistura úmida mas não encharcada. Tempere e deixe esfriar.",
      "Tempere o frango por dentro e por fora com sal, pimenta e ervas. Recheie a cavidade com a farofa preparada, sem compactar demais (o recheio expande no calor).",
      "Feche a abertura com palitos ou costure com barbante culinário, e amarre as pernas juntas.",
      "Espalhe manteiga amolecida por toda a pele do frango.",
      "Disponha numa assadeira sobre uma cama de cebola e cenoura em pedaços grandes (isso perfuma e evita que o fundo grude).",
      "Asse a 200°C por 20 minutos para dourar a pele, depois abaixe para 180°C e continue assando por mais 1 hora, regando com os sucos da assadeira a cada 20 minutos, até a temperatura interna atingir 74°C (tanto na carne quanto no centro do recheio).",
      "Deixe descansar por 15 minutos antes de trinchar e servir, com o recheio à parte ou dentro do frango."
    ],
    tips: [
      "Sempre verifique a temperatura do recheio também, não só da carne — como fica dentro da cavidade, pode cozinhar mais devagar que o resto do frango.",
      "Regar com os sucos da assadeira periodicamente mantém a pele brilhante e a carne suculenta.",
      "O descanso antes de trinchar é importante para os sucos se redistribuírem pela carne, evitando que escorram todos ao cortar."
    ]
  },

  // ===================== PATO =====================
  {
    name: "Confit de Pato",
    subgroup: "Pato",
    desc: "Coxas de pato salgadas e depois cozidas lentamente submersas na própria gordura, até ficarem extremamente macias, e finalizadas crocantes na frigideira.",
    origin: "França (Gasconha)",
    time: { prep: "20 min + 12-24h salga", cook: "2h30", total: "≈15-27h" },
    yield: "4 porções (coxas)",
    difficulty: "Média",
    tags: [],
    ingredients: [
      "4 coxas de pato com sobrecoxa",
      "40 g de sal grosso",
      "4 dentes de alho amassados",
      "2 folhas de louro, alguns ramos de tomilho",
      "1 colher (chá) de pimenta-do-reino em grãos, amassada",
      "800 g de gordura de pato (ou o suficiente para cobrir as coxas)"
    ],
    ingredientsStructured: [
      {
        raw: "4 coxas de pato com sobrecoxa",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: null, item: "coxas de pato com sobrecoxa", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "40 g de sal grosso",
        group: null,
        items: [
          { qty: 40, qtyRange: null, unit: "grama", item: "sal grosso", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "4 dentes de alho amassados",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: "dente", item: "alho", prep: "amassados", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 folhas de louro, alguns ramos de tomilho",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "folha", item: "louro", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: "ramo", item: "tomilho", prep: "alguns", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (chá) de pimenta-do-reino em grãos, amassada",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "pimenta-do-reino em grãos", prep: "amassada", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "800 g de gordura de pato (ou o suficiente para cobrir as coxas)",
        group: null,
        items: [
          { qty: 800, qtyRange: null, unit: "grama", item: "gordura de pato", prep: null, alt: "o suficiente para cobrir as coxas", optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Tempere as coxas de pato com o sal grosso, alho amassado, louro, tomilho e pimenta, esfregando bem por toda a superfície.",
      "Cubra e leve à geladeira por 12 a 24 horas — esse tempo de salga tempera profundamente e começa a extrair um pouco de umidade.",
      "Retire as coxas, limpe o excesso de sal e temperos com papel toalha (não lave com água).",
      "Derreta a gordura de pato numa panela funda. Mergulhe as coxas completamente na gordura morna/quente (deve cobri-las por completo).",
      "Cozinhe em fogo bem baixo (a gordura deve borbulhar apenas de leve, nunca fritar) por 2h30 a 3 horas, até a carne ficar extremamente macia e quase se soltando do osso.",
      "Deixe esfriar as coxas dentro da própria gordura — podem ser guardadas assim, submersas, na geladeira por semanas (método clássico de conservação).",
      "Na hora de servir, retire as coxas da gordura fria, escorra o excesso e sele numa frigideira bem quente, com a pele para baixo, até ficar crocante e dourada."
    ],
    tips: [
      "O confit é tanto uma técnica de cozimento quanto de conservação — as coxas submersas na própria gordura duram semanas na geladeira, ficando ainda mais saborosas com o tempo.",
      "Não pule a etapa da salga prévia — ela é essencial para o sabor e a textura final característicos do confit.",
      "A gordura de pato usada pode ser coada e reaproveitada várias vezes para futuros confits ou para refogar batatas (batatas confitadas em gordura de pato são um clássico acompanhamento)."
    ]
  },
  {
    name: "Magret de Canard",
    subgroup: "Pato",
    desc: "Peito de pato com a pele cortada em losango, selado a frio até crocante e servido rosado, fatiado com molho agridoce de frutas.",
    origin: "França (Gasconha)",
    time: { prep: "10 min", cook: "15 min", total: "25 min" },
    yield: "2 porções",
    difficulty: "Média",
    tags: [],
    ingredients: [
      "1 peito de pato (magret), com a pele",
      "Sal e pimenta-do-reino a gosto",
      "1 receita de Gastrique de frutas vermelhas (ver receita Gastrique, categoria Molhos) ou molho de laranja"
    ],
    ingredientsStructured: [
      {
        raw: "1 peito de pato (magret), com a pele",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "peito de pato (magret)", prep: "com a pele", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Sal e pimenta-do-reino a gosto",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "sal", prep: "a gosto", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "pimenta-do-reino", prep: "a gosto", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 receita de Gastrique de frutas vermelhas (ver receita Gastrique, categoria Molhos) ou molho de laranja",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "receita de gastrique de frutas vermelhas", prep: "ver receita gastrique, categoria molhos", alt: "molho de laranja", optional: false, isReference: true },
        ],
      },
    ],
    steps: [
      "Retire o peito de pato da geladeira 30 minutos antes de cozinhar, para amornar levemente.",
      "Com uma faca afiada, faça cortes em losango na pele (sem atingir a carne), o que ajuda a gordura a derreter e a pele a ficar crocante.",
      "Tempere generosamente com sal e pimenta dos dois lados.",
      "Coloque o peito numa frigideira fria, com a pele para baixo, e só então ligue o fogo em médio — isso derrete a gordura gradualmente sem queimar a pele.",
      "Cozinhe por 8-10 minutos com a pele para baixo, retirando o excesso de gordura que se acumula na frigideira de vez em quando (reserve essa gordura, é ótima para outros usos), até a pele ficar bem dourada e crocante.",
      "Vire e sele o lado da carne por mais 3-4 minutos, para o ponto mal passado a ao ponto (a temperatura interna ideal é 54-57°C).",
      "Retire e deixe descansar por 5-8 minutos, coberto levemente com papel-alumínio.",
      "Fatie em tiras finas na diagonal e sirva com o molho de gastrique de frutas vermelhas ou laranja."
    ],
    tips: [
      "Começar numa frigideira fria (sem pré-aquecer) é a técnica clássica para render a gordura da pele lentamente sem queimá-la — não pule essa etapa.",
      "O peito de pato deve ser servido rosado no centro (como um bife) — cozinhar até bem passado deixa a carne dura e com gosto de fígado forte.",
      "O contraste com molhos agridoces de frutas (gastrique, laranja, cereja) é clássico e equilibra a riqueza da carne."
    ]
  },
];
