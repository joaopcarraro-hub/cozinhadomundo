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

## Nova home (Bloco 2, Fase 2.2)

A home não mostra mais os 5 grupos macro diretamente. Mostra:
1. "Mais categorias" — entrada pequena, num canto, acima dos tiles — leva pro hub Fundamentos
   (#/grupo/fundamentos).
2. 4 tiles grandes: Massas, Proteínas, Navegar por Países, Sobremesas — cada um leva direto pra
   sua categoria/hub (Massas -> #/categoria/massas, Sobremesas -> #/categoria/sobremesas-classicas,
   Proteínas -> #/grupo/proteinas, Navegar por Países -> #/grupo/cozinhas).

Sem contador de progresso ("X de Y receitas já feitas") na home — removido (resíduo do sistema
antigo de tracking, redundante nesta tela).

Busca livre e os atalhos de Favoritos/Quero fazer/Histórico saíram da home — migram pra dentro
de "Minhas Receitas" (aba da barra inferior) num bloco futuro; a busca livre virou a aba
"Pesquisar" da barra inferior (reaproveita a rota #/busca já existente).

Tempo e Dificuldade continuam existindo como grupos/rotas próprios (#/grupo/tempo,
#/grupo/dificuldade) mas, neste bloco, sem link direto na home — só alcançáveis por URL direta
por ora.

Massas e Sobremesas Clássicas saíram da grade do hub Fundamentos (ficam só acessíveis via tile
da home) — a taxonomia/grupo delas pra efeito de busca escopada continua "Fundamentos", só a
exibição na grade que muda.

## Barra de navegação inferior

Fixa, 5 abas: Home, Pesquisar, Minhas Receitas, Preparos, Lista de Compras. Substitui o antigo
botão "Início" do topo (removido). Minhas Receitas/Preparos/Lista de Compras são
telas-placeholder por ora — só a navegação e o visual existem, conteúdo real vem em blocos
futuros.

## Páginas intermediárias

Cada grupo tem sua própria página (independente de estar linkada na home ou não).

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

Dentro de uma coleção (país, proteína, tempo, dificuldade, fundamentos), o refino é um MODAL
de filtros em acordeão (Bloco 3) — não mais uma barra sempre-visível. Um botão "Filtros" (com
badge de contagem de filtros ativos) fica no lugar de onde a barra ficava; abre um modal cheio
de tela com 6 seções em acordeão: País, Complexidade, Tempo, Equipamento, Ingrediente, Papel
da proteína (só em coleções de proteína). Cada seção mostra a contagem de opções no cabeçalho
e, se já tiver algo selecionado, um resumo (ex.: "Brasil", "2 selecionados"). Mudanças dentro
do modal ficam em RASCUNHO — só se aplicam de fato ao tocar "Ver resultados (N)" (N = contagem
ao vivo do resultado combinado); "Cancelar" fecha sem aplicar nada. "Limpar filtros" continua
existindo dentro do modal, só aparece quando há pelo menos 1 filtro ativo, mas NÃO aplica nem
fecha sozinho — zera só o RASCUNHO (todas as seções voltam a "Todos"/nenhuma selecionada,
rodapé recalcula pra contagem sem filtro) e mantém o modal aberto; o usuário ainda confirma em
"Ver resultados" ou desiste em "Cancelar", como qualquer outra mudança de faceta.

Cada seção só lista os valores presentes no resultado atual, com contagem, e nada vem
pré-selecionado (default = item "Todos" marcado). Duas famílias de multi-seleção coexistem, e
nenhuma vaza pra outra:
- País, Complexidade, Tempo, Equipamento: checkboxes com OR PURO entre os valores da MESMA
  faceta (união — ex.: País = Itália + Alemanha mostra receitas de qualquer um dos dois). Nunca
  zera ao adicionar mais um valor, então não tem fallback nenhum aqui. "Todos" é um item
  especial que, ao marcar, limpa a seleção daquela faceta (não é um valor que soma com os
  demais).
- Ingrediente: chips removíveis + campo de adicionar, com AND entre os selecionados (a receita
  precisa conter todos). Se a combinação zerar, a tela de RESULTADOS (não o modal) oferece um
  fallback pontual para OR — o modal não duplica essa UI, só deixa "Ver resultados" aplicável
  mesmo com N=0, pra cair nesse mesmo fallback.

ENTRE facetas diferentes (País × Equipamento × Ingrediente etc.) sempre é AND, mesmo quando
cada faceta individualmente é OR por dentro — ex.: País=Itália+Alemanha E Equipamento=Forno
mostra a interseção do OR de país com o equipamento, nunca OR entre tudo.

Proteínas usam uma seção extra, "Papel da proteína": Principal / Secundário / Tanto faz
(default). Isso substituiu o antigo conceito de abas "Foco da receita / Também leva / Todas".

## Critérios de aceite

- A home deve ficar curta.
- O usuário deve saber onde clicar.
- A busca contextual não deve misturar níveis.
- Categorias duplicadas devem ser eliminadas.
- Brasil deve entrar dentro de Cozinhas do mundo.
- Tempo e dificuldade devem existir como caminhos próprios.

## Checklist de aceite — Heurísticas de Nielsen

Todo prompt de design/UI a partir de agora deve ser avaliado contra esta lista antes de ser
considerado concluído — não é opcional, é parte do critério de "pronto".

1. **Visibilidade do status do sistema** — o usuário sempre sabe o que está acontecendo (contagem
   de receitas, filtros ativos, estado de carregamento), sem precisar adivinhar.
2. **Correspondência entre o sistema e o mundo real** — linguagem, ícones e fluxo usam os termos
   e a lógica de quem cozinha, não jargão técnico do sistema de tags.
3. **Controle e liberdade do usuário** — sempre existe uma saída clara (voltar, desfazer, limpar
   filtros) sem precisar recarregar a página ou navegar às cegas.
4. **Consistência e padrões** — o mesmo tipo de controle se comporta do mesmo jeito em toda a
   navegação (ex.: todos os dropdowns single-select funcionam igual, exceto Ingrediente, que é a
   exceção documentada e assumida).
5. **Prevenção de erros** — a interface evita que o usuário chegue a um estado inválido ou vazio
   sem explicação (ex.: o fallback OU do Ingrediente antes de simplesmente mostrar "0 receitas").
6. **Reconhecimento em vez de memorização** — opções e filtros ficam visíveis e com contagem, o
   usuário não precisa lembrar o que já selecionou em outra tela.
7. **Flexibilidade e eficiência de uso** — atalhos pra quem sabe o que quer (busca direta, tags
   clicáveis) sem obrigar todo mundo a passar pelo funil completo.
8. **Design estético e minimalista** — só mostra o que ajuda a decidir nesse momento; informação
   extra fica escondida até ser relevante (princípio anti-overwhelm já documentado acima).
9. **Ajudar o usuário a reconhecer, diagnosticar e se recuperar de erros** — mensagens de estado
   vazio ("Nenhuma receita com esses filtros") sempre vêm com uma ação clara pra sair do buraco,
   não só a constatação do problema.
10. **Ajuda e documentação** — quando a interface não é auto-explicativa, o texto de apoio
    (descrição do grupo/coleção, placeholder de busca) cobre a lacuna sem exigir manual.
