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

Um botão "Limpar filtros" aparece na barra só quando há pelo menos 1 faceta ativa, resetando
todas de uma vez (heurística de Nielsen #3 — controle e liberdade do usuário).

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
