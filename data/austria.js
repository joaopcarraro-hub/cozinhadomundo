// ÁUSTRIA
// Nota: Sachertorte já está em Sobremesas Clássicas (Torta Sacher).
window.RECIPES = window.RECIPES || {};
window.RECIPES["austria"] = [

  {
    name: "Wiener Schnitzel",
    subgroup: "Principais",
    desc: "Filé de vitela batido fino, empanado e frito na manteiga até formar uma crosta dourada e ondulada — servido só com limão.",
    origin: "Áustria (Viena)",
    time: { prep: "15 min", cook: "10 min", total: "25 min" },
    yield: "4 porções",
    difficulty: "Fácil",
    tags: ["protein:boi", "contains:ovo", "ingredient:limao"],
    ingredients: [
      "4 filés de vitela (corte do coxão, batidos bem finos)",
      "Sal a gosto",
      "Farinha de trigo, 2 ovos batidos e farinha de rosca fina — para empanar",
      "100 g de manteiga clarificada (ou uma mistura de manteiga e óleo)",
      "Limão em gomos e salsinha, para servir"
    ],
    ingredientsStructured: [
      {
        raw: "4 filés de vitela (corte do coxão, batidos bem finos)",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: "file", item: "vitela (corte do coxão, batidos bem finos)", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "Farinha de trigo, 2 ovos batidos e farinha de rosca fina — para empanar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "farinha de trigo", prep: "para empanar", alt: null, optional: false, isReference: false },
          { qty: 2, qtyRange: null, unit: null, item: "ovos", prep: "batidos, para empanar", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "farinha de rosca fina", prep: "para empanar", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "100 g de manteiga clarificada (ou uma mistura de manteiga e óleo)",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "grama", item: "manteiga clarificada", prep: null, alt: "mistura de manteiga e óleo", optional: false, isReference: false },
        ],
      },
      {
        raw: "Limão em gomos e salsinha, para servir",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "limão", prep: "em gomos", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "salsinha", prep: "para servir", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Bata os filés de vitela entre filme plástico até ficarem bem finos, cerca de 3-4 mm — mais finos que um schnitzel de porco comum.",
      "Tempere levemente com sal.",
      "Passe cada filé na farinha, sacudindo o excesso, depois no ovo batido, e por fim na farinha de rosca, pressionando levemente (sem compactar demais — uma camada mais solta ajuda a formar as ondas características).",
      "Aqueça a manteiga clarificada numa frigideira grande, o suficiente para cobrir cerca de 1 cm de altura, em fogo médio-alto.",
      "Frite os schnitzels por 2 minutos de cada lado, balançando levemente a frigideira durante a fritura, até dourarem uniformemente e a crosta formar ondulações soltas.",
      "Escorra em papel toalha e sirva imediatamente, com limão para espremer e salsinha."
    ],
    tips: [
      "Legalmente, na Áustria, apenas a versão feita com vitela pode ser chamada de 'Wiener Schnitzel' — feita com porco, o nome correto é 'Schnitzel Wiener Art' (à moda de Viena), como na receita já registrada na categoria Suínos.",
      "Balançar a frigideira suavemente durante a fritura (técnica clássica vienense) é o que cria as ondulações soltas na crosta, sinal de um schnitzel bem feito.",
      "Tradicionalmente servido apenas com limão — nunca com molho por cima, que amoleceria a crosta crocante."
    ]
  },
  {
    name: "Apfelstrudel",
    subgroup: "Sobremesas",
    desc: "Rolo de massa filo fina recheado com maçã fatiada, canela, passas e nozes, assado até dourar — sobremesa clássica austríaca.",
    origin: "Áustria",
    time: { prep: "40 min", cook: "35 min", total: "1h15" },
    yield: "8 porções",
    difficulty: "Alta",
    tags: ["diet:vegetariana", "ingredient:castanha"],
    ingredients: [
      "1 disco de massa filo (ou massa strudel pronta, ou massa folhada na falta de outra opção)",
      "1 kg de maçã (tipo ácida, como Granny Smith), descascada e fatiada fina",
      "80 g de açúcar",
      "1 colher (chá) de canela em pó",
      "50 g de passas",
      "50 g de nozes picadas, tostadas",
      "80 g de farinha de rosca",
      "80 g de manteiga derretida (dividida)",
      "Açúcar de confeiteiro, para polvilhar"
    ],
    ingredientsStructured: [
      {
        raw: "1 disco de massa filo (ou massa strudel pronta, ou massa folhada na falta de outra opção)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "disco", item: "massa filo", prep: null, alt: "massa strudel pronta, ou massa folhada na falta de outra opção", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 kg de maçã (tipo ácida, como Granny Smith), descascada e fatiada fina",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "quilograma", item: "maçã", prep: "tipo ácida, como granny smith, descascada e fatiada fina", alt: null, optional: false, isReference: false },
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
        raw: "1 colher (chá) de canela em pó",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "canela em pó", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "50 g de passas",
        group: null,
        items: [
          { qty: 50, qtyRange: null, unit: "grama", item: "passas", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "50 g de nozes picadas, tostadas",
        group: null,
        items: [
          { qty: 50, qtyRange: null, unit: "grama", item: "nozes", prep: "picadas, tostadas", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "80 g de farinha de rosca",
        group: null,
        items: [
          { qty: 80, qtyRange: null, unit: "grama", item: "farinha de rosca", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "80 g de manteiga derretida (dividida)",
        group: null,
        items: [
          { qty: 80, qtyRange: null, unit: "grama", item: "manteiga", prep: "derretida (dividida)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Açúcar de confeiteiro, para polvilhar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "açúcar de confeiteiro", prep: "para polvilhar", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Misture as maçãs fatiadas com açúcar, canela, passas e nozes picadas. Deixe descansar por 10 minutos.",
      "Numa frigideira, toste a farinha de rosca numa colher de manteiga derretida até dourar levemente — isso ajuda a absorver o suco das maçãs e evitar que a massa fique encharcada.",
      "Estenda um pano de prato limpo numa superfície grande. Se for usar massa filo, sobreponha várias camadas, pincelando manteiga derretida entre cada uma.",
      "Polvilhe a farinha de rosca tostada por cima de dois terços da massa esticada, deixando uma borda livre.",
      "Distribua o recheio de maçã sobre a farinha de rosca, formando uma faixa ao longo de uma das bordas.",
      "Usando o pano como guia, enrole a massa firmemente ao redor do recheio, formando um rolo compacto, terminando com a costura para baixo.",
      "Transfira cuidadosamente para uma assadeira (o pano ajuda a deslizar o rolo sem quebrar), pincele com o restante da manteiga derretida.",
      "Asse a 190°C por 30-35 minutos, até dourar bem por fora.",
      "Deixe amornar, polvilhe com açúcar de confeiteiro antes de fatiar e servir, idealmente ainda morno."
    ],
    tips: [
      "A farinha de rosca tostada dentro do recheio é um truque essencial — absorve o excesso de suco liberado pelas maçãs durante o forno, evitando que a massa fique encharcada e mole.",
      "Usar um pano de prato para enrolar facilita muito o processo com massa filo fina e frágil, que rasga facilmente se manuseada só com as mãos.",
      "Sirva morno, idealmente com uma bola de sorvete de baunilha ou chantilly ao lado — a combinação quente e frio é clássica."
    ]
  },
  {
    name: "Kaiserschmarrn",
    subgroup: "Sobremesas",
    desc: "Panqueca fofa e grossa, rasgada em pedaços e caramelizada na manteiga, polvilhada com açúcar e servida com compota de frutas.",
    origin: "Áustria",
    time: { prep: "15 min", cook: "15 min", total: "30 min" },
    yield: "2-3 porções",
    difficulty: "Média",
    tags: ["diet:vegetariana", "contains:ovo"],
    ingredients: [
      "4 ovos (claras e gemas separadas)",
      "60 g de açúcar (dividido)",
      "200 g de farinha de trigo",
      "250 ml de leite",
      "1 pitada de sal",
      "50 g de manteiga (dividida)",
      "50 g de passas (opcional, hidratadas em rum por 10 minutos)",
      "Açúcar de confeiteiro, para polvilhar",
      "Compota de frutas vermelhas ou molho de maçã, para servir"
    ],
    ingredientsStructured: [
      {
        raw: "4 ovos (claras e gemas separadas)",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: null, item: "ovos", prep: "claras e gemas separadas", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "60 g de açúcar (dividido)",
        group: null,
        items: [
          { qty: 60, qtyRange: null, unit: "grama", item: "açúcar (dividido)", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "200 g de farinha de trigo",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "grama", item: "farinha de trigo", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "250 ml de leite",
        group: null,
        items: [
          { qty: 250, qtyRange: null, unit: "mililitro", item: "leite", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "50 g de manteiga (dividida)",
        group: null,
        items: [
          { qty: 50, qtyRange: null, unit: "grama", item: "manteiga (dividida)", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "50 g de passas (opcional, hidratadas em rum por 10 minutos)",
        group: null,
        items: [
          { qty: 50, qtyRange: null, unit: "grama", item: "passas", prep: "hidratadas em rum por 10 minutos", alt: null, optional: true, isReference: false },
        ],
      },
      {
        raw: "Açúcar de confeiteiro, para polvilhar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "açúcar de confeiteiro", prep: "para polvilhar", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Compota de frutas vermelhas ou molho de maçã, para servir",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "compota de frutas vermelhas", prep: "para servir", alt: "molho de maçã", optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Bata as gemas com metade do açúcar, a farinha e o leite até formar uma massa lisa, sem grumos, semelhante a uma massa de panqueca grossa.",
      "Bata as claras com o sal até espuma, adicione o restante do açúcar aos poucos, batendo até formar um merengue firme e brilhante.",
      "Incorpore o merengue à massa de gemas delicadamente, em movimentos de baixo para cima, mantendo o máximo de ar possível.",
      "Aqueça metade da manteiga numa frigideira grande (idealmente antiaderente) em fogo médio.",
      "Despeje a massa na frigideira, formando uma panqueca espessa. Se for usar, distribua as passas hidratadas por cima.",
      "Cozinhe por 3-4 minutos, até a base dourar e a panqueca começar a firmar.",
      "Vire (em duas partes, se necessário, já que é grossa) e cozinhe o outro lado por mais 2-3 minutos.",
      "Com duas espátulas ou garfos, rasgue a panqueca em pedaços irregulares direto na frigideira.",
      "Adicione o restante da manteiga e deixe os pedaços dourarem levemente por mais 2-3 minutos, virando ocasionalmente, até ficarem com bordas caramelizadas.",
      "Polvilhe com açúcar de confeiteiro e sirva imediatamente, com compota de frutas vermelhas ou molho de maçã."
    ],
    tips: [
      "O nome significa 'bagunça do Kaiser' (imperador) — reza a lenda que foi criado por acidente na cozinha imperial austríaca e o prato despedaçado ainda assim agradou o imperador Francisco José I.",
      "Rasgar a panqueca em pedaços irregulares e deixá-los caramelizar mais um pouco na manteiga é o que diferencia esse prato de uma panqueca comum — não pule essa etapa final.",
      "Servido tradicionalmente como sobremesa ou até como prato principal doce em regiões alpinas austríacas, especialmente após um dia de esqui."
    ]
  },
];
