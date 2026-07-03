// BRASIL POR REGIÃO
// Nota: Tacacá, Acarajé, Vatapá, Baião de Dois, Barreado e Arroz Carreteiro já estão
// detalhados na categoria "Brasileiros Obrigatórios" — aqui o foco são os pratos
// regionais que ainda não apareceram em nenhuma outra categoria.
window.RECIPES = window.RECIPES || {};
window.RECIPES["brasil-regional"] = [

  // ===================== NORTE =====================
  {
    name: "Pato no Tucupi",
    subgroup: "Norte",
    desc: "Pato cozido no caldo amarelo de mandioca (tucupi) com folhas de jambu — prato de festa típico do Pará.",
    origin: "Brasil (Pará)",
    time: { prep: "30 min + 2h marinada", cook: "1h30", total: "≈4h" },
    yield: "6 porções",
    difficulty: "Média",
    tags: ["protein:ave", "ingredient:mandioca"],
    ingredients: [
      "1 pato inteiro, em pedaços",
      "4 dentes de alho amassados",
      "Suco de 2 limões",
      "1,5 L de tucupi (fervido, ver nota de segurança na receita Tacacá)",
      "2 maços de folhas de jambu",
      "1 cebola picada",
      "Pimenta-de-cheiro a gosto",
      "Sal a gosto"
    ],
    steps: [
      "Tempere o pato com sal, alho amassado e suco de limão. Deixe marinar na geladeira por 2 horas.",
      "Numa panela funda, doure os pedaços de pato em fogo médio-alto até pegarem cor por todos os lados, liberando parte da gordura.",
      "Retire o excesso de gordura da panela, deixando só um pouco para refogar a cebola até dourar.",
      "Cubra o pato com o tucupi já fervido (nunca use tucupi cru — ver nota de segurança). Deixe ferver e abaixe o fogo.",
      "Cozinhe em fogo baixo, tampado, por 1h-1h20, até o pato ficar bem macio.",
      "Cozinhe as folhas de jambu separadamente em água fervente com sal por 3-5 minutos, até ficarem macias.",
      "Junte o jambu cozido ao pato nos últimos 10 minutos, misturando delicadamente.",
      "Ajuste o sal, finalize com pimenta-de-cheiro a gosto. Sirva bem quente, com arroz branco."
    ],
    tips: [
      "O tucupi precisa sempre ser fervido antes do consumo — é extraído da mandioca brava e contém compostos que só são eliminados pela fervura prolongada (mesmo se comprado já processado, ferva novamente por segurança).",
      "O jambu traz a característica sensação de formigamento na boca, marca registrada dos pratos paraenses que o utilizam.",
      "Prato de festa tradicional do Pará, presente em quase todas as celebrações familiares e religiosas da região."
    ]
  },
  {
    name: "Maniçoba",
    subgroup: "Norte",
    desc: "A 'feijoada preta' do Pará — folha de mandioca cozida por dias com várias carnes de porco, até perder a toxicidade.",
    origin: "Brasil (Pará)",
    time: { prep: "20 min", cook: "5-7 dias (folha) + 3h (montagem final)", total: "Vários dias" },
    yield: "10 porções",
    difficulty: "Alta (exige tempo)",
    tags: ["protein:suino", "protein:boi", "ingredient:mandioca"],
    ingredients: [
      "2 kg de folha de mandioca brava, moída (maniva/maniçoba, encontrada já moída em mercados paraenses ou congelada)",
      "300 g de carne seca dessalgada",
      "300 g de costelinha de porco salgada, dessalgada",
      "200 g de bacon em pedaço",
      "200 g de linguiça calabresa",
      "200 g de paio",
      "1 pé e 1 orelha de porco (opcional, tradicional)",
      "1 cebola picada, 4 dentes de alho picados",
      "Sal a gosto"
    ],
    steps: [
      "Cozinhe a folha de mandioca moída em água, trocando a água e fervendo repetidamente por 5 a 7 dias seguidos (mínimo de 7 horas de fervura por dia) — esse cozimento extremamente prolongado é indispensável para eliminar os compostos tóxicos naturalmente presentes na folha crua.",
      "Ao final desse processo (a folha deve estar bem macia e sem qualquer sabor ou cheiro amargo residual), reserve.",
      "Cozinhe separadamente as carnes salgadas (carne seca, costelinha, pé e orelha) em água até ficarem macias, cerca de 1-1h30.",
      "Numa panela grande, refogue a cebola e o alho. Junte todas as carnes (as pré-cozidas e a linguiça e paio crus) e refogue por alguns minutos.",
      "Adicione a folha de mandioca já bem cozida, misturando tudo muito bem.",
      "Cozinhe em fogo baixo por mais 1h30-2 horas, mexendo ocasionalmente, até os sabores se incorporarem completamente.",
      "Ajuste o sal (as carnes salgadas já temperam bastante). Sirva com arroz branco e farinha de mandioca."
    ],
    tips: [
      "ATENÇÃO DE SEGURANÇA: a folha de mandioca brava crua contém compostos cianogênicos tóxicos. O cozimento prolongado (dias, não horas) é absolutamente essencial e não pode ser abreviado — siga rigorosamente o tempo tradicional ou compre a folha já processada e pronta para o cozimento final.",
      "É considerada a 'feijoada preta' do Pará — um prato de preparo trabalhoso e demorado, tradicionalmente feito para grandes celebrações.",
      "Por causa do tempo de preparo da folha, muitas famílias compram a maniva já parcialmente processada em mercados especializados, reduzindo o tempo de cozimento em casa."
    ]
  },
  {
    name: "Pirarucu de Casaca",
    subgroup: "Norte",
    desc: "Camadas de peixe amazônico desfiado, purê de mandioca e banana frita, gratinadas no forno — o 'shepherd's pie' amazônico.",
    origin: "Brasil (Amazônia)",
    time: { prep: "30 min", cook: "45 min", total: "1h15" },
    yield: "6 porções",
    difficulty: "Média",
    tags: ["protein:peixe", "ingredient:mandioca", "ingredient:azeitona"],
    ingredients: [
      "800 g de pirarucu salgado (ou fresco, dessalgado se necessário)",
      "1 kg de banana-da-terra madura",
      "1 kg de mandioca ou batata, para o purê",
      "100 ml de leite, 50 g de manteiga (para o purê)",
      "1 cebola fatiada, 2 tomates fatiados",
      "3 dentes de alho picados",
      "100 g de azeitonas pretas",
      "2 ovos cozidos, fatiados",
      "Azeite de oliva",
      "Sal e pimenta a gosto"
    ],
    steps: [
      "Se o pirarucu for salgado, deixe de molho por 12-24h, trocando a água, para dessalgar. Cozinhe em água até ficar macio, depois desfie em lascas grandes, removendo espinhas.",
      "Frite fatias de banana-da-terra madura em um pouco de óleo até dourarem, escorra em papel toalha.",
      "Cozinhe a mandioca (ou batata) até macia, amasse com leite e manteiga até formar um purê cremoso.",
      "Numa frigideira, refogue a cebola e o alho no azeite até dourarem, junte o pirarucu desfiado e refogue por 5 minutos, temperando com sal e pimenta.",
      "Pré-aqueça o forno a 200°C. Num refratário, monte camadas: purê de mandioca no fundo, o pirarucu refogado por cima, fatias de banana frita, tomate fatiado.",
      "Decore com rodelas de ovo cozido e azeitonas pretas por cima. Regue com um fio de azeite.",
      "Leve ao forno por 15-20 minutos, até aquecer bem e dourar levemente por cima. Sirva quente."
    ],
    tips: [
      "O pirarucu é um dos maiores peixes de água doce do mundo, típico da Amazônia — na falta dele, bacalhau ou outro peixe branco firme e salgado pode substituir com resultado similar.",
      "A combinação de peixe salgado com banana frita doce é a assinatura clássica desse prato, equilibrando salgado e doce numa mesma garfada.",
      "É uma espécie de 'shepherd's pie' amazônico, com camadas bem definidas e visualmente bonito para servir em ocasiões especiais."
    ]
  },

  // ===================== NORDESTE =====================
  {
    name: "Sarapatel",
    subgroup: "Nordeste",
    desc: "Guisado de miúdos de porco (fígado, coração, rim, bucho) em molho apurado, tradicionalmente engrossado com sangue.",
    origin: "Brasil (Pernambuco)",
    time: { prep: "30 min", cook: "1h30", total: "2h" },
    yield: "6 porções",
    difficulty: "Média",
    tags: ["protein:suino"],
    ingredients: [
      "1 kg de miúdos de porco variados (fígado, coração, rim, bucho), limpos e em cubos",
      "300 ml de sangue de porco (opcional, tradicional, pode omitir)",
      "Suco de 2 limões",
      "1 cebola picada, 4 dentes de alho picados",
      "2 tomates picados sem pele",
      "1 pimentão picado",
      "1 pimenta malagueta picada (a gosto)",
      "Folhas de louro, cominho, coentro",
      "Vinagre e água, o suficiente para cobrir",
      "Sal e pimenta a gosto"
    ],
    steps: [
      "Lave bem os miúdos e deixe de molho com água e suco de limão por 20-30 minutos, para eliminar odores fortes. Escorra e corte em cubos pequenos e uniformes.",
      "Numa panela, cozinhe os miúdos mais firmes (coração, rim) em água com um pouco de vinagre por 20-25 minutos, até amaciarem. Adicione o fígado e o bucho nos últimos 10 minutos (cozinham mais rápido).",
      "Escorra e reserve o caldo do cozimento.",
      "Numa panela separada, refogue a cebola, alho e pimentão até dourarem. Junte o tomate e a malagueta, refogando até desmanchar.",
      "Adicione os miúdos cozidos, o louro, cominho e um pouco do caldo reservado.",
      "Se for usar o sangue (tradicional para engrossar e dar cor escura característica), adicione agora, mexendo sem parar em fogo baixo até incorporar (não deixe ferver forte depois de adicionar, para não talhar).",
      "Cozinhe em fogo baixo por 20-30 minutos, até o molho encorpar. Ajuste sal e pimenta, finalize com coentro picado.",
      "Sirva quente, com farinha de mandioca e arroz branco."
    ],
    tips: [
      "A versão com sangue de porco (que dá cor escura e engrossa naturalmente) é a mais tradicional, mas o prato é perfeitamente saboroso e completo sem esse ingrediente, para quem preferir.",
      "O molho de limão inicial é essencial para suavizar o sabor forte característico dos miúdos — não pule essa etapa.",
      "Prato de forte tradição nordestina, geralmente preparado em ocasiões de abate do porco, aproveitando integralmente o animal."
    ]
  },
  {
    name: "Carne de Sol com Macaxeira",
    subgroup: "Nordeste",
    desc: "Carne salgada e curada, selada na manteiga de garrafa e servida sobre mandioca cozida.",
    origin: "Brasil (Nordeste)",
    time: { prep: "15 min + dessalgar", cook: "30 min", total: "≈1h" },
    yield: "4 porções",
    difficulty: "Fácil",
    tags: ["protein:boi", "ingredient:mandioca"],
    ingredients: [
      "600 g de carne de sol, dessalgada (de molho em água ou leite por 4-8h, trocando o líquido)",
      "1 kg de macaxeira (mandioca), descascada",
      "3 colheres (sopa) de manteiga de garrafa (ou manteiga comum)",
      "1 cebola grande fatiada em rodelas",
      "3 dentes de alho picados",
      "Coentro picado",
      "Sal (com moderação) e pimenta a gosto"
    ],
    steps: [
      "Cozinhe a macaxeira em água salgada até ficar bem macia, 20-25 minutos. Escorra e reserve, mantendo aquecida.",
      "Corte a carne de sol dessalgada em pedaços ou tiras grossas.",
      "Aqueça a manteiga de garrafa numa frigideira em fogo médio-alto e sele a carne de sol até dourar bem por fora, mantendo suculenta por dentro, 4-5 minutos de cada lado.",
      "Retire a carne e reserve. Na mesma frigideira, refogue a cebola em rodelas e o alho até a cebola ficar macia e levemente dourada nas bordas.",
      "Volte a carne à frigideira, misturando com a cebola refogada por 1-2 minutos.",
      "Ajuste sal e pimenta, finalize com coentro picado.",
      "Sirva a carne de sol sobre ou ao lado da macaxeira cozida, regada com um pouco da manteiga de garrafa."
    ],
    tips: [
      "Diferente do charque (mais salgado e curado por mais tempo), a carne de sol é salgada e curada por pouco tempo, exigindo dessalga mais curta — prove um pedacinho antes de cozinhar para verificar o ponto de sal.",
      "A manteiga de garrafa (clarificada, típica nordestina) dá um sabor característico que a manteiga comum não replica totalmente, mas é um substituto aceitável.",
      "Um dos pratos mais populares e queridos de toda a região Nordeste, simples de fazer mas com sabor profundamente reconfortante."
    ]
  },

  // ===================== CENTRO-OESTE =====================
  {
    name: "Arroz com Pequi",
    subgroup: "Centro-Oeste",
    desc: "Arroz refogado com pequi, fruto aromático do Cerrado de caroço espinhoso — clássico goiano.",
    origin: "Brasil (Goiás)",
    time: { prep: "15 min", cook: "30 min", total: "45 min" },
    yield: "6 porções",
    difficulty: "Fácil",
    tags: ["ingredient:arroz"],
    ingredients: [
      "8-10 pequis inteiros (frescos ou em conserva)",
      "3 colheres (sopa) de óleo",
      "1 cebola picada, 3 dentes de alho picados",
      "3 xícaras de arroz",
      "6 xícaras de caldo de galinha",
      "Sal a gosto"
    ],
    steps: [
      "Se os pequis forem frescos, lave bem e corte ao meio com muito cuidado (o caroço tem espinhos internos finos e perigosos — nunca morda o caroço diretamente).",
      "Numa panela, aqueça o óleo e refogue a cebola e o alho até dourarem.",
      "Junte os pequis (inteiros ou em metades) e refogue por 3-4 minutos, para liberar o aroma e o óleo característico da fruta.",
      "Adicione o arroz, misturando bem com o refogado e os pequis.",
      "Cubra com o caldo de galinha quente, ajuste o sal, tampe e cozinhe em fogo baixo por 18-20 minutos, até o arroz absorver o líquido e ficar macio.",
      "Sirva quente, com os pequis distribuídos pelo arroz — cada pessoa deve comer a polpa ao redor do caroço com cuidado, sem morder o caroço central."
    ],
    tips: [
      "O pequi tem um caroço interno cheio de espinhos finos e afiados — a polpa ao redor é deliciosa e deve ser chupada/raspada com cuidado, mas nunca morda até o centro.",
      "O aroma e sabor do pequi são únicos e intensos — é um dos ingredientes mais simbólicos e queridos da culinária do Cerrado brasileiro.",
      "Encontrado fresco na época da safra (dezembro a março) ou em conserva o ano todo em mercados de Goiás e região."
    ]
  },
  {
    name: "Pintado na Brasa",
    subgroup: "Centro-Oeste",
    desc: "Postas de peixe pintado marinadas em limão e alho, grelhadas com páprica defumada — prato do Pantanal.",
    origin: "Brasil (Pantanal)",
    time: { prep: "20 min + 1h marinada", cook: "25 min", total: "1h45" },
    yield: "4 porções",
    difficulty: "Fácil",
    tags: ["protein:peixe"],
    ingredients: [
      "4 postas de peixe pintado (ou surubim), cerca de 250 g cada",
      "Suco de 2 limões",
      "4 dentes de alho amassados",
      "3 colheres (sopa) de azeite",
      "Páprica defumada",
      "Sal e pimenta a gosto",
      "Salsinha picada"
    ],
    steps: [
      "Tempere as postas de peixe com sal, pimenta, alho amassado, suco de limão e azeite. Deixe marinar na geladeira por 1 hora.",
      "Prepare a churrasqueira ou grelha em fogo médio-alto.",
      "Grelhe as postas por 6-8 minutos de cada lado (dependendo da espessura), até a carne ficar opaca e se soltar facilmente com um garfo.",
      "Polvilhe com páprica defumada durante o cozimento, para realçar o sabor e a cor.",
      "Finalize com salsinha picada fresca e sirva com um fio extra de azeite e limão."
    ],
    tips: [
      "O peixe pintado tem a carne firme e sem muitas espinhas, ideal para grelhar em postas sem se desmanchar na grelha.",
      "Não vire o peixe cedo demais — deixe formar uma crosta grelhada antes de tentar virar, ou ele pode grudar e quebrar.",
      "Um clássico do Pantanal e do Centro-Oeste brasileiro, geralmente servido com pirão feito do próprio caldo de cozimento ou arroz."
    ]
  },
  {
    name: "Mojica",
    subgroup: "Centro-Oeste",
    desc: "Caldo pantaneiro de peixe de água doce engrossado com mandioca amassada, receita tradicional de pescadores.",
    origin: "Brasil (Pantanal / Mato Grosso)",
    time: { prep: "20 min", cook: "30 min", total: "50 min" },
    yield: "4 porções",
    difficulty: "Fácil",
    tags: ["protein:peixe", "ingredient:mandioca"],
    ingredients: [
      "800 g de posta de peixe de água doce (pintado, pacu ou dourado)",
      "3 colheres (sopa) de óleo",
      "1 cebola picada, 3 dentes de alho picados",
      "2 tomates picados sem pele",
      "500 ml de água ou caldo de peixe",
      "500 g de mandioca, cozida e amassada (ou farinha de mandioca, para engrossar)",
      "Coentro e cebolinha picados",
      "Sal e pimenta a gosto"
    ],
    steps: [
      "Tempere as postas de peixe com sal e pimenta.",
      "Numa panela, aqueça o óleo e refogue a cebola e o alho até dourarem.",
      "Junte o tomate picado e refogue até desmanchar, formando um refogado encorpado.",
      "Adicione a água/caldo e deixe ferver.",
      "Coloque as postas de peixe na panela, reduza o fogo e cozinhe em fogo médio-baixo por 15-18 minutos, até o peixe ficar macio e cozido por dentro.",
      "Retire delicadamente as postas (para não desmanchar) e reserve.",
      "Junte a mandioca amassada ao caldo restante, mexendo até engrossar levemente, formando um caldo cremoso.",
      "Volte o peixe à panela com cuidado, ajuste sal e pimenta, finalize com coentro e cebolinha picados.",
      "Sirva bem quente, num prato fundo, com o caldo cremoso envolvendo o peixe."
    ],
    tips: [
      "É essencialmente um caldo/mojo de peixe engrossado com mandioca — típico da culinária pantaneira, feito tradicionalmente por pescadores com o peixe do dia.",
      "Cuidado ao mexer o peixe já cozido, para não desmanchá-lo — retire e devolva à panela com delicadeza.",
      "Peixes de água doce da região (pintado, pacu, dourado) são os tradicionais, mas qualquer peixe branco firme funciona bem."
    ]
  },

  // ===================== SUDESTE =====================
  {
    name: "Frango com Quiabo",
    subgroup: "Sudeste",
    desc: "Frango caipira ensopado com quiabo salteado à parte para reduzir a baba — clássico mineiro de domingo.",
    origin: "Brasil (Minas Gerais)",
    time: { prep: "20 min", cook: "40 min", total: "1h" },
    yield: "6 porções",
    difficulty: "Fácil",
    tags: ["protein:frango"],
    ingredients: [
      "1 frango caipira, em pedaços",
      "500 g de quiabo, em rodelas",
      "3 colheres (sopa) de óleo ou banha",
      "1 cebola picada, 4 dentes de alho picados",
      "2 tomates picados sem pele",
      "Suco de 1 limão (para o quiabo)",
      "Cheiro-verde picado",
      "Sal e pimenta a gosto"
    ],
    steps: [
      "Tempere o frango com sal e pimenta. Numa panela, aqueça o óleo e doure bem os pedaços por todos os lados. Retire e reserve.",
      "Na mesma panela, refogue a cebola e o alho até dourarem. Junte o tomate e refogue até desmanchar.",
      "Volte o frango à panela, cubra com água até quase cobrir, tampe e cozinhe em fogo médio-baixo por 25-30 minutos, até o frango ficar macio.",
      "Enquanto isso, tempere o quiabo em rodelas com o suco de limão e uma pitada de sal, deixando descansar por 10 minutos (esse truque ajuda a reduzir a baba característica do quiabo).",
      "Numa frigideira separada, salteie o quiabo em fogo alto com um pouco de óleo, mexendo bastante, até dourar levemente e reduzir a baba, cerca de 8-10 minutos.",
      "Junte o quiabo salteado ao frango nos últimos 5-8 minutos de cozimento, misturando bem.",
      "Ajuste sal e pimenta, finalize com cheiro-verde picado. Sirva com arroz branco e, se desejar, angu ou polenta."
    ],
    tips: [
      "Saltear o quiabo separadamente em fogo alto, antes de juntar ao frango, é o segredo para reduzir a textura viscosa (baba) característica do vegetal.",
      "O limão no quiabo antes de cozinhar também ajuda a controlar a baba — um truque tradicional mineiro.",
      "Prato típico do interior de Minas Gerais, tradicionalmente preparado com galinha caipira e servido em almoços de domingo em família."
    ]
  },
  {
    name: "Picadinho",
    subgroup: "Sudeste",
    desc: "Cubos de carne bovina refogados com tomate e pimentão, servidos com arroz, feijão, farofa e ovo frito por cima.",
    origin: "Brasil",
    time: { prep: "15 min", cook: "35 min", total: "50 min" },
    yield: "4 porções",
    difficulty: "Fácil",
    tags: ["protein:boi", "ingredient:ovo"],
    ingredients: [
      "600 g de coxão mole ou patinho, em cubos pequenos",
      "3 colheres (sopa) de óleo",
      "1 cebola picada, 3 dentes de alho picados",
      "2 tomates picados sem pele",
      "1 pimentão picado",
      "200 ml de caldo de carne ou água",
      "100 g de ervilha (opcional)",
      "2 ovos fritos, para servir (tradicional)",
      "Cheiro-verde picado",
      "Sal e pimenta a gosto"
    ],
    steps: [
      "Tempere a carne em cubos com sal e pimenta.",
      "Numa panela, aqueça o óleo em fogo alto e doure bem a carne, em lotes se necessário (para não amontoar e cozinhar no próprio vapor em vez de dourar).",
      "Retire a carne e reserve. Na mesma panela, refogue a cebola, alho e pimentão até dourarem.",
      "Junte o tomate picado e refogue até desmanchar.",
      "Volte a carne à panela, cubra com o caldo/água, tampe e cozinhe em fogo médio-baixo por 20-25 minutos, até a carne ficar macia e o molho encorpar.",
      "Se for usar, junte a ervilha nos últimos 5 minutos.",
      "Ajuste sal e pimenta, finalize com cheiro-verde picado.",
      "Sirva com arroz branco, feijão, farofa e um ovo frito por cima de cada porção, no estilo tradicional."
    ],
    tips: [
      "Dourar bem a carne em lotes (sem lotar a panela) é essencial para desenvolver sabor — carne amontoada solta água e cozinha no vapor em vez de selar.",
      "É um dos pratos mais tradicionais e presentes nas casas brasileiras, com pequenas variações em cada família — simples, rápido e reconfortante.",
      "O ovo frito com gema mole por cima é o toque clássico que muitos consideram indispensável ao prato."
    ]
  },

  // ===================== SUL =====================
  {
    name: "Entrevero",
    subgroup: "Sul",
    desc: "Mistura de carne, linguiça e miúdos grelhados com ovos mexidos — jeito gaúcho de aproveitar sobras de churrasco.",
    origin: "Brasil (Rio Grande do Sul)",
    time: { prep: "15 min", cook: "20 min", total: "35 min" },
    yield: "4 porções",
    difficulty: "Fácil",
    tags: ["protein:boi", "protein:suino", "protein:frango", "ingredient:ovo"],
    ingredients: [
      "300 g de carne bovina grelhada (sobras de churrasco ou carne fresca), em cubos ou tiras",
      "200 g de linguiça, em rodelas",
      "150 g de coração de galinha (opcional, tradicional)",
      "2 colheres (sopa) de óleo",
      "1 cebola picada, 2 dentes de alho picados",
      "1 pimentão picado",
      "3 ovos",
      "Cheiro-verde picado",
      "Sal e pimenta a gosto"
    ],
    steps: [
      "Se for usar carne fresca, tempere e grelhe rapidamente em fogo alto até dourar, depois corte em cubos ou tiras. Se for usar sobras de churrasco, apenas corte em pedaços.",
      "Numa frigideira grande, aqueça o óleo e refogue a cebola, alho e pimentão até dourarem.",
      "Junte a linguiça e o coração de galinha (se usar), refogando até dourarem bem.",
      "Adicione a carne (fresca grelhada ou sobras) e misture bem, deixando aquecer e incorporar sabores por 5 minutos.",
      "Bata os ovos levemente e despeje sobre a mistura, mexendo como um ovo mexido, até os ovos cozinharem e envolverem todos os ingredientes.",
      "Ajuste sal e pimenta, finalize com cheiro-verde picado.",
      "Sirva quente, tradicionalmente acompanhado de arroz branco, farofa ou pão."
    ],
    tips: [
      "'Entrevero' significa literalmente 'mistura confusa' em gauchês — é o prato perfeito para aproveitar sobras de churrasco do dia anterior.",
      "Não existe receita fixa: cada família do Rio Grande do Sul tem sua própria combinação de carnes e miúdos, conforme o que sobrou do churrasco.",
      "É o equivalente gaúcho de um 'prato de aproveitamento', mas se tornou um clássico por direito próprio."
    ]
  },
  {
    name: "Galeto Al Primo Canto",
    subgroup: "Sul",
    desc: "Frango jovem aberto em borboleta, marinado e assado, servido com polenta e molho de campanha — herança italiana da Serra Gaúcha.",
    origin: "Brasil (Serra Gaúcha, imigração italiana)",
    time: { prep: "20 min + 2h marinada", cook: "40 min", total: "3h" },
    yield: "4 porções",
    difficulty: "Média",
    tags: ["protein:frango", "ingredient:vinho"],
    ingredients: [
      "2 galetos (frangos jovens, pequenos), abertos em borboleta",
      "100 ml de vinho branco seco",
      "4 dentes de alho amassados",
      "2 colheres (sopa) de banha de porco (ou azeite)",
      "1 colher (sopa) de páprica",
      "Alecrim e salsinha frescos",
      "Sal e pimenta a gosto",
      "Polenta e molho de campanha (vinagrete), para acompanhar"
    ],
    steps: [
      "Abra os galetos em borboleta (corte pela espinha e achate) — peça ao açougueiro se preferir.",
      "Tempere com sal, pimenta, alho amassado, páprica e alecrim. Regue com o vinho branco.",
      "Cubra e deixe marinar na geladeira por no mínimo 2 horas (idealmente durante a noite).",
      "Aqueça a banha (ou azeite) numa assadeira ou frigideira grande que possa ir ao forno.",
      "Sele os galetos com a pele para baixo em fogo médio-alto até dourarem bem, 5-6 minutos.",
      "Vire e leve ao forno pré-aquecido a 200°C por 30-35 minutos, regando com os sucos da assadeira periodicamente, até a temperatura interna atingir 74°C e a pele ficar bem dourada e crocante.",
      "Deixe descansar por 5 minutos, finalize com salsinha fresca picada.",
      "Sirva com polenta (frita ou cremosa) e molho de campanha (vinagrete de tomate, cebola e pimentão)."
    ],
    tips: [
      "Galeto é um frango bem jovem e pequeno (menos de um mês), com carne mais macia e delicada que um frango comum — se não encontrar, um frango pequeno também funciona, ajustando o tempo de forno.",
      "Prato símbolo da imigração italiana na Serra Gaúcha, com casas especializadas ('galeterias') dedicadas só a esse prato em cidades como Bento Gonçalves e Caxias do Sul.",
      "O molho de campanha (vinagrete fresco) é o acompanhamento tradicional obrigatório, cortando a riqueza da carne assada."
    ]
  },
];
