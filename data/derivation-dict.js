// ============ DICIONÁRIO CANÔNICO v1 ============
// Fonte única de verdade pro motor de derivação de tags — usado tanto em produção
// (js/tagmodel.js, via window.DerivationDict) quanto no dry-run de auditoria
// (scripts/derive-tags-dry-run.js, via require). Não duplique este conteúdo em nenhum lugar.
// tier: filter | search | block   ns: ingredient | seasoning
// ff: falsos-amigos (se o texto contém, rejeita)  water: doce|salgada|frutos-do-mar
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.DerivationDict = factory();
  }
})(typeof window !== "undefined" ? window : this, function () {
  const norm = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/-/g,' ');

  const DICT = [
  // ---- CONTEÚDO (filter) ----
  {id:"ovo",ns:"ingredient",tier:"filter",syn:["ovo","ovos","gema","gemas","clara","claras"]},
  {id:"tomate",ns:"ingredient",tier:"filter",syn:["tomate","tomates","tomate pelado","extrato de tomate"]},
  {id:"queijo",ns:"ingredient",tier:"filter",syn:["queijo","queijos","parmesao","mussarela","gruyere","gorgonzola","ricota","feta"]},
  {id:"arroz",ns:"ingredient",tier:"filter",syn:["arroz"]},
  {id:"batata",ns:"ingredient",tier:"filter",syn:["batata","batatas"]},
  {id:"mandioca",ns:"ingredient",tier:"filter",syn:["mandioca","aipim","macaxeira"]},
  {id:"milho",ns:"ingredient",tier:"filter",syn:["milho","fuba"]},
  {id:"feijao",ns:"ingredient",tier:"filter",syn:["feijao","feijoes"]},
  {id:"berinjela",ns:"ingredient",tier:"filter",syn:["berinjela"]},
  {id:"cogumelo",ns:"ingredient",tier:"filter",syn:["cogumelo","cogumelos","champignon","shiitake","shimeji","funghi"]},
  {id:"abobora",ns:"ingredient",tier:"filter",syn:["abobora","moranga"]},
  {id:"abobrinha",ns:"ingredient",tier:"filter",syn:["abobrinha"]},
  {id:"pimentao",ns:"ingredient",tier:"filter",syn:["pimentao"]},
  {id:"azeitona",ns:"ingredient",tier:"filter",syn:["azeitona","azeitonas"]},
  {id:"limao",ns:"ingredient",tier:"filter",syn:["limao","lima"]},
  {id:"coco",ns:"ingredient",tier:"filter",syn:["coco","leite de coco"]},
  {id:"castanha",ns:"ingredient",tier:"filter",syn:["castanha","nozes","amendoa","amendoas","avela","pistache"]},
  {id:"chocolate",ns:"ingredient",tier:"filter",syn:["chocolate","cacau"]},
  {id:"cafe",ns:"ingredient",tier:"filter",syn:["cafe"]},
  {id:"vinho",ns:"ingredient",tier:"filter",syn:["vinho"]},
  {id:"cerveja",ns:"ingredient",tier:"filter",syn:["cerveja"]},
  {id:"mel",ns:"ingredient",tier:"filter",syn:["mel"]},
  {id:"iogurte",ns:"ingredient",tier:"filter",syn:["iogurte","iogurtes"]},
  {id:"espinafre",ns:"ingredient",tier:"filter",syn:["espinafre"]},
  {id:"ervilha",ns:"ingredient",tier:"filter",syn:["ervilha","ervilhas"]},
  {id:"lentilha",ns:"ingredient",tier:"filter",syn:["lentilha","lentilhas"]},
  {id:"grao-de-bico",ns:"ingredient",tier:"filter",syn:["grao de bico"]},
  {id:"amendoim",ns:"ingredient",tier:"filter",syn:["amendoim"]},
  {id:"molho-de-soja",ns:"ingredient",tier:"filter",syn:["molho de soja","shoyu"]},
  {id:"brocolis",ns:"ingredient",tier:"filter",syn:["brocolis"]},
  {id:"cenoura",ns:"ingredient",tier:"filter",syn:["cenoura","cenouras"]},
  {id:"pao",ns:"ingredient",tier:"filter",syn:["pao","paes"]},
  {id:"pepino",ns:"ingredient",tier:"filter",syn:["pepino"]},
  {id:"repolho",ns:"ingredient",tier:"filter",syn:["repolho"]},
  {id:"damasco",ns:"ingredient",tier:"filter",syn:["damasco","damascos"]},
  // ---- SUBTIPOS/PRODUCE ADICIONAIS (filter — investigação taxonomia 2026-07-24) ----
  // macarrao: subtipo de dish_type:massa, não sinônimo — Lasanha/Ravioli/Tortellini/Agnolotti/
  // Gnocchi são massa mas não são macarrão; ganha tag própria em vez de inflar o sinônimo de
  // dish_type:massa (que foi removido em js/tags.js na mesma leva).
  {id:"macarrao",ns:"ingredient",tier:"filter",syn:["macarrao","espaguete","spaghetti","penne","fusilli","talharim","tagliatelle","fettuccine","linguine","linguini","pappardelle","rigatoni","bucatini","orecchiette","farfalle","parafuso","noodle","noodles","lamen","ramen","udon","soba","yakisoba","bifum","dangmyeon","fideus","fideua","cabelo de anjo","capellini","spatzle","orzo","risone","conchiglie","tortiglioni","ziti","chow mein"]},
  {id:"laranja",ns:"ingredient",tier:"filter",syn:["laranja","laranjas"]},
  {id:"maca",ns:"ingredient",tier:"filter",syn:["maca","macas"]},
  {id:"rabanete",ns:"ingredient",tier:"filter",syn:["rabanete","rabanetes"]},
  // ---- ESPÉCIES peixe/fruto (filter + water) ----
  {id:"camarao",ns:"ingredient",tier:"filter",syn:["camarao","camaroes"],water:"frutos-do-mar"},
  {id:"salmao",ns:"ingredient",tier:"filter",syn:["salmao"],water:"salgada"},
  {id:"lula",ns:"ingredient",tier:"filter",syn:["lula","lulas"],water:"frutos-do-mar"},
  {id:"robalo",ns:"ingredient",tier:"filter",syn:["robalo"],water:"salgada"},
  {id:"atum",ns:"ingredient",tier:"filter",syn:["atum"],water:"salgada"},
  {id:"linguado",ns:"ingredient",tier:"filter",syn:["linguado"],water:"salgada"},
  {id:"dourado",ns:"ingredient",tier:"filter",syn:["dourado"],water:"doce",ff:["deixe dourado","ate dourado","bem dourado","fique dourado","dourado dos dois"]},
  {id:"anchova",ns:"ingredient",tier:"filter",syn:["anchova","anchovas","aliche"],water:"salgada"},
  {id:"bacalhau",ns:"ingredient",tier:"filter",syn:["bacalhau"],water:"salgada"},
  {id:"badejo",ns:"ingredient",tier:"filter",syn:["badejo"],water:"salgada"},
  {id:"polvo",ns:"ingredient",tier:"filter",syn:["polvo"],water:"frutos-do-mar"},
  {id:"mexilhao",ns:"ingredient",tier:"filter",syn:["mexilhao","mexilhoes"],water:"frutos-do-mar"},
  {id:"lagosta",ns:"ingredient",tier:"filter",syn:["lagosta"],water:"frutos-do-mar"},
  {id:"tilapia",ns:"ingredient",tier:"filter",syn:["tilapia"],water:"doce"},
  {id:"ostra",ns:"ingredient",tier:"filter",syn:["ostra","ostras"],water:"frutos-do-mar"},
  {id:"caranguejo",ns:"ingredient",tier:"filter",syn:["caranguejo","siri"],water:"frutos-do-mar"},
  // ---- TEMPEROS / AROMÁTICOS (search, invisível) ----
  {id:"alho",ns:"seasoning",tier:"search",syn:["alho"],ff:["alho poro","alho frances"]},
  {id:"alho-poro",ns:"seasoning",tier:"search",syn:["alho poro","alho frances"]},
  {id:"cebola",ns:"seasoning",tier:"search",syn:["cebola","cebolas"]},
  {id:"cebolinha",ns:"seasoning",tier:"search",syn:["cebolinha"]},
  // "cheiro verde" (alho+cebolinha+salsinha picados, nome coletivo BR) fecha um gap real:
  // 8 receitas (Frango com Quiabo, Picadinho, Entrevero, Rabada, Vaca Atolada, Escondidinho,
  // Galinhada, Arroz Carreteiro) citam só "cheiro verde" e nunca ganhavam seasoning:salsinha.
  {id:"salsinha",ns:"seasoning",tier:"search",syn:["salsinha","salsa","cheiro verde"]},
  {id:"louro",ns:"seasoning",tier:"search",syn:["louro","folha de louro"]},
  {id:"coentro",ns:"seasoning",tier:"search",syn:["coentro"]},
  {id:"gengibre",ns:"seasoning",tier:"search",syn:["gengibre"]},
  {id:"paprica",ns:"seasoning",tier:"search",syn:["paprica"]},
  {id:"tomilho",ns:"seasoning",tier:"search",syn:["tomilho"]},
  {id:"noz-moscada",ns:"seasoning",tier:"search",syn:["noz moscada"]},
  {id:"cominho",ns:"seasoning",tier:"search",syn:["cominho"]},
  {id:"echalote",ns:"seasoning",tier:"search",syn:["echalote","echalota","chalota"]},
  {id:"gergelim",ns:"seasoning",tier:"search",syn:["gergelim"]},
  {id:"canela",ns:"seasoning",tier:"search",syn:["canela"]},
  {id:"mostarda",ns:"seasoning",tier:"search",syn:["mostarda","dijon"]},
  {id:"endro",ns:"seasoning",tier:"search",syn:["endro","dill"]},
  // caiena/gochugaru/aji amarillo fecham gap real: 17 receitas citavam essas pimentas e
  // nunca ganhavam a tag (achado da investigação de taxonomia 2026-07-24).
  {id:"pimenta-chili",ns:"seasoning",tier:"search",syn:["pimenta calabresa","pimenta dedo de moca","jalapeno","malagueta","guajillo","ancho","chipotle","pimenta vermelha","pimenta fresca","dedo de moca","caiena","gochugaru","pimenta coreana","aji amarillo","amarela peruana"]},
  {id:"cravo",ns:"seasoning",tier:"search",syn:["cravo"]},
  {id:"oregano",ns:"seasoning",tier:"search",syn:["oregano"]},
  {id:"curry",ns:"seasoning",tier:"search",syn:["curry","caril"]},
  {id:"alecrim",ns:"seasoning",tier:"search",syn:["alecrim"]},
  {id:"manjericao",ns:"seasoning",tier:"search",syn:["manjericao"]},
  {id:"hortela",ns:"seasoning",tier:"search",syn:["hortela"]},
  {id:"acafrao",ns:"seasoning",tier:"search",syn:["acafrao"],ff:["acafrao da terra"]},
  {id:"cardamomo",ns:"seasoning",tier:"search",syn:["cardamomo"]},
  {id:"salsao",ns:"seasoning",tier:"search",syn:["salsao","aipo"]},
  // ff evita que "açafrão-da-terra" (nome comum de cúrcuma no Brasil, ingrediente diferente
  // de açafrão/saffron de verdade) conte como seasoning:acafrao — falso-amigo real, achado
  // ao criar esta entrada (Galinhada usava exatamente essa frase). "açafrão (ou cúrcuma)"
  // como alternativa genuína (ex: Tajine de Cordeiro com Damasco) continua batendo em AMBAS
  // as tags, corretamente — é um "ou" de ingrediente, não um erro de nome.
  {id:"curcuma",ns:"seasoning",tier:"search",syn:["curcuma","acafrao da terra"]},
  // ---- BORDERLINE (search, discrimináveis mas ruído no filtro) ----
  {id:"leite",ns:"ingredient",tier:"search",syn:["leite"]},
  {id:"vinagre",ns:"ingredient",tier:"search",syn:["vinagre"]},
  // ---- SUBTIPOS COADJUVANTES (search — investigação taxonomia 2026-07-24: sinônimo de
  // protein:/contains:suino migrado pra estas tags dedicadas, ver js/tags.js) ----
  {id:"bacon",ns:"ingredient",tier:"search",syn:["bacon","toucinho","pancetta","guanciale"]},
  {id:"linguica",ns:"ingredient",tier:"search",syn:["linguica","calabresa","chourico","chorizo","salsicha"],ff:["pimenta calabresa"]},
  {id:"presunto",ns:"ingredient",tier:"search",syn:["presunto","jamon","prosciutto"]},
  {id:"pato",ns:"ingredient",tier:"search",syn:["pato","canard","marreco","magret"]},
  {id:"massa-folhada",ns:"ingredient",tier:"search",syn:["massa folhada","massa filo","filo","phyllo"]},
  // ---- PRODUCE ADICIONAL (search, <7 receitas cada — investigação taxonomia 2026-07-24) ----
  {id:"beterraba",ns:"ingredient",tier:"search",syn:["beterraba","beterrabas"]},
  {id:"alface",ns:"ingredient",tier:"search",syn:["alface","alfaces"]},
  {id:"vagem",ns:"ingredient",tier:"search",syn:["vagem","vagens"]},
  {id:"couve",ns:"ingredient",tier:"search",syn:["couve","couves"],ff:["couve flor"]},
  {id:"morango",ns:"ingredient",tier:"search",syn:["morango","morangos"]},
  {id:"abacate",ns:"ingredient",tier:"search",syn:["abacate","abacates"]},
  {id:"alcaparra",ns:"ingredient",tier:"search",syn:["alcaparra","alcaparras"]},
  ];
  // BLOCKLIST (nem tag nem busca)
  const BLOCK = ["sal","agua","oleo","azeite","oliva","manteiga","farinha","trigo","acucar","fermento","caldo","creme","pimenta do reino","pimenta preta","pimenta branca"];

  // TÉCNICAS (reusa technique:) — deriva de steps. classe: character|duration
  const TECH = [
    {id:"frito",cls:"character",syn:["fritar","frite","frito","fritas","imersao","empanad","milanesa","a milanesa"]},
    {id:"grelhado",cls:"character",syn:["grelhar","grelhe","grelhad","na grelha","na brasa","churrasqueira"]},
    {id:"defumado",cls:"character",syn:["defumar","defumad"]},
    {id:"assado",cls:"duration",syn:["assar","asse","assad","ao forno","no forno","leve ao forno"]},
    {id:"cozido",cls:"duration",syn:["cozinhar","cozinhe","cozid","ferver","fervura","fervente"]},
    {id:"braseado",cls:"duration",syn:["brasear","braseie","brasead","refogue e cozinhe"]},
    {id:"refogado",cls:"duration",syn:["refogar","refogue","refogad"]},
    {id:"no-vapor",cls:"duration",syn:["no vapor","a vapor","vaporizar"]},
    {id:"cru",cls:"duration",syn:["cru ","crua","sem cozimento","marinado no limao"]},
  ];

  // EQUIPAMENTO (Fase 3, reusa equipment:) — deriva de steps, não de ingredients. Casamento por
  // palavra inteira, sem substring, mesma disciplina do DICT. Dado multi-valorado (uma receita
  // pode ter vários equipment: simultaneamente); a faceta na UI é seleção única (existência de
  // UM valor no resultado, não exclusividade).
  //
  // equipment:forno sempre deriva de substantivo (forno/refratario/assadeira) OU dos verbos de
  // assar (ROAST_VERBS). equipment:air-fryer deriva do termo direto (air fryer/airfryer) SEMPRE,
  // e também dos MESMOS verbos de assar — mas só quando o yield da receita indica porção pequena
  // (cesta de air fryer doméstica: 2-6L, não cabe prato de grupo). "Porção pequena" exige: (1) o
  // MAIOR número do texto de yield <= AIRFRYER_MAX_YIELD (cobre "4-6 porções" como grande) E (2)
  // pelo menos um sinal positivo de AIRFRYER_YIELD_POSITIVE presente E (3) nenhum sinal negativo
  // de AIRFRYER_YIELD_NEGATIVE presente. O sinal positivo existe porque um número baixo sozinho
  // não basta — "1 pão grande"/"3 baguetes"/"≈2 L" têm número baixo mas descrevem item grande ou
  // unidade de medida, não porção pequena; "grande"/"grandes" no texto sempre bloqueia, mesmo com
  // sinal positivo presente.
  const ROAST_VERBS = ["assar","asse","assado","assada","assados","assadas"];
  const AIRFRYER_MAX_YIELD = 4;
  const AIRFRYER_YIELD_POSITIVE = ["porc","unidade","individual","pequen"];
  const AIRFRYER_YIELD_NEGATIVE = ["grande"];

  const EQUIPMENT = [
    {id:"forno",syn:["forno","refratario","assadeira"].concat(ROAST_VERBS)},
    {id:"air-fryer",syn:["air fryer","airfryer"]},
    {id:"panela-de-pressao",syn:["panela de pressao"]},
    {id:"liquidificador",syn:["liquidificador"]},
    {id:"processador",syn:["processador"]},
    {id:"churrasqueira",syn:["churrasqueira","churrasco"],ff:["sobras de churrasco","sobra de churrasco"]},
    {id:"batedeira",syn:["batedeira"]},
    {id:"sous-vide",syn:["sous vide"]},
    {id:"microondas",syn:["microondas","micro ondas"]},
  ];

  return {DICT,BLOCK,TECH,EQUIPMENT,ROAST_VERBS,AIRFRYER_MAX_YIELD,AIRFRYER_YIELD_POSITIVE,AIRFRYER_YIELD_NEGATIVE,norm};
});
