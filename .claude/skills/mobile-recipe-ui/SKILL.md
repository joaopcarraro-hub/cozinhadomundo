---
name: mobile-recipe-ui
description: Revisar e melhorar UI mobile-first de cards, home, páginas de grupo, listagens, filtros, chips, busca e página da receita.
---

# Mobile Recipe UI

Use esta skill quando o trabalho envolver interface mobile do app de receitas.

## Princípio central

A interface deve ajudar o usuário a decidir rápido o que cozinhar.

Mobile primeiro. Desktop depois.

## Home (Bloco 2, Fase 2.2)

A home deve ser simples e guiada.

Mostrar só:
- "Mais categorias" — entrada pequena, num canto, acima dos tiles, texto em
  `--color-text-secondary` (nunca `--color-accent` em texto pequeno — falha WCAG AA).
- 4 tiles grandes: Massas, Proteínas, Navegar por Países, Sobremesas.

Sem contador de progresso ("X de Y receitas já feitas") — removido, era resíduo do sistema
antigo de tracking, redundante nesta tela.

Sem busca livre e sem atalhos de Favoritos/Quero fazer/Histórico na home — isso migrou pra
barra de navegação inferior (aba Pesquisar e, no futuro, aba Minhas Receitas).

Cada tile grande deve ter:
- ícone outline monocromático (`--color-text-primary`) + label
- área de toque grande (mín. 120px de altura)
- cartão `--color-surface`, raio 20px, borda `--color-border`
- visual limpo, sem excesso de chips ou contadores

Tiles/entrada "Mais categorias"/barra inferior usam os tokens novos (docs/DESIGN-TOKENS.md)
diretamente (`--color-*`). Desde o Bloco 4, o resto do app (página de categoria, dropdowns,
cards de receita) também é tema escuro — só que via os tokens ANTIGOS redefinidos no `:root`
de `css/style.css` (`--bg`/`--ink`/`--gold`/etc. com os NOMES mantidos, mas valores apontando
pros mesmos hex do tema escuro). Não há mais inconsistência visual entre blocos — o app é
100% escuro. Ver "Reskin escuro (Bloco 4)" abaixo pro detalhamento.

## Barra de navegação inferior

Fixa, 5 abas (Home / Pesquisar / Minhas Receitas / Preparos / Lista de Compras), fundo
`--color-bg-secondary`. Aba ativa: ícone + label em `--color-accent`. Inativas:
`--color-text-disabled`. Sem FAB — não é um padrão deste app.

4 das 5 abas usam o sistema de ícones outline compartilhado (`ICON_SVG_ATTRS`/`ICONS` em
app.js — stroke-based, viewBox 24x24, `fill="none"`). "Preparos" é exceção: ícone autoral
próprio (`icons/preparos.svg`, panela de cabo único), formato de traço preenchido
(`fill="currentColor"`), fora do sistema compartilhado — embutido como string própria
(`PREPAROS_ICON_SVG` em app.js), nunca via `fetch()`/`<img src>`, mesmo padrão anti-race-
condition do `EQUIPMENT_SVG_MARKUP`. Visualmente indistinguível do resto (mesmo tamanho
22x22px via `.bottom-nav__icon`, mesma troca de cor ativo/inativo via `currentColor`).

## Página de grupo

Cada grupo deve ter:
- botão voltar
- título
- descrição
- busca contextual
- opções internas do grupo

Exemplo de Proteínas:
- Aves
- Carnes bovinas
- Suínos
- Peixes
- Frutos do mar
- Ovos

Cada card de opção mostra só UM número total ("N receitas") — sem split "X de foco · Y no
total" (resíduo do antigo sistema de Foco/Também leva, redundante com o dropdown "Papel da
proteína" já disponível um clique depois) e sem "X/Y feitas" (contador de progresso removido).
Card compartilhado por todos os hubs (renderCollectionCard em app.js) — mudar aqui muda em
todos de uma vez.

