# 🗂️ Product Backlog

> **Produto:** Sistema de Gestão de Serviços da KG Refrigeração ([Documento de Visão](doc-visao.md)).
> **Escopo do projeto:** CRUD de **Clientes** (US01), entregue em 2 Sprints de 1 semana.
> Itens ordenados por prioridade. Estimativa em Story Points (Fibonacci).

## 📅 Cronograma da disciplina

| Etapa | Data | O que acontece |
|---|---|---|
| Product Backlog + Planning da Sprint 1 | 05/11 (em sala) | Backlog do produto (máx. 1h) e criação das issues da Sprint 1 |
| **Sprint 1** | 05/11 → **12/11 até 15h** | Desenvolvimento |
| Review e Retrospectiva da Sprint 1 | 11 e 12/11 (em sala) | Professora avalia os resultados; time faz a retrospectiva |
| Planning da Sprint 2 | 12/11 (em sala) | Criação das issues da Sprint 2 |
| **Sprint 2** | 12/11 → **19/11 até 15h** | Desenvolvimento |
| Review e Retrospectiva da Sprint 2 | 18 e 19/11 (em sala) | Professora avalia os resultados; time faz a retrospectiva |
| **Apresentação final** | 23 a 26/11 | Slides/PDF: backlogs, reviews, retrospectivas e CRUD rodando |

## 🏃 Sprint 1 · 05/11 a 12/11
**Meta:** projeto configurado, documentação entregue e cliente podendo ser cadastrado, listado e consultado.

| # | Item | Tipo | Pts |
|---|---|---|---|
| T01 | Definir papéis (Product Owner, Scrum Master, Developers) | tarefa | 1 |
| T02 | Definir a tecnologia do projeto (Next.js) e registrar no README | tarefa | 1 |
| T03 | Completar o Documento de Visão (`docs/doc-visao.md`): e-mails, papéis e competências | documentação | 2 |
| T04 | Revisar o Documento de Modelos (`docs/doc-modelos.md`) | documentação | 1 |
| T05 | Criar o projeto base em Next.js e a camada de repositório de clientes (persistência em JSON, pronta para trocar por banco depois) | tarefa | 3 |
| HU01 | Como **gerente**, quero **cadastrar um cliente** (CPF, nome, telefone, endereço), para centralizar seus dados | história | 3 |
| HU02 | Como **gerente**, quero **listar os clientes ativos**, para visualizar quem está cadastrado | história | 2 |
| HU03 | Como **gerente**, quero **consultar um cliente pelo CPF**, para encontrar seus dados rapidamente | história | 2 |
| C01 | Review e Retrospectiva da Sprint 1 (11 e 12/11) | cerimônia | — |

## 🏃 Sprint 2 · 12/11 a 19/11
**Meta:** CRUD de clientes completo, validado e pronto para apresentar.

| # | Item | Tipo | Pts |
|---|---|---|---|
| HU04 | Como **gerente**, quero **atualizar os dados de um cliente**, para manter as informações corretas | história | 3 |
| HU05 | Como **gerente**, quero **inativar um cliente** com confirmação, para remover cadastros sem perder o histórico | história | 3 |
| HU06 | Como **gerente**, quero uma **interface simples e responsiva**, para usar no computador e no celular | história | 3 |
| T06 | Garantir integridade: CPF único e campos obrigatórios validados na camada de serviço (RNF04) | tarefa | 2 |
| T07 | Escrever testes do CRUD de clientes | tarefa | 3 |
| C02 | Review e Retrospectiva da Sprint 2 (18 e 19/11) | cerimônia | — |

## 🎤 Apresentação final · 23 a 26/11

| # | Item | Tipo |
|---|---|---|
| T08 | Montar slides/PDF: backlog do produto, backlogs das sprints, reviews, retrospectivas e CRUD rodando | documentação |

## 💭 Backlog futuro (fora do escopo da disciplina)

| # | Item | Referência |
|---|---|---|
| F01 | Manter Funcionário | US02 / RF02 |
| F02 | Manter Agendamento, conflitos de horário e status | US03 / RF03 |
| F03 | Login e logout | US04 / RF04 |
| F04 | Integrar banco de dados (trocar a implementação do repositório) | Outra disciplina |
