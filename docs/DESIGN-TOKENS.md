# Design Tokens — v3 (final), baseado no Design System v1.0 de vocês + marca oficial

> Substitui as versões anteriores. Base: o PDF "Design System v1.0" (dark theme), com 3 ajustes
> aplicados após confirmação: cor de ação atualizada pra bater com a marca real (logo/ícone
> medidos por pixel), separação entre creme de marca e creme de texto, e correção do Error
> (que ficaria perto demais do novo acento mais saturado). Fonte única de verdade visual —
> todo prompt de UI referencia este arquivo.

---

## Identidade de marca

Nome: **Gusta**. Tagline: "Da dúvida ao prato pronto." Assets: `logo_completa.png` (wordmark +
tagline) e `Simbolo_app.png` (ícone do app, fundo vermelho + símbolo "g" com coração e brilho).

## Paleta de cor

| Token | Valor | Origem/nota |
|---|---|---|
| `--color-bg` | `#0F0F0E` | PDF original |
| `--color-bg-secondary` | `#181816` | PDF original |
| `--color-surface` | `#232321` | PDF original |
| `--color-surface-elevated` | `#2E2D2A` | PDF original |
| `--color-border` | `#3B3935` | PDF original |
| `--color-text-primary` | `#F5F1EA` | PDF original — creme NEUTRO, uso em texto de corpo/volume |
| `--color-text-secondary` | `#C5BFB5` | PDF original |
| `--color-text-disabled` | `#8D877F` | PDF original |
| `--color-brand-cream` | `#FBEBD7` | **NOVO** — creme SATURADO da marca (medido do logo). Reservado pra momentos de marca (símbolo, splash futura), NUNCA texto de corpo — satura demais em volume |
| `--color-accent` (Tomate Assado) | `#D63B20` | **ATUALIZADO** — era `#B84C33` no PDF; agora é o vermelho real medido do ícone/logo. Única cor de ação/interação, por regra do próprio PDF ("apenas para ações") |
| `--color-accent-hover` | `#A33F2A` | PDF original — reavaliar contraste se o acento mudar de tom no futuro |
| `--color-success` | `#76945B` | PDF original |
| `--color-error` | `#E63950` | **ATUALIZADO** — era `#D24E47`, muito próximo do acento em matiz (8,3°, pior ainda depois do acento ficar mais saturado: 5,9°). Novo valor tem 16,9° de separação, mantém conotação de "vermelho de alerta", passa WCAG AA (4,63:1) |
| `--color-info` | `#5D87A8` | PDF original |
| `--color-accent-light` | `#D97A45` | ⚠️ **SEM REGRA DE USO DEFINIDA** — ver pendência abaixo |
| `--color-highlight` | `#D9A441` | ⚠️ **SEM REGRA DE USO DEFINIDA** — ver pendência abaixo |

## Tipografia
Inter (fallback SF Pro/Roboto). Display 34 Bold · H1 30 Bold · H2 24 Bold · H3 20 SemiBold ·
Body 16 Regular · Caption 14 Regular · Small 12 Regular.

## Grid e espaçamento
Base 8px: 4, 8, 12, 16, 24, 32, 40. Padding padrão de card: 16px. Margem lateral: 20px.

## Componentes
- Botão primário: fundo `--color-accent`, texto `--color-text-primary`, raio pill.
- Botão secundário: fundo `--color-surface`, borda `--color-border`.
- Ghost: texto `--color-accent` — **restrição de acessibilidade:** só usar em texto grande/
  semibold (18px+); em texto normal, contraste (3,76:1) falha WCAG AA.
- FAB circular, `--color-accent`.
- Cards: raio 20px.
- Inputs: fundo `--color-surface`, borda `--color-border`, foco `--color-accent`.
- Chips: fundo `--color-surface-elevated`, ícone de remover em `--color-accent`.
- Bottom Navigation: fundo `--color-bg-secondary`; ativo `--color-accent`; inativo
  `--color-text-disabled`.

## Ícones
Outline, espessura consistente, monocromático. Ativos `--color-accent`, inativos
`--color-text-disabled`.

## Estados
Hover `--color-accent-hover` · Pressed: leve redução de escala + `--color-accent-hover` ·
Disabled `--color-text-disabled` · Loading: `--color-accent` · Sucesso `--color-success` ·
**Erro: `--color-error` SEMPRE acompanhado de ícone — nunca só a cor, dado a proximidade de
matiz com o acento principal.**

## Animações
180–250ms, ease-out. Evitar excesso.

## Regras de UX (do PDF original)
`--color-accent` apenas para ações. Nunca mais de 1 CTA principal por tela. Fotos sempre
maiores que elementos gráficos. Filtros em acordeão. Categorias com ícones simples.

## Regras gerais
Interface nunca compete com as receitas. Consistência acima de criatividade. Todo componente
novo reutiliza token existente antes de criar cor/estilo novo.

---

## Pendências ainda em aberto

1. ~~`--color-accent-light` e `--color-highlight` sem regra de uso~~ — **RESOLVIDO:** reservadas,
   sem uso em nenhum componente por ora (nenhum componente do sistema atual pede uma 3ª/4ª cor
   de marca; ativar só se surgir necessidade concreta, com regra explícita na hora).
2. **Estrutura de Telas (seção 10 do PDF):** Onboarding/Perfil são visão de produto futura, não
   deste ciclo. "Minhas Receitas" deve voltar à lista completa (sumiu por engano). Não bloqueia
   nada — é só ajuste de registro no PDF de vocês, quando conveniente.

## Estados ainda sem design (natural nesta fase — desenhar ao construir o Bloco 2/3)
Distinção visual seleção única vs múltipla no filtro, toggle `##` (todos/qualquer um), estado
zero-resultado com fallback OR.