A busca nessa página filtra as opções (categorias/coleções) exibidas por nome — e também
mostra receitas que batem em tags de ingrediente (ingredient:/contains:), escopadas às
coleções deste grupo, numa seção separada da lista de opções (ex.: "Categorias" e "Receitas
com [termo]"). Nunca traz receita de fora do grupo atual.

## Cards de receita mobile

O card mobile deve ser vertical e escaneável.

Regras:
- sem coluna vazia lateral
- título até 2 linhas
- descrição até 2 linhas
- tags limitadas
- metadados em chips
- CTA claro: Ver receita
- ações organizadas no topo ou rodapé
- área de toque confortável

## Filtros e chips

Não mostrar tudo que é possível.
Mostrar apenas o que ajuda a decidir.

Evitar poluir a UI com:
- alho
- cebola
- sal
- óleo
- categoria original
- filtros redundantes com a página atual

## Modal de filtros em acordeão (Bloco 3 — design tokens v3)

Coleções (país, proteína, tempo, dificuldade, fundamentos) usam um botão "Filtros" (pill,
`--color-surface`/`--color-border`, ícone outline + badge `--color-accent` com a contagem de
filtros ativos) no lugar de onde a antiga barra de dropdowns sempre-visível ficava. Toca no
botão, abre um modal cheio de tela (`--color-bg`) com "Cancelar" / título "Filtros" à esquerda/
centro, e "Ver resultados (N)" fixo no rodapé (pill `--color-accent`, N = contagem ao vivo).

Dentro, 6 seções em acordeão — País, Complexidade, Tempo, Equipamento, Ingrediente, Papel da
proteína (só em coleções de proteína) — cada uma com contagem de opções no cabeçalho e um
resumo do valor já selecionado, se houver. Três UIs de multi-seleção coexistem:
- Complexidade, Tempo: lista de CHECKBOX (`accent-color: --color-accent`), com "Todos" como
  item especial no topo que, ao marcar, limpa a seleção daquela faceta — não soma com os
  demais valores. Os outros valores combinam em OR puro entre si (união).
- País, Equipamento: PILOTO DE REDESENHO — grade de tiles (3 colunas, 2 em telas ≤380px) em
  vez de lista de checkbox (`renderTileSectionBody` em app.js, `def.layout === "tiles"`,
  reaproveitado pelas duas facetas — só o ícone difere via `def.tileIcon(tagId)`, plugável por
  faceta). Cada tile: ícone em cima, label no meio, contagem embaixo em
  `--color-text-disabled` (mesmo token que as outras seções já usavam pra contagem —
  `--color-text-muted` não existe em DESIGN-TOKENS.md). Tile marcado ganha borda 2px
  `--color-accent`. Sem tile "Todos" — nenhum tile marcado = nenhum filtro ativo (equivalente
  ao "Todos" marcado da versão em lista). Mesma lógica de OR-união dos demais checkbox — só
  muda a apresentação.
  - País: ícone = EMOJI DE BANDEIRA (`COUNTRY_FLAG_EMOJI` em app.js, `country:*` -> caractere
    Unicode padrão, sem arquivo, sem licença). NÃO recolore por estado (emoji não herda
    `currentColor`) — a borda do tile já indica seleção sozinha, mesmo tratamento dos PNG de
    Equipamento (`.filter-tile__icon--emoji`, só `font-size`, sem regra de cor).
  - Equipamento: ícones reais em `icons/equipment/` (9 de 9 valores — todo tile tem ícone). 6 SVG
    (SVGRepo: forno, liquidificador, batedeira, micro-ondas; fonte não identificada:
    processador, sous vide) — `fill="currentColor"` no arquivo, injetados INLINE no DOM (não
    `<img src>`, senão currentColor não herda a cor do CSS). Recolorem com o estado do tile:
    `--color-text-disabled` parado, `--color-accent` selecionado. O texto do SVG fica EMBUTIDO
    como string em `EQUIPMENT_SVG_MARKUP` (app.js) — não é carregado via `fetch()`. Motivo: um
    `fetch()` é assíncrono, e abrir o modal antes dele terminar (ex.: usuário indo direto no
    filtro logo após o app carregar) deixava o tile sem ícone até uma re-renderização tardia —
    bug real, confirmado por screenshot, corrigido eliminando o fetch por completo. Os arquivos
    em `icons/equipment/*.svg` continuam existindo como fonte/atribuição; o texto embutido é
    mantido idêntico a eles, ignorando espaço em branco entre tags (checagem antes de cada
    commit que tocar nisso). 3 PNG (Icons8: air-fryer, panela de pressão, churrasqueira) —
    `<img src>` direto (sem essa corrida: o browser exibe assim que o arquivo chega, sem
    depender de JS) com `filter: invert(1)` (traço preto vira traço claro); NÃO recolorem no
    estado selecionado (limitação de raster — a borda do tile já indica seleção sozinha).
  - Créditos na tela de Minhas Receitas (buildIconCreditsEl em app.js): obrigatório (licença
    Icons8) + recomendado (SVG Repo), link de texto pra icons8.com e svgrepo.com, mais uma
    linha genérica pros 2 SVG de fonte não identificada (processador, sous vide) — tratados
    como exigindo atribuição por segurança até a origem ser confirmada.
- Ingrediente: chips removíveis (`--color-surface-elevated`, × em `--color-accent`) continuam
  iguais acima da grade; o antigo `<select>` de "+ adicionar" virou PILOTO DE REDESENHO — grade
  de tiles MAIS DENSA que País/Equipamento (`renderIngredientTileSectionBody` em app.js,
  `def.layout === "ingredient-tiles"`, função própria — não reaproveita `renderTileSectionBody`
  porque coexiste com os chips e não tem estado "selecionado" no próprio tile: um valor
  escolhido sai da grade e vira chip, nunca aparece nos dois lugares). Classes
  `.filter-tile-grid--dense`/`.filter-tile--dense` (4 colunas ≥380px, 3 em ≤380px — especificidade
  dobrada de propósito, ver comentário no CSS, senão a regra ≤380px de 2 colunas do
  `.filter-tile-grid` base vencia por ordem de declaração). Ícone = emoji por ingrediente
  (`INGREDIENT_EMOJI` em app.js), mesmo tratamento sem recolor de País — peixes sem emoji
  Unicode próprio (salmão, robalo, atum, linguado, dourado, anchova, bacalhau, badejo, tilápia)
  usam 🐟 genérico. 8 de 51 valores ficam SEM ícone (mandioca, iogurte, lentilha, grão-de-bico,
  molho de soja, repolho, damasco, abobrinha — label+contagem apenas, mesmo fallback seguro do
  Processador/Sous Vide em Equipamento). Continua combinando em AND entre si — única faceta com
  essa lógica (e com fallback OR na tela de resultados quando zera). Gengibre e curry NÃO
  aparecem nesta seção: existem só como `seasoning:*` (ver js/tags.js), não `ingredient:*` — a
  faceta só lê o prefixo `ingredient:`, então essas duas tags nunca foram opções aqui, com ou
  sem emoji.

A contagem de cada opção não-selecionada é sempre "quantos eu teria se também adicionasse
este" — universo restrito pelas OUTRAS facetas, nunca pela própria (mesma lógica que já existia
pro dropdown de Ingrediente, só reaproveitada).

