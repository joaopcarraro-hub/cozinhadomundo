---
name: cooking-taxonomy-architect
description: Revisar e estruturar taxonomia de receitas, tags, coleções, proteínas principais, ingredientes secundários, filtros e navegação culinária.
---

# Cooking Taxonomy Architect

Use esta skill quando o trabalho envolver categorias, tags, coleções, filtros, países, proteínas, tipos de prato, dificuldade, tempo ou estrutura de navegação do app de receitas.

## Princípio central

O app não é apenas um catálogo de receitas. Ele deve ajudar o usuário a decidir o que cozinhar sem se perder no excesso de informação.

A taxonomia deve separar:

1. O que a receita é.
2. O que a receita leva.
3. Como a receita é usada no cardápio.
4. Como o usuário pode encontrá-la.

## Regras obrigatórias

### protein:*

Use protein:* apenas quando a proteína for foco real da receita.

Exemplos corretos:
- Porchetta -> protein:suino
- Costelinha -> protein:suino
- Bife Wellington -> protein:boi
- Omelete -> protein:ovo
- Moqueca de peixe -> protein:peixe

Exemplos incorretos:
- Croque Monsieur não deve ser foco de suíno.
- Tortellini com recheio de porco não deve ser foco de suíno.
- Carbonara não deve ser foco de ovo.
- Bolo não deve ser foco de ovo.

Para ingrediente presente, usar:
- contains:suino
- contains:ovo
- ingredient:bacon
- ingredient:presunto
- ingredient:guanciale
- ingredient:ovo

### Camadas de tags

Sempre que possível, estruturar receitas com:

primaryTags: identidade principal da receita.
secondaryTags: ingredientes relevantes, mas não centrais.
searchTags: termos úteis para busca, mas que não devem poluir filtros.

### Modal de filtros em acordeão (países, proteínas e qualquer coleção — Bloco 3)

Todas as coleções (países, proteínas, tempo, dificuldade, fundamentos) usam o MESMO modal de
filtros em acordeão (substituiu a antiga barra de dropdowns sempre-visível — ver
`.claude/skills/mobile-recipe-ui/SKILL.md` pro detalhe visual), refinando in-place (sem navegar
de rota, sem camadas sequenciais/funil, mudanças em rascunho até "Ver resultados"):

- País, Complexidade, Tempo, Equipamento, Proteína, Refeição, Tipo de prato: OR PURO entre os
  valores da MESMA faceta (união — País = Itália + Alemanha mostra receitas de qualquer um dos
  dois). Nunca precisa de fallback aqui, porque OR nunca zera ao adicionar mais um valor.
  Equipamento é multi-valorado por trás (uma receita pode ter vários equipment: simultaneamente,
  ex: forno E air-fryer) — a faceta já reflete isso naturalmente, sem tratamento especial.
  Derivado de `steps` (não de `ingredients`) via data/derivation-dict.js (EQUIPMENT). Refeição
  usa `course:` (5 valores: principal, entrada, acompanhamento, sobremesa, café da manhã) e
  Tipo de prato usa `dish_type:` (12 valores em uso) — ambas já existiam como tags (injetadas
  por padrão de categoria em `js/tagmodel.js` pra maioria dos catId, mais tags manuais por
  receita em casos como `contemporaneos`), só ganharam faceta de filtro nesta rodada.
  Complexidade/Tempo/Tipo de prato usam checkbox em lista, com "Todos" como item especial que
  limpa a faceta (não soma com os demais) — Tipo de prato foi pra lista por ter muitos valores
  textuais, não poucos/iconáveis. Equipamento, Proteína e Refeição são grade de tiles
  (ícone/label/contagem, Proteína e Refeição só label+contagem por ora — ícone é rodada
  futura), mesma lógica de estado, sem tile "Todos" (nenhum tile marcado = nenhum filtro
  ativo). Ver `.claude/skills/mobile-recipe-ui/SKILL.md`.
- Ingrediente é a única faceta com combineMode "and" — os valores selecionados combinam em AND
  entre si (a receita precisa conter todos). Se a combinação atual resultar em zero receitas,
  a UI oferece um fallback pontual para OR (qualquer um dos selecionados), mantendo as demais
  facetas ativas (País, Complexidade, Tempo, Equipamento, Proteína, Refeição, Tipo de prato,
  Papel da proteína) aplicadas normalmente — o fallback nunca ignora os outros filtros.
- Proteína (protein:, NOVA — não confundir com Papel da proteína abaixo): filtra QUAL proteína
  (Frango, Boi, Suíno, Ave, Cordeiro, Peixe, Frutos do Mar, Ovo), disponível em QUALQUER
  coleção/busca, não só dentro de um hub de proteína — eixo completamente independente de
  Papel da proteína (que decide FOCO/SECUNDÁRIO dentro de um hub já escolhido). As duas
  coexistem sem conflito: Proteína filtra por tag `protein:*` via matchesGroupedTags (igual
  qualquer outra faceta); Papel da proteína filtra por qual POOL de receitas
  (basePrimary/baseRelated) está em uso dentro do hub atual — são eixos ortogonais que se
  combinam em AND normalmente (ex.: dentro de Suínos, Proteína=Suíno + Papel=Principal é só
  redundante, não quebra nada; Proteína=Frango + Papel=Principal dentro de Suínos tende a zerar,
  comportamento esperado de AND cruzado).
