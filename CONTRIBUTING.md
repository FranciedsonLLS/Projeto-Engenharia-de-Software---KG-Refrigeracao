# 🤝 Guia de Contribuição

## Fluxo de trabalho

1. Pegue uma issue da **Sprint atual** no board e atribua a si mesmo.
2. Mova o card para **🔨 Em andamento**.
3. Crie uma branch a partir da `main`:
   ```bash
   git checkout main && git pull
   git checkout -b tipo/numero-descricao-curta
   # ex.: feat/12-tela-de-login
   ```
4. Faça commits pequenos seguindo o padrão abaixo.
5. Abra um **Pull Request** usando o template e referencie a issue (`Closes #12`).
6. Mova o card para **👀 Em revisão** e peça revisão de um colega.
7. Após aprovação e checagem da [Definition of Done](docs/definition-of-done.md), faça o merge. O card vai para **✅ Concluído**.

## Padrão de branches

| Prefixo | Uso |
|---|---|
| `feat/` | Nova funcionalidade |
| `fix/` | Correção de bug |
| `docs/` | Documentação |
| `refactor/` | Refatoração sem mudar comportamento |
| `test/` | Testes |
| `chore/` | Configuração, build, tarefas gerais |

## Padrão de commits (Conventional Commits)

```
tipo(escopo opcional): descrição curta no imperativo

feat(login): adiciona validação de e-mail
fix(api): corrige erro ao salvar usuário
docs: atualiza ata da daily de 10/11
```

## Regras

- Nada vai direto para a `main`: sempre via Pull Request.
- Todo PR precisa de pelo menos **1 aprovação**.
- Toda tarefa precisa de uma issue antes de começar.