Papel da proteína continua sendo a única seção de seleção única (lista de rádio).

Mudanças dentro do modal ficam em rascunho — só valem de fato ao tocar "Ver resultados";
"Cancelar" descarta tudo. "Papel da proteína" (Principal / Secundário / Tanto faz) substitui
as antigas abas "Foco da receita / Também leva / Todas".

"Limpar filtros" (texto sublinhado, `--color-text-secondary` — nunca `--color-accent` em texto
pequeno, falha WCAG AA) aparece dentro do modal só quando pelo menos 1 filtro está ativo. NÃO
aplica nem fecha o modal — zera só o rascunho (seções voltam a "Todos", rodapé recalcula) e
mantém o modal aberto; ainda precisa de "Ver resultados" (ou "Cancelar" pra desistir).

O resto da tela de categoria/busca (cards, dropdown de ordenação, toolbar) também é tema
escuro desde o Bloco 4 (via os tokens antigos redefinidos, ver seção abaixo) — o botão
"Filtros" e o modal continuam sendo os únicos a usar os tokens `--color-*` novos diretamente,
mas os valores finais renderizados são os mesmos em ambos os casos.

## Reskin escuro (Bloco 4)

O app inteiro é tema escuro agora — nenhuma tela remanescente na paleta clara. Caminho usado:
redefinir os VALORES dos 10 tokens antigos no `:root` de `css/style.css`, mantendo os NOMES
(`--bg`, `--bg-panel`, `--ink`, `--ink-soft`, `--gold`, `--line`, `--green`, `--red`,
`--radius`), sem tocar nos tokens `--color-*` novos. Isso re-temizou quase toda a tela antiga
de uma vez, já que ela consistentemente usava `var(--token)` em vez de cor hardcoded (só ~16
exceções pontuais, resolvidas uma a uma).

