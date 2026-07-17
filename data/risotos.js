// RISOTOS
window.RECIPES = window.RECIPES || {};
window.RECIPES["risotos"] = [

  // ===================== CLÁSSICOS =====================
  {
    name: "Risotto alla Milanese",
    subgroup: "Clássicos",
    desc: "Arroz cremoso cozido aos poucos em caldo, com açafrão e finalizado com manteiga e parmesão — o clássico de Milão que acompanha o Ossobuco.",
    origin: "Itália (Milão)",
    time: { prep: "10 min", cook: "25 min", total: "35 min" },
    yield: "2-3 porções",
    difficulty: "Média",
    tags: ["ingredient:arroz", "ingredient:queijo"],
    ingredients: [
      "300 g de arroz arbóreo ou carnaroli",
      "1 L de caldo de carne ou galinha, bem quente",
      "1 cebola pequena picada bem fina",
      "50 g de tutano de boi (opcional, tradicional) ou 20 g de manteiga extra",
      "100 ml de vinho branco seco",
      "1 pitada generosa de açafrão em pistilos (ou em pó)",
      "60 g de manteiga gelada",
      "80 g de parmesão ralado",
      "Sal a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "300 g de arroz arbóreo ou carnaroli",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "grama", item: "arroz arbóreo", prep: null, alt: "carnaroli", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 L de caldo de carne ou galinha, bem quente",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "litro", item: "caldo de carne", prep: null, alt: "galinha, bem quente", optional: false, isReference: false },
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
        raw: "50 g de tutano de boi (opcional, tradicional) ou 20 g de manteiga extra",
        group: null,
        items: [
          { qty: 50, qtyRange: null, unit: "grama", item: "tutano de boi", prep: "tradicional", alt: "20 g de manteiga extra", optional: true, isReference: false },
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
        raw: "1 pitada generosa de açafrão em pistilos (ou em pó)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "pitada", item: "açafrão em pistilos", prep: "generosa", alt: "em pó", optional: false, isReference: false },
        ],
      },
      {
        raw: "60 g de manteiga gelada",
        group: null,
        items: [
          { qty: 60, qtyRange: null, unit: "grama", item: "manteiga gelada", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "80 g de parmesão ralado",
        group: null,
        items: [
          { qty: 80, qtyRange: null, unit: "grama", item: "parmesão", prep: "ralado", alt: null, optional: false, isReference: false },
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
      "Aqueça o caldo numa panela à parte e mantenha em fogo baixo, sempre quente, durante todo o preparo.",
      "Numa panela larga, derreta metade da manteiga (e o tutano, se usar) e refogue a cebola em fogo baixo até ficar translúcida, sem dourar, 3-4 minutos.",
      "Junte o arroz e mexa por 2 minutos, tostando levemente os grãos (a 'tostatura') até ficarem translúcidos nas bordas.",
      "Deglaceie com o vinho branco e mexa até evaporar completamente.",
      "Dissolva o açafrão numa concha do caldo quente e reserve.",
      "Comece a adicionar o caldo quente, uma concha de cada vez, mexendo com frequência e só adicionando mais quando o líquido anterior for quase todo absorvido. Repita por cerca de 17-18 minutos.",
      "Nos últimos minutos, adicione o caldo com açafrão dissolvido.",
      "Quando o arroz estiver al dente (macio por fora, levemente firme no centro), desligue o fogo.",
      "Finalize com a mantecatura: adicione a manteiga gelada em cubos e o parmesão, mexendo vigorosamente até o risoto ficar cremoso e brilhante ('all'onda' — deve se mexer em ondas no prato).",
      "Ajuste o sal e sirva imediatamente."
    ],
    tips: [
      "A mantecatura (bater manteiga gelada e queijo fora do fogo, no final) é a técnica que dá a cremosidade característica do risoto — nunca pule essa etapa.",
      "Mexer com frequência mas não sem parar ajuda a soltar o amido do arroz, criando a textura cremosa sem precisar de creme de leite.",
      "O tutano é o toque tradicional milanês (o prato acompanha classicamente o Ossobuco), mas pode ser omitido sem prejuízo."
    ]
  },
  {
    name: "Risotto ai Funghi",
    subgroup: "Clássicos",
    desc: "Risoto cremoso de arroz arbóreo com cogumelos frescos e secos (porcini), finalizado com manteiga e parmesão.",
    origin: "Itália",
    time: { prep: "20 min (+ hidratar cogumelos secos)", cook: "25 min", total: "45 min" },
    yield: "2-3 porções",
    difficulty: "Média",
    tags: ["ingredient:arroz", "ingredient:cogumelo", "ingredient:queijo", "diet:vegetariana"],
    ingredients: [
      "300 g de arroz arbóreo ou carnaroli",
      "30 g de cogumelos secos (porcini), hidratados em 300 ml de água morna",
      "250 g de cogumelos frescos (paris, shitake ou porcini frescos), fatiados",
      "1 L de caldo de legumes ou galinha, bem quente",
      "1 cebola picada",
      "2 dentes de alho picados",
      "100 ml de vinho branco seco",
      "60 g de manteiga gelada (dividida)",
      "80 g de parmesão ralado",
      "Salsinha picada",
      "Sal e pimenta a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "300 g de arroz arbóreo ou carnaroli",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "grama", item: "arroz arbóreo", prep: null, alt: "carnaroli", optional: false, isReference: false },
        ],
      },
      {
        raw: "30 g de cogumelos secos (porcini), hidratados em 300 ml de água morna",
        group: null,
        items: [
          { qty: 30, qtyRange: null, unit: "grama", item: "cogumelos secos (porcini)", prep: "hidratados em 300 ml de água morna", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "250 g de cogumelos frescos (paris, shitake ou porcini frescos), fatiados",
        group: null,
        items: [
          { qty: 250, qtyRange: null, unit: "grama", item: "cogumelos frescos", prep: "paris, shitake ou porcini frescos, fatiados", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 L de caldo de legumes ou galinha, bem quente",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "litro", item: "caldo de legumes", prep: null, alt: "galinha, bem quente", optional: false, isReference: false },
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
        raw: "2 dentes de alho picados",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "dente", item: "alho", prep: "picados", alt: null, optional: false, isReference: false },
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
        raw: "60 g de manteiga gelada (dividida)",
        group: null,
        items: [
          { qty: 60, qtyRange: null, unit: "grama", item: "manteiga gelada (dividida)", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "80 g de parmesão ralado",
        group: null,
        items: [
          { qty: 80, qtyRange: null, unit: "grama", item: "parmesão", prep: "ralado", alt: null, optional: false, isReference: false },
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
      "Hidrate os cogumelos secos em água morna por 20 minutos. Escorra (reservando a água de hidratação, coada, para juntar ao caldo) e pique.",
      "Numa frigideira, salteie os cogumelos frescos com metade da manteiga e o alho em fogo alto até dourarem bem. Tempere com sal e pimenta, reserve.",
      "Junte a água de hidratação dos cogumelos secos ao caldo quente.",
      "Numa panela larga, refogue a cebola no restante da manteiga até translúcida, junte o arroz e toste por 2 minutos.",
      "Deglaceie com o vinho branco e deixe evaporar.",
      "Adicione o caldo quente aos poucos, uma concha por vez, mexendo com frequência, por cerca de 17-18 minutos, até o arroz ficar al dente.",
      "Nos últimos minutos, junte os cogumelos secos picados e a maior parte dos cogumelos salteados (reserve um pouco para decorar).",
      "Desligue o fogo e finalize com a mantecatura: manteiga gelada e parmesão, mexendo até cremoso.",
      "Sirva com os cogumelos salteados reservados por cima e salsinha picada."
    ],
    tips: [
      "Cogumelos secos (porcini) dão uma profundidade de sabor que cogumelos frescos sozinhos não conseguem — vale sempre incluir mesmo que use frescos também.",
      "Não descarte a água de hidratação dos cogumelos secos: ela é puro sabor concentrado e deve entrar no caldo.",
      "Selar os cogumelos frescos em fogo bem alto, sem lotar a frigideira, é o que garante que dourem em vez de soltar água e cozinhar no vapor."
    ]
  },
  {
    name: "Risotto al Parmigiano",
    subgroup: "Clássicos",
    desc: "O risoto mais simples e puro: só arroz, caldo e bastante parmesão envelhecido, cremoso pela mantecatura final.",
    origin: "Itália",
    time: { prep: "5 min", cook: "20 min", total: "25 min" },
    yield: "2-3 porções",
    difficulty: "Fácil",
    tags: ["ingredient:arroz", "ingredient:queijo", "diet:vegetariana"],
    ingredients: [
      "300 g de arroz arbóreo ou carnaroli",
      "1 L de caldo de galinha ou legumes, bem quente",
      "1 cebola picada",
      "100 ml de vinho branco seco",
      "70 g de manteiga gelada (dividida)",
      "120 g de parmesão ralado na hora (de boa qualidade, envelhecido)",
      "Sal e pimenta-do-reino a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "300 g de arroz arbóreo ou carnaroli",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "grama", item: "arroz arbóreo", prep: null, alt: "carnaroli", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 L de caldo de galinha ou legumes, bem quente",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "litro", item: "caldo de galinha", prep: null, alt: "legumes, bem quente", optional: false, isReference: false },
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
        raw: "100 ml de vinho branco seco",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "mililitro", item: "vinho branco seco", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "70 g de manteiga gelada (dividida)",
        group: null,
        items: [
          { qty: 70, qtyRange: null, unit: "grama", item: "manteiga gelada (dividida)", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "120 g de parmesão ralado na hora (de boa qualidade, envelhecido)",
        group: null,
        items: [
          { qty: 120, qtyRange: null, unit: "grama", item: "parmesão", prep: "ralado na hora (de boa qualidade, envelhecido)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Sal e pimenta-do-reino a gosto",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "sal", prep: "a gosto", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "pimenta-do-reino", prep: "a gosto", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Aqueça o caldo e mantenha quente durante todo o preparo.",
      "Numa panela larga, refogue a cebola em metade da manteiga até translúcida.",
      "Junte o arroz e toste por 2 minutos, mexendo sempre.",
      "Deglaceie com o vinho branco e deixe evaporar completamente.",
      "Adicione o caldo quente aos poucos, uma concha de cada vez, mexendo com frequência, por cerca de 17-18 minutos até o arroz ficar al dente.",
      "Desligue o fogo e faça a mantecatura: incorpore a manteiga gelada restante e o parmesão, mexendo vigorosamente até ficar bem cremoso.",
      "Ajuste sal (com cuidado, o parmesão já salga bastante) e finalize com pimenta-do-reino moída na hora."
    ],
    tips: [
      "É o risoto mais 'puro' de todos — sem ele dominado, nenhuma variação (com cogumelo, frutos do mar etc.) vai funcionar bem.",
      "Use um parmesão de boa qualidade e envelhecido (24 meses+, se possível) — como é o ingrediente central, a diferença é enorme.",
      "A textura final deve ser fluida o suficiente para se espalhar sozinha quando o prato é inclinado — nem seco, nem uma sopa."
    ]
  },

  // ===================== CONTEMPORÂNEOS E FRUTOS DO MAR =====================
  {
    name: "Risotto ai Frutti di Mare",
    subgroup: "Contemporâneos e Frutos do Mar",
    desc: "Risoto de frutos do mar (camarão, mexilhão e lula) cozido em fumet de peixe caseiro, tradicionalmente servido sem queijo.",
    origin: "Itália",
    time: { prep: "20 min", cook: "25 min", total: "45 min" },
    yield: "3-4 porções",
    difficulty: "Média-alta",
    tags: ["protein:frutos-do-mar", "ingredient:arroz", "ingredient:tomate"],
    ingredients: [
      "300 g de arroz arbóreo ou carnaroli",
      "300 g de camarão médio, limpo (cascas reservadas)",
      "300 g de mexilhões limpos",
      "200 g de lula em anéis",
      "1 L de fumet de peixe (feito com as cascas do camarão) ou caldo de peixe",
      "1 cebola picada, 2 dentes de alho picados",
      "150 ml de vinho branco seco",
      "300 g de tomate pelado picado (opcional, para um toque rosado)",
      "50 g de manteiga",
      "3 colheres (sopa) de azeite de oliva",
      "Salsinha picada",
      "Sal e pimenta a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "300 g de arroz arbóreo ou carnaroli",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "grama", item: "arroz arbóreo", prep: null, alt: "carnaroli", optional: false, isReference: false },
        ],
      },
      {
        raw: "300 g de camarão médio, limpo (cascas reservadas)",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "grama", item: "camarão médio", prep: "limpo (cascas reservadas)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "300 g de mexilhões limpos",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "grama", item: "mexilhões", prep: "limpos", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "200 g de lula em anéis",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "grama", item: "lula", prep: "em anéis", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 L de fumet de peixe (feito com as cascas do camarão) ou caldo de peixe",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "litro", item: "fumet de peixe (feito com as cascas do camarão)", prep: null, alt: "caldo de peixe", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 cebola picada, 2 dentes de alho picados",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cebola", prep: "picada", alt: null, optional: false, isReference: false },
          { qty: 2, qtyRange: null, unit: "dente", item: "alho", prep: "picados", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "150 ml de vinho branco seco",
        group: null,
        items: [
          { qty: 150, qtyRange: null, unit: "mililitro", item: "vinho branco seco", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "300 g de tomate pelado picado (opcional, para um toque rosado)",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "grama", item: "tomate pelado", prep: "picado; para um toque rosado", alt: null, optional: true, isReference: false },
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
        raw: "3 colheres (sopa) de azeite de oliva",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: "colher-sopa", item: "azeite de oliva", prep: null, alt: null, optional: false, isReference: false },
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
      "Prepare um fumet rápido fervendo as cascas do camarão em água por 15 minutos; coe e mantenha quente junto com o caldo de peixe.",
      "Numa panela larga, aqueça o azeite e refogue os mexilhões com um pouco de alho até abrirem (descarte os que não abrirem). Retire, reserve o líquido que soltarem e junte ao caldo.",
      "Na mesma panela, sele rapidamente o camarão e a lula em fogo alto, só até dourarem por fora (30-40 segundos cada lado). Retire e reserve — eles terminam de cozinhar no final.",
      "Refogue a cebola e o alho restante na manteiga até translúcidos. Junte o arroz e toste por 2 minutos.",
      "Deglaceie com o vinho branco e deixe evaporar. Se for usar, junte o tomate picado agora.",
      "Adicione o caldo/fumet quente aos poucos, uma concha por vez, mexendo com frequência, por cerca de 16-17 minutos.",
      "Quando o arroz estiver quase no ponto, junte o camarão, a lula e os mexilhões, misturando delicadamente para aquecer e terminar de cozinhar, mais 2-3 minutos.",
      "Ajuste sal e pimenta, finalize com salsinha picada e sirva imediatamente."
    ],
    tips: [
      "Frutos do mar cozinham muito rápido — selar rapidamente e devolver só no final evita que fiquem borrachudos.",
      "Um fumet feito com as próprias cascas do camarão faz toda a diferença de sabor comparado a usar só água ou caldo genérico.",
      "Tradicionalmente NÃO leva queijo (frutos do mar e queijo raramente se combinam na cozinha italiana clássica)."
    ]
  },
  {
    name: "Risotto al Limone",
    subgroup: "Contemporâneos e Frutos do Mar",
    desc: "Risoto cremoso com raspas e suco de limão-siciliano — leve e cítrico, típico da Costa Amalfitana, ótimo com peixes grelhados.",
    origin: "Itália (Amalfi)",
    time: { prep: "10 min", cook: "20 min", total: "30 min" },
    yield: "2-3 porções",
    difficulty: "Fácil",
    tags: ["ingredient:arroz", "ingredient:limao", "ingredient:queijo", "diet:vegetariana"],
    ingredients: [
      "300 g de arroz arbóreo ou carnaroli",
      "1 L de caldo de legumes, bem quente",
      "1 cebola picada",
      "100 ml de vinho branco seco",
      "Raspas e suco de 2 limões-sicilianos",
      "60 g de manteiga gelada",
      "80 g de parmesão ralado",
      "100 ml de creme de leite fresco (opcional, para mais cremosidade)",
      "Sal e pimenta a gosto",
      "Manjericão ou tomilho-limão para decorar (opcional)"
    ],
    ingredientsStructured: [
      {
        raw: "300 g de arroz arbóreo ou carnaroli",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "grama", item: "arroz arbóreo", prep: null, alt: "carnaroli", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 L de caldo de legumes, bem quente",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "litro", item: "caldo de legumes", prep: "bem quente", alt: null, optional: false, isReference: false },
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
        raw: "100 ml de vinho branco seco",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "mililitro", item: "vinho branco seco", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Raspas e suco de 2 limões-sicilianos",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "limões-sicilianos", prep: "raspas", alt: null, optional: false, isReference: false },
          { qty: 2, qtyRange: null, unit: null, item: "limões-sicilianos", prep: "suco", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "60 g de manteiga gelada",
        group: null,
        items: [
          { qty: 60, qtyRange: null, unit: "grama", item: "manteiga gelada", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "80 g de parmesão ralado",
        group: null,
        items: [
          { qty: 80, qtyRange: null, unit: "grama", item: "parmesão", prep: "ralado", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "100 ml de creme de leite fresco (opcional, para mais cremosidade)",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "mililitro", item: "creme de leite fresco", prep: "para mais cremosidade", alt: null, optional: true, isReference: false },
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
        raw: "Manjericão ou tomilho-limão para decorar (opcional)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "manjericão", prep: null, alt: "tomilho-limão para decorar", optional: true, isReference: false },
        ],
      },
    ],
    steps: [
      "Aqueça o caldo e mantenha quente.",
      "Refogue a cebola em metade da manteiga até translúcida, junte o arroz e toste por 2 minutos.",
      "Deglaceie com o vinho branco e deixe evaporar.",
      "Adicione o caldo aos poucos, uma concha por vez, mexendo com frequência, por cerca de 16-17 minutos até o arroz ficar al dente.",
      "Se for usar, junte o creme de leite nos últimos 3 minutos de cozimento.",
      "Desligue o fogo, adicione as raspas e o suco de limão, a manteiga gelada restante e o parmesão. Mexa vigorosamente até ficar cremoso (mantecatura).",
      "Ajuste sal e pimenta. Sirva imediatamente, decorado com ervas frescas se desejar."
    ],
    tips: [
      "Adicione o suco de limão só no final, fora do fogo — cozinhar o limão por muito tempo deixa o sabor amargo.",
      "Prato típico da Costa Amalfitana, onde os limões são famosos por sua qualidade — use limões-sicilianos de boa procedência se encontrar.",
      "Combina muito bem como acompanhamento de peixes grelhados ou vieiras salteadas por cima."
    ]
  },
  {
    name: "Risotto alla Barbabietola (Beterraba)",
    subgroup: "Contemporâneos e Frutos do Mar",
    desc: "Risoto rosa vibrante feito com purê e cubos de beterraba assada, finalizado com queijo de cabra e nozes tostadas.",
    origin: "Itália (contemporâneo)",
    time: { prep: "15 min", cook: "30 min", total: "45 min" },
    yield: "2-3 porções",
    difficulty: "Média",
    tags: ["ingredient:arroz", "ingredient:queijo", "ingredient:castanha", "diet:vegetariana"],
    ingredients: [
      "300 g de arroz arbóreo ou carnaroli",
      "2 beterrabas médias",
      "1 L de caldo de legumes, bem quente",
      "1 cebola picada",
      "100 ml de vinho tinto seco (ou branco)",
      "60 g de manteiga gelada",
      "80 g de parmesão ralado",
      "100 g de queijo de cabra (opcional, para finalizar)",
      "Sal e pimenta a gosto",
      "Nozes tostadas picadas (opcional, para textura)"
    ],
    ingredientsStructured: [
      {
        raw: "300 g de arroz arbóreo ou carnaroli",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "grama", item: "arroz arbóreo", prep: null, alt: "carnaroli", optional: false, isReference: false },
        ],
      },
      {
        raw: "2 beterrabas médias",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "beterrabas médias", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 L de caldo de legumes, bem quente",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "litro", item: "caldo de legumes", prep: "bem quente", alt: null, optional: false, isReference: false },
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
        raw: "100 ml de vinho tinto seco (ou branco)",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "mililitro", item: "vinho tinto seco", prep: null, alt: "branco", optional: false, isReference: false },
        ],
      },
      {
        raw: "60 g de manteiga gelada",
        group: null,
        items: [
          { qty: 60, qtyRange: null, unit: "grama", item: "manteiga gelada", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "80 g de parmesão ralado",
        group: null,
        items: [
          { qty: 80, qtyRange: null, unit: "grama", item: "parmesão", prep: "ralado", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "100 g de queijo de cabra (opcional, para finalizar)",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "grama", item: "queijo de cabra", prep: "para finalizar", alt: null, optional: true, isReference: false },
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
        raw: "Nozes tostadas picadas (opcional, para textura)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "nozes tostadas", prep: "picadas; para textura", alt: null, optional: true, isReference: false },
        ],
      },
    ],
    steps: [
      "Cozinhe ou asse as beterrabas até ficarem macias (no forno, embrulhadas em papel-alumínio, a 200°C por cerca de 45 minutos, ou cozidas em água). Descasque e bata metade no processador com um pouco de caldo até formar um purê; corte a outra metade em cubos pequenos.",
      "Aqueça o caldo restante e mantenha quente, misturando o purê de beterraba nele para colorir e dar sabor.",
      "Refogue a cebola em metade da manteiga até translúcida, junte o arroz e toste por 2 minutos.",
      "Deglaceie com o vinho e deixe evaporar.",
      "Adicione o caldo com purê de beterraba aos poucos, uma concha por vez, mexendo com frequência, por 16-17 minutos.",
      "Nos últimos minutos, junte os cubos de beterraba reservados para dar textura.",
      "Desligue o fogo e finalize com a manteiga gelada restante e o parmesão, mexendo até cremoso.",
      "Sirva com lascas de queijo de cabra por cima e nozes tostadas, se desejar."
    ],
    tips: [
      "Use luvas ao manusear a beterraba crua/cozida para não manchar as mãos.",
      "O queijo de cabra por cima contrasta lindamente com a doçura terrosa da beterraba — não pule esse toque se puder.",
      "Assar a beterraba (em vez de cozinhar em água) concentra o sabor e a doçura muito mais."
    ]
  },
  {
    name: "Risotto alla Zucca (Abóbora)",
    subgroup: "Contemporâneos e Frutos do Mar",
    desc: "Risoto cremoso de abóbora assada e em purê, com toque de noz-moscada e sálvia crocante frita na manteiga.",
    origin: "Itália (Norte)",
    time: { prep: "15 min", cook: "30 min", total: "45 min" },
    yield: "2-3 porções",
    difficulty: "Média",
    tags: ["ingredient:arroz", "ingredient:abobora", "ingredient:queijo", "diet:vegetariana"],
    ingredients: [
      "300 g de arroz arbóreo ou carnaroli",
      "400 g de abóbora (kabocha ou moranga), em cubos",
      "1 L de caldo de legumes, bem quente",
      "1 cebola picada",
      "1 pitada de noz-moscada",
      "100 ml de vinho branco seco",
      "60 g de manteiga gelada",
      "80 g de parmesão ralado",
      "Sálvia fresca (algumas folhas, fritas em manteiga, para decorar)",
      "Sal e pimenta a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "300 g de arroz arbóreo ou carnaroli",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "grama", item: "arroz arbóreo", prep: null, alt: "carnaroli", optional: false, isReference: false },
        ],
      },
      {
        raw: "400 g de abóbora (kabocha ou moranga), em cubos",
        group: null,
        items: [
          { qty: 400, qtyRange: null, unit: "grama", item: "abóbora (kabocha ou moranga)", prep: "em cubos", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 L de caldo de legumes, bem quente",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "litro", item: "caldo de legumes", prep: "bem quente", alt: null, optional: false, isReference: false },
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
        raw: "100 ml de vinho branco seco",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "mililitro", item: "vinho branco seco", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "60 g de manteiga gelada",
        group: null,
        items: [
          { qty: 60, qtyRange: null, unit: "grama", item: "manteiga gelada", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "80 g de parmesão ralado",
        group: null,
        items: [
          { qty: 80, qtyRange: null, unit: "grama", item: "parmesão", prep: "ralado", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Sálvia fresca (algumas folhas, fritas em manteiga, para decorar)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "sálvia fresca", prep: "algumas folhas, fritas em manteiga, para decorar", alt: null, optional: false, isReference: false },
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
      "Asse metade da abóbora em cubos no forno a 200°C por 25 minutos, até macia e levemente caramelizada nas bordas (para textura). Cozinhe a outra metade em água ou no vapor e bata em purê (para dar corpo ao risoto).",
      "Aqueça o caldo e mantenha quente.",
      "Refogue a cebola em metade da manteiga até translúcida, junte o arroz e toste por 2 minutos.",
      "Deglaceie com o vinho branco e deixe evaporar.",
      "Adicione o caldo aos poucos, uma concha por vez, mexendo com frequência, por 15 minutos.",
      "Junte o purê de abóbora e a noz-moscada, continue adicionando caldo até o arroz ficar al dente, mais 2-3 minutos.",
      "Desligue o fogo, finalize com a manteiga gelada restante e o parmesão (mantecatura).",
      "Frite algumas folhas de sálvia em manteiga até crocantes. Sirva o risoto com os cubos de abóbora assada e a sálvia crocante por cima."
    ],
    tips: [
      "Combinar abóbora assada (para textura e sabor concentrado) com abóbora em purê (para dar corpo ao caldo) é o que eleva esse risoto.",
      "Noz-moscada é a especiaria clássica que realça a doçura da abóbora sem competir com ela.",
      "A sálvia crocante frita na manteiga é um clássico da cozinha do norte da Itália para acompanhar pratos de abóbora."
    ]
  },
];
