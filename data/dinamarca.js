// DINAMARCA
// Nota: Gravlax já está em Técnicas Contemporâneas Avançadas / Peixes (Salmão Gravlax).
// Algumas variações muito próximas da lista original (ex.: as diferentes conservas de
// arenque, ou Tebirkes/Spandauer como variações de Wienerbrød) foram consolidadas num
// único card, com as diferenças explicadas nas dicas, em vez de repetir receitas quase idênticas.
window.RECIPES = window.RECIPES || {};
window.RECIPES["dinamarca"] = [

  // ===================== PÃES E DOCES DE PADARIA =====================
  {
    name: "Rugbrød",
    subgroup: "Pães e Doces de Padaria",
    desc: "Pão de centeio dinamarquês denso e escuro, fermentado por horas — a base fatiada fina de todo Smørrebrød.",
    origin: "Dinamarca",
    time: { prep: "20 min + 12h fermentação", cook: "1h", total: "≈13h" },
    yield: "1 pão grande",
    difficulty: "Média",
    tags: ["diet:vegetariana"],
    ingredients: [
      "300 g de grãos de centeio inteiros (ou centeio em flocos grossos)",
      "200 g de farinha de centeio integral",
      "150 g de farinha de trigo",
      "100 g de sementes variadas (girassol, linhaça, abóbora)",
      "300 g de fermento natural de centeio (rugsurdej) ativo, ou 10 g de fermento biológico seco",
      "500 ml de água morna",
      "15 g de sal",
      "1 colher (sopa) de melaço ou açúcar mascavo (opcional, tradicional)"
    ],
    ingredientsStructured: [
      {
        raw: "300 g de grãos de centeio inteiros (ou centeio em flocos grossos)",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "grama", item: "grãos de centeio", prep: "inteiros", alt: "centeio em flocos grossos", optional: false, isReference: false },
        ],
      },
      {
        raw: "200 g de farinha de centeio integral",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "grama", item: "farinha de centeio integral", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "150 g de farinha de trigo",
        group: null,
        items: [
          { qty: 150, qtyRange: null, unit: "grama", item: "farinha de trigo", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "100 g de sementes variadas (girassol, linhaça, abóbora)",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "grama", item: "sementes variadas", prep: "girassol, linhaça, abóbora", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "300 g de fermento natural de centeio (rugsurdej) ativo, ou 10 g de fermento biológico seco",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "grama", item: "fermento natural de centeio (rugsurdej)", prep: "ativo", alt: "10 g de fermento biológico seco", optional: false, isReference: false },
        ],
      },
      {
        raw: "500 ml de água morna",
        group: null,
        items: [
          { qty: 500, qtyRange: null, unit: "mililitro", item: "água morna", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "15 g de sal",
        group: null,
        items: [
          { qty: 15, qtyRange: null, unit: "grama", item: "sal", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (sopa) de melaço ou açúcar mascavo (opcional, tradicional)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "melaço", prep: "tradicional", alt: "açúcar mascavo", optional: true, isReference: false },
        ],
      },
    ],
    steps: [
      "Se for usar os grãos de centeio inteiros, deixe de molho em água por 8-12 horas antes de usar, para amaciar.",
      "Misture os grãos escorridos, farinha de centeio, farinha de trigo, sementes, fermento, água, sal e melaço, formando uma massa densa e pegajosa (bem diferente de uma massa de pão de trigo comum — não deve ficar lisa e elástica).",
      "Transfira para uma forma de pão retangular untada (o rugbrød é sempre assado em forma, nunca modelado livremente).",
      "Cubra e deixe fermentar em local morno por 8-10 horas (ou durante a noite), até crescer visivelmente, embora menos dramaticamente que um pão de trigo.",
      "Asse a 180°C por 55-65 minutos, até a casca ficar bem escura e firme, e o pão soar oco ao bater na base.",
      "Deixe esfriar completamente na forma antes de desenformar e fatiar — o rugbrød precisa esfriar por completo para a estrutura firmar (fatiar quente resulta num pão pesado e úmido demais)."
    ],
    tips: [
      "É a base literal de todo o Smørrebrød dinamarquês — fatiado bem fino, é o 'prato' sobre o qual quase todos os toppings tradicionais são servidos.",
      "A massa densa e pegajosa é normal e esperada — o rugbrød não se parece nem se comporta como um pão de trigo em nenhuma etapa.",
      "Fica ainda melhor no dia seguinte ao assar, e se conserva por mais de uma semana bem embrulhado, ficando cada vez mais saboroso."
    ]
  },
  {
    name: "Franskbrød",
    subgroup: "Pães e Doces de Padaria",
    desc: "Pão branco dinamarquês do dia a dia, macio e alongado — o 'pão francês' usado em sanduíches e café da manhã.",
    origin: "Dinamarca",
    time: { prep: "20 min + 1h30 fermentação", cook: "30 min", total: "2h20" },
    yield: "1 pão grande",
    difficulty: "Fácil",
    tags: ["diet:vegetariana"],
    ingredients: [
      "500 g de farinha de trigo",
      "10 g de fermento biológico seco",
      "10 g de sal",
      "20 g de açúcar",
      "30 g de manteiga amolecida",
      "300 ml de leite morno"
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
        raw: "10 g de fermento biológico seco",
        group: null,
        items: [
          { qty: 10, qtyRange: null, unit: "grama", item: "fermento biológico seco", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "10 g de sal",
        group: null,
        items: [
          { qty: 10, qtyRange: null, unit: "grama", item: "sal", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "20 g de açúcar",
        group: null,
        items: [
          { qty: 20, qtyRange: null, unit: "grama", item: "açúcar", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "30 g de manteiga amolecida",
        group: null,
        items: [
          { qty: 30, qtyRange: null, unit: "grama", item: "manteiga", prep: "amolecida", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "300 ml de leite morno",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "mililitro", item: "leite morno", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Misture a farinha, fermento, sal e açúcar.",
      "Adicione a manteiga e o leite morno, misturando até formar uma massa. Sove por 10 minutos até ficar lisa e elástica.",
      "Cubra e deixe fermentar por 1 hora, até dobrar de volume.",
      "Modele num formato alongado (semelhante a uma baguete mais grossa e macia) e disponha numa assadeira.",
      "Deixe fermentar por mais 30-40 minutos.",
      "Faça alguns cortes diagonais na superfície. Asse a 200°C por 25-30 minutos, até dourar bem por cima e soar oco na base."
    ],
    tips: [
      "É o pão branco cotidiano dinamarquês, mais macio e menos denso que o rugbrød — usado para sanduíches do dia a dia e café da manhã.",
      "O nome significa literalmente 'pão francês', refletindo a influência da panificação francesa na tradição de pães brancos macios da Escandinávia.",
      "Ótimo servido fresco com manteiga, ou levemente tostado no café da manhã."
    ]
  },
  {
    name: "Rundstykker",
    subgroup: "Pães e Doces de Padaria",
    desc: "Pãezinhos de café da manhã dinamarqueses, crocantes por fora e macios por dentro — tipo pão francês em bolinha.",
    origin: "Dinamarca",
    time: { prep: "20 min + 1h fermentação", cook: "18 min", total: "1h40" },
    yield: "12 pãezinhos",
    difficulty: "Fácil",
    tags: ["diet:vegetariana", "ingredient:ovo"],
    ingredients: [
      "500 g de farinha de trigo",
      "10 g de fermento biológico seco",
      "10 g de sal",
      "15 g de açúcar",
      "30 g de manteiga amolecida",
      "300 ml de água morna",
      "1 ovo batido, para pincelar",
      "Sementes de papoula ou gergelim, para polvilhar (opcional)"
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
        raw: "10 g de fermento biológico seco",
        group: null,
        items: [
          { qty: 10, qtyRange: null, unit: "grama", item: "fermento biológico seco", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "10 g de sal",
        group: null,
        items: [
          { qty: 10, qtyRange: null, unit: "grama", item: "sal", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "15 g de açúcar",
        group: null,
        items: [
          { qty: 15, qtyRange: null, unit: "grama", item: "açúcar", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "30 g de manteiga amolecida",
        group: null,
        items: [
          { qty: 30, qtyRange: null, unit: "grama", item: "manteiga", prep: "amolecida", alt: null, optional: false, isReference: false },
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
        raw: "1 ovo batido, para pincelar",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "ovo", prep: "batido, para pincelar", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Sementes de papoula ou gergelim, para polvilhar (opcional)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "sementes de papoula", prep: "para polvilhar", alt: "gergelim", optional: true, isReference: false },
        ],
      },
    ],
    steps: [
      "Misture a farinha, fermento, sal e açúcar. Junte a manteiga e a água morna, formando uma massa. Sove por 8-10 minutos até ficar lisa.",
      "Cubra e deixe fermentar por 1 hora, até dobrar de volume.",
      "Divida em 12 porções, modele bolinhas lisas rolando cada porção contra a bancada.",
      "Disponha numa assadeira, com espaço entre elas, e deixe descansar por 15-20 minutos.",
      "Pincele com ovo batido e polvilhe com sementes, se desejar.",
      "Asse a 220°C por 15-18 minutos, até dourarem bem por cima."
    ],
    tips: [
      "São os pãezinhos de café da manhã mais tradicionais da Dinamarca, geralmente comprados fresquinhos e quentes na padaria pela manhã.",
      "Ótimos cortados ao meio com manteiga e uma fatia de queijo ou presunto para um café da manhã simples e rápido.",
      "A crosta deve ficar levemente crocante por fora, com o miolo macio e aerado por dentro."
    ]
  },
  {
    name: "Boller",
    subgroup: "Pães e Doces de Padaria",
    desc: "Pãezinhos macios e levemente doces, amanteigados — meio-termo entre pão e doce de padaria dinamarquês.",
    origin: "Dinamarca",
    time: { prep: "20 min + 1h fermentação", cook: "15 min", total: "1h35" },
    yield: "12 unidades",
    difficulty: "Fácil",
    tags: ["diet:vegetariana", "ingredient:ovo"],
    ingredients: [
      "500 g de farinha de trigo",
      "10 g de fermento biológico seco",
      "60 g de açúcar",
      "8 g de sal",
      "1 ovo",
      "60 g de manteiga amolecida",
      "250 ml de leite morno",
      "1 gema, para pincelar"
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
        raw: "10 g de fermento biológico seco",
        group: null,
        items: [
          { qty: 10, qtyRange: null, unit: "grama", item: "fermento biológico seco", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "60 g de açúcar",
        group: null,
        items: [
          { qty: 60, qtyRange: null, unit: "grama", item: "açúcar", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "8 g de sal",
        group: null,
        items: [
          { qty: 8, qtyRange: null, unit: "grama", item: "sal", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "60 g de manteiga amolecida",
        group: null,
        items: [
          { qty: 60, qtyRange: null, unit: "grama", item: "manteiga", prep: "amolecida", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "250 ml de leite morno",
        group: null,
        items: [
          { qty: 250, qtyRange: null, unit: "mililitro", item: "leite morno", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 gema, para pincelar",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "gema", prep: "para pincelar", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Misture a farinha, fermento, açúcar e sal.",
      "Adicione o ovo, a manteiga e o leite morno, misturando até formar uma massa. Sove por 8-10 minutos até ficar lisa, macia e levemente pegajosa.",
      "Cubra e deixe fermentar por 1 hora, até dobrar de volume.",
      "Divida em 12 porções, modele bolinhas lisas.",
      "Disponha numa assadeira, deixe descansar por 15-20 minutos.",
      "Pincele com a gema batida. Asse a 200°C por 12-15 minutos, até dourarem."
    ],
    tips: [
      "São levemente mais doces e amanteigados que o Rundstykker, funcionando quase como uma ponte entre pão e doce de padaria.",
      "Base para variações recheadas com passas, canela ou cardamomo, muito populares na tradição de padaria escandinava.",
      "Ótimos para servir com geleia e manteiga no café da manhã ou lanche da tarde."
    ]
  },
  {
    name: "Wienerbrød (Danish Pastry)",
    subgroup: "Pães e Doces de Padaria",
    desc: "Massa folhada amanteigada (mesma técnica do croissant), recheada com creme, amêndoa ou geleia — a famosa 'folhada dinamarquesa'.",
    origin: "Dinamarca",
    time: { prep: "1h + 12h entre dobras", cook: "20 min", total: "≈14h" },
    yield: "12 unidades",
    difficulty: "Alta",
    tags: ["diet:vegetariana", "ingredient:ovo", "ingredient:castanha"],
    ingredients: [
      "500 g de farinha de trigo",
      "10 g de sal, 60 g de açúcar",
      "12 g de fermento biológico seco",
      "2 ovos",
      "180 ml de leite frio",
      "280 g de manteiga gelada (para o empasse/laminação)",
      "Recheio a gosto: creme de confeiteiro (remonce), pasta de amêndoas, ou geleia",
      "1 ovo batido, para pincelar",
      "Glacê de açúcar de confeiteiro, para finalizar"
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
        raw: "10 g de sal, 60 g de açúcar",
        group: null,
        items: [
          { qty: 10, qtyRange: null, unit: "grama", item: "sal", prep: null, alt: null, optional: false, isReference: false },
          { qty: 60, qtyRange: null, unit: "grama", item: "açúcar", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "12 g de fermento biológico seco",
        group: null,
        items: [
          { qty: 12, qtyRange: null, unit: "grama", item: "fermento biológico seco", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 ovos",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "ovos", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "180 ml de leite frio",
        group: null,
        items: [
          { qty: 180, qtyRange: null, unit: "mililitro", item: "leite frio", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "280 g de manteiga gelada (para o empasse/laminação)",
        group: null,
        items: [
          { qty: 280, qtyRange: null, unit: "grama", item: "manteiga gelada (para o empasse/laminação)", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Recheio a gosto: creme de confeiteiro (remonce), pasta de amêndoas, ou geleia",
        group: "recheio",
        items: [
          { qty: null, qtyRange: null, unit: null, item: "creme de confeiteiro (remonce)", prep: "a gosto", alt: "pasta de amêndoas; ou geleia", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 ovo batido, para pincelar",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "ovo", prep: "batido, para pincelar", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Glacê de açúcar de confeiteiro, para finalizar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "glacê de açúcar de confeiteiro", prep: "para finalizar", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Prepare e lamine a massa seguindo exatamente a mesma técnica do Croissant (ver receita, categoria Padaria): détrempe, empasse de manteiga, e 3 dobras triplas com descanso na geladeira entre cada uma.",
      "Após a última dobra, descanse a massa laminada na geladeira por pelo menos 2 horas.",
      "Abra a massa numa espessura de cerca de 4mm e corte em quadrados ou retângulos.",
      "Para a versão 'Tebirkes' (com sementes de papoula): recheie com uma pasta de remonce (manteiga + açúcar + farinha), enrole e polvilhe generosamente com sementes de papoula antes de assar.",
      "Para a versão 'Spandauer' (formato de moinho): dobre as quatro pontas do quadrado para o centro, com um recheio de creme de confeiteiro ou geleia visível no meio.",
      "Disponha numa assadeira, deixe fermentar (proof) por 45-60 minutos, até crescerem visivelmente.",
      "Pincele com ovo batido. Asse a 200°C por 15-20 minutos, até dourarem bem.",
      "Deixe esfriar levemente e finalize com um fio de glacê de açúcar."
    ],
    tips: [
      "É a mesma técnica de laminação do croissant francês — na Dinamarca, esse tipo de massa é a base de dezenas de variações de formato e recheio, todas chamadas coletivamente de 'wienerbrød'.",
      "Tebirkes (com sementes de papoula) e Spandauer (formato de moinho, com creme no centro) são apenas duas das variações mais populares — o mesmo princípio de massa laminada serve de base para todas.",
      "Curiosamente, na própria Áustria (Viena, 'Wien'), esse doce é chamado de 'dansk wienerbrød' (pão dinamarquês vienense) — uma troca de nomes entre os dois países."
    ]
  },
  {
    name: "Kanelsnegle",
    subgroup: "Pães e Doces de Padaria",
    desc: "Rolinho de canela escandinavo — massa amanteigada enrolada com açúcar mascavo e canela, em formato de espiral.",
    origin: "Dinamarca",
    time: { prep: "40 min + 1h30 fermentação", cook: "20 min", total: "2h30" },
    yield: "12 unidades",
    difficulty: "Média",
    tags: ["diet:vegetariana", "ingredient:ovo"],
    ingredients: [
      "500 g de farinha de trigo",
      "10 g de fermento biológico seco",
      "80 g de açúcar",
      "8 g de sal",
      "1 ovo",
      "80 g de manteiga amolecida",
      "220 ml de leite morno",
      "Para o recheio: 100 g de manteiga amolecida, 100 g de açúcar mascavo, 2 colheres (sopa) de canela em pó",
      "1 ovo batido, para pincelar"
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
        raw: "10 g de fermento biológico seco",
        group: null,
        items: [
          { qty: 10, qtyRange: null, unit: "grama", item: "fermento biológico seco", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "80 g de açúcar",
        group: null,
        items: [
          { qty: 80, qtyRange: null, unit: "grama", item: "açúcar", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "8 g de sal",
        group: null,
        items: [
          { qty: 8, qtyRange: null, unit: "grama", item: "sal", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "80 g de manteiga amolecida",
        group: null,
        items: [
          { qty: 80, qtyRange: null, unit: "grama", item: "manteiga", prep: "amolecida", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "220 ml de leite morno",
        group: null,
        items: [
          { qty: 220, qtyRange: null, unit: "mililitro", item: "leite morno", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Para o recheio: 100 g de manteiga amolecida, 100 g de açúcar mascavo, 2 colheres (sopa) de canela em pó",
        group: "recheio",
        items: [
          { qty: 100, qtyRange: null, unit: "grama", item: "manteiga", prep: "amolecida", alt: null, optional: false, isReference: false },
          { qty: 100, qtyRange: null, unit: "grama", item: "açúcar mascavo", prep: null, alt: null, optional: false, isReference: false },
          { qty: 2, qtyRange: null, unit: "colher-sopa", item: "canela em pó", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 ovo batido, para pincelar",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "ovo", prep: "batido, para pincelar", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Misture a farinha, fermento, açúcar e sal. Adicione o ovo, manteiga e leite morno, formando uma massa. Sove por 10 minutos até ficar lisa e macia.",
      "Cubra e deixe fermentar por 1 hora, até dobrar de volume.",
      "Abra a massa num retângulo grande, cerca de 40x30 cm.",
      "Espalhe a manteiga amolecida por toda a superfície, polvilhe com açúcar mascavo e canela, cobrindo bem.",
      "Enrole a massa firmemente a partir do lado mais longo, formando um cilindro compacto.",
      "Corte em fatias de cerca de 3 cm de espessura e disponha numa assadeira, com a espiral virada para cima.",
      "Deixe fermentar por mais 30 minutos.",
      "Pincele com ovo batido. Asse a 190°C por 18-20 minutos, até dourarem bem."
    ],
    tips: [
      "É o 'rolinho de canela' escandinavo, primo próximo do cinnamon roll — a massa dinamarquesa costuma ser um pouco menos doce e mais amanteigada que a versão americana.",
      "Enrolar bem apertado é o que garante a espiral bem definida e visível depois de assado.",
      "Ótimo servido morno, direto do forno, com uma xícara de café — parte essencial da tradição do 'hygge' dinamarquês."
    ]
  },

  // ===================== SMØRREBRØD =====================
  {
    name: "Smørrebrød (a base)",
    subgroup: "Smørrebrød",
    desc: "Guia-base do sanduíche aberto dinamarquês: fatia de pão de centeio com manteiga, coberta com um topping à escolha.",
    origin: "Dinamarca",
    time: { prep: "10 min", cook: "0 min", total: "10 min" },
    yield: "Por porção",
    difficulty: "Fácil",
    tags: [],
    ingredients: [
      "1 fatia fina de rugbrød (ver receita)",
      "Manteiga em temperatura ambiente",
      "Cobertura (topping) à escolha — ver receitas específicas de arenque, camarão e roast beef",
      "Guarnições finais: ervas frescas, limão, cebola roxa, rabanete, ovo cozido, etc."
    ],
    ingredientsStructured: [
      {
        raw: "1 fatia fina de rugbrød (ver receita)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "fatia fina de rugbrød", prep: "ver receita", alt: null, optional: false, isReference: true },
        ],
      },
      {
        raw: "Manteiga em temperatura ambiente",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "manteiga", prep: "em temperatura ambiente", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Cobertura (topping) à escolha — ver receitas específicas de arenque, camarão e roast beef",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "cobertura (topping)", prep: "à escolha; ver receitas específicas de arenque, camarão e roast beef", alt: null, optional: false, isReference: true },
        ],
      },
      {
        raw: "Guarnições finais: ervas frescas, limão, cebola roxa, rabanete, ovo cozido, etc.",
        group: "guarnições finais",
        items: [
          { qty: null, qtyRange: null, unit: null, item: "ervas frescas", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "limão", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "cebola roxa", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "rabanete", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "ovo cozido", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Passe uma camada generosa de manteiga em temperatura ambiente sobre a fatia de rugbrød — essa camada não é opcional, ela sela o pão e evita que o topping o encharque.",
      "Escolha e prepare o topping principal (proteína) de sua preferência.",
      "Disponha o topping cobrindo toda a fatia, geralmente em camadas ou de forma esteticamente elaborada.",
      "Finalize com as guarnições apropriadas ao topping escolhido.",
      "Sirva imediatamente, sempre com garfo e faca — smørrebrød tradicionalmente não se come com as mãos."
    ],
    tips: [
      "'Smørrebrød' significa literalmente 'pão com manteiga' — a manteiga é a base estrutural de todo sanduíche aberto dinamarquês, nunca pule essa camada.",
      "Existe uma etiqueta tradicional sobre a ordem de consumo numa refeição de smørrebrød: geralmente começa-se pelos de peixe, depois carne, terminando com queijo.",
      "Cada topping tem sua combinação clássica de guarnições — nunca é só 'qualquer coisa' em cima do pão, há tradições bem estabelecidas para cada tipo."
    ]
  },
  {
    name: "Smørrebrød de Arenque",
    subgroup: "Smørrebrød",
    desc: "Sanduíche aberto de pão de centeio com arenque em conserva, cebola roxa e alcaparras — o mais tradicional dos smørrebrød.",
    origin: "Dinamarca",
    time: { prep: "10 min", cook: "0 min", total: "10 min" },
    yield: "4 porções",
    difficulty: "Fácil",
    tags: ["protein:peixe", "ingredient:ovo"],
    ingredients: [
      "4 fatias de rugbrød, amanteigadas",
      "1 receita de Arenque em Conserva (ver receita), fatiado",
      "1 cebola roxa, fatiada fina",
      "Alcaparras",
      "Endro fresco",
      "1 ovo cozido, fatiado (opcional)"
    ],
    ingredientsStructured: [
      {
        raw: "4 fatias de rugbrød, amanteigadas",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: "fatia", item: "rugbrød", prep: "amanteigadas", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 receita de Arenque em Conserva (ver receita), fatiado",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "receita de arenque em conserva", prep: "ver receita; fatiado", alt: null, optional: false, isReference: true },
        ],
      },
      {
        raw: "1 cebola roxa, fatiada fina",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cebola roxa", prep: "fatiada fina", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Alcaparras",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "alcaparras", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Endro fresco",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "endro fresco", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 ovo cozido, fatiado (opcional)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "ovo cozido", prep: "fatiado", alt: null, optional: true, isReference: false },
        ],
      },
    ],
    steps: [
      "Disponha o arenque em conserva generosamente sobre a fatia de rugbrød amanteigada.",
      "Cubra com fatias finas de cebola roxa e alcaparras.",
      "Finalize com endro fresco picado e, se desejar, fatias de ovo cozido por cima.",
      "Sirva imediatamente, com garfo e faca."
    ],
    tips: [
      "É o smørrebrød mais tradicional e simbólico da Dinamarca — praticamente todo cardápio de smørrebrød começa com uma opção de arenque.",
      "A acidez da conserva de arenque contrasta muito bem com a riqueza da manteiga por baixo — essa combinação é a essência do prato.",
      "Existem dezenas de variações de arenque em conserva (curry, mostarda, tomate) — cada uma resulta num smørrebrød ligeiramente diferente."
    ]
  },
  {
    name: "Smørrebrød de Camarão",
    subgroup: "Smørrebrød",
    desc: "Sanduíche aberto com uma montanha de camarão cozido e maionese sobre pão amanteigado, finalizado com limão e endro.",
    origin: "Dinamarca",
    time: { prep: "10 min", cook: "0 min", total: "10 min" },
    yield: "4 porções",
    difficulty: "Fácil",
    tags: ["protein:frutos-do-mar", "ingredient:limao"],
    ingredients: [
      "4 fatias de franskbrød ou rugbrød, amanteigadas",
      "400 g de camarão pequeno, cozido e descascado",
      "4 colheres (sopa) de maionese",
      "1 limão, em rodelas finas",
      "Endro fresco",
      "Alface, para forrar"
    ],
    ingredientsStructured: [
      {
        raw: "4 fatias de franskbrød ou rugbrød, amanteigadas",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: "fatia", item: "franskbrød", prep: "amanteigadas", alt: "rugbrød", optional: false, isReference: false },
        ],
      },
      {
        raw: "400 g de camarão pequeno, cozido e descascado",
        group: null,
        items: [
          { qty: 400, qtyRange: null, unit: "grama", item: "camarão pequeno", prep: "cozido e descascado", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "4 colheres (sopa) de maionese",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: "colher-sopa", item: "maionese", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 limão, em rodelas finas",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "limão", prep: "em rodelas finas", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Endro fresco",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "endro fresco", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Alface, para forrar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "alface", prep: "para forrar", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Forre a fatia de pão amanteigada com uma folha de alface.",
      "Empilhe o camarão cozido generosamente por cima, formando uma pequena montanha.",
      "Adicione uma colher de maionese por cima ou ao lado.",
      "Decore com rodelas de limão e endro fresco.",
      "Sirva imediatamente, bem gelado."
    ],
    tips: [
      "Um dos toppings mais populares e queridos, especialmente no verão — a quantidade generosa de camarão é característica, nunca poupe nessa parte.",
      "Use camarões pequenos e doces (tipo camarão nórdico) se possível — são tradicionalmente usados na Escandinávia para esse prato.",
      "Sirva bem gelado, já que é uma preparação totalmente fria."
    ]
  },
  {
    name: "Smørrebrød de Roast Beef",
    subgroup: "Smørrebrød",
    desc: "Sanduíche aberto com fatias finas de rosbife frio, molho remoulade dinamarquês e cebola roxa ou crispy.",
    origin: "Dinamarca",
    time: { prep: "10 min", cook: "0 min", total: "10 min" },
    yield: "4 porções",
    difficulty: "Fácil",
    tags: ["protein:boi"],
    ingredients: [
      "4 fatias de rugbrød, amanteigadas",
      "300 g de roast beef fatiado bem fino (fatias frias)",
      "4 colheres (sopa) de remoulade (ver receita)",
      "1 cebola roxa fatiada fina, ou cebolas crispy fritas",
      "Rabanete fatiado fino",
      "Raiz-forte ralada (opcional)"
    ],
    ingredientsStructured: [
      {
        raw: "4 fatias de rugbrød, amanteigadas",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: "fatia", item: "rugbrød", prep: "amanteigadas", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "300 g de roast beef fatiado bem fino (fatias frias)",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "grama", item: "roast beef", prep: "fatiado bem fino (fatias frias)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "4 colheres (sopa) de remoulade (ver receita)",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: "colher-sopa", item: "remoulade", prep: "ver receita", alt: null, optional: false, isReference: true },
        ],
      },
      {
        raw: "1 cebola roxa fatiada fina, ou cebolas crispy fritas",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cebola roxa", prep: "fatiada fina", alt: "cebolas crispy fritas", optional: false, isReference: false },
        ],
      },
      {
        raw: "Rabanete fatiado fino",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "rabanete", prep: "fatiado fino", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Raiz-forte ralada (opcional)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "raiz-forte", prep: "ralada", alt: null, optional: true, isReference: false },
        ],
      },
    ],
    steps: [
      "Disponha as fatias de roast beef sobrepostas, formando ondas, sobre a fatia de pão amanteigada.",
      "Adicione uma colher generosa de remoulade por cima ou ao lado.",
      "Finalize com cebola roxa (ou cebola crispy frita), rabanete fatiado e, se desejar, um toque de raiz-forte ralada.",
      "Sirva imediatamente."
    ],
    tips: [
      "A cebola frita crocante (remoulade) por cima é um toque texturalmente importante, contrastando com a maciez da carne.",
      "O remoulade dinamarquês (mais parecido com uma maionese de picles temperada) é bem diferente do remoulade francês — ver a receita específica na categoria Acompanhamentos.",
      "Um dos toppings mais 'robustos' do repertório de smørrebrød, ótimo para quem busca algo mais substancioso."
    ]
  },

  // ===================== CARNES =====================
  {
    name: "Flæskesteg",
    subgroup: "Carnes",
    desc: "Pernil de porco assado com a pele cortada e salgada até ficar crocante ('crackling') — prato central do Natal dinamarquês.",
    origin: "Dinamarca",
    time: { prep: "20 min", cook: "2h", total: "2h20" },
    yield: "8 porções",
    difficulty: "Média",
    tags: ["protein:suino"],
    ingredients: [
      "2,5 kg de pernil de porco com pele, pele com cortes profundos e paralelos (score)",
      "Sal grosso, generoso",
      "4 folhas de louro",
      "Pimenta-do-reino a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "2,5 kg de pernil de porco com pele, pele com cortes profundos e paralelos (score)",
        group: null,
        items: [
          { qty: 2.5, qtyRange: null, unit: "quilograma", item: "pernil de porco com pele", prep: "pele com cortes profundos e paralelos (score)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Sal grosso, generoso",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "sal grosso", prep: "generoso", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "4 folhas de louro",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: "folha", item: "louro", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Pimenta-do-reino a gosto",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "pimenta-do-reino", prep: "a gosto", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Certifique-se de que a pele está bem seca (deixe descoberta na geladeira por algumas horas, se possível, para secar ainda mais).",
      "Esfregue sal grosso generosamente dentro dos cortes da pele, penetrando bem.",
      "Insira uma folha de louro em alguns dos cortes.",
      "Tempere a carne por baixo com pimenta-do-reino.",
      "Disponha numa assadeira com grade, com a pele para cima. Asse a 200°C por 30 minutos.",
      "Abaixe para 160°C e continue assando por mais 1h20-1h30, até a temperatura interna atingir 68-70°C.",
      "Se a pele não estiver totalmente crocante e bolhada, suba para 230°C nos últimos 10-15 minutos, vigiando de perto.",
      "Deixe descansar 15-20 minutos antes de fatiar entre os cortes da pele, revelando o 'crackling' crocante em cada fatia."
    ],
    tips: [
      "A pele bem seca antes de assar (assim como na Porchetta italiana) é o segredo absoluto do 'crackling' crocante — sem esse passo, a pele fica borrachuda.",
      "É o prato central tradicional do Natal dinamarquês (julefrokost), servido com repolho roxo (Rødkål) e batatas caramelizadas (Brunede Kartofler).",
      "Os cortes profundos e paralelos na pele (score) devem ir até a gordura, mas não atingir a carne — isso permite que a gordura renda e a pele estufe uniformemente."
    ]
  },
  {
    name: "Stegt Flæsk med Persillesovs",
    subgroup: "Carnes",
    desc: "Fatias de barriga de porco fritas até crocantes, servidas com batata cozida e molho branco de salsinha — o 'prato nacional' informal.",
    origin: "Dinamarca",
    time: { prep: "10 min", cook: "25 min", total: "35 min" },
    yield: "4 porções",
    difficulty: "Fácil",
    tags: ["protein:suino", "ingredient:batata"],
    ingredients: [
      "600 g de barriga de porco, fatiada (cerca de 1 cm de espessura)",
      "Sal e pimenta a gosto",
      "1 receita de Persillesovs (molho de salsinha, ver receita)",
      "800 g de batata, cozida inteira, para servir"
    ],
    ingredientsStructured: [
      {
        raw: "600 g de barriga de porco, fatiada (cerca de 1 cm de espessura)",
        group: null,
        items: [
          { qty: 600, qtyRange: null, unit: "grama", item: "barriga de porco", prep: "fatiada (cerca de 1 cm de espessura)", alt: null, optional: false, isReference: false },
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
        raw: "1 receita de Persillesovs (molho de salsinha, ver receita)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "receita de persillesovs", prep: "molho de salsinha; ver receita", alt: null, optional: false, isReference: true },
        ],
      },
      {
        raw: "800 g de batata, cozida inteira, para servir",
        group: null,
        items: [
          { qty: 800, qtyRange: null, unit: "grama", item: "batata", prep: "cozida inteira, para servir", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Tempere as fatias de barriga de porco com sal e pimenta.",
      "Numa frigideira grande, sem óleo (a própria gordura da barriga é suficiente), frite as fatias em fogo médio, por 5-6 minutos de cada lado, até dourarem bem e ficarem crocantes.",
      "Escorra em papel toalha.",
      "Prepare o Persillesovs (ver receita).",
      "Sirva as fatias crocantes de barriga com batatas cozidas inteiras e o molho de salsinha por cima das batatas."
    ],
    tips: [
      "É considerado por muitos dinamarqueses o 'prato nacional' informal do país — simples, mas extremamente querido e presente na cultura popular.",
      "As fatias devem ficar bem crocantes, quase como um bacon grosso — não com pressa, deixe o tempo necessário na frigideira.",
      "O contraste entre a carne crocante e salgada com o molho cremoso de salsinha sobre a batata macia é a essência do prato."
    ]
  },
  {
    name: "Frikadeller",
    subgroup: "Carnes",
    desc: "Almôndegas dinamarquesas ovaladas e achatadas, de carne de porco e boi moídas, fritas e servidas com batata e repolho roxo.",
    origin: "Dinamarca",
    time: { prep: "20 min + 20 min gelando", cook: "15 min", total: "55 min" },
    yield: "16 unidades",
    difficulty: "Fácil",
    tags: ["protein:suino", "protein:boi", "ingredient:ovo", "ingredient:batata"],
    ingredients: [
      "400 g de carne de porco moída",
      "200 g de carne bovina moída",
      "1 cebola pequena, ralada",
      "1 ovo",
      "3 colheres (sopa) de farinha de trigo",
      "100 ml de leite ou água gelada",
      "Sal e pimenta a gosto",
      "Manteiga e óleo, para fritar",
      "Batatas cozidas e Rødkål, para servir"
    ],
    ingredientsStructured: [
      {
        raw: "400 g de carne de porco moída",
        group: null,
        items: [
          { qty: 400, qtyRange: null, unit: "grama", item: "carne de porco", prep: "moída", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "200 g de carne bovina moída",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "grama", item: "carne bovina", prep: "moída", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 cebola pequena, ralada",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cebola pequena", prep: "ralada", alt: null, optional: false, isReference: false },
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
        raw: "3 colheres (sopa) de farinha de trigo",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: "colher-sopa", item: "farinha de trigo", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "100 ml de leite ou água gelada",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "mililitro", item: "leite", prep: null, alt: "água gelada", optional: false, isReference: false },
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
        raw: "Manteiga e óleo, para fritar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "manteiga", prep: "para fritar", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "óleo", prep: "para fritar", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Batatas cozidas e Rødkål, para servir",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "batatas cozidas", prep: "para servir", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "rødkål", prep: "para servir", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Misture as carnes moídas com a cebola ralada, ovo, farinha e sal, batendo bem com uma colher (ou na batedeira) por alguns minutos.",
      "Adicione o leite/água gelada aos poucos, continuando a bater até a mistura ficar homogênea, levemente aerada e um pouco mais mole que uma almôndega comum.",
      "Leve à geladeira por 20 minutos, para firmar e facilitar moldar.",
      "Aqueça uma mistura de manteiga e óleo numa frigideira em fogo médio.",
      "Com duas colheres molhadas em água, modele porções ovaladas (formato característico, mais achatado que uma almôndega redonda) e deslize na frigideira.",
      "Frite por 5-6 minutos de cada lado, até dourarem bem por fora e cozinharem por completo por dentro.",
      "Sirva quentes, com batatas cozidas e repolho roxo (Rødkål)."
    ],
    tips: [
      "Bater bem a mistura de carne (incorporando ar) antes de moldar é o que dá a textura macia e levemente fofa característica, diferente de uma almôndega italiana mais compacta.",
      "O formato oval e achatado (não redondo) é a marca registrada do frikadelle dinamarquês.",
      "Uma variação menor e mais fina, frita até bem crocante, é chamada 'krebinetter' — mesma base de carne, apenas moldada em formato de hambúrguer achatado e empanada em farinha de rosca antes de fritar."
    ]
  },
  {
    name: "Medisterpølse",
    subgroup: "Carnes",
    desc: "Linguiça fresca de porco dinamarquesa, cozida na frigideira e servida com batata cozida e molho de salsinha ou repolho roxo.",
    origin: "Dinamarca",
    time: { prep: "20 min", cook: "20 min", total: "40 min" },
    yield: "4 porções",
    difficulty: "Fácil",
    tags: ["protein:suino", "ingredient:batata"],
    ingredients: [
      "800 g de linguiça fresca de porco tipo medister (ou linguiça fresca de porco comum, em rolo)",
      "1 colher (sopa) de manteiga",
      "800 g de batata, cozida",
      "1 receita de Persillesovs (ver receita) ou Rødkål (ver receita), para acompanhar"
    ],
    ingredientsStructured: [
      {
        raw: "800 g de linguiça fresca de porco tipo medister (ou linguiça fresca de porco comum, em rolo)",
        group: null,
        items: [
          { qty: 800, qtyRange: null, unit: "grama", item: "linguiça fresca de porco tipo medister", prep: null, alt: "linguiça fresca de porco comum, em rolo", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (sopa) de manteiga",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "manteiga", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "800 g de batata, cozida",
        group: null,
        items: [
          { qty: 800, qtyRange: null, unit: "grama", item: "batata", prep: "cozida", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 receita de Persillesovs (ver receita) ou Rødkål (ver receita), para acompanhar",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "receita de persillesovs", prep: "ver receita; para acompanhar", alt: "rødkål (ver receita)", optional: false, isReference: true },
        ],
      },
    ],
    steps: [
      "Se a linguiça estiver em gomos individuais, uma a duas vezes com um palito para evitar que estoure durante o cozimento.",
      "Numa frigideira grande, aqueça a manteiga em fogo médio.",
      "Cozinhe a linguiça por 15-18 minutos, virando ocasionalmente, até dourar bem por fora e cozinhar por completo por dentro.",
      "Sirva fatiada ou inteira, com batatas cozidas e Persillesovs ou Rødkål."
    ],
    tips: [
      "'Medisterpølse' é uma linguiça fresca tradicional dinamarquesa, tipicamente vendida em rolo longo (não em gomos individuais) nos açougues do país.",
      "Um prato extremamente simples mas parte fundamental do repertório cotidiano dinamarquês — a qualidade da linguiça é o que define o resultado.",
      "Fica ótima também grelhada em vez de frita na frigideira, para quem preferir uma versão mais leve."
    ]
  },
  {
    name: "Hakkebøf",
    subgroup: "Carnes",
    desc: "Hambúrguer dinamarquês de carne moída, grelhado e servido de garfo e faca com cebola caramelizada e molho, sem pão.",
    origin: "Dinamarca",
    time: { prep: "15 min", cook: "15 min", total: "30 min" },
    yield: "4 porções",
    difficulty: "Fácil",
    tags: ["protein:boi", "ingredient:ovo", "ingredient:batata"],
    ingredients: [
      "600 g de carne bovina moída",
      "1 ovo",
      "2 colheres (sopa) de farinha de rosca",
      "50 ml de leite",
      "Sal e pimenta a gosto",
      "Manteiga, para fritar",
      "2 cebolas grandes, fatiadas em rodelas",
      "200 ml de fundo escuro ou caldo de carne (para o molho)",
      "Batatas cozidas, para servir"
    ],
    ingredientsStructured: [
      {
        raw: "600 g de carne bovina moída",
        group: null,
        items: [
          { qty: 600, qtyRange: null, unit: "grama", item: "carne bovina", prep: "moída", alt: null, optional: false, isReference: false },
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
        raw: "2 colheres (sopa) de farinha de rosca",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "colher-sopa", item: "farinha de rosca", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "50 ml de leite",
        group: null,
        items: [
          { qty: 50, qtyRange: null, unit: "mililitro", item: "leite", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "Manteiga, para fritar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "manteiga", prep: "para fritar", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 cebolas grandes, fatiadas em rodelas",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "cebolas grandes", prep: "fatiadas em rodelas", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "200 ml de fundo escuro ou caldo de carne (para o molho)",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "mililitro", item: "fundo escuro", prep: null, alt: "caldo de carne (para o molho)", optional: false, isReference: false },
        ],
      },
      {
        raw: "Batatas cozidas, para servir",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "batatas cozidas", prep: "para servir", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Misture a carne moída com o ovo, farinha de rosca e leite, temperando com sal e pimenta. Molde em hambúrgueres achatados e grossos.",
      "Aqueça a manteiga numa frigideira em fogo médio-alto e frite os hambúrgueres por 4-5 minutos de cada lado, até dourarem bem e cozinharem no ponto desejado.",
      "Retire e reserve. Na mesma frigideira, adicione mais manteiga se necessário e refogue as cebolas fatiadas em fogo médio-baixo, por 15-20 minutos, até ficarem bem douradas e macias (caramelizadas).",
      "Deglaceie com o caldo de carne, deixando reduzir e formar um molho simples.",
      "Sirva os hambúrgueres cobertos com a cebola caramelizada e o molho, acompanhados de batatas cozidas."
    ],
    tips: [
      "É essencialmente um 'hambúrguer dinamarquês' clássico, servido como prato principal com garfo e faca, nunca em pão.",
      "As cebolas caramelizadas lentamente são o acompanhamento definidor do prato — não apresse essa etapa, elas precisam de tempo para desenvolver a doçura característica.",
      "'Millionbøf' é uma variação mais rica: a mesma carne moída é cozida num molho cremoso (com creme de leite e páprica), formando um guisado em vez de hambúrgueres grelhados individuais."
    ]
  },
  {
    name: "Brændende Kærlighed",
    subgroup: "Carnes",
    desc: "Literalmente 'amor em chamas': purê de batata cremoso coberto com bacon crocante e cebola refogada — prato de conforto dinamarquês.",
    origin: "Dinamarca",
    time: { prep: "15 min", cook: "30 min", total: "45 min" },
    yield: "4 porções",
    difficulty: "Fácil",
    tags: ["contains:suino", "ingredient:batata"],
    ingredients: [
      "1 kg de batata, descascada e em pedaços",
      "150 ml de leite, 50 g de manteiga (para o purê)",
      "200 g de bacon em cubos",
      "1 cebola picada",
      "Cebolinha picada, para finalizar",
      "Sal e pimenta a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "1 kg de batata, descascada e em pedaços",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "quilograma", item: "batata", prep: "descascada e em pedaços", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "150 ml de leite, 50 g de manteiga (para o purê)",
        group: null,
        items: [
          { qty: 150, qtyRange: null, unit: "mililitro", item: "leite", prep: "para o purê", alt: null, optional: false, isReference: false },
          { qty: 50, qtyRange: null, unit: "grama", item: "manteiga", prep: "para o purê", alt: null, optional: false, isReference: false },
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
        raw: "1 cebola picada",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cebola", prep: "picada", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Cebolinha picada, para finalizar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "cebolinha", prep: "picada, para finalizar", alt: null, optional: false, isReference: false },
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
      "Cozinhe a batata em água salgada até ficar bem macia, 20 minutos.",
      "Escorra e amasse com o leite e a manteiga até formar um purê liso e cremoso. Tempere com sal e pimenta.",
      "Numa frigideira, doure o bacon até ficar bem crocante. Retire parte para reservar, deixando o restante e a gordura na frigideira.",
      "Refogue a cebola na gordura do bacon até dourar levemente.",
      "Sirva o purê de batata numa tigela, coberto generosamente com o bacon crocante e a cebola refogada por cima.",
      "Finalize com cebolinha picada."
    ],
    tips: [
      "O nome significa literalmente 'amor em chamas' — uma referência afetuosa à simplicidade reconfortante e ao contraste quente/crocante do prato.",
      "É um prato de conforto extremamente simples e rápido, popular como refeição caseira do dia a dia em toda a Dinamarca.",
      "O purê deve ficar bem cremoso e liso — a textura contrasta propositalmente com a crocância do bacon por cima."
    ]
  },
  {
    name: "Biksemad",
    subgroup: "Carnes",
    desc: "Refogado dinamarquês de aproveitamento com sobras de carne assada e batata em cubos, coroado com ovo frito e picles.",
    origin: "Dinamarca",
    time: { prep: "15 min", cook: "20 min", total: "35 min" },
    yield: "4 porções",
    difficulty: "Fácil",
    tags: ["contains:boi", "ingredient:ovo", "ingredient:batata"],
    ingredients: [
      "400 g de sobras de carne assada (rosbife, flæskesteg ou similar), em cubos",
      "600 g de batata, cozida e em cubos",
      "1 cebola picada",
      "3 colheres (sopa) de manteiga (dividida)",
      "4 ovos, para fritar",
      "Picles (agurkesalat ou syltede rødbeder), para servir",
      "Sal e pimenta a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "400 g de sobras de carne assada (rosbife, flæskesteg ou similar), em cubos",
        group: null,
        items: [
          { qty: 400, qtyRange: null, unit: "grama", item: "sobras de carne assada", prep: "rosbife, flæskesteg ou similar, em cubos", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "600 g de batata, cozida e em cubos",
        group: null,
        items: [
          { qty: 600, qtyRange: null, unit: "grama", item: "batata", prep: "cozida e em cubos", alt: null, optional: false, isReference: false },
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
        raw: "3 colheres (sopa) de manteiga (dividida)",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: "colher-sopa", item: "manteiga (dividida)", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "4 ovos, para fritar",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: null, item: "ovos", prep: "para fritar", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Picles (agurkesalat ou syltede rødbeder), para servir",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "picles", prep: "agurkesalat ou syltede rødbeder, para servir", alt: null, optional: false, isReference: false },
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
      "Numa frigideira grande, derreta metade da manteiga e refogue a cebola até dourar.",
      "Junte a batata cozida em cubos, deixando dourar por 8-10 minutos, mexendo ocasionalmente, até ficar crocante nas bordas.",
      "Adicione a carne em cubos, misturando e deixando aquecer e dourar levemente junto com a batata, mais 5-6 minutos.",
      "Tempere com sal e pimenta.",
      "Numa frigideira separada, frite os ovos com a gema mole.",
      "Sirva a mistura de carne e batata coroada com um ovo frito por cima de cada porção, acompanhada de picles."
    ],
    tips: [
      "É o clássico prato dinamarquês de 'aproveitamento' — criado especificamente para reutilizar sobras de assados de domingo, nunca feito com carne fresca especialmente comprada para o prato.",
      "A gema mole do ovo, ao ser rompida, cria um molho natural que envolve a carne e a batata — não deixe o ovo passar do ponto.",
      "Os picles ácidos (picles de pepino ou beterraba) ao lado são essenciais para cortar a riqueza do prato."
    ]
  },
  {
    name: "Forloren Hare",
    subgroup: "Carnes",
    desc: "Literalmente 'lebre falsa': bolo de carnes moídas com bacon e zimbro, moldado como um assado de caça e servido com geleia de groselha.",
    origin: "Dinamarca",
    time: { prep: "25 min", cook: "1h", total: "1h25" },
    yield: "6 porções",
    difficulty: "Média",
    tags: ["protein:suino", "protein:boi", "ingredient:ovo"],
    ingredients: [
      "500 g de carne de porco moída",
      "300 g de carne bovina moída",
      "100 g de bacon, moído ou picado bem fino (+ fatias extras para envolver)",
      "1 ovo",
      "50 g de farinha de rosca",
      "100 ml de creme de leite",
      "1 colher (chá) de zimbro moído (ou pimenta-da-jamaica)",
      "Sal e pimenta a gosto",
      "200 ml de fundo escuro ou caldo de carne (para o molho)",
      "Geleia de groselha (ou geleia de frutas vermelhas), para servir"
    ],
    ingredientsStructured: [
      {
        raw: "500 g de carne de porco moída",
        group: null,
        items: [
          { qty: 500, qtyRange: null, unit: "grama", item: "carne de porco", prep: "moída", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "300 g de carne bovina moída",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "grama", item: "carne bovina", prep: "moída", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "100 g de bacon, moído ou picado bem fino (+ fatias extras para envolver)",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "grama", item: "bacon", prep: "moído", alt: "picado bem fino (+ fatias extras para envolver)", optional: false, isReference: false },
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
        raw: "50 g de farinha de rosca",
        group: null,
        items: [
          { qty: 50, qtyRange: null, unit: "grama", item: "farinha de rosca", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "100 ml de creme de leite",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "mililitro", item: "creme de leite", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (chá) de zimbro moído (ou pimenta-da-jamaica)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "zimbro", prep: "moído", alt: "pimenta-da-jamaica", optional: false, isReference: false },
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
        raw: "200 ml de fundo escuro ou caldo de carne (para o molho)",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "mililitro", item: "fundo escuro", prep: null, alt: "caldo de carne (para o molho)", optional: false, isReference: false },
        ],
      },
      {
        raw: "Geleia de groselha (ou geleia de frutas vermelhas), para servir",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "geleia de groselha", prep: "para servir", alt: "geleia de frutas vermelhas", optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Misture as carnes moídas com o bacon picado, ovo, farinha de rosca, creme de leite e zimbro, temperando com sal e pimenta.",
      "Molde a mistura num formato oval alongado, imitando o formato de uma lebre assada (daí o nome 'lebre falsa').",
      "Envolva o 'assado' com fatias extras de bacon por cima, para proteger durante o forno.",
      "Disponha numa assadeira e leve ao forno pré-aquecido a 180°C por 50-60 minutos, até a temperatura interna atingir 70°C.",
      "Retire, deixe descansar 10 minutos. Use os sucos da assadeira para fazer um molho simples, reduzindo com um pouco de caldo de carne.",
      "Fatie e sirva com o molho e uma colher de geleia de groselha ao lado, tradicional acompanhamento de carnes de caça na Escandinávia."
    ],
    tips: [
      "O nome significa 'lebre falsa' — o prato foi criado como uma alternativa mais acessível à lebre assada, formando um 'falso assado de caça' com carnes moídas comuns, moldado no formato do animal.",
      "A geleia de groselha (ou de frutas vermelhas) ao lado é o toque clássico escandinavo que acompanha pratos de carne com especiarias como o zimbro.",
      "É essencialmente um bolo de carne (meatloaf) elevado, com uma apresentação que imita um assado nobre — um prato de festa acessível."
    ]
  },

  // ===================== PEIXES =====================
  {
    name: "Arenque em Conserva (Sild)",
    subgroup: "Peixes",
    desc: "Filés de arenque salgado dessalgados e curtidos numa salmoura agridoce de vinagre — nas versões clássica, curry ou tomate.",
    origin: "Dinamarca",
    time: { prep: "20 min + 24h conserva", cook: "10 min", total: "≈24h30" },
    yield: "≈500 g",
    difficulty: "Fácil",
    tags: ["protein:peixe", "ingredient:tomate"],
    ingredients: [
      "6 filés de arenque salgado, dessalgados (de molho em água por 12-24h, trocando a água)",
      "200 ml de vinagre branco",
      "150 ml de água",
      "100 g de açúcar",
      "1 cebola, fatiada fina",
      "1 folha de louro, alguns grãos de pimenta-do-reino, algumas sementes de mostarda",
      "Variações: 2 colheres (sopa) de curry em pó (para a versão 'curry'); ou 3 colheres (sopa) de extrato de tomate (para a versão 'tomate')"
    ],
    ingredientsStructured: [
      {
        raw: "6 filés de arenque salgado, dessalgados (de molho em água por 12-24h, trocando a água)",
        group: null,
        items: [
          { qty: 6, qtyRange: null, unit: "file", item: "arenque salgado", prep: "dessalgados (de molho em água por 12-24h, trocando a água)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "200 ml de vinagre branco",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "mililitro", item: "vinagre branco", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "150 ml de água",
        group: null,
        items: [
          { qty: 150, qtyRange: null, unit: "mililitro", item: "água", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "100 g de açúcar",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "grama", item: "açúcar", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 cebola, fatiada fina",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cebola", prep: "fatiada fina", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 folha de louro, alguns grãos de pimenta-do-reino, algumas sementes de mostarda",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "folha", item: "louro", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "grãos de pimenta-do-reino", prep: "alguns", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "sementes de mostarda", prep: "algumas", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Variações: 2 colheres (sopa) de curry em pó (para a versão 'curry'); ou 3 colheres (sopa) de extrato de tomate (para a versão 'tomate')",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "colher-sopa", item: "curry em pó", prep: "variação 'curry'", alt: "3 colheres (sopa) de extrato de tomate (para a versão 'tomate')", optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Após dessalgar, corte os filés de arenque em pedaços de cerca de 3 cm.",
      "Prepare a salmoura: ferva o vinagre, água e açúcar até dissolver, junte a folha de louro, pimenta e mostarda em grãos. Deixe esfriar completamente.",
      "Para a versão clássica: disponha o arenque e a cebola fatiada num pote de vidro, cubra com a salmoura fria.",
      "Para a versão curry: misture o curry em pó a uma porção da salmoura antes de cobrir o arenque, criando uma conserva amarelada e aromática.",
      "Para a versão tomate: misture o extrato de tomate à salmoura antes de cobrir, criando uma conserva rosada e levemente adocicada.",
      "Feche bem o pote e leve à geladeira por no mínimo 24 horas antes de consumir, para os sabores se desenvolverem.",
      "Sirva como topping de smørrebrød ou como parte de uma mesa fria (koldt bord)."
    ],
    tips: [
      "As diferentes versões (clássica/mostarda, curry, tomate) são todas extremamente populares na Dinamarca — é comum ter várias variações lado a lado numa mesa de smørrebrød ou num almoço de Páscoa/Natal.",
      "Dessalgar bem o arenque antes de conservar é essencial — arenque mal dessalgado fica salgado demais mesmo depois da conserva doce-ácida.",
      "Guarda-se na geladeira por várias semanas, ficando cada vez mais saboroso com o tempo de conserva."
    ]
  },
  {
    name: "Salmão Defumado à Dinamarquesa",
    subgroup: "Peixes",
    desc: "Fatias de salmão defumado a frio sobre pão amanteigado, com ovo mexido cremoso e endro — topping clássico nórdico.",
    origin: "Dinamarca",
    time: { prep: "10 min", cook: "0 min", total: "10 min" },
    yield: "4 porções",
    difficulty: "Fácil",
    tags: ["protein:peixe", "ingredient:ovo", "ingredient:limao"],
    ingredients: [
      "300 g de salmão defumado a frio, fatiado",
      "4 fatias de rugbrød ou franskbrød, amanteigadas",
      "1 ovo mexido cremoso (ver receita, categoria Ovos Básicos) ou ovo cozido em rodelas",
      "Endro fresco",
      "Raiz-forte ralada ou rodelas de limão",
      "Aspargos cozidos, para acompanhar (na estação)"
    ],
    ingredientsStructured: [
      {
        raw: "300 g de salmão defumado a frio, fatiado",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "grama", item: "salmão defumado a frio", prep: "fatiado", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "4 fatias de rugbrød ou franskbrød, amanteigadas",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: "fatia", item: "rugbrød", prep: "amanteigadas", alt: "franskbrød", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 ovo mexido cremoso (ver receita, categoria Ovos Básicos) ou ovo cozido em rodelas",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "ovo mexido cremoso", prep: "ver receita, categoria ovos básicos", alt: "ovo cozido em rodelas", optional: false, isReference: true },
        ],
      },
      {
        raw: "Endro fresco",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "endro fresco", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Raiz-forte ralada ou rodelas de limão",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "raiz-forte", prep: "ralada", alt: "rodelas de limão", optional: false, isReference: false },
        ],
      },
      {
        raw: "Aspargos cozidos, para acompanhar (na estação)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "aspargos cozidos", prep: "para acompanhar (na estação)", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Disponha as fatias de salmão defumado sobre a fatia de pão amanteigada, formando ondas.",
      "Adicione o ovo mexido cremoso morno por cima (a combinação clássica), ou fatias de ovo cozido.",
      "Finalize com endro fresco picado e raiz-forte ralada ou uma fatia de limão.",
      "Sirva com aspargos cozidos ao lado, se estiverem na estação (tradição de primavera)."
    ],
    tips: [
      "A combinação de salmão defumado com ovo mexido cremoso e endro é um clássico atemporal do repertório nórdico, presente também na tradição sueca e norueguesa.",
      "Diferente da técnica de cura do Gravlax, o salmão defumado passa por um processo de defumação a frio real, adquirindo o característico sabor de fumaça.",
      "Um dos toppings de smørrebrød mais elegantes e refinados, frequentemente reservado para ocasiões especiais."
    ]
  },
  {
    name: "Rødspætte Stegt (Linguado Frito)",
    subgroup: "Peixes",
    desc: "Filés de linguado empanados (farinha, ovo e farinha de rosca) e fritos na manteiga, servidos com remoulade e limão.",
    origin: "Dinamarca",
    time: { prep: "15 min", cook: "10 min", total: "25 min" },
    yield: "4 porções",
    difficulty: "Fácil",
    tags: ["protein:peixe", "ingredient:ovo", "ingredient:limao"],
    ingredients: [
      "4 filés de linguado (rødspætte)",
      "100 g de farinha de rosca fina",
      "50 g de farinha de trigo",
      "2 ovos batidos",
      "60 g de manteiga",
      "Sal e pimenta a gosto",
      "1 receita de Remoulade (ver receita), limão e batatas cozidas, para servir"
    ],
    ingredientsStructured: [
      {
        raw: "4 filés de linguado (rødspætte)",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: "file", item: "linguado (rødspætte)", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "100 g de farinha de rosca fina",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "grama", item: "farinha de rosca fina", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "50 g de farinha de trigo",
        group: null,
        items: [
          { qty: 50, qtyRange: null, unit: "grama", item: "farinha de trigo", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 ovos batidos",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "ovos", prep: "batidos", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "60 g de manteiga",
        group: null,
        items: [
          { qty: 60, qtyRange: null, unit: "grama", item: "manteiga", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "1 receita de Remoulade (ver receita), limão e batatas cozidas, para servir",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "receita de remoulade", prep: "ver receita; para servir", alt: null, optional: false, isReference: true },
          { qty: null, qtyRange: null, unit: null, item: "limão", prep: "para servir", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "batatas cozidas", prep: "para servir", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Tempere os filés de linguado com sal e pimenta.",
      "Passe cada filé na farinha, depois no ovo batido, e por fim na farinha de rosca fina, pressionando levemente para aderir.",
      "Aqueça a manteiga numa frigideira grande em fogo médio-alto.",
      "Frite os filés por 2-3 minutos de cada lado, até dourarem bem e a carne ficar opaca e macia por dentro.",
      "Escorra levemente e sirva imediatamente, com remoulade, uma fatia de limão e batatas cozidas."
    ],
    tips: [
      "O linguado (rødspætte) é um dos peixes mais tradicionais e queridos da culinária costeira dinamarquesa — um peixe branco mais firme e sem espinhas funciona bem como substituto.",
      "Fritar em manteiga (não óleo neutro) é o método clássico dinamarquês, dando um sabor amanteigado característico à crosta.",
      "O remoulade dinamarquês (ver receita) é o acompanhamento tradicional obrigatório, quase nunca servido sem ele."
    ]
  },
  {
    name: "Fiskefrikadeller",
    subgroup: "Peixes",
    desc: "Versão de peixe do Frikadeller: bolinhos ovalados de peixe branco moído com cebola e salsinha, fritos e servidos com remoulade.",
    origin: "Dinamarca",
    time: { prep: "20 min", cook: "15 min", total: "35 min" },
    yield: "16 unidades",
    difficulty: "Fácil",
    tags: ["protein:peixe", "ingredient:ovo", "ingredient:limao"],
    ingredients: [
      "500 g de filé de peixe branco (bacalhau, badejo), picado bem fino ou processado",
      "1 cebola pequena, ralada",
      "1 ovo",
      "3 colheres (sopa) de farinha de trigo",
      "100 ml de leite",
      "2 colheres (sopa) de salsinha picada",
      "Sal e pimenta a gosto",
      "Manteiga e óleo, para fritar",
      "Remoulade e limão, para servir"
    ],
    ingredientsStructured: [
      {
        raw: "500 g de filé de peixe branco (bacalhau, badejo), picado bem fino ou processado",
        group: null,
        items: [
          { qty: 500, qtyRange: null, unit: "grama", item: "filé de peixe branco", prep: "bacalhau, badejo, picado bem fino ou processado", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 cebola pequena, ralada",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cebola pequena", prep: "ralada", alt: null, optional: false, isReference: false },
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
        raw: "3 colheres (sopa) de farinha de trigo",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: "colher-sopa", item: "farinha de trigo", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "100 ml de leite",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "mililitro", item: "leite", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "Sal e pimenta a gosto",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "sal", prep: "a gosto", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "pimenta", prep: "a gosto", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Manteiga e óleo, para fritar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "manteiga", prep: "para fritar", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "óleo", prep: "para fritar", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Remoulade e limão, para servir",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "remoulade", prep: "para servir", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "limão", prep: "para servir", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Bata o peixe picado com a cebola, ovo, farinha e sal no processador (ou misture bem à mão), até formar uma massa homogênea.",
      "Adicione o leite aos poucos, batendo até incorporar e formar uma mistura levemente mole.",
      "Junte a salsinha picada, misturando delicadamente.",
      "Leve à geladeira por 15-20 minutos, para firmar.",
      "Aqueça a manteiga e o óleo numa frigideira em fogo médio.",
      "Com duas colheres molhadas em água, modele porções ovaladas e deslize na frigideira.",
      "Frite por 4-5 minutos de cada lado, até dourarem bem por fora e cozinharem por completo.",
      "Sirva quentes, com remoulade e uma fatia de limão."
    ],
    tips: [
      "É a versão de peixe do Frikadeller de carne — mesma técnica de moldar em formato oval achatado, mas com peixe branco no lugar de carne moída.",
      "Use peixe bem fresco e sem espinhas — processe ou pique bem fino para uma textura homogênea e sem pedaços grandes.",
      "Também deliciosos frios, no dia seguinte, como topping de smørrebrød com uma colher de remoulade por cima."
    ]
  },

  // ===================== SOPAS =====================
  {
    name: "Aspargessuppe",
    subgroup: "Sopas",
    desc: "Sopa cremosa de aspargos batida até ficar lisa, finalizada com pontas de aspargo escaldadas — clássico de primavera.",
    origin: "Dinamarca",
    time: { prep: "15 min", cook: "25 min", total: "40 min" },
    yield: "4 porções",
    difficulty: "Fácil",
    tags: ["diet:vegetariana", "ingredient:ovo"],
    ingredients: [
      "800 g de aspargos brancos ou verdes, com as pontas reservadas",
      "40 g de manteiga",
      "1 cebola pequena picada",
      "30 g de farinha de trigo",
      "800 ml de caldo de legumes ou galinha",
      "150 ml de creme de leite fresco",
      "1 gema (opcional, para engrossar mais)",
      "Sal e pimenta branca a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "800 g de aspargos brancos ou verdes, com as pontas reservadas",
        group: null,
        items: [
          { qty: 800, qtyRange: null, unit: "grama", item: "aspargos brancos", prep: "com as pontas reservadas", alt: "verdes", optional: false, isReference: false },
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
        raw: "1 cebola pequena picada",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cebola pequena", prep: "picada", alt: null, optional: false, isReference: false },
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
        raw: "800 ml de caldo de legumes ou galinha",
        group: null,
        items: [
          { qty: 800, qtyRange: null, unit: "mililitro", item: "caldo de legumes", prep: null, alt: "galinha", optional: false, isReference: false },
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
        raw: "1 gema (opcional, para engrossar mais)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "gema", prep: "para engrossar mais", alt: null, optional: true, isReference: false },
        ],
      },
      {
        raw: "Sal e pimenta branca a gosto",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "sal", prep: "a gosto", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "pimenta branca", prep: "a gosto", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Corte as pontas dos aspargos (cerca de 4 cm) e reserve separadamente. Pique o restante dos talos.",
      "Numa panela, derreta a manteiga e refogue a cebola até translúcida.",
      "Junte os talos de aspargo picados (sem as pontas) e refogue por 3-4 minutos.",
      "Adicione a farinha, cozinhando por 2 minutos, depois o caldo aos poucos, mexendo sempre.",
      "Cozinhe em fogo médio por 15-18 minutos, até os aspargos ficarem bem macios.",
      "Bata a sopa no liquidificador até ficar lisa. Volte à panela.",
      "Escalde as pontas de aspargo reservadas em água fervente por 2-3 minutos, até macias mas ainda com leve crocância.",
      "Junte o creme de leite à sopa (e a gema, se usar, temperada com um pouco de sopa quente antes de incorporar). Ajuste sal e pimenta branca.",
      "Sirva quente, com as pontas de aspargo escaldadas por cima."
    ],
    tips: [
      "É um prato de primavera clássico na Dinamarca, tradicionalmente feito na curta temporada de aspargos brancos locais (maio-junho).",
      "Reservar e escaldar as pontas separadamente (em vez de cozinhar tudo junto e bater) preserva a textura e apresenta um contraste visual bonito na sopa lisa.",
      "Aspargos brancos são mais tradicionais na Escandinávia, com sabor mais suave que os verdes — ambos funcionam bem na receita."
    ]
  },
  {
    name: "Fiskesuppe",
    subgroup: "Sopas",
    desc: "Sopa cremosa de peixe branco e camarão com legumes, num caldo de peixe enriquecido com creme de leite e endro.",
    origin: "Dinamarca",
    time: { prep: "20 min", cook: "30 min", total: "50 min" },
    yield: "4 porções",
    difficulty: "Fácil",
    tags: ["protein:peixe", "protein:frutos-do-mar"],
    ingredients: [
      "500 g de peixe branco firme (badejo ou bacalhau), em cubos",
      "200 g de camarão pequeno",
      "40 g de manteiga",
      "1 cebola picada, 1 cenoura picada, 1 talo de salsão picado",
      "30 g de farinha de trigo",
      "1 L de caldo de peixe",
      "150 ml de creme de leite fresco",
      "1 folha de louro",
      "Endro fresco",
      "Sal e pimenta a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "500 g de peixe branco firme (badejo ou bacalhau), em cubos",
        group: null,
        items: [
          { qty: 500, qtyRange: null, unit: "grama", item: "peixe branco firme (badejo ou bacalhau)", prep: "em cubos", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "200 g de camarão pequeno",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "grama", item: "camarão pequeno", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "1 cebola picada, 1 cenoura picada, 1 talo de salsão picado",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cebola", prep: "picada", alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: null, item: "cenoura", prep: "picada", alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "talo", item: "salsão", prep: "picado", alt: null, optional: false, isReference: false },
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
        raw: "1 L de caldo de peixe",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "litro", item: "caldo de peixe", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "1 folha de louro",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "folha", item: "louro", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Endro fresco",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "endro fresco", prep: null, alt: null, optional: false, isReference: false },
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
      "Numa panela, derreta a manteiga e refogue a cebola, cenoura e salsão até macios, 8 minutos.",
      "Junte a farinha, cozinhando por 2 minutos, depois adicione o caldo de peixe aos poucos, mexendo sempre.",
      "Junte o louro e deixe ferver, cozinhando em fogo médio por 15 minutos, até os legumes ficarem macios.",
      "Adicione o peixe em cubos e cozinhe por 5-6 minutos, até ficar opaco e macio.",
      "Junte o camarão, cozinhando por mais 2-3 minutos.",
      "Adicione o creme de leite, aquecendo bem sem deixar ferver forte.",
      "Ajuste sal e pimenta, finalize com endro fresco picado. Sirva quente, com pão."
    ],
    tips: [
      "Uma sopa de peixe cremosa e reconfortante, com uma base de legumes semelhante à de um clam chowder, mas com toque escandinavo de endro.",
      "Use um caldo de peixe bem feito — é a base de sabor de toda a sopa.",
      "Pode incorporar mexilhões ou outros frutos do mar disponíveis, tornando a sopa ainda mais rica."
    ]
  },
  {
    name: "Klar Suppe",
    subgroup: "Sopas",
    desc: "Caldo claro dinamarquês (tipo consommé), servido com mini-almôndegas, cenoura e ervilha — entrada leve tradicional.",
    origin: "Dinamarca",
    time: { prep: "15 min", cook: "1h30", total: "1h45" },
    yield: "6 porções",
    difficulty: "Fácil",
    tags: ["contains:frango", "ingredient:ervilha"],
    ingredients: [
      "1,5 kg de ossos ou carcaça de galinha (ou carne com osso)",
      "2 L de água",
      "1 cebola, 2 cenouras, 1 talo de salsão — em pedaços",
      "1 folha de louro, alguns grãos de pimenta-do-reino",
      "Para servir: pequenas almôndegas (kødboller), cenoura em cubos pequenos cozida, ervilha, salsinha picada",
      "Sal a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "1,5 kg de ossos ou carcaça de galinha (ou carne com osso)",
        group: null,
        items: [
          { qty: 1.5, qtyRange: null, unit: "quilograma", item: "ossos", prep: null, alt: "carcaça de galinha; ou carne com osso", optional: false, isReference: false },
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
        raw: "1 folha de louro, alguns grãos de pimenta-do-reino",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "folha", item: "louro", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "grãos de pimenta-do-reino", prep: "alguns", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Para servir: pequenas almôndegas (kødboller), cenoura em cubos pequenos cozida, ervilha, salsinha picada",
        group: "servir",
        items: [
          { qty: null, qtyRange: null, unit: null, item: "pequenas almôndegas (kødboller)", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "cenoura", prep: "em cubos pequenos cozida", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "ervilha", prep: null, alt: null, optional: false, isReference: false },
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
      "Numa panela grande, cubra os ossos/carcaça com a água, leve para ferver e retire a espuma que sobe.",
      "Junte a cebola, cenoura, salsão, louro e pimenta.",
      "Cozinhe em fervura suave, destampado, por 1h-1h30, até o caldo ficar bem saboroso e reduzido.",
      "Coe o caldo, descartando os sólidos. Se quiser um caldo bem claro, deixe esfriar e retire a camada de gordura que solidifica por cima.",
      "Aqueça o caldo já claro, ajuste o sal.",
      "Sirva com pequenas almôndegas, cenoura em cubos cozida, ervilha e salsinha picada por cima."
    ],
    tips: [
      "É o 'caldo claro' dinamarquês, tecnicamente semelhante a um consommé simples — um caldo bem feito é a base de toda a sopa, então vale o tempo de cozimento adequado.",
      "Tradicionalmente servido em ocasiões festivas como entrada leve antes de um prato principal mais robusto.",
      "As pequenas almôndegas (kødboller) que acompanham podem ser feitas com a mesma base do Frikadeller, só em tamanho miniatura."
    ]
  },

  // ===================== ACOMPANHAMENTOS =====================
  {
    name: "Brunede Kartofler",
    subgroup: "Acompanhamentos",
    desc: "Batatinhas cozidas envolvidas num caramelo de açúcar e manteiga — acompanhamento doce indispensável do Natal dinamarquês.",
    origin: "Dinamarca",
    time: { prep: "10 min", cook: "20 min", total: "30 min" },
    yield: "6 porções",
    difficulty: "Fácil",
    tags: ["diet:vegetariana", "ingredient:batata"],
    ingredients: [
      "1 kg de batatas pequenas, cozidas e descascadas",
      "100 g de açúcar",
      "80 g de manteiga",
      "Sal a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "1 kg de batatas pequenas, cozidas e descascadas",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "quilograma", item: "batatas pequenas", prep: "cozidas e descascadas", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "100 g de açúcar",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "grama", item: "açúcar", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "80 g de manteiga",
        group: null,
        items: [
          { qty: 80, qtyRange: null, unit: "grama", item: "manteiga", prep: null, alt: null, optional: false, isReference: false },
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
      "Numa frigideira grande, derreta o açúcar em fogo médio, sem mexer, só balançando a panela de leve, até virar um caramelo dourado claro.",
      "Adicione a manteiga ao caramelo, mexendo até incorporar e formar um caramelo líquido brilhante.",
      "Junte as batatas já cozidas e descascadas, envolvendo-as delicadamente no caramelo.",
      "Cozinhe em fogo médio-baixo por 8-10 minutos, balançando a frigideira ocasionalmente, até as batatas ficarem completamente envolvidas e douradas pelo caramelo.",
      "Tempere levemente com sal. Sirva imediatamente, quente."
    ],
    tips: [
      "É o acompanhamento clássico e indispensável do Flæskesteg no jantar de Natal dinamarquês — o contraste doce das batatas com a carne salgada é essencial na tradição.",
      "Use batatas pequenas já cozidas com antecedência (o dia anterior é ideal) — isso facilita muito o processo e evita que se desmanchem no caramelo.",
      "Cuidado ao fazer o caramelo — açúcar derretido atinge temperaturas muito altas; trabalhe com atenção."
    ]
  },
  {
    name: "Persillesovs",
    subgroup: "Acompanhamentos",
    desc: "Molho branco (tipo béchamel) bem carregado de salsinha fresca picada, servido sobre batata cozida ou barriga de porco frita.",
    origin: "Dinamarca",
    time: { prep: "5 min", cook: "15 min", total: "20 min" },
    yield: "≈500 ml",
    difficulty: "Fácil",
    tags: ["diet:vegetariana"],
    ingredients: [
      "40 g de manteiga",
      "40 g de farinha de trigo",
      "500 ml de leite (ou metade leite, metade caldo de cozimento de carne/peixe)",
      "1 maço grande de salsinha fresca, picada bem fina",
      "Sal e pimenta branca a gosto",
      "Noz-moscada (opcional)"
    ],
    ingredientsStructured: [
      {
        raw: "40 g de manteiga",
        group: null,
        items: [
          { qty: 40, qtyRange: null, unit: "grama", item: "manteiga", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "40 g de farinha de trigo",
        group: null,
        items: [
          { qty: 40, qtyRange: null, unit: "grama", item: "farinha de trigo", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "500 ml de leite (ou metade leite, metade caldo de cozimento de carne/peixe)",
        group: null,
        items: [
          { qty: 500, qtyRange: null, unit: "mililitro", item: "leite", prep: null, alt: "metade leite, metade caldo de cozimento de carne/peixe", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 maço grande de salsinha fresca, picada bem fina",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "maço grande de salsinha fresca", prep: "picada bem fina", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Sal e pimenta branca a gosto",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "sal", prep: "a gosto", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "pimenta branca", prep: "a gosto", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Noz-moscada (opcional)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "noz-moscada", prep: null, alt: null, optional: true, isReference: false },
        ],
      },
    ],
    steps: [
      "Derreta a manteiga em fogo baixo, junte a farinha e cozinhe por 2 minutos, formando o roux.",
      "Adicione o leite (ou a mistura de leite e caldo) aos poucos, mexendo sempre, até engrossar formando uma Béchamel lisa.",
      "Cozinhe em fogo baixo por mais 5 minutos, mexendo ocasionalmente, para tirar o gosto de farinha crua.",
      "Junte a salsinha picada, misturando bem. Tempere com sal, pimenta branca e noz-moscada.",
      "Sirva quente, sobre batatas cozidas ou acompanhando o Stegt Flæsk."
    ],
    tips: [
      "É essencialmente uma Béchamel bem carregada de salsinha fresca — a quantidade generosa de ervas é o que define o molho, não tenha receio de usar bastante.",
      "Usar parte do caldo de cozimento da carne/peixe (em vez de só leite) enriquece bastante o sabor do molho.",
      "Molho de acompanhamento clássico presente em praticamente toda mesa dinamarquesa tradicional, especialmente com o Stegt Flæsk."
    ]
  },
  {
    name: "Remoulade Dinamarquesa",
    subgroup: "Acompanhamentos",
    desc: "Molho amarelado de maionese com picles, curry e mostarda — bem diferente do remoulade francês, acompanha peixe frito e hot dogs.",
    origin: "Dinamarca",
    time: { prep: "10 min", cook: "0 min", total: "10 min" },
    yield: "≈300 ml",
    difficulty: "Fácil",
    tags: ["diet:vegetariana", "ingredient:ovo", "ingredient:limao"],
    ingredients: [
      "250 g de maionese",
      "80 g de picles (pepino em conserva), picado bem fino",
      "1 colher (sopa) de alcaparras, picadas",
      "1 colher (chá) de mostarda Dijon",
      "1 colher (chá) de curry em pó",
      "1 colher (chá) de açúcar",
      "Suco de 1/2 limão",
      "Salsinha picada"
    ],
    ingredientsStructured: [
      {
        raw: "250 g de maionese",
        group: null,
        items: [
          { qty: 250, qtyRange: null, unit: "grama", item: "maionese", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "80 g de picles (pepino em conserva), picado bem fino",
        group: null,
        items: [
          { qty: 80, qtyRange: null, unit: "grama", item: "picles (pepino em conserva)", prep: "picado bem fino", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (sopa) de alcaparras, picadas",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "alcaparras", prep: "picadas", alt: null, optional: false, isReference: false },
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
        raw: "1 colher (chá) de curry em pó",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "curry em pó", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "Suco de 1/2 limão",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "suco de 1/2 limão", prep: null, alt: null, optional: false, isReference: false },
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
      "Numa tigela, misture a maionese com a mostarda, curry em pó e açúcar.",
      "Junte o picles picado e as alcaparras, misturando bem.",
      "Tempere com suco de limão a gosto.",
      "Finalize com salsinha picada.",
      "Leve à geladeira por pelo menos 30 minutos antes de servir, para os sabores se assentarem."
    ],
    tips: [
      "É bem diferente do remoulade francês (à base de ervas e alcaparras, sem curry) — a versão dinamarquesa é amarelada e mais adocicada, com o toque característico de curry.",
      "Acompanhamento indispensável do Rødspætte Stegt (linguado frito) e de hot dogs dinamarqueses (pølse) vendidos em barraquinhas de rua.",
      "Guarda-se bem na geladeira por até uma semana em pote fechado."
    ]
  },
  {
    name: "Agurkesalat",
    subgroup: "Acompanhamentos",
    desc: "Salada rápida de pepino fatiado fino, salgado e curtido numa salmoura agridoce de vinagre e endro.",
    origin: "Dinamarca",
    time: { prep: "15 min", cook: "0 min", total: "15 min + descanso" },
    yield: "4 porções",
    difficulty: "Fácil",
    tags: ["diet:vegetariana"],
    ingredients: [
      "1 pepino grande, fatiado bem fino",
      "1 colher (chá) de sal",
      "100 ml de vinagre branco",
      "80 g de açúcar",
      "50 ml de água",
      "Pimenta-do-reino moída na hora",
      "Endro fresco picado"
    ],
    ingredientsStructured: [
      {
        raw: "1 pepino grande, fatiado bem fino",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "pepino grande", prep: "fatiado bem fino", alt: null, optional: false, isReference: false },
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
        raw: "100 ml de vinagre branco",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "mililitro", item: "vinagre branco", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "80 g de açúcar",
        group: null,
        items: [
          { qty: 80, qtyRange: null, unit: "grama", item: "açúcar", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "50 ml de água",
        group: null,
        items: [
          { qty: 50, qtyRange: null, unit: "mililitro", item: "água", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Pimenta-do-reino moída na hora",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "pimenta-do-reino", prep: "moída na hora", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Endro fresco picado",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "endro fresco", prep: "picado", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Fatie o pepino bem fino (numa mandolina, se tiver) e disponha numa peneira. Polvilhe com sal e deixe descansar por 15-20 minutos, para soltar o excesso de água.",
      "Esprema levemente o pepino com as mãos para remover o líquido, sem amassar demais.",
      "Prepare a salmoura: misture o vinagre, açúcar e água até o açúcar dissolver completamente.",
      "Junte o pepino escorrido à salmoura, temperando com pimenta-do-reino.",
      "Finalize com endro fresco picado.",
      "Deixe descansar na geladeira por pelo menos 30 minutos antes de servir, para os sabores se desenvolverem."
    ],
    tips: [
      "Salgar e escorrer o pepino antes de temperar é essencial — sem esse passo, a salada fica aguada e o sabor da salmoura fica diluído.",
      "Uma salada rápida e refrescante, tradicional acompanhamento de carnes gordurosas como o Flæskesteg e o Frikadeller.",
      "Fica ainda melhor depois de algumas horas na geladeira, quando o pepino absorve bem o tempero agridoce."
    ]
  },
  {
    name: "Rødkål",
    subgroup: "Acompanhamentos",
    desc: "Repolho roxo refogado lentamente com maçã, vinagre e suco de groselha até ficar macio e brilhante — acompanha o Flæskesteg no Natal.",
    origin: "Dinamarca",
    time: { prep: "15 min", cook: "1h", total: "1h15" },
    yield: "6 porções",
    difficulty: "Fácil",
    tags: ["diet:vegetariana"],
    ingredients: [
      "1 repolho roxo grande, fatiado fino",
      "2 maçãs, descascadas e picadas",
      "80 g de manteiga",
      "80 g de açúcar",
      "100 ml de vinagre de maçã",
      "150 ml de suco de groselha (ou suco de uva, na falta)",
      "1 pau de canela",
      "Sal a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "1 repolho roxo grande, fatiado fino",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "repolho roxo grande", prep: "fatiado fino", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 maçãs, descascadas e picadas",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "maçãs", prep: "descascadas e picadas", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "80 g de manteiga",
        group: null,
        items: [
          { qty: 80, qtyRange: null, unit: "grama", item: "manteiga", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "80 g de açúcar",
        group: null,
        items: [
          { qty: 80, qtyRange: null, unit: "grama", item: "açúcar", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "100 ml de vinagre de maçã",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "mililitro", item: "vinagre de maçã", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "150 ml de suco de groselha (ou suco de uva, na falta)",
        group: null,
        items: [
          { qty: 150, qtyRange: null, unit: "mililitro", item: "suco de groselha", prep: null, alt: "suco de uva, na falta", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 pau de canela",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "pau de canela", prep: null, alt: null, optional: false, isReference: false },
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
      "Numa panela grande, derreta a manteiga e refogue o repolho fatiado com a maçã picada por 5 minutos.",
      "Junte o açúcar, vinagre, suco de groselha e o pau de canela.",
      "Tempere com sal, tampe e cozinhe em fogo baixo por 50-60 minutos, mexendo ocasionalmente, até o repolho ficar bem macio e o líquido reduzir formando um glacê brilhante.",
      "Retire o pau de canela antes de servir.",
      "Sirva quente, como acompanhamento do Flæskesteg ou de outras carnes assadas."
    ],
    tips: [
      "O cozimento longo e lento é essencial — repolho roxo mal cozido fica com textura fibrosa e sabor adstringente; o objetivo é uma textura macia e brilhante.",
      "É o acompanhamento mais tradicional e indispensável do jantar de Natal dinamarquês, sempre ao lado do Flæskesteg.",
      "Pode ser feito com antecedência (até alguns dias) e reaquecido — na verdade, fica ainda mais saboroso depois de descansar."
    ]
  },
  {
    name: "Syltede Rødbeder",
    subgroup: "Acompanhamentos",
    desc: "Conserva de beterraba cozida em salmoura de vinagre e especiarias — acompanhamento clássico de smørrebrød e carnes.",
    origin: "Dinamarca",
    time: { prep: "15 min", cook: "40 min", total: "55 min + conserva" },
    yield: "≈600 g",
    difficulty: "Fácil",
    tags: ["diet:vegetariana"],
    ingredients: [
      "1 kg de beterraba, com casca",
      "300 ml de vinagre branco",
      "200 ml de água",
      "150 g de açúcar",
      "1 pau de canela, alguns cravos, grãos de pimenta-do-reino"
    ],
    ingredientsStructured: [
      {
        raw: "1 kg de beterraba, com casca",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "quilograma", item: "beterraba", prep: "com casca", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "300 ml de vinagre branco",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "mililitro", item: "vinagre branco", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "200 ml de água",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "mililitro", item: "água", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "150 g de açúcar",
        group: null,
        items: [
          { qty: 150, qtyRange: null, unit: "grama", item: "açúcar", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 pau de canela, alguns cravos, grãos de pimenta-do-reino",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "pau de canela", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "cravos", prep: "alguns", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "grãos de pimenta-do-reino", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Cozinhe as beterrabas inteiras, com casca, em água até ficarem macias (o tempo varia conforme o tamanho, geralmente 35-45 minutos).",
      "Deixe esfriar levemente, descasque (a casca deve soltar facilmente com as mãos) e corte em fatias ou cubos.",
      "Prepare a salmoura: ferva o vinagre, água, açúcar e as especiarias por 5 minutos, até dissolver bem o açúcar.",
      "Disponha a beterraba num pote de vidro esterilizado e cubra com a salmoura ainda quente.",
      "Deixe esfriar, feche o pote e leve à geladeira por no mínimo 24 horas antes de consumir.",
      "Guarda-se na geladeira por várias semanas."
    ],
    tips: [
      "Use luvas ao manusear a beterraba cozida para não manchar as mãos.",
      "Um acompanhamento clássico de smørrebrød e de pratos de carne, com o contraste ácido-doce equilibrando pratos mais ricos.",
      "As especiarias inteiras (canela, cravo) dão um perfil de sabor levemente aquecido, diferenciando essa conserva de uma picles comum."
    ]
  },

  // ===================== SOBREMESAS =====================
  {
    name: "Æbleskiver",
    subgroup: "Sobremesas",
    desc: "Bolinhas fofas de massa levedada, assadas numa frigideira especial de cavidades até formarem esferas douradas — servidas com geleia.",
    origin: "Dinamarca",
    time: { prep: "15 min", cook: "15 min", total: "30 min" },
    yield: "≈20 unidades",
    difficulty: "Média",
    tags: ["diet:vegetariana", "ingredient:ovo"],
    ingredients: [
      "250 g de farinha de trigo",
      "1 colher (chá) de fermento em pó",
      "1 pitada de cardamomo em pó",
      "1 pitada de sal",
      "2 ovos (claras e gemas separadas)",
      "30 g de açúcar",
      "350 ml de leitelho (buttermilk) ou leite",
      "40 g de manteiga derretida",
      "Manteiga extra, para untar a forma",
      "Açúcar de confeiteiro e geleia, para servir"
    ],
    ingredientsStructured: [
      {
        raw: "250 g de farinha de trigo",
        group: null,
        items: [
          { qty: 250, qtyRange: null, unit: "grama", item: "farinha de trigo", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (chá) de fermento em pó",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "fermento em pó", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 pitada de cardamomo em pó",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "pitada", item: "cardamomo em pó", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 pitada de sal",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "pitada", item: "sal", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 ovos (claras e gemas separadas)",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "ovos", prep: "claras e gemas separadas", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "30 g de açúcar",
        group: null,
        items: [
          { qty: 30, qtyRange: null, unit: "grama", item: "açúcar", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "350 ml de leitelho (buttermilk) ou leite",
        group: null,
        items: [
          { qty: 350, qtyRange: null, unit: "mililitro", item: "leitelho (buttermilk)", prep: null, alt: "leite", optional: false, isReference: false },
        ],
      },
      {
        raw: "40 g de manteiga derretida",
        group: null,
        items: [
          { qty: 40, qtyRange: null, unit: "grama", item: "manteiga", prep: "derretida", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Manteiga extra, para untar a forma",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "manteiga extra", prep: "para untar a forma", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Açúcar de confeiteiro e geleia, para servir",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "açúcar de confeiteiro", prep: "para servir", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "geleia", prep: "para servir", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Misture a farinha, fermento, cardamomo e sal.",
      "Bata as gemas com o açúcar até esbranquiçar levemente, junte o leitelho e a manteiga derretida.",
      "Incorpore os ingredientes secos aos líquidos, misturando até formar uma massa lisa (sem grumos).",
      "Bata as claras em neve firme e incorpore delicadamente à massa, em movimentos de baixo para cima.",
      "Aqueça uma forma própria para æbleskiver (com cavidades semiesféricas) em fogo médio, untando cada cavidade com um pouco de manteiga.",
      "Preencha cada cavidade com a massa até quase o topo.",
      "Quando as bordas começarem a firmar (1-2 minutos), use um espeto ou palito para girar cada bolinha 90 graus, deixando a massa crua escorrer e preencher o espaço.",
      "Continue girando gradualmente até a bolinha ficar completamente fechada e dourada por todos os lados, formando uma esfera.",
      "Retire e polvilhe com açúcar de confeiteiro. Sirva quente, com geleia para mergulhar."
    ],
    tips: [
      "Uma forma própria para æbleskiver (com cavidades semiesféricas) é indispensável — não há como replicar bem essa técnica sem o utensílio específico.",
      "Girar gradualmente (não de uma vez) é o que forma a esfera perfeita, com a massa crua escorrendo para preencher os espaços conforme gira.",
      "Tradicionalmente servido no Natal dinamarquês, acompanhado de glögg (vinho quente com especiarias) e geleia de framboesa ou morango."
    ]
  },
  {
    name: "Risalamande",
    subgroup: "Sobremesas",
    desc: "Arroz doce frio misturado com chantilly e amêndoas picadas, servido com calda de cereja — sobremesa de Natal com uma amêndoa escondida de brincadeira.",
    origin: "Dinamarca",
    time: { prep: "20 min + 3h geladeira", cook: "40 min", total: "≈4h" },
    yield: "8 porções",
    difficulty: "Fácil",
    tags: ["diet:vegetariana", "ingredient:arroz", "ingredient:castanha"],
    ingredients: [
      "200 g de arroz arbóreo (ou arroz para doce)",
      "1 L de leite integral",
      "1 fava de baunilha (ou extrato)",
      "1 pitada de sal",
      "300 ml de creme de leite fresco, batido em chantilly",
      "80 g de amêndoas, picadas grosseiramente (+ 1 amêndoa inteira, para a brincadeira tradicional)",
      "60 g de açúcar",
      "Calda de cereja (kirsebærsauce), para servir"
    ],
    ingredientsStructured: [
      {
        raw: "200 g de arroz arbóreo (ou arroz para doce)",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "grama", item: "arroz arbóreo", prep: null, alt: "arroz para doce", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 L de leite integral",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "litro", item: "leite integral", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 fava de baunilha (ou extrato)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "fava", item: "baunilha", prep: null, alt: "extrato", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 pitada de sal",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "pitada", item: "sal", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "300 ml de creme de leite fresco, batido em chantilly",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "mililitro", item: "creme de leite fresco", prep: "batido em chantilly", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "80 g de amêndoas, picadas grosseiramente (+ 1 amêndoa inteira, para a brincadeira tradicional)",
        group: null,
        items: [
          { qty: 80, qtyRange: null, unit: "grama", item: "amêndoas", prep: "picadas grosseiramente", alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: null, item: "amêndoa", prep: "inteira, para a brincadeira tradicional", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "60 g de açúcar",
        group: null,
        items: [
          { qty: 60, qtyRange: null, unit: "grama", item: "açúcar", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Calda de cereja (kirsebærsauce), para servir",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "calda de cereja (kirsebærsauce)", prep: "para servir", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Cozinhe o arroz no leite com a fava de baunilha (raspada) e uma pitada de sal, em fogo baixo, mexendo ocasionalmente, por 35-40 minutos, até formar um mingau espesso e cremoso (arroz doce, 'risengrød').",
      "Deixe esfriar completamente (idealmente na geladeira por algumas horas, ou durante a noite).",
      "Quando o mingau de arroz estiver bem frio, incorpore o chantilly delicadamente, em movimentos de baixo para cima.",
      "Junte as amêndoas picadas e o açúcar, misturando bem. Esconda a amêndoa inteira em algum ponto da sobremesa (brincadeira tradicional de Natal).",
      "Leve à geladeira por pelo menos 1 hora antes de servir.",
      "Sirva em taças, coberto com calda de cereja quente ou fria."
    ],
    tips: [
      "A brincadeira da amêndoa inteira escondida é uma tradição essencial do Natal dinamarquês — quem encontrar a amêndoa no seu prato ganha um pequeno presente (geralmente um porco de marzipan).",
      "O mingau de arroz base precisa estar completamente frio antes de incorporar o chantilly — se estiver morno, o chantilly derrete e a sobremesa perde a leveza.",
      "É a sobremesa mais tradicional e aguardada da mesa de Natal dinamarquesa, praticamente obrigatória em toda casa no dia 24 de dezembro."
    ]
  },
  {
    name: "Drømmekage",
    subgroup: "Sobremesas",
    desc: "Literalmente 'bolo dos sonhos': bolo simples de forno coberto com uma camada de coco caramelizado assada por cima.",
    origin: "Dinamarca",
    time: { prep: "20 min", cook: "35 min", total: "55 min" },
    yield: "12 porções",
    difficulty: "Fácil",
    tags: ["diet:vegetariana", "ingredient:ovo", "ingredient:coco"],
    ingredients: [
      "Para o bolo: 4 ovos, 250 g de açúcar, 250 g de farinha de trigo, 1 colher (sopa) de fermento em pó, 150 ml de leite, 50 g de manteiga",
      "Para a cobertura: 150 g de manteiga, 200 g de açúcar mascavo, 100 ml de leite, 150 g de coco ralado"
    ],
    ingredientsStructured: [
      {
        raw: "Para o bolo: 4 ovos, 250 g de açúcar, 250 g de farinha de trigo, 1 colher (sopa) de fermento em pó, 150 ml de leite, 50 g de manteiga",
        group: "bolo",
        items: [
          { qty: 4, qtyRange: null, unit: null, item: "ovos", prep: null, alt: null, optional: false, isReference: false },
          { qty: 250, qtyRange: null, unit: "grama", item: "açúcar", prep: null, alt: null, optional: false, isReference: false },
          { qty: 250, qtyRange: null, unit: "grama", item: "farinha de trigo", prep: null, alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "fermento em pó", prep: null, alt: null, optional: false, isReference: false },
          { qty: 150, qtyRange: null, unit: "mililitro", item: "leite", prep: null, alt: null, optional: false, isReference: false },
          { qty: 50, qtyRange: null, unit: "grama", item: "manteiga", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Para a cobertura: 150 g de manteiga, 200 g de açúcar mascavo, 100 ml de leite, 150 g de coco ralado",
        group: "cobertura",
        items: [
          { qty: 150, qtyRange: null, unit: "grama", item: "manteiga", prep: null, alt: null, optional: false, isReference: false },
          { qty: 200, qtyRange: null, unit: "grama", item: "açúcar mascavo", prep: null, alt: null, optional: false, isReference: false },
          { qty: 100, qtyRange: null, unit: "mililitro", item: "leite", prep: null, alt: null, optional: false, isReference: false },
          { qty: 150, qtyRange: null, unit: "grama", item: "coco ralado", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Pré-aqueça o forno a 180°C. Unte e forre uma forma retangular (ou redonda de 24 cm).",
      "Bata os ovos com o açúcar até esbranquiçar e dobrar de volume.",
      "Peneire a farinha com o fermento e incorpore aos ovos batidos, delicadamente.",
      "Aqueça o leite com a manteiga até derreter, e incorpore à massa, misturando até homogêneo.",
      "Despeje na forma e asse por 20-25 minutos, até um palito sair quase limpo (o bolo continuará no forno para a cobertura, então não precisa assar completamente ainda).",
      "Enquanto isso, prepare a cobertura: derreta a manteiga com o açúcar mascavo e o leite numa panela, até dissolver bem. Junte o coco ralado, misturando.",
      "Espalhe essa cobertura por cima do bolo ainda no forno (retire brevemente, cubra e volte).",
      "Volte ao forno e asse por mais 10-12 minutos, até a cobertura borbulhar e caramelizar levemente.",
      "Deixe esfriar antes de cortar em quadrados."
    ],
    tips: [
      "'Drømmekage' significa 'bolo dos sonhos' — a cobertura de coco caramelizado, adicionada e assada por cima do bolo ainda no forno, é o que torna esse bolo simples tão especial.",
      "Não retire o bolo do forno por muito tempo ao adicionar a cobertura — o objetivo é manter a temperatura para a cobertura derreter e caramelizar rapidamente por cima.",
      "Um dos bolos caseiros mais populares e nostálgicos da Dinamarca, presente em quase toda festa de aniversário infantil."
    ]
  },
  {
    name: "Hindbærsnitter",
    subgroup: "Sobremesas",
    desc: "Duas camadas de massa amanteigada recheadas com geleia de framboesa, cobertas com glacê e granulado colorido.",
    origin: "Dinamarca",
    time: { prep: "40 min + 30 min geladeira", cook: "15 min", total: "1h25" },
    yield: "16 unidades",
    difficulty: "Média",
    tags: ["diet:vegetariana", "ingredient:ovo"],
    ingredients: [
      "Para a massa: 300 g de farinha de trigo, 150 g de manteiga gelada, 100 g de açúcar, 1 ovo, 1 pitada de sal",
      "200 g de geleia de framboesa",
      "Para a cobertura: 150 g de açúcar de confeiteiro, 2-3 colheres (sopa) de água, granulado colorido (característico)"
    ],
    ingredientsStructured: [
      {
        raw: "Para a massa: 300 g de farinha de trigo, 150 g de manteiga gelada, 100 g de açúcar, 1 ovo, 1 pitada de sal",
        group: "massa",
        items: [
          { qty: 300, qtyRange: null, unit: "grama", item: "farinha de trigo", prep: null, alt: null, optional: false, isReference: false },
          { qty: 150, qtyRange: null, unit: "grama", item: "manteiga", prep: "gelada", alt: null, optional: false, isReference: false },
          { qty: 100, qtyRange: null, unit: "grama", item: "açúcar", prep: null, alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: null, item: "ovo", prep: null, alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "pitada", item: "sal", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "200 g de geleia de framboesa",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "grama", item: "geleia de framboesa", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Para a cobertura: 150 g de açúcar de confeiteiro, 2-3 colheres (sopa) de água, granulado colorido (característico)",
        group: "cobertura",
        items: [
          { qty: 150, qtyRange: null, unit: "grama", item: "açúcar de confeiteiro", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: [2, 3], unit: "colher-sopa", item: "água", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "granulado colorido", prep: "característico", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Misture a farinha, açúcar e sal. Adicione a manteiga gelada em cubos e trabalhe com as pontas dos dedos até formar uma farofa grossa.",
      "Junte o ovo e misture só até formar uma massa homogênea, sem sovar demais.",
      "Divida em dois discos, embrulhe e leve à geladeira por 30 minutos.",
      "Abra cada disco num retângulo fino do mesmo tamanho.",
      "Asse os dois retângulos separadamente sobre assadeiras forradas, a 190°C, por 12-15 minutos, até dourarem levemente. Deixe esfriar completamente.",
      "Espalhe a geleia de framboesa generosamente sobre um dos retângulos de massa já assado e frio.",
      "Cubra com o segundo retângulo de massa, pressionando levemente.",
      "Prepare a cobertura misturando o açúcar de confeiteiro com água até formar um glacê espesso e espalhável.",
      "Cubra o topo com o glacê, decore imediatamente com o granulado colorido (antes do glacê secar).",
      "Deixe firmar e corte em retângulos ou losangos para servir."
    ],
    tips: [
      "A decoração com granulado colorido é a marca registrada visual dessa sobremesa — sem ela, dificilmente é reconhecida como Hindbærsnitter por um dinamarquês.",
      "Assar as duas camadas de massa separadamente (em vez de montar cru e assar junto) garante que ambas fiquem uniformemente crocantes.",
      "Um doce extremamente popular em festas infantis e cafés dinamarqueses, com o contraste da massa amanteigada, a geleia ácida e o glacê doce."
    ]
  },
  {
    name: "Lagkage",
    subgroup: "Sobremesas",
    desc: "Bolo de aniversário dinamarquês em camadas de pão de ló, chantilly fresco e morango.",
    origin: "Dinamarca",
    time: { prep: "1h", cook: "35 min", total: "1h35 + resfriar" },
    yield: "10-12 porções",
    difficulty: "Média",
    tags: ["diet:vegetariana", "ingredient:ovo", "ingredient:castanha"],
    ingredients: [
      "Para o bolo: 6 ovos, 200 g de açúcar, 200 g de farinha de trigo, 1 colher (chá) de fermento em pó",
      "Para o recheio: 500 ml de creme de leite fresco batido em chantilly, 300 g de morango fatiado (ou outras frutas vermelhas)",
      "Para a cobertura: mais chantilly, frutas frescas inteiras para decorar",
      "Amêndoas laminadas tostadas, para as laterais (opcional)"
    ],
    ingredientsStructured: [
      {
        raw: "Para o bolo: 6 ovos, 200 g de açúcar, 200 g de farinha de trigo, 1 colher (chá) de fermento em pó",
        group: "bolo",
        items: [
          { qty: 6, qtyRange: null, unit: null, item: "ovos", prep: null, alt: null, optional: false, isReference: false },
          { qty: 200, qtyRange: null, unit: "grama", item: "açúcar", prep: null, alt: null, optional: false, isReference: false },
          { qty: 200, qtyRange: null, unit: "grama", item: "farinha de trigo", prep: null, alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "fermento em pó", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Para o recheio: 500 ml de creme de leite fresco batido em chantilly, 300 g de morango fatiado (ou outras frutas vermelhas)",
        group: "recheio",
        items: [
          { qty: 500, qtyRange: null, unit: "mililitro", item: "creme de leite fresco", prep: "batido em chantilly", alt: null, optional: false, isReference: false },
          { qty: 300, qtyRange: null, unit: "grama", item: "morango", prep: "fatiado", alt: "outras frutas vermelhas", optional: false, isReference: false },
        ],
      },
      {
        raw: "Para a cobertura: mais chantilly, frutas frescas inteiras para decorar",
        group: "cobertura",
        items: [
          { qty: null, qtyRange: null, unit: null, item: "chantilly", prep: "mais", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "frutas frescas", prep: "inteiras, para decorar", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Amêndoas laminadas tostadas, para as laterais (opcional)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "amêndoas laminadas", prep: "tostadas, para as laterais", alt: null, optional: true, isReference: false },
        ],
      },
    ],
    steps: [
      "Pré-aqueça o forno a 180°C. Bata os ovos com o açúcar até dobrar de volume e formar fitas espessas, cerca de 5-8 minutos na batedeira.",
      "Peneire a farinha com o fermento e incorpore delicadamente à massa de ovos batidos, em movimentos de baixo para cima, sem perder o ar incorporado.",
      "Despeje em duas ou três formas redondas untadas (ou asse em uma forma alta e corte em discos depois de fria).",
      "Asse por 20-25 minutos, até dourar levemente e um palito sair limpo. Deixe esfriar completamente.",
      "Corte cada disco ao meio, se necessário, para ter várias camadas finas.",
      "Monte alternando camadas de bolo, chantilly e morango fatiado, terminando com uma camada generosa de chantilly por cima.",
      "Decore com frutas frescas inteiras por cima e, se desejar, pressione amêndoas laminadas tostadas nas laterais.",
      "Leve à geladeira por pelo menos 1 hora antes de servir, para firmar."
    ],
    tips: [
      "É o bolo de aniversário clássico dinamarquês — leve, com camadas de pão de ló fofo, chantilly fresco e frutas, nunca pesado ou excessivamente doce.",
      "Bater bem os ovos com açúcar (até formar fitas espessas) é o que garante um pão de ló leve e aerado sem precisar de muita gordura na massa.",
      "Monte com antecedência de algumas horas (não dias) — o bolo fica melhor no mesmo dia ou no dia seguinte, antes que o chantilly e as frutas soltem líquido."
    ]
  },
  {
    name: "Koldskål",
    subgroup: "Sobremesas",
    desc: "Bebida/sobremesa fria de verão à base de leitelho adoçado com gemas e baunilha, servida com biscoitos amanteigados.",
    origin: "Dinamarca",
    time: { prep: "15 min", cook: "0 min", total: "15 min + gelar" },
    yield: "4 porções",
    difficulty: "Fácil",
    tags: ["diet:vegetariana", "ingredient:ovo", "ingredient:limao"],
    ingredients: [
      "1 L de leitelho (buttermilk/kærnemælk)",
      "3 gemas",
      "80 g de açúcar",
      "1 fava de baunilha (ou extrato)",
      "Suco de 1/2 limão",
      "Biscoitos amanteigados (kammerjunker), para servir"
    ],
    ingredientsStructured: [
      {
        raw: "1 L de leitelho (buttermilk/kærnemælk)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "litro", item: "leitelho (buttermilk/kærnemælk)", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "3 gemas",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: null, item: "gemas", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "80 g de açúcar",
        group: null,
        items: [
          { qty: 80, qtyRange: null, unit: "grama", item: "açúcar", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 fava de baunilha (ou extrato)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "fava", item: "baunilha", prep: null, alt: "extrato", optional: false, isReference: false },
        ],
      },
      {
        raw: "Suco de 1/2 limão",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "suco de 1/2 limão", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Biscoitos amanteigados (kammerjunker), para servir",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "biscoitos amanteigados (kammerjunker)", prep: "para servir", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Bata as gemas com o açúcar e a baunilha até esbranquiçar e engrossar levemente.",
      "Incorpore o leitelho aos poucos, batendo bem para homogeneizar.",
      "Tempere com suco de limão a gosto.",
      "Leve à geladeira por no mínimo 2 horas, bem gelado.",
      "Sirva em tigelas, com biscoitos amanteigados esfarelados ou inteiros por cima, para mergulhar."
    ],
    tips: [
      "É uma sobremesa/bebida fria de verão, tradicionalmente servida em dias quentes na Dinamarca — a acidez refrescante do leitelho é a base de todo o prato.",
      "Os biscoitos kammerjunker (pequenos biscoitos amanteigados e crocantes) são o acompanhamento tradicional indispensável, amolecendo levemente ao entrar em contato com o líquido.",
      "Pode ser enriquecido com frutas vermelhas frescas por cima para uma versão ainda mais refrescante."
    ]
  },
  {
    name: "Rødgrød med Fløde",
    subgroup: "Sobremesas",
    desc: "Literalmente 'papa vermelha com creme': frutas vermelhas cozidas e engrossadas, servidas frias com creme de leite puro por cima.",
    origin: "Dinamarca",
    time: { prep: "10 min", cook: "15 min", total: "25 min + gelar" },
    yield: "4 porções",
    difficulty: "Fácil",
    tags: ["diet:vegetariana"],
    ingredients: [
      "500 g de frutas vermelhas variadas (morango, framboesa, groselha, cereja), frescas ou congeladas",
      "150 ml de água",
      "80 g de açúcar (ajustar conforme a doçura das frutas)",
      "2 colheres (sopa) de amido de milho, dissolvido em um pouco de água fria",
      "Creme de leite fresco (não batido, apenas gelado), para servir"
    ],
    ingredientsStructured: [
      {
        raw: "500 g de frutas vermelhas variadas (morango, framboesa, groselha, cereja), frescas ou congeladas",
        group: null,
        items: [
          { qty: 500, qtyRange: null, unit: "grama", item: "frutas vermelhas variadas", prep: "morango, framboesa, groselha, cereja, frescas ou congeladas", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "150 ml de água",
        group: null,
        items: [
          { qty: 150, qtyRange: null, unit: "mililitro", item: "água", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "80 g de açúcar (ajustar conforme a doçura das frutas)",
        group: null,
        items: [
          { qty: 80, qtyRange: null, unit: "grama", item: "açúcar (ajustar conforme a doçura das frutas)", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 colheres (sopa) de amido de milho, dissolvido em um pouco de água fria",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "colher-sopa", item: "amido de milho", prep: "dissolvido em um pouco de água fria", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Creme de leite fresco (não batido, apenas gelado), para servir",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "creme de leite fresco", prep: "não batido, apenas gelado, para servir", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Numa panela, cozinhe as frutas vermelhas com a água e o açúcar em fogo médio por 8-10 minutos, até as frutas amolecerem e liberarem seus sucos.",
      "Se desejar uma textura mais lisa, bata levemente e passe por peneira para remover sementes (opcional, muitas versões mantêm rústico).",
      "Volte ao fogo, adicione o amido de milho dissolvido aos poucos, mexendo sempre, até engrossar levemente, formando uma consistência de mingau mole.",
      "Transfira para taças individuais e deixe esfriar completamente, depois leve à geladeira por pelo menos 1 hora.",
      "Sirva frio, com um generoso fio de creme de leite fresco (não batido) por cima."
    ],
    tips: [
      "O nome significa literalmente 'papa vermelha com creme' — uma sobremesa simples de frutas vermelhas engrossadas, sempre servida com creme de leite puro por cima (nunca batido em chantilly).",
      "Use uma mistura de frutas vermelhas variadas para um sabor mais complexo — groselha vermelha é tradicionalmente uma das principais na receita dinamarquesa clássica.",
      "Uma sobremesa de verão extremamente popular, aproveitando a fartura de frutas vermelhas da estação escandinava."
    ]
  },
  {
    name: "Citrontærte",
    subgroup: "Sobremesas",
    desc: "Versão dinamarquesa da torta de limão: base amanteigada preenchida com lemon curd e finalizada com raspas de limão.",
    origin: "Dinamarca",
    time: { prep: "30 min + 1h geladeira", cook: "35 min", total: "2h05" },
    yield: "8 porções",
    difficulty: "Média",
    tags: ["diet:vegetariana", "ingredient:ovo", "ingredient:limao"],
    ingredients: [
      "1 receita de massa pâte sucrée (ver receita Lemon Tart, categoria Sobremesas Clássicas)",
      "1 receita de lemon curd (ver receita Lemon Tart)",
      "200 ml de creme de leite fresco, batido em chantilly, para decorar (opcional)",
      "Raspas de limão, para finalizar"
    ],
    ingredientsStructured: [
      {
        raw: "1 receita de massa pâte sucrée (ver receita Lemon Tart, categoria Sobremesas Clássicas)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "receita de massa pâte sucrée", prep: "ver receita lemon tart, categoria sobremesas clássicas", alt: null, optional: false, isReference: true },
        ],
      },
      {
        raw: "1 receita de lemon curd (ver receita Lemon Tart)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "receita de lemon curd", prep: "ver receita lemon tart", alt: null, optional: false, isReference: true },
        ],
      },
      {
        raw: "200 ml de creme de leite fresco, batido em chantilly, para decorar (opcional)",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "mililitro", item: "creme de leite fresco", prep: "batido em chantilly, para decorar", alt: null, optional: true, isReference: false },
        ],
      },
      {
        raw: "Raspas de limão, para finalizar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "raspas de limão", prep: "para finalizar", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Prepare a massa e asse a base 'às cegas', seguindo exatamente a técnica descrita na receita de Lemon Tart (categoria Sobremesas Clássicas).",
      "Prepare o lemon curd seguindo a mesma receita.",
      "Despeje o curd ainda morno sobre a base já assada e fria.",
      "Leve à geladeira por pelo menos 2 horas, até firmar completamente.",
      "Decore com pequenas porções de chantilly ao redor da borda, se desejar, e finalize com raspas de limão fresco antes de servir."
    ],
    tips: [
      "É essencialmente a versão dinamarquesa da clássica torta de limão francesa/inglesa — a técnica de base é idêntica à receita já detalhada em Sobremesas Clássicas.",
      "A torta dinamarquesa costuma ser decorada de forma mais simples (raspas de limão, pequenos toques de chantilly) comparada a versões mais elaboradas com merengue.",
      "Ótima sobremesa para equilibrar uma refeição mais pesada, graças à acidez refrescante do limão."
    ]
  },
  {
    name: "Brunsviger",
    subgroup: "Sobremesas",
    desc: "Bolo de massa fermentada com covinhas cheias de manteiga e açúcar mascavo caramelizado, ao estilo focaccia doce.",
    origin: "Dinamarca (Fiônia)",
    time: { prep: "20 min + 1h fermentação", cook: "20 min", total: "1h40" },
    yield: "8-10 porções",
    difficulty: "Fácil",
    tags: ["diet:vegetariana", "ingredient:ovo"],
    ingredients: [
      "400 g de farinha de trigo",
      "7 g de fermento biológico seco",
      "50 g de açúcar",
      "1 ovo",
      "60 g de manteiga amolecida",
      "200 ml de leite morno",
      "Para a cobertura: 150 g de manteiga, 200 g de açúcar mascavo"
    ],
    ingredientsStructured: [
      {
        raw: "400 g de farinha de trigo",
        group: null,
        items: [
          { qty: 400, qtyRange: null, unit: "grama", item: "farinha de trigo", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "50 g de açúcar",
        group: null,
        items: [
          { qty: 50, qtyRange: null, unit: "grama", item: "açúcar", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "60 g de manteiga amolecida",
        group: null,
        items: [
          { qty: 60, qtyRange: null, unit: "grama", item: "manteiga", prep: "amolecida", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "200 ml de leite morno",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "mililitro", item: "leite morno", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Para a cobertura: 150 g de manteiga, 200 g de açúcar mascavo",
        group: "cobertura",
        items: [
          { qty: 150, qtyRange: null, unit: "grama", item: "manteiga", prep: null, alt: null, optional: false, isReference: false },
          { qty: 200, qtyRange: null, unit: "grama", item: "açúcar mascavo", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Misture a farinha, fermento e açúcar. Adicione o ovo, manteiga e leite morno, formando uma massa. Sove por 8-10 minutos até ficar lisa.",
      "Cubra e deixe fermentar por 1 hora, até dobrar de volume.",
      "Abra a massa numa assadeira retangular untada, esticando com as mãos até cobrir todo o fundo, formando uma camada uniforme.",
      "Com os dedos, faça covinhas profundas por toda a superfície (semelhante à técnica da focaccia).",
      "Derreta a manteiga com o açúcar mascavo numa panela pequena, até formar uma pasta homogênea.",
      "Espalhe essa mistura sobre a massa, preenchendo bem as covinhas.",
      "Deixe descansar por 15 minutos. Asse a 190°C por 18-20 minutos, até a massa cozinhar por completo e a cobertura borbulhar e caramelizar.",
      "Sirva morno, cortado em quadrados."
    ],
    tips: [
      "As covinhas profundas na massa (mesma técnica da focaccia italiana) são o que permite que a cobertura de açúcar mascavo e manteiga se aloje e caramelize em bolsões deliciosos.",
      "É um bolo tradicional da ilha da Fiônia (Funen), com variações regionais de espessura e doçura em diferentes partes da Dinamarca.",
      "Melhor consumido no mesmo dia, ainda morno — a textura muda bastante ao esfriar completamente."
    ]
  },
  {
    name: "Kransekage",
    subgroup: "Sobremesas",
    desc: "Torre cônica de anéis de massa de amêndoa (tipo marzipan) empilhados e decorados com glacê — para celebrações especiais.",
    origin: "Dinamarca",
    time: { prep: "40 min + 2h descanso", cook: "20 min", total: "3h" },
    yield: "1 torre (≈20 porções)",
    difficulty: "Alta",
    tags: ["diet:vegetariana", "ingredient:ovo", "ingredient:castanha", "ingredient:limao"],
    ingredients: [
      "500 g de amêndoas moídas (farinha de amêndoas)",
      "500 g de açúcar de confeiteiro",
      "3-4 claras de ovo",
      "1 colher (chá) de extrato de amêndoas amargas (opcional)",
      "Para a decoração: 200 g de açúcar de confeiteiro, 2-3 colheres (sopa) de clara de ovo, algumas gotas de limão"
    ],
    ingredientsStructured: [
      {
        raw: "500 g de amêndoas moídas (farinha de amêndoas)",
        group: null,
        items: [
          { qty: 500, qtyRange: null, unit: "grama", item: "amêndoas", prep: "moídas (farinha de amêndoas)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "500 g de açúcar de confeiteiro",
        group: null,
        items: [
          { qty: 500, qtyRange: null, unit: "grama", item: "açúcar de confeiteiro", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "3-4 claras de ovo",
        group: null,
        items: [
          { qty: null, qtyRange: [3, 4], unit: null, item: "claras de ovo", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (chá) de extrato de amêndoas amargas (opcional)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "extrato de amêndoas amargas", prep: null, alt: null, optional: true, isReference: false },
        ],
      },
      {
        raw: "Para a decoração: 200 g de açúcar de confeiteiro, 2-3 colheres (sopa) de clara de ovo, algumas gotas de limão",
        group: "decoração",
        items: [
          { qty: 200, qtyRange: null, unit: "grama", item: "açúcar de confeiteiro", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: [2, 3], unit: "colher-sopa", item: "clara de ovo", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "gotas de limão", prep: "algumas", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Misture a farinha de amêndoas com o açúcar de confeiteiro.",
      "Adicione as claras aos poucos, misturando até formar uma massa firme mas moldável (semelhante a um marzipan grosso). Ajuste com mais clara ou açúcar conforme necessário.",
      "Deixe a massa descansar coberta por pelo menos 2 horas (ou durante a noite) — isso facilita muito a modelagem.",
      "Divida a massa em porções e role formando cordões finos, de espessuras crescentes.",
      "Molde cada cordão num anel, do maior ao menor, criando cerca de 15-18 anéis de tamanhos decrescentes.",
      "Disponha os anéis em formas próprias (semicirculares, para dar a curvatura característica) ou diretamente numa assadeira forrada.",
      "Asse a 175°C por 12-15 minutos, até dourarem levemente nas bordas, mas mantendo o interior macio.",
      "Deixe esfriar completamente. Prepare a decoração batendo o açúcar de confeiteiro com a clara e limão até formar um glacê firme.",
      "Empilhe os anéis do maior para o menor, formando uma torre cônica, colando cada camada com um pouco do glacê.",
      "Decore toda a torre com o glacê em ziguezague, e adicione bandeirinhas ou outros enfeites tradicionais dinamarqueses, se desejar."
    ],
    tips: [
      "É a torre de marzipan tradicional dinamarquesa para celebrações especiais (Ano Novo, casamentos, formaturas) — cada anel é retirado e quebrado em pedaços para os convidados comerem.",
      "O descanso da massa antes de modelar é importante — massa recém-feita é mais difícil de moldar em cordões lisos e uniformes.",
      "Formas próprias semicirculares para kransekage (encontradas em lojas especializadas) facilitam muito a curvatura uniforme dos anéis, mas moldar à mão também funciona com prática."
    ]
  },

  // ===================== CONSERVAS E PATÊS =====================
  {
    name: "Leverpostej",
    subgroup: "Conservas e Patês",
    desc: "Patê de fígado de porco assado em banho-maria, cremoso e temperado com pimenta-da-jamaica — presença constante na geladeira dinamarquesa.",
    origin: "Dinamarca",
    time: { prep: "20 min", cook: "1h", total: "1h20" },
    yield: "≈800 g",
    difficulty: "Média",
    tags: ["protein:suino", "contains:peixe", "ingredient:ovo"],
    ingredients: [
      "500 g de fígado de porco, limpo",
      "200 g de toucinho, em cubos",
      "1 cebola picada",
      "2 filés de anchova (opcional, tradicional)",
      "3 colheres (sopa) de farinha de trigo",
      "300 ml de leite",
      "2 ovos",
      "1 colher (chá) de pimenta-da-jamaica (allspice)",
      "Sal e pimenta a gosto",
      "Fatias extras de toucinho, para forrar a forma"
    ],
    ingredientsStructured: [
      {
        raw: "500 g de fígado de porco, limpo",
        group: null,
        items: [
          { qty: 500, qtyRange: null, unit: "grama", item: "fígado de porco", prep: "limpo", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "200 g de toucinho, em cubos",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "grama", item: "toucinho", prep: "em cubos", alt: null, optional: false, isReference: false },
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
        raw: "2 filés de anchova (opcional, tradicional)",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "file", item: "anchova", prep: "tradicional", alt: null, optional: true, isReference: false },
        ],
      },
      {
        raw: "3 colheres (sopa) de farinha de trigo",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: "colher-sopa", item: "farinha de trigo", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "300 ml de leite",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "mililitro", item: "leite", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 ovos",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "ovos", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (chá) de pimenta-da-jamaica (allspice)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "pimenta-da-jamaica (allspice)", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "Fatias extras de toucinho, para forrar a forma",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "fatias extras de toucinho", prep: "para forrar a forma", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Bata o fígado, toucinho, cebola e anchova (se usar) no processador, até formar uma pasta bem fina e homogênea.",
      "Numa panela, prepare uma Béchamel rápida: derreta um pouco de manteiga, junte a farinha, cozinhe 1 minuto, adicione o leite aos poucos até engrossar. Deixe esfriar levemente.",
      "Misture a pasta de fígado com a Béchamel, os ovos e a pimenta-da-jamaica, batendo bem até homogêneo. Tempere com sal e pimenta.",
      "Pré-aqueça o forno a 160°C. Forre uma forma de terrine (ou forma de bolo inglês) com fatias de toucinho.",
      "Despeje a mistura de fígado na forma, alisando a superfície.",
      "Cubra com papel-alumínio e asse em banho-maria por 50-60 minutos, até firmar (um palito deve sair limpo).",
      "Deixe esfriar completamente, depois leve à geladeira por no mínimo 4 horas antes de desenformar e fatiar.",
      "Sirva fatiado, como topping de smørrebrød com picles por cima, ou como patê para passar em torradas."
    ],
    tips: [
      "É um dos itens mais onipresentes da culinária dinamarquesa — praticamente toda geladeira do país tem um pacote de leverpostej, seja caseiro ou comprado pronto.",
      "O banho-maria é essencial para um cozimento uniforme e uma textura lisa, sem partes ressecadas nas bordas.",
      "Tradicionalmente servido como topping de smørrebrød com uma colher de picles de pepino ou cebola por cima, ou simplesmente passado numa torrada quente no café da manhã."
    ]
  },
  {
    name: "Syltede Agurker",
    subgroup: "Conservas e Patês",
    desc: "Pepinos em conserva numa salmoura de vinagre com mostarda e endro — acompanhamento clássico de carnes e patês.",
    origin: "Dinamarca",
    time: { prep: "15 min", cook: "10 min", total: "25 min + conserva" },
    yield: "≈1 kg",
    difficulty: "Fácil",
    tags: ["diet:vegetariana"],
    ingredients: [
      "1 kg de pepinos pequenos (ou pepino comum, em rodelas grossas)",
      "500 ml de vinagre branco",
      "300 ml de água",
      "200 g de açúcar",
      "2 colheres (sopa) de sal",
      "1 colher (sopa) de sementes de mostarda",
      "1 colher (chá) de sementes de endro (ou alguns raminhos de endro fresco)",
      "2 folhas de louro"
    ],
    ingredientsStructured: [
      {
        raw: "1 kg de pepinos pequenos (ou pepino comum, em rodelas grossas)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "quilograma", item: "pepinos pequenos", prep: null, alt: "pepino comum, em rodelas grossas", optional: false, isReference: false },
        ],
      },
      {
        raw: "500 ml de vinagre branco",
        group: null,
        items: [
          { qty: 500, qtyRange: null, unit: "mililitro", item: "vinagre branco", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "300 ml de água",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "mililitro", item: "água", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "200 g de açúcar",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "grama", item: "açúcar", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 colheres (sopa) de sal",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "colher-sopa", item: "sal", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (sopa) de sementes de mostarda",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "sementes de mostarda", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (chá) de sementes de endro (ou alguns raminhos de endro fresco)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "sementes de endro", prep: null, alt: "alguns raminhos de endro fresco", optional: false, isReference: false },
        ],
      },
      {
        raw: "2 folhas de louro",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "folha", item: "louro", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Lave bem os pepinos. Se forem grandes, corte em rodelas grossas ou palitos; se pequenos, deixe inteiros ou corte ao meio.",
      "Prepare a salmoura: ferva o vinagre, água, açúcar e sal, mexendo até dissolver completamente.",
      "Junte as sementes de mostarda, endro e louro à salmoura fervente, cozinhando por 2 minutos.",
      "Disponha os pepinos em potes de vidro esterilizados, cobrindo completamente com a salmoura quente.",
      "Deixe esfriar em temperatura ambiente, feche bem os potes e leve à geladeira.",
      "Deixe conservar por no mínimo 48 horas antes de consumir — quanto mais tempo, mais os sabores se desenvolvem.",
      "Guarda-se na geladeira por várias semanas."
    ],
    tips: [
      "É a conserva de pepino de acompanhamento indispensável em quase toda mesa dinamarquesa, especialmente ao lado de carnes e patês.",
      "Pepinos pequenos e firmes (tipo pepino para conserva) mantêm melhor a crocância do que pepinos comuns grandes.",
      "As sementes de endro e mostarda são o que dão o perfil de sabor clássico escandinavo — não substitua por outras especiarias se quiser o resultado tradicional."
    ]
  },
  {
    name: "Syltede Løg",
    subgroup: "Conservas e Patês",
    desc: "Conserva rápida de cebola roxa fatiada fina em salmoura agridoce — ácida e crocante, para smørrebrød e hambúrgueres.",
    origin: "Dinamarca",
    time: { prep: "10 min", cook: "5 min", total: "15 min + conserva" },
    yield: "≈300 g",
    difficulty: "Fácil",
    tags: ["diet:vegetariana"],
    ingredients: [
      "2 cebolas roxas, fatiadas bem fino",
      "200 ml de vinagre branco",
      "100 ml de água",
      "80 g de açúcar",
      "1 colher (chá) de sal",
      "Alguns grãos de pimenta-do-reino"
    ],
    ingredientsStructured: [
      {
        raw: "2 cebolas roxas, fatiadas bem fino",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "cebolas roxas", prep: "fatiadas bem fino", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "200 ml de vinagre branco",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "mililitro", item: "vinagre branco", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "100 ml de água",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "mililitro", item: "água", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "80 g de açúcar",
        group: null,
        items: [
          { qty: 80, qtyRange: null, unit: "grama", item: "açúcar", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "Alguns grãos de pimenta-do-reino",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "alguns grãos de pimenta-do-reino", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Disponha a cebola fatiada bem fina num pote de vidro esterilizado.",
      "Numa panela pequena, ferva o vinagre, água, açúcar, sal e pimenta-do-reino, mexendo até dissolver completamente.",
      "Despeje a salmoura quente sobre a cebola, cobrindo completamente.",
      "Deixe esfriar em temperatura ambiente, depois feche o pote e leve à geladeira.",
      "Deixe conservar por no mínimo algumas horas (fica pronta rápido, diferente de outras conservas) antes de consumir — mas fica ainda melhor depois de 24 horas.",
      "Guarda-se na geladeira por até duas semanas."
    ],
    tips: [
      "É uma conserva rápida (quick pickle) que fica pronta em poucas horas, diferente de conservas mais longas — a cebola roxa fina absorve o tempero rapidamente.",
      "Um topping ácido e crocante extremamente versátil, usado em smørrebrød de roast beef, hambúrgueres e saladas.",
      "A cor da salmoura vai ficando rosada conforme a cebola roxa libera pigmento — um efeito visual bonito e totalmente normal."
    ]
  },
];
