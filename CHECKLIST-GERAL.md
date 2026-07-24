# CHECKLIST-GERAL.md — Gusta (roadmap-mestre do projeto)

Roadmap-mestre / fonte de verdade viva. Ler primeiro. O log granular do workstream de
busca+taxonomia (Fases 0–3) vive em `CHECKLIST-REDESIGN.md`; aqui fica só o resumo do que
ficou pronto + tudo que falta. Atualizar a cada rodada relevante — reescrever por completo
quando acumular contradição entre seções, não só remendar.

App: guia gastronômico "Gusta" — "Da dúvida ao prato pronto". PWA vanilla JS (sem build, sem
framework, sem dependência externa por decisão de projeto). 398 receitas em `data/*.js`.
Deployado em `joaopcarraro-hub.github.io/guiaculinario`. Vai a público em breve.

Critério de qualidade: "bonito, moderno, intuitivo, completo" — lançamento público, sem prazo
apertado mas sem nada solto.

Regra de modelo: Fable 5 (~5x o custo do Sonnet por token) só pra investigação ambígua e
design pesado (julgamento real). Assim que a decisão fica bem especificada — mesmo que
complexa — volta pro Sonnet 5 Extra. Avisar o João quando puder trocar de volta. Uma tarefa
por vez no Code; prova funcional (suíte/tela) garante integridade depois de merge paralelo —
git não pega conflito semântico. Antes de "pode dar push": sempre `git log --oneline` +
`git status` brutos. Suíte escrita numa tarefa vira arquivo versionado em `scripts/`. Toda
mudança de arquitetura vira regra formal (CLAUDE.md / skill) no mesmo commit.

## ✅ FEITO

### Fundação

