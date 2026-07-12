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

### Barra de facetas (países, proteínas e qualquer coleção)

Todas as coleções (países, proteínas, tempo, dificuldade, fundamentos) usam a MESMA barra de
filtros facetada, refinando in-place (sem navegar de rota, sem camadas sequenciais/funil):

- País
- Complexidade
- Tempo
- Equipamento é seleção única (dropdown, como País/Complexidade/Tempo) — mesmo o dado por trás
  sendo multi-valorado (uma receita pode ter vários equipment: simultaneamente, ex: forno E
  air-fryer), o dropdown filtra por existência de UM valor escolhido por vez, sem lógica de
  AND/OR/fallback (isso é exclusivo de Ingrediente, ver abaixo). Derivado de `steps` (não de
  `ingredients`) via data/derivation-dict.js (EQUIPMENT).
- Ingrediente é a única faceta de múltipla seleção. Os valores selecionados combinam em AND
  entre si (a receita precisa conter todos). Se a combinação atual resultar em zero receitas,
  a UI oferece um fallback pontual para OR (qualquer um dos selecionados), mantendo as demais
  facetas ativas (País, Complexidade, Tempo, Equipamento, Papel da proteína) aplicadas
  normalmente em AND — o fallback nunca ignora os outros filtros.
- Papel da proteína (só aparece em coleções de proteína)

Cada dropdown lista só os valores presentes no resultado ATUAL (já filtrado pelas outras
facetas ativas), com contagem. Nada vem pré-selecionado — o default é sempre "todos".

Um botão "Limpar filtros" aparece na barra só quando pelo menos 1 faceta está ativa (nunca no
estado default) e reseta todas de uma vez — País, Complexidade, Tempo, Equipamento, Ingrediente
e Papel da proteína — reaproveitando o mesmo pipeline de reset que cada dropdown já dispara
individualmente.

### Papel da proteína

Substitui o antigo conceito de abas "Foco da receita / Também leva / Todas". É um dropdown
com 3 opções:
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
