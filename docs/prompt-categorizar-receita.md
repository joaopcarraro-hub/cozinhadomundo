# Prompt para categorizar receitas novas — Cardápio Gastronômico

> Como usar: cole este documento inteiro numa conversa nova com o Claude, junto com a receita
> (nome, ingredientes, modo de preparo — pode ser bruto/informal). Peça pra ele devolver o
> objeto pronto no formato abaixo. Depois é só colar o resultado de volta pra mim, que eu insiro
> no arquivo certo e publico.
>
> Este arquivo é atualizado sempre que a lista de categorias ou de tags mudar — sempre use a
> versão mais recente dele (`docs/prompt-categorizar-receita.md` no repositório).

---

## Sua tarefa

Eu geralmente vou te mandar só o **nome do prato** (às vezes com o país/origem). A partir do nome,
você deve:
1. **Pesquisar a receita de verdade**, priorizando fontes confiáveis (site oficial de instituição
   culinária, livros/chefs reconhecidos, Wikipedia, sites especializados de receita bem
   estabelecidos) — não invente ingredientes/passos, e não misture receitas de pratos diferentes.
2. **Buscar uma foto do prato** — não precisa ser uma imagem licenciada/registrada nem nada formal,
   só uma URL de imagem pública que mostre o prato de verdade (ex.: Wikipedia/Wikimedia Commons,
   ou outra fonte de imagem direta) — é só pra ficar visual no site, não precisa se preocupar com
   direitos de uso.
3. Devolver um objeto JavaScript pronto, seguindo **exatamente** este formato e ordem de campos:

```js
{
  name: "Nome do Prato",
  subgroup: "Nome do subgrupo dentro da categoria (opcional, veja abaixo)",
  desc: "Uma frase curta e apetitosa descrevendo o prato — não repita o nome.",
  origin: "País ou região de origem (ex.: 'Itália (Roma)', 'Brasil', 'Ásia')",
  image: "https://url-direta-de-uma-foto-do-prato.jpg",
  time: { prep: "X min", cook: "Y min", total: "Z min" },
  yield: "N porções",
  difficulty: "Fácil" | "Média" | "Média-alta" | "Difícil",
  tags: ["protein:xxx", "ingredient:yyy"],
  ingredients: [
    "quantidade + ingrediente",
    "..."
  ],
  steps: [
    "Passo 1 detalhado.",
    "Passo 2 detalhado.",
    "..."
  ],
  tips: [
    "Dica útil 1.",
    "Dica útil 2."
  ]
}
```

Regras de conteúdo:
- Todos os campos são obrigatórios, exceto `subgroup` e `tips` (que podem ser omitidos se não
  fizerem sentido).
- `image` é obrigatório sempre que você encontrar uma foto real e confiável do prato — só deixe
  de fora se genuinamente não achar nenhuma imagem confiável (o site tem um fallback automático via
  Wikipedia pra esses casos, mas ele falha bastante pra pratos menos conhecidos, então é melhor já
  vir com a URL certa).
- `desc` é UMA frase, apetitosa, sem repetir o nome do prato.
- `ingredients` e `steps` devem ser completos, detalhados e fiéis à fonte pesquisada — nada de
  "modo de preparo resumido" nem passos inventados.
- NÃO adicione tags de `country:`, `dish_type:`, `course:`, `time:` ou `difficulty:` — essas são
  geradas automaticamente pelo site a partir da categoria e dos campos acima. Só adicione
  `protein:`, `contains:`, `ingredient:` e `diet:` (ver taxonomia abaixo).

## Em qual categoria colocar

Me diga também em qual arquivo/categoria a receita deve entrar, escolhendo desta lista atual
(formato `id — Nome exibido`):

**Fundamentos**
`molhos` — Molhos Clássicos · `sopas` — Sopas · `entradas-frias` — Entradas Frias ·
`entradas-quentes` — Entradas Quentes · `massas` — Massas · `risotos` — Risotos/Arroz (risoto) ·
`ovos-basicos` — Ovos Básicos · `ovos-classicos` — Preparações Clássicas com Ovos ·
`padaria` — Padaria · `sobremesas-classicas` — Sobremesas Clássicas ·
`contemporaneos` — Técnicas (prato clássico contemporâneo) ·
`tecnicas-contemporaneas-2` — Técnicas (técnica/componente avançado)

`contemporaneos` e `tecnicas-contemporaneas-2` aparecem juntos como uma única coleção "Técnicas"
no site — mas continuam sendo arquivos/catIds separados. Use `contemporaneos` pra um prato
pronto de cozinha contemporânea; `tecnicas-contemporaneas-2` pra uma técnica/componente/base
mais avançada e isolada (ex: esferificação, espuma, sous-vide). Mesma lógica pra `risotos`
(risoto de verdade) vs `arrozes` (outros pratos de arroz) — ambos aparecem juntos como
"Risotos/Arroz".

**Proteínas**
`aves` — Aves · `carnes-bovinas` — Carnes Bovinas · `cordeiro` — Cordeiro · `suinos` — Suínos ·
`peixes` — Peixes · `frutos-do-mar` — Frutos do Mar · `arrozes` — Risotos/Arroz (arroz, não-risoto)

**Brasil**
`brasileiros` — Brasileiros Obrigatórios · `brasil-regional` — Brasil por Região

