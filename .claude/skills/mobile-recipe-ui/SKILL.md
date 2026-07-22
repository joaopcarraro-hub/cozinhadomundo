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

## Minhas Receitas (aba da barra inferior)

Deixou de ser placeholder — é uma tela real (`renderMinhasReceitas` em app.js), com 2 abas em
memória (sem navegação de rota): Favoritas (`Storage.getAllFavorites()`) e Já Feitas
(`Storage.getAllMade()`). Alternar aba só troca a variável de módulo `minhasReceitasTab` e
re-renderiza a mesma tela — não empilha histórico nem muda `location.hash`. Cada aba lista com
`renderRecipeCard` (sem adaptação nenhuma, já funcionava standalone antes disso) e tem sua
própria mensagem de vazio; nenhuma aba mostra contador comparativo com a outra.

As antigas rotas standalone `#/favoritos` e `#/historico` (e `Router.toFavoritos`/
`toHistorico`) foram REMOVIDAS — não tinham nenhum link visível apontando pra elas (só
acessíveis digitando a URL direto), e depois desta tela existir teriam virado caminho
redundante mostrando os mesmos dados de novo. `LIST_VIEWS`/`renderListView` também saíram do
app.js. Acessar `#/favoritos` ou `#/historico` agora cai no fallback padrão do router (`{ name:
"home" }`), mesmo tratamento que `#/quero-fazer` já recebe.

"Histórico de receitas vistas" (visita real à tela de receita, distinto de "já feita") não
existe — a antiga entrada `historico` de `LIST_VIEWS` só reaproveitava `Storage.getAllMade()`
com outro rótulo, sem nenhum rastreamento de visita de verdade. Construir isso de verdade exige
infraestrutura nova (gravar cada visita à tela de receita) — fora do escopo desta rodada,
fica pra quando for aprovado como tarefa própria.

Créditos de ícones (`buildIconCreditsEl`) ficam no fim da tela, numa seção visualmente separada
da listagem por um divisor (`.icon-credits` ganhou `border-top`) — evita misturar crédito de
terceiros com o conteúdo de verdade da tela, provisório até o app ter um rodapé fixo.

## Lista de Compras (aba da barra inferior)

Deixou de ser placeholder — Fase 1 trouxe a visão "Por receita" e Fase 2 trouxe "Geral"
(`renderListaCompras` em app.js, as 2 abas já funcionam). Botão "Adicionar à lista de compras"
na tela de receita (`.action-btn`, 3ª ação —
ver seção de ações acima) adiciona TODAS as entries de `ingredientsStructured` de uma vez,
capturando o `portionMultiplier` atual do stepper (mesmo padrão de `currentRatio()` que o
botão "Começar preparo" já usava). Clicar de novo com a receita já na lista só ressincroniza
(porção/entries/`addedAt` atualizados) — não existe remover 1 receita pela tela de receita
nesta fase, só "Limpar lista" inteira dentro da própria Lista de Compras (remove tudo:
receitas E o registro de comprados, sem confirmação — mesmo padrão sem `window.confirm` já
usado no "✕" de remover preparo).

Schema `gusta-lista-compras-v1` segue o MESMO padrão de 2 níveis de `gusta-preparos-v1`
(`SHOPPING_LIST_MIGRATIONS` mapa vazio desde a v1, validação individual por receita que
descarta só a entrada malformada) — projetado com migração desde o início, não como remendo
depois. `selectedEntries` guarda só os ÍNDICES das linhas de `ingredientsStructured`
escolhidas, nunca copia texto/qty/unit — a exibição sempre resolve contra a receita de
verdade, reaproveitando `formatStructuredItem` (mesma função do multiplicador de porções)
pra escalar pelo `portionMultiplier` salvo.

"Comprado" NÃO é por receita: `boughtKeys` é um registro único e compartilhado, chaveado por
"item normalizado + unit" (`normalizeShoppingKey` em storage.js — trim + lowercase do texto do
item, concatenado com a unidade). Marcar um ingrediente numa receita reflete em QUALQUER outra
seção que tenha o mesmo item+unit, mesmo vindo de uma receita diferente — o checkbox nunca
guarda estado próprio da receita. Cada marcação re-renderiza a tela inteira
(`renderListaCompras()` de novo), mesmo princípio simples já usado em `renderMinhasReceitas`
ao trocar de aba, garantindo que toda ocorrência do mesmo ingrediente atualize junto.

