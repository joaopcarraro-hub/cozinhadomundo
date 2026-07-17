// SUÍNOS
window.RECIPES = window.RECIPES || {};
window.RECIPES["suinos"] = [

  // ===================== ASSADOS =====================
  {
    name: "Porchetta",
    subgroup: "Assados",
    desc: "Barriga de porco enrolada com lombo, alho e ervas, assada até a pele ficar bem crocante.",
    origin: "Itália",
    time: { prep: "40 min + 12h geladeira", cook: "2h30", total: "≈15h" },
    yield: "8-10 porções",
    difficulty: "Alta",
    tags: [],
    ingredients: [
      "1 barriga de porco inteira, com pele, aberta em manta (2,5-3 kg)",
      "1 lombo de porco (1 kg), para o recheio central",
      "8 dentes de alho picados",
      "4 colheres (sopa) de erva-doce (sementes), levemente tostadas e amassadas",
      "3 colheres (sopa) de alecrim fresco picado",
      "2 colheres (sopa) de raspas de limão",
      "Sal grosso (generoso, cerca de 3% do peso total da carne)",
      "Pimenta-do-reino a gosto",
      "Azeite de oliva"
    ],
    ingredientsStructured: [
      {
        raw: "1 barriga de porco inteira, com pele, aberta em manta (2,5-3 kg)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "barriga de porco inteira", prep: "com pele, aberta em manta (2,5-3 kg)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 lombo de porco (1 kg), para o recheio central",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "lombo de porco", prep: "(1 kg), para o recheio central", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "8 dentes de alho picados",
        group: null,
        items: [
          { qty: 8, qtyRange: null, unit: "dente", item: "alho", prep: "picados", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "4 colheres (sopa) de erva-doce (sementes), levemente tostadas e amassadas",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: "colher-sopa", item: "erva-doce (sementes)", prep: "levemente tostadas e amassadas", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "3 colheres (sopa) de alecrim fresco picado",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: "colher-sopa", item: "alecrim fresco", prep: "picado", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 colheres (sopa) de raspas de limão",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "colher-sopa", item: "raspas de limão", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Sal grosso (generoso, cerca de 3% do peso total da carne)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "sal grosso", prep: "generoso, cerca de 3% do peso total da carne", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Pimenta-do-reino a gosto",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "pimenta-do-reino", prep: "a gosto", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Azeite de oliva",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "azeite de oliva", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Abra a barriga de porco numa superfície, com a pele para baixo. Faça cortes leves na carne (sem atingir a pele) para o tempero penetrar melhor.",
      "Misture o alho, erva-doce tostada, alecrim, raspas de limão, sal e pimenta, formando uma pasta com um fio de azeite.",
      "Espalhe generosamente essa pasta de temperos por toda a superfície interna da barriga.",
      "Tempere o lombo com sal e pimenta e posicione no centro da barriga aberta.",
      "Enrole a barriga firmemente ao redor do lombo, formando um cilindro compacto, com a pele por fora.",
      "Amarre com barbante culinário em intervalos regulares (a cada 3-4 cm) para manter o formato firme.",
      "Sem cobrir, leve à geladeira, descoberta, por no mínimo 12 horas (ou até 24h) — isso seca a pele, essencial para ficar crocante depois.",
      "Retire da geladeira 1 hora antes de assar. Score (corte) a pele em linhas paralelas, sem atingir a carne, e esfregue bastante sal grosso por cima.",
      "Asse a 220°C por 30-40 minutos, para a pele começar a bolhar e dourar, depois abaixe para 160°C e continue assando por cerca de 2 horas, até a temperatura interna atingir 68-70°C.",
      "Se a pele não estiver totalmente crocante ao final, suba a temperatura para 230°C nos últimos 10-15 minutos, vigiando de perto.",
      "Deixe descansar por 20 minutos antes de retirar o barbante e fatiar em rodelas grossas."
    ],
    tips: [
      "A pele seca (deixada descoberta na geladeira por horas) é o segredo absoluto para o 'crackling' crocante — pele úmida nunca fica crocante no forno, por mais quente que esteja.",
      "A erva-doce tostada e amassada é a assinatura aromática clássica da porchetta italiana — não substitua por outra especiaria se quiser o sabor autêntico.",
      "Peça ao açougueiro para preparar a barriga já aberta em manta, com a pele limpa — facilita muito o processo em casa."
    ]
  },
  {
    name: "Pernil Assado",
    subgroup: "Assados",
    desc: "Pernil suíno marinado em alho, laranja e vinho branco, assado lentamente até ficar macio e com a pele crocante.",
    origin: "Brasil / Internacional",
    time: { prep: "20 min + 12h marinada", cook: "3h30", total: "≈16h" },
    yield: "10-12 porções",
    difficulty: "Média",
    tags: ["ingredient:vinho"],
    ingredients: [
      "1 pernil de porco com pele e osso (3,5-4 kg)",
      "8 dentes de alho amassados",
      "2 colheres (sopa) de sal",
      "1 colher (sopa) de páprica doce",
      "Suco de 2 laranjas",
      "100 ml de vinho branco seco",
      "2 folhas de louro",
      "Pimenta-do-reino a gosto",
      "Azeite de oliva"
    ],
    ingredientsStructured: [
      {
        raw: "1 pernil de porco com pele e osso (3,5-4 kg)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "pernil de porco com pele e osso", prep: "(3,5-4 kg)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "8 dentes de alho amassados",
        group: null,
        items: [
          { qty: 8, qtyRange: null, unit: "dente", item: "alho", prep: "amassados", alt: null, optional: false, isReference: false },
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
        raw: "1 colher (sopa) de páprica doce",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "páprica doce", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Suco de 2 laranjas",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "suco de 2 laranjas", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "2 folhas de louro",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "folha", item: "louro", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Pimenta-do-reino a gosto",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "pimenta-do-reino", prep: "a gosto", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Azeite de oliva",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "azeite de oliva", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Com uma faca, faça furos profundos por toda a superfície do pernil e finque pedaços de alho dentro deles.",
      "Misture o sal, páprica, suco de laranja, vinho branco, louro e pimenta, formando uma marinada.",
      "Esfregue essa marinada por toda a peça, cobrindo bem, inclusive dentro dos furos.",
      "Cubra e leve à geladeira por no mínimo 12 horas (idealmente 24h), virando a peça uma vez no meio do tempo.",
      "Retire da geladeira 1 hora antes de assar. Faça cortes losangulares na pele/gordura (sem atingir muito a carne) e regue com azeite.",
      "Cubra bem com papel-alumínio e asse a 160°C por cerca de 3 horas (aproximadamente 45 min por kg), até a carne ficar bem macia.",
      "Retire o papel-alumínio, suba a temperatura para 220°C e asse por mais 20-30 minutos, regando com os sucos da assadeira, até a pele dourar e ficar crocante.",
      "Deixe descansar por 15-20 minutos antes de fatiar."
    ],
    tips: [
      "O tempo de marinada é o que garante sabor por dentro da peça inteira — não pule ou reduza esse tempo se possível.",
      "Cobrir com papel-alumínio na primeira parte do cozimento mantém a umidade e evita que a superfície resseque antes da carne cozinhar por dentro; retirar no final permite a pele dourar e ficar crocante.",
      "Regar com os próprios sucos da assadeira periodicamente na fase final intensifica o sabor e o brilho da pele."
    ]
  },
  {
    name: "Lombo Recheado",
    subgroup: "Assados",
    desc: "Lombo suíno aberto em manta, recheado com damasco, espinafre e queijo, enrolado e assado em rolo.",
    origin: "Internacional",
    time: { prep: "30 min", cook: "50 min", total: "1h20" },
    yield: "6 porções",
    difficulty: "Média",
    tags: ["ingredient:queijo", "ingredient:espinafre", "ingredient:castanha"],
    ingredients: [
      "1 lombo de porco inteiro (1,2-1,5 kg)",
      "100 g de damasco seco picado (ou ameixa seca)",
      "100 g de espinafre refogado e bem escorrido",
      "80 g de queijo tipo provolone ou muçarela, em tiras",
      "50 g de nozes ou castanhas picadas (opcional)",
      "2 dentes de alho picados",
      "Barbante culinário",
      "Sal, pimenta e ervas frescas a gosto",
      "2 colheres (sopa) de azeite"
    ],
    ingredientsStructured: [
      {
        raw: "1 lombo de porco inteiro (1,2-1,5 kg)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "lombo de porco inteiro", prep: "(1,2-1,5 kg)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "100 g de damasco seco picado (ou ameixa seca)",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "grama", item: "damasco seco", prep: "picado", alt: "ameixa seca", optional: false, isReference: false },
        ],
      },
      {
        raw: "100 g de espinafre refogado e bem escorrido",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "grama", item: "espinafre", prep: "refogado e bem escorrido", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "80 g de queijo tipo provolone ou muçarela, em tiras",
        group: null,
        items: [
          { qty: 80, qtyRange: null, unit: "grama", item: "queijo tipo provolone", prep: null, alt: "muçarela, em tiras", optional: false, isReference: false },
        ],
      },
      {
        raw: "50 g de nozes ou castanhas picadas (opcional)",
        group: null,
        items: [
          { qty: 50, qtyRange: null, unit: "grama", item: "nozes", prep: null, alt: "castanhas picadas", optional: true, isReference: false },
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
        raw: "Barbante culinário",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "barbante culinário", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Sal, pimenta e ervas frescas a gosto",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "sal", prep: "a gosto", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "pimenta", prep: "a gosto", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "ervas frescas", prep: "a gosto", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 colheres (sopa) de azeite",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "colher-sopa", item: "azeite", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Abra o lombo em borboleta: com uma faca afiada, corte no sentido do comprimento sem atingir o outro lado, abrindo como um livro. Cubra com filme plástico e bata levemente para uniformizar a espessura.",
      "Tempere a carne aberta com sal, pimenta e alho picado.",
      "Distribua o damasco picado, o espinafre escorrido, o queijo em tiras e as nozes sobre a superfície aberta, deixando uma borda livre.",
      "Enrole firmemente a partir de uma das extremidades, formando um cilindro compacto com o recheio no centro.",
      "Amarre com barbante culinário em intervalos regulares para manter o formato.",
      "Tempere a parte externa com sal, pimenta e ervas frescas.",
      "Aqueça o azeite numa frigideira que possa ir ao forno e sele o rolo por todos os lados até dourar.",
      "Transfira ao forno pré-aquecido a 190°C e asse por 35-40 minutos, até a temperatura interna atingir 63-65°C.",
      "Deixe descansar por 10 minutos antes de retirar o barbante e fatiar em rodelas, revelando o recheio em espiral."
    ],
    tips: [
      "Abrir o lombo em borboleta e uniformizar a espessura é essencial para que o rolo cozinhe por igual e feche bem.",
      "A combinação de frutas secas, queijo e nozes é clássica, mas pode variar bastante — cogumelos, presunto e ervas também funcionam muito bem como recheio.",
      "Deixe descansar antes de cortar para os sucos se redistribuírem e o recheio não escorrer todo ao fatiar."
    ]
  },

  // ===================== DEFUMADOS E GRELHADOS =====================
  {
    name: "Kassler",
    subgroup: "Defumados e Grelhados",
    desc: "Posta de lombo suíno curado e defumado (à moda alemã), selada e servida com repolho roxo agridoce.",
    origin: "Alemanha",
    time: { prep: "15 min", cook: "35 min", total: "50 min" },
    yield: "4 porções",
    difficulty: "Fácil",
    tags: [],
    ingredients: [
      "4 postas de lombo de porco defumado e curado (kassler), cerca de 200 g cada",
      "2 colheres (sopa) de manteiga",
      "1 cebola fatiada",
      "500 g de repolho roxo fatiado (para o acompanhamento clássico, Rotkohl)",
      "1 maçã picada",
      "2 colheres (sopa) de vinagre de maçã",
      "1 colher (sopa) de açúcar",
      "1 pitada de cravo em pó ou canela",
      "Sal e pimenta a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "4 postas de lombo de porco defumado e curado (kassler), cerca de 200 g cada",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: "posta", item: "lombo de porco defumado e curado (kassler)", prep: "cerca de 200 g cada", alt: null, optional: false, isReference: false },
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
        raw: "1 cebola fatiada",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cebola", prep: "fatiada", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "500 g de repolho roxo fatiado (para o acompanhamento clássico, Rotkohl)",
        group: null,
        items: [
          { qty: 500, qtyRange: null, unit: "grama", item: "repolho roxo", prep: "fatiado (para o acompanhamento clássico, rotkohl)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 maçã picada",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "maçã", prep: "picada", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 colheres (sopa) de vinagre de maçã",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "colher-sopa", item: "vinagre de maçã", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "1 pitada de cravo em pó ou canela",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "pitada", item: "cravo em pó", prep: null, alt: "canela", optional: false, isReference: false },
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
      "Se as postas de kassler não estiverem prontas (algumas versões vêm cruas, apenas curadas e defumadas), cozinhe-as em água ou caldo por 20-25 minutos até aquecer por completo — o kassler tradicional já vem curado e defumado, precisando só de reaquecimento e uma boa selada.",
      "Prepare o repolho roxo: refogue a cebola na manteiga até macia, junte o repolho fatiado e a maçã picada.",
      "Adicione o vinagre, açúcar e cravo/canela, tempere com sal e pimenta.",
      "Tampe e cozinhe em fogo baixo por 25-30 minutos, mexendo de vez em quando, até o repolho ficar macio e brilhante.",
      "Enquanto isso, sele as postas de kassler numa frigideira quente com um pouco de manteiga, 3-4 minutos de cada lado, só para dourar e aquecer bem por dentro.",
      "Sirva o kassler com o repolho roxo e, se desejar, purê de batata ou Spätzle (ver receita, categoria Massas)."
    ],
    tips: [
      "Kassler é lombo de porco curado (salgado) e defumado, similar em conceito ao bacon, mas em corte de posta espessa — encontre em açougues especializados ou delicatessens.",
      "O repolho roxo agridoce (Rotkohl) é o acompanhamento tradicional alemão, criando um contraste perfeito com o salgado defumado da carne.",
      "Não cozinhe demais o kassler na frigideira — como já vem curado, o objetivo é só aquecer e dourar, não cozinhar do zero."
    ]
  },
  {
    name: "Costelinha Barbecue",
    subgroup: "Defumados e Grelhados",
    desc: "Costelinha suína temperada com rub seco, assada lentamente e finalizada com molho barbecue caramelizado.",
    origin: "EUA",
    time: { prep: "20 min + 2h marinada", cook: "3h", total: "≈5h20" },
    yield: "4 porções",
    difficulty: "Média",
    tags: [],
    ingredients: [
      "1,5 kg de costelinha suína (ripa ou costela)",
      "Para o rub seco: 2 colheres (sopa) de páprica defumada, 1 colher (sopa) de açúcar mascavo, 1 colher (chá) de alho em pó, 1 colher (chá) de cebola em pó, 1 colher (chá) de cominho, sal e pimenta a gosto",
      "300 ml de molho barbecue (ver nota nas dicas para versão caseira rápida)"
    ],
    ingredientsStructured: [
      {
        raw: "1,5 kg de costelinha suína (ripa ou costela)",
        group: null,
        items: [
          { qty: 1.5, qtyRange: null, unit: "quilograma", item: "costelinha suína", prep: "ripa ou costela", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Para o rub seco: 2 colheres (sopa) de páprica defumada, 1 colher (sopa) de açúcar mascavo, 1 colher (chá) de alho em pó, 1 colher (chá) de cebola em pó, 1 colher (chá) de cominho, sal e pimenta a gosto",
        group: "rub seco",
        items: [
          { qty: 2, qtyRange: null, unit: "colher-sopa", item: "páprica defumada", prep: null, alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "açúcar mascavo", prep: null, alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "alho em pó", prep: null, alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "cebola em pó", prep: null, alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "cominho", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "sal", prep: "a gosto", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "pimenta", prep: "a gosto", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "300 ml de molho barbecue (ver nota nas dicas para versão caseira rápida)",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "mililitro", item: "molho barbecue (ver nota nas dicas para versão caseira rápida)", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Remova a membrana da parte de trás da costelinha (puxe com a ajuda de uma faca e papel toalha para não escorregar) — isso permite que o tempero penetre melhor e a carne fique mais macia.",
      "Misture os ingredientes do rub seco e esfregue generosamente por toda a costelinha, dos dois lados.",
      "Cubra e deixe marinar na geladeira por no mínimo 2 horas (idealmente durante a noite).",
      "Pré-aqueça o forno a 150°C. Envolva a costelinha bem apertada em papel-alumínio (ou use uma assadeira coberta) e asse por 2h30-3 horas, até a carne ficar extremamente macia.",
      "Retire do papel-alumínio, pincele generosamente com o molho barbecue.",
      "Suba a temperatura do forno para 220°C (ou use a grelha/churrasqueira) e asse/grelhe por mais 15-20 minutos, pincelando com mais molho a cada 5-7 minutos, até caramelizar.",
      "Deixe descansar por 5 minutos, corte entre os ossos e sirva."
    ],
    tips: [
      "Retirar a membrana da costela é um passo pequeno mas que faz enorme diferença na maciez final — sem isso, a carne fica com uma camada borrachuda por baixo.",
      "O cozimento longo e lento a baixa temperatura (envolto em papel-alumínio) é o que garante a maciez de 'cair do osso' antes mesmo de ir à grelha para caramelizar.",
      "Para um molho barbecue caseiro rápido: misture ketchup, vinagre de maçã, açúcar mascavo, molho inglês, mostarda e páprica defumada, cozinhando por 10 minutos até engrossar."
    ]
  },

  // ===================== EMPANADOS =====================
  {
    name: "Schnitzel",
    subgroup: "Empanados",
    desc: "Bife suíno fino empanado e frito até ficar crocante e dourado, ao estilo austríaco.",
    origin: "Áustria / Alemanha",
    time: { prep: "15 min", cook: "15 min", total: "30 min" },
    yield: "4 porções",
    difficulty: "Fácil",
    tags: [],
    ingredients: [
      "4 bifes de lombo ou alcatra suína, cortados finos",
      "Sal e pimenta a gosto",
      "Farinha de trigo, 2 ovos batidos e farinha de rosca — para empanar",
      "Manteiga e óleo, para fritar",
      "Limão, para servir"
    ],
    ingredientsStructured: [
      {
        raw: "4 bifes de lombo ou alcatra suína, cortados finos",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: null, item: "bifes de lombo", prep: null, alt: "alcatra suína, cortados finos", optional: false, isReference: false },
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
        raw: "Manteiga e óleo, para fritar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "manteiga", prep: "para fritar", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "óleo", prep: "para fritar", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Limão, para servir",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "limão", prep: "para servir", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Cubra os bifes com filme plástico e bata com um batedor de carne até ficarem bem finos e uniformes (cerca de 5 mm de espessura).",
      "Tempere com sal e pimenta dos dois lados.",
      "Passe cada bife na farinha, sacudindo o excesso, depois no ovo batido e por fim na farinha de rosca, pressionando levemente para aderir sem compactar demais (uma camada mais solta ajuda a formar as 'ondas' características ao fritar).",
      "Aqueça uma mistura de manteiga e óleo numa frigideira grande (deve cobrir cerca de 1 cm de altura) em fogo médio-alto.",
      "Frite os schnitzels por 2-3 minutos de cada lado, balançando levemente a frigideira durante a fritura (isso ajuda o empanado a 'inflar' em ondas soltas, característica clássica do prato bem feito).",
      "Escorra em papel toalha e sirva imediatamente, com uma fatia de limão para espremer por cima."
    ],
    tips: [
      "Balançar a frigideira suavemente enquanto frita (em vez de deixar parado) é o segredo dos schnitzels profissionais, que ficam com a crosta 'soltinha' e ondulada, não grudada na carne.",
      "A versão com vitela é chamada de Wiener Schnitzel e tem nome legalmente protegido na Áustria — feita com porco, o nome correto é apenas 'Schnitzel' ou 'Schnitzel Wiener Art' (à moda de Viena).",
      "Sirva com salada de batata morna (Kartoffelsalat, ver receita, categoria Alemanha) para o acompanhamento clássico."
    ]
  },
];
