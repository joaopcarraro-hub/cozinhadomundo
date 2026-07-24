// PADARIA
window.RECIPES = window.RECIPES || {};
window.RECIPES["padaria"] = [

  // ===================== PÃES FRANCESES CLÁSSICOS =====================
  {
    name: "Baguete",
    subgroup: "Pães Franceses Clássicos",
    desc: "Pão francês longo e fino, com casca crocante gerada por vapor no forno e miolo macio e alveolado.",
    origin: "França",
    time: { prep: "30 min + 3h fermentação", cook: "25 min", total: "≈4h" },
    yield: "3 baguetes",
    difficulty: "Média-alta",
    tags: [],
    ingredients: [
      "500 g de farinha de trigo (idealmente tipo 55 francesa, ou farinha comum de boa qualidade)",
      "350 ml de água fria",
      "10 g de sal",
      "5 g de fermento biológico seco (ou 15 g de fermento fresco)"
    ],
    ingredientsStructured: [
      {
        raw: "500 g de farinha de trigo (idealmente tipo 55 francesa, ou farinha comum de boa qualidade)",
        group: null,
        items: [
          { qty: 500, qtyRange: null, unit: "grama", item: "farinha de trigo", prep: "idealmente tipo 55 francesa, ou farinha comum de boa qualidade", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "350 ml de água fria",
        group: null,
        items: [
          { qty: 350, qtyRange: null, unit: "mililitro", item: "água fria", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "5 g de fermento biológico seco (ou 15 g de fermento fresco)",
        group: null,
        items: [
          { qty: 5, qtyRange: null, unit: "grama", item: "fermento biológico seco", prep: null, alt: "15 g de fermento fresco", optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Misture a farinha com a água numa tigela até incorporar (sem sovar), cubra e deixe descansar por 20-30 minutos (autólise) — isso desenvolve o glúten naturalmente.",
      "Adicione o fermento e o sal por cima da massa, sove por 10 minutos (na mão ou batedeira com gancho) até ficar lisa e elástica.",
      "Cubra e deixe fermentar por 1h30-2h em temperatura ambiente, fazendo 2-3 dobras a cada 30 minutos (puxe as bordas da massa por cima do centro) para fortalecer o glúten.",
      "Divida a massa em 3 partes iguais. Modele cada uma pré-formando um cilindro curto e deixe descansar 15-20 minutos coberta.",
      "Modele as baguetes: achate cada porção, dobre ao meio e role progressivamente esticando até formar um cilindro longo e fino, com as pontas afiladas.",
      "Coloque as baguetes num pano polvilhado com farinha (fazendo dobras entre elas para sustentar o formato) e deixe fermentar por mais 45-60 minutos.",
      "Pré-aqueça o forno a 240°C com uma assadeira vazia dentro (para gerar vapor depois).",
      "Faça 3-4 cortes diagonais na superfície de cada baguete com uma lâmina bem afiada.",
      "Transfira as baguetes para uma assadeira, jogue um copo de água quente na assadeira vazia no fundo do forno (gera vapor) e asse por 22-25 minutos, até dourar bem e soar oco ao bater na base."
    ],
    tips: [
      "O vapor no início do forno é o que dá a casca crocante característica da baguete — sem ele, o pão fica com casca mole e opaca.",
      "A autólise (descanso inicial só com farinha e água) melhora muito a textura final e reduz o tempo de sova necessário.",
      "Cortes rápidos e decididos com a lâmina em ângulo (não reto) ajudam o pão a abrir de forma controlada no forno."
    ]
  },
  {
    name: "Brioche",
    subgroup: "Pães Franceses Clássicos",
    desc: "Pão francês rico e macio, levado por muita manteiga e ovo, com fermentação longa na geladeira — base para pão de hambúrguer gourmet.",
    origin: "França",
    time: { prep: "30 min + 12h fermentação na geladeira", cook: "30 min", total: "≈13h" },
    yield: "1 pão grande (forma de bolo inglês)",
    difficulty: "Alta",
    tags: ["ingredient:ovo"],
    ingredients: [
      "500 g de farinha de trigo",
      "10 g de sal",
      "50 g de açúcar",
      "10 g de fermento biológico seco",
      "6 ovos",
      "80 ml de leite morno",
      "300 g de manteiga em temperatura ambiente, em cubos",
      "1 gema + 1 colher (sopa) de leite, para pincelar"
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
        raw: "10 g de sal",
        group: null,
        items: [
          { qty: 10, qtyRange: null, unit: "grama", item: "sal", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "10 g de fermento biológico seco",
        group: null,
        items: [
          { qty: 10, qtyRange: null, unit: "grama", item: "fermento biológico seco", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "80 ml de leite morno",
        group: null,
        items: [
          { qty: 80, qtyRange: null, unit: "mililitro", item: "leite morno", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "300 g de manteiga em temperatura ambiente, em cubos",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "grama", item: "manteiga em temperatura ambiente", prep: "em cubos", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 gema + 1 colher (sopa) de leite, para pincelar",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "gema", prep: "para pincelar", alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "leite", prep: "para pincelar", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Na batedeira com gancho, misture a farinha, sal, açúcar e fermento (mantendo o sal longe do fermento ao adicionar).",
      "Junte os ovos e o leite morno, bata em velocidade baixa até formar uma massa, depois aumente e sove por 10 minutos até ficar lisa e elástica.",
      "Com a batedeira ligada em velocidade média-baixa, adicione a manteiga aos poucos, um cubo de cada vez, só adicionando o próximo quando o anterior for totalmente incorporado. Isso pode levar 10-15 minutos.",
      "A massa ficará bem mole e brilhante — continue batendo até ela começar a se soltar das laterais da tigela.",
      "Cubra e deixe fermentar em temperatura ambiente por 1 hora, depois leve à geladeira por no mínimo 8 horas (idealmente durante a noite) — o frio é essencial para conseguir manusear essa massa amanteigada.",
      "No dia seguinte, modele o brioche ainda frio (mais fácil de trabalhar): divida em bolas e disponha numa forma untada, ou trance, conforme preferir.",
      "Deixe fermentar novamente em temperatura ambiente por 1h30-2h, até quase dobrar de volume.",
      "Pincele com a mistura de gema e leite. Asse a 180°C por 25-30 minutos, até dourar profundamente por cima e soar oco."
    ],
    tips: [
      "A massa de brioche é extremamente mole por causa da grande quantidade de manteiga e ovo — a fermentação longa na geladeira é o que torna possível trabalhar com ela sem grudar em tudo.",
      "Adicionar a manteiga aos poucos, sempre esperando incorporar antes da próxima adição, evita que a massa 'quebre' (fique com aparência talhada/oleosa).",
      "Base de inúmeras preparações: pão de brioche para hambúrguer, base do Paris-Brest, entre outros."
    ]
  },
  {
    name: "Croissant",
    subgroup: "Pães Franceses Clássicos",
    desc: "Pão folhado em formato de crescente, com camadas amanteigadas criadas por dobras sucessivas de massa e manteiga (laminação).",
    origin: "França / Áustria",
    time: { prep: "1h + 12h entre dobras e descanso", cook: "20 min", total: "≈14h" },
    yield: "12 croissants",
    difficulty: "Alta",
    tags: [],
    ingredients: [
      "500 g de farinha de trigo",
      "10 g de sal",
      "60 g de açúcar",
      "12 g de fermento biológico seco",
      "280 ml de leite frio",
      "50 g de manteiga derretida (para a massa)",
      "280 g de manteiga gelada, em bloco (para o empasse/laminação)",
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
        raw: "10 g de sal",
        group: null,
        items: [
          { qty: 10, qtyRange: null, unit: "grama", item: "sal", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "12 g de fermento biológico seco",
        group: null,
        items: [
          { qty: 12, qtyRange: null, unit: "grama", item: "fermento biológico seco", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "280 ml de leite frio",
        group: null,
        items: [
          { qty: 280, qtyRange: null, unit: "mililitro", item: "leite frio", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "50 g de manteiga derretida (para a massa)",
        group: null,
        items: [
          { qty: 50, qtyRange: null, unit: "grama", item: "manteiga", prep: "derretida (para a massa)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "280 g de manteiga gelada, em bloco (para o empasse/laminação)",
        group: null,
        items: [
          { qty: 280, qtyRange: null, unit: "grama", item: "manteiga gelada", prep: "em bloco (para o empasse/laminação)", alt: null, optional: false, isReference: false },
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
      "Misture a farinha, sal, açúcar e fermento. Adicione o leite frio e a manteiga derretida, sove por 8-10 minutos até formar uma massa lisa (détrempe).",
      "Achate a massa num retângulo, embrulhe e leve à geladeira por 1 hora.",
      "Prepare o bloco de manteiga: bata a manteiga gelada entre papel manteiga até formar um retângulo firme e maleável (não deve estar mole nem quebradiça).",
      "Abra a massa num retângulo duas vezes maior que o bloco de manteiga. Coloque a manteiga no centro e dobre a massa por cima, envolvendo completamente (envelope).",
      "Abra a massa com o rolo formando um retângulo longo, sem deixar a manteiga vazar (se aquecer, volte à geladeira por 10 minutos). Faça uma dobra tripla (dobre em três, como uma carta). Embrulhe e descanse na geladeira por 30-40 minutos.",
      "Repita o processo de abrir e dobrar em três mais duas vezes, descansando na geladeira entre cada dobra — total de 3 dobras triplas.",
      "Após a última dobra, descanse a massa laminada na geladeira por pelo menos 2 horas (ou durante a noite).",
      "Abra a massa numa espessura de cerca de 4-5 mm. Corte triângulos longos (base de 10 cm, altura de 25 cm aproximadamente).",
      "Estique levemente cada triângulo e enrole a partir da base em direção à ponta, formando o formato de crescente.",
      "Disponha numa assadeira, cubra levemente e deixe fermentar (proof) em local morno por 2-2h30, até crescerem visivelmente e ficarem tremulantes ao toque.",
      "Pincele com ovo batido. Asse a 200°C por 16-20 minutos, até dourar profundamente e as camadas ficarem visíveis nas laterais."
    ],
    tips: [
      "A temperatura é tudo: se a manteiga aquecer demais durante a laminação, ela se mistura à massa em vez de formar camadas — se isso acontecer, volte sempre à geladeira antes de continuar.",
      "As camadas alternadas de massa e manteiga são o que criam as centenas de folhas que se separam no forno, dando a textura amanteigada e crocante característica.",
      "É uma das técnicas mais desafiadoras da padaria — não desanime se as primeiras tentativas não ficarem perfeitas; a prática de laminação é o que ensina o ponto certo da manteiga."
    ]
  },
  {
    name: "Pão Rústico",
    subgroup: "Pães Franceses Clássicos",
    desc: "Pão rústico francês de casca grossa e escura, feito com farinha branca e integral, assado dentro de panela para gerar vapor.",
    origin: "França",
    time: { prep: "30 min + 4h fermentação", cook: "45 min", total: "≈5h30" },
    yield: "1 pão grande",
    difficulty: "Média",
    tags: [],
    ingredients: [
      "400 g de farinha de trigo branca",
      "100 g de farinha de trigo integral (ou centeio)",
      "350 ml de água morna",
      "10 g de sal",
      "100 g de fermento natural (levain) ativo, ou 5 g de fermento biológico seco",
      "Farinha de arroz ou semolina, para polvilhar o cesto de fermentação"
    ],
    ingredientsStructured: [
      {
        raw: "400 g de farinha de trigo branca",
        group: null,
        items: [
          { qty: 400, qtyRange: null, unit: "grama", item: "farinha de trigo branca", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "100 g de farinha de trigo integral (ou centeio)",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "grama", item: "farinha de trigo integral", prep: null, alt: "centeio", optional: false, isReference: false },
        ],
      },
      {
        raw: "350 ml de água morna",
        group: null,
        items: [
          { qty: 350, qtyRange: null, unit: "mililitro", item: "água morna", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "100 g de fermento natural (levain) ativo, ou 5 g de fermento biológico seco",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "grama", item: "fermento natural (levain)", prep: "ativo", alt: "5 g de fermento biológico seco", optional: false, isReference: false },
        ],
      },
      {
        raw: "Farinha de arroz ou semolina, para polvilhar o cesto de fermentação",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "farinha de arroz", prep: "para polvilhar o cesto de fermentação", alt: "semolina", optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Misture as farinhas com a água, deixe descansar por 30 minutos (autólise).",
      "Adicione o fermento e o sal, sove por 10 minutos até a massa ficar lisa e elástica.",
      "Deixe fermentar por 2-3 horas em temperatura ambiente, fazendo dobras a cada 45 minutos nas primeiras 2 horas.",
      "Modele a massa numa bola firme (boule), criando tensão na superfície ao girar a massa contra a bancada.",
      "Coloque num cesto de fermentação (banneton) polvilhado com farinha, com a costura para cima. Deixe fermentar por mais 1h30-2h, ou leve à geladeira por 8-12h para fermentação lenta (mais sabor).",
      "Pré-aqueça o forno a 240°C com uma panela de ferro tampada dentro (ou pedra + recipiente com água para gerar vapor).",
      "Vire a massa delicadamente sobre papel manteiga, faça um corte em cruz ou quadrado na superfície com lâmina afiada.",
      "Transfira para a panela quente (com o papel), tampe e asse por 20 minutos. Retire a tampa e asse por mais 20-25 minutos, até a casca ficar bem dourada e escura."
    ],
    tips: [
      "Assar dentro de uma panela tampada (método 'no-knead' popularizado por padeiros caseiros) recria o efeito de um forno a vapor profissional, dando uma casca espessa e crocante.",
      "A mistura de farinha branca com integral/centeio é o que dá o sabor rústico e levemente ácido característico do pain de campagne.",
      "Fermentação lenta na geladeira durante a noite desenvolve muito mais sabor do que fermentar rápido em temperatura ambiente."
    ]
  },

  // ===================== PÃES ITALIANOS =====================
  {
    name: "Focaccia",
    subgroup: "Pães Italianos",
    desc: "Pão italiano achatado e macio, generosamente regado com azeite, com furos característicos e coberturas como tomate e alecrim.",
    origin: "Itália (Ligúria)",
    time: { prep: "20 min + 3h fermentação", cook: "25 min", total: "≈3h45" },
    yield: "1 assadeira grande",
    difficulty: "Fácil",
    tags: ["ingredient:tomate"],
    ingredients: [
      "500 g de farinha de trigo",
      "350 ml de água morna",
      "7 g de fermento biológico seco",
      "10 g de sal",
      "1 colher (chá) de açúcar",
      "80 ml de azeite de oliva extra virgem (dividido, para a massa e para untar)",
      "Sal grosso ou flor de sal, alecrim fresco e tomate cereja para decorar",
      "Água para a salmoura final"
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
        raw: "350 ml de água morna",
        group: null,
        items: [
          { qty: 350, qtyRange: null, unit: "mililitro", item: "água morna", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "10 g de sal",
        group: null,
        items: [
          { qty: 10, qtyRange: null, unit: "grama", item: "sal", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "80 ml de azeite de oliva extra virgem (dividido, para a massa e para untar)",
        group: null,
        items: [
          { qty: 80, qtyRange: null, unit: "mililitro", item: "azeite de oliva extra virgem", prep: "dividido, para a massa e para untar", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Sal grosso ou flor de sal, alecrim fresco e tomate cereja para decorar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "sal grosso", prep: null, alt: "flor de sal", optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "alecrim fresco", prep: "para decorar", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "tomate cereja", prep: "para decorar", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Água para a salmoura final",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "água para a salmoura final", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Misture a farinha, fermento e açúcar. Adicione a água e 40 ml de azeite, misture até formar uma massa bem mole e pegajosa (não sove como pão comum, é uma massa mais líquida).",
      "Com uma espátula ou as mãos untadas de azeite, dobre a massa sobre si mesma algumas vezes dentro da tigela. Cubra e deixe fermentar por 1h30-2h, até dobrar de volume.",
      "Unte generosamente uma assadeira grande com azeite. Transfira a massa para a assadeira sem sovar, esticando delicadamente com as pontas dos dedos até cobrir o fundo.",
      "Cubra e deixe descansar por mais 30-40 minutos.",
      "Com as pontas dos dedos untadas de azeite, faça furos profundos por toda a superfície da massa (a marca característica da focaccia).",
      "Regue generosamente com mais azeite, deixando-o se acumular nos furos. Decore com tomate cereja, alecrim fresco e sal grosso.",
      "Prepare uma salmoura leve (água + uma pitada de sal) e borrife levemente por cima, se desejar uma casca ainda mais úmida e saborosa.",
      "Asse a 220°C por 20-25 minutos, até dourar bem por cima."
    ],
    tips: [
      "Não tenha medo da quantidade de azeite — é o que dá à focaccia sua textura úmida e o sabor rico característico.",
      "Os furos profundos com os dedos não são só decorativos: eles ajudam o azeite a penetrar na massa durante o cozimento.",
      "Pode variar os toppings com cebola caramelizada, azeitonas, uvas (versão doce típica da Ligúria) ou ervas variadas."
    ]
  },
  {
    name: "Ciabatta",
    subgroup: "Pães Italianos",
    desc: "Pão italiano de casca crocante e miolo bem alveolado, feito com massa de alta hidratação e fermento prévio (poolish).",
    origin: "Itália",
    time: { prep: "20 min + 4h fermentação (+ poolish 12h)", cook: "25 min", total: "≈16h" },
    yield: "4 pães pequenos",
    difficulty: "Alta",
    tags: [],
    ingredients: [
      "Para o poolish (fermento prévio): 150 g de farinha, 150 ml de água, 1 g de fermento biológico seco",
      "Para a massa final: 350 g de farinha de trigo, 250 ml de água morna, 8 g de sal, 4 g de fermento biológico seco",
      "Farinha extra e semolina para polvilhar"
    ],
    ingredientsStructured: [
      {
        raw: "Para o poolish (fermento prévio): 150 g de farinha, 150 ml de água, 1 g de fermento biológico seco",
        group: "poolish (fermento prévio)",
        items: [
          { qty: 150, qtyRange: null, unit: "grama", item: "farinha", prep: null, alt: null, optional: false, isReference: false },
          { qty: 150, qtyRange: null, unit: "mililitro", item: "água", prep: null, alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "grama", item: "fermento biológico seco", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Para a massa final: 350 g de farinha de trigo, 250 ml de água morna, 8 g de sal, 4 g de fermento biológico seco",
        group: "massa final",
        items: [
          { qty: 350, qtyRange: null, unit: "grama", item: "farinha de trigo", prep: null, alt: null, optional: false, isReference: false },
          { qty: 250, qtyRange: null, unit: "mililitro", item: "água", prep: "morna", alt: null, optional: false, isReference: false },
          { qty: 8, qtyRange: null, unit: "grama", item: "sal", prep: null, alt: null, optional: false, isReference: false },
          { qty: 4, qtyRange: null, unit: "grama", item: "fermento biológico seco", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Farinha extra e semolina para polvilhar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "farinha extra", prep: "para polvilhar", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "semolina", prep: "para polvilhar", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Prepare o poolish: misture a farinha, água e fermento do poolish, cubra e deixe fermentar em temperatura ambiente por 12 horas (ou durante a noite), até ficar bem bolhoso e com cheiro azedo levemente alcoólico.",
      "No dia seguinte, misture o poolish com a farinha, água e fermento da massa final.",
      "Adicione o sal e misture bem — a massa será bem mole e pegajosa (alto teor de hidratação é a marca da ciabatta). Não sove tradicionalmente; em vez disso, faça dobras dentro da tigela a cada 20-30 minutos, por 3-4 vezes, ao longo de 1h30-2h.",
      "Após as dobras, deixe a massa fermentar (descansando, sem mexer) por mais 1 hora, até crescer visivelmente e ficar bem aerada.",
      "Numa bancada bem polvilhada com farinha/semolina, despeje a massa delicadamente (sem desgaseificar muito) e divida em 4 retângulos com uma espátula, sem sovar ou apertar.",
      "Transfira cada retângulo com cuidado para uma assadeira polvilhada, esticando levemente para o formato alongado característico. Deixe descansar por 30-40 minutos.",
      "Pré-aqueça o forno a 230°C com vapor (borrife água ou use uma assadeira com água no fundo do forno).",
      "Asse por 20-25 minutos, até dourar bem e ficar com a casca crocante e o miolo bem alveolado (cheio de buracos irregulares)."
    ],
    tips: [
      "A massa de ciabatta é intencionalmente muito mole e pegajosa — resista à tentação de adicionar mais farinha, é essa hidratação alta que cria os grandes alvéolos característicos.",
      "O poolish (fermento prévio fermentado durante a noite) é o que dá a complexidade de sabor e a estrutura aerada típica da ciabatta.",
      "Manuseie a massa o mínimo possível depois das dobras iniciais — cada manipulação extra tira gás e reduz os alvéolos."
    ]
  },

  // ===================== FERMENTAÇÃO NATURAL =====================
  {
    name: "Pão de Fermentação Natural",
    subgroup: "Fermentação Natural",
    desc: "Pão rústico (sourdough) fermentado só com levain, sem fermento comercial, de casca escura e crocante e miolo irregular.",
    origin: "Tradição mundial (sourdough)",
    time: { prep: "40 min + 4-6h fermentação + 12h geladeira", cook: "45 min", total: "≈18-20h" },
    yield: "1 pão grande",
    difficulty: "Alta",
    tags: [],
    ingredients: [
      "500 g de farinha de trigo (pode misturar com um pouco de integral)",
      "350 ml de água morna",
      "100 g de fermento natural (levain) ativo e alimentado, em pico de atividade",
      "10 g de sal",
      "Farinha de arroz para polvilhar o cesto de fermentação"
    ],
    ingredientsStructured: [
      {
        raw: "500 g de farinha de trigo (pode misturar com um pouco de integral)",
        group: null,
        items: [
          { qty: 500, qtyRange: null, unit: "grama", item: "farinha de trigo (pode misturar com um pouco de integral)", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "350 ml de água morna",
        group: null,
        items: [
          { qty: 350, qtyRange: null, unit: "mililitro", item: "água morna", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "100 g de fermento natural (levain) ativo e alimentado, em pico de atividade",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "grama", item: "fermento natural (levain)", prep: "ativo e alimentado, em pico de atividade", alt: null, optional: false, isReference: false },
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
        raw: "Farinha de arroz para polvilhar o cesto de fermentação",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "farinha de arroz", prep: "para polvilhar o cesto de fermentação", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Certifique-se de que o levain está ativo: alimentado 4-8 horas antes, dobrando de volume e flutuando quando testado numa tigela com água.",
      "Misture a farinha com a água, deixe descansar por 30-40 minutos (autólise).",
      "Adicione o levain e misture bem, depois adicione o sal, incorporando com as mãos até homogêneo.",
      "Faça uma série de 4-6 dobras (puxando as bordas da massa por cima do centro) a cada 30 minutos, ao longo das primeiras 2-3 horas — isso substitui a sova tradicional e desenvolve o glúten.",
      "Deixe a massa fermentar (fermentação em massa) até crescer cerca de 50% e ficar bem aerada — geralmente 4-6 horas em temperatura ambiente, variando conforme a força do levain e a temperatura do ambiente.",
      "Modele a massa numa bola firme, criando tensão na superfície. Coloque num cesto de fermentação polvilhado com farinha de arroz, com a costura para cima.",
      "Leve à geladeira por 8-14 horas (fermentação lenta a frio) — isso desenvolve sabor e facilita fazer os cortes.",
      "Pré-aqueça o forno a 240°C com uma panela de ferro fundido tampada dentro.",
      "Vire a massa gelada sobre papel manteiga, faça os cortes na superfície com uma lâmina bem afiada, em ângulo.",
      "Transfira para a panela quente, tampe e asse por 20 minutos. Retire a tampa e asse por mais 20-25 minutos, até a casca ficar bem escura e crocante."
    ],
    tips: [
      "Ter um fermento natural (levain) saudável e ativo é a base de tudo — ele precisa estar no pico de atividade (dobrando de volume 4-8h após alimentado) antes de usar.",
      "Assar direto da geladeira (massa fria) facilita muito os cortes decorativos, já que a massa fria é mais firme e menos pegajosa.",
      "O miolo com buracos irregulares e a casca escura e crocante são sinais de uma fermentação bem conduzida — não tenha medo de assar até ficar bem escuro, isso é sabor, não queimado."
    ]
  },

  // ===================== PÃES DO DIA A DIA =====================
  {
    name: "Pão de Leite",
    subgroup: "Pães do Dia a Dia",
    desc: "Pãezinhos macios e levemente adocicados, assados grudados um no outro para ficarem com laterais fofas — ótimos para mini-sanduíches.",
    origin: "Brasil / Internacional",
    time: { prep: "20 min + 2h fermentação", cook: "20 min", total: "≈2h40" },
    yield: "12 pãezinhos",
    difficulty: "Fácil",
    tags: ["ingredient:ovo"],
    ingredients: [
      "500 g de farinha de trigo",
      "250 ml de leite morno",
      "1 ovo",
      "50 g de açúcar",
      "50 g de manteiga em temperatura ambiente",
      "8 g de fermento biológico seco",
      "8 g de sal",
      "1 gema + 1 colher (sopa) de leite, para pincelar"
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
        raw: "250 ml de leite morno",
        group: null,
        items: [
          { qty: 250, qtyRange: null, unit: "mililitro", item: "leite morno", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "50 g de açúcar",
        group: null,
        items: [
          { qty: 50, qtyRange: null, unit: "grama", item: "açúcar", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "50 g de manteiga em temperatura ambiente",
        group: null,
        items: [
          { qty: 50, qtyRange: null, unit: "grama", item: "manteiga", prep: "em temperatura ambiente", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "8 g de fermento biológico seco",
        group: null,
        items: [
          { qty: 8, qtyRange: null, unit: "grama", item: "fermento biológico seco", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "1 gema + 1 colher (sopa) de leite, para pincelar",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "gema", prep: "para pincelar", alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "leite", prep: "para pincelar", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Misture a farinha, o fermento e o açúcar numa tigela.",
      "Adicione o leite morno, o ovo e a manteiga, misture até formar uma massa. Junte o sal.",
      "Sove por 10 minutos (na mão ou batedeira) até a massa ficar lisa, macia e elástica.",
      "Cubra e deixe fermentar em local morno por 1 hora, até dobrar de volume.",
      "Divida a massa em 12 porções iguais, modele bolinhas lisas rolando cada porção contra a bancada.",
      "Disponha numa assadeira untada, deixando um pequeno espaço entre elas (para crescerem grudadas, formando pãezinhos macios nas laterais).",
      "Cubra e deixe fermentar por mais 45-50 minutos, até crescerem visivelmente.",
      "Pincele com a mistura de gema e leite.",
      "Asse a 180°C por 18-20 minutos, até dourarem por cima."
    ],
    tips: [
      "Deixar os pãezinhos bem próximos na assadeira (quase se tocando) faz com que cresçam grudados, resultando em laterais macias características do pão de leite/hambúrguer.",
      "Pincelar com a mistura de gema e leite (em vez de só ovo) dá um brilho mais dourado e suave.",
      "Ótima base para mini-sanduíches, hambúrgueres pequenos ou simplesmente para comer com manteiga."
    ]
  },
  {
    name: "Pretzel",
    subgroup: "Pães do Dia a Dia",
    desc: "Pão alemão torcido característico, mergulhado em banho de bicarbonato antes de assar — dá a casca escura, brilhante e o sabor alcalino.",
    origin: "Alemanha",
    time: { prep: "20 min + 1h fermentação", cook: "15 min", total: "≈1h35" },
    yield: "8 pretzels",
    difficulty: "Média",
    tags: [],
    ingredients: [
      "500 g de farinha de trigo",
      "300 ml de água morna",
      "7 g de fermento biológico seco",
      "10 g de sal",
      "20 g de açúcar mascavo (ou açúcar comum)",
      "40 g de manteiga derretida",
      "Para o banho: 2 L de água + 60 g de bicarbonato de sódio",
      "Sal grosso para polvilhar",
      "1 gema batida, para pincelar"
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
        raw: "300 ml de água morna",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "mililitro", item: "água morna", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "10 g de sal",
        group: null,
        items: [
          { qty: 10, qtyRange: null, unit: "grama", item: "sal", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "20 g de açúcar mascavo (ou açúcar comum)",
        group: null,
        items: [
          { qty: 20, qtyRange: null, unit: "grama", item: "açúcar mascavo", prep: null, alt: "açúcar comum", optional: false, isReference: false },
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
        raw: "Para o banho: 2 L de água + 60 g de bicarbonato de sódio",
        group: "banho",
        items: [
          { qty: 2, qtyRange: null, unit: "litro", item: "água", prep: null, alt: null, optional: false, isReference: false },
          { qty: 60, qtyRange: null, unit: "grama", item: "bicarbonato de sódio", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Sal grosso para polvilhar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "sal grosso", prep: "para polvilhar", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 gema batida, para pincelar",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "gema", prep: "batida, para pincelar", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Misture a farinha, fermento e açúcar. Adicione a água morna e a manteiga derretida, misture até formar uma massa. Junte o sal.",
      "Sove por 8-10 minutos até a massa ficar lisa e firme (mais firme que um pão comum).",
      "Cubra e deixe fermentar por 45-60 minutos, até dobrar de volume.",
      "Divida a massa em 8 porções. Role cada porção formando uma corda longa e fina (cerca de 50-60 cm), mais fina nas pontas.",
      "Forme o formato de pretzel: faça um U com a corda, cruze as duas pontas uma sobre a outra duas vezes (torção), e dobre as pontas para baixo, pressionando contra a base do U.",
      "Pré-aqueça o forno a 220°C. Ferva a água com o bicarbonato de sódio numa panela larga.",
      "Com uma escumadeira, mergulhe cada pretzel no banho de água com bicarbonato fervente por 20-30 segundos (esse banho alcalino é o que dá a cor e o sabor característicos).",
      "Escorra bem e transfira para uma assadeira forrada. Polvilhe com sal grosso e pincele com a gema batida.",
      "Faça um corte raso na parte mais grossa do pretzel (opcional, ajuda a abrir bonito) e asse por 12-15 minutos, até ficar de um marrom profundo e brilhante."
    ],
    tips: [
      "O banho em água com bicarbonato antes de assar é o que diferencia o pretzel de qualquer outro pão — ele gelatiniza a superfície, criando a casca escura, brilhante e o sabor levemente alcalino característico.",
      "Trabalhe rápido no banho fervente: 20-30 segundos é suficiente, tempo demais pode deixar a casca borrachuda demais.",
      "Para uma versão profissional, padarias usam soda cáustica diluída em vez de bicarbonato — mas o bicarbonato é seguro e eficaz o bastante para uso doméstico."
    ]
  },
];
