// CLÁSSICOS CONTEMPORÂNEOS — técnicas e componentes de alta gastronomia moderna,
// cada um pensado como um elemento para compor pratos autorais
window.RECIPES = window.RECIPES || {};
window.RECIPES["contemporaneos"] = [

  // ===================== ÁGUAS E CONSOMMÉS =====================
  {
    name: "Água de Tomate",
    subgroup: "Águas e Consommés",
    desc: "Técnica de coar polpa de tomate crua por gravidade, sem espremer, obtendo um líquido translúcido e puro para consommês e caldos elegantes.",
    origin: "Gastronomia contemporânea",
    time: { prep: "15 min + 12h coando", cook: "0 min", total: "≈12h15" },
    yield: "≈500 ml",
    difficulty: "Fácil (exige paciência)",
    tags: ["format:tecnica", "ingredient:tomate"],
    ingredients: [
      "1,5 kg de tomate bem maduro, picado grosseiramente",
      "1 pitada de sal",
      "Ervas frescas a gosto (manjericão, para aromatizar, opcional)"
    ],
    ingredientsStructured: [
      {
        raw: "1,5 kg de tomate bem maduro, picado grosseiramente",
        group: null,
        items: [
          { qty: 1.5, qtyRange: null, unit: "quilograma", item: "tomate bem maduro", prep: "picado grosseiramente", alt: null, optional: false, isReference: false },
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
        raw: "Ervas frescas a gosto (manjericão, para aromatizar, opcional)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "ervas frescas", prep: "a gosto (manjericão, para aromatizar)", alt: null, optional: true, isReference: false },
        ],
      },
    ],
    steps: [
      "Bata o tomate picado no liquidificador com o sal (e ervas, se usar) até formar uma polpa bem líquida.",
      "Forre uma peneira grande com um pano de algodão limpo (ou filtro de café/voile) e posicione sobre uma tigela funda.",
      "Despeje a polpa de tomate no pano e deixe escorrer naturalmente, sem espremer ou pressionar, na geladeira, por 8-12 horas (ou durante a noite).",
      "O líquido claro e translúcido que escorre é a água de tomate; a polpa que sobra no pano pode ser usada para outros preparos (molhos, sopas).",
      "Ajuste o sal da água de tomate coada antes de usar."
    ],
    tips: [
      "Nunca esprema o pano — pressionar força a polpa a passar, deixando o líquido turvo. A paciência da gravidade é o que garante a transparência.",
      "Use tomates bem maduros e doces no pico da estação — é o único ingrediente que define o sabor.",
      "Serve como base de consommês vegetais, gaspachos elegantes, ou como 'caldo' translúcido para pratos de peixe e vieiras."
    ]
  },
  {
    name: "Consommé Gelificado",
    subgroup: "Águas e Consommés",
    desc: "Técnica que transforma um consommê ou água de tomate em cubos ou blocos gelatinosos translúcidos, para dar textura surpresa a pratos frios.",
    origin: "Gastronomia contemporânea",
    time: { prep: "10 min + 3h geladeira", cook: "10 min", total: "≈3h20" },
    yield: "4 porções pequenas",
    difficulty: "Média",
    tags: ["format:componente"],
    ingredients: [
      "500 ml de consommé clarificado (ver receita Consommé, em Sopas) ou água de tomate",
      "4 g de folhas de gelatina (ou 2 g de ágar-ágar para versão que segura em temperatura ambiente)",
      "Sal a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "500 ml de consommé clarificado (ver receita Consommé, em Sopas) ou água de tomate",
        group: null,
        items: [
          { qty: 500, qtyRange: null, unit: "mililitro", item: "consommé clarificado", prep: "ver receita consommé, em sopas", alt: "água de tomate", optional: false, isReference: true },
        ],
      },
      {
        raw: "4 g de folhas de gelatina (ou 2 g de ágar-ágar para versão que segura em temperatura ambiente)",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: "grama", item: "folhas de gelatina", prep: null, alt: "2 g de ágar-ágar para versão que segura em temperatura ambiente", optional: false, isReference: false },
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
      "Se for usar gelatina em folha, hidrate em água fria por 5-10 minutos.",
      "Aqueça uma parte do consommé até quase ferver e dissolva a gelatina escorrida (ou o ágar-ágar, fervendo por 1-2 minutos se for esse o caso).",
      "Misture com o restante do consommé frio, ajuste o sal.",
      "Despeje numa forma rasa (para cortar em cubos) ou em formas individuais.",
      "Leve à geladeira por no mínimo 3 horas, até firmar completamente.",
      "Corte em cubos delicados com uma faca quente (mergulhada em água quente) ou desenforme inteiro para usar como base de um prato."
    ],
    tips: [
      "Ágar-ágar tem a vantagem de permanecer firme em temperatura ambiente (diferente da gelatina, que derrete com o calor) — ideal se o prato for servido fora da geladeira.",
      "Use como elemento de textura surpresa em pratos frios: cubos translúcidos de consommê que 'explodem' sabor ao morder.",
      "Técnica clássica da 'gastronomia molecular' dos anos 2000, hoje incorporada ao repertório comum de restaurantes contemporâneos."
    ]
  },

  // ===================== ESPUMAS =====================
  {
    name: "Espuma com Sifão",
    subgroup: "Espumas",
    desc: "Técnica de gastronomia molecular que transforma um líquido saborizado em espuma leve e aerada usando sifão e gás, para finalizar pratos.",
    origin: "Gastronomia contemporânea (elBulli)",
    time: { prep: "15 min + 2h gelando", cook: "5 min", total: "≈2h20" },
    yield: "≈500 ml de espuma",
    difficulty: "Média (exige sifão)",
    tags: ["format:tecnica"],
    ingredients: [
      "400 ml de base líquida saborizada (purê de legume coado, caldo encorpado, ou creme)",
      "2 folhas de gelatina (4 g) hidratadas, ou 4 g de lecitina de soja (para versões sem gelatina)",
      "100 ml de creme de leite fresco (opcional, para espumas mais densas)",
      "Sal a gosto",
      "1 sifão de cozinha + 1-2 cápsulas de N2O"
    ],
    ingredientsStructured: [
      {
        raw: "400 ml de base líquida saborizada (purê de legume coado, caldo encorpado, ou creme)",
        group: null,
        items: [
          { qty: 400, qtyRange: null, unit: "mililitro", item: "base líquida saborizada", prep: "purê de legume coado, caldo encorpado, ou creme", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 folhas de gelatina (4 g) hidratadas, ou 4 g de lecitina de soja (para versões sem gelatina)",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "folha", item: "gelatina", prep: "(4 g) hidratadas", alt: "4 g de lecitina de soja (para versões sem gelatina)", optional: false, isReference: false },
        ],
      },
      {
        raw: "100 ml de creme de leite fresco (opcional, para espumas mais densas)",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "mililitro", item: "creme de leite fresco", prep: "para espumas mais densas", alt: null, optional: true, isReference: false },
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
        raw: "1 sifão de cozinha + 1-2 cápsulas de N2O",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "sifão de cozinha", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: [1, 2], unit: null, item: "cápsulas de n2o", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Aqueça uma parte da base líquida e dissolva a gelatina hidratada e escorrida (pule esta etapa se for usar lecitina).",
      "Misture com o restante da base, o creme de leite (se usar) e ajuste o sal. A mistura deve estar bem temperada, já que a espuma dilui a percepção de sabor.",
      "Coe a mistura numa peneira bem fina para remover qualquer partícula sólida (essencial para não entupir o bico do sifão).",
      "Despeje no sifão (sem passar da marca máxima indicada), feche bem e carregue com 1-2 cápsulas de N2O, agitando vigorosamente entre cada carga.",
      "Leve à geladeira por no mínimo 2 horas (o sifão deitado ou em pé, conforme o modelo) para a base firmar levemente antes de usar.",
      "Agite bem antes de servir e disparo a espuma diretamente sobre o prato."
    ],
    tips: [
      "A base precisa estar bem coada e sem pedaços — qualquer resíduo sólido entope o mecanismo do sifão.",
      "Espumas à base de gelatina precisam ficar geladas para funcionar; à base de lecitina funcionam mesmo em temperatura ambiente ou morna.",
      "Tempere a base mais forte do que o normal — o ar incorporado na espuma 'dilui' a intensidade do sabor percebido."
    ]
  },
  {
    name: "Espuma sem Sifão",
    subgroup: "Espumas",
    desc: "Versão caseira da espuma culinária, feita batendo um líquido com lecitina de soja e um mixer de mão, para uso imediato.",
    origin: "Gastronomia contemporânea",
    time: { prep: "15 min", cook: "5 min", total: "20 min" },
    yield: "≈300 ml de espuma",
    difficulty: "Fácil",
    tags: ["format:tecnica"],
    ingredients: [
      "300 ml de base líquida saborizada (caldo, purê coado ou suco de fruta)",
      "3 g de lecitina de soja em pó",
      "Sal a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "300 ml de base líquida saborizada (caldo, purê coado ou suco de fruta)",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "mililitro", item: "base líquida saborizada", prep: "caldo, purê coado ou suco de fruta", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "3 g de lecitina de soja em pó",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: "grama", item: "lecitina de soja em pó", prep: null, alt: null, optional: false, isReference: false },
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
      "Tempere bem a base líquida e certifique-se de que está coada, sem partículas sólidas.",
      "Dissolva a lecitina de soja na base líquida em temperatura ambiente, misturando bem com um fouet.",
      "Na hora de servir, mergulhe um mixer de mão (só a parte inferior, próxima à superfície) na mistura e bata em alta velocidade por 20-30 segundos, inclinando levemente para incorporar ar.",
      "A espuma vai se formar e flutuar na superfície — colha com uma colher perfurada ou concha, deixando o excesso de líquido escorrer.",
      "Use imediatamente sobre o prato, já que a espuma sem sifão dura pouco tempo (5-10 minutos) antes de desmanchar."
    ],
    tips: [
      "É a alternativa caseira ao sifão — mais instável e de vida mais curta, mas funciona bem para servir imediatamente.",
      "A lecitina de soja é o agente espumante: funciona melhor em líquidos com um pouco de acidez ou gordura.",
      "Faça só na hora de servir — essa espuma não segura tempo como a feita com sifão e gelatina."
    ]
  },

  // ===================== PURÊS E CREMES =====================
  {
    name: "Purê Ultra Liso",
    subgroup: "Purês e Cremes",
    desc: "Técnica francesa de bater um vegetal cozido com manteiga gelada e passar por peneira fina, resultando num purê de textura aveludada.",
    origin: "Gastronomia contemporânea (técnica francesa refinada)",
    time: { prep: "10 min", cook: "20 min", total: "30 min" },
    yield: "≈400 ml",
    difficulty: "Média",
    tags: ["format:componente", "diet:vegetariana"],
    ingredients: [
      "500 g do vegetal escolhido (batata, couve-flor, ervilha, cenoura, aipo-rábano), descascado e picado",
      "100 ml de creme de leite fresco (ou caldo, para versão mais leve)",
      "80 g de manteiga gelada, em cubos",
      "Sal a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "500 g do vegetal escolhido (batata, couve-flor, ervilha, cenoura, aipo-rábano), descascado e picado",
        group: null,
        items: [
          { qty: 500, qtyRange: null, unit: "grama", item: "vegetal escolhido", prep: "batata, couve-flor, ervilha, cenoura, aipo-rábano, descascado e picado", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "100 ml de creme de leite fresco (ou caldo, para versão mais leve)",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "mililitro", item: "creme de leite fresco", prep: null, alt: "caldo, para versão mais leve", optional: false, isReference: false },
        ],
      },
      {
        raw: "80 g de manteiga gelada, em cubos",
        group: null,
        items: [
          { qty: 80, qtyRange: null, unit: "grama", item: "manteiga gelada", prep: "em cubos", alt: null, optional: false, isReference: false },
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
      "Cozinhe o vegetal em água salgada (ou no vapor) até ficar bem macio — o ponto de cozimento total é essencial para a liquidificação perfeita.",
      "Escorra muito bem, sem deixar excesso de água (o vegetal deve estar praticamente seco).",
      "Transfira ainda quente para um liquidificador de alta potência (ou processador). Bata com o creme de leite (ou caldo) até começar a formar um purê.",
      "Com o liquidificador em velocidade alta, adicione a manteiga gelada aos poucos, um cubo de cada vez, batendo até incorporar completamente.",
      "Continue batendo por 2-3 minutos além do que parece necessário — é esse tempo extra que rompe as fibras e cria a textura de veludo característica.",
      "Passe por uma peneira fina (tamis), pressionando com uma espátula ou concha, para remover qualquer fibra residual.",
      "Ajuste o sal e sirva morno."
    ],
    tips: [
      "A peneira fina no final não é opcional — é o que separa um purê 'ultra liso' de restaurante de um purê caseiro comum.",
      "Bater além do tempo que parece necessário, e sempre com o vegetal bem quente, é o que ativa a textura sedosa.",
      "Vegetais com mais amido (batata) pedem menos tempo de liquidificação — bater batata demais pode deixá-la elástica e 'engomada'; já vegetais fibrosos (aipo-rábano, couve-flor) toleram bater bem mais."
    ]
  },

  // ===================== GÉIS =====================
  {
    name: "Gel de Frutas Cítricas",
    subgroup: "Géis",
    desc: "Suco cítrico gelificado com ágar-ágar e batido até virar um gel liso e brilhante, usado em pontos decorativos ácidos sobre o prato.",
    origin: "Gastronomia contemporânea",
    time: { prep: "10 min", cook: "5 min", total: "15 min + gelar" },
    yield: "≈200 ml",
    difficulty: "Fácil",
    tags: ["format:componente", "diet:vegetariana", "ingredient:limao"],
    ingredients: [
      "200 ml de suco cítrico fresco (limão, laranja ou uma mistura)",
      "40 g de açúcar (ajustar conforme a acidez da fruta)",
      "2 g de ágar-ágar"
    ],
    ingredientsStructured: [
      {
        raw: "200 ml de suco cítrico fresco (limão, laranja ou uma mistura)",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "mililitro", item: "suco cítrico fresco", prep: "limão, laranja ou uma mistura", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "40 g de açúcar (ajustar conforme a acidez da fruta)",
        group: null,
        items: [
          { qty: 40, qtyRange: null, unit: "grama", item: "açúcar (ajustar conforme a acidez da fruta)", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 g de ágar-ágar",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "grama", item: "ágar-ágar", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Misture o suco cítrico com o açúcar e o ágar-ágar numa panela pequena, mexendo bem para dissolver o ágar.",
      "Leve ao fogo médio e deixe ferver por 1-2 minutos, mexendo sempre (o ágar precisa ferver para ativar).",
      "Despeje numa forma rasa e deixe firmar em temperatura ambiente (o ágar gelifica mesmo fora da geladeira) por 15-20 minutos.",
      "Bata o gel firme no liquidificador ou processador até ficar completamente liso e brilhante, formando uma textura de gel macio (não líquido).",
      "Transfira para um saco de confeitar ou pote com bico, e use em pontos decorativos sobre o prato."
    ],
    tips: [
      "Ágar-ágar (diferente da gelatina) precisa ferver para ativar e gelifica em temperatura ambiente — ideal para pratos que não vão à geladeira antes de servir.",
      "Bater o gel já firme quebra a estrutura rígida do ágar e cria uma textura de gel fluido e brilhante, muito usada como 'pontos' decorativos em pratos autorais.",
      "Funciona muito bem com peixes, carpaccios e sobremesas leves — o toque ácido equilibra pratos gordurosos."
    ]
  },
  {
    name: "Gel de Vinho",
    subgroup: "Géis",
    desc: "Vinho reduzido e gelificado com ágar-ágar, batido até virar um gel liso e brilhante, usado como acompanhamento de carnes e queijos.",
    origin: "Gastronomia contemporânea",
    time: { prep: "10 min", cook: "15 min", total: "25 min + gelar" },
    yield: "≈200 ml",
    difficulty: "Fácil",
    tags: ["format:componente", "diet:vegetariana", "ingredient:vinho"],
    ingredients: [
      "300 ml de vinho tinto (ou branco) encorpado",
      "30 g de açúcar",
      "2 g de ágar-ágar"
    ],
    ingredientsStructured: [
      {
        raw: "300 ml de vinho tinto (ou branco) encorpado",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "mililitro", item: "vinho tinto", prep: "encorpado", alt: "branco", optional: false, isReference: false },
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
        raw: "2 g de ágar-ágar",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "grama", item: "ágar-ágar", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Reduza o vinho em fogo médio até restar cerca de 200 ml, para concentrar o sabor.",
      "Junte o açúcar e o ágar-ágar, mexendo bem para dissolver.",
      "Deixe ferver por 1-2 minutos, mexendo sempre.",
      "Despeje numa forma rasa e deixe firmar em temperatura ambiente por 15-20 minutos.",
      "Bata no liquidificador até ficar liso e brilhante.",
      "Transfira para um pote ou saco de confeitar e use como acompanhamento de carnes ou queijos."
    ],
    tips: [
      "Reduzir o vinho antes de gelificar concentra o sabor — sem essa etapa, o gel fica com gosto fraco e aguado.",
      "Combina muito bem com carnes vermelhas grelhadas e queijos maduros, como uma versão moderna de uma calda de vinho.",
      "Pode ser feito com vinho do Porto para uma versão mais adocicada, reduzindo a quantidade de açúcar adicional."
    ]
  },
  {
    name: "Gel de Ervas",
    subgroup: "Géis",
    desc: "Ervas frescas branqueadas, batidas e gelificadas com ágar-ágar, formando um gel verde vibrante para dar frescor herbáceo a pratos de peixe e carne.",
    origin: "Gastronomia contemporânea",
    time: { prep: "15 min", cook: "5 min", total: "20 min + gelar" },
    yield: "≈150 ml",
    difficulty: "Média",
    tags: ["format:componente", "diet:vegetariana"],
    ingredients: [
      "100 g de folhas de ervas frescas (manjericão, salsinha, coentro ou uma mistura), sem talos grossos",
      "150 ml de água",
      "1 pitada de sal",
      "2 g de ágar-ágar"
    ],
    ingredientsStructured: [
      {
        raw: "100 g de folhas de ervas frescas (manjericão, salsinha, coentro ou uma mistura), sem talos grossos",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "grama", item: "folhas de ervas frescas", prep: "manjericão, salsinha, coentro ou uma mistura, sem talos grossos", alt: null, optional: false, isReference: false },
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
        raw: "1 pitada de sal",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "pitada", item: "sal", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 g de ágar-ágar",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "grama", item: "ágar-ágar", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Branqueie as ervas: mergulhe em água fervente por 10-15 segundos, depois transfira imediatamente para água com gelo — isso fixa a cor verde vibrante.",
      "Escorra bem e bata as ervas com a água e o sal no liquidificador até ficar bem liso.",
      "Coe essa mistura numa peneira fina para remover fibras.",
      "Leve o líquido coado ao fogo com o ágar-ágar, mexendo até dissolver, e deixe ferver por 1-2 minutos.",
      "Despeje numa forma rasa e deixe firmar em temperatura ambiente.",
      "Bata o gel firme no liquidificador até ficar liso e brilhante. Use em pontos ou traços sobre o prato."
    ],
    tips: [
      "O branqueamento rápido seguido de choque de gelo é o que preserva a cor verde vibrante — sem esse passo, o gel fica com uma cor opaca e amarronzada.",
      "Ótimo para dar um toque de frescor herbáceo em pratos de peixe, carnes brancas ou como decoração de sopas frias.",
      "Pode substituir as ervas por espinafre ou agrião para uma versão com sabor mais suave."
    ]
  },

  // ===================== CROCANTES =====================
  {
    name: "Tuile",
    subgroup: "Crocantes",
    desc: "Massa fina (doce ou de parmesão) assada até dourar e moldada ainda quente, criando um crocante decorativo fino e quebradiço.",
    origin: "França",
    time: { prep: "10 min", cook: "8 min", total: "18 min" },
    yield: "≈15 unidades",
    difficulty: "Média",
    tags: ["format:componente", "diet:vegetariana"],
    ingredients: [
      "50 g de manteiga derretida",
      "50 g de açúcar de confeiteiro (para versão doce) ou queijo parmesão ralado (para versão salgada)",
      "50 g de farinha de trigo (ou farinha de amêndoas, para versão sem glúten) — pular na versão de queijo puro",
      "2 claras de ovo (só para a versão doce)"
    ],
    ingredientsStructured: [
      {
        raw: "50 g de manteiga derretida",
        group: null,
        items: [
          { qty: 50, qtyRange: null, unit: "grama", item: "manteiga", prep: "derretida", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "50 g de açúcar de confeiteiro (para versão doce) ou queijo parmesão ralado (para versão salgada)",
        group: null,
        items: [
          { qty: 50, qtyRange: null, unit: "grama", item: "açúcar de confeiteiro (para versão doce)", prep: null, alt: "queijo parmesão ralado (para versão salgada)", optional: false, isReference: false },
        ],
      },
      {
        raw: "50 g de farinha de trigo (ou farinha de amêndoas, para versão sem glúten) — pular na versão de queijo puro",
        group: null,
        items: [
          { qty: 50, qtyRange: null, unit: "grama", item: "farinha de trigo", prep: "pular na versão de queijo puro", alt: "farinha de amêndoas, para versão sem glúten", optional: false, isReference: false },
        ],
      },
      {
        raw: "2 claras de ovo (só para a versão doce)",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "claras de ovo (só para a versão doce)", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Para a versão doce: misture a manteiga derretida, açúcar de confeiteiro, farinha e claras até formar uma pasta lisa e homogênea.",
      "Para a versão salgada de queijo: simplesmente disponha montinhos finos de parmesão ralado direto na assadeira, sem outros ingredientes.",
      "Com uma espátula, espalhe a massa (ou o queijo) em camadas bem finas e uniformes sobre um tapete de silicone ou papel manteiga, em formatos livres ou usando um molde vazado (stencil) para formas precisas.",
      "Asse a 170-180°C por 5-8 minutos, até dourar nas bordas (ou o queijo derreter e dourar).",
      "Retire do forno e, ainda quente e maleável, molde sobre um rolo, forma curva ou deixe plano, conforme o efeito desejado — a tuile endurece rapidamente ao esfriar.",
      "Guarde em recipiente hermético, longe de umidade, até a hora de usar."
    ],
    tips: [
      "Trabalhe rápido enquanto a tuile ainda está quente e maleável — ela endurece em segundos ao esfriar e quebra se tentar moldar depois.",
      "Um molde vazado (stencil de silicone ou plástico) garante formas idênticas e profissionais, essencial para pratos com apresentação precisa.",
      "A versão de parmesão puro (sem massa) é chamada de 'tuile de queijo' ou 'florentine' e é ainda mais simples de fazer."
    ]
  },
  {
    name: "Chips de Vegetais",
    subgroup: "Crocantes",
    desc: "Fatias finíssimas de vegetal assadas ou fritas até crocantes, usadas para dar altura e textura a saladas, purês e pratos de carne.",
    origin: "Gastronomia contemporânea",
    time: { prep: "15 min", cook: "15 min", total: "30 min" },
    yield: "1 porção generosa",
    difficulty: "Fácil",
    tags: ["format:componente", "diet:vegetariana"],
    ingredients: [
      "1 vegetal de sua escolha (beterraba, cenoura, batata-doce, aipim), fatiado bem fino numa mandolina",
      "Azeite de oliva ou óleo neutro",
      "Sal a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "1 vegetal de sua escolha (beterraba, cenoura, batata-doce, aipim), fatiado bem fino numa mandolina",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "vegetal de sua escolha", prep: "beterraba, cenoura, batata-doce, aipim, fatiado bem fino numa mandolina", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Azeite de oliva ou óleo neutro",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "azeite de oliva", prep: null, alt: "óleo neutro", optional: false, isReference: false },
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
      "Fatie o vegetal bem fino e uniforme numa mandolina (essencial para um cozimento parelho).",
      "Seque bem as fatias com papel toalha, removendo o excesso de umidade.",
      "Disponha numa assadeira forrada, sem sobrepor, e pincele levemente com azeite dos dois lados.",
      "Asse a 150°C por 12-18 minutos (o tempo varia bastante conforme o vegetal e a espessura), virando na metade do tempo, até dourarem e ficarem crocantes.",
      "Alternativa: frite rapidamente em óleo quente (170°C) até dourar, escorrendo bem em papel toalha.",
      "Tempere com sal assim que saírem do forno/óleo, ainda quentes. Deixe esfriar completamente antes de guardar — ficam ainda mais crocantes ao esfriar."
    ],
    tips: [
      "Fatias de espessura uniforme (mandolina, não faca) são essenciais para que todas assem/fritem no mesmo ritmo.",
      "Vegetais com mais amido (batata-doce, aipim) tendem a dar chips mais crocantes que vegetais com mais água (abobrinha).",
      "Ótimo para dar altura e textura crocante a saladas, purês e pratos de peixe ou carne."
    ]
  },
  {
    name: "Crosta de Ervas",
    subgroup: "Crocantes",
    desc: "Pasta de farinha de rosca, manteiga e ervas, congelada e cortada sob medida para gratinar em cima de carnes e peixes nos minutos finais de forno.",
    origin: "Gastronomia contemporânea",
    time: { prep: "10 min", cook: "0 min (crua) ou 10 min (tostada)", total: "10-20 min" },
    yield: "Para cobrir 1 peça de carne média",
    difficulty: "Fácil",
    tags: ["format:componente"],
    ingredients: [
      "100 g de farinha de rosca (ou pão amanhecido processado)",
      "30 g de manteiga em temperatura ambiente",
      "3 colheres (sopa) de ervas frescas picadas (salsinha, tomilho, alecrim)",
      "2 dentes de alho picados",
      "Raspas de limão (opcional)",
      "Sal e pimenta a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "100 g de farinha de rosca (ou pão amanhecido processado)",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "grama", item: "farinha de rosca", prep: null, alt: "pão amanhecido processado", optional: false, isReference: false },
        ],
      },
      {
        raw: "30 g de manteiga em temperatura ambiente",
        group: null,
        items: [
          { qty: 30, qtyRange: null, unit: "grama", item: "manteiga", prep: "em temperatura ambiente", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "3 colheres (sopa) de ervas frescas picadas (salsinha, tomilho, alecrim)",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: "colher-sopa", item: "ervas frescas", prep: "picadas (salsinha, tomilho, alecrim)", alt: null, optional: false, isReference: false },
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
        raw: "Raspas de limão (opcional)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "raspas de limão", prep: null, alt: null, optional: true, isReference: false },
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
      "Misture a farinha de rosca com a manteiga amolecida, ervas picadas, alho, raspas de limão, sal e pimenta até formar uma pasta úmida e uniforme.",
      "Abra a mistura entre duas folhas de papel manteiga com um rolo, formando uma camada fina e uniforme.",
      "Leve ao congelador por 10-15 minutos, até firmar — isso facilita cortar no tamanho exato da peça de carne.",
      "Corte um pedaço do tamanho da superfície da carne (já selada e temperada) e pressione delicadamente por cima.",
      "Leve ao forno junto com a carne nos minutos finais de cozimento (ou sob o grill), só até a crosta dourar por cima, sem ressecar a carne por dentro."
    ],
    tips: [
      "Firmar a crosta no congelador antes de aplicar facilita muito o manuseio e garante uma camada uniforme.",
      "Aplique a crosta só nos últimos minutos de forno — tempo demais resseca tanto a crosta quanto a carne por baixo.",
      "Clássica em cortes de cordeiro (carré) e peixes nobres como salmão ou robalo."
    ]
  },
  {
    name: "Farofa de Castanhas",
    subgroup: "Crocantes",
    desc: "Farofa de mandioca tostada com manteiga, échalote e castanhas picadas, usada para dar crocância e um toque brasileiro a carnes e peixes.",
    origin: "Brasil (técnica contemporânea)",
    time: { prep: "10 min", cook: "12 min", total: "22 min" },
    yield: "≈200 g",
    difficulty: "Fácil",
    tags: ["format:componente", "diet:vegetariana", "ingredient:castanha", "ingredient:mandioca"],
    ingredients: [
      "150 g de farinha de mandioca crua",
      "80 g de castanha-do-pará (ou castanha de caju, amêndoas), picada grosseiramente",
      "50 g de manteiga",
      "1 cebola pequena picada bem fina",
      "Sal a gosto",
      "Ervas frescas picadas (opcional)"
    ],
    ingredientsStructured: [
      {
        raw: "150 g de farinha de mandioca crua",
        group: null,
        items: [
          { qty: 150, qtyRange: null, unit: "grama", item: "farinha de mandioca crua", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "80 g de castanha-do-pará (ou castanha de caju, amêndoas), picada grosseiramente",
        group: null,
        items: [
          { qty: 80, qtyRange: null, unit: "grama", item: "castanha-do-pará", prep: "picada grosseiramente", alt: "castanha de caju, amêndoas", optional: false, isReference: false },
        ],
      },
      {
        raw: "50 g de manteiga",
        group: null,
        items: [
          { qty: 50, qtyRange: null, unit: "grama", item: "manteiga", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 cebola pequena picada bem fina",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cebola pequena", prep: "picada bem fina", alt: null, optional: false, isReference: false },
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
        raw: "Ervas frescas picadas (opcional)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "ervas frescas", prep: "picadas", alt: null, optional: true, isReference: false },
        ],
      },
    ],
    steps: [
      "Toste levemente as castanhas picadas numa frigideira seca, em fogo médio, por 3-4 minutos, até perfumarem. Reserve.",
      "Na mesma frigideira, derreta a manteiga e refogue a cebola até dourar levemente.",
      "Adicione a farinha de mandioca aos poucos, mexendo sempre, até dourar por igual e ficar crocante, 6-8 minutos.",
      "Volte as castanhas tostadas à farofa, misture bem, tempere com sal.",
      "Finalize com ervas frescas picadas, se desejar. Sirva morna ou em temperatura ambiente, polvilhada sobre o prato."
    ],
    tips: [
      "Mexer sem parar enquanto a farinha doura evita que queime em pontos e fique amarga.",
      "Usar castanhas do Brasil (ou outra oleaginosa) eleva a clássica farofa brasileira a um componente de textura sofisticado em pratos autorais.",
      "Ótima para finalizar carnes assadas, peixes ou até saladas quentes, dando crocância e um toque brasileiro contemporâneo."
    ]
  },
  {
    name: "Crumble Salgado",
    subgroup: "Crocantes",
    desc: "Farofa quebradiça de farinha, manteiga gelada e queijo curado assada no forno, usada para dar crocância a saladas, sopas e purês.",
    origin: "Gastronomia contemporânea",
    time: { prep: "10 min + 30 min geladeira", cook: "15 min", total: "≈55 min" },
    yield: "≈200 g",
    difficulty: "Fácil",
    tags: ["format:componente", "diet:vegetariana", "ingredient:queijo"],
    ingredients: [
      "100 g de farinha de trigo",
      "80 g de manteiga gelada, em cubos",
      "50 g de parmesão ralado (ou outro queijo curado)",
      "1 pitada de sal e pimenta",
      "Ervas secas a gosto (opcional: tomilho, páprica)"
    ],
    ingredientsStructured: [
      {
        raw: "100 g de farinha de trigo",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "grama", item: "farinha de trigo", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "80 g de manteiga gelada, em cubos",
        group: null,
        items: [
          { qty: 80, qtyRange: null, unit: "grama", item: "manteiga gelada", prep: "em cubos", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "50 g de parmesão ralado (ou outro queijo curado)",
        group: null,
        items: [
          { qty: 50, qtyRange: null, unit: "grama", item: "parmesão", prep: "ralado", alt: "outro queijo curado", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 pitada de sal e pimenta",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "pitada", item: "sal e pimenta", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Ervas secas a gosto (opcional: tomilho, páprica)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "ervas secas", prep: "a gosto (tomilho, páprica)", alt: null, optional: true, isReference: false },
        ],
      },
    ],
    steps: [
      "Misture a farinha, o queijo ralado, sal, pimenta e ervas numa tigela.",
      "Adicione a manteiga gelada em cubos e trabalhe com as pontas dos dedos (ou um garfo) até formar uma farofa grossa e irregular, com pedaços do tamanho de ervilhas.",
      "Leve à geladeira por 30 minutos para firmar bem a manteiga.",
      "Espalhe a farofa numa assadeira forrada, sem compactar, deixando espaços entre os grumos.",
      "Asse a 180°C por 12-15 minutos, mexendo na metade do tempo, até dourar por igual e ficar crocante.",
      "Deixe esfriar completamente antes de guardar ou usar — fica ainda mais crocante ao esfriar."
    ],
    tips: [
      "Não processe a mistura demais — os pedaços irregulares de manteiga são o que criam a textura crocante e quebradiça característica do crumble.",
      "Versão salgada do clássico crumble de sobremesa, usada para dar crocância a saladas, sopas cremosas, purês e carnes.",
      "Guarda-se bem em recipiente hermético por até uma semana, em temperatura ambiente."
    ]
  },

  // ===================== ÓLEOS, MOLHOS E EMULSÕES =====================
  {
    name: "Óleo Aromático",
    subgroup: "Óleos, Molhos e Emulsões",
    desc: "Óleo batido com ervas frescas ou especiarias e coado até ficar limpo e vibrante, usado para 'pintar' traços de cor e sabor nos pratos.",
    origin: "Gastronomia contemporânea",
    time: { prep: "5 min", cook: "5 min", total: "10 min + descansar" },
    yield: "≈150 ml",
    difficulty: "Fácil",
    tags: ["format:base", "diet:vegetariana"],
    ingredients: [
      "150 ml de azeite de oliva (ou óleo neutro, conforme o uso)",
      "30 g de ervas frescas (manjericão, salsinha, coentro) ou especiarias (páprica, açafrão)",
      "1 pitada de sal"
    ],
    ingredientsStructured: [
      {
        raw: "150 ml de azeite de oliva (ou óleo neutro, conforme o uso)",
        group: null,
        items: [
          { qty: 150, qtyRange: null, unit: "mililitro", item: "azeite de oliva", prep: null, alt: "óleo neutro, conforme o uso", optional: false, isReference: false },
        ],
      },
      {
        raw: "30 g de ervas frescas (manjericão, salsinha, coentro) ou especiarias (páprica, açafrão)",
        group: null,
        items: [
          { qty: 30, qtyRange: null, unit: "grama", item: "ervas frescas (manjericão, salsinha, coentro)", prep: null, alt: "especiarias (páprica, açafrão)", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 pitada de sal",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "pitada", item: "sal", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Para óleo de ervas frescas: branqueie as ervas em água fervente por 10 segundos, choque em água gelada, escorra e seque muito bem.",
      "Bata as ervas com o azeite no liquidificador em velocidade alta por 2-3 minutos, até ficar bem verde e homogêneo (o atrito esquenta levemente a mistura, o que é normal).",
      "Coe através de um filtro de café ou pano fino, sem espremer, deixando descansar na geladeira por algumas horas para clarificar.",
      "Para óleo de especiarias: aqueça o óleo em fogo baixo com a especiaria por 5 minutos, sem ferver, depois desligue e deixe em infusão por 30 minutos antes de coar.",
      "Guarde em um vidro ou bisnaga, na geladeira, por até 1 semana."
    ],
    tips: [
      "Secar muito bem as ervas antes de bater é importante — água residual faz o óleo talhar ou estragar mais rápido.",
      "Coar sem espremer, deixando a gravidade fazer o trabalho, resulta num óleo mais limpo e vibrante.",
      "Use para 'pintar' pratos com traços de cor e sabor concentrado — um clássico visual da gastronomia contemporânea."
    ]
  },
  {
    name: "Vinagrete Moderno",
    subgroup: "Óleos, Molhos e Emulsões",
    desc: "Emulsão de azeite, ácido e mostarda em proporções ajustáveis, batida até engrossar levemente — a base flexível para molhos de salada contemporâneos.",
    origin: "Gastronomia contemporânea",
    time: { prep: "10 min", cook: "0 min", total: "10 min" },
    yield: "≈200 ml",
    difficulty: "Fácil",
    tags: ["format:molho", "diet:vegetariana"],
    ingredients: [
      "3 partes de azeite de oliva extra virgem",
      "1 parte de ácido (vinagre balsâmico, vinagre de xerez ou suco cítrico)",
      "1 colher (chá) de mostarda Dijon (agente emulsificante)",
      "1 cebola picada bem fina (opcional)",
      "Sal, pimenta e ervas frescas picadas a gosto",
      "1 fio de mel ou xarope (opcional, para equilibrar acidez)"
    ],
    ingredientsStructured: [
      {
        raw: "3 partes de azeite de oliva extra virgem",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: null, item: "partes de azeite de oliva extra virgem", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 parte de ácido (vinagre balsâmico, vinagre de xerez ou suco cítrico)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "parte de ácido", prep: "vinagre balsâmico, vinagre de xerez ou suco cítrico", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (chá) de mostarda Dijon (agente emulsificante)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "mostarda dijon (agente emulsificante)", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 cebola picada bem fina (opcional)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cebola", prep: "picada bem fina", alt: null, optional: true, isReference: false },
        ],
      },
      {
        raw: "Sal, pimenta e ervas frescas picadas a gosto",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "sal", prep: "a gosto", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "pimenta", prep: "a gosto", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "ervas frescas", prep: "picadas a gosto", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 fio de mel ou xarope (opcional, para equilibrar acidez)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "fio", item: "mel", prep: "para equilibrar acidez", alt: "xarope", optional: true, isReference: false },
        ],
      },
    ],
    steps: [
      "Numa tigela ou vidro com tampa, junte o ácido, a mostarda, sal e pimenta, misturando bem.",
      "Adicione o azeite aos poucos, batendo vigorosamente com um fouet (ou balançando o vidro fechado com força) até emulsionar e engrossar levemente.",
      "Junte a cebola picada, ervas e o mel, se usar.",
      "Prove e ajuste o equilíbrio entre ácido, gordura e doçura — o segredo de um vinagrete moderno é esse equilíbrio fino, não a receita fixa.",
      "Guarda-se na geladeira por até 1 semana; misture bem antes de cada uso, já que a emulsão se separa naturalmente com o tempo."
    ],
    tips: [
      "A mostarda não é só sabor — ela contém lecitina, que ajuda a estabilizar a emulsão entre óleo e vinagre por mais tempo.",
      "'Moderno' aqui significa ajustar as proporções e ingredientes ao prato específico, em vez de seguir sempre a mesma receita de vinagrete clássico.",
      "Experimente trocar o vinagre por sucos de fruta (maracujá, laranja) para vinagretes mais frutados e contemporâneos."
    ]
  },
  {
    name: "Maionese de Leite",
    subgroup: "Óleos, Molhos e Emulsões",
    desc: "Maionese sem ovo, emulsionada com leite e óleo batidos — mais leve e estável que a versão tradicional com gema.",
    origin: "Gastronomia contemporânea",
    time: { prep: "10 min", cook: "0 min", total: "10 min" },
    yield: "≈250 ml",
    difficulty: "Fácil",
    tags: ["format:molho", "diet:vegetariana"],
    ingredients: [
      "100 ml de leite integral, em temperatura ambiente",
      "300 ml de óleo neutro (girassol ou canola)",
      "1 colher (sopa) de vinagre ou suco de limão",
      "1 dente de alho pequeno (opcional)",
      "Sal a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "100 ml de leite integral, em temperatura ambiente",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "mililitro", item: "leite integral", prep: "em temperatura ambiente", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "300 ml de óleo neutro (girassol ou canola)",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "mililitro", item: "óleo neutro (girassol ou canola)", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (sopa) de vinagre ou suco de limão",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "vinagre", prep: null, alt: "suco de limão", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 dente de alho pequeno (opcional)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "dente", item: "alho pequeno", prep: null, alt: null, optional: true, isReference: false },
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
      "Coloque o leite, o vinagre, o alho (se usar) e uma pitada de sal no copo de um mixer de mão ou liquidificador.",
      "Comece a bater em velocidade baixa e vá adicionando o óleo em fio bem fino e constante, aumentando a velocidade aos poucos.",
      "Continue batendo até a mistura engrossar e emulsionar completamente, formando uma maionese lisa e estável.",
      "Ajuste o sal e a acidez a gosto.",
      "Guarde na geladeira em pote fechado por até 3-4 dias."
    ],
    tips: [
      "Essa versão sem ovo é mais leve, mais estável ao calor e tem prazo de validade mais previsível que a maionese tradicional — muito usada em restaurantes por segurança alimentar.",
      "O leite (com sua proteína e um pouco de gordura) funciona como emulsificante no lugar da gema de ovo.",
      "Pode ser aromatizada com ervas, páprica defumada ou pasta de tomate seco para variações de sabor."
    ]
  },
  {
    name: "Aioli",
    subgroup: "Óleos, Molhos e Emulsões",
    desc: "Molho emulsionado de alho amassado, gema e azeite, típico do Mediterrâneo, servido com peixes grelhados, legumes assados ou batatas.",
    origin: "Espanha / França (Mediterrâneo)",
    time: { prep: "10 min", cook: "0 min", total: "10 min" },
    yield: "≈200 ml",
    difficulty: "Média",
    tags: ["format:molho", "diet:vegetariana"],
    ingredients: [
      "4-5 dentes de alho",
      "1 pitada de sal grosso",
      "1 gema",
      "200 ml de azeite de oliva (misturado com um pouco de óleo neutro, para não ficar amargo demais)",
      "1 colher (chá) de suco de limão",
      "Sal a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "4-5 dentes de alho",
        group: null,
        items: [
          { qty: null, qtyRange: [4, 5], unit: "dente", item: "alho", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 pitada de sal grosso",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "pitada", item: "sal grosso", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 gema",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "gema", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "200 ml de azeite de oliva (misturado com um pouco de óleo neutro, para não ficar amargo demais)",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "mililitro", item: "azeite de oliva", prep: "misturado com um pouco de óleo neutro, para não ficar amargo demais", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (chá) de suco de limão",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "suco de limão", prep: null, alt: null, optional: false, isReference: false },
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
      "Amasse o alho com o sal grosso num pilão (ou rale bem fino) até formar uma pasta lisa.",
      "Transfira para uma tigela, junte a gema e misture bem.",
      "Adicione o azeite em fio bem fino, batendo sem parar com um fouet (como uma maionese), até emulsionar e engrossar.",
      "Tempere com limão e ajuste o sal.",
      "Sirva em temperatura ambiente, acompanhando peixes grelhados, legumes assados ou como molho para mergulhar batatas."
    ],
    tips: [
      "A versão tradicional catalã/provençal não leva gema (só alho, sal e azeite, emulsionados só pela força do pilão) — é mais difícil de acertar, mas essa versão com gema é mais estável e acessível para fazer em casa.",
      "Use um azeite mais suave (misturado com óleo neutro) se o azeite puro deixar o molho amargo demais ao emulsionar.",
      "Vai muito bem com a Bouillabaisse, como acompanhamento clássico do sul da França."
    ]
  },
  {
    name: "Emulsão Cítrica",
    subgroup: "Óleos, Molhos e Emulsões",
    desc: "Suco cítrico e gema emulsionados com azeite, formando um molho encorpado e ácido para peixe cru, saladas ou vieiras grelhadas.",
    origin: "Gastronomia contemporânea",
    time: { prep: "10 min", cook: "0 min", total: "10 min" },
    yield: "≈150 ml",
    difficulty: "Fácil",
    tags: ["format:molho", "diet:vegetariana", "ingredient:limao"],
    ingredients: [
      "100 ml de suco cítrico fresco (laranja, limão ou uma mistura)",
      "1 gema (ou 1 colher (sopa) de lecitina de soja, para versão vegana)",
      "100 ml de azeite de oliva leve",
      "Sal a gosto",
      "Raspas da fruta cítrica usada"
    ],
    ingredientsStructured: [
      {
        raw: "100 ml de suco cítrico fresco (laranja, limão ou uma mistura)",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "mililitro", item: "suco cítrico fresco", prep: "laranja, limão ou uma mistura", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 gema (ou 1 colher (sopa) de lecitina de soja, para versão vegana)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "gema", prep: null, alt: "1 colher (sopa) de lecitina de soja, para versão vegana", optional: false, isReference: false },
        ],
      },
      {
        raw: "100 ml de azeite de oliva leve",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "mililitro", item: "azeite de oliva leve", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "Raspas da fruta cítrica usada",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "raspas da fruta cítrica usada", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Bata o suco cítrico com a gema (ou lecitina) num mixer de mão ou liquidificador em velocidade baixa.",
      "Adicione o azeite em fio fino, aumentando a velocidade aos poucos, até emulsionar e formar um molho encorpado mas ainda fluido.",
      "Tempere com sal e raspas da fruta.",
      "Use imediatamente ou guarde na geladeira por até 2 dias, batendo novamente antes de usar caso a emulsão separe."
    ],
    tips: [
      "Diferente de um vinagrete comum, essa emulsão é mais espessa e estável, funcionando quase como um molho holandês cítrico e mais leve.",
      "Ótima para 'pintar' pratos de peixe cru, saladas sofisticadas ou vieiras grelhadas.",
      "A versão com lecitina de soja (sem ovo) é mais estável e dura mais tempo na geladeira."
    ]
  },
  {
    name: "Beurre Monté",
    subgroup: "Óleos, Molhos e Emulsões",
    desc: "Manteiga emulsionada com água em fogo baixo, que fica cremosa e estável sem separar — usada para escalfar peixes e legumes ou finalizar molhos.",
    origin: "França",
    time: { prep: "2 min", cook: "8 min", total: "10 min" },
    yield: "≈250 ml",
    difficulty: "Média",
    tags: ["format:tecnica", "diet:vegetariana"],
    ingredients: [
      "250 g de manteiga gelada, em cubos",
      "2 colheres (sopa) de água"
    ],
    ingredientsStructured: [
      {
        raw: "250 g de manteiga gelada, em cubos",
        group: null,
        items: [
          { qty: 250, qtyRange: null, unit: "grama", item: "manteiga gelada", prep: "em cubos", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 colheres (sopa) de água",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "colher-sopa", item: "água", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Aqueça a água numa panela pequena em fogo baixo até ficar morna (não fervendo).",
      "Adicione a manteiga gelada, um cubo de cada vez, batendo com um fouet e só adicionando o próximo cubo quando o anterior tiver derretido e emulsionado.",
      "Mantenha o fogo bem baixo durante todo o processo — a manteiga deve emulsionar com a água, não simplesmente derreter e separar.",
      "O resultado é uma manteiga derretida, mas estável e cremosa (não oleosa), que se mantém emulsionada mesmo em temperatura de serviço (60-70°C).",
      "Use imediatamente para escalfar peixes e legumes, ou finalizar molhos e vegetais com brilho."
    ],
    tips: [
      "A água é o segredo: ela mantém a gordura e os sólidos do leite da manteiga emulsionados, resultando numa manteiga que não 'quebra' mesmo em banho quente prolongado.",
      "Usado como meio de cozimento (escalfar lagosta, vieiras, legumes em beurre monté) ou para finalizar e engrossar molhos no lugar de um roux.",
      "Mantenha sempre em fogo baixo/banho-maria durante o serviço — se esquentar demais, a emulsão quebra e volta a ser manteiga derretida comum."
    ]
  },

  // ===================== OVOS TÉCNICOS =====================
  {
    name: "Confit de Gema",
    subgroup: "Ovos Técnicos",
    desc: "Gema de ovo cozida lentamente em azeite morno até firmar por fora e ficar cremosa por dentro, servida sobre risotos, purês ou saladas quentes.",
    origin: "Gastronomia contemporânea",
    time: { prep: "5 min", cook: "20 min", total: "25 min" },
    yield: "4 unidades",
    difficulty: "Média",
    tags: ["format:componente", "protein:ovo", "ingredient:ovo"],
    ingredients: [
      "4 gemas bem frescas",
      "300 ml de azeite de oliva (ou óleo neutro)",
      "Sal em flocos"
    ],
    ingredientsStructured: [
      {
        raw: "4 gemas bem frescas",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: null, item: "gemas bem frescas", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "300 ml de azeite de oliva (ou óleo neutro)",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "mililitro", item: "azeite de oliva", prep: null, alt: "óleo neutro", optional: false, isReference: false },
        ],
      },
      {
        raw: "Sal em flocos",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "sal em flocos", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Aqueça o azeite numa panela pequena até atingir cerca de 65°C (use termômetro — mais baixo que o confit de clara inteira).",
      "Separe as gemas com cuidado, mantendo-as inteiras, e mergulhe delicadamente no azeite morno.",
      "Cozinhe em fogo bem baixo, mantendo a temperatura entre 63-65°C, por cerca de 15-20 minutos, até a gema firmar levemente por fora mas continuar cremosa por dentro.",
      "Retire delicadamente com uma escumadeira, escorrendo o excesso de óleo.",
      "Tempere com sal em flocos e sirva imediatamente sobre risotos, purês ou saladas quentes."
    ],
    tips: [
      "Um termômetro é essencial aqui — a diferença entre uma gema confitada perfeita e uma gema cozida demais é de poucos graus.",
      "As gemas ficam extremamente delicadas depois de confitadas — manuseie com muito cuidado ao retirar do óleo.",
      "Ótimo topping para elevar pratos simples como risoto, purê de batata ou uma salada de folhas escuras."
    ]
  },
  {
    name: "Gema Curada",
    subgroup: "Ovos Técnicos",
    desc: "Gema de ovo curada em sal e açúcar por dias até firmar como um queijo mole, ralada sobre massas e risotos como um 'parmesão de ovo'.",
    origin: "Gastronomia contemporânea (inspirado em técnicas asiáticas)",
    time: { prep: "10 min + 24-48h geladeira", cook: "0 min", total: "24-48h" },
    yield: "4-6 unidades",
    difficulty: "Fácil (exige tempo)",
    tags: ["format:componente", "protein:ovo", "ingredient:ovo"],
    ingredients: [
      "6 gemas bem frescas",
      "300 g de sal grosso",
      "300 g de açúcar",
      "Especiarias opcionais (pimenta-do-reino em grãos, raspas cítricas)"
    ],
    ingredientsStructured: [
      {
        raw: "6 gemas bem frescas",
        group: null,
        items: [
          { qty: 6, qtyRange: null, unit: null, item: "gemas bem frescas", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "300 g de sal grosso",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "grama", item: "sal grosso", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "300 g de açúcar",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "grama", item: "açúcar", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Especiarias opcionais (pimenta-do-reino em grãos, raspas cítricas)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "especiarias", prep: "pimenta-do-reino em grãos, raspas cítricas", alt: null, optional: true, isReference: false },
        ],
      },
    ],
    steps: [
      "Misture o sal grosso e o açúcar numa tigela (e as especiarias, se usar).",
      "Numa travessa, espalhe metade dessa mistura, formando uma camada uniforme.",
      "Com uma colher, faça pequenas cavidades na mistura e coloque cada gema delicadamente numa cavidade, sem quebrar.",
      "Cubra completamente as gemas com o restante da mistura de sal e açúcar.",
      "Leve à geladeira, coberta, por 24 a 48 horas — quanto mais tempo, mais firme e concentrada fica a gema.",
      "Retire as gemas da cura, escove delicadamente o excesso de sal/açúcar (não lave com água) e seque ao ar, sobre uma grade, na geladeira, por mais algumas horas.",
      "A gema deve ficar com textura firme, quase como um queijo mole, e pode ser ralada por cima de pratos como um 'parmesão de ovo'."
    ],
    tips: [
      "A cura remove a umidade da gema por osmose, concentrando o sabor e transformando a textura em algo entre um queijo curado e um caramelo salgado.",
      "Não lave as gemas com água ao remover o excesso de sal — isso reidrata e desfaz o trabalho da cura; use uma escova ou pincel seco.",
      "Rale a gema curada por cima de massas, risotos ou saladas como faria com parmesão — um toque surpreendente de gastronomia contemporânea."
    ]
  },

  // ===================== CONSERVAS E VEGETAIS =====================
  {
    name: "Pickles Rápidos",
    subgroup: "Conservas e Vegetais",
    desc: "Vegetais fatiados finos, marinados em salmoura de vinagre e açúcar por apenas 1 hora, ficando ácidos e crocantes — sem fermentação longa.",
    origin: "Técnica internacional (quick pickle)",
    time: { prep: "10 min", cook: "5 min", total: "15 min + 1h descanso" },
    yield: "≈300 g",
    difficulty: "Fácil",
    tags: ["format:componente", "diet:vegetariana"],
    ingredients: [
      "300 g de vegetal à sua escolha (pepino, cebola roxa, cenoura, rabanete), fatiado fino",
      "200 ml de vinagre (branco, de arroz ou de maçã)",
      "200 ml de água",
      "80 g de açúcar",
      "20 g de sal",
      "Especiarias a gosto (grãos de mostarda, pimenta-do-reino, louro)"
    ],
    ingredientsStructured: [
      {
        raw: "300 g de vegetal à sua escolha (pepino, cebola roxa, cenoura, rabanete), fatiado fino",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "grama", item: "vegetal à sua escolha", prep: "pepino, cebola roxa, cenoura, rabanete, fatiado fino", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "200 ml de vinagre (branco, de arroz ou de maçã)",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "mililitro", item: "vinagre", prep: "branco, de arroz ou de maçã", alt: null, optional: false, isReference: false },
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
        raw: "80 g de açúcar",
        group: null,
        items: [
          { qty: 80, qtyRange: null, unit: "grama", item: "açúcar", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "20 g de sal",
        group: null,
        items: [
          { qty: 20, qtyRange: null, unit: "grama", item: "sal", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Especiarias a gosto (grãos de mostarda, pimenta-do-reino, louro)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "especiarias", prep: "a gosto (grãos de mostarda, pimenta-do-reino, louro)", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Disponha o vegetal fatiado num pote de vidro esterilizado.",
      "Numa panela, aqueça o vinagre, água, açúcar, sal e especiarias até dissolver completamente (não precisa ferver forte).",
      "Despeje a salmoura quente sobre os vegetais, cobrindo completamente.",
      "Deixe esfriar em temperatura ambiente, depois tampe e leve à geladeira.",
      "Aguarde no mínimo 1 hora para uso rápido (textura ainda crocante) ou 24 horas para um sabor mais desenvolvido.",
      "Guarda-se na geladeira por até 2-3 semanas."
    ],
    tips: [
      "Diferente de uma conserva tradicional (fermentada, semanas de preparo), o quick pickle está pronto em 1 hora e mantém o vegetal bem crocante.",
      "Ajuste a proporção de açúcar e vinagre conforme o vegetal — cebola roxa pede mais açúcar, pepino menos.",
      "Ótimo para dar acidez e crocância de contraste em pratos ricos e gordurosos (carnes de porco, patês, sanduíches)."
    ]
  },
  {
    name: "Legumes Glaceados",
    subgroup: "Conservas e Vegetais",
    desc: "Legumes cozidos em água, manteiga e açúcar até o líquido reduzir a um glacê brilhante e levemente adocicado — acompanhamento clássico francês.",
    origin: "Técnica clássica francesa",
    time: { prep: "10 min", cook: "20 min", total: "30 min" },
    yield: "4 porções",
    difficulty: "Fácil",
    tags: ["course:acompanhamento", "diet:vegetariana"],
    ingredients: [
      "400 g de legumes (cenoura, nabo ou cebola pérola), descascados e cortados uniformemente",
      "40 g de manteiga",
      "1 colher (sopa) de açúcar",
      "Água ou caldo claro, o suficiente para cobrir pela metade",
      "Sal a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "400 g de legumes (cenoura, nabo ou cebola pérola), descascados e cortados uniformemente",
        group: null,
        items: [
          { qty: 400, qtyRange: null, unit: "grama", item: "legumes", prep: "cenoura, nabo ou cebola pérola, descascados e cortados uniformemente", alt: null, optional: false, isReference: false },
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
        raw: "1 colher (sopa) de açúcar",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "açúcar", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Água ou caldo claro, o suficiente para cobrir pela metade",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "água", prep: "o suficiente para cobrir pela metade", alt: "caldo claro", optional: false, isReference: false },
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
      "Disponha os legumes numa panela larga e rasa, numa camada única.",
      "Cubra pela metade com água ou caldo, adicione a manteiga, o açúcar e uma pitada de sal.",
      "Leve ao fogo médio, sem tampa, e deixe cozinhar até o líquido reduzir quase completamente, formando um glacê brilhante que envolve os legumes — cerca de 15-20 minutos.",
      "Balance a panela de vez em quando (sem mexer com colher, para não quebrar os legumes) para que fiquem envolvidos por igual no glacê.",
      "Os legumes devem ficar macios, brilhantes e com um sabor levemente adocicado. Sirva imediatamente."
    ],
    tips: [
      "O segredo é a quantidade de líquido: deve ser exatamente o suficiente para cozinhar os legumes e reduzir a um glacê no mesmo tempo — nem mais, nem menos.",
      "Técnica clássica para acompanhamentos elegantes, muito usada com cenouras baby e cebolas pérola em pratos franceses tradicionais.",
      "Cortar os legumes em tamanhos uniformes garante que cozinhem por igual."
    ]
  },
  {
    name: "Legumes Torneados",
    subgroup: "Conservas e Vegetais",
    desc: "Técnica de faca francesa para esculpir legumes em formato oval uniforme de 7 facetas, garantindo cozimento parelho e apresentação refinada.",
    origin: "Técnica clássica francesa",
    time: { prep: "25 min", cook: "0 min (técnica de corte)", total: "25 min" },
    yield: "Conforme a quantidade de legumes",
    difficulty: "Alta (técnica de faca)",
    tags: ["format:tecnica"],
    ingredients: [
      "Legumes firmes (cenoura, batata, nabo, abobrinha)",
      "Uma faca pequena e bem afiada (faca de torneamento/pitanga, se tiver)"
    ],
    ingredientsStructured: [
      {
        raw: "Legumes firmes (cenoura, batata, nabo, abobrinha)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "legumes firmes", prep: "cenoura, batata, nabo, abobrinha", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Uma faca pequena e bem afiada (faca de torneamento/pitanga, se tiver)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "faca pequena e bem afiada", prep: "faca de torneamento/pitanga, se tiver", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Corte o legume em pedaços do tamanho aproximado de um ovo pequeno (ou menor, dependendo do uso).",
      "Segurando o pedaço firmemente, use a faca pequena para aparar as arestas em movimentos curtos e curvos, girando o legume continuamente contra a lâmina.",
      "Forme um formato oval com 7 lados/facetas iguais (o padrão clássico francês 'tourné'), afilando levemente as duas pontas.",
      "Repita até todos os pedaços terem o mesmo tamanho e formato uniforme — a uniformidade é o objetivo principal da técnica.",
      "Cozinhe os legumes torneados normalmente (na água, glaceados, ou salteados) — o formato garante cozimento uniforme e uma apresentação refinada."
    ],
    tips: [
      "É puramente uma técnica de corte, não uma receita — o objetivo é treinar a faca para criar formas uniformes que cozinham por igual e têm aparência de alta gastronomia.",
      "Não jogue fora as aparas — usam-se para caldos, purês ou sopas, aproveitando 100% do vegetal.",
      "Pratique com batatas primeiro (mais baratas e fáceis de cortar) antes de partir para vegetais mais caros."
    ]
  },
  {
    name: "Vegetais Assados em Diferentes Texturas",
    subgroup: "Conservas e Vegetais",
    desc: "Técnica de preparar o mesmo vegetal de três formas (assado, purê e cru/chips) e montá-las juntas no prato, explorando texturas contrastantes.",
    origin: "Gastronomia contemporânea",
    time: { prep: "20 min", cook: "40 min", total: "1h" },
    yield: "4 porções",
    difficulty: "Média",
    tags: ["course:principal", "diet:vegetariana"],
    ingredients: [
      "1 vegetal principal (ex: cenoura, beterraba ou abóbora), em quantidade generosa",
      "Azeite de oliva",
      "Sal e ervas a gosto",
      "Água (para a versão em purê/gel)"
    ],
    ingredientsStructured: [
      {
        raw: "1 vegetal principal (ex: cenoura, beterraba ou abóbora), em quantidade generosa",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "vegetal principal", prep: "ex: cenoura, beterraba ou abóbora, em quantidade generosa", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Azeite de oliva",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "azeite de oliva", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Sal e ervas a gosto",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "sal", prep: "a gosto", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "ervas", prep: "a gosto", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Água (para a versão em purê/gel)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "água (para a versão em purê/gel)", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Divida o vegetal em 3 porções para preparar em texturas diferentes.",
      "Textura 1 — Assado inteiro: envolva uma porção em papel-alumínio com azeite e sal, asse a 200°C por 40-50 minutos até macio, para um sabor concentrado e caramelizado.",
      "Textura 2 — Purê: cozinhe outra porção em água até bem macia, bata com azeite e sal até formar um purê liso (ver receita Purê Ultra Liso para o acabamento perfeito).",
      "Textura 3 — Chips ou cru fatiado fino: fatie a última porção bem fina numa mandolina e sirva crua (marinada rapidamente em azeite e limão) ou asse como chips (ver receita Chips de Vegetais) para crocância.",
      "Monte o prato combinando as três texturas do mesmo vegetal: pedaços assados, uma base de purê e um elemento crocante por cima.",
      "Finalize com um fio de azeite e ervas frescas."
    ],
    tips: [
      "Essa é a filosofia central da cozinha vegetal contemporânea: mostrar um único ingrediente de múltiplas formas no mesmo prato, explorando doce, macio, cremoso e crocante.",
      "Funciona com praticamente qualquer vegetal robusto — cenoura, beterraba, abóbora, aipo-rábano são os mais usados por sua versatilidade.",
      "Pratos assim costumam ser o prato principal vegetariano de destaque em menus degustação contemporâneos."
    ]
  },

  // ===================== BASES =====================
  {
    name: "Duxelles",
    subgroup: "Bases",
    desc: "Cogumelos picados bem fino e refogados até ficarem secos e concentrados, usados como recheio (base do Beef Wellington) ou em molhos.",
    origin: "França",
    time: { prep: "10 min", cook: "15 min", total: "25 min" },
    yield: "≈300 g",
    difficulty: "Fácil",
    tags: ["format:base", "diet:vegetariana", "ingredient:cogumelo"],
    ingredients: [
      "500 g de cogumelos (paris ou uma mistura), picados bem fino",
      "1 cebola picada bem fina",
      "40 g de manteiga",
      "1 fio de vinho branco ou conhaque (opcional)",
      "Sal, pimenta e noz-moscada a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "500 g de cogumelos (paris ou uma mistura), picados bem fino",
        group: null,
        items: [
          { qty: 500, qtyRange: null, unit: "grama", item: "cogumelos (paris ou uma mistura)", prep: "picados bem fino", alt: null, optional: false, isReference: false },
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
        raw: "40 g de manteiga",
        group: null,
        items: [
          { qty: 40, qtyRange: null, unit: "grama", item: "manteiga", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 fio de vinho branco ou conhaque (opcional)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "fio", item: "vinho branco", prep: null, alt: "conhaque", optional: true, isReference: false },
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
      "Pique os cogumelos bem fino, quase como uma farofa (pode usar processador, pulsando com cuidado para não formar uma pasta).",
      "Derreta a manteiga numa frigideira e refogue a cebola até translúcida.",
      "Junte os cogumelos picados e cozinhe em fogo médio, mexendo de vez em quando, até toda a água solta pelos cogumelos evaporar completamente e a mistura ficar bem seca e escura — 12-15 minutos.",
      "Se for usar, deglaceie com o vinho ou conhaque nos últimos minutos.",
      "Tempere com sal, pimenta e noz-moscada.",
      "Use como recheio de carnes (base do Beef Wellington), em tortas salgadas, omeletes ou como base de molhos."
    ],
    tips: [
      "O ponto certo é quando a mistura para de soltar vapor e fica completamente seca — cogumelo mal cozido solta água e estraga qualquer preparo em que for usado como recheio.",
      "É uma das preparações-base mais versáteis da cozinha francesa clássica, incorporada hoje em pratos contemporâneos de todos os tipos.",
      "Guarda-se bem na geladeira por até 5 dias, ou pode ser congelada em porções."
    ]
  },
  {
    name: "Caldos e Fundos (Claro e Escuro)",
    subgroup: "Bases",
    desc: "Caldo concentrado feito cozinhando ossos e legumes por horas — claro (escaldado) ou escuro (assado) — que serve de base para molhos clássicos.",
    origin: "França",
    time: { prep: "20 min", cook: "3-6h", total: "≈4-7h" },
    yield: "≈2 L",
    difficulty: "Média",
    tags: ["format:base"],
    ingredients: [
      "2 kg de ossos (frango/vitela para fundo claro; boi/vitela para fundo escuro)",
      "1 cebola, 2 cenouras, 2 talos de salsão — em pedaços grandes (mirepoix)",
      "2 colheres (sopa) de extrato de tomate (só para o fundo escuro)",
      "1 folha de louro, alguns ramos de tomilho, grãos de pimenta-do-reino",
      "4 L de água fria",
      "Sal (opcional, geralmente não se tempera o fundo — o sal entra no prato final)"
    ],
    ingredientsStructured: [
      {
        raw: "2 kg de ossos (frango/vitela para fundo claro; boi/vitela para fundo escuro)",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "quilograma", item: "ossos (frango/vitela para fundo claro; boi/vitela para fundo escuro)", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 cebola, 2 cenouras, 2 talos de salsão — em pedaços grandes (mirepoix)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cebola", prep: "em pedaços grandes (mirepoix)", alt: null, optional: false, isReference: false },
          { qty: 2, qtyRange: null, unit: null, item: "cenouras", prep: "em pedaços grandes (mirepoix)", alt: null, optional: false, isReference: false },
          { qty: 2, qtyRange: null, unit: "talo", item: "salsão", prep: "em pedaços grandes (mirepoix)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 colheres (sopa) de extrato de tomate (só para o fundo escuro)",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "colher-sopa", item: "extrato de tomate (só para o fundo escuro)", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 folha de louro, alguns ramos de tomilho, grãos de pimenta-do-reino",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "folha", item: "louro", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: "ramo", item: "tomilho", prep: "alguns", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "grãos de pimenta-do-reino", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "4 L de água fria",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: "litro", item: "água fria", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Sal (opcional, geralmente não se tempera o fundo — o sal entra no prato final)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "sal", prep: "geralmente não se tempera o fundo — o sal entra no prato final", alt: null, optional: true, isReference: false },
        ],
      },
    ],
    steps: [
      "Para fundo claro: coloque os ossos numa panela grande, cubra com água fria e leve ao fogo. Assim que ferver, escorra e enxágue os ossos (isso remove impurezas e resulta num caldo mais limpo e claro).",
      "Para fundo escuro: asse os ossos no forno a 220°C por 40-45 minutos, virando na metade, até dourarem bem. Doure o mirepoix junto nos últimos 15 minutos.",
      "Em ambos os casos: coloque os ossos (escaldados ou assados) numa panela grande com o mirepoix, ervas e água fria suficiente para cobrir tudo.",
      "Para o fundo escuro, adicione também o extrato de tomate.",
      "Leve para ferver, depois abaixe para fogo bem baixo, deixando cozinhar em fervura suave (não borbulhando forte), retirando a espuma e a gordura que sobem à superfície regularmente.",
      "Cozinhe por 3-4 horas (fundo claro de frango) ou 6-8 horas (fundo escuro de boi/vitela), sem tampar, repondo água se necessário para manter os ossos cobertos.",
      "Coe em peneira fina, descartando os sólidos. Deixe esfriar e retire a camada de gordura que solidifica por cima antes de usar ou congelar."
    ],
    tips: [
      "Nunca deixe ferver forte — uma fervura violenta emulsiona a gordura no caldo, deixando-o turvo em vez de limpo e claro.",
      "Escaldar os ossos antes (fundo claro) ou assá-los bem dourados (fundo escuro) são as duas técnicas que definem o caráter de cada tipo de fundo — não pule nenhuma etapa.",
      "É a base literal de toda a cozinha clássica: sem um bom fundo, nenhum molho (Velouté, Espagnole, Demi-glace) atinge seu potencial. Congele em porções para ter sempre à mão."
    ]
  },
];
