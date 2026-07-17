// MOLHOS CLÁSSICOS — os 5 molhos-mãe da cozinha francesa + seus derivados, por família
window.RECIPES = window.RECIPES || {};
window.RECIPES["molhos"] = [

  // ===================== MOLHOS-MÃE =====================
  {
    name: "Béchamel",
    subgroup: "Molhos-mãe",
    desc: "Molho branco cremoso de manteiga, farinha e leite — a base de gratinados, lasanhas e croquetes.",
    origin: "França",
    time: { prep: "5 min", cook: "15 min", total: "20 min" },
    yield: "≈ 500 ml",
    difficulty: "Fácil",
    tags: [],
    ingredients: [
      "50 g de manteiga sem sal",
      "50 g de farinha de trigo",
      "500 ml de leite integral, morno",
      "1 pitada de noz-moscada ralada na hora",
      "Sal a gosto",
      "Pimenta-do-reino branca a gosto",
      "1 folha de louro (opcional, para infusionar o leite)"
    ],
    ingredientsStructured: [
      {
        raw: "50 g de manteiga sem sal",
        group: null,
        items: [
          { qty: 50, qtyRange: null, unit: "grama", item: "manteiga sem sal", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "50 g de farinha de trigo",
        group: null,
        items: [
          { qty: 50, qtyRange: null, unit: "grama", item: "farinha de trigo", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "500 ml de leite integral, morno",
        group: null,
        items: [
          { qty: 500, qtyRange: null, unit: "mililitro", item: "leite integral", prep: "morno", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 pitada de noz-moscada ralada na hora",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "pitada", item: "noz-moscada", prep: "ralada na hora", alt: null, optional: false, isReference: false },
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
        raw: "Pimenta-do-reino branca a gosto",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "pimenta-do-reino branca", prep: "a gosto", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 folha de louro (opcional, para infusionar o leite)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "folha", item: "louro", prep: "para infusionar o leite", alt: null, optional: true, isReference: false },
        ],
      },
    ],
    steps: [
      "Se for usar o louro, aqueça o leite até quase ferver com a folha dentro, desligue e deixe em infusão por 10 min. Coe e mantenha morno.",
      "Em uma panela de fundo grosso, derreta a manteiga em fogo baixo sem deixar dourar.",
      "Adicione a farinha de uma vez e mexa com fouet por 2 minutos, formando o roux — deve ficar com cheiro de biscoito, sem cor.",
      "Fora do fogo, despeje o leite morno de uma vez e bata vigorosamente com o fouet para não empelotar.",
      "Volte ao fogo médio-baixo, mexendo sempre, até engrossar e ferver levemente — cerca de 6 a 8 minutos.",
      "Tempere com sal, pimenta branca e noz-moscada. Cozinhe por mais 2 minutos para tirar o gosto de farinha crua.",
      "Se não for usar na hora, cubra com filme plástico encostado na superfície para não criar película."
    ],
    tips: [
      "Leite morno + roux morno/quente é o segredo para não empelotar; se um dos dois estiver muito quente ou muito frio contra o outro, forma grumos.",
      "Se empelotar, bata no liquidificador ou passe numa peneira fina.",
      "Ponto ideal: deve cobrir as costas de uma colher e a marca do dedo permanecer visível."
    ],
    usedFor: "Base para Mornay, gratinados, lasanha, croquetas, suflês e para 'ligar' recheios como o de croquete de frango."
  },
  {
    name: "Velouté",
    subgroup: "Molhos-mãe",
    desc: "Molho claro feito com roux de manteiga e farinha diluído em caldo (frango, peixe ou vitela) — a base de molhos como Suprême e Vin Blanc.",
    origin: "França",
    time: { prep: "5 min", cook: "25 min", total: "30 min" },
    yield: "≈ 500 ml",
    difficulty: "Fácil",
    tags: [],
    ingredients: [
      "50 g de manteiga sem sal",
      "50 g de farinha de trigo",
      "600 ml de caldo claro quente (frango, peixe ou vitela, conforme o uso)",
      "Sal a gosto",
      "Pimenta-do-reino branca a gosto",
      "1 fio de suco de limão (opcional, para realçar)"
    ],
    ingredientsStructured: [
      {
        raw: "50 g de manteiga sem sal",
        group: null,
        items: [
          { qty: 50, qtyRange: null, unit: "grama", item: "manteiga sem sal", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "50 g de farinha de trigo",
        group: null,
        items: [
          { qty: 50, qtyRange: null, unit: "grama", item: "farinha de trigo", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "600 ml de caldo claro quente (frango, peixe ou vitela, conforme o uso)",
        group: null,
        items: [
          { qty: 600, qtyRange: null, unit: "mililitro", item: "caldo claro quente", prep: "frango, peixe ou vitela, conforme o uso", alt: null, optional: false, isReference: false },
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
        raw: "Pimenta-do-reino branca a gosto",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "pimenta-do-reino branca", prep: "a gosto", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 fio de suco de limão (opcional, para realçar)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "fio", item: "suco de limão", prep: "para realçar", alt: null, optional: true, isReference: false },
        ],
      },
    ],
    steps: [
      "Aqueça o caldo e mantenha quente (não precisa fervendo).",
      "Em panela separada, derreta a manteiga em fogo baixo e junte a farinha, mexendo por 2 minutos até formar o roux claro.",
      "Fora do fogo, adicione o caldo quente aos poucos, batendo bem a cada adição para incorporar sem grumos.",
      "Volte ao fogo médio-baixo e cozinhe mexendo sempre até engrossar, cerca de 15 a 18 minutos, retirando a espuma que subir.",
      "Ajuste sal, pimenta branca e finalize com o limão se desejar.",
      "Coe em peneira fina para um acabamento liso."
    ],
    tips: [
      "A diferença do Béchamel é simples: aqui o líquido é caldo (fundo claro), não leite — por isso é um molho mais 'salgado/umami' e menos cremoso na base.",
      "Use sempre um caldo bem feito: o velouté só é tão bom quanto o caldo usado.",
      "Cozinhar por mais tempo em fogo baixo reduz o gosto de farinha crua e deixa o molho mais sedoso."
    ],
    usedFor: "Base para Suprême, Vin Blanc, Nantua e molhos para aves, peixes e vitela."
  },
  {
    name: "Espagnole (Molho Espanhol)",
    subgroup: "Molhos-mãe",
    desc: "Molho escuro e encorpado de roux tostado, mirepoix e fundo escuro de carne, cozido por horas — a base do Demi-glace e de molhos para carnes vermelhas.",
    origin: "França",
    time: { prep: "20 min", cook: "1h40", total: "2h" },
    yield: "≈ 700 ml",
    difficulty: "Média",
    tags: ["contains:boi"],
    ingredients: [
      "40 g de manteiga ou óleo",
      "40 g de farinha de trigo",
      "1,5 L de fundo escuro de carne (boi ou vitela)",
      "1 cebola média em cubos (mirepoix)",
      "1 cenoura média em cubos",
      "1 talo de salsão em cubos",
      "2 colheres (sopa) de extrato/concentrado de tomate",
      "1 tomate maduro picado (opcional)",
      "1 folha de louro",
      "2 ramos de tomilho",
      "4 grãos de pimenta-do-reino",
      "Sal a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "40 g de manteiga ou óleo",
        group: null,
        items: [
          { qty: 40, qtyRange: null, unit: "grama", item: "manteiga", prep: null, alt: "óleo", optional: false, isReference: false },
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
        raw: "1,5 L de fundo escuro de carne (boi ou vitela)",
        group: null,
        items: [
          { qty: 1.5, qtyRange: null, unit: "litro", item: "fundo escuro de carne", prep: "boi ou vitela", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 cebola média em cubos (mirepoix)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cebola média", prep: "em cubos (mirepoix)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 cenoura média em cubos",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cenoura média", prep: "em cubos", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 talo de salsão em cubos",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "talo", item: "salsão", prep: "em cubos", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 colheres (sopa) de extrato/concentrado de tomate",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "colher-sopa", item: "extrato/concentrado de tomate", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 tomate maduro picado (opcional)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "tomate maduro", prep: "picado", alt: null, optional: true, isReference: false },
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
        raw: "2 ramos de tomilho",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "ramo", item: "tomilho", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "4 grãos de pimenta-do-reino",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: null, item: "grãos de pimenta-do-reino", prep: null, alt: null, optional: false, isReference: false },
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
      "Numa panela larga, doure a manteiga com a cebola, cenoura e salsão (mirepoix) em fogo médio até pegar cor dourada, cerca de 10 minutos.",
      "Junte a farinha e mexa por 3-4 minutos até formar um roux escuro (cor de avelã), sem queimar.",
      "Adicione o extrato de tomate e refogue por 2 minutos para tirar o azedo.",
      "Vá acrescentando o fundo escuro quente aos poucos, mexendo sempre para não empelotar.",
      "Junte louro, tomilho e pimenta-do-reino. Deixe ferver e abaixe para fogo baixo.",
      "Cozinhe destampado por 1h30, retirando a espuma/gordura que sobe à superfície de tempos em tempos.",
      "Coe em peneira fina, pressionando os sólidos para extrair todo o sabor. Ajuste o sal."
    ],
    tips: [
      "É o molho mais trabalhoso dos 5 — mas é a base do Demi-glace, Bordelaise, Robert e de praticamente todo molho escuro clássico.",
      "Quanto mais escuro o roux, mais sabor de torrado ele dá — mas cuidado: se queimar, fica amargo e precisa recomeçar.",
      "Pode ser feito em grande quantidade e congelado em porções."
    ],
    usedFor: "Base para Demi-glace, Bordelaise, Robert, Chasseur e molhos escuros para carnes."
  },
  {
    name: "Sauce Tomate",
    subgroup: "Molhos-mãe",
    desc: "Molho de tomate refogado com mirepoix, ervas e fundo claro, cozido até apurar — a versão francesa clássica do molho de tomate.",
    origin: "França",
    time: { prep: "10 min", cook: "45 min", total: "55 min" },
    yield: "≈ 600 ml",
    difficulty: "Fácil",
    tags: ["ingredient:tomate"],
    ingredients: [
      "2 colheres (sopa) de azeite ou manteiga",
      "60 g de bacon ou toucinho em cubos pequenos (tradicional, opcional)",
      "1 cebola pequena em cubos",
      "1 cenoura pequena em cubos",
      "1 talo de salsão em cubos",
      "2 dentes de alho amassados",
      "1 kg de tomate maduro sem pele e sem semente, picado (ou 800 g de tomate pelado)",
      "1 colher (sopa) de extrato de tomate",
      "300 ml de fundo claro ou água",
      "1 folha de louro, 1 ramo de tomilho",
      "1 pitada de açúcar (para equilibrar a acidez)",
      "Sal e pimenta-do-reino a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "2 colheres (sopa) de azeite ou manteiga",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "colher-sopa", item: "azeite", prep: null, alt: "manteiga", optional: false, isReference: false },
        ],
      },
      {
        raw: "60 g de bacon ou toucinho em cubos pequenos (tradicional, opcional)",
        group: null,
        items: [
          { qty: 60, qtyRange: null, unit: "grama", item: "bacon", prep: "tradicional", alt: "toucinho em cubos pequenos", optional: true, isReference: false },
        ],
      },
      {
        raw: "1 cebola pequena em cubos",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cebola pequena", prep: "em cubos", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 cenoura pequena em cubos",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cenoura pequena", prep: "em cubos", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 talo de salsão em cubos",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "talo", item: "salsão", prep: "em cubos", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 dentes de alho amassados",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "dente", item: "alho", prep: "amassados", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 kg de tomate maduro sem pele e sem semente, picado (ou 800 g de tomate pelado)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "quilograma", item: "tomate maduro", prep: "sem pele e sem semente, picado", alt: "800 g de tomate pelado", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (sopa) de extrato de tomate",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "extrato de tomate", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "300 ml de fundo claro ou água",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "mililitro", item: "fundo claro", prep: null, alt: "água", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 folha de louro, 1 ramo de tomilho",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "folha", item: "louro", prep: null, alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "ramo", item: "tomilho", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 pitada de açúcar (para equilibrar a acidez)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "pitada", item: "açúcar (para equilibrar a acidez)", prep: null, alt: null, optional: false, isReference: false },
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
      "Aqueça o azeite e doure o bacon, se usar. Junte a cebola, cenoura e salsão e refogue até amolecer, 8 minutos.",
      "Adicione o alho e o extrato de tomate, refogue por 2 minutos.",
      "Junte os tomates picados, o fundo/água, louro e tomilho.",
      "Tempere com sal, pimenta e a pitada de açúcar. Deixe ferver e abaixe o fogo.",
      "Cozinhe em fogo baixo, parcialmente tampado, por 35-40 minutos, mexendo de vez em quando.",
      "Retire louro e tomilho. Bata no liquidificador ou processador para ficar liso (opcional) e passe por peneira se quiser um molho aveludado.",
      "Ajuste sal e acidez antes de servir."
    ],
    tips: [
      "Na versão clássica francesa entra um roux leve para engrossar, mas a versão moderna (sem farinha) fica mais limpa e é a mais usada hoje.",
      "Tomates de lata de boa qualidade funcionam tão bem quanto tomate fresco fora de época.",
      "Essa é a base para muitos molhos italianos também — dá pra pensar nela como a 'ponte' entre a cozinha francesa e a italiana."
    ],
    usedFor: "Base para massas, Choron (com Béarnaise) e acompanhamento de carnes e legumes."
  },
  {
    name: "Hollandaise",
    subgroup: "Molhos-mãe",
    desc: "Molho quente e cremoso de gemas emulsionadas com manteiga clarificada e limão — clássico sobre ovos poché e aspargos.",
    origin: "França",
    time: { prep: "5 min", cook: "15 min", total: "20 min" },
    yield: "≈ 300 ml",
    difficulty: "Média (exige atenção)",
    tags: ["contains:ovo"],
    ingredients: [
      "3 gemas",
      "1 colher (sopa) de água fria",
      "200 g de manteiga clarificada, morna",
      "1 colher (sopa) de suco de limão fresco",
      "Sal a gosto",
      "1 pitada de pimenta-caiena (opcional)"
    ],
    ingredientsStructured: [
      {
        raw: "3 gemas",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: null, item: "gemas", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (sopa) de água fria",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "água fria", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "200 g de manteiga clarificada, morna",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "grama", item: "manteiga clarificada", prep: "morna", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (sopa) de suco de limão fresco",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "suco de limão fresco", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "1 pitada de pimenta-caiena (opcional)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "pitada", item: "pimenta-caiena", prep: null, alt: null, optional: true, isReference: false },
        ],
      },
    ],
    steps: [
      "Clarifique a manteiga: derreta em fogo baixo, retire a espuma da superfície e reserve só a gordura dourada (deixando o soro de leite no fundo). Mantenha morna, não quente.",
      "Em uma tigela de vidro ou inox, junte as gemas e a água fria. Bata em banho-maria (fogo baixo, água nunca fervendo forte) até dobrar de volume e formar fita — cerca de 3-4 minutos.",
      "Retire do calor e comece a adicionar a manteiga clarificada em fio bem fino, batendo sem parar, como uma maionese quente.",
      "Continue emulsionando até incorporar toda a manteiga e o molho ficar liso e encorpado.",
      "Tempere com limão, sal e caiena. Sirva imediatamente."
    ],
    tips: [
      "Nunca deixe a água do banho-maria ferver forte nem encostar no fundo da tigela — gema cozida = molho talhado.",
      "Se talhar: bata uma gema nova com 1 colher de água e vá incorporando o molho talhado aos poucos, como se fosse a manteiga.",
      "Não segura calor nem espera: Hollandaise é feita e servida na hora. Se precisar aguardar, mantenha em local morno (nunca quente) por no máximo 1h."
    ],
    usedFor: "Eggs Benedict, aspargos, peixes grelhados e é a base da Béarnaise e da Choron."
  },

  // ===================== DERIVADOS DA BÉCHAMEL =====================
  {
    name: "Mornay",
    subgroup: "Derivados da Béchamel",
    desc: "Béchamel enriquecida com queijo gruyère, parmesão e gema — usada para gratinar pratos como Croque Monsieur e legumes.",
    origin: "França",
    time: { prep: "5 min", cook: "12 min", total: "17 min" },
    yield: "≈ 500 ml",
    difficulty: "Fácil",
    tags: ["ingredient:queijo"],
    ingredients: [
      "500 ml de Béchamel quente (ver receita)",
      "60 g de queijo gruyère ralado",
      "30 g de parmesão ralado",
      "1 gema",
      "1 pitada de noz-moscada",
      "Sal e pimenta a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "500 ml de Béchamel quente (ver receita)",
        group: null,
        items: [
          { qty: 500, qtyRange: null, unit: "mililitro", item: "béchamel quente", prep: "ver receita", alt: null, optional: false, isReference: true },
        ],
      },
      {
        raw: "60 g de queijo gruyère ralado",
        group: null,
        items: [
          { qty: 60, qtyRange: null, unit: "grama", item: "queijo gruyère", prep: "ralado", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "30 g de parmesão ralado",
        group: null,
        items: [
          { qty: 30, qtyRange: null, unit: "grama", item: "parmesão", prep: "ralado", alt: null, optional: false, isReference: false },
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
    ],
    steps: [
      "Com a Béchamel ainda quente (mas fora do fogo), tempere a gema com uma colher da Béchamel para amornar (evita cozinhar a gema de uma vez).",
      "Devolva essa mistura à panela com o restante da Béchamel, misturando bem.",
      "Volte a fogo bem baixo e adicione os queijos aos poucos, mexendo até derreterem completamente — não deixe ferver depois de adicionar a gema.",
      "Ajuste noz-moscada, sal e pimenta.",
      "Use imediatamente para gratinar."
    ],
    tips: [
      "É a Béchamel enriquecida com queijo e gema — a base clássica de tudo que vai 'au gratin'.",
      "Para gratinar: cubra o prato com o molho, polvilhe mais queijo por cima e leve ao forno bem quente ou salamandra até dourar."
    ],
    usedFor: "Croque Monsieur, ovos gratinados, legumes gratinados (couve-flor, endívia), peixes gratinados."
  },
  {
    name: "Nantua",
    subgroup: "Derivados da Béchamel",
    desc: "Béchamel rosada com manteiga de cascas de camarão ou lagostim e creme de leite — molho francês clássico para peixes e frutos do mar.",
    origin: "França (Nantua)",
    time: { prep: "20 min", cook: "30 min", total: "50 min" },
    yield: "≈ 500 ml",
    difficulty: "Alta",
    tags: ["contains:frutos-do-mar"],
    ingredients: [
      "300 g de cascas e cabeças de camarão ou lagostim (para a manteiga de crustáceos)",
      "100 g de manteiga",
      "1 colher (sopa) de conhaque",
      "400 ml de Béchamel (ver receita)",
      "100 ml de creme de leite fresco",
      "1 colher (sopa) de extrato de tomate",
      "Sal, pimenta-caiena a gosto",
      "Camarões pequenos cozidos para finalizar (opcional)"
    ],
    ingredientsStructured: [
      {
        raw: "300 g de cascas e cabeças de camarão ou lagostim (para a manteiga de crustáceos)",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "grama", item: "cascas e cabeças de camarão", prep: "para a manteiga de crustáceos", alt: "lagostim", optional: false, isReference: false },
        ],
      },
      {
        raw: "100 g de manteiga",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "grama", item: "manteiga", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (sopa) de conhaque",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "conhaque", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "400 ml de Béchamel (ver receita)",
        group: null,
        items: [
          { qty: 400, qtyRange: null, unit: "mililitro", item: "béchamel", prep: "ver receita", alt: null, optional: false, isReference: true },
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
        raw: "1 colher (sopa) de extrato de tomate",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "extrato de tomate", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Sal, pimenta-caiena a gosto",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "sal", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "pimenta-caiena", prep: "a gosto", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Camarões pequenos cozidos para finalizar (opcional)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "camarões pequenos", prep: "cozidos para finalizar", alt: null, optional: true, isReference: false },
        ],
      },
    ],
    steps: [
      "Prepare a manteiga de crustáceos: refogue as cascas e cabeças na manteiga em fogo médio por 10 minutos até ficarem bem vermelhas e aromáticas.",
      "Flambe com o conhaque com cuidado (afaste o rosto e mantenha uma tampa por perto).",
      "Bata tudo (manteiga + cascas) no processador até formar uma pasta, depois derreta em fogo baixo e coe em pano/peneira fina, pressionando bem — essa gordura vermelha é a manteiga de crustáceos.",
      "Aqueça a Béchamel, junte o extrato de tomate e o creme de leite, cozinhe por 5 minutos.",
      "Fora do fogo, incorpore a manteiga de crustáceos aos poucos, batendo até emulsionar e o molho ficar rosado.",
      "Tempere com sal e caiena. Se quiser, finalize com camarões pequenos cozidos."
    ],
    tips: [
      "Não jogue fora cascas de camarão nunca mais — é o ingrediente-chave desse molho e de muitos fundos de frutos do mar.",
      "Molho clássico da região de Nantua, na França, tradicionalmente servido com quenelles de peixe."
    ],
    usedFor: "Peixes, quenelles, massas recheadas com frutos do mar, gratinados."
  },

  // ===================== DERIVADOS DO VELOUTÉ =====================
  {
    name: "Suprême",
    subgroup: "Derivados do Velouté",
    desc: "Velouté de frango enriquecido com creme de leite, manteiga e limão — molho aveludado clássico para frango poché.",
    origin: "França",
    time: { prep: "5 min", cook: "20 min", total: "25 min" },
    yield: "≈ 400 ml",
    difficulty: "Média",
    tags: ["contains:frango"],
    ingredients: [
      "400 ml de Velouté de frango (ver receita, feito com caldo de frango)",
      "100 ml de creme de leite fresco",
      "30 g de manteiga gelada",
      "Suco de 1/2 limão",
      "Sal e pimenta branca a gosto",
      "1 pitada de noz-moscada (opcional)"
    ],
    ingredientsStructured: [
      {
        raw: "400 ml de Velouté de frango (ver receita, feito com caldo de frango)",
        group: null,
        items: [
          { qty: 400, qtyRange: null, unit: "mililitro", item: "velouté de frango", prep: "ver receita, feito com caldo de frango", alt: null, optional: false, isReference: true },
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
        raw: "30 g de manteiga gelada",
        group: null,
        items: [
          { qty: 30, qtyRange: null, unit: "grama", item: "manteiga gelada", prep: null, alt: null, optional: false, isReference: false },
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
      {
        raw: "1 pitada de noz-moscada (opcional)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "pitada", item: "noz-moscada", prep: null, alt: null, optional: true, isReference: false },
        ],
      },
    ],
    steps: [
      "Aqueça o Velouté de frango em fogo médio-baixo.",
      "Junte o creme de leite e deixe reduzir levemente por 10-12 minutos, até encorpar.",
      "Retire do fogo e monte com a manteiga gelada em cubos, batendo até incorporar e dar brilho.",
      "Finalize com o suco de limão, sal, pimenta branca e noz-moscada.",
      "Coe se quiser um acabamento perfeitamente liso."
    ],
    tips: [
      "É o Velouté de frango 'enriquecido' — creme e manteiga transformam um molho simples em algo luxuoso.",
      "O toque de limão no final é o que evita que o molho fique enjoativo — não pule essa etapa."
    ],
    usedFor: "Frango poché, Suprême de frango, vol-au-vent de frango."
  },
  {
    name: "Vin Blanc",
    subgroup: "Derivados do Velouté",
    desc: "Velouté de peixe com redução de vinho branco e échalotes, finalizado com creme e manteiga — para cobrir peixes brancos escalfados.",
    origin: "França",
    time: { prep: "5 min", cook: "20 min", total: "25 min" },
    yield: "≈ 400 ml",
    difficulty: "Média",
    tags: ["contains:peixe"],
    ingredients: [
      "300 ml de Velouté de peixe (ver receita, feito com fumet de peixe)",
      "150 ml de vinho branco seco",
      "2 cebolas picadas finas",
      "100 ml de creme de leite fresco",
      "30 g de manteiga gelada",
      "Sal, pimenta branca a gosto",
      "Suco de limão a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "300 ml de Velouté de peixe (ver receita, feito com fumet de peixe)",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "mililitro", item: "velouté de peixe", prep: "ver receita, feito com fumet de peixe", alt: null, optional: false, isReference: true },
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
        raw: "2 cebolas picadas finas",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "cebolas", prep: "picadas finas", alt: null, optional: false, isReference: false },
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
        raw: "30 g de manteiga gelada",
        group: null,
        items: [
          { qty: 30, qtyRange: null, unit: "grama", item: "manteiga gelada", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Sal, pimenta branca a gosto",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "sal", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "pimenta branca", prep: "a gosto", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Suco de limão a gosto",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "suco de limão", prep: "a gosto", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Numa panela, reduza o vinho branco com as cebolas até restar 1/3 do volume.",
      "Junte o Velouté de peixe e cozinhe em fogo baixo por 8-10 minutos, mexendo de vez em quando.",
      "Adicione o creme de leite e deixe reduzir até encorpar levemente, mais 5 minutos.",
      "Coe o molho para retirar as cebolas, se preferir um acabamento liso.",
      "Fora do fogo, monte com a manteiga gelada em cubos para dar brilho.",
      "Ajuste sal, pimenta branca e um toque de limão."
    ],
    tips: [
      "Use sempre um fumet de peixe caseiro para o Velouté-base — é o que dá a diferença entre um molho genérico e um molho de verdade.",
      "Ótimo para 'nappar' (cobrir levemente) peixes escalfados ou en papillote antes de gratinar rapidamente no salamandra/forno."
    ],
    usedFor: "Peixes brancos escalfados, gratinados de peixe."
  },

  // ===================== DERIVADOS DA ESPAGNOLE =====================
  {
    name: "Demi-glace",
    subgroup: "Derivados da Espagnole",
    desc: "Espagnole reduzida pela metade com mais fundo escuro de carne — molho concentrado e brilhante, base de vários molhos clássicos de carne.",
    origin: "França",
    time: { prep: "10 min", cook: "1h30", total: "1h40" },
    yield: "≈ 500 ml",
    difficulty: "Média-alta",
    tags: ["contains:boi"],
    ingredients: [
      "1 L de Espagnole (ver receita)",
      "1 L de fundo escuro de carne adicional",
      "100 ml de vinho tinto seco (opcional, para redução extra)",
      "Sal a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "1 L de Espagnole (ver receita)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "litro", item: "espagnole", prep: "ver receita", alt: null, optional: false, isReference: true },
        ],
      },
      {
        raw: "1 L de fundo escuro de carne adicional",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "litro", item: "fundo escuro de carne adicional", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "100 ml de vinho tinto seco (opcional, para redução extra)",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "mililitro", item: "vinho tinto seco", prep: "para redução extra", alt: null, optional: true, isReference: false },
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
      "Junte a Espagnole e o fundo escuro numa panela larga.",
      "Se for usar vinho, reduza-o à parte pela metade antes de juntar, para queimar o álcool.",
      "Leve ao fogo médio-baixo e deixe reduzir lentamente, sem tampa, até reduzir para metade do volume — cerca de 1h15 a 1h30.",
      "Vá retirando a espuma e a gordura que sobem à superfície periodicamente.",
      "O ponto está certo quando o molho cobre as costas de uma colher formando um espelho brilhante.",
      "Coe em peneira fina e ajuste o sal só no final (a redução concentra o sal já presente)."
    ],
    tips: [
      "'Demi' significa metade — tradicionalmente é a Espagnole reduzida pela metade com mais fundo, dobrando a concentração de sabor.",
      "Congela muito bem em cubos de gelo — tenha sempre uma reserva pronta para enriquecer qualquer molho de carne rapidamente.",
      "É a base de incontáveis molhos clássicos: Bordelaise, Robert, Chasseur, Périgueux."
    ],
    usedFor: "Base universal para molhos de carnes vermelhas; finalização de assados e grelhados nobres."
  },
  {
    name: "Bordelaise",
    subgroup: "Derivados da Espagnole",
    desc: "Demi-glace com redução de vinho tinto, échalotes e ervas, finalizada com manteiga — clássica para acompanhar carnes bovinas grelhadas.",
    origin: "França (Bordeaux)",
    time: { prep: "10 min", cook: "30 min", total: "40 min" },
    yield: "≈ 350 ml",
    difficulty: "Média",
    tags: ["contains:boi"],
    ingredients: [
      "1 cebola pequena picada fina",
      "300 ml de vinho tinto encorpado (idealmente Bordeaux)",
      "1 ramo de tomilho, 1 folha de louro",
      "4 grãos de pimenta-do-reino amassados",
      "400 ml de Demi-glace",
      "50 g de tutano de boi em cubos (opcional, tradicional)",
      "20 g de manteiga gelada",
      "Sal e pimenta a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "1 cebola pequena picada fina",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cebola pequena", prep: "picada fina", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "300 ml de vinho tinto encorpado (idealmente Bordeaux)",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "mililitro", item: "vinho tinto encorpado (idealmente bordeaux)", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 ramo de tomilho, 1 folha de louro",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "ramo", item: "tomilho", prep: null, alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "folha", item: "louro", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "4 grãos de pimenta-do-reino amassados",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: null, item: "grãos de pimenta-do-reino", prep: "amassados", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "400 ml de Demi-glace",
        group: null,
        items: [
          { qty: 400, qtyRange: null, unit: "mililitro", item: "demi-glace", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "50 g de tutano de boi em cubos (opcional, tradicional)",
        group: null,
        items: [
          { qty: 50, qtyRange: null, unit: "grama", item: "tutano de boi", prep: "em cubos, tradicional", alt: null, optional: true, isReference: false },
        ],
      },
      {
        raw: "20 g de manteiga gelada",
        group: null,
        items: [
          { qty: 20, qtyRange: null, unit: "grama", item: "manteiga gelada", prep: null, alt: null, optional: false, isReference: false },
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
      "Numa panela, junte a cebola, vinho, tomilho, louro e pimenta-do-reino.",
      "Reduza em fogo médio até restar cerca de 1/4 do volume (bem concentrado), 15-20 minutos.",
      "Adicione a Demi-glace e cozinhe por mais 10 minutos em fogo baixo.",
      "Se for usar tutano, escalde os cubos em água quente por 1 minuto e junte ao molho nos últimos 2 minutos.",
      "Coe o molho pressionando bem os sólidos.",
      "Fora do fogo, monte com a manteiga gelada em cubos, mexendo até incorporar (beurre monté). Ajuste sal e pimenta."
    ],
    tips: [
      "Use um vinho tinto que você beberia — a qualidade do vinho define a qualidade do molho.",
      "O tutano é opcional mas é o toque clássico que dá untuosidade extra; sem ele o molho continua excelente.",
      "Combina classicamente com Chateaubriand e outros cortes nobres grelhados."
    ],
    usedFor: "Carnes bovinas grelhadas (Chateaubriand, filé, entrecôte)."
  },
  {
    name: "Sauce Robert",
    subgroup: "Derivados da Espagnole",
    desc: "Demi-glace com cebola refogada, vinho branco e mostarda Dijon — molho picante clássico para acompanhar carne de porco.",
    origin: "França",
    time: { prep: "10 min", cook: "25 min", total: "35 min" },
    yield: "≈ 350 ml",
    difficulty: "Média",
    tags: ["contains:boi", "contains:suino"],
    ingredients: [
      "1 cebola média picada bem fina",
      "20 g de manteiga",
      "150 ml de vinho branco seco",
      "400 ml de Demi-glace (ver receita)",
      "1 colher (sopa) de mostarda Dijon",
      "1 pitada de açúcar",
      "Sal e pimenta a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "1 cebola média picada bem fina",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cebola média", prep: "picada bem fina", alt: null, optional: false, isReference: false },
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
        raw: "150 ml de vinho branco seco",
        group: null,
        items: [
          { qty: 150, qtyRange: null, unit: "mililitro", item: "vinho branco seco", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "400 ml de Demi-glace (ver receita)",
        group: null,
        items: [
          { qty: 400, qtyRange: null, unit: "mililitro", item: "demi-glace", prep: "ver receita", alt: null, optional: false, isReference: true },
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
        raw: "1 pitada de açúcar",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "pitada", item: "açúcar", prep: null, alt: null, optional: false, isReference: false },
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
      "Refogue a cebola na manteiga em fogo baixo até ficar bem macia e translúcida, sem dourar muito, 8-10 minutos.",
      "Junte o vinho branco e reduza pela metade.",
      "Adicione a Demi-glace e cozinhe em fogo baixo por 10 minutos.",
      "Retire do fogo (importante: mostarda não deve ferver, senão perde força e fica amarga) e incorpore a mostarda Dijon.",
      "Tempere com açúcar, sal e pimenta a gosto."
    ],
    tips: [
      "Sempre adicione a mostarda fora do fogo — fervê-la destrói o sabor picante característico.",
      "Molho clássico para porco: harmoniza muito bem com lombo e costeletas."
    ],
    usedFor: "Carne de porco (lombo, costeletas), aves grelhadas."
  },

  // ===================== DERIVADOS DA HOLLANDAISE =====================
  {
    name: "Béarnaise",
    subgroup: "Derivados da Hollandaise",
    desc: "Hollandaise aromatizada com redução de vinho, vinagre e estragão — a dupla clássica de filé com batata frita.",
    origin: "França",
    time: { prep: "10 min", cook: "20 min", total: "30 min" },
    yield: "≈ 300 ml",
    difficulty: "Média-alta",
    tags: ["contains:ovo"],
    ingredients: [
      "2 cebolas picadas finas",
      "100 ml de vinagre de vinho branco",
      "100 ml de vinho branco seco",
      "1 ramo de estragão fresco + 1 colher (sopa) picado para finalizar",
      "5 grãos de pimenta-do-reino amassados",
      "3 gemas",
      "1 colher (sopa) de água fria",
      "200 g de manteiga clarificada, morna",
      "Sal a gosto",
      "1 fio de suco de limão (opcional)"
    ],
    ingredientsStructured: [
      {
        raw: "2 cebolas picadas finas",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "cebolas", prep: "picadas finas", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "100 ml de vinagre de vinho branco",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "mililitro", item: "vinagre de vinho branco", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "1 ramo de estragão fresco + 1 colher (sopa) picado para finalizar",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "ramo", item: "estragão fresco + 1 colher (sopa)", prep: "picado para finalizar", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "5 grãos de pimenta-do-reino amassados",
        group: null,
        items: [
          { qty: 5, qtyRange: null, unit: null, item: "grãos de pimenta-do-reino", prep: "amassados", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "3 gemas",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: null, item: "gemas", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (sopa) de água fria",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "água fria", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "200 g de manteiga clarificada, morna",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "grama", item: "manteiga clarificada", prep: "morna", alt: null, optional: false, isReference: false },
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
        raw: "1 fio de suco de limão (opcional)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "fio", item: "suco de limão", prep: null, alt: null, optional: true, isReference: false },
        ],
      },
    ],
    steps: [
      "Numa panela pequena, junte as cebolas, vinagre, vinho, o ramo de estragão e a pimenta.",
      "Reduza em fogo médio até restar cerca de 2 colheres (sopa) de líquido concentrado.",
      "Coe essa redução, descartando os sólidos, e deixe amornar.",
      "Em banho-maria, bata as gemas com a água fria e a redução coada até formar fita, como na Hollandaise.",
      "Retire do calor e incorpore a manteiga clarificada em fio fino, batendo sem parar até emulsionar.",
      "Tempere com sal e finalize com o estragão picado fresco (e limão, se quiser mais acidez). Sirva na hora."
    ],
    tips: [
      "É basicamente uma Hollandaise aromatizada com uma redução ácida de vinho e ervas — domine a Hollandaise primeiro.",
      "O estragão é a alma do molho; não substitua por outra erva se quiser o sabor clássico.",
      "Clássica acompanhante de carnes grelhadas, especialmente Chateaubriand e Steak Frites."
    ],
    usedFor: "Carnes grelhadas (a dupla clássica é Béarnaise + batata frita + filé)."
  },
  {
    name: "Choron",
    subgroup: "Derivados da Hollandaise",
    desc: "Béarnaise misturada com purê de tomate concentrado — versão mais frutada para acompanhar carnes grelhadas.",
    origin: "França",
    time: { prep: "10 min", cook: "20 min", total: "30 min" },
    yield: "≈ 300 ml",
    difficulty: "Média-alta",
    tags: ["contains:ovo", "ingredient:tomate"],
    ingredients: [
      "1 receita de Béarnaise pronta (ver receita), sem o estragão de finalização",
      "3 colheres (sopa) de purê de tomate bem concentrado (tomate sem pele, sem semente, cozido até secar)",
      "Sal a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "1 receita de Béarnaise pronta (ver receita), sem o estragão de finalização",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "receita de béarnaise pronta", prep: "ver receita; sem o estragão de finalização", alt: null, optional: false, isReference: true },
        ],
      },
      {
        raw: "3 colheres (sopa) de purê de tomate bem concentrado (tomate sem pele, sem semente, cozido até secar)",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: "colher-sopa", item: "purê de tomate bem concentrado", prep: "tomate sem pele, sem semente, cozido até secar", alt: null, optional: false, isReference: false },
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
      "Prepare a Béarnaise até o ponto final da emulsão, mas reserve o estragão picado para depois.",
      "Prepare o purê: cozinhe tomate picado sem pele/semente em fogo baixo até secar bem e virar uma pasta espessa e concentrada.",
      "Incorpore o purê de tomate morno (não quente) à Béarnaise aos poucos, mexendo delicadamente para não talhar.",
      "Ajuste o sal e finalize com um pouco do estragão picado, se desejar equilibrar com a Béarnaise original."
    ],
    tips: [
      "É simplesmente uma Béarnaise + purê de tomate concentrado.",
      "O purê de tomate precisa estar morno e bem seco; se estiver quente ou aguado, quebra a emulsão."
    ],
    usedFor: "Carnes grelhadas, especialmente Chateaubriand — alternativa mais frutada à Béarnaise pura."
  },

  // ===================== MANTEIGAS EMULSIONADAS =====================
  {
    name: "Beurre Blanc",
    subgroup: "Manteigas Emulsionadas",
    desc: "Emulsão leve de manteiga gelada com redução de vinho branco, vinagre e échalotes, sem gema — para peixes escalfados como sole e salmão.",
    origin: "França (Vale do Loire)",
    time: { prep: "5 min", cook: "15 min", total: "20 min" },
    yield: "≈ 250 ml",
    difficulty: "Média",
    tags: [],
    ingredients: [
      "2 cebolas picadas finas",
      "100 ml de vinho branco seco",
      "50 ml de vinagre de vinho branco (ou vinagre de champagne)",
      "1 colher (sopa) de creme de leite fresco (opcional, ajuda a estabilizar)",
      "250 g de manteiga gelada, em cubos",
      "Sal e pimenta branca a gosto",
      "Suco de limão a gosto (opcional)"
    ],
    ingredientsStructured: [
      {
        raw: "2 cebolas picadas finas",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "cebolas", prep: "picadas finas", alt: null, optional: false, isReference: false },
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
        raw: "50 ml de vinagre de vinho branco (ou vinagre de champagne)",
        group: null,
        items: [
          { qty: 50, qtyRange: null, unit: "mililitro", item: "vinagre de vinho branco", prep: null, alt: "vinagre de champagne", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (sopa) de creme de leite fresco (opcional, ajuda a estabilizar)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "creme de leite fresco", prep: "ajuda a estabilizar", alt: null, optional: true, isReference: false },
        ],
      },
      {
        raw: "250 g de manteiga gelada, em cubos",
        group: null,
        items: [
          { qty: 250, qtyRange: null, unit: "grama", item: "manteiga gelada", prep: "em cubos", alt: null, optional: false, isReference: false },
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
      {
        raw: "Suco de limão a gosto (opcional)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "suco de limão", prep: "a gosto", alt: null, optional: true, isReference: false },
        ],
      },
    ],
    steps: [
      "Numa panela pequena, junte as cebolas, o vinho e o vinagre.",
      "Reduza em fogo médio até restar quase seco — cerca de 2 colheres (sopa) de líquido concentrado, 8-10 minutos.",
      "Se for usar, junte o creme de leite e deixe ferver por 30 segundos (isso estabiliza a emulsão e deixa o molho mais 'seguro').",
      "Abaixe bem o fogo. Vá adicionando a manteiga gelada, cubo a cubo, batendo sem parar com fouet até cada cubo derreter antes de adicionar o próximo.",
      "O molho deve engrossar e ficar cremoso e opaco, nunca oleoso. Tire do fogo antes de acabar a manteiga se sentir que vai passar do ponto.",
      "Tempere com sal, pimenta branca e um fio de limão. Coe se quiser um acabamento mais liso. Sirva imediatamente."
    ],
    tips: [
      "O segredo é temperatura baixa e constante — calor demais derrete a manteiga em vez de emulsionar, e o molho 'quebra' (separa).",
      "Diferente da Hollandaise, não leva gema: a emulsão é só manteiga + líquido ácido, por isso é mais leve e não pode reaquecer.",
      "Não segura bem: faça pouco antes de servir e mantenha em local morno, nunca sobre fogo direto."
    ],
    usedFor: "Peixes escalfados ou grelhados, especialmente sole e salmão; vieiras."
  },

  // ===================== FUNDOS E REDUÇÕES =====================
  {
    name: "Jus de Viande",
    subgroup: "Fundos e Reduções",
    desc: "Molho de carne 'limpo', sem farinha, feito reduzindo ossos e aparas dourados com mirepoix e vinho — sabor direto de assado.",
    origin: "França",
    time: { prep: "10 min", cook: "40 min", total: "50 min" },
    yield: "≈ 300 ml",
    difficulty: "Média",
    tags: ["contains:boi"],
    ingredients: [
      "Aparas e ossos da carne que está sendo preparada (ou ossos de boi/vitela)",
      "1 cebola pequena, 1 cenoura pequena, 1 talo de salsão — em cubos (mirepoix)",
      "1 colher (sopa) de extrato de tomate",
      "200 ml de vinho tinto (opcional)",
      "800 ml de água ou fundo claro",
      "1 ramo de tomilho, 1 folha de louro",
      "Sal e pimenta a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "Aparas e ossos da carne que está sendo preparada (ou ossos de boi/vitela)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "aparas e ossos da carne que está sendo preparada", prep: null, alt: "ossos de boi/vitela", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 cebola pequena, 1 cenoura pequena, 1 talo de salsão — em cubos (mirepoix)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cebola pequena", prep: "em cubos (mirepoix)", alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: null, item: "cenoura pequena", prep: "em cubos (mirepoix)", alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "talo", item: "salsão", prep: "em cubos (mirepoix)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (sopa) de extrato de tomate",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "extrato de tomate", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "200 ml de vinho tinto (opcional)",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "mililitro", item: "vinho tinto", prep: null, alt: null, optional: true, isReference: false },
        ],
      },
      {
        raw: "800 ml de água ou fundo claro",
        group: null,
        items: [
          { qty: 800, qtyRange: null, unit: "mililitro", item: "água", prep: null, alt: "fundo claro", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 ramo de tomilho, 1 folha de louro",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "ramo", item: "tomilho", prep: null, alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "folha", item: "louro", prep: null, alt: null, optional: false, isReference: false },
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
      "Doure bem os ossos/aparas numa assadeira ou panela em fogo alto (ou no forno a 220°C) até pegar cor escura por todos os lados.",
      "Junte o mirepoix e doure junto por mais 5-8 minutos.",
      "Adicione o extrato de tomate e refogue por 2 minutos.",
      "Se usar vinho, deglaceie com ele, raspando o fundo da panela para soltar os sucos caramelizados, e deixe reduzir quase seco.",
      "Cubra com a água/fundo, junte tomilho e louro, e deixe cozinhar em fogo baixo, destampado, por 30-40 minutos, retirando a espuma.",
      "Coe pressionando os sólidos, retorne ao fogo e reduza até o ponto de nappe (cobrir as costas de uma colher).",
      "Ajuste sal e pimenta apenas no final."
    ],
    tips: [
      "Diferente do Demi-glace (que leva roux), o Jus é 'limpo' — sem farinha — resultando num molho mais leve e com sabor de carne mais direto.",
      "É o molho perfeito para aproveitar as aparas de um assado: sempre reserve ossos e sobras para fazer jus.",
      "Sirva regado direto sobre a carne fatiada — é o acabamento clássico de bistrô francês."
    ],
    usedFor: "Assados de carne em geral, aves assadas, cortes grelhados nobres."
  },
  {
    name: "Gastrique",
    subgroup: "Fundos e Reduções",
    desc: "Xarope agridoce de caramelo dissolvido em vinagre, às vezes com frutas — usado para equilibrar molhos escuros de pato, porco e caça.",
    origin: "França",
    time: { prep: "2 min", cook: "10 min", total: "12 min" },
    yield: "≈ 150 ml (para usar como base em outro molho)",
    difficulty: "Fácil (exige atenção ao caramelo)",
    tags: [],
    ingredients: [
      "100 g de açúcar",
      "80 ml de vinagre (vinho tinto, vinho branco ou balsâmico, conforme o prato)",
      "Opcional: frutas (frutas vermelhas, laranja, manga) para variações frutadas"
    ],
    ingredientsStructured: [
      {
        raw: "100 g de açúcar",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "grama", item: "açúcar", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "80 ml de vinagre (vinho tinto, vinho branco ou balsâmico, conforme o prato)",
        group: null,
        items: [
          { qty: 80, qtyRange: null, unit: "mililitro", item: "vinagre", prep: "vinho tinto, vinho branco ou balsâmico, conforme o prato", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Opcional: frutas (frutas vermelhas, laranja, manga) para variações frutadas",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "frutas", prep: "frutas vermelhas, laranja, manga, para variações frutadas", alt: null, optional: true, isReference: false },
        ],
      },
    ],
    steps: [
      "Numa panela de fundo claro (para enxergar a cor), derreta o açúcar em fogo médio sem mexer, só balançando a panela de leve, até virar caramelo âmbar.",
      "Com cuidado (vai espirrar e soltar vapor forte), deglaceie com o vinagre fora do fogo.",
      "Volte ao fogo baixo e mexa até o caramelo dissolver completamente no vinagre e formar um xarope agridoce homogêneo.",
      "Se for usar frutas, junte-as agora e deixe cozinhar por 3-5 minutos até amolecerem.",
      "Use essa base para deglacear a panela de uma carne ou finalizar um molho de fundo escuro, equilibrando doce e ácido."
    ],
    tips: [
      "Cuidado ao adicionar o vinagre no caramelo quente — o vapor é intenso; afaste o rosto e as mãos.",
      "É a base agridoce clássica para molhos de pato, foie gras e carnes de caça — combine com Demi-glace + gastrique de frutas vermelhas, por exemplo.",
      "Guarda-se bem na geladeira por semanas; útil ter uma reserva pronta."
    ],
    usedFor: "Molhos agridoces para pato, porco e caça; realce de molhos escuros."
  },
];