Equivalência 1:1 aplicada: `--bg`=`--color-bg`, `--bg-panel`=`--color-surface`,
`--ink`=`--color-text-primary`, `--ink-soft`=`--color-text-secondary`, `--gold`=`--color-accent`,
`--line`=`--color-border`, `--green`=`--color-success`, `--red`=`--color-error`. `--radius`
ficou em 14px (não forçado pra 20px — decisão em aberto, separada).

`--gold-soft` e `--shadow` foram REMOVIDOS do `:root` (não tinham 1 equivalente novo único):
- `--gold-soft` (19 usos) tinha 3 papéis, cada um resolvido pro token certo: borda
  padrão/estática -> `--color-border`; borda de hover/outline de foco -> `--color-accent-hover`
  (hover) ou `--color-accent` (foco, regra "Inputs:... foco --color-accent" do
  DESIGN-TOKENS.md); ícone de placeholder/vazio -> `--color-text-disabled`; fundo tingido
  suave (badge, marcador decorativo, aba ativa, hover de chip, CTA do card, pill de fallback)
  -> `rgba(214, 59, 32, 0.08)` (tom de `--color-accent` em baixa opacidade — decisão confirmada
  com o usuário, não existe token pronto pra isso).
- `--shadow` (5 usos de `box-shadow`) foi removido sem substituto: nenhum componente do Bloco
  2/3 tinha precedente de elevação em dark mode, e `--line`/`--color-border` já separa camadas
  sozinho (sombra escura sobre fundo escuro ficaria invisível de qualquer forma).

Achado importante durante a resolução: várias regras usavam `color: var(--gold)` em texto
PEQUENO (<18px) — `.icon-credits a`, `.btn-or-fallback`, `.subgroup-title`, `.recipe-title
.cat-chip`, `.recipe-card-cta`, `.tag-chip-link`, `.back-button`, `.recipe-page-section h4`,
`.cook-step-label`. Mapear direto pra `--gold`=`--color-accent` faria essas 9 regras virarem
ghost-text que falha WCAG AA no tamanho (a mesma regra já documentada pra "Mais categorias" na
home). Todas foram desviadas pra `--color-text-secondary` (ou `--color-text-primary` no caso
do `.recipe-card-cta`, que é uma CTA de ação real) em vez do mapeamento automático — bordas,
ícones e preenchimentos sólidos com texto claro em cima (`--ink`, ex.: número do passo,
chip selecionado, botão primário) não têm esse problema e usam `--gold`/`--color-accent`
normalmente.

~16 valores hardcoded fora do `:root` também resolvidos individualmente: 5×`#fff` + 1×`white`
(texto sobre preenchimento sólido) -> `--color-text-primary`; `rgba(163,118,44,0.08)` (gold
cru) -> mesmo tom de `--color-accent` tingido acima; `#f1e8d3`×2 (fundo de placeholder) ->
`--color-surface-elevated`; `#f6efdd`×2 (tips-box e hover de sugestão) ->
`--color-surface-elevated`; `#8f6624`×2 (hover mais escuro de dourado) -> `--color-accent-hover`.

Card de receita (`renderRecipeCard`) e card de coleção (`renderCollectionCard`) são funções
únicas reaproveitadas por toda tela que lista receitas/coleções — o reskin vale pra todas de
uma vez, sem duplicação.

## Critérios de aceite

- A home deve parecer limpa em telas de 360px a 430px.
- O usuário deve entender cada bloco em até 2 segundos.
- A listagem não deve parecer desktop adaptado.
- O usuário não deve ver 30 opções de filtro ao mesmo tempo.
- O fluxo deve reduzir indecisão, não aumentar.

Todo prompt de design/UI também precisa passar pelo checklist de Heurísticas de Nielsen em
`.claude/skills/product-navigation-ux/SKILL.md` (seção "Checklist de aceite — Heurísticas de
Nielsen") antes de ser considerado concluído.