- Papel da proteína (só aparece em coleções de proteína) — ver seção própria abaixo,
  inalterada por Proteína.

ENTRE facetas diferentes sempre é AND, mesmo quando a faceta individual é OR por dentro — ex.:
País=Itália+Alemanha E Equipamento=Forno é a interseção do OR de país com o equipamento, nunca
OR entre tudo. matchesGroupedTags já faz isso sozinho pra qualquer prefixo que não seja
ingredient:/seasoning: (agrupa por prefixo, OR dentro do grupo, AND entre grupos) — nenhuma
lógica nova foi criada pra generalizar as facetas OR (País/Complexidade/Tempo/Equipamento/
Proteína/Refeição/Tipo de prato), só GENERIC_FACET_DEFS ganhou `multi: true` + `combineMode:
"or"` em cada uma.

"Restrições" (`diet:`) foi MEDIDA mas não virou faceta nesta rodada: cobertura de 99/398
receitas (24,9%) e um ÚNICO valor em uso (`diet:vegetariana`) — abaixo do limiar de utilidade
combinado com o usuário (30%), e um valor só não justificaria uma seção própria no acordeão
(viraria um checkbox binário isolado). Fica registrado como pendência de expansão de dados: se
`diet:vegana`/outros valores forem adicionados e a cobertura subir, reavaliar.

Cada seção do acordeão lista só os valores presentes no resultado ATUAL (já filtrado pelas
outras facetas do rascunho), com contagem. Nada vem pré-selecionado — o default é sempre
"todos".

Um botão "Limpar filtros" aparece dentro do modal só quando pelo menos 1 faceta está ativa
(nunca no estado default) e reseta todas de uma vez — País, Complexidade, Tempo, Equipamento,
Proteína, Refeição, Tipo de prato, Ingrediente e Papel da proteína. Zera só o RASCUNHO (não aplica, não fecha o modal) — o rodapé
"Ver resultados (N)" recalcula pra contagem sem filtro nenhum, e o usuário ainda precisa tocar
"Ver resultados" (ou "Cancelar" pra desistir de tudo, inclusive da limpeza).

### Papel da proteína

Substitui o antigo conceito de abas "Foco da receita / Também leva / Todas". É uma seção de
seleção única (lista de rádio, dentro do modal de filtros) com 3 opções:
- **Principal** — casa `protein:X` (a proteína é o foco real da receita).
- **Secundário** — casa `contains:X` (a proteína aparece, mas não é o foco).
- **Tanto faz** — default, mostra todas (principal + secundário juntas).

Aplicar para aves/frango, carnes bovinas, suínos, peixes, frutos do mar, ovos e cordeiro se existir.

### course:principal

course:principal só deve ser usado quando a receita pode ser servida como prato principal.

Não usar para:
- técnicas
- bases
- molhos
- componentes
- preparos isolados

Usar:
- format:tecnica
- format:base
- format:componente
- format:molho
- format:preparo-basico

### Vegetariana

Não usar protein:vegetariana.
Usar diet:vegetariana ou diet:vegana.

## Home nova (Bloco 2, Fase 2.2)

A home não mostra mais os 5 grupos macro diretamente. Mostra 4 tiles grandes (Massas,
Proteínas, Navegar por Países, Sobremesas) + uma entrada pequena "Mais categorias" (leva pro
hub Fundamentos). Tempo e Dificuldade continuam existindo como grupos/rotas, só sem link
direto na home por ora.

Cada grupo continua tendo sua própria página intermediária (#/grupo/:id), independente de
estar linkada na home ou não — a página de grupo em si não mudou.

Card de opção da grade (renderCollectionCard em app.js, compartilhado por todos os hubs) mostra
só "N receitas" — sem split "X de foco · Y no total" e sem "X/Y feitas". O split de foco/total
era resíduo do antigo sistema de Foco/Também leva; hoje esse refino vive só no dropdown "Papel
da proteína", um clique depois, dentro da categoria.

### hideFromGrupoGrid (esconder coleção da grade sem mudar taxonomia)

Pra tirar uma coleção da grade de um hub sem afetar sua taxonomia (grupo, tags, escopo de
busca), adicione `hideFromGrupoGrid: true` na entrada de `js/collections.js` — NUNCA mude o
campo `.group` pra isso. `.group` continua sendo a fonte de verdade pra `getCatIdToGroup()`
(escopo da busca contextual do hub); `hideFromGrupoGrid` só afeta o que aparece no grid
visual (`renderGrupo` em app.js). Usado em massas/sobremesas-classicas (Bloco 2) pra tirá-las
da grade de Fundamentos, já que agora só são alcançáveis via tile da home.

## Busca

Busca em páginas de grupo deve ficar escopada àquele grupo — mas "opções" inclui tanto as
categorias/coleções do grupo (por nome) quanto receitas do grupo que batem em tag de
ingrediente (ingredient:/contains:), mostradas numa seção separada. Nunca traz opção nem
receita de outro grupo.

Busca global deve priorizar:
1. Tags formais
2. Filtros textuais combináveis
3. Receitas diretas

Termos como alho, cebola, brócolis e sanduíche devem funcionar como tags formais ou filtros textuais combináveis.

## Critério de qualidade

Sempre perguntar:
- Essa receita é isso?
- Ou ela só leva isso?
- Essa tag ajuda o usuário a decidir?
- Essa tag polui a navegação?
- Essa coleção está guiando ou confundindo?
