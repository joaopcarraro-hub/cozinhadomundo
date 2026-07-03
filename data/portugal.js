// PORTUGAL
// Nota: Bacalhau à Brás e Gomes de Sá já estão em Peixes; Arroz de Pato e Arroz de
// Marisco em Arrozes; Caldo Verde em Sopas. Aqui o restante dos clássicos portugueses.
window.RECIPES = window.RECIPES || {};
window.RECIPES["portugal"] = [

  // ===================== BACALHAU =====================
  {
    name: "Bacalhau com Natas",
    subgroup: "Bacalhau",
    desc: "Bacalhau desfiado com batata frita, gratinado no forno com molho Béchamel e creme de leite.",
    origin: "Portugal",
    time: { prep: "30 min (+ dessalgar)", cook: "40 min", total: "1h10" },
    yield: "6 porções",
    difficulty: "Média",
    tags: ["protein:peixe", "ingredient:batata", "ingredient:queijo"],
    ingredients: [
      "600 g de bacalhau dessalgado, desfiado em lascas",
      "1 kg de batata, descascada e em palitos finos (batata palha ou batata frita em cubos pequenos)",
      "Óleo, para fritar as batatas",
      "1 cebola grande, fatiada fina",
      "3 dentes de alho picados",
      "3 colheres (sopa) de azeite",
      "500 ml de Béchamel (ver receita, categoria Molhos)",
      "200 ml de creme de leite fresco",
      "100 g de queijo ralado (parmesão ou flamengo)",
      "Noz-moscada, sal e pimenta a gosto"
    ],
    steps: [
      "Cozinhe o bacalhau em água ou leite por 5 minutos, escorra e desfie em lascas, removendo peles e espinhas.",
      "Frite as batatas em óleo quente até dourarem e ficarem crocantes. Escorra bem em papel toalha.",
      "Numa frigideira, aqueça o azeite e refogue a cebola e o alho até dourarem levemente, 8-10 minutos.",
      "Junte o bacalhau desfiado ao refogado, misturando delicadamente por 2-3 minutos.",
      "Prepare a Béchamel e, ainda quente, misture o creme de leite e metade do queijo ralado, temperando com noz-moscada.",
      "Pré-aqueça o forno a 200°C. Num refratário, misture delicadamente o bacalhau refogado com as batatas fritas, sem esmagar.",
      "Cubra generosamente com o molho de Béchamel e creme, polvilhe com o restante do queijo ralado.",
      "Leve ao forno por 20-25 minutos, até gratinar e dourar bem por cima. Sirva quente."
    ],
    tips: [
      "Fritar as batatas antes de misturar ao bacalhau (em vez de cozinhá-las em água) é o que mantém alguma textura mesmo depois de gratinadas no forno.",
      "Misture o bacalhau com as batatas delicadamente, para não desmanchar tudo numa papa — a textura em lascas e pedaços é parte do prato.",
      "Um dos '365 jeitos' lendários de preparar bacalhau em Portugal (um para cada dia do ano, segundo a tradição popular) — este é um dos mais amados e cremosos."
    ]
  },
  {
    name: "Pastéis de Bacalhau",
    subgroup: "Bacalhau",
    desc: "Bolinhos fritos de bacalhau desfiado e purê de batata seco, moldados em formato oval e fritos por imersão.",
    origin: "Portugal",
    time: { prep: "40 min (+ dessalgar)", cook: "15 min", total: "55 min" },
    yield: "≈20 unidades",
    difficulty: "Média",
    tags: ["protein:peixe", "ingredient:batata", "ingredient:ovo"],
    ingredients: [
      "500 g de bacalhau dessalgado",
      "500 g de batata, descascada",
      "1 cebola pequena picada bem fina",
      "2 dentes de alho picados",
      "2 ovos",
      "2 colheres (sopa) de salsinha picada",
      "Noz-moscada, sal e pimenta a gosto",
      "Óleo, para fritar"
    ],
    steps: [
      "Cozinhe o bacalhau em água por 8-10 minutos, até macio. Escorra, deixe amornar e desfie bem fino, removendo peles e espinhas (pode usar as mãos para desfiar em fibras bem finas — quanto mais fino, melhor a textura final).",
      "Cozinhe as batatas em água até bem macias, escorra e amasse ainda quentes (sem líquido, deve ficar um purê seco).",
      "Numa tigela grande, misture o bacalhau desfiado com o purê de batata seco, a cebola, alho e salsinha.",
      "Adicione os ovos, um de cada vez, misturando bem até formar uma massa homogênea e moldável (nem muito mole, nem muito seca).",
      "Tempere com noz-moscada, pimenta e prove o sal (o bacalhau já deve dar boa parte do tempero).",
      "Aqueça bastante óleo numa panela funda (fritura por imersão) a 180°C.",
      "Com duas colheres molhadas em água, modele porções em formato oval (a forma clássica de 'quenelle') e deslize delicadamente no óleo quente.",
      "Frite até dourar bem por igual, virando uma vez, cerca de 4-5 minutos. Escorra em papel toalha e sirva quente."
    ],
    tips: [
      "Desfiar o bacalhau bem fino (em fibras, não em lascas grandes) é o que dá a textura correta e uniforme característica do pastel.",
      "A massa deve estar seca o suficiente para moldar bem com as duas colheres — se estiver muito úmida, os pastéis se desmancham no óleo.",
      "Um dos petiscos mais icônicos e onipresentes de Portugal, vendido em praticamente toda padaria, tasca e festa popular do país."
    ]
  },

  // ===================== MAR =====================
  {
    name: "Cataplana de Marisco",
    subgroup: "Mar",
    desc: "Frutos do mar, peixe e chouriço cozidos no vapor dentro da cataplana (panela de cobre que fecha hermeticamente) — mistura mar e terra do Algarve.",
    origin: "Portugal (Algarve)",
    time: { prep: "25 min", cook: "25 min", total: "50 min" },
    yield: "4 porções",
    difficulty: "Média",
    tags: ["protein:frutos-do-mar", "protein:peixe", "protein:suino", "ingredient:tomate"],
    ingredients: [
      "300 g de camarão médio, limpo",
      "500 g de amêijoas (ou vôngole), limpas",
      "300 g de mexilhões limpos",
      "300 g de peixe branco firme, em postas",
      "200 g de chouriço português, fatiado",
      "1 cebola fatiada, 1 pimentão vermelho fatiado",
      "4 dentes de alho picados",
      "3 tomates picados sem pele",
      "150 ml de vinho branco seco",
      "Azeite de oliva, louro, coentro ou salsinha",
      "Sal e pimenta a gosto"
    ],
    steps: [
      "Numa cataplana (ou panela funda com tampa), aqueça o azeite e refogue a cebola, pimentão e alho até macios, 8-10 minutos.",
      "Junte o chouriço fatiado e refogue por 2-3 minutos, para soltar sabor na gordura.",
      "Adicione o tomate picado e o louro, cozinhando até desmanchar, formando um refogado encorpado.",
      "Deglaceie com o vinho branco, deixando reduzir por 2 minutos.",
      "Disponha as postas de peixe sobre o refogado, seguidas do camarão, amêijoas e mexilhões por cima.",
      "Tempere com sal e pimenta. Feche bem a cataplana (ou tampe a panela) e cozinhe em fogo médio por 15-18 minutos, sem abrir, até o peixe cozinhar e os moluscos abrirem.",
      "Abra a cataplana já à mesa (parte da tradição e apresentação), descartando qualquer molusco que não tenha aberto.",
      "Finalize com coentro ou salsinha picada. Sirva direto no recipiente, com pão para acompanhar."
    ],
    tips: [
      "A cataplana (utensílio de cobre em formato de concha, que fecha hermeticamente) é o que dá nome ao prato e permite que tudo cozinhe no próprio vapor — sem ela, uma panela funda bem tampada funciona como substituto.",
      "Abrir a cataplana à mesa, liberando o aroma, é parte importante da experiência tradicional algarvia — não abra antes na cozinha se quiser recriar o efeito completo.",
      "O chouriço junto aos frutos do mar (combinação 'mar e terra') é a assinatura clássica que diferencia a cozinha do Algarve."
    ]
  },
  {
    name: "Polvo à Lagareiro",
    subgroup: "Mar",
    desc: "Polvo assado no forno com batatas amassadas ('a murro') e alho, regado com azeite abundante.",
    origin: "Portugal",
    time: { prep: "15 min", cook: "1h", total: "1h15" },
    yield: "4 porções",
    difficulty: "Média",
    tags: ["protein:frutos-do-mar", "ingredient:batata"],
    ingredients: [
      "1 polvo (1,2-1,5 kg), limpo",
      "1 cebola, cortada ao meio",
      "1 kg de batatas pequenas (batata a murro), com casca",
      "150 ml de azeite de oliva extra virgem (generoso, característica do prato)",
      "6 dentes de alho, inteiros com casca (+ 2 picados)",
      "Sal grosso",
      "Salsinha picada"
    ],
    steps: [
      "Cozinhe o polvo em água com a cebola até ficar macio, cerca de 45-50 minutos (ver técnica na receita Polvo Grelhado, categoria Frutos do Mar). Corte em tentáculos inteiros ou grandes pedaços.",
      "Cozinhe as batatas pequenas com casca em água salgada até quase macias (ainda um pouco firmes), depois escorra e amasse levemente cada uma com a palma da mão ou um copo, sem desmanchar completamente ('batata a murro').",
      "Pré-aqueça o forno a 200°C. Numa assadeira, disponha o polvo e as batatas amassadas.",
      "Espalhe os dentes de alho inteiros com casca por cima.",
      "Regue generosamente com o azeite de oliva — deve ser abundante, típico do prato.",
      "Polvilhe com sal grosso e leve ao forno por 20-25 minutos, até o polvo e as batatas dourarem levemente nas bordas.",
      "Finalize com o alho picado fresco e salsinha por cima. Sirva bem quente, direto da assadeira."
    ],
    tips: [
      "'À lagareiro' se refere ao estilo dos lagares de azeite — o prato é caracterizado pela quantidade generosa e boa qualidade do azeite usado, que deve ser abundante, não comedido.",
      "As batatas 'a murro' (levemente amassadas, mas não completamente esmagadas) são a técnica tradicional — permite que absorvam mais azeite e fiquem crocantes nas bordas.",
      "O alho inteiro com casca assado junto fica macio e adocicado — pode ser espremido e comido junto, ou apenas usado para perfumar o azeite."
    ]
  },

  // ===================== DOCES =====================
  {
    name: "Pastel de Nata",
    subgroup: "Doces",
    desc: "Tartelete de massa folhada crocante com creme de ovos, assado bem quente até formar manchas escuras no topo.",
    origin: "Portugal (Lisboa)",
    time: { prep: "40 min", cook: "20 min", total: "1h" },
    yield: "12 unidades",
    difficulty: "Média-alta",
    tags: ["protein:vegetariana", "ingredient:ovo"],
    ingredients: [
      "1 disco de massa folhada (ou massa folhada caseira enrolada em cilindro, técnica tradicional)",
      "500 ml de leite integral",
      "1 casca de limão",
      "1 pau de canela",
      "40 g de farinha de trigo",
      "250 g de açúcar",
      "150 ml de água",
      "6 gemas",
      "Canela em pó, para polvilhar"
    ],
    steps: [
      "Se for usar massa folhada caseira, enrole-a bem apertada num cilindro (como um rocambole) e corte em fatias de cerca de 2 cm. Se for massa pronta em disco, enrole-a também em cilindro antes de fatiar — essa técnica cria as camadas espirais características.",
      "Pressione cada fatia com os polegares dentro de forminhas próprias para pastel de nata (ou forminhas de empada/muffin), forrando o fundo e as laterais de forma bem fina e uniforme, subindo até a borda.",
      "Leve as forminhas ao congelador por 15 minutos, para firmar antes de rechear.",
      "Aqueça o leite com a casca de limão e o pau de canela até quase ferver. Desligue e deixe em infusão por 10 minutos, depois coe.",
      "Numa tigela, misture a farinha com um pouco do leite morno até dissolver sem grumos, depois junte ao restante do leite coado.",
      "Numa panela separada, ferva a água com o açúcar até formar uma calda que atinja 110°C (ponto de fio fino, sem precisar de termômetro: a calda deve formar um fio fino ao pingar de uma colher).",
      "Despeje a calda quente sobre a mistura de leite e farinha, mexendo bem. Leve ao fogo baixo, mexendo sempre, até engrossar levemente (não deixe ferver).",
      "Deixe amornar um pouco e incorpore as gemas, mexendo bem até ficar homogêneo. Coe o creme para garantir uma textura lisa.",
      "Pré-aqueça o forno o mais quente possível (250°C ou mais, se o forno permitir). Preencha as forminhas com o creme, até quase a borda.",
      "Asse por 15-20 minutos, até a massa dourar e o creme formar manchas escuras características por cima (efeito de queima pontual, marca registrada do pastel).",
      "Deixe amornar antes de desenformar. Sirva polvilhado com canela em pó."
    ],
    tips: [
      "O forno bem quente é essencial para o efeito de 'queima' pontual característico no topo do creme — fornos domésticos que não atingem temperaturas muito altas terão um resultado mais claro, mas ainda saboroso.",
      "Enrolar a massa em cilindro antes de fatiar (em vez de simplesmente cortar círculos de um disco) é a técnica tradicional que cria as camadas espirais visíveis na casquinha.",
      "A receita original, guardada em segredo pela Confeitaria de Belém em Lisboa desde 1837, é conhecida apenas por poucos — esta é uma versão fiel ao espírito e técnica clássicos."
    ]
  },
];
