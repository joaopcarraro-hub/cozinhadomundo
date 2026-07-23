// ============ DICIONÁRIO DE COMPRA v1 (Lista de Compras — Fase 1) ============
// Normaliza o TEXTO de um ingrediente pro seu "núcleo de compra": o que de fato vai pro
// carrinho, ignorando o que só importa na execução da receita (tamanho, temperatura, estado
// de uso). É uma camada PRÓPRIA da lista de compras — ingredientsStructured continua sendo a
// verdade da RECEITA e nunca é alterado por aqui. Critério de fusão (decidido na investigação
// de 2026-07-23): variantes ORDENADAS (comprar a específica satisfaz a genérica) fundem no
// rótulo MAIS ESPECÍFICO (leite → leite integral); variantes PARALELAS (nenhuma satisfaz a
// outra) fundem no GENÉRICO (camarão médio/grande → camarão); produto processado/diferente
// NUNCA funde (manteiga clarificada ≠ manteiga; creme de leite fresco ≠ lata); cortes de
// proteína (peito, coxa, lombo) ficam separados.
// Usado em produção (js/app.js agrupamento da visão Geral + js/storage.js boughtKeys e
// migração v1→v2) — mesmo padrão UMD de derivation-dict.js pra também poder ser carregado
// via require em teste/auditoria. Não duplique este conteúdo em nenhum lugar.
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.ShoppingDict = factory();
  }
})(typeof window !== "undefined" ? window : this, function () {
  // Enum das unidades que existem no acervo — a migração v1→v2 de boughtKeys (storage.js)
  // usa isto pra validar o split "item|unit" no último pipe antes de reescrever a chave.
  const KNOWN_UNITS = {
    grama: 1, quilograma: 1, mililitro: 1, litro: 1,
    "colher-sopa": 1, "colher-cha": 1, xicara: 1,
    dente: 1, pitada: 1, folha: 1, talo: 1, fatia: 1, ramo: 1, pedaco: 1,
    file: 1, fio: 1, disco: 1, fava: 1, posta: 1, pacote: 1, colher: 1, lata: 1,
  };

  // ---- Camada 3 (fallback): modificadores que NUNCA mudam o que se compra ----
  // Só tamanho, temperatura e estado de uso/preparo pós-compra. NUNCA coloque aqui:
  // "fresco/fresca" (creme de leite fresco, camarão fresco vs seco — muda a identidade),
  // "seco/seca" (camarão seco, vinho seco), "grosso/grossa" (sal grosso), "inteiro/inteira"
  // (frango inteiro é rótulo canônico), "extra" (extra virgem). Esses casos se resolvem um a
  // um no mapa CANONICAL abaixo.
  const STRIP_PHRASES = ["em temperatura ambiente"];
  const STRIP_WORDS = {
    // tamanho
    pequeno: 1, pequena: 1, pequenos: 1, pequenas: 1,
    grande: 1, grandes: 1,
    "médio": 1, "média": 1, "médios": 1, "médias": 1, medio: 1, media: 1,
    // temperatura
    morno: 1, morna: 1, gelado: 1, gelada: 1, gelados: 1, geladas: 1,
    frio: 1, fria: 1, quente: 1, fervente: 1,
    // estado de uso / preparo pós-compra
    dividido: 1, dividida: 1, divididos: 1, divididas: 1,
    derretido: 1, derretida: 1, amolecido: 1, amolecida: 1,
    maduro: 1, madura: 1, maduros: 1, maduras: 1,
    cozido: 1, cozida: 1, cozidos: 1, cozidas: 1,
    picado: 1, picada: 1, picados: 1, picadas: 1,
    ralado: 1, ralada: 1, amassado: 1, amassada: 1,
    tostado: 1, tostada: 1, tostados: 1, tostadas: 1,
    desfiado: 1, desfiada: 1, duro: 1, duros: 1, dura: 1, duras: 1,
    firme: 1, firmes: 1, levemente: 1, bem: 1, muito: 1, muita: 1,
  };
  // Sobras de conector quando um modificador some do começo ou do meio da frase ("cebola em
  // rodelas grandes" → "cebola em rodelas"; "tomate bem maduro" → "tomate"; "½ de cebola
  // roxa" chega aqui como "de cebola roxa") — nunca abrem nem terminam um núcleo válido.
  const DANGLING = { de: 1, da: 1, do: 1, em: 1, e: 1, com: 1, para: 1, a: 1 };

  // ---- Camada 2: mapa curado texto-completo → núcleo de compra ----
  // Chaves já em lowercase e SEM parênteses (a camada 1 roda antes da consulta). A consulta
  // roda DUAS vezes: no texto pós-camada-1 e de novo no resultado da camada 3 ("cebolas
  // grandes" → strip → "cebolas" → mapa → "cebola"). Valores devem ser pontos fixos (rodar o
  // pipeline neles devolve eles mesmos).
  const CANONICAL = {
    // fusões ORDENADAS — genérico assume o rótulo específico
    "leite": "leite integral",
    "azeite": "azeite extra virgem",
    "azeite de oliva": "azeite extra virgem",
    "azeite de oliva extra virgem": "azeite extra virgem",
    "azeite de oliva extra virgem de boa qualidade": "azeite extra virgem",
    "azeite de oliva extra virgem de altíssima qualidade": "azeite extra virgem",
    "azeite extra": "azeite extra virgem",
    "manteiga": "manteiga sem sal",
    "manteiga extra": "manteiga sem sal",
    "manteiga para tostar os muffins": "manteiga sem sal",
    "frango": "frango inteiro",
    "óleo": "óleo neutro",
    "arroz": "arroz branco",
    "arroz cru": "arroz branco",
    "vinagre": "vinagre branco",
    "pimenta": "pimenta-do-reino",
    "pimenta-do-reino preta": "pimenta-do-reino",
    "pimenta-do-reino grossa": "pimenta-do-reino",
    "iogurte natural": "iogurte natural integral",
    "cogumelos": "cogumelos paris",
    "cogumelos frescos": "cogumelos paris",
    "peito": "peito de frango",

    // plural / grafia → mesma coisa na prateleira (o núcleo é SEMPRE singular; a forma
    // plural de exibição vive em PLURALS, abaixo)
    "cebolas": "cebola",
    "cebolas roxas": "cebola roxa",
    "cebolinhas pérola": "cebolinha pérola",
    "tomates": "tomate",
    "tomates cereja": "tomate cereja",
    "batatas": "batata",
    "ovos": "ovo",
    "gemas": "gema",
    "gemas frescas": "gema",
    "gema por porção": "gema",
    "claras": "clara",
    "claras de ovo": "clara",
    "clara de ovo": "clara",
    "cenouras": "cenoura",
    "camarões": "camarão",
    "cravos": "cravo",
    "grãos de cravo": "cravo",
    "maçãs": "maçã",
    "mexilhões": "mexilhão",
    "berinjelas": "berinjela",
    "limões": "limão",
    "limões-sicilianos": "limão-siciliano",
    "abacates": "abacate",
    "nabos": "nabo",
    "lulas": "lula",
    "lagostas": "lagosta",
    "rabanetes": "rabanete",
    "beterrabas": "beterraba",
    "pepinos em conserva": "pepino em conserva",
    "cardamomos": "cardamomo",
    "vagens de cardamomo": "cardamomo",
    "filés mignon": "filé mignon",
    "medalhões de filé mignon": "medalhão de filé mignon",
    "filés finos de vitela": "filé fino de vitela",
    "joelhos de porco": "joelho de porco",
    "suprêmes de frango": "suprême de frango",
    "coxas de pato com sobrecoxa": "coxa de pato com sobrecoxa",
    "sobrecoxas de frango com osso": "sobrecoxa de frango com osso",
    "shanks de cordeiro": "shank de cordeiro",
    "bifes de lombo": "bife de lombo",
    "bifes de lombo suíno": "bife de lombo suíno",
    "bifes de contrafilé": "bife de contrafilé",
    "galetos": "galeto",
    "vieiras frescas": "vieira",
    "escargots em conserva": "escargot em conserva",
    "conchas": "concha",
    "sachês de tinta de lula": "sachê de tinta de lula",
    "cápsulas de n2o": "cápsula de n2o",
    "bolas de sorvete de creme": "bola de sorvete de creme",
    "maços de salsinha": "maço de salsinha",
    "maços de folhas de jambu": "maço de folhas de jambu",
    "pães tipo hot dog": "pão tipo hot dog",
    "pães pita": "pão pita",
    "pães": "pão",
    "pimentões poblano": "pimentão poblano",
    "pimentas guajillo secas": "pimenta guajillo seca",
    "pimentas ancho secas": "pimenta ancho seca",
    "pimentas chipotle secas": "pimenta chipotle seca",
    "pimentas mulato secas": "pimenta mulato seca",
    "pimentas pasilla secas": "pimenta pasilla seca",
    "pimentas tailandesas": "pimenta tailandesa",
    "pimentas jalapeño": "pimenta jalapeño",
    "pimentas secas": "pimenta seca",
    "tortillas de milho": "tortilla de milho",
    "tortillas de trigo": "tortilla de trigo",
    "english muffins": "english muffin",
    "biscoitos champanhe": "biscoito champanhe",
    "pequis inteiros": "pequi inteiro",
    "cabeças de alho": "cabeça de alho",
    "queijo tipo mussarela": "queijo muçarela",
    "presunto parma": "presunto de parma",
    "farinha de trigo tipo 00": "farinha tipo 00",
    "repolho napa": "repolho chinês",
    "banha de porco": "banha",

    // variantes de texto → núcleo (casos que a camada 3 não cobre — em geral por causa de
    // "fresco", que nunca é removido mecanicamente, só decidido aqui um a um)
    "farinha": "farinha de trigo",
    "farinha extra": "farinha de trigo",
    "farinha de trigo branca": "farinha de trigo",
    "farinha de rosca fina": "farinha de rosca",
    "farinha de mandioca crua": "farinha de mandioca",
    "sal para a água da massa": "sal",
    "cebola inteira": "cebola",
    "ovos inteiros": "ovo",
    "ovos com casca": "ovo",
    "ovos por ramequim": "ovo",
    "ovo por porção": "ovo",
    "ovo fresco por porção": "ovo",
    "ovos frescos": "ovo",
    "ovos para poché": "ovo",
    "ovos marinados": "ovo",
    "ovo frito": "ovo",
    "ovo mexido cremoso": "ovo",
    "ovos no ponto mollet": "ovo",
    "água com gelo": "água",
    "água suficiente para cobrir os ovos": "água",
    "água suficiente para cobrir": "água",
    "água suficiente para um banho controlado": "água",
    "água para a salmoura final": "água",
    "suco de limão fresco": "suco de limão",
    "suco cítrico fresco": "suco cítrico",
    "camarão fresco": "camarão",
    "peixe branco fresco": "peixe branco",
    "filé mignon fresco": "filé mignon",
    "filé mignon em peça central": "filé mignon",
    "carne seca dessalgada": "carne seca",
    "creme de leite fresco por ramequim": "creme de leite fresco",
    "grãos de pimenta-do-reino": "pimenta-do-reino em grãos",
    "grãos de pimenta-do-reino preta": "pimenta-do-reino em grãos",
    "pimenta-do-reino preta em grãos": "pimenta-do-reino em grãos",
    "grãos de pimenta": "pimenta-do-reino em grãos",
    "folhas de louro": "louro",
    "folha de louro": "louro",
    "maionese caseira": "maionese",
    "mostarda dijon extra": "mostarda dijon",
    "vinho branco seco + água para cobrir": "vinho branco seco",
    "presunto de boa qualidade": "presunto",
    "iogurte grego espesso": "iogurte grego",
    "crème pâtissière de baunilha": "crème pâtissière",
    "batata palha fina": "batata palha",

    // ---- auditoria de cobertura (2026-07-23): fechamento dos clusters restantes ----
    // redundância cultural (o genérico É o específico no Brasil)
    "suco de limão-tahiti": "suco de limão",
    "cominho em pó": "cominho",
    "orégano seco": "orégano",
    "acém bovino": "acém",
    "carne suína": "carne de porco",
    "molho shoyu": "shoyu",
    "pão árabe": "pão pita",
    "grãos de cominho": "sementes de cominho",
    "vinho de arroz shaoxing": "vinho shaoxing",
    "creme de confeiteiro": "crème pâtissière",
    // ervas: "fresco" redundante (só existe fresca na prateleira; em pó/seca são núcleos próprios)
    "salsinha fresca": "salsinha",
    "coentro fresco": "coentro",
    "endro fresco": "endro",
    "hortelã fresca": "hortelã",
    "folhas de hortelã": "hortelã",
    "sálvia fresca": "sálvia",
    "estragão fresco": "estragão",
    "manjericão fresco": "manjericão",
    "alecrim fresco": "alecrim",
    "espinafre fresco": "espinafre",
    "folhas de espinafre": "espinafre",
    "gengibre fresco": "gengibre",
    "ervilha fresca": "ervilha",
    "foie gras fresco": "foie gras",
    "maço de salsinha fresca": "maço de salsinha",
    "maço de endro fresco": "maço de endro",
    // ordenadas → rótulo específico
    "vinho branco": "vinho branco seco",
    "páprica": "páprica doce",
    "pato": "pato inteiro",
    "canela": "canela em pó",
    "lombo": "lombo de porco",
    // paralelas / estado de uso / formato da mesma peça → genérico
    "vinho tinto seco": "vinho tinto",
    "vinho tinto encorpado": "vinho tinto",
    "fundo escuro": "fundo escuro de carne",
    "fundo de carne": "fundo escuro de carne",
    "fundo escuro de carne adicional": "fundo escuro de carne",
    "caldo claro": "fundo claro",
    "fundo de galinha para o cozimento": "fundo claro",
    "frango com osso e pele": "frango com osso",
    "filé de peixe branco": "peixe branco",
    "lombo de porco assado": "lombo de porco",
    "lombo de porco inteiro": "lombo de porco",
    "pernil de porco com pele": "pernil de porco",
    "pernil de porco com pele e osso": "pernil de porco",
    "barriga de porco inteira": "barriga de porco",
    // "batata frita" (Gyros) e "tortillas fritas" (Pozole) NÃO fundem com o cru: o raw das
    // duas receitas confirma que são acompanhamento pronto na montagem/serviço — nenhum passo
    // frita; batata frita congelada e tostadas são produtos compráveis por si.
    "pão amanhecido": "pão",
    "bacon em pedaço": "bacon",
    "couve refogada": "couve",
    "kimchi fermentado": "kimchi",
    "alcaparras extras": "alcaparras",
    "azeitonas pretas sem caroço": "azeitonas pretas",
    "bacalhau dessalgado": "bacalhau",
    "ragù à bolonhesa pronto": "ragù à bolonhesa",
    "torradas finas": "torradas",
    "fatias extras de toucinho": "toucinho",
    "sobras de carne assada": "sobras de assado",
    "espetos": "espetos de bambu",
    "alface para forrar o prato": "alface",
    "folhas de alface": "alface",
    "folhas de gelatina": "gelatina em folha",
    "folhas de ervas frescas": "ervas frescas",
    "ervas": "ervas frescas",
    "frutas": "frutas frescas",
    "frutas para acompanhar": "frutas frescas",
    "frutas frescas variadas": "frutas frescas",
    "frutas vermelhas variadas": "frutas vermelhas",
    "pepinos": "pepino",
    "cogumelo paris": "cogumelos paris",
    "vegetal": "vegetal de sua escolha",
    "vegetal escolhido": "vegetal de sua escolha",
    "vegetal à sua escolha": "vegetal de sua escolha",
    "vegetal principal": "vegetal de sua escolha",
    // identidade protegida do strip da camada 3 ("firme" aqui é produto, não descritor)
    "tofu firme": "tofu firme",

    // colaterais da varredura da Fase 3B (2026-07-23): grafia/sinônimo do mesmo produto
    "pimenta-caiena": "pimenta caiena",
    "flocos de pimenta": "pimenta em flocos",
    "açafrão-da-terra": "cúrcuma",
    "parmesão": "queijo parmesão",
    "salsa": "salsinha",
    "aipo": "salsão",
    "negi": "cebolinha grossa",
  };

  // ---- Formas plurais de EXIBIÇÃO (visão Geral, grupos de contagem sem unidade) ----
  // Curado, não algorítmico — português tem irregularidade demais (-ão→-ões/-ães, -l→-is,
  // -m→-ns) pra confiar em regra genérica. Chave = núcleo canônico (singular); valor = forma
  // exibida quando a quantidade final somada é > 1 (ou faixa com limite superior > 1). Núcleo
  // fora deste mapa não flexiona (massa/invariável: "sal", "suco de limão", "repolho").
  // Itens COM unidade nunca passam por aqui — quem flexiona é a unidade, no UNIT_DISPLAY de
  // js/app.js ("4 dentes de alho", "2 folhas de louro").
  const PLURALS = {
    "cebola": "cebolas",
    "cebola roxa": "cebolas roxas",
    "cebolinha pérola": "cebolinhas pérola",
    "ovo": "ovos",
    "gema": "gemas",
    "clara": "claras",
    "tomate": "tomates",
    "tomate cereja": "tomates cereja",
    "batata": "batatas",
    "cenoura": "cenouras",
    "limão": "limões",
    "limão-siciliano": "limões-sicilianos",
    "pão": "pães",
    "pão pita": "pães pita",
    "pão tipo hot dog": "pães tipo hot dog",
    "camarão": "camarões",
    "cravo": "cravos",
    "maçã": "maçãs",
    "mexilhão": "mexilhões",
    "berinjela": "berinjelas",
    "berinjela tailandesa": "berinjelas tailandesas",
    "abacate": "abacates",
    "nabo": "nabos",
    "lula": "lulas",
    "lagosta": "lagostas",
    "rabanete": "rabanetes",
    "beterraba": "beterrabas",
    "pepino": "pepinos",
    "pepino em conserva": "pepinos em conserva",
    "abobrinha": "abobrinhas",
    "amêndoa": "amêndoas",
    "pera asiática": "peras asiáticas",
    "cardamomo": "cardamomos",
    "polvo": "polvos",
    "pato inteiro": "patos inteiros",
    "frango inteiro": "frangos inteiros",
    "frango caipira": "frangos caipiras",
    "galeto": "galetos",
    "pimentão": "pimentões",
    "pimentão vermelho": "pimentões vermelhos",
    "pimentão verde": "pimentões verdes",
    "pimentão amarelo": "pimentões amarelos",
    "pimentão poblano": "pimentões poblano",
    "pimenta dedo-de-moça": "pimentas dedo-de-moça",
    "pimenta malagueta": "pimentas malagueta",
    "pimenta amarela peruana": "pimentas amarelas peruanas",
    "pimenta verde": "pimentas verdes",
    "pimenta seca": "pimentas secas",
    "pimenta guajillo seca": "pimentas guajillo secas",
    "pimenta ancho seca": "pimentas ancho secas",
    "pimenta chipotle seca": "pimentas chipotle secas",
    "pimenta mulato seca": "pimentas mulato secas",
    "pimenta pasilla seca": "pimentas pasilla secas",
    "pimenta tailandesa": "pimentas tailandesas",
    "pimenta jalapeño": "pimentas jalapeño",
    "tortilla de milho": "tortillas de milho",
    "tortilla de trigo": "tortillas de trigo",
    "english muffin": "english muffins",
    "biscoito champanhe": "biscoitos champanhe",
    "filé mignon": "filés mignon",
    "medalhão de filé mignon": "medalhões de filé mignon",
    "filé fino de vitela": "filés finos de vitela",
    "joelho de porco": "joelhos de porco",
    "suprême de frango": "suprêmes de frango",
    "coxa de pato com sobrecoxa": "coxas de pato com sobrecoxa",
    "sobrecoxa de frango com osso": "sobrecoxas de frango com osso",
    "shank de cordeiro": "shanks de cordeiro",
    "bife de lombo": "bifes de lombo",
    "bife de lombo suíno": "bifes de lombo suíno",
    "bife de contrafilé": "bifes de contrafilé",
    "carré de cordeiro": "carrés de cordeiro",
    "peito de pato": "peitos de pato",
    "orelha de porco": "orelhas de porco",
    "pé de porco": "pés de porco",
    "vieira": "vieiras",
    "escargot em conserva": "escargots em conserva",
    "concha": "conchas",
    "sachê de tinta de lula": "sachês de tinta de lula",
    "cápsula de n2o": "cápsulas de n2o",
    "bola de sorvete de creme": "bolas de sorvete de creme",
    "maço de salsinha": "maços de salsinha",
    "maço de endro": "maços de endro",
    "maço de espinafre japonês": "maços de espinafre japonês",
    "maço de hortelã": "maços de hortelã",
    "maço de folhas de jambu": "maços de folhas de jambu",
    "pequi inteiro": "pequis inteiros",
    "cabeça de alho": "cabeças de alho",
    "pau de canela": "paus de canela",
    "pedaço de gengibre": "pedaços de gengibre",
    "buquê de ervas": "buquês de ervas",
    "dose de café espresso": "doses de café espresso",
    "peça de carne": "peças de carne",
    "bulbo de erva-doce": "bulbos de erva-doce",
    "alho-poró": "alhos-poró",
    "alface romana": "alfaces romanas",
    "cogumelo shiitake": "cogumelos shiitake",
  };

  // Forma plural de exibição do núcleo — null quando não flexiona (massa/invariável).
  function pluralFor(core) {
    return PLURALS[String(core || "").trim().toLowerCase()] || null;
  }

  // ---- Despensa (Fase 2) ----
  // Conjunto ESTRITO, chaveado pelo NÚCLEO canônico: só entra item cuja quantidade típica de
  // receita é irrelevante frente ao pacote doméstico (1 colher de chá de sal não muda a
  // compra — você tem sal em casa). Na visão Geral esses itens saem da soma e vão pra seção
  // "Despensa — confira se já tem", sem número. NÃO ENTRAM (decisão explícita): farinha,
  // açúcar, manteiga, arroz, leite — aparecem em quantidade que muda a compra de verdade.
  // Especialidades também ficam FORA (dendê, azeite leve, óleo de gergelim/chili, vinagres
  // de xerez/balsâmico/arroz etc.): quem compra pro prato precisa ver na lista principal.
  const PANTRY_SET = {
    "sal": 1, "sal grosso": 1, "sal em flocos": 1, "sal não iodado": 1,
    "pimenta-do-reino": 1, "pimenta-do-reino em grãos": 1, "pimenta-do-reino branca": 1,
    "pimenta branca": 1,
    "azeite extra virgem": 1,
    "óleo neutro": 1,
    "vinagre branco": 1,
    "água": 1,
  };

  function isPantry(core) {
    return !!PANTRY_SET[String(core || "").trim().toLowerCase()];
  }

  // ---- Fase 3B: unidade de VENDA pra medidas de colher/xícara ----
  // Princípio: a lista de compras exibe a unidade em que o item é VENDIDO (rótulo da
  // embalagem), não a unidade em que a receita mede. Colher e xícara nunca aparecem em
  // rótulo — sólido vendido por peso converte pra GRAMA (e funde com o grupo de peso do
  // mesmo núcleo); líquido vendido por volume converte pro ml padrão (15/5/240), que já é o
  // comportamento default da família volume — por isso líquidos NÃO entram nesta tabela.
  // Valores em gramas POR UNIDADE: cs = colher-sopa rasa, cc = colher-chá (default cs/3),
  // xic = xícara de 240 ml (só onde o acervo mede em xícara). Fontes: tabela da investigação
  // de 2026-07-23 + tabelas culinárias padrão. "EST:" = estimado sem referência consolidada —
  // dá noção de proporção, mas está marcado pra revisão.
  const SPOON_TO_GRAM = {
    // tabela da investigação (aprovada)
    "açúcar": { cs: 12, cc: 4, xic: 180 },
    "farinha de trigo": { cs: 8, cc: 3, xic: 120 },
    "manteiga sem sal": { cs: 14, cc: 5 },
    "arroz branco": { cs: 12, xic: 200 },
    "farinha de rosca": { cs: 8, cc: 3 },
    "açúcar mascavo": { cs: 12, cc: 4 },
    "passas": { cs: 10 },
    "banha": { cs: 13 },
    "maionese": { cs: 15 },
    "amendoim torrado": { cs: 10 },
    "gochugaru": { cs: 6 }, // EST (aprovada como estimativa na investigação)
    "camarão seco": { cs: 10 }, // EST (aprovada como estimativa na investigação)
    // tabelas culinárias padrão
    "açúcar de confeiteiro": { cs: 8, cc: 3, xic: 120 },
    "mel": { cs: 21, cc: 7 },
    "melaço": { cs: 20, cc: 7 },
    "ghee": { cs: 13, cc: 4 },
    "alcaparras": { cs: 9, cc: 3 },
    "extrato de tomate": { cs: 16, cc: 5 },
    "pasta de tomate": { cs: 16, cc: 5 },
    "purê de tomate concentrado": { cs: 16, cc: 5 },
    "extrato/concentrado de tomate": { cs: 16, cc: 5 },
    "mostarda dijon": { cs: 15, cc: 5 },
    "mostarda em pó": { cs: 7, cc: 2 },
    "mostarda em grãos": { cs: 11, cc: 4 },
    "sementes de mostarda": { cs: 11, cc: 4 },
    "amido de milho": { cs: 8, cc: 3 },
    "amido de arroz": { cs: 8, cc: 3 },
    "canela em pó": { cs: 8, cc: 3 },
    "páprica doce": { cs: 7, cc: 2 },
    "páprica defumada": { cs: 7, cc: 2 },
    "páprica picante": { cs: 7, cc: 2 },
    "páprica doce húngara": { cs: 7, cc: 2 },
    "pimenta caiena": { cs: 5, cc: 2 },
    "cominho": { cs: 6, cc: 2 },
    "sementes de cominho": { cs: 6, cc: 2 },
    "coentro em pó": { cs: 5, cc: 2 },
    "grãos de coentro": { cs: 5, cc: 2 },
    "cúrcuma": { cs: 9, cc: 3 },
    "gengibre em pó": { cs: 5, cc: 2 },
    "alho em pó": { cs: 9, cc: 3 },
    "cebola em pó": { cs: 7, cc: 2 },
    "garam masala": { cs: 6, cc: 2 },
    "curry em pó": { cs: 6, cc: 2 },
    "cinco-especiarias chinesas": { cs: 6, cc: 2 },
    "pimenta-da-jamaica": { cs: 6, cc: 2 },
    "orégano": { cs: 3, cc: 1 },
    "fermento em pó": { cs: 14, cc: 5 },
    "sementes de endro": { cs: 6, cc: 2 },
    "sementes de erva-doce": { cs: 6, cc: 2 },
    "erva-doce": { cs: 6, cc: 2 },
    "arroz japonês": { xic: 200 },
    "arroz basmati": { xic: 200 },
    // estimados — SEM tabela consolidada, revisar (noção de proporção > nenhum número)
    "açúcar de palma": { cs: 12, cc: 4 }, // EST
    "farinha de mandioca": { cs: 10, cc: 3 }, // EST
    "gochujang": { cs: 20, cc: 7 }, // EST
    "pasta de ají amarillo": { cs: 15, cc: 5 }, // EST
    "pasta de ají panca": { cs: 15, cc: 5 }, // EST
    "pasta de curry verde": { cs: 15, cc: 5 }, // EST
    "pasta de curry vermelho": { cs: 15, cc: 5 }, // EST
    "pasta de curry massaman": { cs: 15, cc: 5 }, // EST
    "pasta de pimenta tailandesa": { cs: 18, cc: 6 }, // EST
    "pasta de feijão fermentado picante": { cs: 18, cc: 6 }, // EST
    "molho de feijão preto fermentado": { cs: 18, cc: 6 }, // EST (pasta de grãos, pote em g)
    "pasta de gengibre e alho": { cs: 15, cc: 5 }, // EST
    "tamarindo": { cs: 15, cc: 5 }, // EST
    "pasta de tamarindo": { cs: 16, cc: 5 }, // EST
    "pimenta síria": { cs: 8, cc: 3 }, // EST
    "pimenta calabresa": { cs: 5, cc: 2 }, // EST
    "pimenta em flocos": { cs: 5, cc: 2 }, // EST
    "zimbro": { cs: 6, cc: 2 }, // EST
    "grãos de pimenta de sichuan": { cs: 6, cc: 2 }, // EST
    "goma xantana": { cs: 9, cc: 3 }, // EST
    "café solúvel": { cs: 2, cc: 1 }, // EST
  };

  // Ervas frescas & afins medidas em colher: a unidade de VENDA é o maço/a fruta, e nem
  // colher nem grama são comparáveis com isso — decisão de 2026-07-23: a colherada vira
  // ocorrência SEM quantidade ("usado em N receitas", mesmo caminho do "a gosto"), na lista
  // principal (é compra de verdade, só sem quantidade útil). Unidades de contagem desses
  // núcleos (talo, ramo, folha) seguem normais.
  const SPOON_NO_QUANTITY = {
    "salsinha": 1, "cebolinha": 1, "salsinha e cebolinha": 1, "ervas frescas": 1,
    "endro": 1, "hortelã": 1, "alecrim": 1, "estragão": 1, "raspas de limão": 1,
  };

  // Gramas de 1 unidade de medida (colher-sopa/colher-cha/xicara) do núcleo, ou null se o
  // núcleo não é sólido tabelado (líquido → ml padrão; pendente → fallback de colher).
  function spoonToGram(core, unit) {
    const t = SPOON_TO_GRAM[String(core || "").trim().toLowerCase()];
    if (!t) return null;
    if (unit === "colher-sopa") return t.cs || null;
    if (unit === "colher-cha") return t.cc || (t.cs ? Math.round(t.cs / 3) : null);
    if (unit === "xicara") return t.xic || (t.cs ? t.cs * 16 : null);
    return null;
  }

  function isSpoonNoQuantity(core) {
    return !!SPOON_NO_QUANTITY[String(core || "").trim().toLowerCase()];
  }

  // ---- Itens vendidos em EMBALAGEM de tamanho padrão universal ----
  // Peso somado vira contagem de embalagens ("2 latas de 400 g de tomate pelado"), sempre
  // arredondando pra CIMA (meia lata não se compra). Só entra aqui tamanho que não varia por
  // marca: tomate pelado é lata de 400 g em qualquer marca. Ficaram FORA por variação real
  // (decisão 2026-07-23, seguem em g/ml): leite de coco (200/400/500 ml), creme de leite
  // (caixinha 200 g vs lata 300 g), azeitonas e alcaparras (vidros de vários tamanhos).
  // Leite condensado não existe no acervo hoje.
  const PACKAGE_SIZE = {
    "tomate pelado": { grams: 400, label: "lata", labelPlural: "latas" },
  };

  function packageFor(core) {
    return PACKAGE_SIZE[String(core || "").trim().toLowerCase()] || null;
  }

  // Pipeline de 3 camadas. Retorna sempre lowercase — é chave de agrupamento e de
  // boughtKeys; quem exibe capitaliza (mesma convenção do formatStructuredItem).
  function purchaseCore(itemText) {
    // Camada 1 — mecânica: lowercase + remove segmentos entre parênteses (no acervo,
    // parêntese é sempre nota de uso ou esclarecimento, nunca identidade sozinha).
    let s = String(itemText || "").trim().toLowerCase();
    s = s.replace(/\s*\([^)]*\)/g, " ").replace(/\s+/g, " ").replace(/[,;\s]+$/, "").trim();
    if (!s) return "";

    // Camada 2 — mapa curado no texto inteiro.
    if (CANONICAL[s]) return CANONICAL[s];

    // Camada 3 — remove modificadores de tamanho/temperatura/estado e reconsulta o mapa.
    let t = s;
    STRIP_PHRASES.forEach(function (p) {
      t = t.split(p).join(" ");
    });
    t = t
      .split(/\s+/)
      .filter(function (w) {
        return w && !STRIP_WORDS[w];
      })
      .join(" ");
    const words = t.split(" ");
    while (words.length > 1 && DANGLING[words[words.length - 1]]) words.pop();
    while (words.length > 1 && DANGLING[words[0]]) words.shift();
    t = words.join(" ").trim();
    if (!t) return s;
    if (CANONICAL[t]) return CANONICAL[t];
    return t;
  }

  return { KNOWN_UNITS: KNOWN_UNITS, CANONICAL: CANONICAL, STRIP_WORDS: STRIP_WORDS, STRIP_PHRASES: STRIP_PHRASES, PLURALS: PLURALS, PANTRY_SET: PANTRY_SET, SPOON_TO_GRAM: SPOON_TO_GRAM, SPOON_NO_QUANTITY: SPOON_NO_QUANTITY, PACKAGE_SIZE: PACKAGE_SIZE, purchaseCore: purchaseCore, pluralFor: pluralFor, isPantry: isPantry, spoonToGram: spoonToGram, isSpoonNoQuantity: isSpoonNoQuantity, packageFor: packageFor };
});
