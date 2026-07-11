---
name: product-navigation-ux
description: Planejar navegação, arquitetura de informação, grupos da home, páginas intermediárias, fluxos de decisão e priorização de UX para o app de receitas.
---

# Product Navigation UX

Use esta skill para decisões de navegação, arquitetura de informação e fluxo de decisão do produto.

## Proposta do produto

O app deve reduzir a indecisão de quem quer cozinhar.

Não competir com Google, YouTube ou blogs em quantidade.

Competir em:
- curadoria
- clareza
- decisão rápida
- execução guiada

## Estrutura de navegação correta

Home:
- grandes caminhos

Página de grupo:
- opções dentro daquele caminho

Página de coleção:
- receitas e refinamentos

Página da receita:
- execução

## Nova home

A home deve ter:
1. Fundamentos
2. Proteínas
3. Cozinhas do mundo
4. Por tempo
5. Por dificuldade

Não mostrar subcategorias diretamente na home.

## Páginas intermediárias

Cada bloco da home abre uma página do grupo.

Exemplos:
#/grupo/fundamentos
#/grupo/proteinas
#/grupo/cozinhas
#/grupo/tempo
#/grupo/dificuldade

A página de grupo deve ter busca contextual escopada àquele grupo — "opções" inclui tanto as
categorias/coleções do grupo (por nome) quanto receitas do grupo que batem em tag de
ingrediente, mostradas numa seção separada. Nunca traz opção nem receita de outro grupo.

## Ordem de decisão

A navegação deve seguir:
1. O usuário escolhe um caminho macro.
2. Escolhe uma opção dentro do caminho.
3. Refina se necessário.
4. Abre uma receita.
5. Cozinha.

## Princípio anti-overwhelm

Não mostrar todas as possibilidades ao mesmo tempo.

Dentro de uma coleção (país, proteína, tempo, dificuldade, fundamentos), o refino é uma
barra de facetas em dropdowns — País, Complexidade, Tempo, Equipamento, Ingrediente, Papel da
proteína — que filtra IN-PLACE (sem trocar de rota). Cada dropdown só lista os valores presentes
no resultado atual, com contagem, e nada vem pré-selecionado. Ingrediente é a única faceta de
múltipla seleção. Os valores selecionados combinam em AND entre si (a receita precisa conter
todos). Se a combinação atual resultar em zero receitas, a UI oferece um fallback pontual para
OR (qualquer um dos selecionados), mantendo as demais facetas ativas (País, Complexidade,
Tempo, Equipamento, Papel da proteína) aplicadas normalmente em AND — o fallback nunca ignora os
outros filtros. As outras facetas são de seleção única — incluindo Equipamento, que mesmo com
dado multi-valorado por trás (uma receita pode ter forno E air-fryer) só filtra por um valor
escolhido por vez, sem AND/OR/fallback (isso é exclusivo de Ingrediente).

Proteínas usam um dropdown extra, "Papel da proteína": Principal / Secundário / Tanto faz
(default). Isso substituiu o antigo conceito de abas "Foco da receita / Também leva / Todas".

## Critérios de aceite

- A home deve ficar curta.
- O usuário deve saber onde clicar.
- A busca contextual não deve misturar níveis.
- Categorias duplicadas devem ser eliminadas.
- Brasil deve entrar dentro de Cozinhas do mundo.
- Tempo e dificuldade devem existir como caminhos próprios.
