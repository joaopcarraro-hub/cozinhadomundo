// tags.js — taxonomia central de tags. Toda tag usada em receitas/coleções precisa existir aqui.
// Prefixos: country:, dish_type:, course:, format:, technique:, protein:, contains:, ingredient:,
// seasoning:, water:, cuisine:, region:, diet:, time:, difficulty:
//
// ingredient:/seasoning:/water:/cuisine: são derivados em runtime a partir do dicionário canônico
// (data/derivation-dict.js) via js/tagmodel.js — nunca tagueados à mão em data/*.js. Precisam
// existir aqui mesmo assim: sem uma entrada em window.TAGS, o dropdown de facetas e a busca por
// label/sinônimo (Search.searchTags) não teriam label/lowPriority pra exibir, e o tag ficaria
// "invisível" mesmo presente em item.tags. region: é a exceção deliberada — o conjunto de valores
// é dinâmico (vem de qualquer texto entre parênteses do `origin`), então não tem entradas fixas
// aqui; fica de fora dos chips/facetas de propósito, mas ainda vai pro item.tags.
(function () {
  window.TAGS = [
    // ---------- country (país / cozinha) ----------
    { id: "country:brasil", label: "Brasil", group: "País / Cozinha", synonyms: ["brasileira", "brasileiro"] },
    { id: "country:franca", label: "França", group: "País / Cozinha", synonyms: ["francesa", "francês"] },
    { id: "country:italia", label: "Itália", group: "País / Cozinha", synonyms: ["italiana", "italiano"] },
    { id: "country:espanha", label: "Espanha", group: "País / Cozinha", synonyms: ["espanhola", "espanhol"] },
    { id: "country:portugal", label: "Portugal", group: "País / Cozinha", synonyms: ["portuguesa", "português"] },
    { id: "country:japao", label: "Japão", group: "País / Cozinha", synonyms: ["japonesa", "japonês"] },
    { id: "country:china", label: "China", group: "País / Cozinha", synonyms: ["chinesa", "chinês"] },
    { id: "country:coreia", label: "Coreia", group: "País / Cozinha", synonyms: ["coreana", "coreano"] },
    { id: "country:tailandia", label: "Tailândia", group: "País / Cozinha", synonyms: ["tailandesa", "tailandês", "thai"] },
    { id: "country:india", label: "Índia", group: "País / Cozinha", synonyms: ["indiana", "indiano"] },
    { id: "country:mexico", label: "México", group: "País / Cozinha", synonyms: ["mexicana", "mexicano"] },
    { id: "country:peru", label: "Peru", group: "País / Cozinha", synonyms: ["peruana", "peruano"] },
    { id: "country:alemanha", label: "Alemanha", group: "País / Cozinha", synonyms: ["alemã", "alemão"] },
    { id: "country:austria", label: "Áustria", group: "País / Cozinha", synonyms: ["austríaca", "austríaco"] },
    { id: "country:hungria", label: "Hungria", group: "País / Cozinha", synonyms: ["húngara", "húngaro"] },
    { id: "country:grecia", label: "Grécia", group: "País / Cozinha", synonyms: ["grega", "grego"] },
    { id: "country:marrocos", label: "Marrocos", group: "País / Cozinha", synonyms: ["marroquina", "marroquino"] },
    { id: "country:libano", label: "Líbano", group: "País / Cozinha", synonyms: ["libanesa", "libanês"] },
    { id: "country:eua", label: "Estados Unidos", group: "País / Cozinha", synonyms: ["americana", "americano", "eua"] },
    { id: "country:dinamarca", label: "Dinamarca", group: "País / Cozinha", synonyms: ["dinamarquesa", "dinamarquês"] },

    // ---------- dish_type (tipo de prato) ----------
    { id: "dish_type:molho", label: "Molhos", group: "Tipo de prato", synonyms: ["molho"] },
    { id: "dish_type:sopa", label: "Sopas", group: "Tipo de prato", synonyms: ["sopa", "caldo"] },
    { id: "dish_type:entrada-fria", label: "Entradas Frias", group: "Tipo de prato", synonyms: ["entrada fria"] },
    { id: "dish_type:entrada-quente", label: "Entradas Quentes", group: "Tipo de prato", synonyms: ["entrada quente"] },
    { id: "dish_type:massa", label: "Massas", group: "Tipo de prato", synonyms: ["massa", "macarrão", "pasta"] },
    { id: "dish_type:risoto", label: "Risotos", group: "Tipo de prato", synonyms: ["risoto"] },
    { id: "dish_type:ovo", label: "Pratos de Ovo", group: "Tipo de prato", synonyms: ["ovo", "omelete", "quiche"] },
    { id: "dish_type:pao", label: "Pães e Padaria", group: "Tipo de prato", synonyms: ["pão", "padaria"] },
    { id: "dish_type:sobremesa", label: "Sobremesas", group: "Tipo de prato", synonyms: ["doce", "sobremesa"] },
    { id: "dish_type:arroz", label: "Arrozes", group: "Tipo de prato", synonyms: ["arroz"] },
    { id: "dish_type:contemporaneo", label: "Clássicos Contemporâneos", group: "Tipo de prato", synonyms: ["contemporâneo"] },
    { id: "dish_type:tecnica-avancada", label: "Técnica Avançada", group: "Tipo de prato", synonyms: ["técnica avançada"] },
    { id: "dish_type:sanduiche", label: "Sanduíches", group: "Tipo de prato", synonyms: ["sanduiche", "sandubas", "lanche natural"] },

    // ---------- format (papel do preparo — técnica/base/componente, não necessariamente um prato) ----------
    { id: "format:tecnica", label: "Técnica", group: "Formato", synonyms: ["técnica culinária"] },
    { id: "format:base", label: "Base", group: "Formato", synonyms: ["fundo", "caldo base"] },
    { id: "format:componente", label: "Componente", group: "Formato", synonyms: ["elemento", "guarnição técnica"] },
    { id: "format:molho", label: "Molho", group: "Formato", synonyms: ["molho"] },
    { id: "format:preparo-basico", label: "Preparo Básico", group: "Formato", synonyms: [] },
    { id: "format:prato-completo", label: "Prato Completo", group: "Formato", synonyms: ["prato completo"] },

    // ---------- technique (técnica de cocção — refinamento de 2ª camada em países) ----------
    { id: "technique:assado", label: "Assado", group: "Técnica", synonyms: ["assar", "no forno"] },
    { id: "technique:grelhado", label: "Grelhado", group: "Técnica", synonyms: ["grelhar", "na grelha", "na brasa"] },
    { id: "technique:braseado", label: "Braseado", group: "Técnica", synonyms: ["brasear"] },
    { id: "technique:frito", label: "Frito", group: "Técnica", synonyms: ["fritar", "frito de imersão"] },
    { id: "technique:cozimento-lento", label: "Cozimento Lento", group: "Técnica", synonyms: ["low and slow", "cozimento longo"] },
    { id: "technique:fermentado", label: "Fermentado", group: "Técnica", synonyms: ["fermentação"] },

    // ---------- course (momento da refeição) ----------
    { id: "course:entrada", label: "Entrada", group: "Curso", synonyms: [] },
    { id: "course:principal", label: "Prato Principal", group: "Curso", synonyms: ["principal"] },
    { id: "course:sobremesa", label: "Sobremesa", group: "Curso", synonyms: [] },
    { id: "course:acompanhamento", label: "Acompanhamento", group: "Curso", synonyms: [] },
    { id: "course:cafe-da-manha", label: "Café da Manhã", group: "Curso", synonyms: ["café da manhã"] },

    // ---------- protein (proteína — só quando é o foco real da receita) ----------
    { id: "protein:frango", label: "Frango", group: "Proteína", synonyms: ["galinha", "peito de frango", "coxa", "sobrecoxa"] },
    { id: "protein:ave", label: "Aves", group: "Proteína", synonyms: ["pato", "peru", "aves"] },
    { id: "protein:boi", label: "Carne Bovina", group: "Proteína", synonyms: ["carne bovina", "vaca", "boi"] },
    { id: "protein:suino", label: "Suíno", group: "Proteína", synonyms: ["porco", "carne de porco", "bacon", "pancetta", "guanciale", "linguiça"] },
    { id: "protein:cordeiro", label: "Cordeiro", group: "Proteína", synonyms: ["borrego", "carneiro"] },
    { id: "protein:peixe", label: "Peixe", group: "Proteína", synonyms: ["peixe"] },
    { id: "protein:frutos-do-mar", label: "Frutos do Mar", group: "Proteína", synonyms: ["camarão", "lula", "polvo", "mexilhão", "marisco"] },
    { id: "protein:ovo", label: "Ovo (proteína)", group: "Proteína", synonyms: ["ovo", "ovos"] },
    // proteína vegetal específica — uso opcional, só quando leguminosa/laticínio é claramente o foco
    // proteico do prato (ex: um prato de lentilhas como prato principal), não pra todo prato vegetariano.
    { id: "protein:leguminosa", label: "Leguminosa", group: "Proteína", synonyms: ["feijão", "lentilha", "grão-de-bico"] },
    { id: "protein:laticinio", label: "Laticínio", group: "Proteína", synonyms: ["queijo", "iogurte"] },

    // ---------- diet (dieta/restrição — não é proteína) ----------
    { id: "diet:vegetariana", label: "Vegetariana", group: "Dieta", synonyms: ["vegetariano", "sem carne"] },
    { id: "diet:vegana", label: "Vegana", group: "Dieta", synonyms: ["vegano", "plant-based"] },

    // ---------- contains (ingrediente/proteína presente, mas secundário à identidade do prato) ----------
    { id: "contains:suino", label: "Leva Suíno (secundário)", group: "Contém", synonyms: ["bacon", "pancetta", "guanciale", "presunto", "linguiça", "toucinho"] },
    { id: "contains:boi", label: "Leva Carne Bovina (secundário)", group: "Contém", synonyms: [] },
    { id: "contains:ave", label: "Leva Ave (secundário)", group: "Contém", synonyms: [] },
    { id: "contains:frango", label: "Leva Frango (secundário)", group: "Contém", synonyms: [] },
    { id: "contains:peixe", label: "Leva Peixe (secundário)", group: "Contém", synonyms: [] },
    { id: "contains:frutos-do-mar", label: "Leva Frutos do Mar (secundário)", group: "Contém", synonyms: [] },
    { id: "contains:cordeiro", label: "Leva Cordeiro (secundário)", group: "Contém", synonyms: [] },
    { id: "contains:ovo", label: "Leva Ovo (secundário)", group: "Contém", synonyms: [] },

    // ---------- ingredient (derivado do dicionário canônico — tier:filter, prominente nos chips) ----------
    { id: "ingredient:ovo", label: "Ovo", group: "Ingrediente", synonyms: ["ovos", "gema", "clara"] },
    { id: "ingredient:tomate", label: "Tomate", group: "Ingrediente", synonyms: ["tomates", "molho de tomate"] },
    { id: "ingredient:queijo", label: "Queijo", group: "Ingrediente", synonyms: ["queijos"] },
    { id: "ingredient:arroz", label: "Arroz", group: "Ingrediente", synonyms: [] },
    { id: "ingredient:batata", label: "Batata", group: "Ingrediente", synonyms: ["batatas"] },
    { id: "ingredient:mandioca", label: "Mandioca", group: "Ingrediente", synonyms: ["aipim", "macaxeira"] },
    { id: "ingredient:milho", label: "Milho", group: "Ingrediente", synonyms: [] },
    { id: "ingredient:feijao", label: "Feijão", group: "Ingrediente", synonyms: ["feijões"] },
    { id: "ingredient:berinjela", label: "Berinjela", group: "Ingrediente", synonyms: [] },
    { id: "ingredient:cogumelo", label: "Cogumelo", group: "Ingrediente", synonyms: ["cogumelos", "champignon", "shiitake", "shimeji"] },
    { id: "ingredient:abobora", label: "Abóbora", group: "Ingrediente", synonyms: [] },
    { id: "ingredient:abobrinha", label: "Abobrinha", group: "Ingrediente", synonyms: [] },
    { id: "ingredient:pimentao", label: "Pimentão", group: "Ingrediente", synonyms: [] },
    { id: "ingredient:azeitona", label: "Azeitona", group: "Ingrediente", synonyms: ["azeitonas"] },
    { id: "ingredient:limao", label: "Limão", group: "Ingrediente", synonyms: ["lima"] },
    { id: "ingredient:coco", label: "Coco", group: "Ingrediente", synonyms: ["leite de coco"] },
    { id: "ingredient:castanha", label: "Castanha / Nozes", group: "Ingrediente", synonyms: ["nozes", "amêndoa", "avelã", "castanha-do-pará", "castanha de caju"] },
    { id: "ingredient:chocolate", label: "Chocolate", group: "Ingrediente", synonyms: ["cacau"] },
    { id: "ingredient:cafe", label: "Café", group: "Ingrediente", synonyms: [] },
    { id: "ingredient:vinho", label: "Vinho", group: "Ingrediente", synonyms: [] },
    { id: "ingredient:cerveja", label: "Cerveja", group: "Ingrediente", synonyms: [] },
    { id: "ingredient:mel", label: "Mel", group: "Ingrediente", synonyms: [] },
    { id: "ingredient:iogurte", label: "Iogurte", group: "Ingrediente", synonyms: [] },
    { id: "ingredient:espinafre", label: "Espinafre", group: "Ingrediente", synonyms: [] },
    { id: "ingredient:ervilha", label: "Ervilha", group: "Ingrediente", synonyms: ["ervilhas"] },
    { id: "ingredient:lentilha", label: "Lentilha", group: "Ingrediente", synonyms: ["lentilhas"] },
    { id: "ingredient:grao-de-bico", label: "Grão-de-bico", group: "Ingrediente", synonyms: [] },
    { id: "ingredient:amendoim", label: "Amendoim", group: "Ingrediente", synonyms: [] },
    { id: "ingredient:molho-de-soja", label: "Molho de Soja", group: "Ingrediente", synonyms: ["shoyu"] },
    { id: "ingredient:brocolis", label: "Brócolis", group: "Ingrediente", synonyms: ["brocolis"] },
    { id: "ingredient:cenoura", label: "Cenoura", group: "Ingrediente", synonyms: [] },
    { id: "ingredient:pao", label: "Pão", group: "Ingrediente", synonyms: ["pães"] },
    { id: "ingredient:pepino", label: "Pepino", group: "Ingrediente", synonyms: [] },
    { id: "ingredient:repolho", label: "Repolho", group: "Ingrediente", synonyms: [] },
    { id: "ingredient:damasco", label: "Damasco", group: "Ingrediente", synonyms: ["damascos"] },
    // espécies de peixe/fruto do mar (cada uma também deriva water:* — ver data/derivation-dict.js)
    { id: "ingredient:camarao", label: "Camarão", group: "Ingrediente", synonyms: ["camarões"] },
    { id: "ingredient:salmao", label: "Salmão", group: "Ingrediente", synonyms: [] },
    { id: "ingredient:lula", label: "Lula", group: "Ingrediente", synonyms: ["lulas"] },
    { id: "ingredient:robalo", label: "Robalo", group: "Ingrediente", synonyms: [] },
    { id: "ingredient:atum", label: "Atum", group: "Ingrediente", synonyms: [] },
    { id: "ingredient:linguado", label: "Linguado", group: "Ingrediente", synonyms: [] },
    { id: "ingredient:dourado", label: "Dourado", group: "Ingrediente", synonyms: [] },
    { id: "ingredient:anchova", label: "Anchova", group: "Ingrediente", synonyms: ["anchovas", "aliche"] },
    { id: "ingredient:bacalhau", label: "Bacalhau", group: "Ingrediente", synonyms: [] },
    { id: "ingredient:badejo", label: "Badejo", group: "Ingrediente", synonyms: [] },
    { id: "ingredient:polvo", label: "Polvo", group: "Ingrediente", synonyms: [] },
    { id: "ingredient:mexilhao", label: "Mexilhão", group: "Ingrediente", synonyms: ["mexilhões"] },
    { id: "ingredient:lagosta", label: "Lagosta", group: "Ingrediente", synonyms: [] },
    { id: "ingredient:tilapia", label: "Tilápia", group: "Ingrediente", synonyms: [] },
    { id: "ingredient:ostra", label: "Ostra", group: "Ingrediente", synonyms: ["ostras"] },
    { id: "ingredient:caranguejo", label: "Caranguejo", group: "Ingrediente", synonyms: ["siri"] },
    // borderline (tier:search no dicionário): discrimináveis mas viram ruído se ficarem em
    // destaque no dropdown — mesma mecânica de lowPriority já usada pra alho/cebola.
    { id: "ingredient:leite", label: "Leite", group: "Ingrediente", synonyms: [], lowPriority: true },
    { id: "ingredient:vinagre", label: "Vinagre", group: "Ingrediente", synonyms: [], lowPriority: true },

    // ---------- seasoning (temperos/aromáticos — sempre lowPriority, buscáveis mas invisíveis nos chips) ----------
    { id: "seasoning:alho", label: "Alho", group: "Tempero", synonyms: [], lowPriority: true },
    { id: "seasoning:cebola", label: "Cebola", group: "Tempero", synonyms: [], lowPriority: true },
    { id: "seasoning:cebolinha", label: "Cebolinha", group: "Tempero", synonyms: [], lowPriority: true },
    { id: "seasoning:salsinha", label: "Salsinha", group: "Tempero", synonyms: ["salsa"], lowPriority: true },
    { id: "seasoning:louro", label: "Louro", group: "Tempero", synonyms: ["folha de louro"], lowPriority: true },
    { id: "seasoning:coentro", label: "Coentro", group: "Tempero", synonyms: [], lowPriority: true },
    { id: "seasoning:gengibre", label: "Gengibre", group: "Tempero", synonyms: [], lowPriority: true },
    { id: "seasoning:paprica", label: "Páprica", group: "Tempero", synonyms: [], lowPriority: true },
    { id: "seasoning:tomilho", label: "Tomilho", group: "Tempero", synonyms: [], lowPriority: true },
    { id: "seasoning:noz-moscada", label: "Noz-moscada", group: "Tempero", synonyms: [], lowPriority: true },
    { id: "seasoning:cominho", label: "Cominho", group: "Tempero", synonyms: [], lowPriority: true },
    { id: "seasoning:echalote", label: "Echalote", group: "Tempero", synonyms: ["echalota", "chalota"], lowPriority: true },
    { id: "seasoning:gergelim", label: "Gergelim", group: "Tempero", synonyms: [], lowPriority: true },
    { id: "seasoning:canela", label: "Canela", group: "Tempero", synonyms: [], lowPriority: true },
    { id: "seasoning:mostarda", label: "Mostarda", group: "Tempero", synonyms: ["dijon"], lowPriority: true },
    { id: "seasoning:endro", label: "Endro", group: "Tempero", synonyms: ["dill"], lowPriority: true },
    { id: "seasoning:pimenta-chili", label: "Pimenta Chili", group: "Tempero", synonyms: ["malagueta", "jalapeño", "dedo-de-moça"], lowPriority: true },
    { id: "seasoning:cravo", label: "Cravo", group: "Tempero", synonyms: [], lowPriority: true },
    { id: "seasoning:oregano", label: "Orégano", group: "Tempero", synonyms: [], lowPriority: true },
    { id: "seasoning:curry", label: "Curry", group: "Tempero", synonyms: ["caril"], lowPriority: true },
    { id: "seasoning:alecrim", label: "Alecrim", group: "Tempero", synonyms: [], lowPriority: true },
    { id: "seasoning:manjericao", label: "Manjericão", group: "Tempero", synonyms: [], lowPriority: true },
    { id: "seasoning:hortela", label: "Hortelã", group: "Tempero", synonyms: [], lowPriority: true },
    { id: "seasoning:acafrao", label: "Açafrão", group: "Tempero", synonyms: [], lowPriority: true },
    { id: "seasoning:cardamomo", label: "Cardamomo", group: "Tempero", synonyms: [], lowPriority: true },

    // ---------- water (habitat da espécie de peixe/fruto do mar — derivado junto com ingredient:*) ----------
    { id: "water:doce", label: "Peixe de Água Doce", group: "Água", synonyms: [] },
    { id: "water:salgada", label: "Peixe de Água Salgada", group: "Água", synonyms: [] },
    { id: "water:frutos-do-mar", label: "Frutos do Mar", group: "Água", synonyms: [] },

    // ---------- cuisine (derivado de origin — mesmos países de country:, reaproveita os labels) ----------
    { id: "cuisine:brasil", label: "Brasil", group: "País / Cozinha", synonyms: ["brasileira", "brasileiro"] },
    { id: "cuisine:franca", label: "França", group: "País / Cozinha", synonyms: ["francesa", "francês"] },
    { id: "cuisine:italia", label: "Itália", group: "País / Cozinha", synonyms: ["italiana", "italiano"] },
    { id: "cuisine:espanha", label: "Espanha", group: "País / Cozinha", synonyms: ["espanhola", "espanhol"] },
    { id: "cuisine:portugal", label: "Portugal", group: "País / Cozinha", synonyms: ["portuguesa", "português"] },
    { id: "cuisine:japao", label: "Japão", group: "País / Cozinha", synonyms: ["japonesa", "japonês"] },
    { id: "cuisine:china", label: "China", group: "País / Cozinha", synonyms: ["chinesa", "chinês"] },
    { id: "cuisine:coreia", label: "Coreia", group: "País / Cozinha", synonyms: ["coreana", "coreano"] },
    { id: "cuisine:tailandia", label: "Tailândia", group: "País / Cozinha", synonyms: ["tailandesa", "tailandês", "thai"] },
    { id: "cuisine:india", label: "Índia", group: "País / Cozinha", synonyms: ["indiana", "indiano"] },
    { id: "cuisine:mexico", label: "México", group: "País / Cozinha", synonyms: ["mexicana", "mexicano"] },
    { id: "cuisine:peru", label: "Peru", group: "País / Cozinha", synonyms: ["peruana", "peruano"] },
    { id: "cuisine:alemanha", label: "Alemanha", group: "País / Cozinha", synonyms: ["alemã", "alemão"] },
    { id: "cuisine:austria", label: "Áustria", group: "País / Cozinha", synonyms: ["austríaca", "austríaco"] },
    { id: "cuisine:hungria", label: "Hungria", group: "País / Cozinha", synonyms: ["húngara", "húngaro"] },
    { id: "cuisine:grecia", label: "Grécia", group: "País / Cozinha", synonyms: ["grega", "grego"] },
    { id: "cuisine:marrocos", label: "Marrocos", group: "País / Cozinha", synonyms: ["marroquina", "marroquino"] },
    { id: "cuisine:libano", label: "Líbano", group: "País / Cozinha", synonyms: ["libanesa", "libanês"] },
    { id: "cuisine:eua", label: "Estados Unidos", group: "País / Cozinha", synonyms: ["americana", "americano", "eua"] },
    { id: "cuisine:dinamarca", label: "Dinamarca", group: "País / Cozinha", synonyms: ["dinamarquesa", "dinamarquês"] },

    // ---------- time (tempo total, derivado automaticamente) ----------
    { id: "time:ate-15-min", label: "Até 15 min", group: "Tempo", synonyms: ["rápida", "rápido"] },
    { id: "time:ate-30-min", label: "Até 30 min", group: "Tempo", synonyms: ["rápida", "rápido"] },
    { id: "time:ate-1h", label: "Até 1h", group: "Tempo", synonyms: [] },
    { id: "time:mais-de-1h", label: "Mais de 1h", group: "Tempo", synonyms: ["demorada"] },
    { id: "time:preparo-longo", label: "Preparo Longo", group: "Tempo", synonyms: ["preparo longo", "demora horas"] },

    // ---------- difficulty (derivado automaticamente) ----------
    { id: "difficulty:facil", label: "Fácil", group: "Dificuldade", synonyms: ["simples", "iniciante"] },
    { id: "difficulty:media", label: "Média", group: "Dificuldade", synonyms: ["intermediária", "moderada"] },
    { id: "difficulty:dificil", label: "Difícil", group: "Dificuldade", synonyms: ["avançada", "avançado"] },
  ];
})();
