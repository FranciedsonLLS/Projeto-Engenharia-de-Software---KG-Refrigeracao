# T07 — Relatório de Testes do CRUD de Clientes

**Projeto:** KG Refrigeração  
**Atividade:** T07 — Teste funcional do CRUD  
**Data de execução:** 24/11/2026  
**Etapa do projeto:** Sprint 3  
**Release:** Não definida  
**Branch:** `test/t07-teste-funcional-crud`

---

## 1. Identificação

| Informação | Descrição |
|---|---|
| Tipo de teste | Teste manual |
| Ambiente | Aplicação web em ambiente local |
| Persistência de dados | Arquivo JSON |
| Funcionalidades avaliadas | Cadastro, consulta, atualização e inativação de clientes |

### 1.2. Responsável pela execução dos testes

| Informação | Descrição |
|---|---|
| Nome | Nikcael Gildalte Lopes da Silva |
| Perfil no projeto | Desenvolvedor |
| GitHub | [github.com/nikcaellp](https://github.com/nikcaellp) |
| Responsabilidade | Planejamento, execução e registro dos testes funcionais do CRUD de clientes |
| Atividade relacionada | T07 — Teste funcional do CRUD |



## 2. Objetivo

Verificar o funcionamento das operações de gerenciamento de clientes do sistema KG Refrigeração, abrangendo cadastro, consulta por CPF, atualização e inativação.

Os testes também buscam avaliar o comportamento do sistema durante a execução dessas operações, identificando possíveis falhas e oportunidades de melhoria na validação dos dados e na usabilidade da aplicação.

## 3. Procedimentos e resultados

### CT01 — Cadastro de cliente

**Objetivo:** verificar se o sistema permite cadastrar um novo cliente.

**Dados de teste:**

| Campo | Exemplo |
|---|---|
| Nome | João da Silva |
| CPF | 587.590.191-82 |
| Telefone | (84) 99999-0000 |

**Procedimento executado:** preenchimento dos campos do formulário de cadastro e envio das informações.

**Resultado esperado:** o sistema deve cadastrar o cliente e disponibilizá-lo na listagem.

**Resultado obtido:** o cadastro foi realizado com sucesso, e o cliente foi disponibilizado na listagem.

**Status:** APROVADO.

### CT02 — Consulta por CPF

**Objetivo:** verificar se o sistema localiza corretamente um cliente a partir do CPF informado.

**Dados de teste:**

| Campo | Exemplo |
|---|---|
| CPF | 587.590.191-82 |
| Cliente esperado | João da Silva |

**Procedimento executado:** realização de uma consulta utilizando o CPF de um cliente previamente cadastrado.

**Resultado esperado:** o sistema deve localizar o cliente e apresentar suas informações cadastrais correspondentes ao CPF informado.

**Resultado obtido:** o sistema localizou o cliente e apresentou seus dados corretamente.

**Status:** APROVADO.

### CT03 — Atualização de dados

**Objetivo:** verificar se o sistema permite modificar as informações de um cliente previamente cadastrado.

**Dados de teste:**

| Campo | Informação original | Informação atualizada |
|---|---|---|
| Nome | João da Silva | João da Silva Santos |
| Telefone | (84) 99999-0000 | (84) 98888-0000 |

**Procedimento executado:** seleção de um cliente cadastrado, alteração de suas informações e salvamento das modificações.

**Resultado esperado:** o sistema deve salvar as alterações e apresentar os dados atualizados nas consultas posteriores.

**Resultado obtido:** a atualização foi realizada com sucesso, e os dados modificados foram apresentados corretamente.

**Status:** APROVADO.

### CT04 — Inativação de cliente

**Objetivo:** verificar se o sistema permite inativar um cliente sem remover fisicamente seu registro.

**Dados de teste:**

| Campo | Exemplo |
|---|---|
| Cliente | João da Silva Santos |
| CPF | 587.590.191-82 |
| Situação inicial | Ativo |
| Situação após a operação | Inativo |

**Procedimento executado:** seleção de um cliente ativo e execução da operação de inativação.

**Resultado esperado:** o cliente deve deixar de aparecer na listagem de clientes ativos, mantendo seu registro armazenado no arquivo JSON.

**Resultado obtido:** o cliente deixou de aparecer na listagem de ativos, mas seu registro permaneceu armazenado no arquivo JSON.

**Status:** APROVADO.

### CT05 — Consulta de cliente inativado

**Objetivo:** verificar se o registro de um cliente permanece disponível para consulta após sua inativação e se o sistema identifica corretamente seu estado.

**Dados de teste:**

| Campo | Exemplo |
|---|---|
| Cliente | João da Silva Santos |
| CPF | 587.590.191-82 |
| Situação esperada | Inativo |

**Procedimento executado:** realização de uma consulta utilizando o CPF de um cliente previamente inativado.

**Resultado esperado:** o sistema deve localizar o registro preservado e informar que o cliente está inativo.

**Resultado obtido:** o sistema localizou o cliente e apresentou corretamente seu status de inativo.

**Status:** APROVADO.

### CT06 — Cadastro com telefone duplicado

**Objetivo:** verificar o comportamento do sistema ao cadastrar clientes diferentes utilizando o mesmo número de telefone e DDD.

**Dados de teste:**

| Campo | Primeiro cliente | Segundo cliente |
|---|---|---|
| Nome | João da Silva | Maria Oliveira |
| CPF | 587.590.191-82 | 672.658.665-50 |
| Telefone | (84) 99999-0000 | (84) 99999-0000 |

**Procedimento executado:** cadastro de um cliente e tentativa de cadastrar outro utilizando o mesmo número de telefone e DDD.

**Resultado esperado:** verificar se o sistema permite ou impede a duplicidade, conforme a regra de negócio definida para o campo de telefone.

**Resultado obtido:** o sistema permitiu o cadastro de dois clientes diferentes utilizando o mesmo número de telefone e DDD.

**Status:** COMPORTAMENTO IDENTIFICADO — regra de negócio a definir.

## 4. Observações e oportunidades de melhoria

Durante a execução dos testes funcionais, foram identificados pontos relacionados à usabilidade e às regras de negócio que podem ser avaliados para aprimorar a aplicação.

### 4.1. Formatação do telefone

O campo de telefone não apresenta formatação automática durante o preenchimento, o que pode dificultar a leitura e a padronização das informações cadastradas.

**Melhoria sugerida:** implementar uma máscara de formatação automática, seguindo o padrão `(84) 99999-9999`, de acordo com a quantidade de dígitos informada.

### 4.2. Validação de telefones duplicados

Foi identificado que o sistema permite cadastrar clientes diferentes utilizando o mesmo número de telefone e DDD.

**Ponto a definir:** estabelecer se o número de telefone deve ser exclusivo para cada cliente. Caso a unicidade seja definida como regra de negócio, deverá ser implementada uma validação para impedir cadastros duplicados.

### 4.3. Preservação e identificação de clientes inativos

Os testes confirmaram que a inativação preserva o registro do cliente no arquivo JSON, retirando-o da listagem de ativos. Além disso, a consulta por CPF continua disponível e identifica corretamente o cliente como inativo.

**Resultado:** comportamento validado, sem necessidade de melhoria identificada neste cenário.

## 5. Resumo dos resultados

Foram executados seis casos de teste, abrangendo as principais operações do CRUD e verificações complementares relacionadas ao comportamento do sistema.

| Caso | Funcionalidade avaliada | Resultado |
|---|---|---|
| CT01 | Cadastro de cliente | APROVADO |
| CT02 | Consulta por CPF | APROVADO |
| CT03 | Atualização de dados | APROVADO |
| CT04 | Inativação de cliente | APROVADO |
| CT05 | Consulta de cliente inativado | APROVADO |
| CT06 | Cadastro com telefone duplicado | REGRA DE NEGÓCIO A DEFINIR |

**Síntese:** os cinco primeiros cenários apresentaram os resultados esperados. O sexto identificou um comportamento que depende da definição de uma regra de negócio sobre a utilização de números de telefone por diferentes clientes.

## 6. Conclusão

A execução dos testes permitiu verificar o funcionamento das principais operações de gerenciamento de clientes, incluindo cadastro, consulta, atualização e inativação. Nos cenários avaliados, essas funcionalidades apresentaram os comportamentos esperados.

Também foi validado o processo de inativação lógica, no qual os registros permanecem armazenados no arquivo JSON, deixam de aparecer na listagem de clientes ativos e continuam disponíveis para consulta, com a identificação de seu estado de inatividade.

Além dos resultados funcionais, os testes permitiram identificar oportunidades de aprimoramento na formatação do campo de telefone e levantar a necessidade de definir uma regra para o cadastro de números duplicados.

Dessa forma, a aplicação apresentou resultados satisfatórios nos cenários testados, com pontos específicos de usabilidade e regras de negócio que permanecem para avaliação da equipe.