// ITÁLIA
// Nota: Carbonara, Cacio e Pepe, Amatriciana, Puttanesca, Aglio e Olio, Lasanha,
// Ravioli, Tortellini, Tagliatelle, Pappardelle, Gnocchi e Agnolotti já estão na
// categoria Massas; Ossobuco em Carnes Bovinas; Vitello Tonnato em Entradas Frias;
// Porchetta em Suínos; Tiramisù, Panna Cotta e Cannoli em Sobremesas Clássicas.
// Aqui só o que ainda não apareceu em nenhuma outra categoria.
window.RECIPES = window.RECIPES || {};
window.RECIPES["italia"] = [

  // ===================== MASSAS =====================
  {
    name: "Pasta alla Norma",
    subgroup: "Massas",
    desc: "Massa siciliana com molho de tomate, berinjela frita e ricota salata ralada por cima.",
    origin: "Itália (Sicília)",
    time: { prep: "20 min", cook: "30 min", total: "50 min" },
    yield: "4 porções",
    difficulty: "Fácil",
    tags: ["diet:vegetariana", "ingredient:berinjela", "ingredient:tomate", "ingredient:queijo"],
    ingredients: [
      "350 g de rigatoni ou penne",
      "1 berinjela grande, em cubos",
      "Óleo, o suficiente para fritar",
      "3 colheres (sopa) de azeite de oliva",
      "3 dentes de alho fatiados",
      "700 g de tomate pelado picado (ou molho de tomate simples)",
      "1 pitada de flocos de pimenta",
      "100 g de ricota salata (ou parmesão), ralada grosseiramente",
      "Folhas de manjericão fresco",
      "Sal a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "350 g de rigatoni ou penne",
        group: null,
        items: [
          { qty: 350, qtyRange: null, unit: "grama", item: "rigatoni", prep: null, alt: "penne", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 berinjela grande, em cubos",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "berinjela grande", prep: "em cubos", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Óleo, o suficiente para fritar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "óleo", prep: "o suficiente para fritar", alt: null, optional: false, isReference: false },
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
        raw: "3 dentes de alho fatiados",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: "dente", item: "alho", prep: "fatiados", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "700 g de tomate pelado picado (ou molho de tomate simples)",
        group: null,
        items: [
          { qty: 700, qtyRange: null, unit: "grama", item: "tomate pelado", prep: "picado", alt: "molho de tomate simples", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 pitada de flocos de pimenta",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "pitada", item: "flocos de pimenta", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "100 g de ricota salata (ou parmesão), ralada grosseiramente",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "grama", item: "ricota salata", prep: "ralada grosseiramente", alt: "parmesão", optional: false, isReference: false },
        ],
      },
      {
        raw: "Folhas de manjericão fresco",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: "folha", item: "manjericão fresco", prep: null, alt: null, optional: false, isReference: false },
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
      "Salgue os cubos de berinjela e deixe descansar em um escorredor por 20-30 minutos, para eliminar o amargor e o excesso de água. Enxágue e seque bem.",
      "Frite a berinjela em óleo quente até dourar bem por fora e ficar macia por dentro, em lotes se necessário. Escorra em papel toalha.",
      "Numa panela, aqueça o azeite e refogue o alho fatiado até perfumar, sem dourar demais.",
      "Junte o tomate pelado, os flocos de pimenta e sal, cozinhando em fogo médio-baixo por 20-25 minutos, até o molho encorpar.",
      "Cozinhe a massa em água salgada até al dente. Reserve um pouco da água do cozimento.",
      "Escorra a massa e misture ao molho, junte a maior parte da berinjela frita, adicionando água da massa se precisar afinar.",
      "Sirva com o restante da berinjela por cima, ricota salata ralada generosamente e folhas de manjericão fresco."
    ],
    tips: [
      "Salgar a berinjela antes de fritar não é só para tirar o amargor — também reduz a quantidade de óleo que ela absorve durante a fritura.",
      "A ricota salata (queijo salgado e curado, diferente da ricota fresca) é a assinatura do prato — parmesão é um substituto aceitável, mas muda o caráter final.",
      "Prato siciliano nomeado em homenagem à ópera 'Norma' de Bellini — reza a lenda que foi elogiado como 'uma obra-prima, como a Norma'."
    ]
  },
  {
    name: "Pasta alla Gricia",
    subgroup: "Massas",
    desc: "Massa romana só com guanciale crocante, pecorino e pimenta — a 'mãe' da Carbonara e da Amatriciana, sem ovo e sem tomate.",
    origin: "Itália (Roma)",
    time: { prep: "10 min", cook: "15 min", total: "25 min" },
    yield: "2 porções",
    difficulty: "Média",
    tags: ["contains:suino", "ingredient:queijo"],
    ingredients: [
      "200 g de rigatoni ou spaghetti",
      "150 g de guanciale, em tiras",
      "80 g de pecorino romano ralado (+ extra para servir)",
      "Pimenta-do-reino preta moída na hora, generosamente",
      "Sal para a água da massa"
    ],
    ingredientsStructured: [
      {
        raw: "200 g de rigatoni ou spaghetti",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "grama", item: "rigatoni", prep: null, alt: "spaghetti", optional: false, isReference: false },
        ],
      },
      {
        raw: "150 g de guanciale, em tiras",
        group: null,
        items: [
          { qty: 150, qtyRange: null, unit: "grama", item: "guanciale", prep: "em tiras", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "80 g de pecorino romano ralado (+ extra para servir)",
        group: null,
        items: [
          { qty: 80, qtyRange: null, unit: "grama", item: "pecorino romano", prep: "ralado (+ extra para servir)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Pimenta-do-reino preta moída na hora, generosamente",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "pimenta-do-reino preta", prep: "moída na hora, generosamente", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Sal para a água da massa",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "sal para a água da massa", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Cozinhe a massa em água bem salgada até ficar al dente.",
      "Enquanto isso, doure o guanciale numa frigideira grande, em fogo médio, sem óleo, até ficar crocante e liberar bem a gordura, 6-8 minutos.",
      "Reserve 1 xícara da água do cozimento da massa antes de escorrer.",
      "Escorra a massa e transfira para a frigideira do guanciale (fogo baixo), misturando bem.",
      "Adicione um pouco da água da massa e o pecorino ralado, fora do fogo direto, mexendo vigorosamente até formar um molho cremoso que envolve bem a massa.",
      "Finalize com bastante pimenta-do-reino moída na hora. Sirva imediatamente, com mais pecorino."
    ],
    tips: [
      "É considerada a 'mãe' dos outros três clássicos romanos (Carbonara, Amatriciana, Cacio e Pepe) — apenas guanciale, pecorino e pimenta, sem ovo e sem tomate.",
      "O segredo é o mesmo do Cacio e Pepe: misturar o queijo com a água da massa fora do fogo direto, para não empelotar.",
      "Considerada por muitos romanos a mais simples e mais pura expressão da 'cucina povera' (cozinha pobre/rústica) da região."
    ]
  },
  {
    name: "Ragù alla Bolognese",
    subgroup: "Massas",
    desc: "Molho de carne moída cozido lentamente por horas com vinho, leite e tomate, servido sobre tagliatelle fresco.",
    origin: "Itália (Bolonha)",
    time: { prep: "20 min", cook: "3h", total: "3h20" },
    yield: "6 porções (para massa)",
    difficulty: "Média",
    tags: ["protein:boi", "contains:suino", "ingredient:tomate", "ingredient:vinho"],
    ingredients: [
      "500 g de carne bovina moída (patinho ou acém)",
      "150 g de pancetta ou bacon, em cubos pequenos",
      "1 cebola, 1 cenoura, 1 talo de salsão — em cubos pequenos (mirepoix fino)",
      "150 ml de vinho tinto",
      "150 ml de leite integral",
      "400 g de tomate pelado picado (ou molho de tomate simples)",
      "300 ml de caldo de carne",
      "2 colheres (sopa) de extrato de tomate",
      "Azeite de oliva",
      "Sal e pimenta a gosto",
      "Tagliatelle fresco, para servir (ver receita, categoria Massas)"
    ],
    ingredientsStructured: [
      {
        raw: "500 g de carne bovina moída (patinho ou acém)",
        group: null,
        items: [
          { qty: 500, qtyRange: null, unit: "grama", item: "carne bovina", prep: "moída (patinho ou acém)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "150 g de pancetta ou bacon, em cubos pequenos",
        group: null,
        items: [
          { qty: 150, qtyRange: null, unit: "grama", item: "pancetta", prep: null, alt: "bacon, em cubos pequenos", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 cebola, 1 cenoura, 1 talo de salsão — em cubos pequenos (mirepoix fino)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cebola", prep: "em cubos pequenos (mirepoix fino)", alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: null, item: "cenoura", prep: "em cubos pequenos (mirepoix fino)", alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "talo", item: "salsão", prep: "em cubos pequenos (mirepoix fino)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "150 ml de vinho tinto",
        group: null,
        items: [
          { qty: 150, qtyRange: null, unit: "mililitro", item: "vinho tinto", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "150 ml de leite integral",
        group: null,
        items: [
          { qty: 150, qtyRange: null, unit: "mililitro", item: "leite integral", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "400 g de tomate pelado picado (ou molho de tomate simples)",
        group: null,
        items: [
          { qty: 400, qtyRange: null, unit: "grama", item: "tomate pelado", prep: "picado", alt: "molho de tomate simples", optional: false, isReference: false },
        ],
      },
      {
        raw: "300 ml de caldo de carne",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "mililitro", item: "caldo de carne", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "Azeite de oliva",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "azeite de oliva", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "Tagliatelle fresco, para servir (ver receita, categoria Massas)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "tagliatelle fresco", prep: "para servir; ver receita, categoria massas", alt: null, optional: false, isReference: true },
        ],
      },
    ],
    steps: [
      "Numa panela funda, doure a pancetta no azeite até render a gordura. Junte a cebola, cenoura e salsão, refogando em fogo baixo até bem macios, 12-15 minutos (soffritto).",
      "Adicione a carne moída, aumentando o fogo, e cozinhe até perder a cor rosada, desmanchando bem os grumos.",
      "Junte o vinho tinto e deixe evaporar completamente, cerca de 5 minutos.",
      "Adicione o leite e deixe cozinhar até evaporar quase por completo (esse passo clássico amacia a carne e equilibra a acidez do tomate que vem a seguir).",
      "Junte o extrato de tomate, o tomate pelado e o caldo de carne. Misture bem.",
      "Deixe ferver, abaixe para fogo bem baixo (deve borbulhar só de leve) e cozinhe destampado ou parcialmente tampado por 2h30-3 horas, mexendo ocasionalmente, adicionando um pouco de água ou caldo se secar demais.",
      "O ragù está pronto quando fica bem encorpado, escuro e untuoso, com a gordura levemente separada na superfície.",
      "Ajuste sal e pimenta. Sirva sobre tagliatelle fresco — nunca com spaghetti, segundo a tradição bolonhesa."
    ],
    tips: [
      "O cozimento longo e lento (mínimo 2h30, idealmente 3-4h) é o que diferencia um ragù de verdade de um molho de carne rápido — não existe atalho para esse tempo.",
      "O leite adicionado antes do tomate é uma técnica clássica que suaviza a acidez e deixa a carne mais macia — não pule essa etapa.",
      "Em Bolonha, o ragù é servido classicamente com tagliatelle fresco ou usado em lasanha — nunca com spaghetti, apesar da fama internacional do 'spaghetti bolognese'."
    ]
  },

  // ===================== CARNES =====================
  {
    name: "Saltimbocca alla Romana",
    subgroup: "Carnes",
    desc: "Filés de vitela enrolados com presunto de Parma e sálvia, selados na manteiga e finalizados com molho de vinho branco.",
    origin: "Itália (Roma)",
    time: { prep: "15 min", cook: "10 min", total: "25 min" },
    yield: "4 porções",
    difficulty: "Fácil",
    tags: ["protein:boi", "contains:suino", "ingredient:vinho"],
    ingredients: [
      "8 filés finos de vitela (ou frango/porco, alternativas comuns)",
      "8 fatias de presunto de Parma",
      "16 folhas de sálvia fresca",
      "Farinha de trigo, para empanar levemente",
      "40 g de manteiga (dividida)",
      "2 colheres (sopa) de azeite",
      "150 ml de vinho branco seco (ou Marsala)",
      "Sal e pimenta a gosto"
    ],
    ingredientsStructured: [
      {
        raw: "8 filés finos de vitela (ou frango/porco, alternativas comuns)",
        group: null,
        items: [
          { qty: 8, qtyRange: null, unit: null, item: "filés finos de vitela", prep: null, alt: "frango/porco, alternativas comuns", optional: false, isReference: false },
        ],
      },
      {
        raw: "8 fatias de presunto de Parma",
        group: null,
        items: [
          { qty: 8, qtyRange: null, unit: "fatia", item: "presunto de parma", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "16 folhas de sálvia fresca",
        group: null,
        items: [
          { qty: 16, qtyRange: null, unit: "folha", item: "sálvia fresca", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Farinha de trigo, para empanar levemente",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "farinha de trigo", prep: "para empanar levemente", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "40 g de manteiga (dividida)",
        group: null,
        items: [
          { qty: 40, qtyRange: null, unit: "grama", item: "manteiga (dividida)", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 colheres (sopa) de azeite",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "colher-sopa", item: "azeite", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "150 ml de vinho branco seco (ou Marsala)",
        group: null,
        items: [
          { qty: 150, qtyRange: null, unit: "mililitro", item: "vinho branco seco", prep: null, alt: "marsala", optional: false, isReference: false },
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
      "Achate levemente os filés entre filme plástico, se necessário, para uniformizar a espessura.",
      "Tempere com pimenta (o presunto já vai salgar, então cuidado com o sal).",
      "Coloque uma fatia de presunto de Parma sobre cada filé, e prenda uma folha de sálvia no centro com um palito de dente.",
      "Passe cada filé (do lado sem presunto) levemente na farinha, sacudindo o excesso.",
      "Aqueça a manteiga e o azeite numa frigideira grande em fogo médio-alto. Sele os filés com o lado do presunto para baixo primeiro, por 2 minutos, depois vire e cozinhe o outro lado por mais 1-2 minutos.",
      "Retire os filés e reserve. Deglaceie a frigideira com o vinho branco, raspando o fundo, e deixe reduzir por 2-3 minutos.",
      "Volte os filés à frigideira só para aquecer no molho reduzido.",
      "Sirva imediatamente, regado com o molho da frigideira."
    ],
    tips: [
      "'Saltimbocca' significa 'pula na boca' em italiano — referência a como o prato é rápido de preparar e irresistível de comer.",
      "Não cozinhe demais: os filés são finos e cozinham muito rápido, especialmente se for usar vitela.",
      "A sálvia fresca é essencial para o aroma característico — evite substituir por sálvia seca, que tem sabor bem mais fraco."
    ]
  },

  // ===================== SOBREMESAS =====================
  {
    name: "Zabaglione",
    subgroup: "Sobremesas",
    desc: "Creme aerado de gemas batidas em banho-maria com vinho Marsala, servido morno sobre frutas ou biscoitos.",
    origin: "Itália (Piemonte)",
    time: { prep: "5 min", cook: "10 min", total: "15 min" },
    yield: "4 porções",
    difficulty: "Média",
    tags: ["protein:ovo", "ingredient:ovo", "ingredient:vinho"],
    ingredients: [
      "4 gemas",
      "60 g de açúcar",
      "100 ml de vinho Marsala",
      "Frutas frescas ou biscoitos amaretti, para servir"
    ],
    ingredientsStructured: [
      {
        raw: "4 gemas",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: null, item: "gemas", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "100 ml de vinho Marsala",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "mililitro", item: "vinho marsala", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Frutas frescas ou biscoitos amaretti, para servir",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "frutas frescas", prep: "para servir", alt: "biscoitos amaretti", optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Numa tigela de vidro ou inox, bata as gemas com o açúcar até esbranquiçar.",
      "Junte o vinho Marsala, misturando bem.",
      "Coloque a tigela em banho-maria (a água não deve tocar o fundo da tigela) e bata sem parar, com um fouet, por 8-10 minutos, até a mistura triplicar de volume e ficar leve, aerada e cremosa, formando fitas espessas.",
      "O creme deve ficar bem quente ao toque, mas nunca deve chegar a ferver ou os ovos talham.",
      "Sirva imediatamente, morno, sobre frutas frescas (morangos são clássicos) ou com biscoitos amaretti para mergulhar."
    ],
    tips: [
      "Bater sem parar é essencial — parar de bater mesmo por alguns segundos pode fazer as gemas começarem a cozinhar de forma irregular no calor do banho-maria.",
      "É uma das sobremesas italianas mais rápidas e ao mesmo tempo mais impressionantes — puro efeito de técnica e poucos ingredientes.",
      "Pode ser semi-batido e resfriado, depois incorporado a chantilly batido, para uma versão fria e mais estável (fica próxima de um semifreddo de Marsala)."
    ]
  },
  {
    name: "Semifreddo",
    subgroup: "Sobremesas",
    desc: "Sobremesa gelada e aerada de gemas, claras em neve e creme batido, congelada sem precisar de máquina de sorvete.",
    origin: "Itália",
    time: { prep: "30 min + 6h congelador", cook: "5 min", total: "≈6h30" },
    yield: "6-8 porções",
    difficulty: "Média",
    tags: ["diet:vegetariana", "ingredient:ovo"],
    ingredients: [
      "4 gemas",
      "100 g de açúcar (dividido)",
      "50 ml de água",
      "300 ml de creme de leite fresco, gelado",
      "1 colher (chá) de extrato de baunilha (ou 50 g de pasta de pistache/café, para variações de sabor)",
      "4 claras",
      "1 pitada de sal"
    ],
    ingredientsStructured: [
      {
        raw: "4 gemas",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: null, item: "gemas", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "100 g de açúcar (dividido)",
        group: null,
        items: [
          { qty: 100, qtyRange: null, unit: "grama", item: "açúcar (dividido)", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "50 ml de água",
        group: null,
        items: [
          { qty: 50, qtyRange: null, unit: "mililitro", item: "água", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "300 ml de creme de leite fresco, gelado",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "mililitro", item: "creme de leite fresco", prep: "gelado", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (chá) de extrato de baunilha (ou 50 g de pasta de pistache/café, para variações de sabor)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "extrato de baunilha", prep: null, alt: "50 g de pasta de pistache/café, para variações de sabor", optional: false, isReference: false },
        ],
      },
      {
        raw: "4 claras",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: null, item: "claras", prep: null, alt: null, optional: false, isReference: false },
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
      "Prepare uma calda: aqueça metade do açúcar com a água até dissolver e formar um xarope fino (não precisa caramelizar, só dissolver bem), fervendo por 2-3 minutos.",
      "Bata as gemas em velocidade alta enquanto despeja a calda quente em fio fino (cuidado para não queimar), continuando a bater até a mistura esfriar, engrossar e clarear (técnica de pâte à bombe).",
      "Em outra tigela, bata o creme de leite gelado até formar picos moles. Reserve.",
      "Em outra tigela ainda, bata as claras com o sal até espuma, adicione o restante do açúcar aos poucos, batendo até formar um merengue firme e brilhante.",
      "Incorpore delicadamente o creme batido à mistura de gemas, depois incorpore o merengue, em movimentos de baixo para cima, mantendo o máximo de ar possível.",
      "Se for usar um sabor (baunilha, pistache, café), incorpore agora.",
      "Despeje numa forma forrada com filme plástico (facilita desenformar) e leve ao congelador por no mínimo 6 horas, idealmente durante a noite.",
      "Desenforme e fatie para servir — a textura deve ser cremosa e macia mesmo congelada, nunca dura como um sorvete comum."
    ],
    tips: [
      "'Semifreddo' significa 'meio gelado' — a textura deve permanecer macia e cremosa mesmo depois de horas no congelador, graças ao ar incorporado pelas claras e creme batidos.",
      "Diferente de um sorvete tradicional, não precisa de máquina de sorvete nem de mexer durante o congelamento — a estrutura aerada evita a formação de cristais de gelo grandes.",
      "Extremamente versátil em sabores: pistache, café, chocolate, frutas vermelhas — todos funcionam bem incorporados na etapa final."
    ]
  },
  {
    name: "Affogato",
    subgroup: "Sobremesas",
    desc: "Bolas de sorvete de creme 'afogadas' em espresso quente na hora de servir.",
    origin: "Itália",
    time: { prep: "5 min", cook: "0 min", total: "5 min" },
    yield: "1 porção",
    difficulty: "Fácil",
    tags: ["diet:vegetariana", "ingredient:cafe"],
    ingredients: [
      "2 bolas de sorvete de creme (ou baunilha) de boa qualidade",
      "1 dose de café espresso, bem quente e recém-tirado",
      "1 fio de licor (amaretto ou café, opcional)",
      "Biscoito amaretti ou cantuccini, para acompanhar (opcional)"
    ],
    ingredientsStructured: [
      {
        raw: "2 bolas de sorvete de creme (ou baunilha) de boa qualidade",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "bolas de sorvete de creme", prep: "de boa qualidade", alt: "baunilha", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 dose de café espresso, bem quente e recém-tirado",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "dose de café espresso", prep: "bem quente e recém-tirado", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 fio de licor (amaretto ou café, opcional)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "fio", item: "licor", prep: "amaretto ou café", alt: null, optional: true, isReference: false },
        ],
      },
      {
        raw: "Biscoito amaretti ou cantuccini, para acompanhar (opcional)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "biscoito amaretti", prep: "para acompanhar", alt: "cantuccini", optional: true, isReference: false },
        ],
      },
    ],
    steps: [
      "Coloque as bolas de sorvete num copo ou tigela pequena, resistente ao calor.",
      "Prepare o espresso, bem quente e forte, na hora.",
      "Na frente de quem for consumir (para o efeito completo), despeje o espresso quente diretamente sobre o sorvete.",
      "Se desejar, adicione um fio de licor por cima.",
      "Sirva imediatamente, com uma colher pequena, comendo enquanto o sorvete começa a derreter em contato com o café quente."
    ],
    tips: [
      "'Affogato' significa 'afogado' em italiano — referência direta ao sorvete sendo 'afogado' pelo café quente.",
      "É a sobremesa italiana mais rápida e simples de todas, mas o segredo está na qualidade dos dois únicos ingredientes principais: um bom sorvete cremoso e um espresso encorpado.",
      "Sirva e coma imediatamente — o contraste entre o café quente e o sorvete gelado é o que faz a graça, e ele se perde rápido conforme o sorvete derrete."
    ]
  },
];
