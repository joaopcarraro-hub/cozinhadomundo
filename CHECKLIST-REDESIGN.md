# Checklist — Redesenho de busca + taxonomia

Acompanha o workstream de busca por texto/tag (investigação e implementação, iniciado
2026-07-24). Ver skill `.claude/skills/cooking-taxonomy-architect/SKILL.md` para as regras
formais derivadas deste trabalho.

## Fase 0 — Pacote 1: fixes na busca facetada existente

- [x] Filtrar tag morta na lista clicável de sugestões (`renderTagSuggestions`) — já existia
      só no handler de Enter; extraído helper `isLiveTag` reusado nos dois lugares.
- [x] `difficulty:dificil` revivida — `deriveDifficultyTag` mapeava só "difícil"/"média"/
      "fácil", mas o dado real usa "Alta"; coleção Avançadas estava vazia na home.
- [x] `cuisine:eua` revivida — `ORIGIN_COUNTRY_MATCHERS` só reconhecia "Estados Unidos" por
      extenso, mas `origin` usa a sigla "EUA".

## Fase 1 — Investigação de taxonomia (macarrão como subtipo, não sinônimo)

- [x] Varredura invertida do acervo (398 receitas) por termos recorrentes sem tag própria.
- [x] Diagnóstico do caso macarrão/massa e classificação de 20+ candidatos (subtipo /
      conceito ausente / ruído).
- [x] Prova de derivabilidade de cada candidato aprovado (whole-word + máscara de
      falso-amigo, mesma disciplina do dicionário existente).

## Fase 2 — Implementação da taxonomia

- [x] `ingredient:macarrao` criada (tier filter, 20 receitas) — sinônimo "macarrão" removido
      de `dish_type:massa`.
- [x] 15 tags só-busca (lowPriority) + 3 filter adicionais (laranja/maçã/rabanete) criadas.
- [x] Sinônimo-apenas: vitela→protein:boi, cheiro-verde→salsinha, caiena/gochugaru/ají
      amarillo→pimenta-chili (fecham gaps de derivação, não só de busca).
- [x] Sinônimos suínos (bacon/pancetta/guanciale/presunto/linguiça/toucinho) migrados pra
      fora de protein:suino/contains:suino, pras tags dedicadas.
- [x] Falso-amigo açafrão-da-terra/cúrcuma corrigido (`ff` em seasoning:acafrao).
- [x] Suíte `scripts/verify-taxonomy-2026-07-24.js` (63 asserções) — nenhuma tag nasceu
      morta, nenhuma tag existente perdeu receita sem justificativa, suíno intacto.

## Fase 3 — Parser da busca por texto (pendente)

- [ ] Decompor query em tags vivas + texto residual (word-boundary, stopwords PT).
- [ ] Resultado em dois blocos: filtrado por tag (com refinamento textual) + união textual
      pura, cobrindo buracos de taxonomia.
- [ ] Persistir estado de texto na URL (`q=`) via `Router.replace`, preservando "Voltar".
- [ ] Reavaliar as 4 queries de exemplo do dono do produto sobre a taxonomia enriquecida.
