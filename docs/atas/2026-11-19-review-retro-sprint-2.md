# 📝 Ata – Sprint Review e Retrospectiva – Sprint 2

**Data:** 18 e 19/11/2026 · **Duração:** 40 min (Review: 20 min · Retrospectiva: 20 min) · **Facilitador(a):** Franciedson (Scrum Master)
**Presentes:** Franciedson (Scrum Master), Juan (Product Owner), Leonardo e Nikcael (Developers), com a professora na Review

## Pauta
1. Apresentação do que foi entregue na Sprint 2 (Review)
2. Feedback da professora
3. Retrospectiva: o que funcionou, o que não funcionou e o que mudar
4. Itens que passam para a Sprint 3

## Sprint Review

**Meta da Sprint:** CRUD de clientes completo (cadastrar, listar, consultar, atualizar e inativar), validado e pronto para apresentar.
**Resultado:** meta atingida. CRUD completo com HU01 a HU05 mescladas (HU05 em 19/11, validada pelo PO).

| # | Item | Responsável | Pts | Status | Entrega |
|---|---|---|---|---|---|
| HU01 | Cadastrar cliente | Leonardo | 3 | ✅ | PR #28 (mesclado 14/11) |
| HU02 | Listar clientes ativos | Nikcael | 2 | ✅ | PR #30 (mesclado 16/11) |
| HU03 | Consultar cliente pelo CPF | Nikcael | 2 | ✅ | PR #31 (mesclado 17/11) |
| HU04 | Atualizar dados do cliente | Leonardo | 3 | ✅ | PR #32 (mesclado 18/11) |
| HU05 | Inativar cliente | Nikcael | 3 | ✅ | PR #33 (mesclado 19/11) |
| T06 | Garantir integridade dos dados (CPF único e obrigatórios) | Leonardo | 2 | ⬜ | #16 |
| T07 | Escrever testes do CRUD de clientes | Leonardo e Nikcael | 3 | ⬜ | #17 |
| HU06 | Interface simples e responsiva (se sobrar tempo) | Leonardo e Nikcael | 3 | ⬜ | #15 |

**Pontos planejados:** 18 · **Pontos entregues:** 13 (5 de 8 itens)

**Feedback da professora:**
- _a preencher_

## Retrospectiva

| 🟢 Começar | 🔴 Parar | 🔵 Continuar |
|---|---|---|
| Revisar PR em até 24h (o #28 esperou 2 dias) | Começar HUs novas só no fim da sprint (HU05 abriu PR em 18/11; T06, T07 e HU06 não começaram) | Revisão cruzada com teste funcional antes do merge |
| Rodar `npm run lint` antes de abrir o PR | Deixar dias sem daily (14/11 sem registro) | Dailies detalhadas na #18 |
| Planejar pelo histórico de entrega (S1: 8 pts, S2: 13 pts) | Planejar acima da capacidade (18 pts) | PO revisando PR antes do merge |

## Decisões
- Itens não concluídos até 19/11 15h voltam para o Product Backlog e entram na Planning da Sprint 3.
- T06 (#16), T07 (#17) e HU06 (#15) não foram iniciadas e voltam para o Product Backlog.

## Ações
| Ação | Responsável | Prazo |
|---|---|---|
| Atualizar `docs/sprints/sprint-2.md` com status, dailies e resultado | Franciedson | 19/11 |
| Fechar a issue #19 e o milestone Sprint 2 | Franciedson | 19/11 |
| Planning da Sprint 3: itens pendentes e T08 (#20, apresentação) | Juan (PO) e equipe | 19/11 |