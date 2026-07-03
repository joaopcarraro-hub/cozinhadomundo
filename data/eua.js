// EUA
// Nota: Eggs Benedict já está em Preparações Clássicas com Ovos; Cheesecake
// (estilo Nova York) já está em Sobremesas Clássicas.
window.RECIPES = window.RECIPES || {};
window.RECIPES["eua"] = [

  // ===================== SANDUÍCHES E FRITURAS =====================
  {
    name: "Lobster Roll",
    subgroup: "Sanduíches e Frituras",
    desc: "Sanduíche de Nova Inglaterra com salada de lagosta e maionese, servido num pão tipo hot dog tostado na manteiga.",
    origin: "EUA (Nova Inglaterra)",
    time: { prep: "20 min", cook: "10 min", total: "30 min" },
    yield: "4 porções",
    difficulty: "Fácil",
    tags: ["protein:frutos-do-mar", "ingredient:limao"],
    ingredients: [
      "500 g de carne de lagosta cozida, em pedaços grandes (cauda e pinças)",
      "3 colheres (sopa) de maionese",
      "1 talo de salsão picado bem fino",
      "1 colher (chá) de suco de limão",
      "Cebolinha picada",
      "4 pães tipo hot dog (buns, idealmente com laterais achatadas, estilo New England)",
      "40 g de manteiga",
      "Sal e pimenta a gosto",
      "Páprica, para polvilhar (opcional)"
    ],
    steps: [
      "Numa tigela, misture a carne de lagosta com a maionese, salsão picado e suco de limão, delicadamente para não desmanchar os pedaços.",
      "Tempere com sal e pimenta a gosto. Leve à geladeira até a hora de montar.",
      "Aqueça uma frigideira em fogo médio com a manteiga.",
      "Abra levemente os pães pelas laterais (não pelo topo) e doure as faces externas na manteiga até ficarem crocantes e douradas.",
      "Preencha cada pão tostado generosamente com a salada de lagosta.",
      "Finalize com cebolinha picada e uma pitada de páprica, se desejar. Sirva imediatamente."
    ],
    tips: [
      "Existem duas versões clássicas: a de Maine (fria, com maionese, como esta) e a de Connecticut (quente, só com manteiga derretida, sem maionese) — ambas são tradicionais, apenas de regiões diferentes.",
      "Tostar o pão pelas laterais (não pelo topo) na manteiga é a técnica clássica de New England — dá crocância sem abrir muito o pão.",
      "Não misture demais a salada de lagosta — pedaços grandes e visíveis da carne são parte do apelo do prato."
    ]
  },
  {
    name: "Fried Chicken",
    subgroup: "Sanduíches e Frituras",
    desc: "Frango marinado em leitelho, empanado numa crosta grossa de farinha temperada e frito — o clássico frango frito sulista.",
    origin: "EUA (Sul)",
    time: { prep: "20 min + 4h marinada", cook: "20 min", total: "≈4h40" },
    yield: "4 porções",
    difficulty: "Média",
    tags: ["protein:frango"],
    ingredients: [
      "8 pedaços de frango com osso e pele (coxa e sobrecoxa)",
      "500 ml de leitelho (buttermilk, ou leite com 1 colher de sopa de vinagre, descansado 10 min)",
      "1 colher (sopa) de molho de pimenta",
      "300 g de farinha de trigo",
      "1 colher (sopa) de páprica, 1 colher (chá) de alho em pó, 1 colher (chá) de cebola em pó",
      "1 colher (chá) de pimenta caiena",
      "Sal e pimenta a gosto",
      "Óleo, para fritar"
    ],
    steps: [
      "Misture o leitelho com o molho de pimenta. Submerja os pedaços de frango, cubra e deixe marinar na geladeira por no mínimo 4 horas (idealmente durante a noite).",
      "Misture a farinha com páprica, alho em pó, cebola em pó, caiena, sal e pimenta, numa tigela larga.",
      "Retire o frango do leitelho, deixando escorrer o excesso (mas sem secar completamente — um pouco de umidade ajuda a farinha aderir).",
      "Passe cada pedaço na mistura de farinha temperada, pressionando bem para criar uma crosta grossa e irregular. Para uma crosta ainda mais crocante, mergulhe de volta rapidamente no leitelho e passe na farinha uma segunda vez.",
      "Aqueça bastante óleo numa panela funda ou frigideira de ferro a 165-170°C.",
      "Frite os pedaços em lotes (sem lotar a panela), por 12-15 minutos, virando ocasionalmente, até dourar bem por fora e a temperatura interna atingir 74°C.",
      "Escorra sobre uma grade (não papel toalha, que amolece a parte de baixo) e deixe descansar 5 minutos antes de servir."
    ],
    tips: [
      "O leitelho (buttermilk) não é só para sabor — o ácido ajuda a amaciar a carne e a proteína do leite ajuda a farinha a aderir melhor.",
      "A dupla passagem (farinha, leitelho, farinha novamente) cria uma crosta mais grossa e irregular, com pontos extra crocantes — uma técnica valorizada em receitas sulistas clássicas.",
      "Fritar em temperatura um pouco mais baixa que outras frituras (165-170°C, não 180°C+) é importante para o frango com osso cozinhar por completo antes da crosta escurecer demais."
    ]
  },
  {
    name: "Buffalo Wings",
    subgroup: "Sanduíches e Frituras",
    desc: "Asas de frango fritas ou assadas, mergulhadas em molho picante de manteiga e pimenta — servidas com aipo e molho ranch.",
    origin: "EUA (Buffalo, Nova York)",
    time: { prep: "10 min", cook: "25 min", total: "35 min" },
    yield: "4 porções",
    difficulty: "Fácil",
    tags: ["protein:frango"],
    ingredients: [
      "1 kg de asas de frango, separadas em drumette e flat",
      "Óleo, para fritar (ou 2 colheres de sopa, para assar)",
      "Sal e pimenta a gosto",
      "Para o molho: 120 g de manteiga, 150 ml de molho de pimenta tipo Frank's RedHot (ou molho de pimenta similar), 1 colher (chá) de vinagre",
      "Aipo em talos e molho ranch ou blue cheese, para servir"
    ],
    steps: [
      "Seque bem as asas com papel toalha. Tempere com sal e pimenta.",
      "Para fritar: aqueça o óleo a 180°C e frite as asas em lotes por 10-12 minutos, até dourarem bem e ficarem crocantes, com a temperatura interna atingindo 74°C.",
      "Alternativa assada: disponha as asas numa grade sobre assadeira e asse a 220°C por 40-45 minutos, virando na metade, até ficarem crocantes.",
      "Prepare o molho: derreta a manteiga em fogo baixo, junte o molho de pimenta e o vinagre, misturando bem até emulsionar.",
      "Numa tigela grande, jogue as asas fritas/assadas ainda quentes no molho, misturando bem para cobrir por completo.",
      "Sirva imediatamente, com talos de aipo e molho ranch ou blue cheese para mergulhar."
    ],
    tips: [
      "Secar bem as asas antes de temperar e fritar é essencial para a crocância — umidade residual na pele impede que doure bem.",
      "O molho deve ser misturado com as asas ainda bem quentes, na hora de servir — se misturado com antecedência, a crocância se perde rapidamente.",
      "Criado em 1964 no Anchor Bar em Buffalo, Nova York — hoje um dos petiscos mais populares dos EUA, especialmente durante jogos esportivos."
    ]
  },

  // ===================== PRATOS DE PANELA E FORNO =====================
  {
    name: "Clam Chowder",
    subgroup: "Pratos de Panela e Forno",
    desc: "Sopa cremosa de Nova Inglaterra com amêijoas, batata e bacon, engrossada com creme de leite.",
    origin: "EUA (Nova Inglaterra)",
    time: { prep: "20 min", cook: "30 min", total: "50 min" },
    yield: "4-6 porções",
    difficulty: "Fácil",
    tags: ["protein:frutos-do-mar", "protein:suino", "ingredient:batata"],
    ingredients: [
      "500 g de amêijoas (ou vôngole), limpas (ou 2 latas de amêijoa em conserva, com o líquido)",
      "150 g de bacon em cubos",
      "1 cebola picada, 2 talos de salsão picados",
      "3 colheres (sopa) de manteiga",
      "3 colheres (sopa) de farinha de trigo",
      "500 g de batata, em cubos pequenos",
      "500 ml de caldo de peixe ou água (ou o líquido das amêijoas em conserva, complementado)",
      "500 ml de creme de leite fresco (ou uma mistura de leite e creme)",
      "1 folha de louro",
      "Sal e pimenta a gosto",
      "Salsinha picada e crackers, para servir"
    ],
    steps: [
      "Se for usar amêijoas frescas, cozinhe-as numa panela com um pouco de água até abrirem, 5-6 minutos. Retire a carne das conchas, pique se estiverem grandes, e reserve o líquido de cozimento (coado, para remover areia).",
      "Numa panela funda, doure o bacon até crocante. Retire parte para reservar, deixando o restante e a gordura na panela.",
      "Refogue a cebola e o salsão na gordura do bacon até macios, 8 minutos.",
      "Junte a manteiga e a farinha, mexendo por 2 minutos para formar um roux.",
      "Adicione o líquido das amêijoas reservado e o caldo/água aos poucos, mexendo sempre para não empelotar.",
      "Junte a batata em cubos e o louro, cozinhando em fogo médio por 15-18 minutos, até a batata ficar macia.",
      "Adicione o creme de leite e as amêijoas, aquecendo bem sem deixar ferver forte (para não talhar o creme).",
      "Ajuste sal e pimenta. Sirva com o bacon reservado por cima, salsinha picada e crackers ao lado."
    ],
    tips: [
      "É a versão 'branca' de New England (com creme) — existe também a versão 'vermelha' de Manhattan, com tomate no lugar do creme, uma variação regional distinta.",
      "Não deixe ferver forte depois de adicionar o creme de leite — pode talhar; mantenha em fogo baixo até servir.",
      "Sopa reconfortante clássica das regiões costeiras do nordeste dos EUA, tradicionalmente servida em bowls de pão (bread bowl) em São Francisco."
    ]
  },
  {
    name: "Mac and Cheese",
    subgroup: "Pratos de Panela e Forno",
    desc: "Macarrão em molho cremoso de queijo cheddar e gruyère, opcionalmente gratinado no forno com farinha de rosca.",
    origin: "EUA",
    time: { prep: "15 min", cook: "30 min", total: "45 min" },
    yield: "6 porções",
    difficulty: "Fácil",
    tags: ["protein:vegetariana", "ingredient:queijo"],
    ingredients: [
      "400 g de macarrão tipo cotovelo (elbow) ou penne",
      "60 g de manteiga",
      "60 g de farinha de trigo",
      "700 ml de leite integral, morno",
      "300 g de queijo cheddar ralado (dividido)",
      "100 g de queijo gruyère ou parmesão ralado",
      "1 colher (chá) de mostarda em pó (opcional, realça o sabor do queijo)",
      "1 pitada de noz-moscada",
      "80 g de farinha de rosca (opcional, para gratinar)",
      "Sal e pimenta a gosto"
    ],
    steps: [
      "Cozinhe o macarrão em água salgada até ficar al dente. Escorra e reserve.",
      "Numa panela, derreta a manteiga em fogo baixo, junte a farinha e cozinhe por 2 minutos, formando o roux.",
      "Adicione o leite morno aos poucos, mexendo sempre, até engrossar formando uma Béchamel lisa.",
      "Retire do fogo e incorpore a maior parte do cheddar e o gruyère, mexendo até derreter completamente. Tempere com mostarda em pó, noz-moscada, sal e pimenta.",
      "Misture o macarrão cozido ao molho de queijo, envolvendo bem.",
      "Pré-aqueça o forno a 190°C. Transfira para um refratário, polvilhe com o restante do cheddar e a farinha de rosca por cima, se for gratinar.",
      "Asse por 20-25 minutos, até borbulhar e dourar por cima. Alternativa: sirva diretamente da panela, sem levar ao forno, para uma versão cremosa mais rápida."
    ],
    tips: [
      "Ralar o queijo você mesmo (em vez de usar já ralado industrialmente) faz diferença real — queijos pré-ralados têm anticaking agents que atrapalham a fusão lisa no molho.",
      "A mostarda em pó é um truque clássico que não deixa o prato com sabor de mostarda, apenas realça e aprofunda o sabor do queijo.",
      "Pode ser enriquecido com bacon, lagosta, trufa ou pimenta jalapeño para variações mais elaboradas."
    ]
  },
  {
    name: "Beef Brisket",
    subgroup: "Pratos de Panela e Forno",
    desc: "Peito bovino temperado com rub seco e cozido lentamente por horas (defumado ou no forno) até ficar extremamente macio.",
    origin: "EUA (Texas)",
    time: { prep: "20 min + 8h defumação/forno", cook: "8h", total: "≈8h30" },
    yield: "8-10 porções",
    difficulty: "Alta",
    tags: ["protein:boi"],
    ingredients: [
      "3 kg de peito bovino (brisket), com a camada de gordura",
      "3 colheres (sopa) de sal grosso",
      "3 colheres (sopa) de pimenta-do-reino grossa",
      "1 colher (sopa) de páprica defumada",
      "1 colher (sopa) de alho em pó",
      "Molho barbecue, para servir"
    ],
    steps: [
      "Apare o excesso de gordura da peça, deixando uma camada de cerca de 5-6 mm por cima (protege a carne durante o cozimento longo).",
      "Misture o sal, pimenta, páprica e alho em pó, formando o rub. Esfregue generosamente por toda a peça.",
      "Se tiver defumador: defume a 110-120°C por 6-8 horas, até a temperatura interna atingir 95-96°C (a carne deve estar extremamente macia, quase desmanchando).",
      "Alternativa no forno: asse a 120°C, com a peça envolta em papel-alumínio depois das primeiras 3 horas (para reter umidade), por 7-8 horas no total, até a mesma temperatura interna.",
      "Retire e deixe descansar, envolto em papel-alumínio ou papel manteiga dentro de uma caixa térmica (cooler), por no mínimo 1 hora — esse descanso longo é essencial para a textura final.",
      "Fatie contra as fibras, em fatias não muito finas.",
      "Sirva com molho barbecue à parte, acompanhado de pão e picles."
    ],
    tips: [
      "O cozimento extremamente longo e lento em baixa temperatura é o que transforma esse corte naturalmente duro em algo macio — não existe atalho real para o tempo necessário.",
      "O descanso longo após o cozimento (dentro de uma caixa térmica) é tão importante quanto o próprio cozimento — permite que os sucos se redistribuam por toda a peça.",
      "Fatiar sempre contra as fibras da carne é essencial para a maciez ao morder, independente de quão bem cozida a peça esteja."
    ]
  },

  // ===================== SOBREMESAS =====================
  {
    name: "Apple Pie",
    subgroup: "Sobremesas",
    desc: "Torta clássica americana de massa amanteigada com recheio de maçã fatiada, canela e noz-moscada.",
    origin: "EUA",
    time: { prep: "40 min + 1h geladeira", cook: "50 min", total: "2h30" },
    yield: "8 porções",
    difficulty: "Média",
    tags: ["protein:vegetariana", "ingredient:ovo"],
    ingredients: [
      "Para a massa: 350 g de farinha de trigo, 250 g de manteiga gelada em cubos, 1 pitada de sal, 1 colher (sopa) de açúcar, 100 ml de água gelada",
      "Para o recheio: 1 kg de maçã (mistura de tipos ácidos e doces), descascada e fatiada",
      "100 g de açúcar (+ extra para polvilhar)",
      "1 colher (sopa) de amido de milho",
      "1 colher (chá) de canela, 1 pitada de noz-moscada",
      "Suco de 1/2 limão",
      "1 gema + 1 colher de leite, para pincelar"
    ],
    steps: [
      "Prepare a massa: misture a farinha, sal e açúcar. Adicione a manteiga gelada e trabalhe rapidamente com as pontas dos dedos (ou processador, pulsando) até formar uma farofa grossa com pedaços visíveis de manteiga.",
      "Adicione a água gelada aos poucos, misturando só até a massa se unir (sem sovar). Divida em dois discos, embrulhe e leve à geladeira por no mínimo 1 hora.",
      "Misture as maçãs fatiadas com açúcar, amido de milho, canela, noz-moscada e suco de limão. Deixe descansar por 15 minutos.",
      "Abra um disco de massa e forre uma forma de torta (23 cm), deixando um pouco de sobra nas bordas.",
      "Preencha com o recheio de maçã, incluindo o suco que se formou.",
      "Abra o segundo disco e cubra a torta (inteiro, ou cortado em tiras para um padrão trançado), selando as bordas e cortando o excesso.",
      "Faça pequenos furos ou cortes decorativos na massa de cima, para o vapor escapar durante o forno.",
      "Pincele com a mistura de gema e leite, polvilhe com açúcar.",
      "Asse a 200°C por 20 minutos, depois abaixe para 180°C e continue assando por mais 30-35 minutos, até a massa dourar bem e o recheio borbulhar pelos furos.",
      "Deixe esfriar por pelo menos 2 horas antes de cortar — isso permite que o recheio firme e não escorra ao fatiar."
    ],
    tips: [
      "Manter a manteiga bem gelada durante todo o processo (e trabalhar rápido) é o segredo de uma massa amanteigada e folhada — se a manteiga derreter na massa antes de assar, o resultado fica denso em vez de crocante.",
      "Deixar esfriar completamente antes de cortar é essencial — cortar a torta ainda quente resulta num recheio líquido que escorre para fora, mesmo que o sabor esteja perfeito.",
      "Uma mistura de maçãs (algumas mais ácidas, outras mais doces) dá um sabor mais complexo do que usar um único tipo."
    ]
  },
];
