// PERU
// Nota: Ceviche já está em Entradas Frias; Leche de Tigre em Técnicas Contemporâneas Avançadas.
window.RECIPES = window.RECIPES || {};
window.RECIPES["peru"] = [

  // ===================== CRUS =====================
  {
    name: "Tiradito",
    subgroup: "Crus",
    desc: "Fatias finas de peixe cru (estilo sashimi) regadas na hora com molho cítrico de limão, alho e pimenta amarela.",
    origin: "Peru",
    time: { prep: "20 min", cook: "0 min", total: "20 min" },
    yield: "2 porções",
    difficulty: "Fácil",
    tags: ["protein:peixe", "ingredient:limao"],
    ingredients: [
      "300 g de peixe branco bem fresco (robalo ou linguado), em fatias finas (estilo sashimi)",
      "100 ml de suco de limão-tahiti, espremido na hora",
      "1 dente de alho",
      "1 pedaço pequeno de gengibre",
      "1 pimenta amarela peruana (ají amarillo), sem sementes (ou substituto: pimenta amarela em pasta)",
      "Sal a gosto",
      "Coentro fresco, cebola roxa fatiada bem fina, para decorar",
      "Batata-doce cozida, para acompanhar (opcional, tradicional)"
    ],
    steps: [
      "Bata o suco de limão com o alho, gengibre, pimenta amarela e sal no liquidificador, até formar um molho liso — esse é o 'leche de tigre' simplificado que tempera o prato.",
      "Coe o molho para uma textura mais limpa, se desejar.",
      "Disponha as fatias finas de peixe num prato frio, sem sobrepor muito (ao contrário do ceviche, aqui o corte é em fatias finas como um sashimi, não em cubos).",
      "Regue o molho de limão por cima das fatias na hora de servir (diferente do ceviche, o tiradito não marina por tempo — é temperado e servido imediatamente).",
      "Decore com coentro fresco e cebola roxa fatiada bem fina.",
      "Sirva imediatamente, acompanhado de batata-doce cozida, se desejar."
    ],
    tips: [
      "A diferença essencial do ceviche: no tiradito o peixe é cortado em fatias finas (influência japonesa do sashimi) e temperado na hora, sem tempo de marinada — deve ser servido e comido imediatamente.",
      "Reflete a forte influência da imigração japonesa no Peru (a cozinha 'nikkei'), combinando técnicas de corte japonesas com temperos peruanos.",
      "Use sempre peixe de altíssima qualidade e frescor, já que é consumido praticamente cru, sem o tempo de 'cozimento' pelo ácido que o ceviche tem."
    ]
  },

  // ===================== GUISADOS E FRIOS COMPOSTOS =====================
  {
    name: "Ají de Gallina",
    subgroup: "Guisados e Frios Compostos",
    desc: "Frango desfiado num creme espesso de pimenta amarela peruana, pão amolecido no leite, nozes e queijo, servido sobre arroz.",
    origin: "Peru",
    time: { prep: "20 min", cook: "40 min", total: "1h" },
    yield: "4 porções",
    difficulty: "Média",
    tags: ["protein:frango", "contains:ovo", "ingredient:queijo", "ingredient:castanha", "ingredient:arroz", "ingredient:azeitona"],
    ingredients: [
      "500 g de peito de frango cozido e desfiado (reserve o caldo do cozimento)",
      "4 fatias de pão de forma, sem casca",
      "200 ml de leite",
      "3 colheres (sopa) de pasta de ají amarillo (pimenta amarela peruana)",
      "1 cebola picada, 4 dentes de alho picados",
      "80 g de queijo parmesão ralado",
      "50 g de nozes ou castanhas, moídas",
      "3 colheres (sopa) de azeite",
      "Sal e pimenta a gosto",
      "Arroz branco, ovo cozido e azeitonas pretas, para servir"
    ],
    steps: [
      "Deixe o pão de molho no leite até amolecer completamente.",
      "Numa panela, aqueça o azeite e refogue a cebola e o alho até dourarem, 8 minutos.",
      "Junte a pasta de ají amarillo e refogue por 2-3 minutos, para tirar o cru e intensificar a cor.",
      "Bata o pão amolecido no leite com as nozes moídas no liquidificador, até formar uma pasta lisa. Junte a esse refogado.",
      "Adicione um pouco do caldo de cozimento do frango, ajustando a consistência para um creme espesso (nem muito líquido, nem muito seco).",
      "Cozinhe em fogo baixo por 10-15 minutos, mexendo sempre para não grudar, até engrossar.",
      "Junte o frango desfiado e o parmesão ralado, misturando bem e cozinhando por mais 10 minutos.",
      "Ajuste o sal. Sirva sobre arroz branco, decorado com fatias de ovo cozido e azeitonas pretas."
    ],
    tips: [
      "A pasta de ají amarillo é o ingrediente que define completamente o prato — dá cor, um picante moderado e um sabor frutado característico da pimenta peruana.",
      "O pão de forma amolecido no leite é o que dá a cremosidade espessa característica, funcionando como um espessante natural no lugar de um roux tradicional.",
      "Um dos pratos mais populares e reconfortantes da cozinha caseira peruana, com raízes que remontam à culinária colonial espanhola misturada a ingredientes andinos."
    ]
  },
  {
    name: "Causa Limeña",
    subgroup: "Guisados e Frios Compostos",
    desc: "Terrine frio em camadas de purê de batata temperado com limão e pimenta amarela, recheado com frango ou atum e maionese.",
    origin: "Peru (Lima)",
    time: { prep: "40 min", cook: "20 min", total: "1h" },
    yield: "6 porções",
    difficulty: "Média",
    tags: ["contains:frango", "contains:peixe", "contains:ovo", "ingredient:batata", "ingredient:limao", "ingredient:azeitona"],
    ingredients: [
      "1 kg de batata amarela (ou batata comum), cozida",
      "3 colheres (sopa) de pasta de ají amarillo",
      "Suco de 3 limões",
      "80 ml de azeite de oliva",
      "300 g de frango cozido e desfiado (ou atum em conserva), temperado com maionese e cebola picada",
      "1 abacate, fatiado",
      "2 ovos cozidos, fatiados",
      "Azeitonas pretas",
      "Sal e pimenta a gosto"
    ],
    steps: [
      "Amasse a batata cozida ainda quente, sem líquido, até formar um purê seco e liso.",
      "Tempere com a pasta de ají amarillo, suco de limão, azeite, sal e pimenta, misturando bem até formar uma massa homogênea, lisa e moldável (a chamada 'masa de causa').",
      "Prove e ajuste o tempero — deve ter um sabor cítrico e picante marcante.",
      "Numa forma retangular (ou aro individual), forre com filme plástico e faça uma camada da massa de batata no fundo, pressionando bem.",
      "Adicione uma camada do recheio de frango (ou atum) com maionese.",
      "Cubra com outra camada da massa de batata, pressionando para compactar.",
      "Leve à geladeira por no mínimo 1 hora, para firmar bem.",
      "Desenforme, decore o topo com fatias de abacate, ovo cozido e azeitonas pretas.",
      "Sirva fria, cortada em fatias ou porções individuais."
    ],
    tips: [
      "A 'causa' é essencialmente um terrine frio de batata temperada — a batata não é apenas uma base neutra, ela mesma é fortemente temperada com limão e ají amarillo.",
      "Servir bem gelada é essencial — a causa é uma entrada fria por definição, nunca servida morna.",
      "Pode ser montada em camadas múltiplas (batata, recheio, batata, recheio) numa forma mais alta, para uma apresentação ainda mais elaborada."
    ]
  },

  // ===================== SALTEADOS E ARROZ =====================
  {
    name: "Lomo Saltado",
    subgroup: "Salteados e Arroz",
    desc: "Tiras de carne salteadas em fogo alto com cebola, tomate e shoyu, finalizadas com batata frita crocante — fusão peruano-chinesa.",
    origin: "Peru",
    time: { prep: "20 min", cook: "12 min", total: "32 min" },
    yield: "4 porções",
    difficulty: "Fácil",
    tags: ["protein:boi", "ingredient:tomate", "ingredient:batata"],
    ingredients: [
      "600 g de contrafilé ou alcatra, em tiras",
      "3 colheres (sopa) de óleo neutro (dividido)",
      "1 cebola roxa, em pétalas grandes",
      "2 tomates, em tiras (sem sementes)",
      "2 dentes de alho picados",
      "1 pimenta amarela peruana, em tiras (ou pimentão amarelo)",
      "3 colheres (sopa) de shoyu",
      "1 colher (sopa) de vinagre de vinho tinto",
      "500 g de batata, cortada em palitos e frita (batata frita crocante)",
      "Coentro picado",
      "Arroz branco, para servir"
    ],
    steps: [
      "Tempere a carne com sal e pimenta.",
      "Aqueça bem o óleo numa wok ou frigideira grande em fogo alto. Salteie a carne rapidamente, em lotes (sem lotar a frigideira), até dourar bem por fora, mantendo rosada por dentro, 2-3 minutos por lote. Retire e reserve.",
      "Na mesma frigideira bem quente, adicione um pouco mais de óleo e salteie a cebola e a pimenta amarela por 1-2 minutos, mantendo crocantes.",
      "Junte o alho, refogando por 30 segundos.",
      "Adicione o tomate em tiras, salteando rapidamente por 1 minuto (deve manter forma, não desmanchar).",
      "Volte a carne à frigideira, adicione o shoyu e o vinagre, misturando rapidamente (tossing) por 1-2 minutos.",
      "Junte a batata frita crocante por último, misturando delicadamente só para incorporar (evita que a batata amoleça no molho).",
      "Finalize com coentro picado. Sirva imediatamente com arroz branco."
    ],
    tips: [
      "É um prato de fusão clássica peruano-chinesa (influência da imigração cantonesa no Peru, técnica de wok combinada com ingredientes locais) — o shoyu é a assinatura dessa fusão.",
      "A batata frita entra só no final e é misturada delicadamente — o objetivo é que fique parcialmente crocante ainda, não encharcada no molho.",
      "Fogo bem alto e movimento rápido (a técnica de salteado em wok) é essencial — a carne deve selar rapidamente, não cozinhar lentamente."
    ]
  },
  {
    name: "Arroz Chaufa",
    subgroup: "Salteados e Arroz",
    desc: "Arroz frito na wok com carne, ovo mexido, cebolinha e shoyu — a versão peruana do arroz chinês, herança da comunidade chifa.",
    origin: "Peru (fusão chinesa-peruana)",
    time: { prep: "15 min", cook: "15 min", total: "30 min" },
    yield: "4 porções",
    difficulty: "Fácil",
    tags: ["contains:frango", "contains:boi", "contains:frutos-do-mar", "contains:ovo", "ingredient:arroz"],
    ingredients: [
      "4 xícaras de arroz cozido, de preferência do dia anterior (mais seco)",
      "200 g de frango ou carne bovina, em tiras finas",
      "100 g de camarão pequeno, limpo (opcional)",
      "3 colheres (sopa) de óleo neutro (dividido)",
      "2 ovos, batidos",
      "3 talos de cebolinha, em pedaços (parte branca e verde separadas)",
      "2 dentes de alho picados, 1 pedaço de gengibre picado",
      "4 colheres (sopa) de shoyu",
      "1 colher (chá) de óleo de gergelim"
    ],
    steps: [
      "Aqueça um pouco de óleo numa wok em fogo alto e salteie a carne/frango até dourar bem. Retire e reserve.",
      "Se for usar camarão, salteie rapidamente na mesma wok até ficar rosado. Retire e reserve.",
      "Na mesma wok, adicione um pouco mais de óleo e mexa os ovos batidos rapidamente, como um ovo mexido grosso. Retire e reserve.",
      "Adicione mais óleo à wok, junte a parte branca da cebolinha, o alho e o gengibre, refogando por 30 segundos.",
      "Junte o arroz, quebrando bem os grãos com a espátula, salteando (tossing) em fogo alto por 3-4 minutos.",
      "Volte a carne, camarão (se usar) e ovo mexido à wok, misturando bem.",
      "Regue com o shoyu e o óleo de gergelim, misturando rapidamente para distribuir por igual.",
      "Finalize com a parte verde da cebolinha. Sirva imediatamente, bem quente."
    ],
    tips: [
      "Use sempre arroz de um dia anterior, bem seco e com os grãos separados — arroz recém-feito e úmido resulta num chaufa empapado.",
      "É a versão peruana do 'arroz frito chinês', trazida e adaptada pela grande comunidade chinesa-peruana (chifa) — um dos pratos mais populares e cotidianos do país.",
      "Fogo alto o tempo todo é essencial para o sabor levemente tostado característico dos pratos de wok."
    ]
  },

  // ===================== GRELHADOS =====================
  {
    name: "Anticuchos",
    subgroup: "Grelhados",
    desc: "Espetos de coração de boi (ou carne bovina) marinados em pimenta vermelha peruana e grelhados, servidos com batata e milho.",
    origin: "Peru",
    time: { prep: "20 min + 4h marinada", cook: "10 min", total: "≈4h30" },
    yield: "4 porções (12 espetos)",
    difficulty: "Fácil",
    tags: ["protein:boi", "ingredient:batata", "ingredient:milho"],
    ingredients: [
      "800 g de coração de boi (ou alcatra/contrafilé, alternativa mais acessível), em cubos",
      "4 colheres (sopa) de pasta de ají panca (pimenta vermelha peruana) ou páprica + pimenta calabresa",
      "4 dentes de alho picados",
      "2 colheres (sopa) de vinagre de vinho tinto",
      "1 colher (sopa) de cominho",
      "3 colheres (sopa) de óleo",
      "Sal e pimenta a gosto",
      "Espetos de bambu (de molho em água por 30 minutos)",
      "Batata cozida e milho cozido, para acompanhar (tradicional)"
    ],
    steps: [
      "Misture a pasta de ají panca, alho, vinagre, cominho e óleo, formando a marinada.",
      "Cubra os cubos de carne com a marinada, massageando bem. Cubra e deixe marinar na geladeira por no mínimo 4 horas (idealmente durante a noite).",
      "Monte os espetos com os cubos de carne marinada.",
      "Aqueça bem a churrasqueira ou grelha em fogo alto.",
      "Grelhe os espetos por 3-4 minutos de cada lado, pincelando com a marinada restante durante o cozimento, até dourar bem por fora.",
      "Sirva imediatamente com batata cozida e milho cozido ao lado, no estilo tradicional de rua peruano."
    ],
    tips: [
      "O coração de boi é o corte tradicional (surpreendentemente macio e saboroso quando bem preparado e marinado) — se preferir, cortes mais convencionais como contrafilé também funcionam bem.",
      "A pasta de ají panca (pimenta vermelha peruana, defumada e levemente doce) é o que dá o sabor e a cor característica — vale procurar especificamente esse ingrediente.",
      "Um dos street foods mais icônicos e populares do Peru, vendido tradicionalmente em carrinhos de rua com carvão, à noite."
    ]
  },
];