**Cozinhas do Mundo**
`franca` `italia` `espanha` `portugal` `japao` `china` `coreia` `tailandia` `india` `mexico`
`peru` `alemanha` `austria` `hungria` `grecia` `marrocos` `libano` `eua` `dinamarca`

Se a receita não se encaixar em nenhuma categoria existente, me avise — pode ser hora de criar
uma nova (isso exige uma etapa extra de código, então sinalize em vez de forçar um encaixe ruim).

## Taxonomia de tags (protein:, contains:, ingredient: e diet:)

**protein:** — a proteína **protagonista** do prato, não qualquer proteína presente. Regra
importante (fonte de um bug já corrigido no site): se a carne/proteína é só um componente
secundário/de sabor — não o que define o prato — ela NÃO entra aqui, entra em `contains:` (abaixo).
Todo prato pode ter zero, uma ou várias tags `protein:`, mas só as que forem realmente centrais:
- `protein:frango` — frango especificamente (galinha, peito, coxa, sobrecoxa)
- `protein:ave` — outra ave que não frango (pato, peru)
- `protein:boi` — carne bovina
- `protein:suino` — porco **quando é o protagonista do prato** (ex.: Tonkatsu, Feijoada, Char Siu,
  Costelinha, Pernil assado) — NÃO use só porque tem bacon/pancetta/guanciale/presunto/linguiça
  como tempero ou componente secundário (isso é `contains:suino`, veja abaixo)
- `protein:cordeiro` — cordeiro/borrego/carneiro
- `protein:peixe` — peixe
- `protein:frutos-do-mar` — camarão, lula, polvo, mexilhão, marisco
- `protein:ovo` — só quando o ovo é o protagonista do prato (omelete, quiche) — NÃO use só porque
  tem ovo na massa/recheio de um bolo/pão
- `protein:leguminosa` / `protein:laticinio` — uso raro, só quando uma leguminosa (feijão, lentilha,
  grão-de-bico) ou um laticínio (queijo, iogurte) é claramente o foco proteico do prato (ex.: um
  prato de lentilhas como principal) — não use em todo prato vegetariano, só quando fizer sentido
  como "proteína protagonista"

Vegetarianos/veganos NÃO usam `protein:`, usam **dieta** (ver abaixo).

**diet:** — dieta/restrição, não é proteína:
- `diet:vegetariana` — sem nenhuma carne, ave, peixe ou fruto do mar (pode ter ovo/laticínio)
- `diet:vegana` — sem nenhum produto animal (nem ovo, nem laticínio, nem mel)

**contains:** — presença secundária de uma proteína que NÃO é o protagonista, mas ainda é útil
pra busca. Existe pra suíno, carne bovina, aves/frango, peixe, frutos do mar, cordeiro e ovo:
`contains:suino` `contains:boi` `contains:ave` `contains:frango` `contains:peixe`
`contains:frutos-do-mar` `contains:cordeiro` `contains:ovo`
- ex.: Carbonara → `contains:ovo` (o ovo é o molho, não o protagonista — o prato é de massa), Beef
  Wellington → `contains:suino` (presunto de Parma envolve o filé, mas o prato é de carne bovina),
  Boeuf Bourguignon → `contains:suino` (bacon é só um dos aromáticos do ensopado de carne bovina).
  Nesses três exemplos NÃO use `protein:suino`/`protein:ovo`.

Teste rápido pra decidir entre `protein:X` e `contains:X`: se você tirasse esse ingrediente da
receita, o prato ainda seria reconhecível com o mesmo nome? Se sim (Carbonara sem ovo ainda é
"uma carbonara", só que pior), é `contains:`. Se não (Tonkatsu sem porco deixa de ser Tonkatsu),
é `protein:`.

**ingredient:** — só quando o ingrediente é decisivo pra identidade do prato (não marque sal, água
ou óleo genéricos, a menos que sejam o protagonista):
`ingredient:ovo` `ingredient:tomate` `ingredient:queijo` `ingredient:arroz` `ingredient:batata`
`ingredient:mandioca` `ingredient:milho` `ingredient:feijao` `ingredient:berinjela`
`ingredient:cogumelo` `ingredient:abobora` `ingredient:pimentao` `ingredient:azeitona`
`ingredient:limao` `ingredient:coco` `ingredient:castanha` `ingredient:chocolate` `ingredient:cafe`
`ingredient:vinho` `ingredient:cerveja` `ingredient:mel` `ingredient:iogurte` `ingredient:espinafre`
`ingredient:ervilha` `ingredient:lentilha` `ingredient:grao-de-bico` `ingredient:amendoim`
`ingredient:molho-de-soja` `ingredient:brocolis`

NÃO marque `seasoning:alho`, `seasoning:cebola`, `seasoning:gengibre` nem `seasoning:curry` —
essas quatro tags existem, mas o site já deriva elas automaticamente a partir do texto de
`ingredients` (procurando "alho"/"cebola"/"gengibre"/"curry" como palavra inteira na lista de
ingredientes). Taguear à mão é redundante e não muda nada.

Não invente tags novas fora dessas listas. Se nenhuma tag decisiva se aplicar, devolva `tags: []`.

## Formato de saída

Para cada receita, devolva:
1. A categoria escolhida (`id`).
2. O objeto JS completo, pronto pra copiar e colar.

Se eu mandar várias receitas de uma vez, devolva uma por uma, agrupadas por categoria.
