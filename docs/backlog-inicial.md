# 🗂️ Product Backlog Inicial

> **Produto:** Sistema de Gestão de Serviços da KG Refrigeração. **Escopo deste projeto:** CRUD básico de **Clientes** (caso de uso *Manter Cliente* / RF01), entregue de forma incremental.
> Pontos em Story Points (Fibonacci). Prioridade definida pelo PO.

## 🧱 Sprint 0 · Preparação
**Meta:** equipe organizada, produto entendido e ambiente pronto para codar.

| # | Tarefa | Label |
|---|---|---|
| T01 | Definir papéis: PO, Scrum Master e Developers | `cerimônia` |
| T02 | Revisar e aprovar a Visão do Produto | `documentação` |
| T03 | Escolher a stack (linguagem, framework e banco de dados) | `tarefa` |
| T04 | Modelar a entidade Cliente (nome, CPF, telefone, endereço, status) | `tarefa` |
| T05 | Criar o projeto base e documentar como rodar no README | `tarefa` |
| T06 | Refinar e estimar as histórias da Sprint 1 | `cerimônia` |

## 🏔️ ÉPICO 1 · Gerenciamento de Clientes (CRUD) — RF01

| # | História de usuário | Critérios de aceitação | Pts | Sprint |
|---|---|---|---|---|
| HU01 | Como **gerente**, quero **cadastrar um cliente** com nome, CPF, telefone e endereço, para ter seus dados centralizados | Campos obrigatórios validados; CPF já cadastrado mostra aviso; mensagem de sucesso ao salvar | 3 | 1 |
| HU02 | Como **gerente**, quero **listar os clientes ativos**, para visualizar rapidamente quem está cadastrado | Lista mostra nome, CPF e telefone; apenas clientes com status "Ativo" | 2 | 1 |
| HU03 | Como **gerente**, quero **consultar um cliente pelo CPF**, para encontrar seus dados | Busca aceita só números; CPF inexistente mostra "Cliente não encontrado" | 2 | 1 |
| HU04 | Como **gerente**, quero **atualizar os dados de um cliente**, para manter as informações corretas | Abre a partir da consulta; valida obrigatórios; confirma a atualização | 3 | 2 |
| HU05 | Como **gerente**, quero **excluir (inativar) um cliente** com confirmação, para remover cadastros sem perder o histórico | Pede confirmação; altera status para "Inativo" (não apaga do banco); some da listagem | 3 | 2 |

## 🏔️ ÉPICO 2 · Qualidade e Entrega

| # | Item | Pts | Sprint |
|---|---|---|---|
| HU06 | Como **gerente**, quero uma **interface simples e que funcione no celular**, para usar o sistema em qualquer lugar (RNF05, RNF08) | 3 | 2 |
| T07 | Escrever testes para cadastro, consulta, atualização e inativação | 3 | 3 |
| T08 | Garantir integridade: CPF único e campos obrigatórios no banco (RNF04) | 2 | 3 |
| T09 | Atualizar documentação final e gerar a release **v1.0** | 2 | 3 |

## 💭 Ideias para o futuro (fora do escopo atual)
Itens do documento da empresa que **não** serão feitos agora, mas ficam registrados no backlog:
- Manter Funcionário (RF02)
- Manter Agendamento, conflitos de horário e status (RF03 a RF07)
- Login e senha (RF09)

## 📅 Resumo das Sprints

| Sprint | Meta | Pontos |
|---|---|---|
| Sprint 0 | Equipe, produto e ambiente prontos | — |
| Sprint 1 | Cadastrar, listar e consultar clientes | 7 |
| Sprint 2 | Atualizar e inativar clientes com interface responsiva | 9 |
| Sprint 3 | Testes, integridade dos dados e entrega da v1.0 | 7 |
