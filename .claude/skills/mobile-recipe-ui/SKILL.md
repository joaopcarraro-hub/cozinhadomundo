---
name: mobile-recipe-ui
description: Revisar e melhorar UI mobile-first de cards, home, páginas de grupo, listagens, filtros, chips, busca e página da receita.
---

# Mobile Recipe UI

Use esta skill quando o trabalho envolver interface mobile do app de receitas.

## Princípio central

A interface deve ajudar o usuário a decidir rápido o que cozinhar.

Mobile primeiro. Desktop depois.

## Home

A home deve ser simples e guiada.

Mostrar apenas blocos macro:
- Fundamentos
- Proteínas
- Cozinhas do mundo
- Por tempo
- Por dificuldade

Não mostrar todas as subcategorias na home.

Cada bloco deve ser um card/banner retangular com:
- título
- descrição curta
- área de toque grande
- visual limpo
- sem excesso de chips ou contadores

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

## Critérios de aceite

- A home deve parecer limpa em telas de 360px a 430px.
- O usuário deve entender cada bloco em até 2 segundos.
- A listagem não deve parecer desktop adaptado.
- O usuário não deve ver 30 opções de filtro ao mesmo tempo.
- O fluxo deve reduzir indecisão, não aumentar.
