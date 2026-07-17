// FRANÇA
// Nota: vários clássicos franceses já estão detalhados em outras categorias
// (Molhos, Massas/Padaria, Ovos, Carnes, Aves, Sobremesas). Aqui reunimos os
// pratos de entrada e principais que ainda não apareceram em nenhuma outra categoria.
window.RECIPES = window.RECIPES || {};
window.RECIPES["franca"] = [

  // ===================== ENTRADAS =====================
  {
    name: "Foie Gras Poêlé",
    subgroup: "Entradas",
    desc: "Fígado de pato ou ganso selado rapidamente na própria gordura, servido sobre torrada com frutas e redução de Porto.",
    origin: "França",
    time: { prep: "15 min", cook: "5 min", total: "20 min" },
    yield: "2 porções",
    difficulty: "Média",
    tags: ["protein:ave"],
    ingredients: [
      "2 fatias de foie gras fresco, cerca de 2 cm de espessura",
      "Sal e pimenta a gosto",
      "1 colher (sopa) de vinagre balsâmico ou redução de vinho do Porto",
      "2 fatias de brioche ou pão rústico, tostadas",
      "Frutas para acompanhar (figo, maçã ou pêra), fatiadas"
    ],
    ingredientsStructured: [
      {
        raw: "2 fatias de foie gras fresco, cerca de 2 cm de espessura",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "fatia", item: "foie gras fresco", prep: "cerca de 2 cm de espessura", alt: null, optional: false, isReference: false },
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
        raw: "1 colher (sopa) de vinagre balsâmico ou redução de vinho do Porto",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "vinagre balsâmico", prep: null, alt: "redução de vinho do Porto", optional: false, isReference: false },
        ],
      },
      {
        raw: "2 fatias de brioche ou pão rústico, tostadas",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "fatia", item: "brioche", prep: "tostadas", alt: "pão rústico", optional: false, isReference: false },
        ],
      },
      {
        raw: "Frutas para acompanhar (figo, maçã ou pêra), fatiadas",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "frutas para acompanhar", prep: "figo, maçã ou pêra, fatiadas", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Retire o foie gras da geladeira 15-20 minutos antes de cozinhar.",
      "Faça leves cortes em losango na superfície de cada fatia (ajuda a liberar gordura uniformemente e evita que curve).",
      "Tempere com sal e pimenta.",
      "Aqueça uma frigideira (sem nenhuma gordura extra — o foie gras solta a própria) em fogo alto até bem quente.",
      "Sele as fatias por 45-60 segundos de cada lado, até dourarem bem por fora e ficarem macias por dentro — o processo é muito rápido, fique atento.",
      "Retire imediatamente para não passar do ponto (o foie gras derrete facilmente se cozido demais).",
      "Disponha sobre a torrada de brioche, regue com a redução de balsâmico ou Porto, e sirva com as frutas fatiadas."
    ],
    tips: [
      "O foie gras cozinha extremamente rápido — tenha tudo pronto (torrada, frutas, redução) antes de selar, para servir imediatamente.",
      "A frigideira deve estar bem quente antes de começar, mas sem óleo — a própria gordura do foie gras é suficiente e evita que ele frite em vez de selar.",
      "O contraste doce das frutas e da redução é essencial para equilibrar a riqueza intensa do foie gras."
    ]
  },
  {
    name: "Salade Niçoise",
    subgroup: "Entradas",
    desc: "Salada fria de Nice com atum, ovo mollet, vagem, tomate, azeitonas e anchova — sem batata, na receita clássica.",
    origin: "França (Nice)",
    time: { prep: "25 min", cook: "15 min", total: "40 min" },
    yield: "2-4 porções",
    difficulty: "Fácil",
    tags: ["contains:peixe", "ingredient:tomate", "ingredient:azeitona", "ingredient:ovo"],
    ingredients: [
      "200 g de atum fresco (ou em conserva de boa qualidade, em azeite)",
      "200 g de vagem, cozida al dente",
      "4 tomates médios, em quartos",
      "4 ovos cozidos no ponto mollet (ver receita, categoria Ovos Básicos), cortados ao meio",
      "1/2 cebola roxa fatiada fina",
      "100 g de azeitonas pretas de Nice (ou pretas comuns)",
      "8 filés de anchova",
      "Folhas de alface ou mix de folhas",
      "Para o vinagrete: 4 colheres (sopa) de azeite, 1 colher (sopa) de vinagre de vinho tinto, 1 dente de alho picado, sal e pimenta"
    ],
    ingredientsStructured: [
      {
        raw: "200 g de atum fresco (ou em conserva de boa qualidade, em azeite)",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "grama", item: "atum fresco", prep: null, alt: "em conserva de boa qualidade, em azeite", optional: false, isReference: false },
        ],
      },
      {
        raw: "200 g de vagem, cozida al dente",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "grama", item: "vagem", prep: "cozida al dente", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "4 tomates médios, em quartos",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: null, item: "tomates médios", prep: "em quartos", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "4 ovos cozidos no ponto mollet (ver receita, categoria Ovos Básicos), cortados ao meio",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: null, item: "ovos cozidos no ponto mollet", prep: "ver receita, categoria ovos básicos; cortados ao meio", alt: null, optional: false, isReference: true },
        ],
      },
      {
        raw: "1/2 cebola roxa fatiada fina",
        group: null,
        items: [
          { qty: 0.5, qtyRange: null, unit: null, item: "cebola roxa", prep: "fatiada fina", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "100 g de azeitonas pretas de Nice (ou pretas comuns)",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "grama", item: "azeitonas pretas de nice", prep: null, alt: "pretas comuns", optional: false, isReference: false },
        ],
      },
      {
        raw: "8 filés de anchova",
        group: null,
        items: [
          { qty: 8, qtyRange: null, unit: "file", item: "anchova", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Folhas de alface ou mix de folhas",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: "folha", item: "alface", prep: null, alt: "mix de folhas", optional: false, isReference: false },
        ],
      },
      {
        raw: "Para o vinagrete: 4 colheres (sopa) de azeite, 1 colher (sopa) de vinagre de vinho tinto, 1 dente de alho picado, sal e pimenta",
        group: "vinagrete",
        items: [
          { qty: 4, qtyRange: null, unit: "colher-sopa", item: "azeite", prep: null, alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "vinagre de vinho tinto", prep: null, alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "dente", item: "alho", prep: "picado", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "sal", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "pimenta", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Se for usar atum fresco, tempere com sal e pimenta e sele rapidamente numa frigideira bem quente, 1 minuto de cada lado, mantendo rosado no centro. Deixe esfriar e fatie.",
      "Prepare o vinagrete misturando azeite, vinagre, alho picado, sal e pimenta.",
      "Numa travessa grande, disponha as folhas de alface como base.",
      "Arrume por cima o tomate em quartos, a vagem cozida, a cebola roxa fatiada, os ovos mollet cortados ao meio e as azeitonas.",
      "Adicione o atum (fresco fatiado ou em conserva escorrido) e finalize com os filés de anchova por cima.",
      "Regue com o vinagrete na hora de servir."
    ],
    tips: [
      "A verdadeira Salade Niçoise tradicional não leva batata cozida nem feijão verde cru — a receita clássica de Nice é justamente vagem cozida, tomate fresco e atum, sem batata (isso é uma variação posterior popularizada fora da França).",
      "Ovos no ponto mollet (gema ainda cremosa) elevam a salada bem além de ovos duros comuns — vale o esforço extra.",
      "Sirva em temperatura ambiente, nunca gelada — é assim que se aproveita melhor o sabor de todos os ingredientes frescos."
    ]
  },

  // ===================== PRINCIPAIS =====================
  {
    name: "Cassoulet",
    subgroup: "Principais",
    desc: "Ensopado francês de feijão branco com confit de pato, linguiça e bacon, gratinado no forno em camadas de crosta.",
    origin: "França (Languedoc)",
    time: { prep: "30 min + 8h molho do feijão", cook: "3h", total: "≈12h" },
    yield: "6-8 porções",
    difficulty: "Alta",
    tags: ["protein:ave", "protein:suino", "ingredient:feijao"],
    ingredients: [
      "500 g de feijão branco, de molho por 8h",
      "4 coxas de confit de pato (ver receita, categoria Aves)",
      "300 g de linguiça de Toulouse (ou linguiça fresca de porco)",
      "200 g de bacon ou toucinho em pedaço",
      "1 cebola espetada com 2 cravos",
      "2 cenouras em pedaços grandes",
      "4 dentes de alho picados",
      "2 tomates picados sem pele",
      "1 buquê de ervas (louro, tomilho, salsão)",
      "1 L de caldo de carne ou água",
      "100 g de farinha de rosca",
      "Sal e pimenta a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "500 g de feijão branco, de molho por 8h",
        group: null,
        items: [
          { qty: 500, qtyRange: null, unit: "grama", item: "feijão branco", prep: "de molho por 8h", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "4 coxas de confit de pato (ver receita, categoria Aves)",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: null, item: "coxas de confit de pato", prep: "ver receita, categoria aves", alt: null, optional: false, isReference: true },
        ],
      },
      {
        raw: "300 g de linguiça de Toulouse (ou linguiça fresca de porco)",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "grama", item: "linguiça de toulouse", prep: null, alt: "linguiça fresca de porco", optional: false, isReference: false },
        ],
      },
      {
        raw: "200 g de bacon ou toucinho em pedaço",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "grama", item: "bacon", prep: null, alt: "toucinho em pedaço", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 cebola espetada com 2 cravos",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cebola espetada com 2 cravos", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 cenouras em pedaços grandes",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "cenouras", prep: "em pedaços grandes", alt: null, optional: false, isReference: false },
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
        raw: "2 tomates picados sem pele",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "tomates", prep: "picados sem pele", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 buquê de ervas (louro, tomilho, salsão)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "buquê de ervas", prep: "louro, tomilho, salsão", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 L de caldo de carne ou água",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "litro", item: "caldo de carne", prep: null, alt: "água", optional: false, isReference: false },
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
        raw: "Sal e pimenta a gosto",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "sal", prep: "a gosto", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "pimenta", prep: "a gosto", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Escorra o feijão de molho e cozinhe em água nova com a cebola cravejada, cenoura e o buquê de ervas, até ficar macio mas ainda inteiro, cerca de 1 hora. Escorra, reservando o caldo, e descarte a cebola e as ervas.",
      "Numa panela funda, doure o bacon em pedaço até render um pouco de gordura. Adicione a linguiça e doure também. Retire ambos e reserve.",
      "Refogue o alho e o tomate na gordura que sobrou, por 3-4 minutos.",
      "Numa panela de barro ou refratário grande, monte camadas: metade do feijão, o bacon, a linguiça em pedaços, as coxas de confit de pato, depois o restante do feijão por cima.",
      "Cubra com o caldo reservado do feijão (complete com caldo de carne se necessário), até quase cobrir tudo.",
      "Polvilhe a farinha de rosca por cima, formando uma crosta.",
      "Leve ao forno a 150°C, destampado, por 2h-2h30 — a cada 30-40 minutos, quebre a crosta que se forma por cima e empurre-a para dentro, deixando uma nova se formar (repita esse processo tradicional 3-4 vezes).",
      "Na última vez, deixe a crosta final se formar e dourar bem. Sirva quente, direto do refratário."
    ],
    tips: [
      "Quebrar e reincorporar a crosta várias vezes durante o forno (a 'croûte' tradicional) é uma etapa clássica que intensifica a textura e o sabor — não pule esse processo, mesmo que pareça repetitivo.",
      "Usar coxas de confit de pato já prontas (ver receita) economiza tempo significativo nesse prato já trabalhoso.",
      "É um prato de inverno por excelência, denso e reconfortante — faça com bastante antecedência de tempo disponível."
    ]
  },
  {
    name: "Blanquette de Veau",
    subgroup: "Principais",
    desc: "Guisado branco de vitela cozida sem dourar, com cogumelos e cebolinhas em molho aveludado de creme e gemas.",
    origin: "França",
    time: { prep: "25 min", cook: "1h30", total: "1h55" },
    yield: "4-6 porções",
    difficulty: "Média",
    tags: ["protein:boi", "ingredient:cogumelo"],
    ingredients: [
      "1,2 kg de vitela (paleta ou peito), em cubos",
      "1 cebola espetada com 1 cravo",
      "2 cenouras em pedaços grandes",
      "1 buquê de ervas (louro, tomilho, salsão)",
      "1,5 L de água ou fundo claro de vitela",
      "200 g de cogumelos paris",
      "12 cebolinhas pérola",
      "40 g de manteiga",
      "40 g de farinha de trigo",
      "2 gemas",
      "100 ml de creme de leite fresco",
      "Suco de 1/2 limão",
      "Sal e pimenta branca a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "1,2 kg de vitela (paleta ou peito), em cubos",
        group: null,
        items: [
          { qty: 1.2, qtyRange: null, unit: "quilograma", item: "vitela", prep: "paleta ou peito, em cubos", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 cebola espetada com 1 cravo",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cebola espetada com 1 cravo", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 cenouras em pedaços grandes",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "cenouras", prep: "em pedaços grandes", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 buquê de ervas (louro, tomilho, salsão)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "buquê de ervas", prep: "louro, tomilho, salsão", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1,5 L de água ou fundo claro de vitela",
        group: null,
        items: [
          { qty: 1.5, qtyRange: null, unit: "litro", item: "água", prep: null, alt: "fundo claro de vitela", optional: false, isReference: false },
        ],
      },
      {
        raw: "200 g de cogumelos paris",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "grama", item: "cogumelos paris", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "12 cebolinhas pérola",
        group: null,
        items: [
          { qty: 12, qtyRange: null, unit: null, item: "cebolinhas pérola", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "40 g de farinha de trigo",
        group: null,
        items: [
          { qty: 40, qtyRange: null, unit: "grama", item: "farinha de trigo", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 gemas",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "gemas", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "Suco de 1/2 limão",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "suco de 1/2 limão", prep: null, alt: null, optional: false, isReference: false },
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
      "Numa panela grande, cubra a carne com água fria, leve para ferver e escorra (isso remove impurezas, resultando num molho mais claro e limpo). Enxágue a carne e a panela.",
      "Volte a carne à panela limpa, cubra com água ou fundo claro, junte a cebola cravejada, cenoura e o buquê de ervas.",
      "Deixe ferver, abaixe o fogo e cozinhe em fervura suave, tampado, por 1h-1h15, retirando a espuma que sobe, até a carne ficar macia.",
      "Retire a carne com uma escumadeira e reserve. Coe o caldo, descartando os sólidos, e reserve 800 ml dele.",
      "Numa panela separada, salteie os cogumelos e as cebolinhas pérola na manteiga até dourarem levemente. Reserve.",
      "Na mesma panela, derreta um pouco mais de manteiga, junte a farinha e cozinhe por 2 minutos formando um roux claro.",
      "Adicione o caldo reservado aos poucos, mexendo sempre, até engrossar formando um velouté.",
      "Volte a carne, os cogumelos e as cebolinhas ao molho, cozinhe por 10 minutos.",
      "Bata as gemas com o creme de leite, tempere com uma concha do molho quente para amornar, e incorpore de volta à panela, fora do fogo forte, mexendo sem parar (não deixe ferver depois disso).",
      "Finalize com o suco de limão, ajuste sal e pimenta branca. Sirva com arroz branco."
    ],
    tips: [
      "Ferver e escorrer a carne no início (branqueamento) é o que garante um molho branco e limpo — sem esse passo, o molho fica turvo e acinzentado.",
      "É um dos poucos pratos franceses clássicos que não leva nenhuma cor dourada de caramelização — a carne nunca é selada/dourada, resultando num guisado totalmente 'branco'.",
      "A finalização com gemas e creme (liaison) deve ser feita com cuidado e fogo baixo, para não talhar os ovos."
    ]
  },
  {
    name: "Navarin d'Agneau",
    subgroup: "Principais",
    desc: "Guisado francês de cordeiro com legumes de primavera (cenoura baby, nabo, batatinha) em molho encorpado de tomate.",
    origin: "França",
    time: { prep: "25 min", cook: "1h30", total: "1h55" },
    yield: "4-6 porções",
    difficulty: "Média",
    tags: ["protein:cordeiro", "ingredient:batata", "ingredient:ervilha"],
    ingredients: [
      "1,2 kg de paleta ou pescoço de cordeiro, em cubos",
      "2 colheres (sopa) de óleo",
      "1 colher (sopa) de açúcar",
      "2 colheres (sopa) de extrato de tomate",
      "2 colheres (sopa) de farinha de trigo",
      "800 ml de fundo escuro ou caldo de carne",
      "2 dentes de alho picados",
      "1 buquê de ervas (louro, tomilho)",
      "12 cebolinhas pérola",
      "4 cenouras pequenas (ou baby), inteiras",
      "4 nabos pequenos, em quartos",
      "200 g de batatinhas, inteiras ou em metades",
      "100 g de ervilha fresca ou congelada",
      "Sal e pimenta a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "1,2 kg de paleta ou pescoço de cordeiro, em cubos",
        group: null,
        items: [
          { qty: 1.2, qtyRange: null, unit: "quilograma", item: "paleta", prep: "em cubos", alt: "pescoço de cordeiro", optional: false, isReference: false },
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
        raw: "1 colher (sopa) de açúcar",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "açúcar", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "2 colheres (sopa) de farinha de trigo",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "colher-sopa", item: "farinha de trigo", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "800 ml de fundo escuro ou caldo de carne",
        group: null,
        items: [
          { qty: 800, qtyRange: null, unit: "mililitro", item: "fundo escuro", prep: null, alt: "caldo de carne", optional: false, isReference: false },
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
        raw: "1 buquê de ervas (louro, tomilho)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "buquê de ervas", prep: "louro, tomilho", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "12 cebolinhas pérola",
        group: null,
        items: [
          { qty: 12, qtyRange: null, unit: null, item: "cebolinhas pérola", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "4 cenouras pequenas (ou baby), inteiras",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: null, item: "cenouras pequenas", prep: "inteiras", alt: "baby", optional: false, isReference: false },
        ],
      },
      {
        raw: "4 nabos pequenos, em quartos",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: null, item: "nabos pequenos", prep: "em quartos", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "200 g de batatinhas, inteiras ou em metades",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "grama", item: "batatinhas", prep: "inteiras ou em metades", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "100 g de ervilha fresca ou congelada",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "grama", item: "ervilha fresca", prep: null, alt: "congelada", optional: false, isReference: false },
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
      "Tempere o cordeiro com sal e pimenta. Aqueça o óleo numa panela funda e doure bem os cubos por todos os lados.",
      "Polvilhe o açúcar por cima e deixe caramelizar levemente junto com a carne (isso ajuda na cor final do molho, uma técnica clássica do prato).",
      "Junte o extrato de tomate e a farinha, mexendo por 1-2 minutos para formar uma base.",
      "Adicione o fundo escuro aos poucos, mexendo para não empelotar. Junte o alho e o buquê de ervas.",
      "Tampe e cozinhe em fogo baixo por 45 minutos.",
      "Enquanto isso, salteie as cebolinhas pérola, cenouras e nabos numa frigideira à parte com um pouco de manteiga até dourarem levemente.",
      "Junte os legumes salteados e as batatinhas à panela do cordeiro, continuando o cozimento por mais 30-35 minutos, até tudo ficar macio.",
      "Nos últimos 5 minutos, adicione a ervilha.",
      "Ajuste sal e pimenta, retire o buquê de ervas. Sirva quente, com o molho encorpado envolvendo carne e legumes."
    ],
    tips: [
      "O toque de açúcar caramelizado com a carne no início é uma técnica clássica francesa (usada também em outros guisados) que aprofunda a cor e o sabor do molho final.",
      "É considerado o 'guisado de primavera' francês por excelência, tradicionalmente feito quando os legumes novos (cenouras baby, nabos pequenos) estão na estação.",
      "Cortar os legumes em tamanhos uniformes e salteá-los à parte antes de juntar garante que fiquem no ponto certo, sem desmanchar no guisado."
    ]
  },
];
