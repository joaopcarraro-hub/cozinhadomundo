// OVOS BÁSICOS — as técnicas fundamentais para dominar antes das preparações compostas
window.RECIPES = window.RECIPES || {};
window.RECIPES["ovos-basicos"] = [

  // ===================== COZIDOS EM ÁGUA =====================
  {
    name: "Ovo Cozido (mole, médio e duro)",
    subgroup: "Cozidos em Água",
    desc: "Ovo cozido com casca em água fervente — o tempo define se a gema fica líquida, cremosa ou totalmente firme.",
    origin: "Universal",
    time: { prep: "1 min", cook: "4 a 10 min", total: "5 a 11 min" },
    yield: "por ovo",
    difficulty: "Fácil",
    tags: ["protein:ovo", "ingredient:ovo"],
    ingredients: [
      "Ovos em temperatura ambiente (saem da geladeira 20-30 min antes)",
      "Água suficiente para cobrir os ovos",
      "1 colher (chá) de sal ou vinagre (opcional, ajuda se a casca rachar)"
    ],
    ingredientsStructured: [
      {
        raw: "Ovos em temperatura ambiente (saem da geladeira 20-30 min antes)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "ovos", prep: "em temperatura ambiente (saem da geladeira 20-30 min antes)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Água suficiente para cobrir os ovos",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "água suficiente para cobrir os ovos", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (chá) de sal ou vinagre (opcional, ajuda se a casca rachar)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "sal", prep: "ajuda se a casca rachar", alt: "vinagre", optional: true, isReference: false },
        ],
      },
    ],
    steps: [
      "Ferva água numa panela suficiente para cobrir os ovos por 2-3 cm.",
      "Com uma colher, abaixe os ovos delicadamente na água já fervendo (evita rachar por choque térmico direto no fundo).",
      "Conte o tempo a partir do momento em que a água voltar a ferver: 4-5 min para gema mole (líquida), 7-8 min para gema média (cremosa, começando a firmar), 10-11 min para gema dura (totalmente firme).",
      "Assim que atingir o tempo desejado, transfira os ovos imediatamente para uma tigela com água e gelo — isso interrompe o cozimento e facilita descascar.",
      "Descasque começando pela parte mais larga (onde geralmente há uma câmara de ar) e sirva."
    ],
    tips: [
      "Ovos mais velhos (5-7 dias na geladeira) descascam mais fácil que ovos muito frescos — o pH muda e a membrana solta melhor da casca.",
      "O choque de gelo logo após cozinhar também evita o anel esverdeado ao redor da gema no ponto duro.",
      "Ajuste o tempo conforme o tamanho do ovo — ovos extra grandes precisam de 1-2 minutos a mais."
    ]
  },
  {
    name: "Ovo Poché",
    subgroup: "Cozidos em Água",
    desc: "Ovo sem casca cozido direto na água quente com vinagre, formando uma clara firme ao redor da gema mole — base do Eggs Benedict.",
    origin: "França",
    time: { prep: "2 min", cook: "3 min", total: "5 min" },
    yield: "por ovo",
    difficulty: "Média",
    tags: ["protein:ovo", "ingredient:ovo"],
    ingredients: [
      "1 ovo bem fresco por porção",
      "1 L de água",
      "1 colher (sopa) de vinagre branco ou de álcool",
      "Sal a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "1 ovo bem fresco por porção",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "ovo bem fresco por porção", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 L de água",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "litro", item: "água", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (sopa) de vinagre branco ou de álcool",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "vinagre branco", prep: null, alt: "de álcool", optional: false, isReference: false },
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
      "Quebre o ovo numa xícara ou ramequim pequeno (facilita deslizar na água sem quebrar a gema).",
      "Aqueça a água numa panela até ferver bem de leve (não uma fervura forte) e junte o vinagre — ele ajuda a clara a coagular mais rápido, mantendo o formato.",
      "Com uma colher, crie um redemoinho suave na água.",
      "Deslize o ovo delicadamente no centro do redemoinho — isso ajuda a clara a se enrolar ao redor da gema em vez de se espalhar.",
      "Cozinhe por 2,5 a 3 minutos, sem mexer, até a clara firmar por fora e a gema continuar mole por dentro.",
      "Retire com uma escumadeira, escorra bem e apare as pontas soltas de clara com uma tesoura ou faca, se desejar um acabamento limpo.",
      "Tempere com sal na hora de servir."
    ],
    tips: [
      "Use ovos bem frescos — a clara de ovos frescos é mais firme e 'gruda' melhor ao redor da gema, resultando num formato mais bonito.",
      "Pode ser feito com antecedência: poché por 2 minutos (mais raso), resfrie em água gelada, e na hora de servir mergulhe em água quente por 30-45 segundos para reaquecer.",
      "Base do Eggs Benedict, Eggs Florentine e Ovos en Meurette."
    ]
  },
  {
    name: "Ovo Mollet",
    subgroup: "Cozidos em Água",
    desc: "Um meio-termo entre o poché e o cozido: ovo cozido com casca por 6 minutos, com clara firme e gema ainda cremosa.",
    origin: "França",
    time: { prep: "1 min", cook: "6 min", total: "7 min" },
    yield: "por ovo",
    difficulty: "Média",
    tags: ["protein:ovo", "ingredient:ovo"],
    ingredients: [
      "Ovos em temperatura ambiente",
      "Água suficiente para cobrir"
    ],
    ingredientsStructured: [
      {
        raw: "Ovos em temperatura ambiente",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "ovos", prep: "em temperatura ambiente", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Água suficiente para cobrir",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "água suficiente para cobrir", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Ferva a água e abaixe os ovos delicadamente com uma colher.",
      "Cozinhe por exatamente 6 minutos a partir do retorno da fervura — o ponto fica entre o poché e o cozido mole: a clara totalmente firme, a gema cremosa mas não líquida.",
      "Transfira imediatamente para água com gelo por pelo menos 2 minutos para interromper o cozimento.",
      "Descasque com cuidado (a clara ainda é delicada) — descasque debaixo de água corrente ajuda.",
      "Use inteiro, cortado ao meio, ou como cobertura de saladas e sopas."
    ],
    tips: [
      "É basicamente um 'ovo poché com casca' — a clara fica firme o bastante para descascar sem se desfazer, mas a gema permanece cremosa.",
      "Ótimo para saladas (tipo Salade Niçoise) e para colocar sobre aspargos ou purês.",
      "O tempo de 6 minutos é sensível — teste uma vez com seus ovos específicos e ajuste em 15-20 segundos se necessário."
    ]
  },
  {
    name: "Ovo a Baixa Temperatura (63°C)",
    subgroup: "Cozidos em Água",
    desc: "Técnica sous-vide: ovo cozido com casca por até 1 hora num banho de água a 63°C, resultando em clara e gema igualmente cremosas, como veludo.",
    origin: "Técnica moderna (sous-vide)",
    time: { prep: "2 min", cook: "45-60 min", total: "≈1h" },
    yield: "por ovo",
    difficulty: "Média (precisa de termômetro)",
    tags: ["protein:ovo", "ingredient:ovo"],
    ingredients: [
      "Ovos com casca, em temperatura ambiente",
      "Água suficiente para um banho controlado",
      "Termômetro culinário ou circulador de imersão (sous-vide)"
    ],
    ingredientsStructured: [
      {
        raw: "Ovos com casca, em temperatura ambiente",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "ovos com casca", prep: "em temperatura ambiente", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Água suficiente para um banho controlado",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "água suficiente para um banho controlado", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Termômetro culinário ou circulador de imersão (sous-vide)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "termômetro culinário", prep: null, alt: "circulador de imersão (sous-vide)", optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Aqueça um banho de água (numa panela grande ou com circulador sous-vide) e mantenha estável a 63°C — use um termômetro para monitorar constantemente se não tiver equipamento próprio.",
      "Mergulhe os ovos inteiros, ainda na casca, no banho.",
      "Cozinhe por 45 a 60 minutos, mantendo a temperatura da água o mais estável possível (63°C ± 1°C).",
      "Retire e quebre delicadamente — o resultado é uma textura única: a clara fica como um creme mole e opaco, e a gema fica cremosa e quase líquida, como um veludo.",
      "Sirva imediatamente sobre arroz, purês ou como topping de pratos quentes."
    ],
    tips: [
      "63°C é a temperatura mágica onde a proteína da gema já coagulou levemente (fica cremosa) mas a da clara ainda está bem abaixo do ponto de firmar totalmente — por isso a textura é tão diferente de um ovo cozido tradicional.",
      "Sem circulador sous-vide, use uma panela grande de água num fogo bem baixo, monitorando com termômetro e ajustando constantemente — é mais trabalhoso mas funciona.",
      "Muito usado em gastronomia contemporânea como topping de risotos, ramen e bowls."
    ]
  },

  // ===================== FRITOS E CONFITADOS =====================
  {
    name: "Ovo Frito Perfeito",
    subgroup: "Fritos e Confitados",
    desc: "Ovo frito em fogo baixo na manteiga, com clara macia por igual e gema mole — a técnica clássica sem queimar as bordas.",
    origin: "Universal",
    time: { prep: "1 min", cook: "3 min", total: "4 min" },
    yield: "por ovo",
    difficulty: "Fácil",
    tags: ["protein:ovo", "ingredient:ovo"],
    ingredients: [
      "1 ovo",
      "1 colher (chá) de manteiga ou óleo neutro",
      "Sal e pimenta a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "1 ovo",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "ovo", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (chá) de manteiga ou óleo neutro",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "manteiga", prep: null, alt: "óleo neutro", optional: false, isReference: false },
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
      "Aqueça uma frigideira antiaderente em fogo médio-baixo com a manteiga.",
      "Quebre o ovo numa xícara pequena primeiro (garante que não haja pedaços de casca e permite deslizar suavemente) e depois deslize na frigideira.",
      "Cozinhe em fogo baixo, sem mexer — para a clara cozinhar por igual sem queimar as bordas e a gema ficar mole.",
      "Se preferir a clara totalmente cozida por cima também: tampe a frigideira por 1 minuto no final, o vapor cozinha a parte de cima sem precisar virar.",
      "Tempere com sal e pimenta só no final (sal direto na gema crua pode manchar a superfície) e sirva imediatamente."
    ],
    tips: [
      "Fogo baixo é o segredo: fogo alto queima e resseca as bordas da clara antes da parte de cima cozinhar.",
      "A tampa por 1 minuto no final é o truque para um 'ovo com sol nascente' perfeito sem precisar virar e arriscar furar a gema.",
      "Use uma frigideira antiaderente de qualidade — evita que o ovo grude e quebre ao tentar retirar."
    ]
  },
  {
    name: "Ovo Confitado",
    subgroup: "Fritos e Confitados",
    desc: "Ovo cozinhado lentamente quase submerso em azeite morno (não fritando) — resulta numa clara extremamente macia e amanteigada.",
    origin: "Técnica clássica francesa",
    time: { prep: "2 min", cook: "8 min", total: "10 min" },
    yield: "por ovo",
    difficulty: "Média",
    tags: ["protein:ovo", "ingredient:ovo"],
    ingredients: [
      "1 ovo por porção",
      "200 ml de azeite de oliva (ou óleo neutro), o suficiente para submergir parcialmente o ovo",
      "Sal em flocos e pimenta a gosto",
      "Ervas frescas (opcional, para aromatizar o óleo)"
    ],
    ingredientsStructured: [
      {
        raw: "1 ovo por porção",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "ovo por porção", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "200 ml de azeite de oliva (ou óleo neutro), o suficiente para submergir parcialmente o ovo",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "mililitro", item: "azeite de oliva", prep: "o suficiente para submergir parcialmente o ovo", alt: "óleo neutro", optional: false, isReference: false },
        ],
      },
      {
        raw: "Sal em flocos e pimenta a gosto",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "sal em flocos", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "pimenta", prep: "a gosto", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Ervas frescas (opcional, para aromatizar o óleo)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "ervas frescas", prep: "para aromatizar o óleo", alt: null, optional: true, isReference: false },
        ],
      },
    ],
    steps: [
      "Aqueça o azeite numa panela pequena e funda até atingir cerca de 70-80°C (morno, nunca chegando a fritar/borbulhar) — use um termômetro se tiver.",
      "Quebre o ovo delicadamente direto no óleo morno.",
      "Cozinhe em fogo bem baixo por 6-8 minutos, regando ocasionalmente a parte de cima com uma colher, até a clara ficar opaca e macia e a gema continuar mole.",
      "Retire com uma escumadeira, deixando escorrer bem o excesso de óleo.",
      "Tempere com sal em flocos e pimenta, sirva imediatamente sobre torradas, purês ou saladas."
    ],
    tips: [
      "A diferença do frito comum é a temperatura muito mais baixa e o ovo ficar praticamente submerso — resulta numa clara extremamente macia, quase como poché, mas com o sabor amanteigado do óleo.",
      "Não deixe o óleo esquentar demais — se começar a borbulhar forte, a clara frita e endurece nas bordas, perdendo a textura macia característica.",
      "Pode aromatizar o azeite com um dente de alho ou ramo de tomilho enquanto aquece, para dar um sabor extra."
    ]
  },

  // ===================== ASSADOS =====================
  {
    name: "Ovo Cocotte",
    subgroup: "Assados",
    desc: "Ovo assado em banho-maria dentro de um ramequim untado, sobre uma base de creme de leite, com clara firme e gema mole.",
    origin: "França",
    time: { prep: "5 min", cook: "12 min", total: "17 min" },
    yield: "por porção",
    difficulty: "Fácil",
    tags: ["protein:ovo", "ingredient:ovo"],
    ingredients: [
      "1-2 ovos por ramequim",
      "1 colher (sopa) de creme de leite fresco por ramequim",
      "1 colher (chá) de manteiga (para untar)",
      "Sal, pimenta e noz-moscada a gosto",
      "Cebolinha ou queijo ralado (opcional, para finalizar)"
    ],
    ingredientsStructured: [
      {
        raw: "1-2 ovos por ramequim",
        group: null,
        items: [
          { qty: null, qtyRange: [1, 2], unit: null, item: "ovos por ramequim", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (sopa) de creme de leite fresco por ramequim",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "creme de leite fresco por ramequim", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (chá) de manteiga (para untar)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "manteiga (para untar)", prep: null, alt: null, optional: false, isReference: false },
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
      {
        raw: "Cebolinha ou queijo ralado (opcional, para finalizar)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "cebolinha", prep: "para finalizar", alt: "queijo ralado", optional: true, isReference: false },
        ],
      },
    ],
    steps: [
      "Pré-aqueça o forno a 180°C. Unte generosamente os ramequins com manteiga.",
      "Coloque uma colher de creme de leite no fundo de cada ramequim.",
      "Quebre os ovos delicadamente por cima do creme, sem misturar.",
      "Tempere com sal, pimenta e uma pitada de noz-moscada.",
      "Coloque os ramequins numa assadeira funda, adicione água quente até a metade da altura dos ramequins (banho-maria).",
      "Asse por 10-12 minutos, até a clara firmar e a gema continuar mole — fique de olho, o ponto muda rápido nos últimos minutos.",
      "Sirva imediatamente, quente, direto no ramequim, com torradas para acompanhar."
    ],
    tips: [
      "O banho-maria é essencial: cozinhar o ovo em calor direto e seco do forno resseca e deixa a textura borrachuda.",
      "Pode variar o fundo do ramequim com espinafre refogado, cogumelos salteados ou presunto picado antes de adicionar o ovo.",
      "Fique atento nos últimos 2 minutos de forno — a diferença entre gema mole e gema dura é rápida nessa técnica."
    ]
  },
  {
    name: "Ovo no Ramequim (simples)",
    subgroup: "Assados",
    desc: "Versão rústica e rápida do ovo assado, direto no ramequim untado, sem creme nem banho-maria — ótimo com pão torrado.",
    origin: "Universal",
    time: { prep: "3 min", cook: "10 min", total: "13 min" },
    yield: "por porção",
    difficulty: "Fácil",
    tags: ["protein:ovo", "ingredient:ovo"],
    ingredients: [
      "1-2 ovos por ramequim",
      "1 colher (chá) de manteiga",
      "Sal e pimenta a gosto",
      "Pão torrado para servir"
    ],
    ingredientsStructured: [
      {
        raw: "1-2 ovos por ramequim",
        group: null,
        items: [
          { qty: null, qtyRange: [1, 2], unit: null, item: "ovos por ramequim", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (chá) de manteiga",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "manteiga", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "Pão torrado para servir",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "pão", prep: "torrado para servir", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Pré-aqueça o forno a 200°C. Unte bem o ramequim com manteiga.",
      "Quebre o ovo diretamente no ramequim untado.",
      "Tempere com sal e pimenta.",
      "Leve ao forno (sem banho-maria, forma mais simples e rústica que o Cocotte) por 8-10 minutos, até a clara firmar.",
      "Sirva quente, direto no ramequim, com pão torrado para mergulhar na gema."
    ],
    tips: [
      "É a versão mais simples e rápida do ovo assado — sem creme, sem banho-maria — ótima para o dia a dia.",
      "Pode assar em forma de torradeira/air fryer também, ajustando o tempo.",
      "Adicione ervas frescas ou queijo ralado por cima antes de assar para variar."
    ]
  },

  // ===================== MEXIDOS E OMELETES =====================
  {
    name: "Ovo Mexido Francês (cremoso)",
    subgroup: "Mexidos e Omeletes",
    desc: "Ovos mexidos em fogo bem baixo, mexidos sem parar, formando pequenos grumos macios e cremosos como um creme — nunca dourados.",
    origin: "França",
    time: { prep: "2 min", cook: "6 min", total: "8 min" },
    yield: "1 porção (3 ovos)",
    difficulty: "Média",
    tags: ["protein:ovo", "ingredient:ovo"],
    ingredients: [
      "3 ovos",
      "20 g de manteiga gelada, em cubos (dividida)",
      "1 colher (sopa) de creme de leite fresco (opcional, no final)",
      "Sal e pimenta a gosto",
      "Cebolinha picada (opcional)"
    ],
    ingredientsStructured: [
      {
        raw: "3 ovos",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: null, item: "ovos", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "20 g de manteiga gelada, em cubos (dividida)",
        group: null,
        items: [
          { qty: 20, qtyRange: null, unit: "grama", item: "manteiga gelada", prep: "em cubos (dividida)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (sopa) de creme de leite fresco (opcional, no final)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "creme de leite fresco", prep: "no final", alt: null, optional: true, isReference: false },
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
        raw: "Cebolinha picada (opcional)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "cebolinha", prep: "picada", alt: null, optional: true, isReference: false },
        ],
      },
    ],
    steps: [
      "Bata os ovos numa tigela só até misturar gema e clara (não precisa bater muito).",
      "Numa panela (não frigideira — panela retém melhor o calor baixo e uniforme), derreta um pouco da manteiga em fogo bem baixo.",
      "Adicione os ovos e comece a mexer constantemente com uma espátula de silicone, raspando o fundo e as laterais sem parar.",
      "Retire e volte a panela do fogo periodicamente (fora do fogo a cada 20-30 segundos) para controlar a temperatura e evitar que talhe ou forme pedaços grandes.",
      "Continue mexendo por 5-6 minutos, adicionando o restante da manteiga gelada aos poucos — isso resfria a mistura e ajuda a manter a cremosidade.",
      "Quando os ovos estiverem cremosos, em pequenos grumos macios (como um creme, nunca secos), retire do fogo — eles continuam cozinhando com o calor residual.",
      "Finalize com o creme de leite (se usar), sal, pimenta e cebolinha. Sirva imediatamente."
    ],
    tips: [
      "O segredo é fogo muito baixo e paciência — ovo mexido francês nunca deve fritar ou dourar, é essencially um cozimento lento tipo 'creme'.",
      "Tirar a panela do fogo periodicamente ('cozinhar fora do fogo') é a técnica clássica para controlar a velocidade do cozimento.",
      "Tempere com sal só perto do final — sal cedo demais faz a clara soltar água e deixa o ovo aguado."
    ]
  },
  {
    name: "Ovo Mexido Americano",
    subgroup: "Mexidos e Omeletes",
    desc: "Ovos batidos com leite e mexidos em fogo médio, formando pedaços grandes e fofos — o estilo clássico de café da manhã americano.",
    origin: "EUA",
    time: { prep: "2 min", cook: "4 min", total: "6 min" },
    yield: "1 porção (3 ovos)",
    difficulty: "Fácil",
    tags: ["protein:ovo", "ingredient:ovo"],
    ingredients: [
      "3 ovos",
      "2 colheres (sopa) de leite ou creme de leite",
      "1 colher (sopa) de manteiga ou óleo",
      "Sal e pimenta a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "3 ovos",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: null, item: "ovos", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 colheres (sopa) de leite ou creme de leite",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "colher-sopa", item: "leite", prep: null, alt: "creme de leite", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (sopa) de manteiga ou óleo",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "manteiga", prep: null, alt: "óleo", optional: false, isReference: false },
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
      "Bata os ovos com o leite, sal e pimenta até ficar homogêneo e levemente espumoso.",
      "Aqueça a manteiga numa frigideira antiaderente em fogo médio.",
      "Despeje os ovos batidos e deixe assentar por alguns segundos.",
      "Com uma espátula, empurre os ovos das bordas para o centro em movimentos largos, formando grandes pedaços macios (diferente do francês, aqui os grumos são maiores e mais soltos).",
      "Continue por 2-3 minutos até os ovos estarem cozidos mas ainda levemente úmidos.",
      "Retire do fogo (eles continuam cozinhando um pouco fora do fogo) e sirva imediatamente."
    ],
    tips: [
      "Fogo médio (mais alto que o francês) e menos manipulação resultam nos pedaços grandes e fofos característicos do estilo americano.",
      "Não mexa o tempo todo como no estilo francês — deixe formar pedaços maiores antes de virar.",
      "Leite ou creme deixam os ovos mais macios e volumosos; pode substituir por água se preferir um sabor mais puro de ovo."
    ]
  },
  {
    name: "Omelete Francesa",
    subgroup: "Mexidos e Omeletes",
    desc: "Ovos batidos e cozidos rapidamente em fogo alto, enrolados em formato de charuto sem dourar — interior cremoso, nunca seco.",
    origin: "França",
    time: { prep: "2 min", cook: "3 min", total: "5 min" },
    yield: "1 porção (3 ovos)",
    difficulty: "Média-alta",
    tags: ["protein:ovo", "ingredient:ovo"],
    ingredients: [
      "3 ovos",
      "1 colher (sopa) de água ou leite (opcional)",
      "15 g de manteiga",
      "Sal e pimenta a gosto",
      "Ervas finas picadas ou queijo ralado (opcional, para rechear)"
    ],
    ingredientsStructured: [
      {
        raw: "3 ovos",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: null, item: "ovos", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (sopa) de água ou leite (opcional)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "água", prep: null, alt: "leite", optional: true, isReference: false },
        ],
      },
      {
        raw: "15 g de manteiga",
        group: null,
        items: [
          { qty: 15, qtyRange: null, unit: "grama", item: "manteiga", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "Ervas finas picadas ou queijo ralado (opcional, para rechear)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "ervas finas", prep: "picadas; para rechear", alt: "queijo ralado", optional: true, isReference: false },
        ],
      },
    ],
    steps: [
      "Bata os ovos vigorosamente com um garfo até ficarem completamente homogêneos, sem partes de clara e gema separadas.",
      "Aqueça a manteiga numa frigideira pequena antiaderente em fogo médio-alto até espumar, sem dourar.",
      "Despeje os ovos de uma vez. Com um garfo (ou espátula), mexa rapidamente em círculos por cima, mantendo a frigideira em movimento, por cerca de 10-15 segundos.",
      "Pare de mexer e deixe a base firmar por alguns segundos — a superfície deve continuar levemente úmida (baveuse).",
      "Se for rechear, adicione o recheio numa faixa no centro agora.",
      "Incline a frigideira e, com a espátula, dobre um terço da omelete por cima do centro, depois role/vire para fora do prato formando um charuto fechado, com a costura para baixo.",
      "Sirva imediatamente — o interior deve ficar cremoso, nunca seco ou dourado por fora."
    ],
    tips: [
      "A omelete francesa clássica NUNCA doura por fora — deve ficar amarelo-pálida, macia e sem nenhuma cor de fritura.",
      "Todo o processo de cozimento é rápidíssimo (menos de 1 minuto) — tenha tudo preparado antes de começar.",
      "É considerada um teste clássico de habilidade em cozinhas profissionais francesas, por exigir timing preciso."
    ]
  },
  {
    name: "Tortilla Española",
    subgroup: "Mexidos e Omeletes",
    desc: "Omelete espanhola grossa de ovos com batata e cebola confitadas lentamente no azeite — servida em fatias, quente ou em temperatura ambiente.",
    origin: "Espanha",
    time: { prep: "20 min", cook: "25 min", total: "45 min" },
    yield: "4-6 porções",
    difficulty: "Média",
    tags: ["protein:ovo", "ingredient:ovo", "ingredient:batata"],
    ingredients: [
      "6 ovos grandes",
      "500 g de batata, descascada e fatiada fina",
      "1 cebola média, fatiada fina",
      "250 ml de azeite de oliva (para confitar as batatas)",
      "Sal a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "6 ovos grandes",
        group: null,
        items: [
          { qty: 6, qtyRange: null, unit: null, item: "ovos grandes", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "500 g de batata, descascada e fatiada fina",
        group: null,
        items: [
          { qty: 500, qtyRange: null, unit: "grama", item: "batata", prep: "descascada e fatiada fina", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 cebola média, fatiada fina",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cebola média", prep: "fatiada fina", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "250 ml de azeite de oliva (para confitar as batatas)",
        group: null,
        items: [
          { qty: 250, qtyRange: null, unit: "mililitro", item: "azeite de oliva (para confitar as batatas)", prep: null, alt: null, optional: false, isReference: false },
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
      "Numa frigideira funda, aqueça o azeite em fogo médio-baixo e adicione as batatas e a cebola, temperadas com sal.",
      "Cozinhe (confite) lentamente por 20-25 minutos, mexendo de vez em quando, até as batatas ficarem bem macias mas sem dourar — praticamente 'cozidas' no azeite, não fritas.",
      "Escorra as batatas e cebolas num escorredor, reservando o azeite (pode ser reaproveitado para outras receitas).",
      "Bata os ovos numa tigela grande com uma pitada de sal, junte as batatas e cebolas ainda mornas, misturando bem para que os ovos se impregnem entre as fatias.",
      "Aqueça uma fina camada do azeite reservado numa frigideira antiaderente média (20-22 cm) em fogo médio. Despeje a mistura de ovo e batata.",
      "Cozinhe por 3-4 minutos até as bordas firmarem, mexendo levemente a frigideira para não grudar.",
      "Coloque um prato grande sobre a frigideira e vire com confiança para desenformar a tortilla, depois deslize de volta para a frigideira para cozinhar o outro lado, mais 3-4 minutos.",
      "O centro deve ficar levemente cremoso (jugosa). Deixe descansar alguns minutos antes de fatiar."
    ],
    tips: [
      "Confitar as batatas em azeite abundante e fogo baixo (nunca fritar rápido) é o segredo da textura macia característica.",
      "A tortilla clássica espanhola tem debate eterno sobre levar ou não cebola — ambas as versões são 'certas', dependendo da região.",
      "Sirva em temperatura ambiente como tapa, cortada em cubos com palitos, ou em fatias como prato principal."
    ]
  },
  {
    name: "Frittata",
    subgroup: "Mexidos e Omeletes",
    desc: "Omelete italiana grossa com legumes e queijo, cozida devagar na frigideira e finalizada no forno — não precisa dobrar nem virar.",
    origin: "Itália",
    time: { prep: "10 min", cook: "20 min", total: "30 min" },
    yield: "4 porções",
    difficulty: "Fácil",
    tags: ["protein:ovo", "contains:suino", "ingredient:ovo", "ingredient:queijo"],
    ingredients: [
      "8 ovos",
      "80 ml de leite ou creme de leite",
      "100 g de queijo (parmesão ou queijo de sua preferência), ralado",
      "200 g de legumes cozidos ou salteados (abobrinha, espinafre, cogumelos, pimentão — a gosto)",
      "50 g de presunto ou bacon (opcional)",
      "2 colheres (sopa) de azeite de oliva",
      "Sal e pimenta a gosto",
      "Ervas frescas picadas (opcional)"
    ],
    ingredientsStructured: [
      {
        raw: "8 ovos",
        group: null,
        items: [
          { qty: 8, qtyRange: null, unit: null, item: "ovos", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "80 ml de leite ou creme de leite",
        group: null,
        items: [
          { qty: 80, qtyRange: null, unit: "mililitro", item: "leite", prep: null, alt: "creme de leite", optional: false, isReference: false },
        ],
      },
      {
        raw: "100 g de queijo (parmesão ou queijo de sua preferência), ralado",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "grama", item: "queijo (parmesão ou queijo de sua preferência)", prep: "ralado", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "200 g de legumes cozidos ou salteados (abobrinha, espinafre, cogumelos, pimentão — a gosto)",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "grama", item: "legumes", prep: "cozidos ou salteados (abobrinha, espinafre, cogumelos, pimentão — a gosto)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "50 g de presunto ou bacon (opcional)",
        group: null,
        items: [
          { qty: 50, qtyRange: null, unit: "grama", item: "presunto", prep: null, alt: "bacon", optional: true, isReference: false },
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
        raw: "Sal e pimenta a gosto",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "sal", prep: "a gosto", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "pimenta", prep: "a gosto", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Ervas frescas picadas (opcional)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "ervas frescas", prep: "picadas", alt: null, optional: true, isReference: false },
        ],
      },
    ],
    steps: [
      "Pré-aqueça o forno a 190°C.",
      "Bata os ovos com o leite, sal, pimenta e metade do queijo.",
      "Numa frigideira que possa ir ao forno, aqueça o azeite e salteie os legumes (e o presunto/bacon, se usar) até macios, cerca de 5 minutos.",
      "Despeje os ovos batidos por cima dos legumes na frigideira, distribuindo bem.",
      "Cozinhe em fogo médio-baixo por 3-4 minutos, só até as bordas começarem a firmar (sem mexer, diferente do ovo mexido).",
      "Polvilhe o restante do queijo por cima e transfira a frigideira para o forno.",
      "Asse por 12-15 minutos, até o centro firmar completamente e o topo dourar levemente.",
      "Deixe descansar 5 minutos, desenforme ou corte em fatias direto na frigideira e sirva morna ou em temperatura ambiente."
    ],
    tips: [
      "Diferente da omelete francesa, a frittata é cozinhada devagar e finalizada no forno — não precisa dobrar nem virar.",
      "Ótima para aproveitar sobras de legumes e queijos na geladeira — é um prato bastante flexível.",
      "Fica deliciosa também fria, no dia seguinte, cortada em fatias — boa opção para piqueniques ou lanches."
    ]
  },
  {
    name: "Tamagoyaki",
    subgroup: "Mexidos e Omeletes",
    desc: "Omelete japonesa levemente adocicada (com dashi, shoyu e mirin), feita em camadas finas enroladas, formando um rolo compacto fatiado.",
    origin: "Japão",
    time: { prep: "10 min", cook: "10 min", total: "20 min" },
    yield: "2 porções",
    difficulty: "Média",
    tags: ["protein:ovo", "ingredient:ovo", "ingredient:molho-de-soja"],
    ingredients: [
      "4 ovos",
      "2 colheres (sopa) de dashi (caldo japonês) ou água",
      "1 colher (sopa) de molho shoyu",
      "1 colher (sopa) de açúcar",
      "1 colher (chá) de mirin",
      "Óleo neutro para untar (um pedaço de papel toalha dobrado, embebido em óleo, facilita untar entre as camadas)"
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
        raw: "2 colheres (sopa) de dashi (caldo japonês) ou água",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "colher-sopa", item: "dashi (caldo japonês)", prep: null, alt: "água", optional: false, isReference: false },
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
        raw: "1 colher (sopa) de açúcar",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "açúcar", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (chá) de mirin",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "mirin", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Óleo neutro para untar (um pedaço de papel toalha dobrado, embebido em óleo, facilita untar entre as camadas)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "óleo neutro", prep: "para untar (um pedaço de papel toalha dobrado, embebido em óleo, facilita untar entre as camadas)", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Bata os ovos numa tigela com o dashi, shoyu, açúcar e mirin até dissolver bem o açúcar, sem bater demais (evite formar muita espuma).",
      "Aqueça uma frigideira retangular própria para tamagoyaki (ou uma frigideira pequena comum) em fogo médio-baixo e unte levemente com óleo usando o papel toalha embebido.",
      "Despeje uma fina camada da mistura de ovo, o suficiente para cobrir o fundo. Quando começar a firmar mas ainda estiver úmido por cima, enrole a partir de uma das pontas em direção à outra, formando um rolinho.",
      "Empurre o rolinho formado para a ponta da frigideira, unte novamente a parte vazia com óleo, e despeje mais uma fina camada de ovo, deixando-a fluir por baixo do rolinho já formado.",
      "Quando essa nova camada firmar por baixo mas ainda úmida por cima, enrole o rolinho existente sobre ela, continuando o processo.",
      "Repita até usar toda a mistura de ovo, formando um rolo compacto de camadas.",
      "Retire da frigideira, envolva num esteira de bambu (makisu) ainda quente para moldar as bordas retas, e deixe esfriar levemente antes de fatiar em pedaços de 2-3 cm."
    ],
    tips: [
      "O segredo é construir em camadas finas, uma sobre a outra, sempre enrolando antes que a camada de baixo doure ou resseque demais.",
      "Uma frigideira retangular própria (tamagoyaki-ki) facilita muito, mas uma frigideira pequena redonda também funciona, só ajuste o formato ao enrolar.",
      "É servido tradicionalmente em sushis (nigiri de tamago) ou como parte de um bentô, em temperatura ambiente."
    ]
  },
];
