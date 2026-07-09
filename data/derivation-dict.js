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
  {id:"cebola",ns:"seasoning",tier:"search",syn:["cebola","cebolas"]},
  {id:"cebolinha",ns:"seasoning",tier:"search",syn:["cebolinha"]},
  {id:"salsinha",ns:"seasoning",tier:"search",syn:["salsinha","salsa"]},
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
  {id:"pimenta-chili",ns:"seasoning",tier:"search",syn:["pimenta calabresa","pimenta dedo de moca","jalapeno","malagueta","guajillo","ancho","chipotle","pimenta vermelha","pimenta fresca","dedo de moca"]},
  {id:"cravo",ns:"seasoning",tier:"search",syn:["cravo"]},
  {id:"oregano",ns:"seasoning",tier:"search",syn:["oregano"]},
  {id:"curry",ns:"seasoning",tier:"search",syn:["curry","caril"]},
  {id:"alecrim",ns:"seasoning",tier:"search",syn:["alecrim"]},
  {id:"manjericao",ns:"seasoning",tier:"search",syn:["manjericao"]},
  {id:"hortela",ns:"seasoning",tier:"search",syn:["hortela"]},
  {id:"acafrao",ns:"seasoning",tier:"search",syn:["acafrao"]},
  {id:"cardamomo",ns:"seasoning",tier:"search",syn:["cardamomo"]},
  // ---- BORDERLINE (search, discrimináveis mas ruído no filtro) ----
  {id:"leite",ns:"ingredient",tier:"search",syn:["leite"]},
  {id:"vinagre",ns:"ingredient",tier:"search",syn:["vinagre"]},
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

  return {DICT,BLOCK,TECH,norm};
});
