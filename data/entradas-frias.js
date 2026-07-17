// ENTRADAS FRIAS
window.RECIPES = window.RECIPES || {};
window.RECIPES["entradas-frias"] = [

  // ===================== CRUS CLÁSSICOS =====================
  {
    name: "Steak Tartare",
    subgroup: "Crus Clássicos",
    desc: "Filé mignon cru picado em cubos e temperado com mostarda, alcaparras e molho inglês, coroado com gema crua.",
    origin: "França",
    time: { prep: "20 min", cook: "0 min", total: "20 min" },
    yield: "2 porções",
    difficulty: "Média",
    tags: ["protein:boi"],
    ingredients: [
      "300 g de filé mignon bem fresco (peça inteira, sem gordura ou nervos)",
      "1 cebola picada bem fina",
      "1 colher (sopa) de alcaparras picadas",
      "2 pepinos em conserva (cornichon) picados",
      "1 colher (chá) de mostarda Dijon",
      "1 colher (chá) de molho inglês (Worcestershire)",
      "Algumas gotas de molho de pimenta (tabasco)",
      "1 gema por porção (ou uma gema no centro para dividir)",
      "Azeite de oliva extra virgem",
      "Sal e pimenta-do-reino moída na hora",
      "Torradas ou baguete para servir"
    ],
    ingredientsStructured: [
      {
        raw: "300 g de filé mignon bem fresco (peça inteira, sem gordura ou nervos)",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "grama", item: "filé mignon bem fresco (peça inteira, sem gordura ou nervos)", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "1 colher (sopa) de alcaparras picadas",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "alcaparras", prep: "picadas", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 pepinos em conserva (cornichon) picados",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "pepinos em conserva (cornichon)", prep: "picados", alt: null, optional: false, isReference: false },
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
        raw: "1 colher (chá) de molho inglês (Worcestershire)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "molho inglês (worcestershire)", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Algumas gotas de molho de pimenta (tabasco)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "algumas gotas de molho de pimenta (tabasco)", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 gema por porção (ou uma gema no centro para dividir)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "gema por porção", prep: null, alt: "uma gema no centro para dividir", optional: false, isReference: false },
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
        raw: "Sal e pimenta-do-reino moída na hora",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "sal", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "pimenta-do-reino", prep: "moída na hora", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Torradas ou baguete para servir",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "torradas", prep: null, alt: "baguete para servir", optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Congele a carne por 15-20 minutos antes de cortar — facilita cortar em cubos bem pequenos e uniformes.",
      "Com uma faca bem afiada, corte a carne em cubos pequenos (2-3 mm) — nunca use processador, que esmaga a fibra e muda a textura.",
      "Numa tigela bem gelada, misture a carne picada com cebola, alcaparras, cornichon, mostarda, molho inglês e tabasco.",
      "Tempere com sal, pimenta e um fio de azeite. Misture delicadamente só até incorporar.",
      "Modele porções com um aro ou colher, faça uma cavidade no centro e coloque a gema crua por cima.",
      "Sirva imediatamente, bem gelado, com torradas ou baguete."
    ],
    tips: [
      "Use sempre carne de procedência confiável e bem fresca — é consumida crua, então a qualidade e higiene são essenciais.",
      "Corte e tempere a carne só na hora de servir; se ficar temperada e parada, solta líquido e perde textura.",
      "Mantenha todos os utensílios e a tigela gelados durante o preparo."
    ]
  },
  {
    name: "Carpaccio",
    subgroup: "Crus Clássicos",
    desc: "Fatias finíssimas de filé mignon cru, regadas com azeite e limão e finalizadas com parmesão e rúcula.",
    origin: "Itália",
    time: { prep: "20 min + 30 min congelador", cook: "0 min", total: "50 min" },
    yield: "2 porções",
    difficulty: "Média",
    tags: ["protein:boi", "ingredient:queijo"],
    ingredients: [
      "250 g de filé mignon bem fresco, em peça",
      "Azeite de oliva extra virgem de boa qualidade",
      "Suco de 1/2 limão",
      "Lascas de parmesão",
      "Rúcula fresca",
      "Sal em flocos e pimenta-do-reino moída na hora",
      "Alcaparras (opcional)"
    ],
    ingredientsStructured: [
      {
        raw: "250 g de filé mignon bem fresco, em peça",
        group: null,
        items: [
          { qty: 250, qtyRange: null, unit: "grama", item: "filé mignon bem fresco", prep: "em peça", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Azeite de oliva extra virgem de boa qualidade",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "azeite de oliva extra virgem de boa qualidade", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "Lascas de parmesão",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "lascas de parmesão", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Rúcula fresca",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "rúcula fresca", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Sal em flocos e pimenta-do-reino moída na hora",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "sal em flocos", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "pimenta-do-reino", prep: "moída na hora", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Alcaparras (opcional)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "alcaparras", prep: null, alt: null, optional: true, isReference: false },
        ],
      },
    ],
    steps: [
      "Envolva a carne em filme plástico bem justo, formando um rolo cilíndrico, e leve ao congelador por 30-40 minutos até firmar bem (não precisa congelar totalmente).",
      "Com uma faca bem afiada, corte fatias finíssimas, quase transparentes.",
      "Disponha as fatias entre duas folhas de filme plástico e, se necessário, amasse levemente com um batedor de carne para ficarem ainda mais finas.",
      "Arrume as fatias num prato frio, cobrindo toda a superfície.",
      "Regue com azeite, suco de limão, sal em flocos e pimenta na hora.",
      "Finalize com lascas de parmesão, rúcula fresca e alcaparras, se desejar. Sirva imediatamente."
    ],
    tips: [
      "Congelar parcialmente a carne é o segredo para conseguir fatias finíssimas com faca — sem isso é quase impossível.",
      "Criado no Harry's Bar em Veneza — o nome é uma homenagem ao pintor Vittore Carpaccio, por causa dos tons vermelho e branco do prato.",
      "Pode ser feito com atum ou outros peixes nobres seguindo a mesma técnica (carpaccio de atum, de polvo, etc.)."
    ]
  },
  {
    name: "Ceviche",
    subgroup: "Crus Clássicos",
    desc: "Cubos de peixe branco 'cozidos' no suco de limão, com cebola roxa, pimenta e coentro — prato peruano fresco e ácido.",
    origin: "Peru",
    time: { prep: "20 min + 15 min marinada", cook: "0 min", total: "35 min" },
    yield: "2-3 porções",
    difficulty: "Fácil",
    tags: ["protein:peixe", "ingredient:limao"],
    ingredients: [
      "400 g de peixe branco bem fresco (robalo, tilápia ou linguado), em cubos",
      "150 ml de suco de limão-tahiti espremido na hora (ou uma mistura com limão-siciliano)",
      "1/2 cebola roxa fatiada bem fina",
      "1 pimenta dedo-de-moça picada (sem sementes se quiser menos picante)",
      "1 dente de alho ralado",
      "Coentro fresco picado",
      "Sal a gosto",
      "Milho cozido (choclo) e batata-doce cozida para acompanhar (tradicional)"
    ],
    ingredientsStructured: [
      {
        raw: "400 g de peixe branco bem fresco (robalo, tilápia ou linguado), em cubos",
        group: null,
        items: [
          { qty: 400, qtyRange: null, unit: "grama", item: "peixe branco bem fresco", prep: "robalo, tilápia ou linguado, em cubos", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "150 ml de suco de limão-tahiti espremido na hora (ou uma mistura com limão-siciliano)",
        group: null,
        items: [
          { qty: 150, qtyRange: null, unit: "mililitro", item: "suco de limão-tahiti", prep: "espremido na hora", alt: "uma mistura com limão-siciliano", optional: false, isReference: false },
        ],
      },
      {
        raw: "1/2 cebola roxa fatiada bem fina",
        group: null,
        items: [
          { qty: 0.5, qtyRange: null, unit: null, item: "cebola roxa", prep: "fatiada bem fina", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 pimenta dedo-de-moça picada (sem sementes se quiser menos picante)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "pimenta dedo-de-moça", prep: "picada (sem sementes se quiser menos picante)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 dente de alho ralado",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "dente", item: "alho", prep: "ralado", alt: null, optional: false, isReference: false },
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
      {
        raw: "Milho cozido (choclo) e batata-doce cozida para acompanhar (tradicional)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "milho cozido (choclo)", prep: "para acompanhar (tradicional)", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "batata-doce cozida", prep: "para acompanhar (tradicional)", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Corte o peixe em cubos uniformes de cerca de 1,5 cm.",
      "Deixe a cebola roxa de molho em água gelada por 10 minutos para suavizar o gosto forte — depois escorra bem.",
      "Numa tigela, tempere o peixe com sal e o alho ralado.",
      "Adicione o suco de limão, cobrindo bem o peixe, e deixe marinar por 8 a 15 minutos — o ácido do limão vai 'cozinhar' o peixe (desnaturando a proteína), deixando-o opaco nas bordas.",
      "Junte a cebola roxa escorrida, a pimenta e o coentro picado. Misture delicadamente.",
      "Prove e ajuste o sal e a acidez. Sirva imediatamente, acompanhado de milho cozido e batata-doce, se desejar, no estilo peruano tradicional."
    ],
    tips: [
      "Não deixe marinar por tempo demais — o limão continua 'cozinhando' o peixe e ele pode ficar borrachudo. O ponto ideal é o peixe ainda ligeiramente translúcido no centro.",
      "O líquido resultante da marinada é chamado 'leche de tigre' no Peru — pode ser servido como um shot à parte.",
      "Use sempre peixe de procedência confiável, já que é consumido praticamente cru."
    ]
  },
  {
    name: "Crudo",
    subgroup: "Crus Clássicos",
    desc: "Fatias de peixe branco cru servidas puras, temperadas na hora com azeite, limão-siciliano e ervas frescas.",
    origin: "Itália",
    time: { prep: "15 min", cook: "0 min", total: "15 min" },
    yield: "2 porções",
    difficulty: "Fácil",
    tags: ["protein:peixe"],
    ingredients: [
      "250 g de peixe branco muito fresco, tipo sashimi (robalo, linguado ou atum)",
      "Azeite de oliva extra virgem de altíssima qualidade",
      "Suco de limão-siciliano",
      "Raspas de limão-siciliano",
      "Sal em flocos",
      "Ervas frescas (endro, manjericão ou cebolinha)",
      "Pimenta rosa levemente amassada (opcional)"
    ],
    ingredientsStructured: [
      {
        raw: "250 g de peixe branco muito fresco, tipo sashimi (robalo, linguado ou atum)",
        group: null,
        items: [
          { qty: 250, qtyRange: null, unit: "grama", item: "peixe branco muito fresco", prep: "tipo sashimi (robalo, linguado ou atum)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Azeite de oliva extra virgem de altíssima qualidade",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "azeite de oliva extra virgem de altíssima qualidade", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Suco de limão-siciliano",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "suco de limão-siciliano", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Raspas de limão-siciliano",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "raspas de limão-siciliano", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Sal em flocos",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "sal em flocos", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Ervas frescas (endro, manjericão ou cebolinha)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "ervas frescas", prep: "endro, manjericão ou cebolinha", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Pimenta rosa levemente amassada (opcional)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "pimenta rosa levemente", prep: "amassada", alt: null, optional: true, isReference: false },
        ],
      },
    ],
    steps: [
      "Com uma faca bem afiada, fatie o peixe em lâminas finas (mais grossas que sashimi, mais finas que um filé).",
      "Disponha as fatias num prato frio, sem sobrepor muito.",
      "Regue com bastante azeite de boa qualidade e algumas gotas de limão.",
      "Finalize com raspas de limão, sal em flocos, ervas frescas picadas e pimenta rosa se desejar.",
      "Sirva imediatamente, bem gelado."
    ],
    tips: [
      "A diferença do Crudo para o Carpaccio é que o corte é mais grosso e o tempero é mais minimalista — a estrela é a qualidade do peixe e do azeite.",
      "Não marine com antecedência como no ceviche — o crudo é servido 'cru puro', temperado só na hora de servir.",
      "Funciona muito bem com atum, robalo, vieiras ou até camarão bem fresco."
    ]
  },
  {
    name: "Tartar de Salmão",
    subgroup: "Crus Clássicos",
    desc: "Cubos de salmão cru temperados com shoyu, gengibre e óleo de gergelim, ao estilo oriental.",
    origin: "Contemporâneo",
    time: { prep: "20 min", cook: "0 min", total: "20 min" },
    yield: "2 porções",
    difficulty: "Fácil",
    tags: ["protein:peixe", "ingredient:molho-de-soja"],
    ingredients: [
      "300 g de salmão fresco, sem pele e sem espinhas, tipo sashimi",
      "1 colher (sopa) de cebolinha picada",
      "1 colher (chá) de gengibre fresco ralado",
      "1 colher (sopa) de molho shoyu",
      "1 colher (chá) de óleo de gergelim torrado",
      "Suco de 1/2 limão",
      "1/2 abacate em cubos pequenos (opcional)",
      "Sementes de gergelim torradas",
      "Torradas finas ou chips de wonton para servir"
    ],
    ingredientsStructured: [
      {
        raw: "300 g de salmão fresco, sem pele e sem espinhas, tipo sashimi",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "grama", item: "salmão fresco", prep: "sem pele e sem espinhas, tipo sashimi", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (sopa) de cebolinha picada",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "cebolinha", prep: "picada", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (chá) de gengibre fresco ralado",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "gengibre fresco", prep: "ralado", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (sopa) de molho shoyu",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "molho shoyu", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (chá) de óleo de gergelim torrado",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "óleo de gergelim", prep: "torrado", alt: null, optional: false, isReference: false },
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
        raw: "1/2 abacate em cubos pequenos (opcional)",
        group: null,
        items: [
          { qty: 0.5, qtyRange: null, unit: null, item: "abacate", prep: "em cubos pequenos", alt: null, optional: true, isReference: false },
        ],
      },
      {
        raw: "Sementes de gergelim torradas",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "sementes de gergelim", prep: "torradas", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Torradas finas ou chips de wonton para servir",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "torradas finas", prep: null, alt: "chips de wonton para servir", optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Corte o salmão em cubos pequenos e uniformes com uma faca bem afiada.",
      "Numa tigela gelada, misture o salmão com cebolinha, gengibre, shoyu, óleo de gergelim e suco de limão.",
      "Misture delicadamente para não amassar os cubos.",
      "Se for usar abacate, incorpore por último com cuidado.",
      "Modele com um aro em pratos individuais, finalize com gergelim torrado.",
      "Sirva imediatamente com torradas finas ou chips de wonton."
    ],
    tips: [
      "Use sempre salmão de qualidade sashimi (congelado adequadamente para consumo cru, conforme normas sanitárias).",
      "O abacate dá cremosidade e contrasta bem com a acidez do limão e o salgado do shoyu.",
      "Vinagrete de shoyu + gergelim é a base clássica de tartares 'orientais' — funciona também com atum."
    ]
  },

  // ===================== FRIOS COMPOSTOS =====================
  {
    name: "Vitello Tonnato",
    subgroup: "Frios Compostos",
    desc: "Fatias finas de vitela cozida e resfriada, cobertas com um molho cremoso de atum, anchova e maionese.",
    origin: "Itália (Piemonte)",
    time: { prep: "30 min + resfriar", cook: "1h", total: "1h30 + 3h geladeira" },
    yield: "4-6 porções",
    difficulty: "Média",
    tags: ["protein:boi", "contains:peixe"],
    ingredients: [
      "800 g de lagarto ou coxão mole de vitela (ou boi magro), em peça",
      "1 cenoura, 1 talo de salsão, 1 cebola — em pedaços",
      "1 folha de louro, alguns grãos de pimenta",
      "500 ml de vinho branco seco + água para cobrir",
      "Para o molho: 150 g de atum em conserva (em azeite), escorrido",
      "3 filés de anchova",
      "2 gemas cozidas + 1 gema crua",
      "2 colheres (sopa) de alcaparras",
      "150 ml de azeite de oliva",
      "Suco de limão a gosto",
      "Alcaparras extras e limão para decorar"
    ],
    ingredientsStructured: [
      {
        raw: "800 g de lagarto ou coxão mole de vitela (ou boi magro), em peça",
        group: null,
        items: [
          { qty: 800, qtyRange: null, unit: "grama", item: "lagarto", prep: "em peça", alt: "coxão mole de vitela; ou boi magro", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 cenoura, 1 talo de salsão, 1 cebola — em pedaços",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cenoura", prep: "em pedaços", alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "talo", item: "salsão", prep: "em pedaços", alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: null, item: "cebola", prep: "em pedaços", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 folha de louro, alguns grãos de pimenta",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "folha", item: "louro", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "grãos de pimenta", prep: "alguns", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "500 ml de vinho branco seco + água para cobrir",
        group: null,
        items: [
          { qty: 500, qtyRange: null, unit: "mililitro", item: "vinho branco seco + água para cobrir", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Para o molho: 150 g de atum em conserva (em azeite), escorrido",
        group: "molho",
        items: [
          { qty: 150, qtyRange: null, unit: "grama", item: "atum em conserva (em azeite)", prep: "escorrido", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "3 filés de anchova",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: "file", item: "anchova", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 gemas cozidas + 1 gema crua",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "gemas", prep: "cozidas + 1 gema crua", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 colheres (sopa) de alcaparras",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "colher-sopa", item: "alcaparras", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "Suco de limão a gosto",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "suco de limão", prep: "a gosto", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Alcaparras extras e limão para decorar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "alcaparras extras", prep: "para decorar", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "limão", prep: "para decorar", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Numa panela, cozinhe a carne com cenoura, salsão, cebola, louro e pimenta, cobrindo com vinho branco e água, em fogo baixo por 1 hora ou até ficar macia.",
      "Deixe a carne esfriar completamente dentro do próprio caldo (isso mantém a suculência). Depois, leve à geladeira por pelo menos 2 horas.",
      "Prepare o molho: no processador, bata o atum, anchovas, gemas cozidas, alcaparras e um pouco do caldo de cozimento da carne até formar uma pasta.",
      "Com o processador ligado, adicione a gema crua e o azeite em fio, como uma maionese, até emulsionar. Ajuste com limão e, se necessário, mais caldo para afinar.",
      "Fatie a carne fria bem fina.",
      "Disponha as fatias num prato, cubra generosamente com o molho tonnato, finalize com alcaparras e rodelas de limão.",
      "Sirva gelado, como entrada."
    ],
    tips: [
      "Prato clássico de verão do Piemonte — precisa ser bem gelado para o contraste funcionar.",
      "Cozinhar a carne e deixá-la esfriar no próprio caldo é o segredo para ela ficar macia e suculenta ao fatiar.",
      "O molho pode ser feito um dia antes; a carne também — é um prato ótimo para preparar com antecedência."
    ]
  },
  {
    name: "Terrine",
    subgroup: "Frios Compostos",
    desc: "Pâté compacto de fígado de frango e carne de porco moída, forrado com toucinho, assado em forma e servido frio fatiado.",
    origin: "França",
    time: { prep: "40 min + 24h descanso", cook: "1h30", total: "2h10 + 24h" },
    yield: "8-10 porções",
    difficulty: "Alta",
    tags: ["protein:frango", "protein:suino"],
    ingredients: [
      "400 g de fígado de frango limpo",
      "300 g de carne de porco moída (pernil ou paleta)",
      "200 g de toucinho/bacon em fatias finas (para forrar a forma)",
      "100 ml de conhaque ou vinho do Porto",
      "2 cebolas picadas, 2 dentes de alho picados",
      "1 ovo",
      "1 colher (sopa) de mostarda Dijon",
      "1 pitada de quatro-especiarias (ou noz-moscada + cravo)",
      "Sal e pimenta a gosto",
      "Folhas de louro e tomilho para decorar"
    ],
    ingredientsStructured: [
      {
        raw: "400 g de fígado de frango limpo",
        group: null,
        items: [
          { qty: 400, qtyRange: null, unit: "grama", item: "fígado de frango", prep: "limpo", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "300 g de carne de porco moída (pernil ou paleta)",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "grama", item: "carne de porco", prep: "moída (pernil ou paleta)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "200 g de toucinho/bacon em fatias finas (para forrar a forma)",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "grama", item: "toucinho/bacon", prep: "em fatias finas (para forrar a forma)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "100 ml de conhaque ou vinho do Porto",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "mililitro", item: "conhaque", prep: null, alt: "vinho do Porto", optional: false, isReference: false },
        ],
      },
      {
        raw: "2 cebolas picadas, 2 dentes de alho picados",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "cebolas", prep: "picadas", alt: null, optional: false, isReference: false },
          { qty: 2, qtyRange: null, unit: "dente", item: "alho", prep: "picados", alt: null, optional: false, isReference: false },
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
        raw: "1 colher (sopa) de mostarda Dijon",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "mostarda dijon", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 pitada de quatro-especiarias (ou noz-moscada + cravo)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "pitada", item: "quatro-especiarias", prep: null, alt: "noz-moscada + cravo", optional: false, isReference: false },
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
        raw: "Folhas de louro e tomilho para decorar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "folhas de louro", prep: "para decorar", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "tomilho", prep: "para decorar", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Marine o fígado de frango no conhaque com cebola e alho por 30 minutos na geladeira.",
      "No processador, bata o fígado marinado (com o líquido) até virar uma pasta grossa.",
      "Numa tigela, misture essa pasta com a carne de porco moída, o ovo, a mostarda e os temperos, até homogêneo.",
      "Forre uma forma de terrine (ou forma de bolo inglês) com as fatias de toucinho, deixando sobras para dobrar por cima.",
      "Preencha com a mistura de carne, pressionando bem para não deixar bolsões de ar. Decore o topo com louro e tomilho, depois dobre as sobras de toucinho por cima.",
      "Cubra com papel-alumínio e cozinhe em banho-maria no forno a 160°C por cerca de 1h20-1h30, até a temperatura interna atingir 70°C.",
      "Deixe esfriar em temperatura ambiente, depois coloque um peso por cima (ex: latas) e leve à geladeira por no mínimo 24 horas antes de desenformar e fatiar.",
      "Sirva fatiada, fria, com picles e torradas."
    ],
    tips: [
      "O descanso de 24h é essencial — a terrine precisa 'assentar' para fatiar bem e desenvolver sabor.",
      "O peso por cima enquanto gela ajuda a compactar e evitar bolsões de gordura entre as fatias.",
      "Guarda-se bem na geladeira por até 5 dias, coberta."
    ]
  },
  {
    name: "Galantine",
    subgroup: "Frios Compostos",
    desc: "Frango desossado, recheado com carne de porco, presunto e pistache, enrolado na própria pele, cozido e servido frio em fatias.",
    origin: "França",
    time: { prep: "1h", cook: "1h30", total: "2h30 + resfriar" },
    yield: "6-8 porções",
    difficulty: "Alta",
    tags: ["protein:frango", "contains:suino", "ingredient:castanha"],
    ingredients: [
      "1 frango inteiro, desossado (pele inteira, mantida aberta)",
      "300 g de carne de porco moída",
      "100 g de presunto em cubos pequenos",
      "50 g de pistache descascado",
      "2 ovos",
      "100 ml de creme de leite fresco",
      "1 cebola picada",
      "1 pitada de noz-moscada",
      "Sal e pimenta a gosto",
      "Fundo de galinha para o cozimento"
    ],
    ingredientsStructured: [
      {
        raw: "1 frango inteiro, desossado (pele inteira, mantida aberta)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "frango inteiro", prep: "desossado (pele inteira, mantida aberta)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "300 g de carne de porco moída",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "grama", item: "carne de porco", prep: "moída", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "100 g de presunto em cubos pequenos",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "grama", item: "presunto", prep: "em cubos pequenos", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "50 g de pistache descascado",
        group: null,
        items: [
          { qty: 50, qtyRange: null, unit: "grama", item: "pistache", prep: "descascado", alt: null, optional: false, isReference: false },
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
        raw: "100 ml de creme de leite fresco",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "mililitro", item: "creme de leite fresco", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "1 pitada de noz-moscada",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "pitada", item: "noz-moscada", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "Fundo de galinha para o cozimento",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "fundo de galinha para o cozimento", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Desosse o frango cuidadosamente, mantendo a pele inteira e aberta como uma 'manta' (peça um açougueiro para ajudar nessa etapa, se preferir).",
      "Prepare o recheio: misture a carne de porco moída, presunto, pistache, ovos, creme de leite, cebola, noz-moscada, sal e pimenta.",
      "Estenda a pele do frango numa superfície forrada com filme plástico, distribua o recheio no centro e enrole firmemente formando um cilindro, como um rocambole.",
      "Amarre as pontas do filme bem apertado (como um bombom) e depois envolva com papel-alumínio para dar firmeza extra.",
      "Cozinhe o rolo em fundo de galinha fervente em fogo baixo (nunca fervendo forte) por cerca de 1h15 a 1h30, até a temperatura interna atingir 75°C.",
      "Retire, deixe esfriar dentro da embalagem em temperatura ambiente e depois leve à geladeira por várias horas, ainda enrolado, para firmar.",
      "Desenrole, fatie em rodelas e sirva frio, como entrada, com picles e mostarda."
    ],
    tips: [
      "Galantine é literalmente 'ave desossada, recheada e reenrolada na própria pele' — parece complexo mas o segredo é ter a pele bem cuidada ao desossar.",
      "Cozinhar em fogo muito baixo, sem ferver forte, evita que o rolo se deforme ou rache.",
      "Fica ainda mais bonita fatiada mostrando o recheio colorido de pistache e presunto — um clássico de bufê frio francês."
    ]
  },
];