Toggle no topo (Por receita / Geral, `.shopping-list__tabs`, mesmo padrão visual das abas de
Minhas Receitas) alterna a variável de módulo `listaComprasView` e re-renderiza — mesmo
princípio de `minhasReceitasTab`.

Visão "Geral" (Fase 2, `buildShoppingListGroups` em app.js): percorre TODAS as entries
selecionadas de TODAS as receitas da lista e agrupa por (item normalizado + família de
unidade, quando a unidade tem família — ou item+unidade exata, quando não tem), somando
qty/qtyRange já escalado pelo `portionMultiplier` de CADA receita. Famílias:
- Peso (grama/quilograma): conversão trivial por potência de 1000 (`UNIT_TO_BASE_FACTOR`).
- Volume (mililitro/litro/colher-sopa/colher-cha/xícara): tabela fixa de equivalência
  culinária (colher-sopa=15ml, colher-cha=5ml, xícara=240ml, litro=1000ml) — soma tudo
  convertido pra mililitro, depois formata de volta pra litro se o total passar de 1000ml
  (nunca mostra "3000 ml", mostra "3 litros").
- Contagem (dente/folha/talo/etc. + itens sem unidade mas com número, tipo "2 cebolas"): soma
  direta, SEM conversão nenhuma, só dentro do mesmo par item+unidade exato — a família entra
  na chave de agrupamento, então peso e volume NUNCA se misturam, mesmo com o item de nome
  idêntico (2 linhas separadas nesse caso, nunca consolidado — densidade não é confiável,
  decisão da investigação anterior).
Itens com `qtyRange` somam limite inferior e superior separadamente (ex.: "8-10" + "2" vira
"10-12") — funciona porque todo grupo acumula lo/hi desde o início (item exato: lo=hi=valor),
sem tratamento especial pra faixa. Grupo sem quantidade numérica nenhuma (~28% do acervo, ex.
"a gosto") aparece só como nome + "usado em: Receita A, Receita B", sem número (nunca inventa
quantidade). Formatação reaproveita `formatStructuredItem` com um item sintético (o total já
somado, `ratio=1`) — mesma função do multiplicador de porções, sem duplicar lógica de
pluralização/fração.

Checkbox "comprado" na visão Geral representa TODOS os pares item+unit originais daquele
grupo de uma vez (`pairs` em cada grupo) — marcado só quando todos já estão em `boughtKeys`;
clicar alterna todos juntos via `Storage.isShoppingItemBought`/`toggleShoppingItemBought`
(as MESMAS funções da visão Por receita, nunca um estado próprio) — testado marcando um item
compartilhado (mesma unidade em 2 receitas) na visão Geral e confirmando refletido nas 2
seções da visão Por receita, e vice-versa.

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
- metadados com ícone outline + valor (não chip/pill)
- sem CTA nem ações próprias — o card inteiro é a área de toque
- área de toque confortável

### Redesenho (docs/DESIGN-TOKENS.md) — card sem ações nem CTA

`renderRecipeCard` (app.js) é a função ÚNICA compartilhada por 5 pontos de chamada — 4 telas
distintas: `renderCategory` (categoria/coleção, 2 call sites por causa dos 2 modos de
ordenação), `renderBusca` (busca global), `renderGrupo` (resultado de busca por ingrediente
dentro de um hub) e `renderMinhasReceitas` (aba Minhas Receitas, ver seção própria abaixo).
Mudar a função muda as 5 de uma vez, sem duplicação.

Removido do card: os ícones de ação antigos (já feito ✓ / favoritar ★ / quero fazer 🔖,
`.recipe-card-actions`) e a barra de CTA "Ver receita" (`.recipe-card-cta`) como elemento
próprio. O card inteiro continua sendo a área de toque (mesmo
`card.addEventListener("click", ...)` de sempre).

"Quero Fazer" foi REMOVIDO DO APP INTEIRO (não só do card) — não existe mais em nenhuma tela.
Removido de: `LIST_VIEWS["quero-fazer"]` e o bloco `wantBtn`/`isWant` inteiro de `renderReceita`
(app.js); rota `quero-fazer` e a função morta `toQueroFazer` — zero callers antes mesmo da
remoção — (router.js); campo `wantToCook` de ambos os ramos de `load()` e os acessores
`isWantToCook`/`toggleWantToCook`/`getAllWantToCook` do export `window.Storage` (storage.js).
Acessar `#/quero-fazer` agora cai no fallback padrão do router (`{ name: "home" }`), sem erro.
A tela de receita (`renderReceita`) e o card ficaram com só 2 ações: Marcar como feita e
Favoritar. (Atualização Lista de Compras, Fase 1: a tela de receita ganhou uma 3ª ação,
"Adicionar à lista de compras" — `.action-btn` reaproveitado, mesmo formato — mas só ali, o
card continua com as mesmas 2 de sempre, sem 3ª ação.)

