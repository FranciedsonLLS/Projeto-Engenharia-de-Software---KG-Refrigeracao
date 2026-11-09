# 💡 Visão do Produto

> Documento mantido pelo **Product Owner**. Baseado na proposta "Sistema de Informação para Gestão de Serviços da KG Refrigeração" (UFRN/CERES).

## Declaração de visão

**Para** a KG Refrigeração, empresa de instalação e manutenção de ar-condicionado e refrigeração em Caicó/RN,
**que** hoje controla clientes e serviços por anotações e WhatsApp,
**o** Sistema de Gestão de Serviços
**é um** sistema web
**que** centraliza o cadastro de clientes em um só lugar.
**Diferente de** registros informais e dispersos,
**nosso produto** garante dados organizados, consultáveis e sem duplicidade.

## Problema

- Informações de clientes espalhadas em anotações e mensagens.
- Dificuldade de encontrar dados rapidamente e risco de perda de informação.

## Usuário

| Persona | Descrição | Necessidade |
|---|---|---|
| **Gerente** (proprietário) | Cuida da gestão geral e do relacionamento com clientes | Cadastrar, consultar, atualizar e inativar clientes de forma rápida |

## Escopo deste projeto (MVP)

CRUD básico de **Clientes** (RF01 / caso de uso *Manter Cliente*):
- Cadastrar cliente (nome, CPF, telefone, endereço)
- Listar clientes ativos
- Consultar cliente por CPF
- Atualizar dados do cliente
- Excluir de forma lógica (status "Inativo")

## Requisitos não funcionais considerados

- **RNF04 Integridade:** CPF único e campos obrigatórios.
- **RNF05 Usabilidade:** interface simples e intuitiva.
- **RNF08 Compatibilidade:** funciona em computador e celular.

## Fora do escopo

Funcionários, agendamentos, controle de disponibilidade, envio de lembretes e login. Estão registrados em "Ideias para o futuro" no [backlog](backlog-inicial.md).
