// TÉCNICAS CONTEMPORÂNEAS AVANÇADAS — segundo nível de técnicas de alta gastronomia,
// que complementam as de Clássicos Contemporâneos sem repeti-las
window.RECIPES = window.RECIPES || {};
window.RECIPES["tecnicas-contemporaneas-2"] = [

  // ===================== CRUS E MARINADOS =====================
  {
    name: "Leite de Tigre",
    subgroup: "Crus e Marinados",
    desc: "Líquido ácido peruano batido com limão, aparas de peixe cru e pimenta — a marinada do ceviche servida por si só, como um 'shot' de abertura.",
    origin: "Peru",
    time: { prep: "15 min", cook: "0 min", total: "15 min" },
    yield: "≈300 ml",
    difficulty: "Fácil",
    tags: ["protein:peixe", "ingredient:limao"],
    ingredients: [
      "150 ml de suco de limão-tahiti espremido na hora",
      "100 g de aparas de peixe branco fresco (do mesmo peixe usado no ceviche)",
      "1/4 de cebola roxa picada grosseiramente",
      "1 dente de alho",
      "1 pedaço pequeno de gengibre (opcional)",
      "1 talo de aipo picado",
      "1 pimenta amarela peruana (ají amarillo) ou pimenta dedo-de-moça",
      "Coentro fresco",
      "Sal e pimenta a gosto",
      "Gelo (opcional, para servir bem gelado)"
    ],
    ingredientsStructured: [
      {
        raw: "150 ml de suco de limão-tahiti espremido na hora",
        group: null,
        items: [
          { qty: 150, qtyRange: null, unit: "mililitro", item: "suco de limão-tahiti", prep: "espremido na hora", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "100 g de aparas de peixe branco fresco (do mesmo peixe usado no ceviche)",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "grama", item: "aparas de peixe branco fresco (do mesmo peixe usado no ceviche)", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1/4 de cebola roxa picada grosseiramente",
        group: null,
        items: [
          { qty: 0.25, qtyRange: null, unit: null, item: "de cebola roxa", prep: "picada grosseiramente", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 dente de alho",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "dente", item: "alho", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 pedaço pequeno de gengibre (opcional)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "pedaço pequeno de gengibre", prep: null, alt: null, optional: true, isReference: false },
        ],
      },
      {
        raw: "1 talo de aipo picado",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "talo", item: "aipo", prep: "picado", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 pimenta amarela peruana (ají amarillo) ou pimenta dedo-de-moça",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "pimenta amarela peruana (ají amarillo)", prep: null, alt: "pimenta dedo-de-moça", optional: false, isReference: false },
        ],
      },
      {
        raw: "Coentro fresco",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "coentro fresco", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "Gelo (opcional, para servir bem gelado)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "gelo", prep: "para servir bem gelado", alt: null, optional: true, isReference: false },
        ],
      },
    ],
    steps: [
      "Bata todos os ingredientes no liquidificador em velocidade alta por 1-2 minutos, até ficar bem líquido e homogêneo.",
      "Coe através de uma peneira fina, pressionando levemente para extrair todo o líquido, descartando os sólidos.",
      "Ajuste o sal e a acidez.",
      "Sirva bem gelado, puro como um 'shot' de abertura de refeição, ou use como base líquida para pochear ou temperar peixes e frutos do mar crus."
    ],
    tips: [
      "É literalmente o líquido resultante da marinada do ceviche, elevado a um preparo por si só — muitos restaurantes contemporâneos servem como aperitivo ou 'despertador' de paladar.",
      "As aparas de peixe cru batidas no liquidificador são o que dá corpo e sabor umami ao leite de tigre — não pule esse ingrediente achando que é só suco de limão temperado.",
      "Pode ser engrossado com um pouco de amido de milho dissolvido, ou usado puro como um molho ácido de acompanhamento."
    ]
  },
  {
    name: "Gravlax",
    subgroup: "Crus e Marinados",
    desc: "Salmão curado por dias em sal, açúcar e endro, sem cozimento, fatiado bem fino e servido com pão escuro e mostarda.",
    origin: "Escandinávia",
    time: { prep: "15 min + 48-72h cura", cook: "0 min", total: "2-3 dias" },
    yield: "≈600 g",
    difficulty: "Fácil (exige tempo)",
    tags: ["protein:peixe"],
    ingredients: [
      "600 g de salmão fresco, em posta com pele, sem espinhas",
      "100 g de sal grosso",
      "100 g de açúcar",
      "1 maço grande de endro (dill) fresco, picado grosseiramente com os talos",
      "1 colher (sopa) de pimenta-do-reino em grãos, levemente amassada",
      "Raspas de 1 limão (opcional)",
      "50 ml de aquavit ou vodka (opcional, tradicional)"
    ],
    ingredientsStructured: [
      {
        raw: "600 g de salmão fresco, em posta com pele, sem espinhas",
        group: null,
        items: [
          { qty: 600, qtyRange: null, unit: "grama", item: "salmão fresco", prep: "em posta com pele, sem espinhas", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "100 g de sal grosso",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "grama", item: "sal grosso", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "1 maço grande de endro (dill) fresco, picado grosseiramente com os talos",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "maço grande de endro (dill) fresco", prep: "picado grosseiramente com os talos", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (sopa) de pimenta-do-reino em grãos, levemente amassada",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "pimenta-do-reino em grãos", prep: "levemente amassada", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Raspas de 1 limão (opcional)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "raspas de 1 limão", prep: null, alt: null, optional: true, isReference: false },
        ],
      },
      {
        raw: "50 ml de aquavit ou vodka (opcional, tradicional)",
        group: null,
        items: [
          { qty: 50, qtyRange: null, unit: "mililitro", item: "aquavit", prep: "tradicional", alt: "vodka", optional: true, isReference: false },
        ],
      },
    ],
    steps: [
      "Seque bem o salmão com papel toalha.",
      "Misture o sal grosso, o açúcar, a pimenta amassada e as raspas de limão.",
      "Espalhe metade dessa mistura no fundo de uma travessa funda, coloque o salmão com a pele para baixo por cima.",
      "Regue com o aquavit/vodka, se usar, e cubra o peixe com o endro picado por cima e com o restante da mistura de sal e açúcar.",
      "Cubra com filme plástico, coloque um peso por cima (uma tábua com latas, por exemplo) e leve à geladeira.",
      "Deixe curar por 48 a 72 horas, virando o peixe e regando com o líquido que se forma a cada 12 horas.",
      "Retire o peixe, raspe o excesso de sal, açúcar e endro (não lave com água).",
      "Fatie bem fino, na diagonal, começando pela cauda, com uma faca longa e afiada. Sirva com pão escuro, mostarda e endro fresco."
    ],
    stepIngredients: [
      null,
      null,
      [{ entryIndex: 1, itemIndex: 0, fraction: 0.5 }, { entryIndex: 2, itemIndex: 0, fraction: 0.5 }],
      [{ entryIndex: 1, itemIndex: 0, fraction: 0.5 }, { entryIndex: 2, itemIndex: 0, fraction: 0.5 }],
      null,
      null,
      null,
      null,
    ],
    tips: [
      "O peso por cima é importante — ele ajuda a extrair a umidade do peixe de forma mais uniforme, resultando numa textura mais firme e um sabor mais concentrado.",
      "Quanto mais tempo de cura (dentro da faixa de 48-72h), mais firme e salgado fica o resultado — ajuste conforme sua preferência.",
      "Nunca lave o peixe com água depois da cura — isso reidrata e dilui o sabor conquistado; só raspe o excesso com uma faca ou papel toalha."
    ]
  },
  {
    name: "Cura de Peixes e Carnes",
    subgroup: "Crus e Marinados",
    desc: "Técnica de curar peixe ou carne em sal e açúcar por horas, concentrando sabor e firmando a textura para servir como carpaccio ou crudo.",
    origin: "Técnica internacional",
    time: { prep: "10 min + 1-24h cura (varia)", cook: "0 min", total: "1-24h" },
    yield: "Conforme a peça",
    difficulty: "Fácil",
    tags: ["protein:peixe", "protein:ave"],
    ingredients: [
      "1 peça de peixe (robalo, salmão) ou carne (lombo, peito de pato), fresca e de procedência confiável",
      "Sal grosso e açúcar, em partes iguais (proporção base: 1:1)",
      "Especiarias e ervas a gosto (erva-doce, pimenta-do-reino, raspas cítricas, beterraba ralada para cor)"
    ],
    ingredientsStructured: [
      {
        raw: "1 peça de peixe (robalo, salmão) ou carne (lombo, peito de pato), fresca e de procedência confiável",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "peça de peixe (robalo, salmão)", prep: "fresca e de procedência confiável", alt: "carne (lombo, peito de pato)", optional: false, isReference: false },
        ],
      },
      {
        raw: "Sal grosso e açúcar, em partes iguais (proporção base: 1:1)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "sal grosso", prep: "em partes iguais (proporção base: 1:1)", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "açúcar", prep: "em partes iguais (proporção base: 1:1)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Especiarias e ervas a gosto (erva-doce, pimenta-do-reino, raspas cítricas, beterraba ralada para cor)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "especiarias", prep: "a gosto", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "ervas", prep: "a gosto (erva-doce, pimenta-do-reino, raspas cítricas, beterraba ralada para cor)", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Misture o sal, o açúcar e as especiarias/ervas escolhidas.",
      "Cubra completamente a peça (peixe ou carne) com essa mistura, numa travessa.",
      "Leve à geladeira, coberta, e deixe curar: peixes finos (filés) precisam de 1-4 horas; peças mais espessas de peixe, 8-12 horas; carnes (lombo, peito de pato) podem precisar de 12-24 horas, dependendo da espessura.",
      "Verifique o ponto pressionando a peça — deve estar mais firme que o estado cru original, mas não dura como uma carne seca.",
      "Retire a peça, lave rapidamente em água fria para remover o excesso de sal/açúcar, e seque muito bem com papel toalha.",
      "Fatie fino e sirva como carpaccio, crudo ou incorpore a outros pratos frios."
    ],
    tips: [
      "A cura salga e desidrata parcialmente a proteína, concentrando sabor e mudando a textura — é a base de preparos como o Gravlax, mas pode ser aplicada de forma mais rápida e simples a diversos ingredientes.",
      "Tempo de cura é proporcional à espessura da peça — peças mais finas curam muito mais rápido do que parece.",
      "Adicionar beterraba ralada à mistura de cura (técnica clássica do Gravlax vermelho) tinge a superfície de rosa/vermelho vibrante, sem alterar muito o sabor."
    ]
  },

  // ===================== COZIMENTOS DE PRECISÃO =====================
  {
    name: "Sous-vide (Técnica Geral)",
    subgroup: "Cozimentos de Precisão",
    desc: "Técnica de cozinhar a peça selada a vácuo em banho de água com temperatura controlada, garantindo o ponto interno exato antes de selar rapidamente.",
    origin: "Técnica moderna (França)",
    time: { prep: "10 min", cook: "1-24h (varia por corte)", total: "Varia" },
    yield: "Conforme a peça",
    difficulty: "Média (exige equipamento)",
    tags: [],
    ingredients: [
      "1 peça de carne, peixe ou vegetal",
      "Sal, pimenta e ervas/aromáticos a gosto",
      "Azeite ou manteiga (opcional)",
      "Saco próprio a vácuo (ou saco ziplock com o método de deslocamento de água)",
      "Circulador de imersão (sous-vide) ou panela grande com termômetro"
    ],
    ingredientsStructured: [
      {
        raw: "1 peça de carne, peixe ou vegetal",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "peça de carne", prep: null, alt: "peixe ou vegetal", optional: false, isReference: false },
        ],
      },
      {
        raw: "Sal, pimenta e ervas/aromáticos a gosto",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "sal", prep: "a gosto", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "pimenta", prep: "a gosto", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "ervas/aromáticos", prep: "a gosto", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Azeite ou manteiga (opcional)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "azeite", prep: null, alt: "manteiga", optional: true, isReference: false },
        ],
      },
      {
        raw: "Saco próprio a vácuo (ou saco ziplock com o método de deslocamento de água)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "saco próprio a vácuo", prep: null, alt: "saco ziplock com o método de deslocamento de água", optional: false, isReference: false },
        ],
      },
      {
        raw: "Circulador de imersão (sous-vide) ou panela grande com termômetro",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "circulador de imersão (sous-vide)", prep: null, alt: "panela grande com termômetro", optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Tempere a peça com sal, pimenta e aromáticos.",
      "Coloque num saco próprio para vácuo com um fio de azeite, e sele a vácuo (ou use um saco ziplock, submergindo lentamente na água para expulsar o ar antes de fechar, no chamado 'método de deslocamento de água').",
      "Aqueça o banho de água com o circulador até a temperatura exata desejada (varia por proteína e ponto: ex. 54-56°C para carne bovina ao ponto, 60°C para frango, 48-50°C para peixe).",
      "Mergulhe o saco no banho e cozinhe pelo tempo recomendado — de 45 minutos para peixes finos a 24-48 horas para cortes duros de carne que precisam quebrar colágeno lentamente.",
      "Retire o saco do banho, seque bem a superfície da proteína com papel toalha.",
      "Sele rapidamente em frigideira ou maçarico bem quente, só para dourar o exterior (crosta de Maillard) sem cozinhar mais o interior, que já está no ponto exato."
    ],
    tips: [
      "A grande vantagem do sous-vide é o controle absoluto do ponto interno — a peça nunca passa da temperatura da água, eliminando o risco de passar do ponto.",
      "Sempre finalize com uma selada rápida e quente depois do banho — sem isso, a proteína fica com aparência e textura de fervida, sem a crosta saborosa característica.",
      "Cortes duros e baratos (peito, músculo) se beneficiam de tempos muito longos (12-48h) a temperaturas baixas, o que quebra o colágeno e resulta numa maciez impossível de atingir por métodos tradicionais rápidos."
    ]
  },
  {
    name: "Maturação Seca (Dry Aging)",
    subgroup: "Cozimentos de Precisão",
    desc: "Técnica de maturar carne bovina por semanas em câmara com temperatura e umidade controladas, concentrando sabor e maciez antes de aparar a crosta seca.",
    origin: "Técnica internacional",
    time: { prep: "10 min", cook: "14-45 dias de maturação", total: "Semanas" },
    yield: "Conforme a peça",
    difficulty: "Alta (exige equipamento e controle)",
    tags: ["protein:boi"],
    ingredients: [
      "1 peça grande de carne bovina com osso (contrafilé/costela, em peça, não porcionada)",
      "Câmara ou geladeira dedicada com controle de temperatura (1-3°C) e umidade (75-85%)",
      "Circulação de ar constante (ventilador pequeno, se for uma geladeira caseira adaptada)"
    ],
    ingredientsStructured: [
      {
        raw: "1 peça grande de carne bovina com osso (contrafilé/costela, em peça, não porcionada)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "peça grande de carne bovina com osso", prep: "contrafilé/costela, em peça, não porcionada", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Câmara ou geladeira dedicada com controle de temperatura (1-3°C) e umidade (75-85%)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "câmara ou geladeira dedicada", prep: "com controle de temperatura (1-3°c) e umidade (75-85%)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Circulação de ar constante (ventilador pequeno, se for uma geladeira caseira adaptada)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "circulação de ar constante", prep: "ventilador pequeno, se for uma geladeira caseira adaptada", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Coloque a peça de carne, sem embalagem, sobre uma grade dentro da câmara/geladeira dedicada, permitindo circulação de ar por todos os lados.",
      "Mantenha a temperatura entre 1-3°C e a umidade entre 75-85% durante todo o processo — use um higrômetro para monitorar.",
      "Deixe maturar por no mínimo 14 dias (maturação leve) até 45+ dias (maturação intensa, sabor bem pronunciado de 'queijo e nozes').",
      "Durante a maturação, uma crosta externa escura e seca se forma naturalmente — isso é esperado e protege a carne por dentro.",
      "Ao final do período, apare e descarte a crosta externa escura com uma faca afiada, expondo a carne macia e escura por dentro.",
      "Porcione e cozinhe normalmente (grelhado, é o método clássico para valorizar o sabor concentrado)."
    ],
    tips: [
      "É um processo que exige equipamento dedicado e controle rigoroso — sem umidade e temperatura controladas, o risco de contaminação é real; não é recomendado tentar em geladeira doméstica comum sem adaptação adequada.",
      "Durante a maturação, a carne perde peso (evaporação de água) e desenvolve sabores mais concentrados e levemente amanteigados/de nozes, além de ficar mais macia pela ação enzimática natural.",
      "É uma técnica mais viável de comprar pronta de açougues especializados do que de fazer em casa, a menos que você tenha equipamento dedicado."
    ]
  },
  {
    name: "Defumação Caseira",
    subgroup: "Cozimentos de Precisão",
    desc: "Técnica de dar sabor defumado a carnes, peixes ou queijos usando lascas de madeira em fogo baixo, com equipamento próprio ou uma panela adaptada.",
    origin: "Técnica internacional",
    time: { prep: "15 min", cook: "20 min a várias horas (varia)", total: "Varia" },
    yield: "Conforme a peça",
    difficulty: "Média",
    tags: [],
    ingredients: [
      "1 peça de carne, peixe ou queijo para defumar",
      "Lascas ou serragem de madeira própria para defumação (hickory, macieira, cerejeira)",
      "Sal e temperos a gosto",
      "Defumador próprio, ou uma panela funda com tampa e uma grade improvisada, para defumação caseira rápida"
    ],
    ingredientsStructured: [
      {
        raw: "1 peça de carne, peixe ou queijo para defumar",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "peça de carne", prep: "para defumar", alt: "peixe ou queijo", optional: false, isReference: false },
        ],
      },
      {
        raw: "Lascas ou serragem de madeira própria para defumação (hickory, macieira, cerejeira)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "lascas", prep: null, alt: "serragem de madeira própria para defumação (hickory, macieira, cerejeira)", optional: false, isReference: false },
        ],
      },
      {
        raw: "Sal e temperos a gosto",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "sal", prep: "a gosto", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "temperos", prep: "a gosto", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Defumador próprio, ou uma panela funda com tampa e uma grade improvisada, para defumação caseira rápida",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "defumador próprio", prep: "para defumação caseira rápida", alt: "uma panela funda com tampa e uma grade improvisada", optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Para defumação a frio (peixes curados, queijos): mantenha a fonte de fumaça separada do alimento, com temperatura abaixo de 30°C, por várias horas — exige equipamento específico.",
      "Para defumação a quente caseira (mais acessível): forre o fundo de uma panela funda com papel-alumínio, coloque uma porção de lascas de madeira ou serragem por cima.",
      "Posicione uma grade dentro da panela, acima das lascas, sem tocá-las, e coloque o alimento já temperado sobre a grade.",
      "Leve ao fogo médio-alto até a madeira começar a soltar fumaça visível, então abaixe para fogo baixo e tampe bem a panela (vedando com papel-alumínio nas bordas, se necessário).",
      "Defume por 15-30 minutos (para dar apenas um toque de aroma defumado) ou até o ponto de cozimento desejado, dependendo do alimento e da espessura.",
      "Verifique o ponto de cozimento interno normalmente (a defumação dá sabor, mas não necessariamente cozinha por completo — complete no forno ou grelha se necessário)."
    ],
    tips: [
      "A defumação a quente caseira (numa panela) é uma forma acessível de dar sabor defumado sem precisar de um defumador profissional — funciona muito bem para dar um toque final em queijos, camarões ou aves.",
      "Faça em ambiente bem ventilado (o processo solta bastante fumaça) e nunca deixe sem supervisão, pelo risco de a madeira pegar fogo se ficar sem controle.",
      "Madeiras frutíferas (macieira, cerejeira) dão um sabor mais suave e adocicado; hickory e carvalho dão um sabor mais forte e robusto."
    ]
  },

  // ===================== ESFERIFICAÇÃO E TEXTURAS MOLECULARES =====================
  {
    name: "Esferificação de Frutas",
    subgroup: "Esferificação e Texturas Moleculares",
    desc: "Técnica de gastronomia molecular que transforma suco de fruta em pequenas esferas com membrana fina e interior líquido, que 'explodem' ao morder.",
    origin: "Espanha (elBulli, gastronomia molecular)",
    time: { prep: "20 min", cook: "10 min", total: "30 min" },
    yield: "≈30 esferas pequenas",
    difficulty: "Alta (exige ingredientes específicos)",
    tags: ["diet:vegetariana"],
    ingredients: [
      "250 ml de purê ou suco de fruta (morango, manga, maracujá), coado",
      "2,5 g de alginato de sódio",
      "1 L de água",
      "5 g de cloreto de cálcio (ou 50 g de gluconolactato de cálcio, para 'esferificação reversa' sem gosto residual)"
    ],
    ingredientsStructured: [
      {
        raw: "250 ml de purê ou suco de fruta (morango, manga, maracujá), coado",
        group: null,
        items: [
          { qty: 250, qtyRange: null, unit: "mililitro", item: "purê de fruta", prep: "morango, manga, maracujá, coado", alt: "suco de fruta", optional: false, isReference: false },
        ],
      },
      {
        raw: "2,5 g de alginato de sódio",
        group: null,
        items: [
          { qty: 2.5, qtyRange: null, unit: "grama", item: "alginato de sódio", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "5 g de cloreto de cálcio (ou 50 g de gluconolactato de cálcio, para 'esferificação reversa' sem gosto residual)",
        group: null,
        items: [
          { qty: 5, qtyRange: null, unit: "grama", item: "cloreto de cálcio", prep: null, alt: "50 g de gluconolactato de cálcio, para 'esferificação reversa' sem gosto residual", optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Bata o purê de fruta com o alginato de sódio no liquidificador até dissolver completamente, sem grumos. Deixe descansar por algumas horas na geladeira para eliminar bolhas de ar (facilita esferas mais lisas).",
      "Prepare o banho de cálcio: dissolva o cloreto de cálcio (ou gluconolactato) na água.",
      "Com uma seringa, conta-gotas ou colher de esferificação, pingue pequenas porções do purê com alginato no banho de cálcio.",
      "As gotas formam instantaneamente uma fina membrana gelatinosa por fora, mantendo o interior líquido — deixe reagir por 1-3 minutos.",
      "Retire as esferas delicadamente com uma escumadeira e enxágue rapidamente em água limpa para remover o excesso do banho de cálcio.",
      "Sirva imediatamente — as esferas continuam gelificando com o tempo, então quanto mais frescas, melhor a explosão líquida ao morder."
    ],
    tips: [
      "Use o gluconolactato de cálcio em vez do cloreto de cálcio se quiser evitar qualquer sabor residual levemente amargo/metálico — é a técnica preferida em preparos mais refinados ('esferificação reversa').",
      "Deixar o purê com alginato descansar na geladeira antes de usar remove bolhas de ar que atrapalhariam a formação de esferas lisas.",
      "Sirva as esferas em pouco tempo após feitas — elas continuam gelificando por dentro e, depois de um tempo, perdem o efeito de 'explosão líquida'."
    ]
  },
  {
    name: "Aires (Espumas de Ar)",
    subgroup: "Esferificação e Texturas Moleculares",
    desc: "Camada extremamente leve e efêmera de bolhas de ar batidas com lecitina sobre um líquido saboroso, mais sutil que uma espuma comum.",
    origin: "Espanha (elBulli, gastronomia molecular)",
    time: { prep: "10 min", cook: "0 min", total: "10 min" },
    yield: "Cobertura para 4 pratos",
    difficulty: "Média",
    tags: [],
    ingredients: [
      "300 ml de líquido bem saboroso e fino (suco de fruta, caldo claro coado, ou água aromatizada)",
      "2 g de lecitina de soja em pó",
      "1 pitada de sal (se for salgado)"
    ],
    ingredientsStructured: [
      {
        raw: "300 ml de líquido bem saboroso e fino (suco de fruta, caldo claro coado, ou água aromatizada)",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "mililitro", item: "líquido bem saboroso e fino", prep: "suco de fruta, caldo claro coado, ou água aromatizada", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 g de lecitina de soja em pó",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "grama", item: "lecitina de soja em pó", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 pitada de sal (se for salgado)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "pitada", item: "sal (se for salgado)", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Dissolva a lecitina de soja no líquido, misturando bem com um fouet — o líquido precisa estar em temperatura ambiente ou morno.",
      "Transfira para um recipiente largo e raso (facilita incorporar ar na superfície).",
      "Mergulhe um mixer de mão na superfície do líquido (só a ponta, não submerso) e bata em alta velocidade, inclinando levemente, por 20-30 segundos.",
      "Uma camada leve e aerada de bolhas ('ar') vai se formar na superfície — diferente da espuma comum, o 'aire' é ainda mais leve e efêmero, quase como espuma de sabão.",
      "Colha delicadamente com uma colher perfurada, deixando escorrer o excesso de líquido, e disponha sobre o prato.",
      "Sirva imediatamente — dura apenas alguns minutos antes de desmanchar."
    ],
    tips: [
      "A diferença entre 'aire' e uma espuma comum é a leveza extrema — o aire deve parecer quase inexistente, uma nuvem etérea de sabor, não uma espuma densa.",
      "Funciona melhor em líquidos bem finos e sem muita gordura — bases com creme de leite tendem a formar espumas mais densas, não aires.",
      "Técnica símbolo da gastronomia molecular espanhola dos anos 2000 (elBulli, Ferran Adrià) — hoje incorporada ao repertório comum de restaurantes contemporâneos."
    ]
  },

  // ===================== BRASEADOS E CONFITS =====================
  {
    name: "Braseados Longos",
    subgroup: "Braseados e Confits",
    desc: "Técnica de selar e cozinhar lentamente cortes duros de carne em vinho e caldo por horas, até ficarem extremamente macios, servidos com o molho reduzido.",
    origin: "Técnica clássica internacional",
    time: { prep: "20 min", cook: "3-4h", total: "≈4h" },
    yield: "4-6 porções",
    difficulty: "Média",
    tags: ["protein:boi", "ingredient:vinho"],
    ingredients: [
      "1,5 kg de corte de carne para braseado (paleta, acém, ossobuco, bochecha)",
      "2 colheres (sopa) de óleo ou banha",
      "1 cebola, 2 cenouras, 2 talos de salsão — em pedaços grandes",
      "3 dentes de alho amassados",
      "300 ml de vinho tinto (ou cerveja escura)",
      "500 ml de fundo escuro ou caldo de carne",
      "2 colheres (sopa) de extrato de tomate",
      "Ervas (louro, tomilho) e especiarias a gosto",
      "Sal e pimenta a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "1,5 kg de corte de carne para braseado (paleta, acém, ossobuco, bochecha)",
        group: null,
        items: [
          { qty: 1.5, qtyRange: null, unit: "quilograma", item: "corte de carne para braseado", prep: "paleta, acém, ossobuco, bochecha", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 colheres (sopa) de óleo ou banha",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "colher-sopa", item: "óleo", prep: null, alt: "banha", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 cebola, 2 cenouras, 2 talos de salsão — em pedaços grandes",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cebola", prep: "em pedaços grandes", alt: null, optional: false, isReference: false },
          { qty: 2, qtyRange: null, unit: null, item: "cenouras", prep: "em pedaços grandes", alt: null, optional: false, isReference: false },
          { qty: 2, qtyRange: null, unit: "talo", item: "salsão", prep: "em pedaços grandes", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "3 dentes de alho amassados",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: "dente", item: "alho", prep: "amassados", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "300 ml de vinho tinto (ou cerveja escura)",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "mililitro", item: "vinho tinto", prep: null, alt: "cerveja escura", optional: false, isReference: false },
        ],
      },
      {
        raw: "500 ml de fundo escuro ou caldo de carne",
        group: null,
        items: [
          { qty: 500, qtyRange: null, unit: "mililitro", item: "fundo escuro", prep: null, alt: "caldo de carne", optional: false, isReference: false },
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
        raw: "Ervas (louro, tomilho) e especiarias a gosto",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "ervas (louro, tomilho)", prep: "a gosto", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "especiarias", prep: "a gosto", alt: null, optional: false, isReference: false },
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
      "Tempere a carne generosamente com sal e pimenta. Sele em fogo alto numa panela funda (com óleo/banha) até dourar bem por todos os lados. Retire e reserve.",
      "Na mesma panela, doure os legumes até pegarem cor, 8-10 minutos. Junte o alho e o extrato de tomate, refogue por 2 minutos.",
      "Deglaceie com o vinho, raspando o fundo da panela, e deixe reduzir pela metade.",
      "Volte a carne à panela, cubra com o fundo/caldo (deve cobrir a carne pela metade ou mais), junte as ervas.",
      "Leve para ferver, depois tampe e cozinhe em fogo bem baixo (ou no forno a 150°C) por 3-4 horas, até a carne ficar extremamente macia, quase se desfazendo ao toque de um garfo.",
      "Retire a carne, coe e reduza o líquido de cozimento até encorpar como um molho.",
      "Sirva a carne com o molho reduzido por cima, acompanhada de purê ou legumes."
    ],
    tips: [
      "O segredo do braseado é o tempo e a temperatura baixa — cortes duros e cheios de colágeno (paleta, bochecha, ossobuco) precisam desse cozimento longo e lento para quebrar o tecido conjuntivo e ficarem macios.",
      "A carne deve ficar parcialmente submersa, nunca totalmente afogada — a parte exposta cozinha no vapor e desenvolve mais sabor por concentração.",
      "Fica ainda melhor no dia seguinte, quando os sabores se assentam — faça com antecedência se possível."
    ]
  },
  {
    name: "Confit (Alho, Tomate e Cebola)",
    subgroup: "Braseados e Confits",
    desc: "Técnica de cozinhar alho, tomate ou cebola submersos em azeite morno até ficarem extremamente macios e suaves, guardados no próprio azeite aromatizado.",
    origin: "Técnica clássica francesa",
    time: { prep: "10 min", cook: "1h-1h30", total: "≈1h30" },
    yield: "≈300 g",
    difficulty: "Fácil",
    tags: ["diet:vegetariana"],
    ingredients: [
      "2 cabeças de alho, dentes separados e descascados (ou 4 tomates, ou 3 cebolas em pétalas — escolha um)",
      "300-400 ml de azeite de oliva, o suficiente para cobrir",
      "Ervas frescas (tomilho, louro)",
      "Sal a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "2 cabeças de alho, dentes separados e descascados (ou 4 tomates, ou 3 cebolas em pétalas — escolha um)",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "cabeças de alho", prep: "dentes separados e descascados", alt: "4 tomates; ou 3 cebolas em pétalas — escolha um", optional: false, isReference: false },
        ],
      },
      {
        raw: "300-400 ml de azeite de oliva, o suficiente para cobrir",
        group: null,
        items: [
          { qty: null, qtyRange: [300, 400], unit: "mililitro", item: "azeite de oliva", prep: "o suficiente para cobrir", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Ervas frescas (tomilho, louro)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "ervas frescas", prep: "tomilho, louro", alt: null, optional: false, isReference: false },
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
      "Coloque o ingrediente escolhido (alho, tomate ou cebola) numa panela pequena e funda.",
      "Cubra completamente com o azeite — o ingrediente deve ficar totalmente submerso.",
      "Junte as ervas e uma pitada de sal.",
      "Leve ao fogo bem baixo (o azeite deve apenas borbulhar de leve, nunca fritar) e cozinhe por 1 a 1h30, até o ingrediente ficar extremamente macio (o alho deve amassar com o dorso de um garfo sem resistência).",
      "Deixe esfriar no próprio azeite. Guarde tudo junto (ingrediente + azeite aromatizado) num pote fechado na geladeira por até 2 semanas.",
      "Use o ingrediente confitado como base de molhos, pastas ou acompanhamento, e o azeite aromatizado para temperar outros pratos."
    ],
    tips: [
      "Fogo baixo é essencial — se o azeite esquentar demais e começar a fritar, o resultado é frito e crocante, não confitado e macio.",
      "O azeite resultante fica extremamente saboroso e pode ser reutilizado como óleo aromático em outros preparos — não descarte.",
      "Alho confitado vira uma pasta doce e suave (perde o ardor do alho cru) — ótimo espalhado em torradas ou incorporado a purês e molhos."
    ]
  },

  // ===================== PÓS E CROCANTES =====================
  {
    name: "Pó de Vegetais",
    subgroup: "Pós e Crocantes",
    desc: "Cascas e aparas de vegetais desidratadas e trituradas em pó fino, usadas para polvilhar cor e sabor concentrado sobre os pratos.",
    origin: "Gastronomia contemporânea",
    time: { prep: "10 min", cook: "2-3h desidratando", total: "≈3h" },
    yield: "≈50 g de pó",
    difficulty: "Fácil (exige tempo)",
    tags: ["diet:vegetariana"],
    ingredients: [
      "300 g de casca ou aparas de vegetal (casca de beterraba, folhas de cenoura, casca de cebola), bem lavadas",
      "Sal (opcional)"
    ],
    ingredientsStructured: [
      {
        raw: "300 g de casca ou aparas de vegetal (casca de beterraba, folhas de cenoura, casca de cebola), bem lavadas",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "grama", item: "casca de vegetal", prep: "casca de beterraba, folhas de cenoura, casca de cebola, bem lavadas", alt: "aparas de vegetal", optional: false, isReference: false },
        ],
      },
      {
        raw: "Sal (opcional)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "sal", prep: null, alt: null, optional: true, isReference: false },
        ],
      },
    ],
    steps: [
      "Corte ou rasgue o vegetal em pedaços pequenos e uniformes.",
      "Disponha numa assadeira forrada, numa camada única, sem sobrepor.",
      "Desidrate no forno na temperatura mais baixa possível (60-80°C), com a porta levemente entreaberta para deixar a umidade escapar, por 2-3 horas, até ficar completamente seco e quebradiço.",
      "Alternativa: use um desidratador de alimentos, seguindo o tempo indicado pelo fabricante (geralmente mais longo, mas com temperatura mais controlada).",
      "Deixe esfriar completamente, depois bata num moedor de especiarias ou processador potente até virar um pó fino.",
      "Peneire para remover partículas maiores, tempere com sal se desejar, e guarde em pote hermético."
    ],
    tips: [
      "É uma ótima forma de aproveitar 100% do vegetal, incluindo cascas e aparas que normalmente iriam para o lixo — alinhado com a filosofia de desperdício zero da gastronomia contemporânea.",
      "O vegetal precisa estar completamente seco antes de bater, ou o pó forma grumos e mofa rapidamente ao guardar.",
      "Use para polvilhar sobre pratos, dando cor e um sabor concentrado do vegetal original — muito usado como toque final decorativo."
    ]
  },
  {
    name: "Pó de Azeitona",
    subgroup: "Pós e Crocantes",
    desc: "Azeitonas pretas desidratadas e trituradas em pó escuro e umami, polvilhado sobre saladas, peixes grelhados ou risotos.",
    origin: "Gastronomia contemporânea (Espanha)",
    time: { prep: "10 min", cook: "2-3h desidratando", total: "≈3h" },
    yield: "≈40 g de pó",
    difficulty: "Fácil (exige tempo)",
    tags: ["diet:vegetariana", "ingredient:azeitona"],
    ingredients: [
      "200 g de azeitonas pretas sem caroço",
      "1 colher (sopa) de açúcar (opcional, ajuda a desidratar mais rápido)"
    ],
    ingredientsStructured: [
      {
        raw: "200 g de azeitonas pretas sem caroço",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "grama", item: "azeitonas pretas sem caroço", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (sopa) de açúcar (opcional, ajuda a desidratar mais rápido)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "açúcar", prep: "ajuda a desidratar mais rápido", alt: null, optional: true, isReference: false },
        ],
      },
    ],
    steps: [
      "Corte as azeitonas ao meio e retire o máximo de umidade possível com papel toalha.",
      "Disponha numa assadeira forrada com papel manteiga, numa camada única.",
      "Desidrate no forno na temperatura mais baixa possível (60-80°C), com a porta entreaberta, por 2-3 horas, até ficarem completamente secas e quebradiças (não apenas murchas).",
      "Deixe esfriar completamente.",
      "Bata num processador ou moedor de especiarias até formar um pó fino e escuro.",
      "Peneire para remover pedaços maiores e guarde em pote hermético, longe de umidade."
    ],
    tips: [
      "Ficou famoso nos pratos de Ferran Adrià e do elBulli como um dos primeiros 'pós' usados para trazer sabores intensos e concentrados sem adicionar líquido ao prato.",
      "Use azeitonas de boa qualidade e bem escorridas — azeitonas muito oleosas dificultam a desidratação completa.",
      "Ótimo polvilhado sobre saladas, peixes grelhados ou risotos, trazendo uma explosão salgada e umami concentrada."
    ]
  },
  {
    name: "Crocante de Arroz",
    subgroup: "Pós e Crocantes",
    desc: "Discos finos de creme de arroz secos e depois fritos rapidamente, que incham e ficam crocantes como um cracker decorativo.",
    origin: "Ásia / Gastronomia contemporânea",
    time: { prep: "10 min + secagem 4h ou durante a noite", cook: "3 min", total: "≈4h15" },
    yield: "≈15 unidades",
    difficulty: "Média",
    tags: ["diet:vegetariana", "ingredient:arroz"],
    ingredients: [
      "200 g de arroz branco cozido (de preferência do dia anterior, mais seco)",
      "300 ml de água",
      "1 pitada de sal",
      "Óleo para fritar",
      "Corante ou pó de vegetal (opcional, para cor)"
    ],
    ingredientsStructured: [
      {
        raw: "200 g de arroz branco cozido (de preferência do dia anterior, mais seco)",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "grama", item: "arroz branco", prep: "cozido (de preferência do dia anterior, mais seco)", alt: null, optional: false, isReference: false },
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
        raw: "1 pitada de sal",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "pitada", item: "sal", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "Corante ou pó de vegetal (opcional, para cor)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "corante", prep: "para cor", alt: "pó de vegetal", optional: true, isReference: false },
        ],
      },
    ],
    steps: [
      "Bata o arroz cozido com a água e o sal no liquidificador até formar um creme bem liso (tipo um mingau ralo).",
      "Leve ao fogo baixo, mexendo sempre, até engrossar levemente, formando uma pasta homogênea, cerca de 5 minutos.",
      "Espalhe camadas bem finas dessa pasta sobre um tapete de silicone ou papel manteiga, formando discos ou formas livres.",
      "Deixe secar completamente em local seco e arejado (ou num desidratador em temperatura baixa) por 4 horas ou durante a noite, até ficar totalmente rígido e translúcido, como um 'papel' de arroz seco.",
      "Na hora de servir, frite rapidamente em óleo bem quente (190°C) — os discos incham e ficam crocantes em poucos segundos.",
      "Escorra imediatamente em papel toalha e sirva na hora, ainda crocante."
    ],
    tips: [
      "A secagem completa antes de fritar é o que faz o crocante 'explodir' e inflar no óleo quente — se ainda estiver úmido, ele frita sem crescer e fica duro.",
      "É a mesma técnica por trás de vários crackers de camarão e snacks asiáticos tradicionais, adaptada para uso decorativo em pratos autorais.",
      "Frite só na hora de servir — depois de frito, perde a crocância rapidamente se exposto à umidade do ambiente."
    ]
  },
  {
    name: "Crosta de Especiarias",
    subgroup: "Pós e Crocantes",
    desc: "Mistura de especiarias tostadas e moídas grosseiramente, pressionada sobre a carne antes de selar, formando uma crosta aromática crocante.",
    origin: "Técnica internacional",
    time: { prep: "10 min", cook: "3 min (tostar)", total: "13 min" },
    yield: "Para cobrir 1 peça de carne média",
    difficulty: "Fácil",
    tags: ["protein:boi"],
    ingredients: [
      "2 colheres (sopa) de grãos de coentro",
      "1 colher (sopa) de grãos de cominho",
      "1 colher (sopa) de pimenta-do-reino em grãos",
      "1 colher (chá) de sementes de erva-doce (opcional)",
      "1 colher (sopa) de páprica defumada",
      "Sal grosso a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "2 colheres (sopa) de grãos de coentro",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "colher-sopa", item: "grãos de coentro", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (sopa) de grãos de cominho",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "grãos de cominho", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (sopa) de pimenta-do-reino em grãos",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "pimenta-do-reino em grãos", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (chá) de sementes de erva-doce (opcional)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "sementes de erva-doce", prep: null, alt: null, optional: true, isReference: false },
        ],
      },
      {
        raw: "1 colher (sopa) de páprica defumada",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "páprica defumada", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Sal grosso a gosto",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "sal grosso", prep: "a gosto", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Tueste os grãos inteiros (coentro, cominho, pimenta, erva-doce) numa frigideira seca em fogo médio, por 2-3 minutos, mexendo sempre, até perfumarem bem — cuidado para não queimar.",
      "Deixe esfriar levemente, depois moa grosseiramente num pilão ou moedor de especiarias (a textura deve ficar rústica, não um pó fino).",
      "Misture com a páprica defumada e o sal grosso.",
      "Pressione essa mistura sobre a superfície de uma peça de carne já temperada e seca (antes de selar), cobrindo bem todos os lados.",
      "Sele a carne em fogo alto numa frigideira ou grelha, formando uma crosta aromática e crocante por fora, mantendo o interior no ponto desejado."
    ],
    tips: [
      "Tostar e moer as especiarias na hora (em vez de usar pó pronto) faz uma diferença enorme no aroma e na intensidade do sabor da crosta.",
      "Manter a moagem grosseira (não um pó fino) cria uma textura de crosta mais interessante e crocante ao morder.",
      "Clássica em cortes de carne para grelhar, como um contrafilé em crosta de especiarias no estilo 'cajun' ou 'steakhouse'."
    ]
  },

  // ===================== MOLHOS E MANTEIGAS AVANÇADOS =====================
  {
    name: "Manteiga Composta",
    subgroup: "Molhos e Manteigas Avançados",
    desc: "Manteiga amolecida misturada com ervas, alho assado ou limão, moldada em cilindro e fatiada para derreter sobre carnes, peixes ou vegetais quentes.",
    origin: "Técnica clássica francesa",
    time: { prep: "10 min + 1h geladeira", cook: "0 min", total: "1h10" },
    yield: "≈200 g",
    difficulty: "Fácil",
    tags: ["diet:vegetariana"],
    ingredients: [
      "200 g de manteiga sem sal, em temperatura ambiente",
      "2 colheres (sopa) de ervas frescas picadas (salsinha, estragão, cebolinha) ou 2 dentes de alho assado, ou raspas e suco de limão — escolha uma direção de sabor",
      "Sal e pimenta a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "200 g de manteiga sem sal, em temperatura ambiente",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "grama", item: "manteiga sem sal", prep: "em temperatura ambiente", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 colheres (sopa) de ervas frescas picadas (salsinha, estragão, cebolinha) ou 2 dentes de alho assado, ou raspas e suco de limão — escolha uma direção de sabor",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "colher-sopa", item: "ervas frescas", prep: "picadas (salsinha, estragão, cebolinha); escolha uma direção de sabor", alt: "2 dentes de alho assado; ou raspas e suco de limão", optional: false, isReference: false },
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
      "Amasse a manteiga em temperatura ambiente com um garfo ou espátula até ficar bem cremosa.",
      "Incorpore o ingrediente de sabor escolhido (ervas, alho assado amassado, ou raspas/suco de limão), misturando bem até distribuir por igual.",
      "Tempere com sal e pimenta.",
      "Transfira a manteiga para um pedaço de filme plástico e enrole formando um cilindro compacto, torcendo as pontas como uma bala.",
      "Leve à geladeira por pelo menos 1 hora até firmar (ou ao congelador para uso posterior).",
      "Corte rodelas do cilindro e finalize carnes grelhadas, peixes ou vegetais assados, deixando a manteiga derreter naturalmente sobre o prato quente."
    ],
    tips: [
      "É uma das formas mais simples e elegantes de finalizar um prato — uma rodela de manteiga composta derretendo sobre um bife grelhado adiciona sabor e brilho instantaneamente.",
      "O cilindro na geladeira (ou congelador) dura semanas — vale fazer em maior quantidade e ter sempre pronta.",
      "Combine sabores conforme o prato: manteiga de ervas para peixes, manteiga de alho assado para carnes, manteiga de limão para vegetais grelhados."
    ]
  },
  {
    name: "Velouté Moderno",
    subgroup: "Molhos e Manteigas Avançados",
    desc: "Releitura do molho clássico de caldo reduzido com creme, engrossado sem farinha (com goma xantana), resultando num molho mais leve e brilhante.",
    origin: "Gastronomia contemporânea (releitura do clássico)",
    time: { prep: "10 min", cook: "20 min", total: "30 min" },
    yield: "≈400 ml",
    difficulty: "Média",
    tags: [],
    ingredients: [
      "500 ml de caldo bem encorpado (frango, peixe ou vegetal, feito em casa)",
      "1 cebola picada",
      "100 ml de creme de leite fresco (ou creme de castanhas, para versão sem lactose)",
      "20 g de manteiga",
      "1 colher (chá) de goma xantana (opcional, para engrossar sem farinha, resultando num molho mais leve e brilhante)",
      "Sal, pimenta e um toque cítrico a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "500 ml de caldo bem encorpado (frango, peixe ou vegetal, feito em casa)",
        group: null,
        items: [
          { qty: 500, qtyRange: null, unit: "mililitro", item: "caldo bem encorpado", prep: "frango, peixe ou vegetal, feito em casa", alt: null, optional: false, isReference: false },
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
        raw: "100 ml de creme de leite fresco (ou creme de castanhas, para versão sem lactose)",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "mililitro", item: "creme de leite fresco", prep: null, alt: "creme de castanhas, para versão sem lactose", optional: false, isReference: false },
        ],
      },
      {
        raw: "20 g de manteiga",
        group: null,
        items: [
          { qty: 20, qtyRange: null, unit: "grama", item: "manteiga", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (chá) de goma xantana (opcional, para engrossar sem farinha, resultando num molho mais leve e brilhante)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "goma xantana", prep: "para engrossar sem farinha, resultando num molho mais leve e brilhante", alt: null, optional: true, isReference: false },
        ],
      },
      {
        raw: "Sal, pimenta e um toque cítrico a gosto",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "sal", prep: "a gosto", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "pimenta", prep: "a gosto", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "toque cítrico", prep: "a gosto", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Refogue a cebola na manteiga até translúcida.",
      "Junte o caldo e deixe reduzir em fogo médio por 15 minutos, até concentrar o sabor.",
      "Adicione o creme de leite e cozinhe por mais 5 minutos.",
      "Se for usar goma xantana (no lugar do roux tradicional de farinha), polvilhe uma pequena quantidade e bata com um mixer de mão até engrossar levemente — use com moderação, pois engrossa muito rápido.",
      "Ajuste sal, pimenta e um toque cítrico para dar frescor.",
      "Bata com o mixer de mão por 30 segundos antes de servir, para dar uma textura levemente aerada e brilhante."
    ],
    tips: [
      "A versão moderna troca o roux (manteiga + farinha) por redução e, opcionalmente, um espessante neutro como a goma xantana — resulta num molho mais leve, brilhante e sem gosto de farinha.",
      "Goma xantana engrossa em quantidades muito pequenas — comece com uma pitada e vá adicionando aos poucos, batendo entre cada adição.",
      "Bater com mixer de mão antes de servir incorpora ar e dá uma textura mais aveludada e contemporânea ao molho."
    ]
  },
  {
    name: "Espelho de Molho",
    subgroup: "Molhos e Manteigas Avançados",
    desc: "Técnica de emplatamento que espalha um molho encorpado no prato em camada fina e uniforme, como base visual para os demais componentes.",
    origin: "Gastronomia contemporânea (técnica de emplatamento)",
    time: { prep: "5 min", cook: "0 min (usa molho já pronto)", total: "5 min" },
    yield: "Para 1 prato",
    difficulty: "Fácil (exige prática)",
    tags: [],
    ingredients: [
      "100 ml de um molho encorpado e bem coado (redução de vinho, molho de tomate liso, purê fino)",
      "Prato bem limpo e seco"
    ],
    ingredientsStructured: [
      {
        raw: "100 ml de um molho encorpado e bem coado (redução de vinho, molho de tomate liso, purê fino)",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "mililitro", item: "molho encorpado", prep: "bem coado (redução de vinho, molho de tomate liso, purê fino)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Prato bem limpo e seco",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "prato", prep: "bem limpo e seco", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Certifique-se de que o molho está bem coado, sem grumos, e na temperatura adequada (a maioria dos 'espelhos' é servida com o molho morno ou frio, dependendo do prato).",
      "Despeje uma porção do molho no centro do prato.",
      "Incline e gire o prato delicadamente em movimentos circulares, deixando o molho se espalhar por gravidade até cobrir uma área ampla e uniforme, como um 'espelho' líquido.",
      "Alternativa mais controlada: use o fundo de uma colher para espalhar o molho em movimento circular ou em arco, criando uma base uniforme.",
      "Posicione o componente principal do prato (proteína, vegetal) sobre ou ao lado do espelho de molho, e finalize com outros elementos por cima."
    ],
    tips: [
      "Não é uma receita, mas uma técnica de emplatamento — a qualidade final depende inteiramente da consistência do molho: nem grosso demais (não espalha), nem ralo demais (escorre para fora do prato).",
      "Pratos totalmente limpos e secos são essenciais — qualquer resíduo de gordura ou umidade impede o molho de se espalhar uniformemente.",
      "Um dos elementos visuais mais usados em gastronomia contemporânea para dar uma base elegante e dar 'altura' aos outros componentes do prato."
    ]
  },
  {
    name: "Glace de Viande",
    subgroup: "Molhos e Manteigas Avançados",
    desc: "Fundo escuro de carne reduzido por horas até virar um xarope concentrado e gelatinoso, usado em pequenas doses para intensificar molhos.",
    origin: "França",
    time: { prep: "5 min", cook: "2-3h (redução)", total: "≈3h" },
    yield: "≈150 ml (bem concentrado)",
    difficulty: "Média",
    tags: ["protein:boi"],
    ingredients: [
      "2 L de fundo escuro de carne, bem feito e já coado (ver receita Caldos e Fundos)"
    ],
    ingredientsStructured: [
      {
        raw: "2 L de fundo escuro de carne, bem feito e já coado (ver receita Caldos e Fundos)",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "litro", item: "fundo escuro de carne", prep: "bem feito e já coado; ver receita caldos e fundos", alt: null, optional: false, isReference: true },
        ],
      },
    ],
    steps: [
      "Numa panela larga (para acelerar a evaporação), leve o fundo escuro para ferver.",
      "Abaixe para fogo médio-baixo e deixe reduzir lentamente, sem tampa, retirando a espuma que sobe à superfície.",
      "Conforme o volume for reduzindo, transfira para panelas cada vez menores — isso mantém a proporção de superfície exposta e acelera a redução final.",
      "Continue reduzindo por 2-3 horas, até restar apenas uma pequena quantidade de líquido xaroposo, quase como um xarope grosso que cobre as costas de uma colher formando uma camada espessa e brilhante.",
      "Deixe esfriar — o glace de viande fica com uma consistência de gelatina firme e escura em temperatura ambiente/geladeira (por causa da alta concentração de colágeno).",
      "Guarde em pote pequeno na geladeira (dura semanas) ou congele em forminhas de gelo, para dissolver pequenas porções sempre que precisar intensificar um molho."
    ],
    tips: [
      "É a redução máxima do fundo escuro — praticamente uma 'pastilha de sabor' de carne concentrado, usado em quantidades pequenas para dar profundidade a qualquer molho.",
      "Uma colher de glace de viande dissolvida numa manteiga composta ou num molho simples eleva instantaneamente o resultado a um patamar de restaurante.",
      "Reduzir em panelas progressivamente menores evita ter que esperar horas a mais só por causa do volume de líquido ainda grande no início."
    ]
  },

  // ===================== FERMENTAÇÃO =====================
  {
    name: "Legumes Fermentados",
    subgroup: "Fermentação",
    desc: "Vegetais salgados e fermentados naturalmente por dias em seu próprio líquido, desenvolvendo acidez complexa e benefícios probióticos.",
    origin: "Técnica internacional (fermentação lática)",
    time: { prep: "20 min", cook: "0 min", total: "3-14 dias fermentando" },
    yield: "≈1 pote grande",
    difficulty: "Fácil (exige tempo e paciência)",
    tags: ["diet:vegetariana"],
    ingredients: [
      "500 g de vegetal firme (repolho, cenoura, pepino, rabanete), fatiado ou ralado",
      "10 g de sal não iodado (2% do peso do vegetal)",
      "Especiarias a gosto (grãos de mostarda, pimenta, alho)"
    ],
    ingredientsStructured: [
      {
        raw: "500 g de vegetal firme (repolho, cenoura, pepino, rabanete), fatiado ou ralado",
        group: null,
        items: [
          { qty: 500, qtyRange: null, unit: "grama", item: "vegetal firme", prep: "repolho, cenoura, pepino, rabanete, fatiado ou ralado", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "10 g de sal não iodado (2% do peso do vegetal)",
        group: null,
        items: [
          { qty: 10, qtyRange: null, unit: "grama", item: "sal não iodado", prep: "2% do peso do vegetal", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Especiarias a gosto (grãos de mostarda, pimenta, alho)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "especiarias", prep: "a gosto (grãos de mostarda, pimenta, alho)", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Pese o vegetal e calcule o sal na proporção de 2% do peso (ex: 500 g de vegetal = 10 g de sal).",
      "Misture o vegetal com o sal numa tigela grande, amassando e espremendo com as mãos por alguns minutos até começar a soltar líquido naturalmente.",
      "Transfira para um pote de vidro limpo, pressionando bem para eliminar bolhas de ar e para que o líquido solte cubra completamente o vegetal.",
      "Se necessário, use um peso (um saquinho com água, ou uma pedra de fermentação) para manter o vegetal totalmente submerso no próprio líquido.",
      "Cubra o pote com um pano ou tampa frouxa (para permitir a saída de gases sem deixar entrar contaminantes) e deixe em temperatura ambiente, longe de luz direta, por 3 a 14 dias.",
      "Prove a cada 2-3 dias — quando atingir a acidez desejada (mais ácido quanto mais tempo fermentar), transfira para a geladeira, que desacelera bastante a fermentação.",
      "Guarda-se na geladeira, já fermentado, por vários meses."
    ],
    tips: [
      "O vegetal precisa ficar sempre submerso no próprio líquido — exposição ao ar favorece mofo; use um peso se necessário para garantir isso.",
      "Bolhinhas subindo no pote e um cheiro azedo (não podre) são sinais de fermentação saudável acontecendo — é o processo funcionando corretamente.",
      "Diferente do pickle rápido (com vinagre), aqui a acidez é criada naturalmente pelas bactérias lácticas — resulta num sabor mais complexo e com benefícios probióticos."
    ]
  },
];