Favoritar virou coração (`HEART_ICON_SVG`, definido perto de `iconSvg()` em app.js) — contorno
vazio `--color-text-disabled` parado, preenchido `--color-accent` quando favoritado. É um ícone
"multi-estado" que não usa o sistema genérico `ICON_SVG_ATTRS`/`ICONS` (que tem `fill="none"`
fixo): o preenchimento troca via classe CSS (`.recipe-heart-icon` base + `.is-favorite` no
ancestral controla `fill`/`stroke` via seletor descendente), não via troca de ícone.

No card, o coração é um botão isolado sem texto (`.recipe-card__heart`), sempre no mesmo formato
— só a cor do preenchimento muda com `.is-favorite`.

Na tela de receita (`renderReceita`), o botão de favoritar troca de ESTRUTURA inteira ao
alternar, não só de cor (`renderFavBtn(fav)` em app.js recria `className`+`innerHTML` do
elemento a cada clique):
- Não favoritado: pill igual à de "Marcar como feita" — reaproveita a própria classe
  `.action-btn` (mesma borda/padding/formato, sem inventar uma classe nova), contendo o coração
  em contorno + texto "Favoritar" dentro (`.action-btn` ganhou `display: inline-flex;
  align-items: center; gap: 8px` pra alinhar ícone+texto lado a lado — antes só tinha texto).
- Favoritado: a pill inteira some (troca pra `.recipe-page-heart is-favorite`, sem
  `.action-btn`) — sobra só o ícone preenchido `--color-accent`, sem borda/fundo, mesmo
  tratamento visual do coração do card.
`aria-label` ("Favoritar" / "Favoritado") atualizado a cada troca, nos dois estados, mantendo
acessibilidade pra leitor de tela mesmo quando não há texto visível. O botão "Marcar como feita"
ao lado (`.action-btn`/`.active`) não participa dessa troca de estrutura — continua sempre pill,
só muda o preenchimento via `.active` como antes.

Ordem dos 2 botões na tela de receita: Favoritar primeiro (esquerda), "Marcar como feita" depois
(direita) — só ordem de `appendChild` em `renderReceita`, nenhuma lógica muda.

No card, o coração fica no canto superior direito (mesmo slot onde antes ficava o chevron —
`chevronRight`/`.recipe-card__chevron` foram REMOVIDOS, não existe mais afordance de seta).
Por estar dentro de um card inteiramente clicável, o clique no coração precisa de
`e.stopPropagation()` ANTES de alternar o favorito, senão o clique vaza pro
`card.addEventListener("click", ...)` e navega pra receita por engano. Verificado via teste de
hash: clicar no coração NÃO muda `location.hash`; clicar em qualquer outra parte do card
(título, descrição, header perto do coração) muda normalmente.

Metadados (tempo, complexidade, porções — nessa ordem) usam ícone outline monocromático + valor
(`.recipe-meta-item`, `clock`/`gauge`/`bowl` no objeto `ICONS` compartilhado do topo do arquivo
— mesmo sistema stroke-based `ICON_SVG_ATTRS` da nav inferior/tiles da home). `--color-text-
disabled` pro ícone, `--color-text-secondary` pro valor — mesmo par de tokens já usado nos
metadados do modal de filtro. A LINHA de metadados (`.recipe-meta`) fica no RODAPÉ do card,
depois da descrição e das tags — full-width, alinhada à esquerda (`justify-content: flex-start`,
sem `width`/`margin-left` customizado). Uma rodada anterior tentou mover pra logo abaixo do
título ocupando só a metade direita (`width: 50%`) — não ficou bom visualmente e foi revertida
de volta pra posição original de rodapé. Imagem, título, origem/país e chips de tag (país/tipo)
não mudaram.

### Ingredientes: EXPANDIDA por padrão (revertido de novo — acordeão reaproveitado do modal de filtro)

