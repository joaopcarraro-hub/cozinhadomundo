// JAPÃO
window.RECIPES = window.RECIPES || {};
window.RECIPES["japao"] = [

  // ===================== SUSHI E CRUS =====================
  {
    name: "Arroz de Sushi (Shari) e Nigiri",
    subgroup: "Sushi e Crus",
    desc: "Bolinhos de arroz temperado com vinagre, cobertos com uma fatia de peixe cru fresco (salmão ou atum) — a base do sushi tradicional.",
    origin: "Japão",
    time: { prep: "20 min", cook: "20 min", total: "40 min" },
    yield: "≈20 nigiris",
    difficulty: "Média",
    tags: ["protein:peixe", "ingredient:arroz", "ingredient:molho-de-soja"],
    ingredients: [
      "2 xícaras de arroz japonês (koshihikari ou similar)",
      "2 xícaras de água",
      "5 colheres (sopa) de vinagre de arroz",
      "2 colheres (sopa) de açúcar",
      "1 colher (chá) de sal",
      "400 g de peixe fresco tipo sashimi (salmão, atum), fatiado",
      "Wasabi e shoyu, para servir"
    ],
    ingredientsStructured: [
      {
        raw: "2 xícaras de arroz japonês (koshihikari ou similar)",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "xicara", item: "arroz japonês (koshihikari ou similar)", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 xícaras de água",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "xicara", item: "água", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "5 colheres (sopa) de vinagre de arroz",
        group: null,
        items: [
          { qty: 5, qtyRange: null, unit: "colher-sopa", item: "vinagre de arroz", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 colheres (sopa) de açúcar",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "colher-sopa", item: "açúcar", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (chá) de sal",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-cha", item: "sal", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "400 g de peixe fresco tipo sashimi (salmão, atum), fatiado",
        group: null,
        items: [
          { qty: 400, qtyRange: null, unit: "grama", item: "peixe fresco tipo sashimi", prep: "salmão, atum, fatiado", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Wasabi e shoyu, para servir",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "wasabi", prep: "para servir", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "shoyu", prep: "para servir", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Lave o arroz em água corrente até a água sair praticamente limpa (remove o excesso de amido).",
      "Cozinhe o arroz com a água numa panela (ou panela elétrica de arroz), sem sal, até absorver todo o líquido e ficar macio.",
      "Enquanto o arroz cozinha, aqueça o vinagre de arroz, o açúcar e o sal só até dissolver (não ferva).",
      "Transfira o arroz cozido para uma tigela larga (tradicionalmente de madeira, hangiri) e regue com o tempero de vinagre, misturando delicadamente com uma espátula em movimentos de corte (nunca mexer como um risoto, para não amassar os grãos), enquanto abana para esfriar rapidamente.",
      "O arroz deve ficar em temperatura ambiente, brilhante e com grãos soltos, mas coesos o suficiente para moldar.",
      "Molhe as mãos em água com um pouco de vinagre (tezu), pegue uma porção pequena de arroz (cerca de 20g) e molde um formato oval compacto.",
      "Passe um pouco de wasabi na parte de baixo de uma fatia de peixe e pressione delicadamente sobre o arroz moldado, curvando levemente para envolver.",
      "Sirva imediatamente, com shoyu à parte para molhar."
    ],
    tips: [
      "Nunca misture o arroz temperado como um risoto — o movimento de corte e leque (para esfriar rápido) é o que dá o brilho e a textura correta, sem esmagar os grãos.",
      "Use sempre peixe de procedência confiável e específico para consumo cru (congelado adequadamente conforme normas sanitárias).",
      "A temperatura do arroz na hora de moldar deve estar próxima à temperatura corporal — nem quente, nem gelado — para a textura ideal na boca."
    ]
  },
  {
    name: "Sashimi",
    subgroup: "Sushi e Crus",
    desc: "Fatias finas de peixe cru fresco (salmão, atum ou robalo), cortadas à faca e servidas com daikon ralado, wasabi e shoyu — sem arroz.",
    origin: "Japão",
    time: { prep: "15 min", cook: "0 min", total: "15 min" },
    yield: "2 porções",
    difficulty: "Média",
    tags: ["protein:peixe", "ingredient:molho-de-soja"],
    ingredients: [
      "300 g de peixe fresco tipo sashimi (salmão, atum ou robalo), em bloco",
      "Daikon (rabanete japonês) ralado em fios finos, para decorar",
      "Folhas de shiso (opcional)",
      "Wasabi fresco e shoyu, para servir"
    ],
    ingredientsStructured: [
      {
        raw: "300 g de peixe fresco tipo sashimi (salmão, atum ou robalo), em bloco",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "grama", item: "peixe fresco tipo sashimi", prep: "salmão, atum ou robalo, em bloco", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Daikon (rabanete japonês) ralado em fios finos, para decorar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "daikon (rabanete japonês)", prep: "ralado em fios finos, para decorar", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Folhas de shiso (opcional)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: "folha", item: "shiso", prep: null, alt: null, optional: true, isReference: false },
        ],
      },
      {
        raw: "Wasabi fresco e shoyu, para servir",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "wasabi fresco", prep: "para servir", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "shoyu", prep: "para servir", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Certifique-se de que o peixe está bem gelado e firme, facilita muito o corte limpo.",
      "Com uma faca longa e muito afiada (idealmente uma faca japonesa própria, yanagiba), posicione a lâmina no ângulo certo conforme o corte desejado (hira-zukuri para cortes retos, mais comuns).",
      "Puxe a faca em um único movimento longo e suave, do calcanhar à ponta da lâmina, sem serrar — cada fatia deve ser cortada com um único golpe.",
      "Limpe a faca entre cada corte com um pano úmido, para manter cortes limpos.",
      "Disponha as fatias num prato com o daikon ralado formando uma base fofa, e folhas de shiso, se disponível.",
      "Sirva com wasabi fresco (à parte, para cada um temperar a gosto) e shoyu para molhar."
    ],
    tips: [
      "A qualidade da faca é tão importante quanto a qualidade do peixe — uma faca sem fio esmaga as fibras em vez de cortá-las limpamente, arruinando a textura.",
      "Cada corte deve ser feito num único movimento — serrar para frente e para trás rasga o peixe e prejudica tanto a aparência quanto a textura.",
      "O daikon ralado (chamado tsuma) não é só decoração — tradicionalmente ajuda a limpar o paladar entre bocados de peixes diferentes."
    ]
  },
  {
    name: "Temaki",
    subgroup: "Sushi e Crus",
    desc: "Cone de alga nori recheado à mão com arroz de sushi, peixe cru, pepino e abacate — servido e comido na hora, antes que a alga amoleça.",
    origin: "Japão",
    time: { prep: "20 min", cook: "0 min", total: "20 min" },
    yield: "8 unidades",
    difficulty: "Fácil",
    tags: ["protein:peixe", "ingredient:arroz"],
    ingredients: [
      "1 receita de arroz de sushi pronto (ver receita)",
      "8 folhas de nori (alga)",
      "200 g de peixe fresco tipo sashimi, em tiras",
      "1 pepino, em tiras finas",
      "1 abacate, em fatias",
      "Cebolinha e gergelim torrado",
      "Shoyu e wasabi, para servir"
    ],
    ingredientsStructured: [
      {
        raw: "1 receita de arroz de sushi pronto (ver receita)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "receita de arroz de sushi pronto", prep: "ver receita", alt: null, optional: false, isReference: true },
        ],
      },
      {
        raw: "8 folhas de nori (alga)",
        group: null,
        items: [
          { qty: 8, qtyRange: null, unit: "folha", item: "nori (alga)", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "200 g de peixe fresco tipo sashimi, em tiras",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "grama", item: "peixe fresco tipo sashimi", prep: "em tiras", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 pepino, em tiras finas",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "pepino", prep: "em tiras finas", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 abacate, em fatias",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "abacate", prep: "em fatias", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Cebolinha e gergelim torrado",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "cebolinha", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "gergelim", prep: "torrado", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Shoyu e wasabi, para servir",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "shoyu", prep: "para servir", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "wasabi", prep: "para servir", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Corte as folhas de nori ao meio, formando retângulos.",
      "Segure uma metade de nori na palma da mão, com o lado brilhante para baixo.",
      "Espalhe uma fina camada de arroz de sushi na metade esquerda (ou direita, conforme a mão dominante) da folha, deixando uma borda livre.",
      "Disponha tiras do peixe, pepino, abacate e outros recheios desejados na diagonal, sobre o arroz.",
      "Enrole a folha a partir do canto onde está o recheio, formando um cone, e feche a ponta com um grão de arroz umedecido (funciona como cola).",
      "Finalize com gergelim torrado e cebolinha.",
      "Sirva imediatamente — o temaki deve ser comido logo após montado, antes que a alga nori amoleça com a umidade do arroz."
    ],
    tips: [
      "Monte e sirva na hora — diferente de outros sushis, o temaki é feito para ser comido imediatamente, já que a alga perde a crocância rapidamente.",
      "Não exagere na quantidade de arroz e recheio — um cone muito cheio é difícil de enrolar e de comer sem desmontar.",
      "Ótimo formato para servir como uma 'estação de montagem' num jantar a dois, com vários recheios à disposição para cada um montar o seu."
    ]
  },
  {
    name: "Chirashi",
    subgroup: "Sushi e Crus",
    desc: "Tigela de arroz de sushi coberta com sashimi variado, tamagoyaki, pepino e ovas de peixe — um sushi 'desmontado', servido em camadas.",
    origin: "Japão",
    time: { prep: "25 min", cook: "0 min", total: "25 min" },
    yield: "2 porções",
    difficulty: "Fácil",
    tags: ["protein:peixe", "protein:frutos-do-mar", "ingredient:arroz", "ingredient:ovo"],
    ingredients: [
      "1 receita de arroz de sushi pronto (ver receita)",
      "300 g de sashimi variado (salmão, atum, camarão cozido), fatiado",
      "1 ovo, em tamagoyaki fatiado (ver receita, categoria Ovos Básicos) ou omelete fina em tiras",
      "1/2 pepino, em tiras finas",
      "Ovas de peixe (ikura ou tobiko), opcional",
      "Gergelim torrado, cebolinha e nori em tiras finas",
      "Shoyu e wasabi, para servir"
    ],
    ingredientsStructured: [
      {
        raw: "1 receita de arroz de sushi pronto (ver receita)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "receita de arroz de sushi pronto", prep: "ver receita", alt: null, optional: false, isReference: true },
        ],
      },
      {
        raw: "300 g de sashimi variado (salmão, atum, camarão cozido), fatiado",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "grama", item: "sashimi variado", prep: "salmão, atum, camarão cozido, fatiado", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 ovo, em tamagoyaki fatiado (ver receita, categoria Ovos Básicos) ou omelete fina em tiras",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "ovo", prep: "em tamagoyaki fatiado; ver receita, categoria ovos básicos", alt: "omelete fina em tiras", optional: false, isReference: true },
        ],
      },
      {
        raw: "1/2 pepino, em tiras finas",
        group: null,
        items: [
          { qty: 0.5, qtyRange: null, unit: null, item: "pepino", prep: "em tiras finas", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Ovas de peixe (ikura ou tobiko), opcional",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "ovas de peixe", prep: "ikura ou tobiko", alt: null, optional: true, isReference: false },
        ],
      },
      {
        raw: "Gergelim torrado, cebolinha e nori em tiras finas",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "gergelim", prep: "torrado", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "cebolinha", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "nori", prep: "em tiras finas", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Shoyu e wasabi, para servir",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "shoyu", prep: "para servir", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "wasabi", prep: "para servir", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Distribua o arroz de sushi pronto numa tigela larga e rasa, alisando a superfície.",
      "Arrume as fatias de sashimi variado por cima do arroz, formando um mosaico colorido.",
      "Adicione as tiras de tamagoyaki e pepino, intercalando com o peixe.",
      "Finalize com ovas de peixe, se usar, gergelim torrado, cebolinha e tiras de nori.",
      "Sirva com wasabi e shoyu à parte, para cada um temperar a gosto."
    ],
    tips: [
      "'Chirashi' significa 'espalhado' — é essencialmente uma tigela de sushi desmontado, mais rápida de preparar que nigiris individuais.",
      "É uma ótima forma de aproveitar pequenas quantidades de vários tipos de peixe, criando um prato visualmente rico.",
      "Sirva com o arroz ainda em temperatura ambiente (não gelado), como é tradição em qualquer preparo de sushi."
    ]
  },
  {
    name: "Aburi e Tataki",
    subgroup: "Sushi e Crus",
    desc: "Peixe cru com a superfície levemente selada ou queimada com maçarico, mantendo o interior cru — servido fatiado com molho ponzu.",
    origin: "Japão (técnica contemporânea)",
    time: { prep: "15 min", cook: "5 min", total: "20 min" },
    yield: "2 porções",
    difficulty: "Média",
    tags: ["protein:peixe", "ingredient:molho-de-soja"],
    ingredients: [
      "300 g de peixe fresco tipo sashimi (salmão ou atum, em bloco)",
      "Sal a gosto",
      "1 fio de azeite ou óleo neutro",
      "Molho ponzu (shoyu + suco cítrico), para servir",
      "Cebolinha fatiada fina e gergelim torrado"
    ],
    ingredientsStructured: [
      {
        raw: "300 g de peixe fresco tipo sashimi (salmão ou atum, em bloco)",
        group: null,
        items: [
          { qty: 300, qtyRange: null, unit: "grama", item: "peixe fresco tipo sashimi (salmão ou atum, em bloco)", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "1 fio de azeite ou óleo neutro",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "fio", item: "azeite", prep: null, alt: "óleo neutro", optional: false, isReference: false },
        ],
      },
      {
        raw: "Molho ponzu (shoyu + suco cítrico), para servir",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "molho ponzu", prep: "shoyu + suco cítrico, para servir", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Cebolinha fatiada fina e gergelim torrado",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "cebolinha", prep: "fatiada fina e gergelim torrado", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Para o Tataki: tempere o bloco de peixe com sal. Aqueça uma frigideira (ou use um maçarico culinário) bem quente.",
      "Sele o peixe rapidamente por todos os lados, 15-20 segundos cada, só o suficiente para dourar a superfície, mantendo o interior completamente cru.",
      "Mergulhe imediatamente em água com gelo para interromper o cozimento e manter o contraste entre a superfície selada e o interior cru.",
      "Seque bem e fatie em fatias não muito finas, revelando o contraste de cores entre a crosta dourada e o centro cru.",
      "Para o Aburi (queima direta com maçarico): fatie o peixe cru como um sashimi comum, disponha as fatias e passe o maçarico culinário rapidamente sobre a superfície de cada uma, até dourar e caramelizar levemente, sem cozinhar o interior.",
      "Sirva ambas as versões com molho ponzu, cebolinha fatiada e gergelim torrado."
    ],
    tips: [
      "A diferença entre as duas técnicas: Tataki sela a peça inteira rapidamente numa frigideira quente antes de fatiar; Aburi fateia primeiro e depois queima a superfície de cada fatia com maçarico — ambas buscam o mesmo contraste de textura.",
      "O choque de gelo imediato após selar (no método Tataki) é o que garante que o calor não se propague para o centro do peixe.",
      "O molho ponzu (mais leve e cítrico que o shoyu puro) é o par clássico dessas preparações, equilibrando a riqueza do peixe levemente selado."
    ]
  },

  // ===================== PRATOS QUENTES =====================
  {
    name: "Tonkatsu",
    subgroup: "Pratos Quentes",
    desc: "Filé de lombo de porco empanado em farinha panko e frito até crocante, fatiado e servido com repolho cru e molho tonkatsu.",
    origin: "Japão",
    time: { prep: "15 min", cook: "12 min", total: "27 min" },
    yield: "4 porções",
    difficulty: "Fácil",
    tags: ["protein:suino", "ingredient:arroz"],
    ingredients: [
      "4 filés de lombo de porco, cerca de 2 cm de espessura",
      "Sal e pimenta a gosto",
      "Farinha de trigo, 2 ovos batidos e farinha panko — para empanar",
      "Óleo, para fritar",
      "Repolho fatiado bem fino, para acompanhar",
      "Molho tonkatsu (ou uma mistura de ketchup, molho inglês e shoyu, na falta do pronto)",
      "Arroz japonês, para servir"
    ],
    ingredientsStructured: [
      {
        raw: "4 filés de lombo de porco, cerca de 2 cm de espessura",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: "file", item: "lombo de porco", prep: "cerca de 2 cm de espessura", alt: null, optional: false, isReference: false },
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
        raw: "Farinha de trigo, 2 ovos batidos e farinha panko — para empanar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "farinha de trigo", prep: "para empanar", alt: null, optional: false, isReference: false },
          { qty: 2, qtyRange: null, unit: null, item: "ovos", prep: "batidos, para empanar", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "farinha panko", prep: "para empanar", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Óleo, para fritar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "óleo", prep: "para fritar", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Repolho fatiado bem fino, para acompanhar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "repolho", prep: "fatiado bem fino, para acompanhar", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Molho tonkatsu (ou uma mistura de ketchup, molho inglês e shoyu, na falta do pronto)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "molho tonkatsu", prep: null, alt: "uma mistura de ketchup, molho inglês e shoyu, na falta do pronto", optional: false, isReference: false },
        ],
      },
      {
        raw: "Arroz japonês, para servir",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "arroz japonês", prep: "para servir", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Faça pequenos cortes na borda de gordura de cada filé (evita que curvem durante a fritura). Tempere com sal e pimenta.",
      "Passe cada filé na farinha, depois no ovo batido e por fim na farinha panko, pressionando bem para aderir generosamente (a camada de panko deve ser espessa).",
      "Aqueça o óleo numa panela funda a 170-180°C.",
      "Frite os filés por 5-6 minutos, virando na metade, até dourarem bem e ficarem crocantes por fora, cozidos por dentro.",
      "Escorra em papel toalha e deixe descansar por 2-3 minutos antes de cortar em tiras.",
      "Sirva fatiado sobre uma cama de repolho fatiado bem fino, com o molho tonkatsu à parte, acompanhado de arroz japonês."
    ],
    tips: [
      "A farinha panko (japonesa, em flocos maiores e mais leves que a farinha de rosca comum) é o que dá a crocância característica e diferenciada do tonkatsu — vale a pena procurar especificamente esse tipo.",
      "Deixar descansar antes de cortar em tiras evita que os sucos escorram todos ao fatiar.",
      "O repolho fatiado bem fino (quase como fios) cru é o acompanhamento tradicional obrigatório, trazendo frescor para contrastar com o empanado frito."
    ]
  },
  {
    name: "Katsudon",
    subgroup: "Pratos Quentes",
    desc: "Tonkatsu fatiado, cozido em cebola e caldo de shoyu com ovo cremoso por cima, servido sobre uma tigela de arroz japonês.",
    origin: "Japão",
    time: { prep: "10 min", cook: "20 min", total: "30 min" },
    yield: "2 porções",
    difficulty: "Fácil",
    tags: ["protein:suino", "ingredient:arroz", "ingredient:ovo", "ingredient:molho-de-soja"],
    ingredients: [
      "2 porções de Tonkatsu já fritas (ver receita), fatiadas",
      "2 xícaras de arroz japonês cozido",
      "1 cebola fatiada",
      "150 ml de dashi (caldo japonês)",
      "2 colheres (sopa) de shoyu",
      "1 colher (sopa) de mirin",
      "1 colher (sopa) de açúcar",
      "3 ovos, levemente batidos",
      "Cebolinha fatiada"
    ],
    ingredientsStructured: [
      {
        raw: "2 porções de Tonkatsu já fritas (ver receita), fatiadas",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "porções de tonkatsu", prep: "já fritas; ver receita; fatiadas", alt: null, optional: false, isReference: true },
        ],
      },
      {
        raw: "2 xícaras de arroz japonês cozido",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "xicara", item: "arroz japonês", prep: "cozido", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 cebola fatiada",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cebola", prep: "fatiada", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "150 ml de dashi (caldo japonês)",
        group: null,
        items: [
          { qty: 150, qtyRange: null, unit: "mililitro", item: "dashi (caldo japonês)", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 colheres (sopa) de shoyu",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "colher-sopa", item: "shoyu", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (sopa) de mirin",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "mirin", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "3 ovos, levemente batidos",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: null, item: "ovos", prep: "levemente batidos", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Cebolinha fatiada",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "cebolinha", prep: "fatiada", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Prepare o Tonkatsu seguindo a receita, e fatie.",
      "Numa frigideira pequena (individual, se tiver — facilita deslizar direto sobre o arroz), aqueça o dashi, shoyu, mirin e açúcar até ferver.",
      "Junte a cebola fatiada e cozinhe por 3-4 minutos, até amolecer.",
      "Disponha as fatias de tonkatsu por cima da cebola no molho.",
      "Despeje os ovos batidos por cima, de forma irregular, sem misturar muito.",
      "Tampe e cozinhe em fogo médio-baixo por 2-3 minutos, até o ovo cozinhar mas ainda ficar levemente cremoso no centro.",
      "Deslize todo o conteúdo da frigideira sobre uma tigela de arroz japonês quente.",
      "Finalize com cebolinha fatiada e sirva imediatamente."
    ],
    tips: [
      "É a forma clássica japonesa de transformar sobras de tonkatsu num prato completo e reconfortante em minutos.",
      "O ovo deve ficar levemente cremoso, não totalmente cozido — isso cria um molho natural que se mistura com o arroz.",
      "Popular entre estudantes antes de provas no Japão, já que 'katsu' soa parecido com a palavra 'vencer' em japonês — considerado prato da sorte."
    ]
  },
  {
    name: "Yakitori",
    subgroup: "Pratos Quentes",
    desc: "Espetinhos de coxa de frango e cebolinha grelhados, pincelados com molho tare (shoyu, mirin e sake) caramelizado.",
    origin: "Japão",
    time: { prep: "20 min + 30 min marinada", cook: "15 min", total: "1h05" },
    yield: "4 porções (12 espetos)",
    difficulty: "Fácil",
    tags: ["protein:frango", "ingredient:molho-de-soja"],
    ingredients: [
      "600 g de coxa de frango, em cubos",
      "2 talos de cebolinha grossa (negi ou alho-poró), em pedaços",
      "Para o molho tare: 100 ml de shoyu, 100 ml de mirin, 50 ml de sake, 2 colheres (sopa) de açúcar",
      "Espetos de bambu (de molho em água por 30 minutos, para não queimar)"
    ],
    ingredientsStructured: [
      {
        raw: "600 g de coxa de frango, em cubos",
        group: null,
        items: [
          { qty: 600, qtyRange: null, unit: "grama", item: "coxa de frango", prep: "em cubos", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 talos de cebolinha grossa (negi ou alho-poró), em pedaços",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "talo", item: "cebolinha grossa (negi ou alho-poró)", prep: "em pedaços", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Para o molho tare: 100 ml de shoyu, 100 ml de mirin, 50 ml de sake, 2 colheres (sopa) de açúcar",
        group: "molho tare",
        items: [
          { qty: 100, qtyRange: null, unit: "mililitro", item: "shoyu", prep: null, alt: null, optional: false, isReference: false },
          { qty: 100, qtyRange: null, unit: "mililitro", item: "mirin", prep: null, alt: null, optional: false, isReference: false },
          { qty: 50, qtyRange: null, unit: "mililitro", item: "sake", prep: null, alt: null, optional: false, isReference: false },
          { qty: 2, qtyRange: null, unit: "colher-sopa", item: "açúcar", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Espetos de bambu (de molho em água por 30 minutos, para não queimar)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "espetos de bambu", prep: "de molho em água por 30 minutos, para não queimar", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Prepare o molho tare: junte todos os ingredientes numa panela pequena e reduza em fogo médio por 10-12 minutos, até engrossar levemente e formar um molho brilhante tipo xarope. Deixe esfriar.",
      "Monte os espetos, intercalando pedaços de frango e cebolinha/alho-poró.",
      "Grelhe os espetos numa churrasqueira ou grelha bem quente, virando ocasionalmente, por 10-12 minutos, até o frango cozinhar por dentro.",
      "Nos últimos minutos, pincele generosamente com o molho tare, deixando caramelizar levemente a cada camada (repita 2-3 vezes).",
      "Sirva imediatamente, com mais molho tare à parte, se desejar."
    ],
    tips: [
      "O molho tare tradicionalmente é reutilizado e 'alimentado' ao longo dos anos em muitas yakitorias japonesas — cada nova leva de espetos grelhados nele intensifica ainda mais o sabor.",
      "Deixar os espetos de bambu de molho antes de usar evita que queimem na grelha.",
      "Pode ser feito com outras partes do frango (asa, coração, pele) para a experiência tradicional completa de uma yakitoria japonesa."
    ]
  },
  {
    name: "Sukiyaki",
    subgroup: "Pratos Quentes",
    desc: "Fondue japonês de carne bovina fatiada fina, tofu, cogumelos e legumes cozidos aos poucos numa panela com molho doce de shoyu, mergulhados em gema crua antes de comer.",
    origin: "Japão",
    time: { prep: "25 min", cook: "20 min", total: "45 min" },
    yield: "4 porções",
    difficulty: "Média",
    tags: ["protein:boi", "ingredient:cogumelo", "ingredient:ovo", "ingredient:molho-de-soja"],
    ingredients: [
      "600 g de carne bovina fatiada bem fina (tipo para yakiniku)",
      "200 g de tofu firme, em cubos",
      "200 g de cogumelos shiitake e shimeji",
      "1 maço de espinafre japonês (ou acelga)",
      "2 talos de negi (cebolinha grossa), em pedaços",
      "200 g de macarrão shirataki (ou macarrão de arroz)",
      "Para o molho warishita: 150 ml de shoyu, 150 ml de mirin, 100 ml de sake, 3 colheres (sopa) de açúcar, 100 ml de dashi",
      "2 gemas cruas, para mergulhar (tradicional)",
      "Óleo e um pedaço de gordura de boi (opcional, para untar a panela)"
    ],
    ingredientsStructured: [
      {
        raw: "600 g de carne bovina fatiada bem fina (tipo para yakiniku)",
        group: null,
        items: [
          { qty: 600, qtyRange: null, unit: "grama", item: "carne bovina", prep: "fatiada bem fina (tipo para yakiniku)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "200 g de tofu firme, em cubos",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "grama", item: "tofu firme", prep: "em cubos", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "200 g de cogumelos shiitake e shimeji",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "grama", item: "cogumelos shiitake e shimeji", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 maço de espinafre japonês (ou acelga)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "maço de espinafre japonês", prep: null, alt: "acelga", optional: false, isReference: false },
        ],
      },
      {
        raw: "2 talos de negi (cebolinha grossa), em pedaços",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "talo", item: "negi (cebolinha grossa)", prep: "em pedaços", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "200 g de macarrão shirataki (ou macarrão de arroz)",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "grama", item: "macarrão shirataki", prep: null, alt: "macarrão de arroz", optional: false, isReference: false },
        ],
      },
      {
        raw: "Para o molho warishita: 150 ml de shoyu, 150 ml de mirin, 100 ml de sake, 3 colheres (sopa) de açúcar, 100 ml de dashi",
        group: "molho warishita",
        items: [
          { qty: 150, qtyRange: null, unit: "mililitro", item: "shoyu", prep: null, alt: null, optional: false, isReference: false },
          { qty: 150, qtyRange: null, unit: "mililitro", item: "mirin", prep: null, alt: null, optional: false, isReference: false },
          { qty: 100, qtyRange: null, unit: "mililitro", item: "sake", prep: null, alt: null, optional: false, isReference: false },
          { qty: 3, qtyRange: null, unit: "colher-sopa", item: "açúcar", prep: null, alt: null, optional: false, isReference: false },
          { qty: 100, qtyRange: null, unit: "mililitro", item: "dashi", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "2 gemas cruas, para mergulhar (tradicional)",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: null, item: "gemas", prep: "cruas, para mergulhar (tradicional)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Óleo e um pedaço de gordura de boi (opcional, para untar a panela)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "óleo", prep: "para untar a panela", alt: null, optional: true, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "pedaço de gordura de boi", prep: "para untar a panela", alt: null, optional: true, isReference: false },
        ],
      },
    ],
    steps: [
      "Prepare o molho warishita misturando shoyu, mirin, sake, açúcar e dashi.",
      "Numa panela larga e rasa (tradicionalmente de ferro fundido) na mesa, aqueça um pouco de óleo (ou a gordura de boi, se usar) em fogo médio-alto.",
      "Sele algumas fatias de carne rapidamente, só por alguns segundos de cada lado.",
      "Adicione um pouco do molho warishita e deixe borbulhar.",
      "Vá adicionando os outros ingredientes aos poucos, em grupos (tofu, cogumelos, vegetais, macarrão), cozinhando por poucos minutos cada, e comendo à medida que ficam prontos, adicionando mais molho e ingredientes conforme necessário.",
      "Tradicionalmente, cada porção é mergulhada numa tigela individual com gema crua batida antes de comer (o calor do alimento 'cozinha' levemente a gema).",
      "Continue cozinhando e servindo em rodadas até terminar todos os ingredientes."
    ],
    tips: [
      "É um prato feito para ser cozinhado e comido diretamente à mesa, numa panela compartilhada — parte da experiência é a interação social ao redor da panela.",
      "A gema crua para mergulhar é opcional para quem preferir não consumir ovo cru, mas é a tradição mais autêntica e valorizada.",
      "Não cozinhe tudo de uma vez — adicionar os ingredientes aos poucos, em ondas, é o que mantém cada elemento no ponto certo."
    ]
  },
  {
    name: "Shabu-Shabu",
    subgroup: "Pratos Quentes",
    desc: "Fondue japonês de carne bovina fatiada bem fina, cozida rapidamente em caldo dashi e mergulhada em molho ponzu ou de gergelim, junto com tofu e legumes.",
    origin: "Japão",
    time: { prep: "25 min", cook: "20 min", total: "45 min" },
    yield: "4 porções",
    difficulty: "Fácil",
    tags: ["protein:boi", "ingredient:cogumelo", "ingredient:molho-de-soja"],
    ingredients: [
      "600 g de carne bovina fatiada extremamente fina (tipo para shabu-shabu)",
      "1 L de dashi (caldo japonês) ou caldo kombu (alga)",
      "200 g de tofu firme, em cubos",
      "Repolho chinês, cogumelos shiitake e enoki, cenoura fatiada",
      "200 g de macarrão udon ou shirataki",
      "Para o molho ponzu: shoyu + suco cítrico + um pouco de dashi",
      "Para o molho goma (gergelim): pasta de gergelim, shoyu, açúcar e um pouco de dashi para afinar"
    ],
    ingredientsStructured: [
      {
        raw: "600 g de carne bovina fatiada extremamente fina (tipo para shabu-shabu)",
        group: null,
        items: [
          { qty: 600, qtyRange: null, unit: "grama", item: "carne bovina", prep: "fatiada extremamente fina (tipo para shabu-shabu)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 L de dashi (caldo japonês) ou caldo kombu (alga)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "litro", item: "dashi (caldo japonês)", prep: null, alt: "caldo kombu (alga)", optional: false, isReference: false },
        ],
      },
      {
        raw: "200 g de tofu firme, em cubos",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "grama", item: "tofu firme", prep: "em cubos", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Repolho chinês, cogumelos shiitake e enoki, cenoura fatiada",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "repolho chinês", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "cogumelos shiitake e enoki", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "cenoura", prep: "fatiada", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "200 g de macarrão udon ou shirataki",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "grama", item: "macarrão udon", prep: null, alt: "shirataki", optional: false, isReference: false },
        ],
      },
      {
        raw: "Para o molho ponzu: shoyu + suco cítrico + um pouco de dashi",
        group: "molho ponzu",
        items: [
          { qty: null, qtyRange: null, unit: null, item: "shoyu", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "suco cítrico", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "dashi", prep: "um pouco", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Para o molho goma (gergelim): pasta de gergelim, shoyu, açúcar e um pouco de dashi para afinar",
        group: "molho goma (gergelim)",
        items: [
          { qty: null, qtyRange: null, unit: null, item: "pasta de gergelim", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "shoyu", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "açúcar", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "dashi", prep: "um pouco, para afinar", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Prepare os dois molhos de mergulho (ponzu e goma) misturando os respectivos ingredientes, e disponha em tigelas individuais.",
      "Numa panela na mesa (fondue ou panela própria com fonte de calor), aqueça o dashi/caldo kombu até ferver levemente.",
      "Cada pessoa segura uma fatia de carne com hashi (pauzinhos) e a movimenta rapidamente para frente e para trás no caldo fervente por apenas alguns segundos, até mudar de cor — esse movimento de 'shabu-shabu' (som onomatopaico do balanço na água) dá nome ao prato.",
      "Mergulhe a carne cozida num dos molhos antes de comer.",
      "Vá cozinhando os vegetais, tofu e cogumelos no mesmo caldo, em grupos, à medida que forem sendo consumidos.",
      "Ao final, cozinhe o macarrão no caldo já enriquecido por todos os ingredientes anteriores, e sirva como encerramento da refeição."
    ],
    tips: [
      "A carne deve ser fatiada extremamente fina (quase transparente) — geralmente comprada já pronta em açougues asiáticos, já que cortar tão fino em casa é difícil sem um fatiador profissional.",
      "Diferente do sukiyaki (que usa um molho doce e salgado direto na panela), o shabu-shabu usa um caldo mais neutro e os sabores vêm dos molhos de mergulho individuais.",
      "O macarrão cozido no final, no caldo já enriquecido por todos os sabores da refeição, é considerado por muitos a melhor parte do prato."
    ]
  },
  {
    name: "Tempurá",
    subgroup: "Pratos Quentes",
    desc: "Camarões e legumes envolvidos numa massa leve de farinha e água gelada, fritos até crocantes e claros — servidos com molho tentsuyu e daikon ralado.",
    origin: "Japão",
    time: { prep: "20 min", cook: "15 min", total: "35 min" },
    yield: "4 porções",
    difficulty: "Média",
    tags: ["protein:frutos-do-mar", "ingredient:molho-de-soja"],
    ingredients: [
      "12 camarões grandes, limpos (com a cauda)",
      "Vegetais variados (abobrinha, batata-doce, berinjela, pimentão), fatiados",
      "1 xícara de farinha de trigo gelada",
      "1 gema",
      "1 xícara de água com gelo",
      "Óleo, para fritar",
      "Molho tentsuyu (dashi + shoyu + mirin), para servir",
      "Daikon ralado, para acompanhar"
    ],
    ingredientsStructured: [
      {
        raw: "12 camarões grandes, limpos (com a cauda)",
        group: null,
        items: [
          { qty: 12, qtyRange: null, unit: null, item: "camarões grandes", prep: "limpos (com a cauda)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Vegetais variados (abobrinha, batata-doce, berinjela, pimentão), fatiados",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "vegetais variados", prep: "abobrinha, batata-doce, berinjela, pimentão, fatiados", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 xícara de farinha de trigo gelada",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "xicara", item: "farinha de trigo gelada", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "1 xícara de água com gelo",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "xicara", item: "água com gelo", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Óleo, para fritar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "óleo", prep: "para fritar", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Molho tentsuyu (dashi + shoyu + mirin), para servir",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "molho tentsuyu", prep: "dashi + shoyu + mirin, para servir", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Daikon ralado, para acompanhar",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "daikon", prep: "ralado, para acompanhar", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Faça pequenos cortes na barriga de cada camarão (evita que encolham e curvem na fritura).",
      "Prepare a massa tempurá na hora de fritar (nunca com antecedência): misture a gema com a água gelada, depois adicione a farinha de uma vez, mexendo só algumas vezes com hashi ou garfo — a massa deve ficar com grumos e um pouco de farinha seca visível, nunca completamente lisa.",
      "Aqueça o óleo numa panela funda a 170-180°C.",
      "Passe cada camarão ou vegetal na massa tempurá, cobrindo levemente (não deve ficar uma camada grossa), e deslize no óleo quente.",
      "Frite por 1-2 minutos, até a massa ficar crocante e levemente dourada (não deve escurecer muito, tempurá é claro).",
      "Escorra em papel toalha ou grade e sirva imediatamente, com molho tentsuyu e daikon ralado."
    ],
    tips: [
      "Nunca misture demais a massa — a presença de pequenos grumos e farinha seca é o que garante a textura leve e crocante característica; massa lisa demais fica com textura de empanado comum.",
      "Água bem gelada (e até cubos de gelo na tigela da massa) mantém a massa fria até o momento de fritar, o que também contribui para a crocância.",
      "Frite em pequenas quantidades por vez, sem lotar o óleo, para manter a temperatura estável e a fritura uniforme."
    ]
  },
  {
    name: "Chawanmushi",
    subgroup: "Pratos Quentes",
    desc: "Flan salgado japonês de ovo e dashi, cozido no vapor com camarão, shiitake e espinafre — textura extremamente lisa e macia, comido de colher.",
    origin: "Japão",
    time: { prep: "10 min", cook: "15 min", total: "25 min" },
    yield: "4 porções",
    difficulty: "Média",
    tags: ["protein:ovo", "contains:frutos-do-mar", "ingredient:ovo", "ingredient:cogumelo", "ingredient:espinafre", "ingredient:molho-de-soja"],
    ingredients: [
      "3 ovos",
      "500 ml de dashi (caldo japonês), frio ou em temperatura ambiente",
      "1 colher (sopa) de shoyu claro (usukuchi, se disponível)",
      "1 colher (sopa) de mirin",
      "1 pitada de sal",
      "4 camarões pequenos, limpos",
      "4 fatias finas de shiitake",
      "Algumas folhas de espinafre japonês cozido",
      "Casca de limão-siciliano, para decorar (opcional)"
    ],
    ingredientsStructured: [
      {
        raw: "3 ovos",
        group: null,
        items: [
          { qty: 3, qtyRange: null, unit: null, item: "ovos", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "500 ml de dashi (caldo japonês), frio ou em temperatura ambiente",
        group: null,
        items: [
          { qty: 500, qtyRange: null, unit: "mililitro", item: "dashi (caldo japonês)", prep: "frio ou em temperatura ambiente", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (sopa) de shoyu claro (usukuchi, se disponível)",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "shoyu claro", prep: "usukuchi, se disponível", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 colher (sopa) de mirin",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "mirin", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "4 camarões pequenos, limpos",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: null, item: "camarões pequenos", prep: "limpos", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "4 fatias finas de shiitake",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: null, item: "fatias finas de shiitake", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Algumas folhas de espinafre japonês cozido",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "algumas folhas de espinafre japonês", prep: "cozido", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Casca de limão-siciliano, para decorar (opcional)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "casca de limão-siciliano", prep: "para decorar", alt: null, optional: true, isReference: false },
        ],
      },
    ],
    steps: [
      "Bata os ovos levemente numa tigela, sem incorporar muito ar (mexa devagar, não bata como para omelete).",
      "Misture o dashi frio, shoyu claro, mirin e sal aos ovos batidos, delicadamente.",
      "Coe essa mistura através de uma peneira fina, para remover qualquer bolha ou grumo — essencial para a textura lisa característica.",
      "Distribua o camarão, shiitake e espinafre no fundo de xícaras ou tigelas pequenas próprias para chawanmushi (ou ramequins pequenos).",
      "Despeje a mistura de ovo e dashi coada por cima, cobrindo os ingredientes.",
      "Cubra cada recipiente com papel-alumínio ou uma tampa própria.",
      "Cozinhe em banho-maria, em fogo baixo (a água não deve ferver forte), por 12-15 minutos, até o creme firmar mas continuar tremulante e macio, como um flan bem delicado.",
      "Sirva morno, decorado com uma casca de limão-siciliano, se desejar, comido com uma colher."
    ],
    tips: [
      "É essencialmente um 'flan salgado' japonês — a textura deve ser extremamente lisa e macia, quase como um pudim de seda.",
      "Fogo muito baixo durante o cozimento é essencial — fervura forte cria buracos e uma textura porosa, indesejada nesse prato.",
      "Servido tradicionalmente como um prato intermediário elegante numa refeição kaiseki (menu degustação japonês tradicional)."
    ]
  },

  // ===================== CALDOS E MACARRÃO =====================
  {
    name: "Ramen",
    subgroup: "Caldos e Macarrão",
    desc: "Sopa de macarrão japonês em caldo turvo e encorpado de ossos de porco fervidos por horas, com fatias de chashu (porco braseado), ovo marinado e nori.",
    origin: "Japão",
    time: { prep: "30 min", cook: "3h (caldo) + 20 min (montagem)", total: "≈3h30" },
    yield: "4 porções",
    difficulty: "Alta",
    tags: ["protein:suino", "ingredient:ovo", "ingredient:molho-de-soja"],
    ingredients: [
      "1,5 kg de ossos de porco (ou frango) para o caldo",
      "2 L de água",
      "1 cebola, 4 dentes de alho, 1 pedaço de gengibre",
      "4 porções de macarrão fresco para ramen",
      "Para o tare (base de tempero): 100 ml de shoyu, 50 ml de mirin, 30 ml de sake",
      "4 fatias de chashu (barriga de porco enrolada e braseada) ou lombo fatiado",
      "4 ovos marinados (ajitsuke tamago: ovos cozidos no ponto mollet, marinados em shoyu e mirin por algumas horas)",
      "Cebolinha fatiada, broto de bambu (menma), folhas de nori"
    ],
    ingredientsStructured: [
      {
        raw: "1,5 kg de ossos de porco (ou frango) para o caldo",
        group: null,
        items: [
          { qty: 1.5, qtyRange: null, unit: "quilograma", item: "ossos de porco", prep: "para o caldo", alt: "frango", optional: false, isReference: false },
        ],
      },
      {
        raw: "2 L de água",
        group: null,
        items: [
          { qty: 2, qtyRange: null, unit: "litro", item: "água", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "1 cebola, 4 dentes de alho, 1 pedaço de gengibre",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: null, item: "cebola", prep: null, alt: null, optional: false, isReference: false },
          { qty: 4, qtyRange: null, unit: "dente", item: "alho", prep: null, alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "pedaco", item: "gengibre", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "4 porções de macarrão fresco para ramen",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: null, item: "porções de macarrão fresco para ramen", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Para o tare (base de tempero): 100 ml de shoyu, 50 ml de mirin, 30 ml de sake",
        group: "tare (base de tempero)",
        items: [
          { qty: 100, qtyRange: null, unit: "mililitro", item: "shoyu", prep: null, alt: null, optional: false, isReference: false },
          { qty: 50, qtyRange: null, unit: "mililitro", item: "mirin", prep: null, alt: null, optional: false, isReference: false },
          { qty: 30, qtyRange: null, unit: "mililitro", item: "sake", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "4 fatias de chashu (barriga de porco enrolada e braseada) ou lombo fatiado",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: "fatia", item: "chashu (barriga de porco enrolada e braseada)", prep: null, alt: "lombo fatiado", optional: false, isReference: false },
        ],
      },
      {
        raw: "4 ovos marinados (ajitsuke tamago: ovos cozidos no ponto mollet, marinados em shoyu e mirin por algumas horas)",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: null, item: "ovos marinados (ajitsuke tamago)", prep: "ovos cozidos no ponto mollet, marinados em shoyu e mirin por algumas horas", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Cebolinha fatiada, broto de bambu (menma), folhas de nori",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "cebolinha", prep: "fatiada", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "broto de bambu (menma)", prep: null, alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "folhas de nori", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Prepare o caldo: ferva os ossos em água por 5 minutos, descarte essa água (remove impurezas) e enxágue os ossos.",
      "Volte os ossos limpos à panela com água nova, cebola, alho e gengibre. Cozinhe em fervura vigorosa (não apenas suave, como um fundo claro comum) por 3-4 horas, repondo água conforme evapora — a fervura forte é o que emulsiona a gordura e dá o caldo turvo e encorpado típico do ramen (estilo tonkotsu).",
      "Coe o caldo, descartando os sólidos.",
      "Prepare o tare misturando shoyu, mirin e sake.",
      "Para montar: coloque 2-3 colheres de tare no fundo de cada tigela, complete com o caldo quente coado, misturando bem.",
      "Cozinhe o macarrão fresco em água fervente separada, seguindo o tempo indicado na embalagem (geralmente 2-3 minutos), escorra bem e adicione à tigela com o caldo.",
      "Disponha por cima as fatias de chashu, o ovo marinado cortado ao meio, cebolinha, menma e nori.",
      "Sirva imediatamente, bem quente."
    ],
    tips: [
      "A fervura vigorosa e prolongada dos ossos (diferente de um fundo claro clássico francês, que deve ferver suavemente) é o que cria o caldo turvo e cremoso característico do ramen estilo tonkotsu.",
      "O ovo marinado (ajitsuke tamago) precisa de pelo menos algumas horas de marinada — prepare com antecedência.",
      "Cada componente (caldo, tare, macarrão, toppings) pode ser preparado separadamente e montado na hora — é assim que ramen-yas profissionais trabalham."
    ]
  },
  {
    name: "Udon",
    subgroup: "Caldos e Macarrão",
    desc: "Sopa de macarrão japonês grosso e elástico em caldo claro de dashi e shoyu, finalizada com kamaboko (bolinho de peixe) e cebolinha.",
    origin: "Japão",
    time: { prep: "15 min", cook: "20 min", total: "35 min" },
    yield: "4 porções",
    difficulty: "Fácil",
    tags: ["contains:peixe", "contains:frutos-do-mar", "ingredient:molho-de-soja"],
    ingredients: [
      "600 g de macarrão udon fresco (ou seco, cozido conforme a embalagem)",
      "1 L de dashi",
      "80 ml de shoyu claro (usukuchi) ou shoyu comum",
      "50 ml de mirin",
      "1 colher (sopa) de açúcar",
      "4 fatias de kamaboko (bolinho de peixe, opcional)",
      "Cebolinha fatiada",
      "Tempurá de camarão, para servir (opcional, ver receita)"
    ],
    ingredientsStructured: [
      {
        raw: "600 g de macarrão udon fresco (ou seco, cozido conforme a embalagem)",
        group: null,
        items: [
          { qty: 600, qtyRange: null, unit: "grama", item: "macarrão udon fresco", prep: null, alt: "seco, cozido conforme a embalagem", optional: false, isReference: false },
        ],
      },
      {
        raw: "1 L de dashi",
        group: null,
        items: [
          { qty: 1, qtyRange: null, unit: "litro", item: "dashi", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "80 ml de shoyu claro (usukuchi) ou shoyu comum",
        group: null,
        items: [
          { qty: 80, qtyRange: null, unit: "mililitro", item: "shoyu claro (usukuchi)", prep: null, alt: "shoyu comum", optional: false, isReference: false },
        ],
      },
      {
        raw: "50 ml de mirin",
        group: null,
        items: [
          { qty: 50, qtyRange: null, unit: "mililitro", item: "mirin", prep: null, alt: null, optional: false, isReference: false },
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
        raw: "4 fatias de kamaboko (bolinho de peixe, opcional)",
        group: null,
        items: [
          { qty: 4, qtyRange: null, unit: "fatia", item: "kamaboko (bolinho de peixe)", prep: null, alt: null, optional: true, isReference: false },
        ],
      },
      {
        raw: "Cebolinha fatiada",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "cebolinha", prep: "fatiada", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Tempurá de camarão, para servir (opcional, ver receita)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "tempurá de camarão", prep: "para servir; ver receita", alt: null, optional: true, isReference: true },
        ],
      },
    ],
    steps: [
      "Prepare o caldo: aqueça o dashi com shoyu, mirin e açúcar, até ferver levemente e os sabores se incorporarem, 5 minutos.",
      "Cozinhe o macarrão udon em água fervente separada, seguindo o tempo da embalagem (macarrão fresco cozinha rápido, cerca de 2 minutos).",
      "Escorra o macarrão e distribua nas tigelas.",
      "Cubra com o caldo quente.",
      "Finalize com fatias de kamaboko, cebolinha fatiada e, se desejar, uma peça de tempurá de camarão por cima.",
      "Sirva imediatamente, bem quente."
    ],
    tips: [
      "O caldo de udon é mais claro e delicado que o de ramen — não precisa da fervura vigorosa de ossos, é rápido de preparar com dashi de boa qualidade.",
      "Macarrão udon fresco tem uma textura grossa e elástica muito característica — vale procurar a versão fresca em vez da seca sempre que possível.",
      "Prato reconfortante e rápido, um dos mais consumidos no dia a dia japonês, com inúmeras variações regionais de caldo e toppings."
    ]
  },
  {
    name: "Soba",
    subgroup: "Caldos e Macarrão",
    desc: "Macarrão japonês de trigo sarraceno, servido frio com molho tsuyu para mergulhar ou quente em caldo de dashi, como uma sopa.",
    origin: "Japão",
    time: { prep: "10 min", cook: "10 min", total: "20 min" },
    yield: "2 porções",
    difficulty: "Fácil",
    tags: ["diet:vegetariana", "ingredient:molho-de-soja"],
    ingredients: [
      "200 g de macarrão soba (trigo sarraceno)",
      "Para o molho tsuyu (para soba fria): 200 ml de dashi, 60 ml de shoyu, 60 ml de mirin, 1 colher (sopa) de açúcar",
      "Cebolinha fatiada e wasabi, para acompanhar (versão fria)",
      "Alternativa quente: 800 ml de caldo dashi temperado com shoyu e mirin, para servir como sopa"
    ],
    ingredientsStructured: [
      {
        raw: "200 g de macarrão soba (trigo sarraceno)",
        group: null,
        items: [
          { qty: 200, qtyRange: null, unit: "grama", item: "macarrão soba (trigo sarraceno)", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Para o molho tsuyu (para soba fria): 200 ml de dashi, 60 ml de shoyu, 60 ml de mirin, 1 colher (sopa) de açúcar",
        group: "molho tsuyu (para soba fria)",
        items: [
          { qty: 200, qtyRange: null, unit: "mililitro", item: "dashi", prep: null, alt: null, optional: false, isReference: false },
          { qty: 60, qtyRange: null, unit: "mililitro", item: "shoyu", prep: null, alt: null, optional: false, isReference: false },
          { qty: 60, qtyRange: null, unit: "mililitro", item: "mirin", prep: null, alt: null, optional: false, isReference: false },
          { qty: 1, qtyRange: null, unit: "colher-sopa", item: "açúcar", prep: null, alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Cebolinha fatiada e wasabi, para acompanhar (versão fria)",
        group: null,
        items: [
          { qty: null, qtyRange: null, unit: null, item: "cebolinha", prep: "fatiada, para acompanhar (versão fria)", alt: null, optional: false, isReference: false },
          { qty: null, qtyRange: null, unit: null, item: "wasabi", prep: "para acompanhar (versão fria)", alt: null, optional: false, isReference: false },
        ],
      },
      {
        raw: "Alternativa quente: 800 ml de caldo dashi temperado com shoyu e mirin, para servir como sopa",
        group: "alternativa quente",
        items: [
          { qty: 800, qtyRange: null, unit: "mililitro", item: "caldo dashi", prep: "temperado com shoyu e mirin, para servir como sopa", alt: null, optional: false, isReference: false },
        ],
      },
    ],
    steps: [
      "Cozinhe o macarrão soba em água fervente sem sal, seguindo o tempo da embalagem (geralmente 4-5 minutos), mexendo ocasionalmente para não grudar.",
      "Escorra e enxágue imediatamente em água fria corrente, esfregando levemente entre as mãos, para remover o excesso de amido e interromper o cozimento — isso é essencial para a textura correta, especialmente na versão fria.",
      "Para a versão fria (zaru soba): prepare o molho tsuyu misturando os ingredientes e deixando gelar. Sirva o soba frio numa peneira de bambu (zaru) ou prato, com o molho tsuyu à parte para mergulhar cada porção antes de comer, finalizado com cebolinha e wasabi.",
      "Para a versão quente: aqueça o caldo dashi temperado, adicione o soba já cozido e enxaguado só para aquecer por 1 minuto, e sirva na tigela com o caldo."
    ],
    tips: [
      "Enxaguar bem o macarrão em água fria após cozinhar é um passo que não deve ser pulado, mesmo na versão quente — remove o amido em excesso que deixaria o caldo turvo e o macarrão grudento.",
      "A versão fria (zaru soba), com o macarrão mergulhado no molho tsuyu antes de cada garfada, é a forma mais tradicional e apreciada de consumir soba de alta qualidade no verão japonês.",
      "Soba de trigo sarraceno tem sabor mais terroso e complexo que macarrões de trigo comum — parte da experiência é apreciar esse sabor específico, por isso o molho é servido à parte, não misturado."
    ]
  },
];
