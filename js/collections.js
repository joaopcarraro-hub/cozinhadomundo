// collections.js — coleções são apenas filtros de tags sobre a lista global de receitas.
// Cada coleção antiga (uma por categoria) tem paridade com o app atual (mesmo id/label/icon),
// mas agora também pode receber receitas de outras categorias que compartilhem a tag.
// Grupos macro (usados pela home e pelas páginas de grupo #/grupo/:id):
// Fundamentos, Proteínas, Cozinhas do Mundo, Por tempo, Por dificuldade.
//
// collectionType descreve como a coleção deve se comportar na UI (ver js/tagmodel.js getGuidedRelatedTags):
// - country: sem abas Foco/Também leva, refinamento guiado em camadas (1: tipo de prato/proteína/formato, 2: tempo/dificuldade/técnica)
// - protein: usa abas Foco da receita / Também leva / Todas
// - dishType: coleções de tipo de prato (Fundamentos) — 1ª camada de refino: país e proteína
// - technique: coleções que misturam técnica/base/componente/molho (Contemporâneos)
// - diet: coleções de dieta (não é proteína)
// - time / difficulty: coleções cruzadas de tempo/dificuldade
(function () {
  window.COLLECTIONS = [
    // ---------- Fundamentos (paridade com as categorias atuais) ----------
    { id: "molhos", group: "Fundamentos", collectionType: "dishType", label: "Molhos Clássicos", icon: "🥣", desc: "A base de praticamente toda cozinha ocidental.", primaryFilterTags: ["dish_type:molho"] },
    { id: "sopas", group: "Fundamentos", collectionType: "dishType", label: "Sopas", icon: "🍲", primaryFilterTags: ["dish_type:sopa"] },
    // Entradas Frias + Entradas Quentes fundidas em "Entradas" — mesma lógica: dish_type:entrada-fria
    // e dish_type:entrada-quente continuam distintos nos dados (data/entradas-frias.js e
    // data/entradas-quentes.js), só a coleção exibida é uma.
    { id: "entradas", group: "Fundamentos", collectionType: "dishType", label: "Entradas", icon: "🥗", primaryFilterTags: ["dish_type:entrada-fria", "dish_type:entrada-quente"] },
    { id: "massas", group: "Fundamentos", collectionType: "dishType", label: "Massas", icon: "🍝", primaryFilterTags: ["dish_type:massa"] },
    // Risotos + Arrozes fundidos em "Risotos/Arroz" — junção de EXIBIÇÃO só (dish_type:risoto e
    // dish_type:arroz continuam distintos nos dados; primaryFilterTags em OR é o que une as duas
    // fontes físicas, data/risotos.js e data/arrozes.js, sem mover nenhuma receita de arquivo).
    { id: "risotos-arroz", group: "Fundamentos", collectionType: "dishType", label: "Risotos/Arroz", icon: "🍚", primaryFilterTags: ["dish_type:risoto", "dish_type:arroz"] },
    // Ovos Básicos + Preparações Clássicas com Ovos deixam de existir como coleção própria em
    // Fundamentos — as receitas (catIds ovos-basicos/ovos-classicos) já satisfazem protein:ovo
    // (confirmado 25/25), então já aparecem em "Ovos" (col-ovo, Proteínas) sem precisar de
    // nenhuma tag nova. Ver getCatIdToGroup() em app.js pro fallback de escopo de busca do hub.
    { id: "padaria", group: "Fundamentos", collectionType: "dishType", label: "Padaria", icon: "🍞", primaryFilterTags: ["dish_type:pao"] },
    { id: "sobremesas-classicas", group: "Fundamentos", collectionType: "dishType", label: "Sobremesas Clássicas", icon: "🍰", primaryFilterTags: ["dish_type:sobremesa"] },
    // Clássicos Contemporâneos + Técnicas Contemporâneas Avançadas fundidos em "Técnicas" — mesma
    // lógica: dish_type:contemporaneo e dish_type:tecnica-avancada continuam distintos nos dados
    // (data/contemporaneos.js e data/tecnicas-contemporaneas-2.js), só a coleção exibida é uma.
    { id: "tecnicas", group: "Fundamentos", collectionType: "technique", label: "Técnicas", icon: "🧪", primaryFilterTags: ["dish_type:contemporaneo", "dish_type:tecnica-avancada"] },

    // ---------- Proteínas (grupo macro único — funde a antiga "Por proteína") ----------
    { id: "aves", group: "Proteínas", collectionType: "protein", label: "Aves", icon: "🍗", desc: "Receitas com frango ou outras aves como foco.", primaryFilterTags: ["protein:ave", "protein:frango"], relatedFilterTags: ["contains:ave", "contains:frango"], defaultView: "primary" },
    { id: "carnes-bovinas", group: "Proteínas", collectionType: "protein", label: "Carnes Bovinas", icon: "🥩", desc: "Receitas com carne bovina como foco.", primaryFilterTags: ["protein:boi"], relatedFilterTags: ["contains:boi"], defaultView: "primary" },
    { id: "suinos", group: "Proteínas", collectionType: "protein", label: "Suínos", icon: "🐖", desc: "Receitas com carne suína, embutidos ou derivados.", primaryFilterTags: ["protein:suino"], relatedFilterTags: ["contains:suino"], defaultView: "primary" },
    { id: "peixes", group: "Proteínas", collectionType: "protein", label: "Peixes", icon: "🐟", desc: "Receitas com peixe como foco.", primaryFilterTags: ["protein:peixe"], relatedFilterTags: ["contains:peixe"], defaultView: "primary" },
    { id: "frutos-do-mar", group: "Proteínas", collectionType: "protein", label: "Frutos do Mar", icon: "🦐", desc: "Receitas com frutos do mar como foco.", primaryFilterTags: ["protein:frutos-do-mar"], relatedFilterTags: ["contains:frutos-do-mar"], defaultView: "primary" },
    { id: "col-ovo", group: "Proteínas", collectionType: "protein", label: "Ovos", icon: "🥚", desc: "Receitas com ovo como foco.", primaryFilterTags: ["protein:ovo"], relatedFilterTags: ["contains:ovo", "ingredient:ovo"], defaultView: "primary" },
    { id: "cordeiro", group: "Proteínas", collectionType: "protein", label: "Cordeiro", icon: "🐑", desc: "Receitas com cordeiro como foco.", primaryFilterTags: ["protein:cordeiro"], relatedFilterTags: ["contains:cordeiro"], defaultView: "primary" },
    { id: "col-vegetariana", group: "Proteínas", collectionType: "diet", label: "Vegetarianas", icon: "🥬", desc: "Receitas sem carne, peixe ou frutos do mar (dieta, não proteína).", primaryFilterTags: ["diet:vegetariana"] },

    // ---------- Cozinhas do Mundo (Brasil incluído aqui, não é mais bloco separado) ----------
    { id: "brasil", group: "Cozinhas do Mundo", collectionType: "country", label: "Brasil", icon: "🇧🇷", primaryFilterTags: ["country:brasil"] },
    { id: "franca", group: "Cozinhas do Mundo", collectionType: "country", label: "França", icon: "🇫🇷", primaryFilterTags: ["country:franca"] },
    { id: "italia", group: "Cozinhas do Mundo", collectionType: "country", label: "Itália", icon: "🇮🇹", primaryFilterTags: ["country:italia"] },
    { id: "espanha", group: "Cozinhas do Mundo", collectionType: "country", label: "Espanha", icon: "🇪🇸", primaryFilterTags: ["country:espanha"] },
    { id: "portugal", group: "Cozinhas do Mundo", collectionType: "country", label: "Portugal", icon: "🇵🇹", primaryFilterTags: ["country:portugal"] },
    { id: "japao", group: "Cozinhas do Mundo", collectionType: "country", label: "Japão", icon: "🇯🇵", primaryFilterTags: ["country:japao"] },
    { id: "china", group: "Cozinhas do Mundo", collectionType: "country", label: "China", icon: "🇨🇳", primaryFilterTags: ["country:china"] },
    { id: "coreia", group: "Cozinhas do Mundo", collectionType: "country", label: "Coreia", icon: "🇰🇷", primaryFilterTags: ["country:coreia"] },
    { id: "tailandia", group: "Cozinhas do Mundo", collectionType: "country", label: "Tailândia", icon: "🇹🇭", primaryFilterTags: ["country:tailandia"] },
    { id: "india", group: "Cozinhas do Mundo", collectionType: "country", label: "Índia", icon: "🇮🇳", primaryFilterTags: ["country:india"] },
    { id: "mexico", group: "Cozinhas do Mundo", collectionType: "country", label: "México", icon: "🇲🇽", primaryFilterTags: ["country:mexico"] },
    { id: "peru", group: "Cozinhas do Mundo", collectionType: "country", label: "Peru", icon: "🇵🇪", primaryFilterTags: ["country:peru"] },
    { id: "alemanha", group: "Cozinhas do Mundo", collectionType: "country", label: "Alemanha", icon: "🇩🇪", primaryFilterTags: ["country:alemanha"] },
    { id: "austria", group: "Cozinhas do Mundo", collectionType: "country", label: "Áustria", icon: "🇦🇹", primaryFilterTags: ["country:austria"] },
    { id: "hungria", group: "Cozinhas do Mundo", collectionType: "country", label: "Hungria", icon: "🇭🇺", primaryFilterTags: ["country:hungria"] },
    { id: "grecia", group: "Cozinhas do Mundo", collectionType: "country", label: "Grécia", icon: "🇬🇷", primaryFilterTags: ["country:grecia"] },
    { id: "marrocos", group: "Cozinhas do Mundo", collectionType: "country", label: "Marrocos", icon: "🇲🇦", primaryFilterTags: ["country:marrocos"] },
    { id: "libano", group: "Cozinhas do Mundo", collectionType: "country", label: "Líbano", icon: "🇱🇧", primaryFilterTags: ["country:libano"] },
    { id: "eua", group: "Cozinhas do Mundo", collectionType: "country", label: "EUA", icon: "🇺🇸", primaryFilterTags: ["country:eua"] },
    { id: "dinamarca", group: "Cozinhas do Mundo", collectionType: "country", label: "Dinamarca", icon: "🇩🇰", primaryFilterTags: ["country:dinamarca"] },

    // ---------- Por tempo ----------
    { id: "col-rapidas", group: "Por tempo", collectionType: "time", label: "Rápidas", icon: "⏱️", desc: "Receitas prontas em até 30 minutos.", primaryFilterTags: ["time:ate-30-min"] },
    { id: "col-ate-1h", group: "Por tempo", collectionType: "time", label: "Até 1 Hora", icon: "🕐", desc: "Receitas prontas em até 1 hora.", primaryFilterTags: ["time:ate-1h"] },
    { id: "col-mais-de-1h", group: "Por tempo", collectionType: "time", label: "Mais de 1 Hora", icon: "🕑", desc: "Receitas que passam de 1 hora de preparo.", primaryFilterTags: ["time:mais-de-1h"] },
    { id: "col-preparo-longo", group: "Por tempo", collectionType: "time", label: "Preparo Longo", icon: "⏳", desc: "Receitas que exigem várias horas (ou dias) de preparo.", primaryFilterTags: ["time:preparo-longo"] },

    // ---------- Por dificuldade ----------
    { id: "col-faceis", group: "Por dificuldade", collectionType: "difficulty", label: "Fáceis", icon: "👍", desc: "Receitas simples, boas para começar.", primaryFilterTags: ["difficulty:facil"] },
    { id: "col-intermediarias", group: "Por dificuldade", collectionType: "difficulty", label: "Intermediárias", icon: "🧑‍🍳", desc: "Receitas com mais etapas ou técnicas.", primaryFilterTags: ["difficulty:media"] },
    { id: "col-avancadas", group: "Por dificuldade", collectionType: "difficulty", label: "Avançadas", icon: "🔥", desc: "Receitas técnicas, para quem já tem experiência.", primaryFilterTags: ["difficulty:dificil"] },
  ];
})();