Navegação, modal de filtro, reskin escuro, dados estruturados (`ingredientsStructured`,
multiplicador de porções, `stepIngredients`), 5 telas da barra inferior com conteúdo real
(Home, Pesquisar, Minhas Receitas, Preparos, Lista de Compras), Service Worker network-first,
PWA com nome/ícone Gusta reais. Rename "Cozinhas do Mundo" → "Países". Toggle de Ingrediente
(Qualquer um / Todos estes, com animação de mola). Voltar preservando filtro+scroll (Dívida
#1, a mais antiga — resolvida e estendida a coleção/Busca/Minhas Receitas). Infraestrutura de
"últimas receitas visitadas" (só o rastreamento de dado, sem UI).

### Busca — BLOCO COMPLETO (4 commits, no ar em `main`) — detalhe granular em `CHECKLIST-REDESIGN.md`

- `83922b6` fix(busca): filtra tag morta na sugestão por contagem viva (helper `isLiveTag`
  reusado da proteção que o Enter já fazia) + revive `difficulty:dificil` (mapeando "alta",
  enche a coleção Avançadas que estava vazia) + `cuisine:eua`/`country:eua` (matcher "EUA" em
  `ORIGIN_COUNTRY_MATCHERS`).
- `c9e3610` feat(taxonomia): 19 tags derivadas novas (4 filter: macarrao/laranja/maca/rabanete;
  15 lowPriority só-busca). macarrão vira subtipo, não sinônimo de massa (removido dos
  sinônimos de `dish_type:massa`) — Lasanha/Ravioli são massa e não são macarrão. Sinônimos
  suínos (bacon/pancetta/guanciale/presunto/linguiça/toucinho) migrados pra fora de
  `protein:`/`contains:suino`. vitela→boi, cheiro-verde→salsinha,
  caiena/gochugaru/aji amarillo→pimenta-chili. Falso-amigo açafrão-da-terra (=cúrcuma).
- `3679c3b` feat(busca): parser decompõe a query em tags vivas + texto residual. Predicado de
  colapso testável (EQ = igualdade de frase; CONTAINS = palavra inteira; auto-chip só quando
  EQ≠vazio e o conjunto de tags resolve num único id — senão chips opcionais + texto). 21
  termos ambíguos travados por teste-guarda contra drift de taxonomia. 2 blocos de resultado:
  B1 (tags-AND + resíduo, escopo estrito sem descrição) + B2 ("mais por texto", 6 campos,
  NUNCA suprimido — cobre buraco de taxonomia). Motor unificado sobre `getAllRecipesFlat`
  (`buildIndex` do search.js aposentado); word-boundary + plural s? (fim do substring puro);
  `STOPWORDS_PT` e `MEASUREMENT_MASKS` viram exports do derivation-dict (máscara "colher de
  sopa"). Digitar = preview via `Router.replace(q=)`; Enter/chip materializa em
  `tags=`/`text=`; grupo "Receitas" (navegação direta) removido — receitas viram resultado na
  lista.
- `f2bb4d1` correção do teste 10 da suíte do parser (mede o campo ingrediente direto).

Prova: "macarrão com carne" → Ragu alla Bolognese/Hot Pot/Japchae/Sukiyaki/Shabu-Shabu, Lasanha
AUSENTE. "cremoso" (sem tag) → resultado via B2, nunca tela vazia. Suíte versionada
`scripts/verify-search-parser-2026-07-24.js` (41 asserções). Skill `cooking-taxonomy-architect`
documenta o predicado, os 2 blocos e a remoção do grupo Receitas.

### Lista de Compras — normalização semântica completa

Fase 1 (`data/shopping-dict.js`, pipeline de 3 camadas, regra de fusão, plurais curados,
`isReference` → seção "Preparos que você precisa fazer antes", migração `boughtKeys` v1→v2).
Pluralização por dicionário curado. Auditoria de cobertura (178 clusters, ~467 textos
fundindo). Fase 2 Despensa (`PANTRY_SET` sai da soma → seção "Despensa — confira se já tem").
Fase 3A+3B (unidade de VENDA na visão Geral: sólido→grama, líquido→ml/L, unidade→contagem
arredondada pra cima, tomate pelado→lata; fração eliminada da visão Geral). Visão padrão
trocada pra "Geral". Suíte versionada (330 testes).

### Timer

Roleta de 3 colunas (h/min/s) com máquina de estado; segundos 0–59; toque no mostrador abre
teclado numérico.

### Polimento + `.text-link`

Ícones da nav alinhados, títulos redundantes removidos, tokens
`--color-error`/`--color-success` declarados, `theme-color` do PWA, auditoria de tokens (0 bug
real). `.text-link` fechado (`--color-accent-text` 4,61:1, peso regular, ícone colado,
hierarquia de área de toque confirmada por `elementFromPoint`).

## 🔄 AGUARDANDO TESTE DO USUÁRIO (não do Code)

- Teclado empurrando a barra inferior no Opera Mobile: correção aplicada
  (`interactive-widget=resizes-visual` na meta viewport, inerte no Chrome). Ninguém testou em
  Opera real. Testar no celular quando o commit estiver no ar. Plano B: Visual Viewport API.

## 🔵 FAZER AGORA — funcionalidade, experiência, arquitetura de dado

1. ~~Busca~~ — ✅ FEITO (ver bloco acima).
2. ~~Tag órfã "Frito"/"Assado" sem resultado~~ — ✅ FEITO (filtro de tag morta, Pacote 1).
   Confirmar na tela quando o deploy subir.
3. Quantidade "não compra quebrado" — ex.: "3 ovos + 2 gemas" deve virar "5 ovos" na lista de
   compras. NÃO é coberto pela normalização já feita (aquilo resolve texto e unidade de venda;
   isto é SUB-PRODUTO DERIVADO — gema/clara vêm de dentro do ovo). Precisa de investigação
   própria: varrer o acervo e medir quantos ingredientes têm esse padrão antes de definir a
   regra geral. Investigação + execução: Sonnet 5 Extra, effort médio.
4. Nomes de receita em português — mesma metodologia da tradução de ingrediente (investigar,
   propor lista, João aprova, aplica). Nome próprio de prato fica como está (Carbonara etc.).
   Conteúdo/dado, não layout. Sonnet 5 Extra, effort médio.
5. Busca inline da página de grupo sem `fromHash` (pequeno) — 3º caminho que ficou de fora
   quando o "Voltar preservando contexto" foi estendido. Fecha a consistência de navegação.
   Sonnet 5 Extra, effort baixo. Dá pra encaixar o polimento do toggle (abaixo) no mesmo toque
   se abrir o CSS.
6. Agrupamento por corredor na lista de compras (NOVO, registrado 2026-07-24) — na visão
   Geral, ordenar por seção de mercado (hortifruti, açougue/peixaria, laticínios/frios,
   mercearia seca, temperos/condimentos, padaria, congelados, bebidas) pro usuário não
   atravessar a loja de ida e volta. Deriva de um campo `section` no `shopping-dict` (extensão
   do mecanismo do `PANTRY_SET`), não taguado por receita. Decisões abertas: exibir cabeçalho
   de seção ou só reordenar (inclinação: cabeçalho leve ajuda mais); taxonomia + ordem canônica
   das seções; convivência com a Despensa (fica como bloco à parte). Varrer o `shopping-dict` e
   medir ambíguos antes de desenhar. Investigação + execução: Sonnet 5 Extra, effort médio.

⚠️ **DECISÃO PENDENTE DO JOÃO** — tela "Pesquisar" própria: hoje a aba só redireciona pra
busca. A tela própria (picked-for-you, atalhos, grid de categorias) é bem mais visual/layout
que os outros itens deste bloco. Fica aqui (funcional, agora) ou vai pra remodelagem visual
(depois)? Destrava o sequenciamento do resto.

## 🎨 DEIXAR PRO FABLE, DEPOIS — remodelagem visual (só quando o João abrir essa frente)

1. Redesenho completo da página de receita — funil de informação (tags menores após a
   descrição; tempo/complexidade/porções em segmentos rotulados; os 3 botões de ação
   redistribuídos, Favoritar sai da linha; porções perto dos ingredientes; "ocultar
   ingredientes" vira seta discreta). Efeito de scroll: foto de topo maximizada e FIXA, o
   conteúdo desliza por cima (CSS `position: fixed` + fluxo normal, sem lib/parallax JS).
2. Redesenho do card de receita — foto maior (~60%, centralizada), REMOVE
   tempo/complexidade/porções e país do card. País só reaparece se o usuário estiver filtrando
   por 2+ países. Tag do card só macro-relevante (proteína/tipo de prato, nunca país).
   Padronizar a divergência card normal vs card em Minhas Receitas.
3. Botão de voltar flutuante — troca o contextual-fixo por flutuante que acompanha o scroll.
   Regra na skill `product-navigation-ux`: sempre histórico real, nunca destino hardcoded,
   EXCETO no modo de preparo (só "Sair do modo cozinhar").
4. "Últimas receitas visitadas" — UI do carrossel (dado já rastreado). Carrossel horizontal na
   home, blocos menores que os 4 tiles grandes, ~3 visíveis, últimas 10. Decidir info (nome +
   origem ou nome + foto). "Não pode ficar apertado nem vazio."
5. Bloco de geração de imagem por IA — PAUSADO, o João vai fazer numa conversa separada com a
   namorada (design visual). Skill `ai-image-generator` instalada e testada (Gemini 2.5 Flash
   Image, gratuito). 3 tipos: foto de receita, ícone de ingrediente, foto de categoria/hub
   (tile + banner de fundo desfocado). Diretriz: "espectro com âncoras" (luz/profundidade
   sempre iguais; bancada/louça num leque pequeno curado; comida/ângulo livres) — nunca tingir
   fundo com cor de marca. Bandeira de país (fundo borrado) é CSS, não IA.

## 🧊 POLIMENTO DE BAIXA PRIORIDADE

- Realce azul do toggle "Qualquer um / Todos estes" (NOVO, 2026-07-24) — ao tocar aparece um
  retângulo azul de seleção nativa atrás do knob, quebra a sensação de moderno. Cosmético, 1–3
  linhas de CSS (`-webkit-tap-highlight-color: transparent`, `user-select: none`, outline de
  foco estilizado). Pega carona no próximo toque em CSS.
- Roleta do timer: números vizinhos menores que o selecionado + transição suave ao trocar — só
  se for fácil.

## 🔴 BACKLOG SEM AÇÃO AGORA

- Facetas Ocasião / Restrições — esperando mais dado (`diet:` expandido).
- `stepIngredients` Escopo B (mapear todo passo, não só divisão de ingrediente) — adiado,
  baixo valor marginal (91,8% dos passos sem ambiguidade).
- Texto "(dividida)"/"(dividido)" no ingrediente redundante — pode revisitar agora que a UI de
  quantidade-por-passo existe.

## 📌 DECISÕES PEQUENAS PENDENTES

- Logo dentro do app (não só ícone do PWA) — não precisa por ora.
- `#/grupo/tempo` e `#/grupo/dificuldade` como rotas órfãs — manter ou aposentar.
- Revisão de copy técnico ("Papel da proteína" como nome de faceta).
- 5 receitas com `ingredients: []` vazio — dívida de conteúdo.
- Ícone de ingrediente sem cobertura gratuita — caçar manual ou gerar por IA (resolve dentro
  do bloco de imagem).

## 🧠 APRENDIZADOS-CHAVE (mantêm-se válidos)

- Medir antes de propor. Mudança de dado semântico → investigar a variedade REAL antes de
  desenhar a regra. Nunca assumir formato.
- Dry-run antes de produção. Simular e confirmar antes de tocar dado/código real.
- Relatório com número concreto, nunca resumo. "Passou" não é prova; contagem exata,
  antes/depois, teste negativo explícito. `git log`/`git status` sempre brutos antes do push.
- Achou um bug de um tipo, procura a MESMA causa em outro lugar.
- Teste negativo importa mais que positivo. Confirmar que o que NÃO deveria mudar não mudou.
- Desconfiar do próprio método de teste antes de reportar (já pegou eval com listener
  duplicado, árvore de acessibilidade errada, teste medindo o campo errado — o "sopa
  200→23").
- Subtipo ≠ sinônimo (macarrão vs. massa) — granularidade de dado > esperteza de parser.
- Termo ambíguo não colapsa em tag específica (carne ≠ boi automático) — interpretação de
  busca visível e reversível (chips removíveis).
- Falso-amigo é recorrente: mel/cogumelo, dourado/dourar, pimenta genérica,
  açafrão-da-terra/açafrão, alho/alho-poró, café/café-da-manhã, leite/leite-de-coco. Sempre
  mascarar o termo, não descartar a linha inteira.
- Lista de compras: unidade exibida = unidade de VENDA. Assimetria de risco — comprar a mais é
  barato, a menos impede a receita → arredonda pra cima na dúvida.
- João reverte decisão vendo na prática — normal, é o processo. Propor de forma reversível
  quando a decisão for genuinamente visual/ambígua.

## 📎 ARQUIVOS DE REFERÊNCIA

- Este `CHECKLIST-GERAL.md` — roadmap-mestre, ler primeiro.
- `CHECKLIST-REDESIGN.md` — log granular do workstream de busca+taxonomia (Fases 0–3).
- `DESIGN-TOKENS.md`, `docs/prompt-categorizar-receita.md`.
- `.claude/skills/`: `mobile-recipe-ui`, `product-navigation-ux`, `cooking-taxonomy-architect`
  — atualizadas pelo Code a cada rodada relevante.
- Suítes versionadas em `scripts/`: `verify-search-parser-2026-07-24.js`,
  `verify-taxonomy-2026-07-24.js`, `derive-tags-dry-run.js`, `derive-equipment-dry-run.js`,
  `test-shopping-dict.js`.
