// PREPARAÇÕES CLÁSSICAS COM OVOS — pratos completos construídos sobre as técnicas básicas
window.RECIPES = window.RECIPES || {};
window.RECIPES["ovos-classicos"] = [

  // ===================== FAMÍLIA BENEDICT =====================
  {
    name: "Eggs Benedict",
    subgroup: "Família Benedict",
    desc: "Muffin inglês tostado com bacon canadense, ovo poché e molho Hollandaise por cima — o clássico americano de brunch.",
    origin: "EUA",
    time: { prep: "15 min", cook: "15 min", total: "30 min" },
    yield: "2 porções (4 unidades)",
    difficulty: "Média-alta",
    tags: ["protein:ovo", "contains:suino", "ingredient:ovo"],
    ingredients: [
      "2 English muffins, cortados ao meio",
      "4 fatias de bacon canadense (ou presunto grosso)",
      "4 ovos para poché (ver receita Ovo Poché)",
      "1 receita de Hollandaise (ver receita)",
      "Manteiga para tostar os muffins",
      "Cebolinha picada para finalizar",
      "Pimenta-do-reino a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "2 English muffins, cortados ao meio",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "english muffins", prep: "cortados ao meio", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "4 fatias de bacon canadense (ou presunto grosso)",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: "fatia", item: "bacon canadense", prep: null, alt: "presunto grosso", optional: false, isReference: false },
        ],
      },
      {
        raw: "4 ovos para poché (ver receita Ovo Poché)",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: null, item: "ovos para poché", prep: "ver receita ovo poché", alt: null, optional: false, isReference: true },
        ],
      },
      {
        raw: "1 receita de Hollandaise (ver receita)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "receita de hollandaise", prep: "ver receita", alt: null, optional: false, isReference: true },
        ],
      },
      {
        raw: "Manteiga para tostar os muffins",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "manteiga para tostar os muffins", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Cebolinha picada para finalizar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "cebolinha", prep: "picada para finalizar", alt: null, optional: false, isReference: false },
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
      "Prepare a Hollandaise (ver receita) e mantenha em local morno.",
      "Toste os English muffins com manteiga até dourarem levemente.",
      "Grelhe o bacon canadense numa frigideira até dourar dos dois lados.",
      "Prepare os ovos pochê (ver receita) — cozinhe em água com vinagre por 2,5-3 minutos.",
      "Monte: metade do muffin torrado, uma fatia de bacon canadense, um ovo poché por cima.",
      "Cubra generosamente com a Hollandaise quente.",
      "Finalize com pimenta-do-reino moída na hora e cebolinha picada. Sirva imediatamente."
    ],
    tips: [
      "Monte o prato só na hora de servir — Hollandaise e ovo poché não esperam, ambos perdem qualidade rapidamente.",
      "Prepare a Hollandaise por último, já com os muffins e o bacon prontos, para que tudo chegue à mesa no ponto certo ao mesmo tempo.",
      "É a base de toda a 'família Benedict' — domine essa versão antes de partir para Florentine e Royale."
    ]
  },
  {
    name: "Eggs Florentine",
    subgroup: "Família Benedict",
    desc: "Versão vegetariana do Eggs Benedict: muffin com espinafre refogado, ovo poché e Hollandaise, no lugar do bacon.",
    origin: "EUA / França",
    time: { prep: "15 min", cook: "15 min", total: "30 min" },
    yield: "2 porções (4 unidades)",
    difficulty: "Média-alta",
    tags: ["protein:ovo", "diet:vegetariana", "ingredient:ovo", "ingredient:espinafre"],
    ingredients: [
      "2 English muffins, cortados ao meio",
      "300 g de espinafre fresco",
      "1 dente de alho picado",
      "1 colher (sopa) de manteiga",
      "4 ovos para poché (ver receita)",
      "1 receita de Hollandaise (ver receita)",
      "Sal, pimenta e noz-moscada a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "2 English muffins, cortados ao meio",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "english muffins", prep: "cortados ao meio", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "300 g de espinafre fresco",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "grama", item: "espinafre fresco", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 dente de alho picado",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "dente", item: "alho", prep: "picado", alt: null, optional: false, isReference: false },
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
        raw: "4 ovos para poché (ver receita)",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: null, item: "ovos para poché", prep: "ver receita", alt: null, optional: false, isReference: true },
        ],
      },
      {
        raw: "1 receita de Hollandaise (ver receita)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "receita de hollandaise", prep: "ver receita", alt: null, optional: false, isReference: true },
        ],
      },
      {
        raw: "Sal, pimenta e noz-moscada a gosto",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "sal", prep: "a gosto", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "pimenta", prep: "a gosto", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "noz-moscada", prep: "a gosto", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Prepare a Hollandaise e mantenha morna.",
      "Refogue o espinafre na manteiga com o alho até murchar completamente. Tempere com sal, pimenta e noz-moscada. Escorra o excesso de líquido.",
      "Toste os muffins.",
      "Prepare os ovos pochê.",
      "Monte: muffin torrado, uma camada generosa de espinafre refogado e escorrido, o ovo poché por cima.",
      "Cubra com a Hollandaise quente e sirva imediatamente."
    ],
    tips: [
      "'Florentine' no nome de qualquer prato geralmente indica a presença de espinafre — é a assinatura clássica associada (por lenda) a Catarina de Médici, de Florença.",
      "Escorrer bem o espinafre é importante — excesso de água deixa o muffin embatumado por baixo.",
      "Versão vegetariana da família Benedict, já que troca o bacon/presunto pelo espinafre."
    ]
  },
  {
    name: "Eggs Royale",
    subgroup: "Família Benedict",
    desc: "Versão de luxo do Eggs Benedict, com salmão defumado no lugar do bacon, coberto de ovo poché, Hollandaise e endro.",
    origin: "Reino Unido",
    time: { prep: "15 min", cook: "15 min", total: "30 min" },
    yield: "2 porções (4 unidades)",
    difficulty: "Média-alta",
    tags: ["protein:ovo", "contains:peixe", "ingredient:ovo"],
    ingredients: [
      "2 English muffins, cortados ao meio",
      "150 g de salmão defumado, fatiado",
      "4 ovos para poché (ver receita)",
      "1 receita de Hollandaise (ver receita)",
      "Manteiga para tostar os muffins",
      "Endro (dill) fresco para finalizar",
      "Pimenta-do-reino a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "2 English muffins, cortados ao meio",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "english muffins", prep: "cortados ao meio", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "150 g de salmão defumado, fatiado",
        group: null,
        items: [
          { qty: 150, qtyRange: null, unit: "grama", item: "salmão defumado", prep: "fatiado", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "4 ovos para poché (ver receita)",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: null, item: "ovos para poché", prep: "ver receita", alt: null, optional: false, isReference: true },
        ],
      },
      {
        raw: "1 receita de Hollandaise (ver receita)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "receita de hollandaise", prep: "ver receita", alt: null, optional: false, isReference: true },
        ],
      },
      {
        raw: "Manteiga para tostar os muffins",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "manteiga para tostar os muffins", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Endro (dill) fresco para finalizar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "endro (dill) fresco", prep: "para finalizar", alt: null, optional: false, isReference: false },
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
      "Prepare a Hollandaise e mantenha morna.",
      "Toste os English muffins com manteiga.",
      "Prepare os ovos pochê.",
      "Monte: muffin torrado, uma camada generosa de salmão defumado, o ovo poché por cima.",
      "Cubra com a Hollandaise quente, finalize com endro fresco picado e pimenta-do-reino. Sirva imediatamente."
    ],
    tips: [
      "É a versão 'de luxo' da família Benedict, trocando o bacon por salmão defumado — ótima opção para um brunch mais especial.",
      "O endro (dill) é o par clássico do salmão defumado — não substitua por outra erva se quiser o sabor tradicional.",
      "Salmão defumado a frio (lox) é o mais tradicional aqui, mas defumado a quente também funciona bem, em lascas."
    ]
  },

  // ===================== OVOS COM MOLHO =====================
  {
    name: "Ovos en Meurette",
    subgroup: "Ovos com Molho",
    desc: "Ovos pochê da Borgonha servidos sobre torradas de alho, cobertos com molho encorpado de vinho tinto, bacon e cogumelos.",
    origin: "França (Borgonha)",
    time: { prep: "15 min", cook: "40 min", total: "55 min" },
    yield: "2 porções",
    difficulty: "Média-alta",
    tags: ["protein:ovo", "contains:suino", "ingredient:ovo", "ingredient:cogumelo", "ingredient:vinho"],
    ingredients: [
      "4 ovos bem frescos",
      "500 ml de vinho tinto encorpado (Borgonha, se possível)",
      "200 ml de fundo escuro de carne ou caldo de carne",
      "100 g de bacon ou toucinho em cubos pequenos",
      "12 cebolinhas pérola (ou 1 cebola pequena em cubos)",
      "150 g de cogumelos paris, fatiados",
      "1 cebola picada",
      "1 dente de alho picado",
      "20 g de manteiga + 20 g de manteiga gelada",
      "1 colher (sopa) de farinha de trigo",
      "1 colher (sopa) de vinagre (para pochear os ovos)",
      "Fatias de baguete torradas com alho, para servir",
      "Sal e pimenta a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "4 ovos bem frescos",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: null, item: "ovos bem frescos", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "500 ml de vinho tinto encorpado (Borgonha, se possível)",
        group: null,
        items: [
          { qty: 500, qtyRange: null, unit: "mililitro", item: "vinho tinto encorpado", prep: "borgonha, se possível", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "200 ml de fundo escuro de carne ou caldo de carne",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "mililitro", item: "fundo escuro de carne", prep: null, alt: "caldo de carne", optional: false, isReference: false },
        ],
      },
      {
        raw: "100 g de bacon ou toucinho em cubos pequenos",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "grama", item: "bacon", prep: null, alt: "toucinho em cubos pequenos", optional: false, isReference: false },
        ],
      },
      {
        raw: "12 cebolinhas pérola (ou 1 cebola pequena em cubos)",
        group: null,
        items: [
          { qty: 12, qtyRange: null, unit: null, item: "cebolinhas pérola", prep: null, alt: "1 cebola pequena em cubos", optional: false, isReference: false },
        ],
      },
      {
        raw: "150 g de cogumelos paris, fatiados",
        group: null,
        items: [
          { qty: 150, qtyRange: null, unit: "grama", item: "cogumelos paris", prep: "fatiados", alt: null, optional: false, isReference: false },
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
        raw: "1 dente de alho picado",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "dente", item: "alho", prep: "picado", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "20 g de manteiga + 20 g de manteiga gelada",
        group: null,
        items: [
          { qty: 20, qtyRange: null, unit: "grama", item: "manteiga", prep: null, alt: null, optional: false, isReference: false },
          { qty: 20, qtyRange: null, unit: "grama", item: "manteiga gelada", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (sopa) de farinha de trigo",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "farinha de trigo", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (sopa) de vinagre (para pochear os ovos)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "vinagre (para pochear os ovos)", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Fatias de baguete torradas com alho, para servir",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "fatias de baguete", prep: "torradas com alho, para servir", alt: null, optional: false, isReference: false },
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
      "Numa panela, doure o bacon até crocante. Retire e reserve, deixando a gordura na panela.",
      "Refogue as cebolinhas pérola e os cogumelos na gordura do bacon até dourarem. Retire e reserve com o bacon.",
      "Na mesma panela, refogue cebola e alho na manteiga, junte a farinha e cozinhe por 1-2 minutos formando um roux leve.",
      "Adicione o vinho tinto aos poucos, mexendo para dissolver o roux, depois junte o fundo escuro.",
      "Deixe ferver e reduza em fogo médio-baixo por 20-25 minutos, até o molho encorpar e cobrir as costas de uma colher.",
      "Volte o bacon, cebolinhas e cogumelos ao molho, ajuste sal e pimenta, mantenha quente.",
      "Pocheie os ovos separadamente em água com vinagre por 2,5-3 minutos (ver receita Ovo Poché) — ou pocheie direto no molho de vinho, se preferir mais rústico e tradicional.",
      "Fora do fogo, finalize o molho com a manteiga gelada em cubos para dar brilho (mantecatura).",
      "Sirva os ovos pochê sobre as torradas de alho, cobertos com o molho de vinho tinto e os acompanhamentos."
    ],
    tips: [
      "É essencialmente 'ovos pochê ao Bourguignon' — usa a mesma base de vinho tinto, bacon e cogumelos do Boeuf Bourguignon.",
      "Pochear os ovos direto no molho de vinho (técnica mais tradicional) tinge levemente a clara de roxo — visualmente rústico e autêntico, mas pochear separado em água dá um resultado mais 'limpo'.",
      "Prato clássico de bistrô da Borgonha, region conhecida por seus vinhos tintos."
    ]
  },
  {
    name: "Shakshuka",
    subgroup: "Ovos com Molho",
    desc: "Ovos cozidos inteiros num molho de tomate temperado com cominho e páprica — prato de brunch do Norte da África e Oriente Médio.",
    origin: "Norte da África / Oriente Médio",
    time: { prep: "10 min", cook: "25 min", total: "35 min" },
    yield: "2-3 porções",
    difficulty: "Fácil",
    tags: ["protein:ovo", "diet:vegetariana", "ingredient:ovo", "ingredient:tomate", "ingredient:pimentao"],
    ingredients: [
      "3 colheres (sopa) de azeite de oliva",
      "1 cebola picada",
      "1 pimentão vermelho picado",
      "3 dentes de alho picados",
      "1 colher (chá) de cominho em pó",
      "1 colher (chá) de páprica doce (ou defumada)",
      "1/2 colher (chá) de pimenta calabresa (opcional)",
      "800 g de tomate pelado picado (ou tomate fresco maduro)",
      "1 colher (chá) de açúcar",
      "4-6 ovos",
      "Sal e pimenta a gosto",
      "Coentro ou salsinha picada, queijo feta esfarelado (opcional) para finalizar",
      "Pão árabe ou pão rústico para servir"
    ],
    ingredientsStructured: [
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
        raw: "1 pimentão vermelho picado",
        group: null,
        items: [
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
        raw: "1 colher (chá) de cominho em pó",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "cominho em pó", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (chá) de páprica doce (ou defumada)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "páprica doce", prep: null, alt: "defumada", optional: false, isReference: false },
        ],
      },
      {
        raw: "1/2 colher (chá) de pimenta calabresa (opcional)",
        group: null,
        items: [
          { qty: 0.5, qtyRange: null, unit: "colher-cha", item: "pimenta calabresa", prep: null, alt: null, optional: true, isReference: false },
        ],
      },
      {
        raw: "800 g de tomate pelado picado (ou tomate fresco maduro)",
        group: null,
        items: [
          { qty: 800, qtyRange: null, unit: "grama", item: "tomate pelado", prep: "picado", alt: "tomate fresco maduro", optional: false, isReference: false },
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
        raw: "4-6 ovos",
        group: null,
        items: [
          { qty: null, qtyRange: [4, 6], unit: null, item: "ovos", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "Coentro ou salsinha picada, queijo feta esfarelado (opcional) para finalizar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "coentro", prep: "para finalizar", alt: "salsinha picada", optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "queijo feta", prep: "esfarelado, para finalizar", alt: null, optional: true, isReference: false },
        ],
      },
      {
        raw: "Pão árabe ou pão rústico para servir",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "pão árabe", prep: null, alt: "pão rústico para servir", optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Numa frigideira grande (que tenha tampa), aqueça o azeite e refogue a cebola e o pimentão até macios, 8 minutos.",
      "Junte o alho, cominho, páprica e pimenta calabresa, refogue por 1 minuto até perfumar.",
      "Adicione o tomate picado e o açúcar, tempere com sal e pimenta. Cozinhe em fogo médio-baixo por 12-15 minutos, até o molho encorpar.",
      "Com uma colher, faça pequenas cavidades no molho e quebre um ovo em cada uma.",
      "Tampe a frigideira e cozinhe em fogo baixo por 6-8 minutos, até as claras firmarem e as gemas ficarem no ponto desejado (mole é o tradicional).",
      "Finalize com coentro picado e queijo feta esfarelado, se desejar.",
      "Sirva direto na frigideira, bem quente, acompanhado de pão para molhar no molho."
    ],
    tips: [
      "A tampa é essencial: o vapor cozinha a clara por cima sem precisar virar os ovos ou secar o molho.",
      "Pode preparar o molho de tomate com antecedência e só quebrar os ovos e finalizar na hora de servir.",
      "Prato clássico de café da manhã/brunch em toda a região do Magrebe, Levante e Israel — cada casa tem sua variação de tempero."
    ]
  },
  {
    name: "Menemen",
    subgroup: "Ovos com Molho",
    desc: "Café da manhã turco parecido com a Shakshuka, mas com os ovos mexidos dentro do molho de tomate e pimentão, formando um creme.",
    origin: "Turquia",
    time: { prep: "10 min", cook: "15 min", total: "25 min" },
    yield: "2 porções",
    difficulty: "Fácil",
    tags: ["protein:ovo", "diet:vegetariana", "ingredient:ovo", "ingredient:tomate", "ingredient:pimentao"],
    ingredients: [
      "3 colheres (sopa) de azeite de oliva ou manteiga",
      "1 pimentão verde longo (tipo italiano), picado",
      "1 cebola pequena picada (opcional, algumas versões tradicionais não levam)",
      "3 tomates maduros, sem pele, picados",
      "1 colher (chá) de páprica ou pimenta síria (opcional)",
      "4 ovos",
      "Sal e pimenta a gosto",
      "Queijo beyaz peynir (ou feta) esfarelado (opcional)",
      "Pão turco ou pão rústico para servir"
    ],
    ingredientsStructured: [
      {
        raw: "3 colheres (sopa) de azeite de oliva ou manteiga",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: "colher-sopa", item: "azeite de oliva", prep: null, alt: "manteiga", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 pimentão verde longo (tipo italiano), picado",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "pimentão verde longo (tipo italiano)", prep: "picado", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 cebola pequena picada (opcional, algumas versões tradicionais não levam)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cebola pequena", prep: "picada; algumas versões tradicionais não levam", alt: null, optional: true, isReference: false },
        ],
      },
      {
        raw: "3 tomates maduros, sem pele, picados",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: null, item: "tomates maduros", prep: "sem pele, picados", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (chá) de páprica ou pimenta síria (opcional)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "páprica", prep: null, alt: "pimenta síria", optional: true, isReference: false },
        ],
      },
      {
        raw: "4 ovos",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: null, item: "ovos", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "Queijo beyaz peynir (ou feta) esfarelado (opcional)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "queijo beyaz peynir", prep: "esfarelado", alt: "feta", optional: true, isReference: false },
        ],
      },
      {
        raw: "Pão turco ou pão rústico para servir",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "pão turco", prep: null, alt: "pão rústico para servir", optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Aqueça o azeite numa frigideira e refogue o pimentão (e a cebola, se usar) até macios, 5-6 minutos.",
      "Junte os tomates picados e a páprica, cozinhe em fogo médio até o molho reduzir e encorpar levemente, 8-10 minutos.",
      "Tempere com sal e pimenta.",
      "Bata levemente os ovos numa tigela (diferente da shakshuka, aqui os ovos são geralmente misturados, não mantidos inteiros) e despeje sobre o molho.",
      "Mexa delicadamente com uma espátula, como um ovo mexido, até os ovos ficarem cozidos mas ainda cremosos — não deixe secar.",
      "Finalize com queijo esfarelado, se desejar, e sirva imediatamente com pão."
    ],
    tips: [
      "A principal diferença da Shakshuka é a textura: no Menemen os ovos são mexidos dentro do molho, formando uma mistura cremosa, em vez de cozidos inteiros por cima.",
      "Retire o excesso de água dos tomates (ou cozinhe o molho até reduzir bem) para não ficar aguado.",
      "Clássico café da manhã turco, geralmente servido na própria frigideira em que foi feito."
    ]
  },
  {
    name: "Huevos Rancheros",
    subgroup: "Ovos com Molho",
    desc: "Tortilla de milho com feijão, molho de tomate e jalapeño, coroada com ovo frito, abacate e queijo fresco — clássico mexicano.",
    origin: "México",
    time: { prep: "15 min", cook: "20 min", total: "35 min" },
    yield: "2 porções",
    difficulty: "Fácil",
    tags: ["protein:ovo", "diet:vegetariana", "ingredient:ovo", "ingredient:tomate", "ingredient:milho", "ingredient:feijao", "ingredient:queijo"],
    ingredients: [
      "4 tortillas de milho",
      "2 colheres (sopa) de óleo (dividido)",
      "1/2 cebola picada",
      "2 dentes de alho picados",
      "1 pimenta jalapeño picada (sem sementes se quiser menos picante)",
      "400 g de tomate picado (ou tomate pelado)",
      "1 colher (chá) de cominho",
      "4 ovos",
      "100 g de feijão preto ou feijão refogado (opcional, tradicional)",
      "Abacate fatiado, coentro picado, queijo fresco esfarelado para finalizar",
      "Sal a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "4 tortillas de milho",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: null, item: "tortillas de milho", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 colheres (sopa) de óleo (dividido)",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "colher-sopa", item: "óleo (dividido)", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1/2 cebola picada",
        group: null,
        items: [
          { qty: 0.5, qtyRange: null, unit: null, item: "cebola", prep: "picada", alt: null, optional: false, isReference: false },
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
        raw: "1 pimenta jalapeño picada (sem sementes se quiser menos picante)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "pimenta jalapeño", prep: "picada (sem sementes se quiser menos picante)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "400 g de tomate picado (ou tomate pelado)",
        group: null,
        items: [
          { qty: 400, qtyRange: null, unit: "grama", item: "tomate", prep: "picado", alt: "tomate pelado", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (chá) de cominho",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "cominho", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "4 ovos",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: null, item: "ovos", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "100 g de feijão preto ou feijão refogado (opcional, tradicional)",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "grama", item: "feijão preto", prep: "tradicional", alt: "feijão refogado", optional: true, isReference: false },
        ],
      },
      {
        raw: "Abacate fatiado, coentro picado, queijo fresco esfarelado para finalizar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "abacate", prep: "fatiado, para finalizar", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "coentro", prep: "picado, para finalizar", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "queijo fresco", prep: "esfarelado, para finalizar", alt: null, optional: false, isReference: false },
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
      "Prepare o molho: refogue cebola, alho e jalapeño em um pouco de óleo até macios, junte o tomate e o cominho, tempere com sal e cozinhe em fogo médio por 12-15 minutos até encorpar. Bata levemente ou deixe rústico, a gosto.",
      "Numa frigideira separada, esquente rapidamente as tortillas de milho num pouco de óleo, dos dois lados, até ficarem levemente crocantes nas bordas mas ainda flexíveis.",
      "Na mesma frigideira, frite os ovos com um pouco de óleo, deixando a gema mole.",
      "Monte: tortilla no prato, uma camada de feijão (se usar), o molho de tomate quente por cima, e corone com o ovo frito.",
      "Finalize com abacate fatiado, coentro picado e queijo fresco esfarelado. Sirva imediatamente."
    ],
    tips: [
      "Esquentar a tortilla no óleo antes de montar evita que ela fique encharcada e mole com o molho.",
      "Tradicionalmente servido no café da manhã/almoço mexicano, com feijão refogado ao lado ou por baixo.",
      "Ajuste a picância do molho conforme o gosto, controlando a quantidade de jalapeño e suas sementes."
    ]
  },
  {
    name: "Ovos à Portuguesa",
    subgroup: "Ovos com Molho",
    desc: "Ovos cozidos num molho de tomate com cebola, pimentão e chouriço ou presunto — parecido com a Shakshuka, mas com toque português.",
    origin: "Portugal",
    time: { prep: "15 min", cook: "25 min", total: "40 min" },
    yield: "2-3 porções",
    difficulty: "Fácil",
    tags: ["protein:ovo", "contains:suino", "ingredient:ovo", "ingredient:tomate", "ingredient:pimentao"],
    ingredients: [
      "3 colheres (sopa) de azeite de oliva",
      "1 cebola fatiada",
      "2 dentes de alho picados",
      "1 pimentão vermelho fatiado",
      "500 g de tomate maduro picado (ou tomate pelado)",
      "100 g de presunto ou chouriço fatiado",
      "1 folha de louro",
      "4-6 ovos",
      "Sal e pimenta a gosto",
      "Salsinha picada para finalizar",
      "Pão rústico ou batata cozida para acompanhar"
    ],
    ingredientsStructured: [
      {
        raw: "3 colheres (sopa) de azeite de oliva",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: "colher-sopa", item: "azeite de oliva", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "2 dentes de alho picados",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "dente", item: "alho", prep: "picados", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 pimentão vermelho fatiado",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "pimentão vermelho", prep: "fatiado", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "500 g de tomate maduro picado (ou tomate pelado)",
        group: null,
        items: [
          { qty: 500, qtyRange: null, unit: "grama", item: "tomate maduro", prep: "picado", alt: "tomate pelado", optional: false, isReference: false },
        ],
      },
      {
        raw: "100 g de presunto ou chouriço fatiado",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "grama", item: "presunto", prep: null, alt: "chouriço fatiado", optional: false, isReference: false },
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
        raw: "4-6 ovos",
        group: null,
        items: [
          { qty: null, qtyRange: [4, 6], unit: null, item: "ovos", prep: null, alt: null, optional: false, isReference: false },
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
      {
        raw: "Pão rústico ou batata cozida para acompanhar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "pão rústico", prep: null, alt: "batata cozida para acompanhar", optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Aqueça o azeite numa frigideira grande e refogue a cebola, o alho e o pimentão até macios, 8 minutos.",
      "Junte o presunto ou chouriço fatiado e refogue por 2-3 minutos para soltar sabor.",
      "Adicione o tomate picado e o louro, tempere com sal e pimenta. Cozinhe em fogo médio-baixo por 15 minutos, até o molho encorpar.",
      "Retire o louro. Faça pequenas cavidades no molho e quebre os ovos ali dentro.",
      "Tampe e cozinhe em fogo baixo por 6-8 minutos, até as claras firmarem e as gemas ficarem no ponto desejado.",
      "Finalize com salsinha picada e sirva quente, direto na frigideira, com pão ou batatas cozidas."
    ],
    tips: [
      "É bem próximo da Shakshuka em técnica, mas com a assinatura portuguesa do chouriço ou presunto e o toque de louro no molho.",
      "Pode substituir o chouriço por bacalhau desfiado para uma variação também tradicional em algumas regiões de Portugal.",
      "Prato de aproveitamento simples e reconfortante, tradicional da cozinha caseira portuguesa."
    ]
  },

  // ===================== OVOS FRIOS E ESPECIAIS =====================
  {
    name: "Œufs Mayonnaise",
    subgroup: "Ovos Frios e Especiais",
    desc: "Ovos cozidos duros, cortados ao meio e cobertos com maionese caseira temperada — entrada simples e clássica dos bistrôs franceses.",
    origin: "França",
    time: { prep: "15 min", cook: "10 min", total: "25 min" },
    yield: "2 porções (4 unidades)",
    difficulty: "Fácil",
    tags: ["protein:ovo", "diet:vegetariana", "ingredient:ovo"],
    ingredients: [
      "4 ovos cozidos duros (ver receita Ovo Cozido, ponto duro), descascados e cortados ao meio",
      "150 g de maionese caseira (gemas, óleo, mostarda, limão)",
      "1 colher (chá) de mostarda Dijon extra (para temperar a maionese)",
      "Folhas de alface para forrar o prato",
      "Cebolinha picada ou páprica para finalizar",
      "Sal e pimenta a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "4 ovos cozidos duros (ver receita Ovo Cozido, ponto duro), descascados e cortados ao meio",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: null, item: "ovos cozidos duros", prep: "ver receita ovo cozido, ponto duro; descascados e cortados ao meio", alt: null, optional: false, isReference: true },
        ],
      },
      {
        raw: "150 g de maionese caseira (gemas, óleo, mostarda, limão)",
        group: null,
        items: [
          { qty: 150, qtyRange: null, unit: "grama", item: "maionese caseira", prep: "gemas, óleo, mostarda, limão", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (chá) de mostarda Dijon extra (para temperar a maionese)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "mostarda dijon extra (para temperar a maionese)", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Folhas de alface para forrar o prato",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: "folha", item: "alface para forrar o prato", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Cebolinha picada ou páprica para finalizar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "cebolinha", prep: "picada", alt: "páprica para finalizar", optional: false, isReference: false },
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
      "Cozinhe os ovos no ponto duro (10-11 minutos) e resfrie em água com gelo. Descasque com cuidado.",
      "Tempere a maionese com a mostarda Dijon extra, sal e pimenta a gosto.",
      "Corte os ovos ao meio no sentido do comprimento.",
      "Disponha as metades sobre um leito de folhas de alface, com o corte para cima.",
      "Cubra generosamente com a maionese temperada.",
      "Finalize com cebolinha picada ou uma pitada de páprica. Sirva como entrada, bem gelado."
    ],
    tips: [
      "É a entrada mais simples e onipresente dos bistrôs franceses — a qualidade está inteiramente na maionese, então vale fazer caseira.",
      "Existe até uma associação francesa (a 'Association de sauvegarde de l'œuf mayonnaise') dedicada a preservar esse prato clássico nos cardápios.",
      "Pode enriquecer com atum, aspargos ou camarão por cima para uma versão mais elaborada."
    ]
  },
  {
    name: "Scotch Egg",
    subgroup: "Ovos Frios e Especiais",
    desc: "Ovo cozido envolto em carne de linguiça temperada, empanado e frito — clássico britânico de piquenique, ótimo frio.",
    origin: "Reino Unido",
    time: { prep: "30 min", cook: "15 min", total: "45 min" },
    yield: "4 unidades",
    difficulty: "Média",
    tags: ["protein:ovo", "contains:suino", "ingredient:ovo"],
    ingredients: [
      "4 ovos cozidos no ponto mollet ou médio (ver receita), descascados",
      "400 g de linguiça de porco fresca (sem a tripa) ou carne de salsicha temperada",
      "1 colher (chá) de mostarda em pó ou Dijon",
      "Ervas frescas picadas (sálvia ou tomilho, opcional)",
      "Farinha de trigo, 2 ovos batidos e farinha panko — para empanar",
      "Óleo para fritar",
      "Sal e pimenta a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "4 ovos cozidos no ponto mollet ou médio (ver receita), descascados",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: null, item: "ovos cozidos no ponto mollet", prep: "ver receita; descascados", alt: "médio", optional: false, isReference: true },
        ],
      },
      {
        raw: "400 g de linguiça de porco fresca (sem a tripa) ou carne de salsicha temperada",
        group: null,
        items: [
          { qty: 400, qtyRange: null, unit: "grama", item: "linguiça de porco fresca (sem a tripa)", prep: null, alt: "carne de salsicha temperada", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (chá) de mostarda em pó ou Dijon",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "mostarda em pó", prep: null, alt: "Dijon", optional: false, isReference: false },
        ],
      },
      {
        raw: "Ervas frescas picadas (sálvia ou tomilho, opcional)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "ervas frescas", prep: "picadas (sálvia ou tomilho)", alt: null, optional: true, isReference: false },
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
        raw: "Óleo para fritar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "óleo", prep: "para fritar", alt: null, optional: false, isReference: false },
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
      "Tempere a carne de linguiça com mostarda, ervas, sal e pimenta, misturando bem.",
      "Divida a carne em 4 porções iguais. Achate cada porção numa superfície untada, formando um disco fino.",
      "Envolva cada ovo cozido e descascado com uma porção de carne, moldando bem ao redor até cobrir totalmente e vedar sem falhas.",
      "Passe cada ovo envolto na farinha, depois no ovo batido e por fim na farinha panko, pressionando para aderir.",
      "Frite em óleo quente (170°C) por 6-8 minutos, girando ocasionalmente, até a carne cozinhar por dentro e o exterior dourar e ficar crocante — ou asse a 200°C por 20-25 minutos como alternativa mais leve.",
      "Deixe descansar alguns minutos, corte ao meio e sirva morno ou em temperatura ambiente."
    ],
    tips: [
      "Use ovos no ponto mollet (gema ainda cremosa) para um efeito surpreendente ao cortar — mas ovos duros também funcionam e são mais fáceis de manusear.",
      "Selar bem as bordas da carne ao redor do ovo evita que ela se abra durante a fritura.",
      "Clássico de piquenique britânico — ótimo servido frio, o que facilita muito para levar para passeios."
    ]
  },
  {
    name: "Oeufs en Cocotte à la Forestière",
    subgroup: "Ovos Frios e Especiais",
    desc: "Versão elevada do Ovo Cocotte, assado em ramequim sobre uma duxelles de cogumelos reduzidos com creme de leite.",
    origin: "França",
    time: { prep: "15 min", cook: "15 min", total: "30 min" },
    yield: "2 porções",
    difficulty: "Média",
    tags: ["protein:ovo", "diet:vegetariana", "ingredient:ovo", "ingredient:cogumelo"],
    ingredients: [
      "4 ovos",
      "200 g de cogumelos variados (paris, shitake, portobello), picados bem fino (duxelles)",
      "1 cebola picada",
      "30 g de manteiga (dividida)",
      "80 ml de creme de leite fresco (dividido)",
      "1 fio de conhaque ou vinho branco (opcional)",
      "Salsinha picada",
      "Sal, pimenta e noz-moscada a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "4 ovos",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: null, item: "ovos", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "200 g de cogumelos variados (paris, shitake, portobello), picados bem fino (duxelles)",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "grama", item: "cogumelos variados", prep: "paris, shitake, portobello, picados bem fino (duxelles)", alt: null, optional: false, isReference: false },
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
        raw: "30 g de manteiga (dividida)",
        group: null,
        items: [
          { qty: 30, qtyRange: null, unit: "grama", item: "manteiga (dividida)", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "80 ml de creme de leite fresco (dividido)",
        group: null,
        items: [
          { qty: 80, qtyRange: null, unit: "mililitro", item: "creme de leite fresco (dividido)", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "Sal, pimenta e noz-moscada a gosto",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "sal", prep: "a gosto", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "pimenta", prep: "a gosto", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "noz-moscada", prep: "a gosto", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Prepare a duxelles: refogue a cebola na metade da manteiga até translúcida, junte os cogumelos picados bem fino e cozinhe em fogo médio até toda a água evaporar e a mistura ficar bem seca e escura, 10-12 minutos.",
      "Se for usar, deglaceie com o conhaque ou vinho branco. Tempere com sal, pimenta e noz-moscada.",
      "Junte metade do creme de leite à duxelles e misture bem.",
      "Pré-aqueça o forno a 180°C. Unte os ramequins com a manteiga restante.",
      "Distribua a duxelles cremosa no fundo de cada ramequim, quebre os ovos por cima e regue com o restante do creme de leite.",
      "Coloque os ramequins em banho-maria numa assadeira e asse por 10-12 minutos, até a clara firmar e a gema continuar mole.",
      "Finalize com salsinha picada e sirva imediatamente, quente, direto no ramequim."
    ],
    stepIngredients: [
      [{ entryIndex: 3, itemIndex: 0, fraction: 0.5 }],
      null,
      [{ entryIndex: 4, itemIndex: 0, fraction: 0.5 }],
      [{ entryIndex: 3, itemIndex: 0, fraction: 0.5 }],
      [{ entryIndex: 4, itemIndex: 0, fraction: 0.5 }],
      null,
      null,
    ],
    tips: [
      "Esta é a versão elevada do Ovo Cocotte básico (ver categoria Ovos Básicos) — domine a técnica simples antes de partir para esta.",
      "A duxelles (cogumelos picados e reduzidos até secar) é uma preparação clássica francesa que vale aprender separadamente — funciona também como recheio de carnes e tortas.",
      "'À la Forestière' no nome de qualquer prato francês indica a presença de cogumelos — uma nomenclatura clássica útil de conhecer."
    ]
  },
];
