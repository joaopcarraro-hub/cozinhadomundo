// PEIXES
window.RECIPES = window.RECIPES || {};
window.RECIPES["peixes"] = [

  // ===================== TÉCNICA MEUNIÈRE =====================
  {
    name: "Sole Meunière",
    subgroup: "Técnica Meunière",
    desc: "Filé de linguado empanado em farinha fina, dourado na manteiga e finalizado com manteiga avelã e limão.",
    origin: "França",
    time: { prep: "10 min", cook: "10 min", total: "20 min" },
    yield: "2 porções",
    difficulty: "Média",
    tags: ["ingredient:limao"],
    ingredients: [
      "2 filés de linguado (ou sole), com pele se possível",
      "Farinha de trigo, para empanar levemente",
      "60 g de manteiga (dividida)",
      "1 colher (sopa) de óleo neutro",
      "Suco de 1 limão",
      "2 colheres (sopa) de salsinha picada",
      "Sal e pimenta a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "2 filés de linguado (ou sole), com pele se possível",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "file", item: "linguado", prep: "com pele se possível", alt: "sole", optional: false, isReference: false },
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
        raw: "60 g de manteiga (dividida)",
        group: null,
        items: [
          { qty: 60, qtyRange: null, unit: "grama", item: "manteiga (dividida)", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "Suco de 1 limão",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "suco de 1 limão", prep: null, alt: null, optional: false, isReference: false },
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
    ],
    steps: [
      "Seque muito bem os filés com papel toalha. Tempere com sal e pimenta.",
      "Passe os filés na farinha, sacudindo o excesso — deve ficar uma camada bem fina.",
      "Aqueça o óleo com metade da manteiga numa frigideira em fogo médio-alto, até a manteiga espumar.",
      "Coloque os filés na frigideira e cozinhe por 2-3 minutos de cada lado, até dourarem bem e ficarem opacos por dentro. Retire e disponha nos pratos.",
      "Limpe rapidamente a frigideira com papel toalha, volte ao fogo médio e derreta o restante da manteiga.",
      "Cozinhe a manteiga até ficar dourada e com cheiro de avelã (beurre noisette) — fique atento, o ponto passa rápido de dourado para queimado.",
      "Retire do fogo, adicione o suco de limão (vai espumar) e a salsinha picada, misturando rapidamente.",
      "Regue os filés imediatamente com essa manteiga dourada e sirva na hora."
    ],
    tips: [
      "O nome 'meunière' (à moda da moleira) vem justamente da fina camada de farinha usada para empanar antes de dourar na manteiga.",
      "O ponto da beurre noisette (manteiga avelã) é rápido e crucial — retire do fogo assim que sentir o cheiro de avelã torrada, antes de escurecer demais e queimar.",
      "Linguado é o substituto brasileiro mais comum e acessível para a sole europeia tradicional, com resultado igualmente delicado."
    ]
  },
  {
    name: "Linguado à Belle Meunière",
    subgroup: "Técnica Meunière",
    desc: "Versão elaborada da meunière — linguado na manteiga dourada, coroado com camarão, cogumelo e tomate.",
    origin: "França",
    time: { prep: "20 min", cook: "20 min", total: "40 min" },
    yield: "2 porções",
    difficulty: "Média-alta",
    tags: ["contains:frutos-do-mar", "ingredient:tomate", "ingredient:cogumelo", "ingredient:limao"],
    ingredients: [
      "2 filés de linguado",
      "8 camarões médios, limpos",
      "100 g de cogumelos paris, fatiados",
      "1 tomate, sem pele e sem semente, em cubos pequenos (concassé)",
      "Farinha de trigo, para empanar o peixe",
      "80 g de manteiga (dividida)",
      "1 colher (sopa) de óleo neutro",
      "Suco de 1 limão",
      "2 colheres (sopa) de salsinha picada",
      "Sal e pimenta a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "2 filés de linguado",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "file", item: "linguado", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "8 camarões médios, limpos",
        group: null,
        items: [
          { qty: 8, qtyRange: null, unit: null, item: "camarões médios", prep: "limpos", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "100 g de cogumelos paris, fatiados",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "grama", item: "cogumelos paris", prep: "fatiados", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 tomate, sem pele e sem semente, em cubos pequenos (concassé)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "tomate", prep: "sem pele e sem semente, em cubos pequenos (concassé)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Farinha de trigo, para empanar o peixe",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "farinha de trigo", prep: "para empanar o peixe", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "80 g de manteiga (dividida)",
        group: null,
        items: [
          { qty: 80, qtyRange: null, unit: "grama", item: "manteiga (dividida)", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "Suco de 1 limão",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "suco de 1 limão", prep: null, alt: null, optional: false, isReference: false },
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
    ],
    steps: [
      "Prepare o peixe como na receita de Sole Meunière: tempere, passe na farinha e doure na manteiga com óleo, 2-3 minutos de cada lado. Reserve nos pratos.",
      "Na mesma frigideira, adicione um pouco mais de manteiga e salteie os camarões rapidamente, 1-2 minutos de cada lado, até ficarem rosados. Retire e reserve.",
      "Na sequência, salteie os cogumelos fatiados até dourarem, 4-5 minutos. Retire e reserve com os camarões.",
      "Junte o tomate concassé à frigideira só para aquecer, 1 minuto.",
      "Limpe a frigideira, derreta o restante da manteiga até formar a beurre noisette (dourada, com cheiro de avelã).",
      "Fora do fogo, junte o limão e a salsinha à manteiga dourada.",
      "Monte o prato: o peixe na base, coroado com os camarões, cogumelos e o tomate concassé por cima, finalizando com a manteiga dourada regada por igual."
    ],
    tips: [
      "'Belle Meunière' é a versão 'chique' da meunière simples — a mesma técnica de base, mas guarnecida com camarão, cogumelo e tomate.",
      "Prepare todos os componentes da guarnição enquanto o peixe descansa, para que tudo chegue quente à mesa ao mesmo tempo.",
      "Um clássico de restaurante de hotel francês tradicional, com apresentação generosa e elegante."
    ]
  },

  // ===================== ASSADOS E CURADOS =====================
  {
    name: "Peixe en Papillote",
    subgroup: "Assados e Curados",
    desc: "Filé de peixe branco assado num pacote selado de papel com legumes, limão e ervas, cozinhando no próprio vapor.",
    origin: "França",
    time: { prep: "20 min", cook: "18 min", total: "38 min" },
    yield: "2 porções",
    difficulty: "Fácil",
    tags: ["ingredient:tomate", "ingredient:limao"],
    ingredients: [
      "2 filés de peixe branco (robalo, badejo ou linguado), cerca de 180 g cada",
      "1 abobrinha pequena, em fatias finas",
      "1 cenoura pequena, em fitas finas (com descascador)",
      "8 tomates cereja, cortados ao meio",
      "2 cebolas fatiadas fino",
      "4 fatias finas de limão-siciliano",
      "Ervas frescas (endro, tomilho ou manjericão)",
      "2 colheres (sopa) de azeite de oliva",
      "50 ml de vinho branco seco (opcional)",
      "Sal e pimenta a gosto",
      "Papel manteiga ou papel-alumínio"
    ],
    ingredientsStructured: [
      {
        raw: "2 filés de peixe branco (robalo, badejo ou linguado), cerca de 180 g cada",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "file", item: "peixe branco", prep: "cerca de 180 g cada", alt: "robalo, badejo ou linguado", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 abobrinha pequena, em fatias finas",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "abobrinha pequena", prep: "em fatias finas", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 cenoura pequena, em fitas finas (com descascador)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cenoura pequena", prep: "em fitas finas (com descascador)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "8 tomates cereja, cortados ao meio",
        group: null,
        items: [
          { qty: 8, qtyRange: null, unit: null, item: "tomates cereja", prep: "cortados ao meio", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 cebolas fatiadas fino",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "cebolas", prep: "fatiadas fino", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "4 fatias finas de limão-siciliano",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: null, item: "fatias finas de limão-siciliano", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Ervas frescas (endro, tomilho ou manjericão)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "ervas frescas", prep: "endro, tomilho ou manjericão", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 colheres (sopa) de azeite de oliva",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "colher-sopa", item: "azeite de oliva", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "50 ml de vinho branco seco (opcional)",
        group: null,
        items: [
          { qty: 50, qtyRange: null, unit: "mililitro", item: "vinho branco seco", prep: null, alt: null, optional: true, isReference: false },
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
        raw: "Papel manteiga ou papel-alumínio",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "papel manteiga", prep: null, alt: "papel-alumínio", optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Pré-aqueça o forno a 200°C. Corte dois grandes retângulos de papel manteiga (ou papel-alumínio), cerca de 40x30 cm cada.",
      "No centro de cada retângulo, faça uma cama com metade dos vegetais fatiados (abobrinha, cenoura, tomate cereja e cebola).",
      "Tempere os filés de peixe com sal e pimenta, e disponha sobre a cama de vegetais.",
      "Cubra cada filé com 2 fatias de limão e ervas frescas. Regue com azeite e, se usar, um fio de vinho branco.",
      "Dobre o papel sobre o peixe, selando as bordas com dobras apertadas (como um envelope), formando um pacote bem fechado que retenha o vapor.",
      "Disponha os pacotes numa assadeira e leve ao forno por 15-18 minutos — o pacote vai inflar com o vapor, sinal de que está cozinhando corretamente.",
      "Sirva os pacotes fechados diretamente à mesa, abrindo-os na frente de quem for comer, para liberar o aroma."
    ],
    tips: [
      "A selagem bem feita das bordas é o que garante que o vapor fique retido dentro do pacote, cozinhando o peixe e os vegetais na própria umidade, sem ressecar.",
      "É uma técnica extremamente leve e sem gordura excessiva, já que o peixe cozinha no próprio vapor dos vegetais e do vinho.",
      "Ótima opção para jantar a dois com apresentação bonita e surpresa — abrir o papel à mesa é sempre um momento especial."
    ]
  },
  {
    name: "Salmão Gravlax (para servir)",
    subgroup: "Assados e Curados",
    desc: "Salmão curado (sem cozimento) fatiado fino, servido com molho de mostarda e endro, à moda escandinava.",
    origin: "Escandinávia",
    time: { prep: "15 min (+ 48-72h de cura prévia)", cook: "0 min", total: "15 min" },
    yield: "4-6 porções (entrada)",
    difficulty: "Fácil",
    tags: [],
    ingredients: [
      "1 receita de Gravlax já curado (ver receita, categoria Técnicas Contemporâneas Avançadas)",
      "Para o molho hovmästarsås (mostarda e endro): 3 colheres (sopa) de mostarda Dijon, 1 colher (sopa) de mostarda em grãos, 2 colheres (sopa) de açúcar, 2 colheres (sopa) de vinagre branco, 100 ml de óleo neutro, endro fresco picado",
      "Pão escuro (pumpernickel ou centeio) ou torradas, para servir",
      "Endro fresco e limão para decorar"
    ],
    ingredientsStructured: [
      {
        raw: "1 receita de Gravlax já curado (ver receita, categoria Técnicas Contemporâneas Avançadas)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "receita de gravlax", prep: "já curado; ver receita, categoria técnicas contemporâneas avançadas", alt: null, optional: false, isReference: true },
        ],
      },
      {
        raw: "Para o molho hovmästarsås (mostarda e endro): 3 colheres (sopa) de mostarda Dijon, 1 colher (sopa) de mostarda em grãos, 2 colheres (sopa) de açúcar, 2 colheres (sopa) de vinagre branco, 100 ml de óleo neutro, endro fresco picado",
        group: "molho hovmästarsås (mostarda e endro)",
        items: [
          { qty: 3, qtyRange: null, unit: "colher-sopa", item: "mostarda dijon", prep: null, alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "mostarda em grãos", prep: null, alt: null, optional: false, isReference: false },
          { qty: 2, qtyRange: null, unit: "colher-sopa", item: "açúcar", prep: null, alt: null, optional: false, isReference: false },
          { qty: 2, qtyRange: null, unit: "colher-sopa", item: "vinagre branco", prep: null, alt: null, optional: false, isReference: false },
          { qty: 100, qtyRange: null, unit: "mililitro", item: "óleo neutro", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "endro", prep: "fresco, picado", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Pão escuro (pumpernickel ou centeio) ou torradas, para servir",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "pão escuro", prep: "para servir", alt: "pumpernickel ou centeio; ou torradas", optional: false, isReference: false },
        ],
      },
      {
        raw: "Endro fresco e limão para decorar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "endro", prep: "fresco, para decorar", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "limão", prep: "para decorar", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Prepare o gravlax com antecedência, seguindo a receita de cura (48-72 horas).",
      "Prepare o molho: bata as duas mostardas com o açúcar e o vinagre até dissolver bem.",
      "Adicione o óleo em fio fino, batendo sem parar, como uma maionese, até emulsionar e engrossar.",
      "Junte bastante endro fresco picado ao molho.",
      "Fatie o gravlax bem fino, na diagonal, começando pela cauda, com uma faca longa e afiada.",
      "Disponha as fatias num prato, regue com o molho de mostarda e endro, ou sirva o molho à parte para cada convidado se servir.",
      "Acompanhe com pão escuro ou torradas, decorado com mais endro fresco e rodelas de limão."
    ],
    tips: [
      "O molho hovmästarsås (literalmente 'molho do mordomo') é o acompanhamento tradicional sueco do gravlax — mais doce e encorpado que uma mostarda comum.",
      "Fatiar bem fino e na diagonal é essencial para a textura correta — fatias grossas ficam com textura de peixe cru comum, perdendo a delicadeza da cura.",
      "Ótima entrada para ocasiões especiais, já que pode (e deve) ser preparada com dias de antecedência."
    ]
  },

  // ===================== BACALHAU =====================
  {
    name: "Bacalhau à Brás",
    subgroup: "Bacalhau",
    desc: "Bacalhau desfiado refogado com cebola, batata palha e ovos mexidos cremosos — clássico português.",
    origin: "Portugal",
    time: { prep: "40 min (+ dessalgar o bacalhau)", cook: "20 min", total: "1h" },
    yield: "4 porções",
    difficulty: "Média",
    tags: ["ingredient:batata", "ingredient:ovo", "ingredient:azeitona"],
    ingredients: [
      "500 g de bacalhau dessalgado e desfiado (deixe de molho na geladeira por 24-48h, trocando a água algumas vezes)",
      "800 g de batata palha fina (pode ser comprada pronta ou feita em casa, fina como fósforos)",
      "1 cebola grande, fatiada fina",
      "3 dentes de alho picados",
      "100 ml de azeite de oliva",
      "6 ovos",
      "Azeitonas pretas, para decorar",
      "Salsinha picada",
      "Sal (com cuidado, o bacalhau já salga) e pimenta a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "500 g de bacalhau dessalgado e desfiado (deixe de molho na geladeira por 24-48h, trocando a água algumas vezes)",
        group: null,
        items: [
          { qty: 500, qtyRange: null, unit: "grama", item: "bacalhau", prep: "dessalgado e desfiado (deixe de molho na geladeira por 24-48h, trocando a água algumas vezes)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "800 g de batata palha fina (pode ser comprada pronta ou feita em casa, fina como fósforos)",
        group: null,
        items: [
          { qty: 800, qtyRange: null, unit: "grama", item: "batata palha fina", prep: "pode ser comprada pronta ou feita em casa, fina como fósforos", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 cebola grande, fatiada fina",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cebola grande", prep: "fatiada fina", alt: null, optional: false, isReference: false },
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
        raw: "100 ml de azeite de oliva",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "mililitro", item: "azeite de oliva", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "6 ovos",
        group: null,
        items: [
          { qty: 6, qtyRange: null, unit: null, item: "ovos", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Azeitonas pretas, para decorar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "azeitonas pretas", prep: "para decorar", alt: null, optional: false, isReference: false },
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
        raw: "Sal (com cuidado, o bacalhau já salga) e pimenta a gosto",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "sal", prep: "com cuidado, o bacalhau já salga", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "pimenta", prep: "a gosto", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Após dessalgar, cozinhe o bacalhau em água fervente por 5 minutos (ou apenas escalde), escorra e desfie em lascas, removendo peles e espinhas.",
      "Se for fazer a batata palha em casa, corte as batatas em palitos bem finos e frite em óleo quente até dourar e ficar crocante; escorra bem.",
      "Numa frigideira grande, aqueça o azeite e refogue a cebola até dourar levemente, 8-10 minutos.",
      "Junte o alho e refogue por 1 minuto. Adicione o bacalhau desfiado e refogue por 3-4 minutos, misturando bem com a cebola.",
      "Bata os ovos numa tigela com uma pitada de sal e pimenta.",
      "Baixe o fogo, junte a batata palha à frigideira, misturando delicadamente com o bacalhau e a cebola.",
      "Despeje os ovos batidos por cima, mexendo delicadamente e continuamente, como um ovo mexido, até os ovos cozinharem mas ainda ficarem cremosos (não deixe secar).",
      "Finalize com azeitonas pretas e salsinha picada. Sirva imediatamente."
    ],
    tips: [
      "O ponto do ovo é crucial: deve envolver e 'ligar' todos os ingredientes, ficando cremoso, nunca seco como um ovo mexido comum — retire do fogo um pouco antes do que parece necessário.",
      "Dessalgar bem o bacalhau (mínimo 24h, trocando a água 3-4 vezes) é essencial — bacalhau mal dessalgado deixa o prato salgado demais.",
      "Um dos pratos mais populares e queridos de Portugal, criado como forma de aproveitar bacalhau e batatas de forma criativa e farta."
    ]
  },
  {
    name: "Bacalhau Gomes de Sá",
    subgroup: "Bacalhau",
    desc: "Bacalhau desfiado montado em camadas com batata e cebola, gratinado e coberto com ovo cozido e azeitonas.",
    origin: "Portugal (Porto)",
    time: { prep: "30 min (+ dessalgar)", cook: "45 min", total: "1h15" },
    yield: "4-6 porções",
    difficulty: "Média",
    tags: ["ingredient:batata", "ingredient:ovo", "ingredient:azeitona"],
    ingredients: [
      "600 g de bacalhau dessalgado, em postas",
      "800 g de batata, descascada e em rodelas",
      "2 cebolas grandes, fatiadas",
      "4 dentes de alho fatiados",
      "150 ml de azeite de oliva (dividido)",
      "4 ovos cozidos duros, em rodelas",
      "Azeitonas pretas",
      "Salsinha picada",
      "Sal e pimenta a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "600 g de bacalhau dessalgado, em postas",
        group: null,
        items: [
          { qty: 600, qtyRange: null, unit: "grama", item: "bacalhau dessalgado", prep: "em postas", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "800 g de batata, descascada e em rodelas",
        group: null,
        items: [
          { qty: 800, qtyRange: null, unit: "grama", item: "batata", prep: "descascada e em rodelas", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 cebolas grandes, fatiadas",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "cebolas grandes", prep: "fatiadas", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "4 dentes de alho fatiados",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: "dente", item: "alho", prep: "fatiados", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "150 ml de azeite de oliva (dividido)",
        group: null,
        items: [
          { qty: 150, qtyRange: null, unit: "mililitro", item: "azeite de oliva (dividido)", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "4 ovos cozidos duros, em rodelas",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: null, item: "ovos cozidos duros", prep: "em rodelas", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Azeitonas pretas",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "azeitonas pretas", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "Sal e pimenta a gosto",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "sal", prep: "a gosto", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "pimenta", prep: "a gosto", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Após dessalgar, cozinhe o bacalhau em água ou leite por 15-20 minutos, até macio. Escorra, deixe amornar e desfie em lascas grandes, removendo peles e espinhas.",
      "Cozinhe as rodelas de batata em água salgada até macias mas ainda firmes (não deixe desmanchar), 12-15 minutos. Escorra.",
      "Numa frigideira grande, aqueça metade do azeite e refogue a cebola e o alho até dourarem levemente, 10 minutos.",
      "Pré-aqueça o forno a 200°C. Num refratário, monte camadas alternadas de batata cozida, bacalhau desfiado e a cebola refogada, temperando levemente entre as camadas (cuidado com o sal, o bacalhau já salga).",
      "Regue generosamente com o restante do azeite.",
      "Leve ao forno por 20-25 minutos, até dourar levemente por cima.",
      "Retire do forno, decore com as rodelas de ovo cozido, azeitonas pretas e salsinha picada por cima. Sirva quente."
    ],
    tips: [
      "Diferente do Bacalhau à Brás (que leva batata palha e ovo mexido), este é montado em camadas e finalizado com ovo cozido por cima — são pratos irmãos, mas com identidades bem distintas.",
      "Cozinhar o bacalhau em leite (em vez de só água) é um truque tradicional que deixa a carne ainda mais macia e suave.",
      "Criado por José Luís Gomes de Sá, comerciante do Porto, no final do século XIX — um dos pratos de bacalhau mais consagrados de Portugal."
    ]
  },
];