A seção de ingredientes na tela de receita abre EXPANDIDA por padrão (sempre — não lembra
estado entre visitas; `ingSection.className` já inclui `is-open` desde a criação do elemento).
Já foi FECHADA por padrão numa rodada anterior — revertido de volta porque o botão de
mostrar/ocultar ficava discreto demais (fácil de não notar que existia). Dessa vez o botão
ganhou uma classe própria, `.ingredients-toggle`, sobreposta ao header genérico do acordeão só
nesta instância (borda grossa em `--color-accent` + fundo `--color-surface-elevated`, texto
continua em `--ink`/negrito — nunca `--color-accent` no texto, 14.7px fica abaixo do limiar de
18px+ pra ghost-text, mesma regra de sempre; o acento fica só na borda/chevron) — bem mais
visível que o header padrão do modal (`border:none; background:none`), que é discreto DE
PROPÓSITO lá (é repetido várias vezes na mesma tela) mas não deveria ser aqui (aparece 1 vez só,
precisa ser notado). O rótulo também é dinâmico agora: "Ocultar ingredientes (N)" quando aberto,
"Ver ingredientes (N)" quando fechado — antes era sempre o mesmo texto.

Continua reaproveitando literalmente as MESMAS classes CSS do acordeão do modal de filtro
(`.filter-section`/`.filter-section__header`/`.filter-section__label`/`.filter-section__count`/
`.filter-section__chevron`/`.filter-section__body`, ver "Modal de filtros em acordeão" abaixo) —
chevron que gira 180° quando `.is-open`, corpo escondido via `display:none`/mostrado via
`display:flex`. A diferença é que aqui o toggle é local e simples
(`ingSection.classList.toggle("is-open")` num único listener de clique no header, que também
atualiza o texto do rótulo), sem o draft-state/re-render completo que o modal usa — não se
aplica aqui porque é uma lista estática por receita, não múltiplas facetas recalculáveis. `<h4>
Ingredientes</h4>` (heading estático) continua substituído pelo próprio botão-cabeçalho do
acordeão.

