// collections.js — coleções são apenas filtros de tags sobre a lista global de receitas.
// Cada coleção antiga (uma por categoria) tem paridade com o app atual (mesmo id/label/icon),
// mas agora também pode receber receitas de outras categorias que compartilhem a tag.
// As coleções novas (grupo "Por proteína" e "Por tempo") só existem por causa do sistema de tags.
(function () {
  window.COLLECTIONS = [
    // ---------- Fundamentos (paridade com as categorias atuais) ----------
    { id: "molhos", group: "Fundamentos", title: "Molhos Clássicos", icon: "🥣", desc: "A base de praticamente toda cozinha ocidental.", filterTags: ["dish_type:molho"] },
    { id: "sopas", group: "Fundamentos", title: "Sopas", icon: "🍲", filterTags: ["dish_type:sopa"] },
    { id: "entradas-frias", group: "Fundamentos", title: "Entradas Frias", icon: "🥗", filterTags: ["dish_type:entrada-fria"] },
    { id: "entradas-quentes", group: "Fundamentos", title: "Entradas Quentes", icon: "🧀", filterTags: ["dish_type:entrada-quente"] },
    { id: "massas", group: "Fundamentos", title: "Massas", icon: "🍝", filterTags: ["dish_type:massa"] },
    { id: "risotos", group: "Fundamentos", title: "Risotos", icon: "🍚", filterTags: ["dish_type:risoto"] },
    { id: "ovos-basicos", group: "Fundamentos", title: "Ovos Básicos", icon: "🍳", filterTags: ["dish_type:ovo"] },
    { id: "ovos-classicos", group: "Fundamentos", title: "Preparações Clássicas com Ovos", icon: "🥚", filterTags: ["dish_type:ovo"] },
    { id: "padaria", group: "Fundamentos", title: "Padaria", icon: "🍞", filterTags: ["dish_type:pao"] },
    { id: "sobremesas-classicas", group: "Fundamentos", title: "Sobremesas Clássicas", icon: "🍰", filterTags: ["dish_type:sobremesa"] },
    { id: "contemporaneos", group: "Fundamentos", title: "Clássicos Contemporâneos", icon: "✨", filterTags: ["dish_type:contemporaneo"] },
    { id: "tecnicas-contemporaneas-2", group: "Fundamentos", title: "Técnicas Contemporâneas Avançadas", icon: "🧪", filterTags: ["dish_type:tecnica-avancada"] },

    // ---------- Proteínas (paridade) ----------
    { id: "aves", group: "Proteínas", title: "Aves", icon: "🍗", filterTags: ["protein:ave"] },
    { id: "carnes-bovinas", group: "Proteínas", title: "Carnes Bovinas", icon: "🥩", filterTags: ["protein:boi"] },
    { id: "cordeiro", group: "Proteínas", title: "Cordeiro", icon: "🐑", filterTags: ["protein:cordeiro"] },
    { id: "suinos", group: "Proteínas", title: "Suínos", icon: "🐖", filterTags: ["protein:suino"] },
    { id: "peixes", group: "Proteínas", title: "Peixes", icon: "🐟", filterTags: ["protein:peixe"] },
    { id: "frutos-do-mar", group: "Proteínas", title: "Frutos do Mar", icon: "🦐", filterTags: ["protein:frutos-do-mar"] },
    { id: "arrozes", group: "Proteínas", title: "Arrozes", icon: "🍚", filterTags: ["dish_type:arroz"] },

    // ---------- Brasil (paridade) ----------
    { id: "brasileiros", group: "Brasil", title: "Brasileiros Obrigatórios", icon: "🇧🇷", filterTags: ["country:brasil"] },
    { id: "brasil-regional", group: "Brasil", title: "Brasil por Região", icon: "🗺️", filterTags: ["country:brasil"] },

    // ---------- Cozinhas do Mundo (paridade) ----------
    { id: "franca", group: "Cozinhas do Mundo", title: "França", icon: "🇫🇷", filterTags: ["country:franca"] },
    { id: "italia", group: "Cozinhas do Mundo", title: "Itália", icon: "🇮🇹", filterTags: ["country:italia"] },
    { id: "espanha", group: "Cozinhas do Mundo", title: "Espanha", icon: "🇪🇸", filterTags: ["country:espanha"] },
    { id: "portugal", group: "Cozinhas do Mundo", title: "Portugal", icon: "🇵🇹", filterTags: ["country:portugal"] },
    { id: "japao", group: "Cozinhas do Mundo", title: "Japão", icon: "🇯🇵", filterTags: ["country:japao"] },
    { id: "china", group: "Cozinhas do Mundo", title: "China", icon: "🇨🇳", filterTags: ["country:china"] },
    { id: "coreia", group: "Cozinhas do Mundo", title: "Coreia", icon: "🇰🇷", filterTags: ["country:coreia"] },
    { id: "tailandia", group: "Cozinhas do Mundo", title: "Tailândia", icon: "🇹🇭", filterTags: ["country:tailandia"] },
    { id: "india", group: "Cozinhas do Mundo", title: "Índia", icon: "🇮🇳", filterTags: ["country:india"] },
    { id: "mexico", group: "Cozinhas do Mundo", title: "México", icon: "🇲🇽", filterTags: ["country:mexico"] },
    { id: "peru", group: "Cozinhas do Mundo", title: "Peru", icon: "🇵🇪", filterTags: ["country:peru"] },
    { id: "alemanha", group: "Cozinhas do Mundo", title: "Alemanha", icon: "🇩🇪", filterTags: ["country:alemanha"] },
    { id: "austria", group: "Cozinhas do Mundo", title: "Áustria", icon: "🇦🇹", filterTags: ["country:austria"] },
    { id: "hungria", group: "Cozinhas do Mundo", title: "Hungria", icon: "🇭🇺", filterTags: ["country:hungria"] },
    { id: "grecia", group: "Cozinhas do Mundo", title: "Grécia", icon: "🇬🇷", filterTags: ["country:grecia"] },
    { id: "marrocos", group: "Cozinhas do Mundo", title: "Marrocos", icon: "🇲🇦", filterTags: ["country:marrocos"] },
    { id: "libano", group: "Cozinhas do Mundo", title: "Líbano", icon: "🇱🇧", filterTags: ["country:libano"] },
    { id: "eua", group: "Cozinhas do Mundo", title: "EUA", icon: "🇺🇸", filterTags: ["country:eua"] },
    { id: "dinamarca", group: "Cozinhas do Mundo", title: "Dinamarca", icon: "🇩🇰", filterTags: ["country:dinamarca"] },

    // ---------- Novas coleções cruzadas (só existem graças às tags) ----------
    { id: "col-frango", group: "Por proteína", title: "Frango", icon: "🍗", filterTags: ["protein:frango"] },
    { id: "col-suino", group: "Por proteína", title: "Suíno (todas)", icon: "🐖", filterTags: ["protein:suino"] },
    { id: "col-boi", group: "Por proteína", title: "Carne Bovina (todas)", icon: "🥩", filterTags: ["protein:boi"] },
    { id: "col-peixe", group: "Por proteína", title: "Peixe (todas)", icon: "🐟", filterTags: ["protein:peixe"] },
    { id: "col-frutos-do-mar", group: "Por proteína", title: "Frutos do Mar (todas)", icon: "🦐", filterTags: ["protein:frutos-do-mar"] },
    { id: "col-vegetariana", group: "Por proteína", title: "Vegetarianas", icon: "🥬", filterTags: ["protein:vegetariana"] },
    { id: "col-com-ovo", group: "Por proteína", title: "Com Ovo", icon: "🥚", filterTags: ["ingredient:ovo"] },

    { id: "col-rapidas", group: "Por tempo", title: "Até 30 min", icon: "⏱️", filterTags: ["time:ate-30-min"] },
    { id: "col-faceis", group: "Por dificuldade", title: "Fáceis", icon: "👍", filterTags: ["difficulty:facil"] },
  ];
})();
