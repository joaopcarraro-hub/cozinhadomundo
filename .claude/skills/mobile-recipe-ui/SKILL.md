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

## Barra de facetas

Coleções (país, proteína, tempo, dificuldade, fundamentos) usam uma barra de dropdowns lado
a lado, que quebram linha em telas estreitas (não usar scroll horizontal): País,
Complexidade, Tempo, Equipamento, Ingrediente, Papel da proteína (só em coleções de proteína).

Cada dropdown lista só os valores presentes no resultado atual, com contagem, e recalcula os
outros ao mudar. Nada pré-selecionado por padrão. Ingrediente é multi-seleção: os valores
escolhidos viram chips removíveis acima do dropdown de "+ adicionar"; as demais facetas
continuam de seleção única — incluindo Equipamento, que filtra por um valor por vez mesmo o
dado por trás sendo multi-valorado (uma receita pode ter forno e air-fryer ao mesmo tempo).

Selecionar um filtro atualiza a lista na mesma página (nunca navega pra outra rota).

"Papel da proteína" (Principal / Secundário / Tanto faz) substitui as antigas abas "Foco da
receita / Também leva / Todas".

Um botão de texto "Limpar filtros" (área de toque de 44px, sem parecer outro dropdown) aparece
logo abaixo da barra só quando pelo menos 1 faceta está ativa — nunca no estado default, pra
não poluir a view limpa.

## Critérios de aceite

- A home deve parecer limpa em telas de 360px a 430px.
- O usuário deve entender cada bloco em até 2 segundos.
- A listagem não deve parecer desktop adaptado.
- O usuário não deve ver 30 opções de filtro ao mesmo tempo.
- O fluxo deve reduzir indecisão, não aumentar.

Todo prompt de design/UI também precisa passar pelo checklist de Heurísticas de Nielsen em
`.claude/skills/product-navigation-ux/SKILL.md` (seção "Checklist de aceite — Heurísticas de
Nielsen") antes de ser considerado concluído.