MUDANÇA (Lista de Compras, Fase 1): a lista de ingredientes na tela de receita virou SÓ LEITURA
— não tem mais `<input type="checkbox">` nenhum (nem a classe `checklist` no `<ul>`, volta ao
marcador de bullet padrão de `.ingredients-list`). `Storage.toggleIngredient`/
`getCheckedIngredients`/`isIngredientChecked` e o campo `checkedIngredients` de
`cardapio-state-v2` foram REMOVIDOS por completo de storage.js (mesmo tratamento que "quero
fazer" recebeu antes) — marcar item como comprado só existe dentro da tela Lista de Compras
agora, chaveado por ingrediente (item+unit normalizado), não por receita.

### Multiplicador de porções (usa ingredientsStructured)

Na tela de receita, o "🍽 N porções" de `.recipe-page-meta` vira um controle interativo
(`.portion-stepper`: botões −/+ redondos de 30px + `<input type="number">` central + sufixo de
texto) sempre que `parseYieldBase` (app.js) consegue extrair uma base numérica segura do começo
do texto de `recipe.yield` — ex. "4 porções" -> base 4, sufixo "porções"; "4-6 porções" -> base 4
(primeiro número do intervalo), sufixo "porções", o "-6" nunca fica solto no sufixo. Formatos como
"≈ 500 ml", "Para 1 prato", "Conforme a peça" (o número não começa o texto, ou não existe) ficam
de fora de propósito — mostram o yield como sempre, sem controle, em vez de arriscar uma base
errada. Isso é uma decisão de escopo explícita, não uma limitação a corrigir depois.

Mudar o valor recalcula a lista de ingredientes ao vivo (`refreshIngredients()`, re-renderiza só o
`<ul class="ingredients-list">`, sem afetar o estado aberto/fechado do acordeão nem os checkboxes
já marcados — o estado marcado vem sempre do `Storage.getCheckedIngredients`, nunca do DOM
anterior, então sobrevive à re-renderização). A escala usa `recipe.ingredientsStructured` (Fase
2b) — só os campos verdadeiramente numéricos (`qty`, `qtyRange`) são multiplicados pela razão
`porçõesAtuais / porçõesBase`; `item`/`prep`/`alt`/`group` são texto livre e ficam INTOCADOS mesmo
quando contêm números (ex. "cerca de 4 cm de espessura" no prep) — escalar um número solto dentro
de texto livre arriscaria acertar a coisa errada. Itens sem `qty` nem `qtyRange` (ex. "sal a
gosto", referências cruzadas) nunca ganham um número inventado, em qualquer multiplicador.

Formatação do número escalado (`formatQty(value, unit)`) DEPENDE da unidade — corrigido depois de
constatar que a fração "bonita" universal fazia sentido pra utensílio marcado em fração mas não
pra peso/volume nem pra objeto discreto (ninguém fala "1/3 de grama" ou "2/3 de dente de alho"):
- xícara/colher-sopa/colher-cha (instrumento físico marcado em fração): fecha pra fração comum de
  cozinha (1/4, 1/3, 1/2, 2/3, 3/4, tolerância de 4%, número misto tipo "1 1/2" quando a parte
  inteira é maior que zero) quando a parte decimal bate de perto; fora disso cai pra 1 casa
  decimal com vírgula. Comportamento IDÊNTICO ao de antes desta correção, sem mudança nenhuma.
- grama/mililitro (unidade-base de peso/volume): sempre número inteiro, nunca fração, nunca casa
  decimal (ex. 66,67 g escalado vira "67 g", nunca "66 2/3 g" nem "66,7 g").
- quilograma/litro (múltiplo): sempre 1 casa decimal com vírgula (padrão PT-BR já usado no texto
  original, ex. "1,5 kg"), nunca fração (nunca "1 1/2 kg").
- Contagem (dente, folha, talo, fatia, ramo, pedaço, filé, fio, disco, fava, posta, pacote, lata,
  e qualquer item sem unidade mas com número, tipo "2 cebolas" — na prática, qualquer unidade que
  não caia nos 2 grupos acima): só aceita a fração 1/2 (ex. "1 1/2 dente" é aceitável); 1/3, 1/4,
  2/3 e 3/4 NUNCA aparecem pra objeto discreto — se não estiver perto de inteiro nem de meio,
  arredonda pro inteiro mais próximo (ex. alho 2 dentes × 0,33 -> "1 dente", não "2/3 dente").
`qtyRange` escala os dois extremos independentemente e junta com hífen (ex.
"8-10" x2 -> "16-20"), cada extremo passando pela MESMA regra por unidade acima. Unidade usa
`UNIT_DISPLAY` (mesmos ids canônicos do parser da Fase 2b) —
grama/quilograma/mililitro/litro viram abreviação sem plural (g/kg/ml/L); o resto (dente, xícara,
colher-sopa etc.) é substantivo contável com singular/plural escolhido pela quantidade escalada
arredondada (ex. "1 dente" vs "2 dentes"). Limitação explícita, não corrigida nesta rodada: o
substantivo do próprio `item` (ex. "cenouras") não se reconcilia gramaticalmente com a quantidade
escalada — só a unidade (quando existe) ganha esse tratamento; o schema não guarda uma forma
singular/plural separada pro nome do item.

Cada entrada de `ingredientsStructured` pode ter mais de um `items[]` (linha multi-item ou rótulo
de grupo "Para X:") — todos os itens da MESMA entrada são reconstruídos e juntados com "; " (ex.
"1 cebola, em pedaços; 2 cenouras, em pedaços; 1 talo de salsão, em pedaços"), preservando o
`group` como prefixo "Para {group}: " quando existir. Isso ainda ocupa 1 único `<li>`/checkbox
(mesmo índice do array `ingredients` original) — a granularidade de marcação continua por LINHA
original, não por item individual dentro dela.

Fallback obrigatório: se `recipe.ingredientsStructured` não existir pra alguma receita (não
deveria acontecer, as 398 já foram cobertas na Fase 2b), a linha cai pro `ing` (texto raw) sem
escalar, sem quebrar — testado forçando a ausência do campo em runtime.

Bug de dados encontrado e corrigido durante esta rodada (não é do multiplicador, é da Fase 2b):
linhas de ingrediente que juntam DUAS quantidades sem usar vírgula/" e "/travessão (os únicos
separadores que o classificador da Fase 2b reconhecia) nunca disparavam revisão manual — caíam no
bucket "confiante" como 1 item só, com a segunda quantidade colada dentro do texto do `item` ou do
`prep` (nunca virava um `qty` próprio, por isso nunca escalava). Duas rodadas de varredura no
acervo inteiro (2942 linhas):

1ª rodada — separador "+": regex `/\+\s*\d/` no campo `item`. 9 ocorrências em 8 receitas (Coq au
Vin, Espuma com Sifão, Carbonara, Béarnaise, Ovos en Meurette, Crème Caramel, Petit Gâteau, Bisque,
French Onion Soup), em 7 arquivos.

2ª rodada — varredura mais ampla pedida explicitamente (checar `;`, `/`, `+` em outras posições,
e qualquer padrão numérico repetido sem separador reconhecido): reaplicou o mesmo regex `+` mas
nos 4 campos (`item`/`prep`/`alt`/`group`, não só `item` — achou 4 casos onde o "+" tinha caído no
`prep`, não no `item`, por isso escaparam da 1ª rodada); scan de conectores de combinação
("dissolvido em", "hidratado em", "espetado com" etc. seguidos de número) achou mais 5 casos onde
a segunda quantidade nem usava vírgula nem "+"; scan bruto de contagem de dígitos (2+ números numa
linha, mais que o `items.length` atual) cobriu o resto e não achou nada novo além do já encontrado
pelos scans direcionados — usado só pra checar cobertura, não como fonte primária (produz muitos
falsos positivos de faixas de peso/tempo/tamanho em parênteses, ex. "(1,2-1,5 kg)", "por 8h",
que descrevem o MESMO item único, não um segundo item). 10 ocorrências novas em 10 receitas (Mapo
Tofu, Biryani, Risotto ai Funghi, Cassoulet, Blanquette de Veau, Arenque em Conserva/Sild, Vitello
Tonnato, Escargot, Polvo à Lagareiro, Risalamande), em 8 arquivos novos.

Total: 19 ocorrências em 18 receitas, 15 arquivos — todas corrigidas pra `items[]` separados (ou,
no caso de Arenque em Conserva, só a extração do `qty` que faltava no item primário — a segunda
metade já era uma alternativa "ou" legítima, tratada via `alt` como as outras ~155 linhas desse
tipo no acervo). Confirmado por rescan: 0 ocorrências de `+` residual em item/prep/alt/group, 0
conectores de combinação com `items.length` ainda em 1.

Casos revisados e propositalmente NÃO alterados (falso-positivo do scan, não bug): ~15 linhas com
alternativa "ou" que também têm uma quantidade dentro do próprio `alt` (ex. "50 g de tutano de boi
... ou 20 g de manteiga extra") — o `alt` nunca escala mesmo, é decisão de schema já testada, não
confundir com o bug acima. Também não alterado: a família "Suco de 1/2 limão" (9 ocorrências, 7
receitas) — a fração está no meio da frase, não é um separador de múltiplos itens (só 1
quantidade na linha), então fica fora do escopo desta varredura; registrado como limitação
conhecida separada, não corrigido nesta rodada.

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

Dentro, 9 seções em acordeão — País, Complexidade, Tempo, Equipamento, Proteína, Refeição,
Tipo de prato, Ingrediente, Papel da proteína (só em coleções de proteína) — cada uma com
contagem de opções no cabeçalho e um resumo do valor já selecionado, se houver. Três UIs de
multi-seleção coexistem:
- Complexidade, Tempo, Tipo de prato: lista de CHECKBOX (`accent-color: --color-accent`), com
  "Todos" como item especial no topo que, ao marcar, limpa a seleção daquela faceta — não soma
  com os demais valores. Os outros valores combinam em OR puro entre si (união). Tipo de prato
  (`dish_type:`, 12 valores) foi pra lista por ter muitos valores textuais — mesma regra que já
  orientou Equipamento (poucos/iconáveis) virar grade vs. Ingrediente (muitos) ficar em lista.
- País, Equipamento, Proteína, Refeição: grade de tiles (3 colunas, 2 em telas ≤380px) em
  vez de lista de checkbox (`renderTileSectionBody` em app.js, `def.layout === "tiles"`,
  reaproveitado pelas quatro facetas — só o ícone difere via `def.tileIcon(tagId)`, plugável
  por faceta). Cada tile: ícone em cima (se houver), label no meio, contagem embaixo em
  `--color-text-disabled` (mesmo token que as outras seções já usavam pra contagem —
  `--color-text-muted` não existe em DESIGN-TOKENS.md). Tile marcado ganha borda 2px
  `--color-accent`. Sem tile "Todos" — nenhum tile marcado = nenhum filtro ativo (equivalente
  ao "Todos" marcado da versão em lista). Mesma lógica de OR-união dos demais checkbox — só
  muda a apresentação.
  - Proteína (protein:, não confundir com "Papel da proteína" abaixo, que já existia e
    continua igual): 8 valores (Frango, Carne Bovina, Suíno, Aves, Cordeiro, Peixe, Frutos do
    Mar, Ovo), disponível em QUALQUER coleção/busca (renderCategory e renderBusca), não só
    dentro de um hub de proteína. MUDANÇA: "protein:X" agora significa "essa proteína está
    presente" (protagonista OU não), não só protagonista — passou a casar também com
    `contains:X` (`matchesTagId` em app.js: cai pro `contains:` correspondente se `protein:X`
    não bater direto; `facetOptionsFromPrefix` conta os dois lados, deduplicado por receita).
    Exemplo real verificado: dentro de Massas, Proteína=Suíno mostra Carbonara/Amatriciana/
    Tortellini/Agnolotti (guanciale/presunto/lombo presentes, mas nenhuma tem `protein:suino`
    — o protagonista ali é sempre "massa"). "Papel da proteína" (Principal/Secundário/Tanto
    faz, abaixo) é OUTRO mecanismo, via `getRecipesByCollection`/`matchesAnyTag` em
    tagmodel.js — não foi tocado; os números de lá (Principal 27, Secundário 43 no hub Suínos)
    continuam batendo exatamente como antes. `tileIcon:
    noIconTileIcon` — sempre devolve `""`, sem ícone nesta rodada (label+contagem só, mesmo
    tratamento que Processador/Sous Vide tiveram antes do ícone real; ícone fica pra rodada
    futura).
  - Refeição (`course:`, 5 valores: Prato Principal, Entrada, Acompanhamento, Sobremesa, Café
    da Manhã): cobertura de 161/398 receitas (40,5%). Mesmo `tileIcon: noIconTileIcon` (sem
    ícone nesta rodada) e mesma lógica OR/grade de Proteína.
  - "Tipo de prato" (`dish_type:`, 12 valores em uso) e "Restrições" (`diet:`) foram medidos
    juntos antes de implementar: `dish_type:` tinha cobertura de 166/398 (41,7%) e entrou nesta
    rodada; `diet:` tinha só 99/398 (24,9%) e um ÚNICO valor (`diet:vegetariana`) — abaixo do
    limiar combinado com o usuário (30%), NÃO entrou, fica pro backlog de expansão de dados.
  - País: ícone = EMOJI DE BANDEIRA (`COUNTRY_FLAG_EMOJI` em app.js, `country:*` -> caractere
    Unicode padrão, sem arquivo, sem licença). NÃO recolore por estado (emoji não herda
    `currentColor`) — a borda do tile já indica seleção sozinha, mesmo tratamento dos PNG de
    Equipamento (`.filter-tile__icon--emoji`, só `font-size`, sem regra de cor).
  - Equipamento: ícones reais em `icons/equipment/` (9 de 9 valores — todo tile tem ícone,
    TODOS SVG, nenhum PNG restante). 4 SVG de SVGRepo (forno, liquidificador, batedeira,
    micro-ondas) + 5 autorais (processador, sous vide, air-fryer, panela-de-pressao,
    churrasqueira — os 3 últimos eram PNG do Icons8 com `filter: invert(1)` como aproximação,
    substituídos por SVG real nesta rodada). Todos com `fill="currentColor"` no arquivo,
    injetados INLINE no DOM (não `<img src>`, senão currentColor não herda a cor do CSS).
    Recolorem com o estado do tile: `--color-text-disabled` parado, `--color-accent`
    selecionado — os 3 que eram PNG agora recolorem também, coisa que raster nunca conseguia
    fazer (limitação eliminada, não só contornada). O texto do SVG fica EMBUTIDO como string em
    `EQUIPMENT_SVG_MARKUP` (app.js) — não é carregado via `fetch()`. Motivo: um `fetch()` é
    assíncrono, e abrir o modal antes dele terminar (ex.: usuário indo direto no filtro logo
    após o app carregar) deixava o tile sem ícone até uma re-renderização tardia — bug real,
    confirmado por screenshot, corrigido eliminando o fetch por completo. Os arquivos em
    `icons/equipment/*.svg` continuam existindo como fonte/atribuição; o texto embutido é
    mantido idêntico a eles, ignorando espaço em branco entre tags (checagem antes de cada
    commit que tocar nisso). `.filter-tile__icon--png`/`EQUIPMENT_PNG_SRC` foram REMOVIDOS do
    CSS/app.js — não têm mais uso.
  - Créditos na tela de Minhas Receitas (buildIconCreditsEl em app.js): só SVG Repo agora (link
    de texto pra svgrepo.com), recomendado mas não obrigatório pela licença deles. Icons8 foi
    REMOVIDO por completo — os 3 PNG que exigiam essa atribuição viraram SVG autoral, nenhum
    ícone do app usa mais Icons8. Processador, Sous Vide, air-fryer, panela-de-pressao,
    churrasqueira e o ícone da aba Preparos são autorais (confirmado com o usuário) — sem fonte
    externa a creditar, não entram na lista de créditos.
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

## Feedback de pressão, hit-padding e acessibilidade (apple-design skill)

5 itens adotados da skill `apple-design` depois de um levantamento comparado com este
documento e com o DESIGN-TOKENS.md (nenhum toca em token/decisão existente — todos aditivos):

- Pressão instantânea (`:active`, `scale(0.97)` + opacidade ~0,85, 200ms ease-out — dentro do
  orçamento de 180–250ms já documentado) em `.primary-cta`, `.filter-modal__apply`,
  `.action-btn`, `.filter-trigger`, `.bottom-nav__tab` e `.recipe-card`. Antes desses 6, só
  existia 1 `:active` no CSS inteiro (`.portion-stepper__btn`, e só cor, sem escala). Fix do
  iOS Safari incluso (`js/app.js`, listener de `touchstart` vazio no `document`, registrado 1x
  no load): sem ele, `:active` não dispara em toque real nesse navegador, só com mouse.
- Hit-padding invisível (~10px) no coração do card (`.recipe-card__heart`, 32px) e nos botões
  +/- do portion-stepper (`.portion-stepper__btn`, 30px) via `::after` com `position:absolute;
  inset:-10px` — não muda o tamanho visual do ícone, não afeta layout (pseudo-elemento fora do
  fluxo). No portion-stepper o padding horizontal cai pra 3px (`inset: -10px -3px`) porque os 2
  botões ficam a 6px um do outro — 10px de cada lado se sobreporia e criaria ambiguidade de
  toque bem no meio dos dois.
- Saída do modal de filtro agora espelha a entrada: `closeModal` (`js/app.js`) não faz mais
  `overlay.remove()` direto — adiciona `.filter-modal--closing` (CSS: `@keyframes
  filter-modal-out`, reverso de `filter-modal-in`, mesmos 220ms) e só remove o overlay do DOM
  depois, via `setTimeout`. `overlay.style.pointerEvents = "none"` no início bloqueia cliques
  repetidos (Cancelar 2x, tocar no backdrop durante a saída) nesse intervalo.
- `@media (prefers-reduced-motion: reduce)`: a escala do Pressed vira só opacidade (sem
  `transform`); a entrada do modal perde a animação (aparece estática); a saída vira um
  cross-fade de opacidade sem o `translateY`. `closeModal` lê
  `matchMedia("(prefers-reduced-motion: reduce)")` e usa 200ms em vez de 220ms pro
  `setTimeout` (o valor não precisa bater 1:1 com a transição CSS, só não remover o overlay
  antes da hora).
- `@media (prefers-contrast: more)`: borda de `.recipe-card`, `.action-btn` e `.filter-trigger`
  reforçada pra 2px em `--color-text-secondary` — sem token de cor novo.
- Tracking negativo (`letter-spacing`) nos 2 maiores títulos do app: `#category-header h2`
  (-0.02em, ~32px) e `.recipe-page-title h2` (-0.015em, ~27px). O tracking positivo já usado
  em texto pequeno uppercase (subgroup-title, cat-chip etc.) não muda.

Ver docs/DESIGN-TOKENS.md (Tipografia, Grid e espaçamento, Estados, Animações, e a nova seção
Acessibilidade) pra essas 5 decisões como regra formal — não ficam só documentadas aqui.

## Critérios de aceite

- A home deve parecer limpa em telas de 360px a 430px.
- O usuário deve entender cada bloco em até 2 segundos.
- A listagem não deve parecer desktop adaptado.
- O usuário não deve ver 30 opções de filtro ao mesmo tempo.
- O fluxo deve reduzir indecisão, não aumentar.

Todo prompt de design/UI também precisa passar pelo checklist de Heurísticas de Nielsen em
`.claude/skills/product-navigation-ux/SKILL.md` (seção "Checklist de aceite — Heurísticas de
Nielsen") antes de ser considerado concluído.
