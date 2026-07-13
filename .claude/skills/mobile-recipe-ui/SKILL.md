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

Tiles/entrada "Mais categorias"/barra inferior usam os tokens novos (docs/DESIGN-TOKENS.md).
O resto do app (página de categoria, dropdowns, cards de receita) mantém a paleta clara antiga
até seus próprios blocos de redesign — inconsistência visual esperada nesta fase de transição.

## Barra de navegação inferior

Fixa, 5 abas (Home / Pesquisar / Minhas Receitas / Preparos / Lista de Compras), fundo
`--color-bg-secondary`, ícones outline monocromáticos. Aba ativa: ícone + label em
`--color-accent`. Inativas: `--color-text-disabled`. Sem FAB — não é um padrão deste app.

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
- País, Complexidade, Tempo: lista de CHECKBOX (`accent-color: --color-accent`), com "Todos"
  como item especial no topo que, ao marcar, limpa a seleção daquela faceta — não soma com os
  demais valores. Os outros valores combinam em OR puro entre si (união).
- Equipamento: PILOTO DE REDESENHO — grade de tiles (3 colunas, 2 em telas ≤380px) em vez de
  lista de checkbox. Cada tile: ícone real em cima (arquivo, não emoji — ver abaixo), label no
  meio, contagem embaixo em `--color-text-disabled` (mesmo token que as outras seções já
  usavam pra contagem — `--color-text-muted` não existe em DESIGN-TOKENS.md). Tile marcado
  ganha borda 2px `--color-accent`. Sem tile "Todos" — nenhum tile marcado = nenhum filtro
  ativo (equivalente ao "Todos" marcado da versão em lista). Mesma lógica de OR-união dos
  demais checkbox — só muda a apresentação (ver renderTileSectionBody em app.js, def.layout
  === "tiles").
  - Ícones reais em `icons/equipment/` (9 de 9 valores — todo tile tem ícone). 6 SVG
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
- Ingrediente: chips removíveis (`--color-surface-elevated`, × em `--color-accent`) + select de
  "+ adicionar", combinando em AND entre si — única faceta com essa lógica (e com fallback OR
  na tela de resultados quando zera).

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

O resto da tela de categoria/busca (cards, dropdown de ordenação, toolbar) continua na paleta
clara antiga — só o botão "Filtros" e o modal usam os tokens novos.

## Critérios de aceite

- A home deve parecer limpa em telas de 360px a 430px.
- O usuário deve entender cada bloco em até 2 segundos.
- A listagem não deve parecer desktop adaptado.
- O usuário não deve ver 30 opções de filtro ao mesmo tempo.
- O fluxo deve reduzir indecisão, não aumentar.

Todo prompt de design/UI também precisa passar pelo checklist de Heurísticas de Nielsen em
`.claude/skills/product-navigation-ux/SKILL.md` (seção "Checklist de aceite — Heurísticas de
Nielsen") antes de ser considerado concluído.
