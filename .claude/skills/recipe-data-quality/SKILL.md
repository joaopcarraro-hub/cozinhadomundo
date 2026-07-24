---
name: recipe-data-quality
description: Auditar qualidade dos dados de receitas, tags, coleções, dificuldades, tempos, ingredientes, categorias duplicadas e inconsistências de taxonomia.
---

# Recipe Data Quality

Use esta skill para revisar arquivos de dados, tags e coleções do app de receitas.

## Objetivo

Encontrar inconsistências que prejudicam navegação, busca e decisão do usuário.

## Verificações obrigatórias

### Tags de dificuldade

Toda receita deve ter dificuldade derivável.

Se a receita tem campo difficulty, complexity ou similar, gerar uma tag:
- difficulty:facil
- difficulty:media
- difficulty:dificil

Labels de UI:
- Fácil
- Intermediária
- Avançada

### Tags de tempo

Toda receita deve ter tag de tempo derivável:
- time:ate-30-min
- time:ate-1h
- time:mais-de-1h
- time:preparo-longo

### Tags de proteína

protein:* só quando for foco real.

Se for ingrediente secundário, usar:
- contains:*
- ingredient:*

### course:principal

Revisar receitas com course:principal.

Remover de:
- técnicas
- bases
- molhos
- componentes
- preparos isolados

Substituir por:
- format:tecnica
- format:base
- format:componente
- format:molho

### Categorias duplicadas

Verificar duplicidade entre:
- Proteínas
- Por proteína

Deve existir apenas um grupo macro: Proteínas.

### Cozinhas

Brasil deve estar dentro de Países.

Não deve existir separação redundante entre Brasil e Países na home.

### Tags pesquisáveis

Termos comuns de usuário devem funcionar:
- sanduíche
- brócolis
- alho
- cebola
- ovo
- frango
- porco
- carne
- peixe
- massa

Se não houver tag formal, sugerir criar ou permitir filtro textual combinável.

### Nomes de receita em português (recipe.name)

Investigação completa em 2026-07-24 (398 receitas classificadas), 25 renomes aplicados. Regra
pra receita NOVA seguir a mesma linha:

Critério único: existe uma forma em português que já circula de verdade pra esse prato
específico, ou o nome é só vocabulário comum estrangeiro sem identidade própria além do que a
tradução já comunica? Se sim, traduzir. Se o nome É a identidade do prato (mesmo em português
culinário), manter.

Mantém no original, NUNCA traduzir:
- Nome próprio de prato tradicional específico (Carbonara, Feijoada, Coq au Vin, Ragù alla
  Bolognese, Moussaka, Bibimbap, Pad Thai) — é como o prato se chama, traduzir seria errado.
- Prato eponímico ou toponímico (Chateaubriand, Pavlova, Wiener Schnitzel, Saint-Honoré,
  Tornedor Rossini) — o nome é intraduzível por natureza.
- Termo técnico clássico francês (confit, suprême, velouté, béarnaise, hollandaise, meunière,
  poché, en papillote) — vocabulário internacional da cozinha, nunca traduzido, nem quando a
  palavra em si tem tradução óbvia (ex.: "sauce" na categoria molhos fica, mesmo significando
  "molho"). Categoria `molhos` inteira e boa parte de `contemporaneos`/`ovos-basicos` caem
  aqui.
- Nome fixo internacional reconhecido como unidade completa mesmo fora do idioma de origem
  (Chicken Tikka Masala, Tandoori Chicken, Butter Chicken, Eggs Benedict, Beef Brisket,
  Lobster Roll, Mac and Cheese) — mantido mesmo quando é literalmente descritivo, porque é
  assim que o prato é conhecido mundialmente, inclusive fora de contexto anglófono.
- Categoria regional/nacional inteira mantém consistência interna, mesmo com nomes
  tecnicamente descritivos no idioma de origem (ex.: toda a categoria `dinamarca` — Fiskesuppe,
  Klar Suppe, Kartoffelsalat — mantém o nome dinamarquês; traduzir só os "mais óbvios" quebraria
  a identidade regional que a categoria inteira existe pra dar). Vale pra `coreia`, `tailandia`,
  `japao`, `china`, `mexico`, `libano`, `marrocos`, `grecia`, `india` também.

Candidato a traduzir:
- Descrição genérica em língua estrangeira sem identidade de prato além do que a tradução já
  comunica (Apple Pie → Torta de Maçã, French Onion Soup → Sopa de Cebola Francesa).
- Grafia estrangeira de palavra que já existe em português dicionarizado (Risotto → Risoto,
  Croquetas → Croquetes) — não é bem tradução, é ortografia.
- Tradução parcial mantendo o termo estrangeiro-âncora quando o substantivo genérico tem
  equivalente PT natural (Chicken Cordon Bleu → Frango Cordon Bleu, Green Curry → Curry Verde)
  — decisão mais subjetiva do lote; ao aplicar num caso novo, prefira registrar a dúvida em vez
  de decidir sozinho se o caso não for claramente análogo aos já aprovados.

Se renomear recipe.name: o `id` é `slugify(recipe.name)` (TagModel) — renomear muda o slug e
afeta 3 sistemas chaveados por ele: Storage favoritas/feitas (`cardapio-state-v2`), últimas
receitas visitadas (`gusta-recentes-v1`), e URLs (#/receita/:id, #/cozinhar/:id, ?from=). Migrar
seletivamente: adicionar o par slug-antigo→slug-novo em `RENAME_SLUG_MAP` (js/storage.js,
compartilhado com o alias do Router) — nunca orfanar sem necessidade, o mecanismo já existe e é
barato de estender. Confirmar zero colisão de slug (script, não de cabeça) e que a derivação de
tag não mudou (recipe.name nunca entra em getRecipeTags — só ingredients/origin/steps/time/
difficulty/tags manual).

## Saída esperada

Ao auditar, retornar:
1. Problemas encontrados
2. Arquivos afetados
3. Correção recomendada
4. Prioridade: P0, P1, P2
5. Risco de quebrar comportamento atual
